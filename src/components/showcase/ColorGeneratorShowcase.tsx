"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "../Card";
import ColorPallete from "../ColorPallete";
import { useMemo, useState } from "react";
import { colorGeneratorResponseSchema } from "@/schemas/color-generation";
import { Flex, styled } from "$/jsx";
import AnimatedLoadingButton, {
  AnimatedLoadingButtonStatus,
} from "../AnimatedLoadingButton";
import { Sparkles } from "lucide-react";

const PromptInput = styled("input", {
  base: {
    width: "100%",
    padding: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "zinc.100/12",
    color: "zinc.100",
    fontSize: "0.875rem",
  },
});

const fetchColors = async (prompt: string) => {
  const response = await fetch("/api/color-generator?prompt=" + prompt);
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  return colorGeneratorResponseSchema.parse(data);
};

const ColorGeneratorShowcase = () => {
  const [promptInput, setPromptInput] = useState("");
  const [prompt, setPrompt] = useState("");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["colors", prompt],
    queryFn: () => fetchColors(prompt),
    enabled: !!prompt,
  });

  const status: AnimatedLoadingButtonStatus = useMemo(() => {
    if (isLoading) return "loading";
    if (isError) return "error";
    if (isSuccess) return "success";
    return "idle";
  }, [isLoading, isError, isSuccess]);

  const colors = useMemo(() => data?.pallete ?? [], [data]);

  return (
    <Card.Root>
      <Card.Title>Color Generator</Card.Title>
      <Card.Paragraph>
        Generate a color pallete based on the user prompt.
      </Card.Paragraph>
      <Flex gap={3} alignItems="center">
        <PromptInput
          type="text"
          placeholder="Enter a prompt"
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setPrompt(promptInput);
            }
          }}
        />

        <AnimatedLoadingButton
          onClick={() => setPrompt(promptInput)}
          status={status}
          tiny
        >
          <Sparkles size={16} />
        </AnimatedLoadingButton>
      </Flex>
      {colors.length > 0 && <ColorPallete pallete={colors} />}
    </Card.Root>
  );
};

export default ColorGeneratorShowcase;
