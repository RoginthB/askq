// import { useState } from "react/cjs/react.production";

import { ChatInput, ChatResponse } from "../components/chatsComp";



export default function ChatsSection() {
  //const [inputMessage, setInputMessage] = useState;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start pt-8 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="w-full text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 sm:text-3xl">
          Ask<span className="text-yellow-300">Q</span> </h1>
        <div className="mt-2 w-full text-zinc-600 dark:text-zinc-400 text-center  ">
          This is the Chats section where users can view and manage their chat
          history.
        </div>
        <div style={{scrollbarWidth: "thin", scrollbarColor:"gray black", padding:"0 2px"}} className="h-90 mt-8 mb-32 flex flex-col items-end pobm justify-items-end overflow-auto">

          <ChatInput message="React is a JavaScript " />
          <ChatResponse message="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components." />
          {/* <ChatInput message="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. " />
          <ChatResponse message="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons," /> */}


        </div>

        <div className="flex w-full  max-w-2xl mr-8 flex-col items-center justify-center pt-6 bg-white dark:bg-black sm:items-start fixed bottom-0">
          <div className="w-full relative">
            <textarea className="rounded-xl border bg-gray-900 p-2 mb-5 w-full text-zinc-600 dark:text-zinc-400" id="message" name="message" rows="3" placeholder="Message AskQ" cols="40">
            </textarea>
            <button className="absolute bottom-9 right-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
