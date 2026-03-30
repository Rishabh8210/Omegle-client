import { Londrina_Solid } from "next/font/google";

export const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export function ReceiverMessageBar() {
    return (
        <div className="w-full flex justify-start">
            <div className={`${londrinaSolid.className} max-w-[80%] rounded-2xl rounded-tl-none bg-zinc-800 py-2 px-3 shadow-sm min-w-0`}>
                <p className="break-all text-white text-lg leading-tight">
                    Hi, I am Rishabh. A 23 yr old developer working at TCS
                </p>
            </div>
        </div>
    )
}