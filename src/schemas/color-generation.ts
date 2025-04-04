import { z } from "zod";

export const colorGeneratorRequestSchema = z.object({
  prompt: z.string().min(1),
});

export const colorGeneratorResponseSchema = z
  .object({
    pallete: z
      .array(
        z.object({
          name: z.string().describe("Color name"),
          description: z.string().describe("Color description"),
          hex: z.string().describe("Color hex value"),
        })
      )
      .min(3)
      .max(15)
      .describe("Color pallete array"),
  })
  .describe("Color pallete");
