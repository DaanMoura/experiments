import { Flex } from "$/jsx";
import { colorGeneratorResponseSchema } from "@/schemas/color-generation";

interface Props {
  prompt: string;
}

const ColorPallete = async ({ prompt }: Props) => {
  const response = await fetch(`/api/color-generator?prompt=${prompt}`);
  const data = await response.json();

  const { pallete } = colorGeneratorResponseSchema.parse(data);

  return (
    <Flex gap={2}>
      {pallete.map((color) => (
        <Flex key={color.hex} style={{ backgroundColor: color.hex }}></Flex>
      ))}
    </Flex>
  );
};

export default ColorPallete;
