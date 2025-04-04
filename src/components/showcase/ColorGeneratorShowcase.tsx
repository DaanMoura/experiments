import { Card } from "../Card";
import ColorPallete from "../ColorPallete";

// import { useState } from "react";

const ColorGeneratorShowcase = () => {
  // const [prompt, setPrompt] = useState("");
  return (
    <Card.Root>
      <Card.Title>Color Generator</Card.Title>
      <Card.Paragraph>
        Generate a color pallete based on the user prompt.
      </Card.Paragraph>
      <ColorPallete prompt="An orange color pallete for a delivery app" />
    </Card.Root>
  );
};

export default ColorGeneratorShowcase;
