import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function summarizeEmail(content: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Summarize the following email content in 2-3 concise sentences. 
    Focus on identifying any urgency, key questions, action items, or deadlines mentioned.
    Email Content: "${content}"
    Summary:
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error summarizing email with Gemini:", error);
    return "Could not generate summary.";
  }
}
