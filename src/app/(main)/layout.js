import Link from "next/link"

export default function MainLayout({ children }) {

    const menuList = ["home", "history", "chat", "upload doc"]
    

    return (
        <>
            <div className="grid grid-cols-4 gap-1 min-h-dvh items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                {/* menu bar */}
                <div className="col-span-1  min-h-dvh bg-gray-950">

                    <div className="flex flex-row justify-between items-center p-2" >
                        <h1 className="w-full text-2xl font-bold text-start  text-zinc-800 dark:text-zinc-200 sm:text-3xl">
                            Ask<span className="text-yellow-300">Q</span> </h1>
                        <button className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-col ">
                        {
                            menuList.map((menu, index) => (<div key={index} className="px-5 py-2 rounded bg-gray-900 m-2 hover:scale-105 tran">
                                {menu.toUpperCase()}
                            </div>))
                        }
                    </div>
                </div>
                {/* main section */}
                <main className="col-span-3 flex min-h-dvh mx-auto flex-col items-center justify-center sm:px-2 lg:px-16 bg-white dark:bg-black sm:items-start">
                    {/* <h1 className="w-full text-2xl sticky top-0 font-bold text-center text-zinc-800 dark:text-zinc-200 sm:text-3xl">
                        Ask<span className="text-yellow-300">Q</span> </h1> */}
                    {children}
                </main>
            </div>
        </>
    )
}