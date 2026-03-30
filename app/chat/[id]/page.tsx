"use client"

import { Navbar } from "@/app/components/chat/Navbar";
import { ReceiverMessageBar } from "@/app/components/chat/ReceiverMessageBar";
import { SenderMessageBar } from "@/app/components/chat/SenderMessageBar";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";

interface Message {
    senderId: string
    receiverId: string
    message: string
}


export default function Chats( ){
    const [ allMessages, setAllMessages ] = useState<Message[]>([])
    
    const [ message, setMessage ] = useState('')

    function sendMessage(){
        allMessages.push({senderId: "1", receiverId: "3", message: message})
        setMessage('')
    }

    return (
        <section className="md:hidden h-screen max-h-screen flex flex-col justify-between w-full bg-white dark:bg-black">
            <Navbar />
            <div className="h-full overflow-y-auto overflow-x-hidden p-3 flex flex-col gap-5 bg-white/50 bg-blend-color-burn    bg-[url(/kitty_wallpaper.jpg)] dark:bg-black/50 dark:bg-blend-multiply dark:bg-[url(/chat_wallpaper.jpg)]">
                <SenderMessageBar />
                <ReceiverMessageBar />
            </div>
            <div className="w-full p-3 flex justify-between items-center gap-2">
                <input 
                    className="border border-black dark:border-white dark:text-white rounded py-1.5 px-2 font-sans w-full focus:outline-0 focus:border-blue-600"
                    type="text"
                    name="message"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}><SendHorizonal height={40} color="white" width={40} className="p-2 rounded-full cursor-pointer bg-green-500" /></button>
            </div>
        </section>
    )
}