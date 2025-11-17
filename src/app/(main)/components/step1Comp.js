import { GetInput } from "./inputComp";

export function Step1(props) {
    return (
        <div className="mb-8 h-full pb-6 bg-gray-950 border-2 p-5 rounded-xl w-full ">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">Upload the files </p>
            <GetInput />
        </div>
    )
}
