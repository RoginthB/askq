export function ChatInput(props) {
    return (
        <div className="py-2 px-3 bg-zinc-900 rounded-md max-w-70">
            <p className="text-zinc-600 dark:text-zinc-400">{props.message}</p>
        </div>
    )
}

export function ChatResponse(props) {
    return (
        <div className="py-2 px-3 max-w-full">
            <div className="flex flex-row jusitiy-start item-center pb-2">
                <h6 className=" font-semibold text-xl ">AskQ</h6>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

            </div>
            <p className="text-zinc-600 dark:text-zinc-100">{props.message}</p>
        </div>
    )
}
