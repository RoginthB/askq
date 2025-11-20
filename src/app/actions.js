"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getGeminiResponse(history, message) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not set in environment variables.");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Convert chat history to Gemini format
        // Gemini expects: { role: "user" | "model", parts: [{ text: "..." }] }
        const chatHistory = history.map((msg) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({
            history: chatHistory,
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I encountered an error while processing your request. Please check your API key and try again.";
    }
}
