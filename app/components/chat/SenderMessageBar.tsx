import { Londrina_Solid } from "next/font/google";

export const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export function SenderMessageBar() {
    return (
        <div className="w-full flex justify-end">
            <div className={`${londrinaSolid.className} max-w-[80%] rounded-2xl rounded-tr-none bg-fuchsia-600 py-2 px-3 shadow-sm min-w-0`}>
                <p className="break-all text-white text-lg leading-tight">
                    Hi, I am Rishabh. A 23 yr old developer working at TCS
                </p>
            </div>
        </div>
    )
}