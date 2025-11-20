import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export function ChatInput(props) {
    return (
        <div className="py-3 px-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tr-none max-w-[85%] mb-4 ml-auto">
            <p className="text-zinc-800 dark:text-zinc-200">{props.message}</p>
        </div>
    )
}

export function ChatResponse(props) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex gap-4 w-full mb-6">
            <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">AskQ</div>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                const language = match ? match[1] : "";
                                const codeString = String(children).replace(/\n$/, "");

                                if (!inline && match) {
                                    return (
                                        <div className="rounded-lg overflow-hidden my-4 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                            <div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                                                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                                                    {language}
                                                </span>
                                                <button
                                                    onClick={() => copyToClipboard(codeString)}
                                                    className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                                                >
                                                    {copied ? (
                                                        <>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                            </svg>
                                                            Copied
                                                        </>
                                                    ) : (
                                                        <>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                                                <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                                                                <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.379 6H4.5Z" />
                                                            </svg>
                                                            Copy
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={language}
                                                PreTag="div"
                                                customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.9rem' }}
                                                {...props}
                                            >
                                                {codeString}
                                            </SyntaxHighlighter>
                                        </div>
                                    );
                                }
                                return (
                                    <code className="bg-zinc-100 dark:bg-zinc-800 text-pink-500 rounded px-1 py-0.5 text-sm font-mono" {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {props.message}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
