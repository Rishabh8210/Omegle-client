"use client"
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Questions } from "@/app/constants/FAQ";
import { Londrina_Solid } from "next/font/google"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export function FAQ() {
    const [faqAccordian, setFaqAccordian] = useState(0)
    return (
        <section className="px-2 pt-2 pb-10 flex flex-col gap-3">
            <div className={`w-full flex items-center justify-center ${londrinaSolid.className}`}>
                <h2 className="text-5xl hover:underline cursor-pointer">FAQ</h2>
            </div>
            <div className="w-full flex flex-col p-1 gap-2">
                {
                    (Questions && Questions.length > 0) ? Questions.map((data, ind) => {
                        return (
                            <div key={ind} className="border-b border-dashed rounded p-2 drop-shadow gap-5 flex flex-col w-full">
                                <div onClick={() => setFaqAccordian(faqAccordian === ind ? -1 : ind)} className="flex items-center gap-2">
                                    <p className="font-semibold font-sans">{data.question}</p>
                                    <div className="transition-all cursor-pointer">
                                        {faqAccordian !== ind ? <Plus height={24} width={30} strokeWidth={2.5} /> : <Minus height={24} width={30} strokeWidth={2.5} />}
                                    </div>
                                </div>
                                <div className={`${faqAccordian !== ind ? 'hidden' : 'block'} transition-all`}>
                                    <p className="text-zinc-600 dark:text-white/40 font-sans text-sm font-semibold">{data.answer}</p>
                                </div>
                            </div>
                        )
                    }) : <p className="text-center text-zinc-600 dark:text-white/40 font-sans text-sm font-semibold">Not found</p>
                }
            </div>
        </section>
    )
}