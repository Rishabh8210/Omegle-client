import { Londrina_Solid } from "next/font/google";
import { Message } from "@/app/types/ChatMessage";

export const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export function SenderMessageBar( { msg }: Message ) {
    return (
        <div className="w-full flex justify-end">
            <div className={`${londrinaSolid.className} max-w-[80%] rounded-2xl rounded-tr-none bg-fuchsia-600 py-2 px-3 shadow-sm min-w-0`}>
                <p className="break-all text-white text-lg leading-tight">
                    {msg}
                </p>
            </div>
        </div>
    )
}