import { NextRequest, NextResponse } from "next/server";
import { generateObject } from "ai";
import { openrouter, OpenRouterModel } from "@/ai/openrouter";
import {
  colorGeneratorRequestSchema,
  colorGeneratorResponseSchema,
} from "@/schemas/color-generation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const { prompt } = colorGeneratorRequestSchema.parse(
    Object.fromEntries(searchParams)
  );

  const result = await generateObject({
    model: openrouter.chat(OpenRouterModel.GeminiPro25Experimental),
    schema: colorGeneratorResponseSchema,
    prompt,
    system:
      "You are an AI especialized in color pallete generation. Based on the user prompt, generate a color pallete that best express the user's request. Use 7 colors on the color pallete array,if user doesn't especifies. The minimum array size is 3 and the maximum is 15. Colors must be in hex format (e.g. #FF0000).",
  });

  return NextResponse.json(result.object);
}
