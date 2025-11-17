// import { useState } from "react/cjs/react.production";
"use client";
import { use, useEffect, useRef, useState } from "react";

import { ChatInput, ChatResponse } from "../components/chatsComp";

export default function ChatsSection() {
  const inputMessageref = useRef();
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  // useEffect(() => {
  //   setChatMessages([...chatMessages, {
  //     id: (Date.now() + 1).toString(),
  //     role: "assistant",
  //     content: "This is a simulated response from AskQ for your message: " + inputMessage + "React is a JavaScript library for rendering user interfaces (UI). UI is built",
  //     timestamp: new Date().toISOString(),
  //   }])
  // }, [])
  const onSendMessage = () => {
    if (inputMessage.trim() === "") return;
    setChatMessages([...chatMessages, {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    }]);
    // for assitant response simulation
    setInputMessage("");
  }
  return (
    <>
      {chatMessages.length === 0 && (
        <div className="text-zinc-400 w-full text-center  dark:text-zinc-600 italic mt-4">
          <h1 className="w-full text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 sm:text-3xl">
            Welcome to Ask<span className="text-yellow-300">Q</span>!,
          </h1>
          <p className="mt-2 mx-auto text-zinc-600 dark:text-zinc-400 text-center  ">
            Your AI-powered assistant is ready to help you with your questions.
          </p>

        </div>
      )}
      <div style={{ scrollbarWidth: "thin", scrollbarColor: "gray black", padding: "0 2px" }} className="h-dvh flex flex-col items-end justify-items-end overflow-auto">

        {/* <ChatInput message="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. " />
          <ChatResponse message="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons," /> */}
        {chatMessages.map((chatMessage, index) => (
          (chatMessage.role === "user") ?
            <ChatInput key={index} message={chatMessage.content} /> :
            <ChatResponse key={index} message={chatMessage.content} />


        ))}
        <div className=" pt-6 sticky bg-white w-full dark:bg-black sm:items-start z-50 bottom-0">
          <div className="relative w-2xl mx-auto">
            <textarea ref={inputMessageref} className="rounded-xl border bg-gray-900 w-full p-2  text-zinc-600 dark:text-zinc-400" id="message" name="message" rows="3" onChange={(e) => setInputMessage(e.target.value)} placeholder="Message AskQ" value={inputMessage} cols="40">
            </textarea>
            <button onClick={onSendMessage}  className="absolute bottom-5 right-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>


    </>
  );
}
