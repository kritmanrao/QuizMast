import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function POST(req) {
  try {
    const { prompt, quantity, difficulty } = await req.json();

    const systemInstruction = `
You are a quiz generator.

STRICT RULES:
- Return ONLY valid JSON
- No explanation
- No markdown
- Exactly ${quantity} questions
- Each question must have 4 options
- correctOption must be index (0-3)

Format:
{
  "title": "String",
  "questions": [
    {
      "question": "String",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctOption": Number
    }
  ]
}
`;

    const userPrompt = `Generate a ${difficulty} difficulty quiz about: ${prompt}. Total questions: ${quantity}.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const results = JSON.parse(
      response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim(),
    );

    return Response.json(results);
  } catch (error) {
    console.error(error);

    return Response.json({
      title: "Error Quiz",
      questions: [
        {
          question: "Failed to generate quiz",
          options: ["Retry", "Check API", "Error", "Unknown"],
          correctOption: 0,
        },
      ],
    });
  }
}
