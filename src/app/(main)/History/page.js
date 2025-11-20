"use client";
import { useState } from "react";

export default function HistoryPage() {
    // Mock data for history
    const [historyItems, setHistoryItems] = useState([
        {
            id: "1",
            title: "React Components Explanation",
            date: "2024-05-20",
            summary: "Asked about how to create reusable components in React.",
        },
        {
            id: "2",
            title: "Next.js Routing",
            date: "2024-05-19",
            summary: "Inquiry regarding App Router vs Pages Router in Next.js 13+.",
        },
        {
            id: "3",
            title: "Tailwind CSS Tips",
            date: "2024-05-18",
            summary: "Requested best practices for structuring Tailwind classes.",
        },
        {
            id: "4",
            title: "JavaScript Closures",
            date: "2024-05-15",
            summary: "Explanation of closures and lexical scoping in JS.",
        },
        {
            id: "5",
            title: "API Integration",
            date: "2024-05-10",
            summary: "How to fetch data using Axios in a React application.",
        },
    ]);

    const handleClearHistory = () => {
        if (confirm("Are you sure you want to clear your history?")) {
            setHistoryItems([]);
        }
    };

    return (
        <div className="w-full h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                    Chat <span className="text-yellow-500">History</span>
                </h1>
                {historyItems.length > 0 && (
                    <button
                        onClick={handleClearHistory}
                        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
                    >
                        Clear History
                    </button>
                )}
            </div>

            {historyItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-zinc-500 dark:text-zinc-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-16 h-16 mb-4 opacity-50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="text-lg">No history found</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {historyItems.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-zinc-900 dark:border-zinc-800"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                    {item.title}
                                </h3>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                {item.summary}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
