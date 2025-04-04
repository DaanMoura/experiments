"use client";

import { Flex } from "$/jsx";
import AnimatedLoadingButton from "@/components/AnimatedLoadingButton";
import { Card } from "@/components/Card";
import { RotateCcw } from "lucide-react";
import { useState } from "react";

const AnimatedLoadingButtonShowcase = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onButtonClick = () => {
    setStatus("loading");
    setTimeout(() => {
      if (Math.random() < 2 / 3) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2000);
  };
  return (
    <Card.Root>
      <Flex gap={2} alignItems="center" justifyContent="space-between">
        <Card.Title>Animated Loading Button</Card.Title>
        <Card.RestartIcon
          onClick={() => setStatus("idle")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RotateCcw />
        </Card.RestartIcon>
      </Flex>
      <Card.Paragraph>
        Button shrinks into a spinning loader and changes to a check icon if
        success or cross icon if error. Click on the restart button to reset the
        state.
      </Card.Paragraph>
      <AnimatedLoadingButton onClick={onButtonClick} status={status}>
        Click me
      </AnimatedLoadingButton>
    </Card.Root>
  );
};

export default AnimatedLoadingButtonShowcase;
