import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyB8TIYXghXTlkVimxKWNyzzPupt4-0cX7s";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    console.log("Sending prompt:", prompt);
    const result = await chatSession.sendMessage(prompt);
    console.log("Raw result:", result);

    // Extract text content using the text() method
    const responseText = await result.response.text();
    console.log("Extracted text:", responseText);

    if (!responseText) {
      throw new Error("No text content in response");
    }

    return {
      candidates: [{
        text: responseText
      }]
    };

  } catch (error) {
    console.error("Error in run function:", error);
    throw error;
  }
}

export { run };