//import Image from "next/image";

import Hero from "./(main)/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="w-full text-5xl font-bold text-zinc-800 dark:text-zinc-200 sm:text-6xl">
          Welcome to <span className="text-blue-600">AskQ</span>
        </h1>
        <div className="mt-10 w-full text-zinc-600 dark:text-zinc-400">
          AskQ is an AI powered Q&A application that leverages the power of
          large language models to provide accurate and relevant answers to your
          questions. Get started by asking a question below!
        </div>
        <div className="mt-10 w-full">

          <Link className="rounded-full bg-yellow-400 px-6 py-3 font-medium text-black hover:bg-yellow-500" href="/Chats">Get Started</Link>
          {/* <button className="rounded-full bg-yellow-400 px-6 py-3 font-medium text-black hover:bg-yellow-500">
            Get Started
          </button> */}
        </div>
      </main>
      
    </div>
  );
}
