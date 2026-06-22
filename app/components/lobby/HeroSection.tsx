"use client"

import { useSocket } from "@/app/hooks/useSocket"
import { Londrina_Solid, Londrina_Outline } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export const LondrinaOutline = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

export const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export function HeroSection() {
    const router = useRouter()
    const [chatId, setChatId] = useState('');
    const socket = useSocket()

    useEffect(() => {
        if(!socket) return;
        console.log(chatId)
        socket.emit('match', { type: "text"} )

        function handleMatchFoundEvent(data: {user1?:number, user2?: number, msg?:string, status?: string}) {
            if(data && data?.user1 && data?.user2){
                
                // console.log(`ChatId - ${data?.user1}-${data?.user2}`);
                setChatId(`${data?.user1}-${data?.user2}`)
                router.push(`/chat/${data?.user1}-${data?.user2}`)
                
                
                // router.push(`/chat/${chatId}`)
            } else if(data && data?.status === "queued"){
                console.log(data?.msg);
            }
        }

        socket.on('match-found', handleMatchFoundEvent) 

        return () => {
            socket.off('match-found', handleMatchFoundEvent)
        }

    }, [socket, router, chatId])


    // useEffect(() => {

    //     const timeoutId = setTimeout(() => {
    //         router.push(`/chat/${chatId}`)
    //     }, 5000)

    //     return () => clearTimeout(timeoutId)

    // }, [router])

    return (
        <div className="w-full flex flex-col justify-center items-center p-2 gap-10 py-7">
            <div className={`${LondrinaOutline.className} relative`}>
                <h1 className="text-7xl text-center font-semibold">LOBBY</h1>
                <div className="p-1 absolute -top-5 -rotate-z-12 -left-9 rounded-full bg-purple-200 overflow-hidden">
                    <Image
                        src="/izra.svg"
                        alt="HAPPY-FACE"
                        height={40}
                        width={40}
                    />
                </div>

                <div className="p-1 absolute top-12 rotate-3 right-0 rounded-full bg-pink-200 overflow-hidden">
                    <Image
                        src="/mary.svg"
                        alt="HAPPY-FACE"
                        height={40}
                        width={40}
                    />
               </div>

            </div>

            <div className={` ${londrinaSolid.className} w-full px-5 py-10 flex flex-col justify-between items-center gap-5`}>
                <div className="h-32 w-full bg-black/40 dark:invert p-5 flex justify-center items-center text-center font-sans font-semibold text-2xl rounded-2xl">
                    <h3>Me</h3>
                </div>

                <p className=" font-semibold text-xl">Matching</p>

                <div className="h-32 w-full bg-black/40 dark:invert p-5 flex justify-center items-center text-center font-sans font-semibold text-2xl rounded-2xl animate-pulse">
                    <h3>Anonymous</h3>
                </div>

            </div>
        </div>
    )
}