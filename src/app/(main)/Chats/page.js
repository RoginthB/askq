"use client";
import { useRef, useState, useEffect } from "react";
import { ChatInput, ChatResponse } from "../components/chatsComp";

export default function ChatsSection() {
  const inputMessageref = useRef();
  const messagesEndRef = useRef(null);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isTyping]);

  const onSendMessage = async (e) => {
    e.preventDefault();

    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: chatMessages,
          message: userMessage.content,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: new Date().toISOString(),
      };

      setChatMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        assistantMessage.content += text;
        setChatMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { ...assistantMessage };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Failed to get response:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, something went wrong. Please try again later.",
        timestamp: new Date().toISOString(),
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage(e);
    }
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-6rem)] relative">
      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-4 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
        {chatMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400 dark:text-zinc-600 italic">
            <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 sm:text-3xl">
              Welcome to Ask<span className="text-yellow-300">Q</span>!
            </h1>
            <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
              Your AI-powered assistant is ready to help you with your questions.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-end min-h-full space-y-4 pt-4">
            {chatMessages.map((chatMessage, index) =>
              chatMessage.role === "user" ? (
                <div key={index} className="flex justify-end">
                  <ChatInput message={chatMessage.content} />
                </div>
              ) : (
                <ChatResponse key={index} message={chatMessage.content} />
              )
            )}
            {isTyping && (
              <div className="flex items-center space-x-2 p-4">
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="p-4 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 w-full z-50">
        <form
          className="relative max-w-3xl mx-auto w-full"
          onSubmit={onSendMessage}
        >
          <textarea
            ref={inputMessageref}
            onKeyDown={handleKeyDown}
            className="w-full p-3 pr-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border-none focus:ring-2 focus:ring-blue-500 resize-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-500"
            id="message"
            name="message"
            rows="1"
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Message AskQ"
            value={inputMessage}
            style={{ minHeight: "50px", maxHeight: "150px" }}
          ></textarea>
          <button
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="absolute bottom-3 right-3 p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
