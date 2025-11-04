export default function ChatsSection() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="w-full text-5xl font-bold text-zinc-800 dark:text-zinc-200 sm:text-6xl">
AskQ        </h1>
        <div className="mt-10 w-full text-zinc-600 dark:text-zinc-400">
          This is the Chats section where users can view and manage their chat
          history.
        </div>
      </main>
    </div>
  );
}