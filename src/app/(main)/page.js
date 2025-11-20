"use client";
import Link from "next/link";

export default function HomePage() {
    const features = [
        {
            title: "Start Chat",
            description: "Interact with our advanced AI assistant to get instant answers.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                </svg>
            ),
            link: "/Chats",
            color: "bg-blue-50 dark:bg-blue-900/20",
        },
        {
            title: "View History",
            description: "Access your past conversations and continue where you left off.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            ),
            link: "/History",
            color: "bg-purple-50 dark:bg-purple-900/20",
        },
        {
            title: "Create RAG",
            description: "Upload documents to create a custom knowledge base for the AI.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                </svg>
            ),
            link: "/Rag",
            color: "bg-green-50 dark:bg-green-900/20",
        },
    ];

    return (
        <div className="w-full h-full p-8 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center sm:text-left">
                    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                        Welcome to Ask<span className="text-yellow-500">Q</span>
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Your intelligent AI companion. Ask questions, manage your history, and enhance your experience with custom knowledge bases.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Link
                            href={feature.link}
                            key={index}
                            className={`group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg ${feature.color}`}
                        >
                            <div className="mb-4 p-3 bg-white dark:bg-black rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-zinc-900 rounded-3xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-zinc-300 mb-6 max-w-xl">
                            Jump right into a conversation and experience the power of AI-driven assistance.
                        </p>
                        <Link
                            href="/Chats"
                            className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full transition-colors"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
                </div>
            </div>
        </div>
    );
}
