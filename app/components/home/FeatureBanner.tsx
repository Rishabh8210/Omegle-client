"use client"
import { CircleAlert, CircleUserRound, Globe, VideoIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Variants } from "framer-motion";
import { useSocket } from "@/app/hooks/useSocket";
import { useEffect, useState } from "react";

const marqueeVariants: Variants = {
  animate: {
    x: [0, -650],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export function FeatureBanner() {

    const socket = useSocket()
    const [ connectedUsers, setConnectedUsers ] = useState(30000);

    useEffect(() => {        
        if(!socket) return;

        function handleLiveCountEvent(data: {activeUsers: number}) {
            setConnectedUsers(data?.activeUsers)
        }

        socket.on('live-count', handleLiveCountEvent)

        return () => {
            socket.off('live-count', handleLiveCountEvent);
        };

    }, [socket])

    return (
        <div className="overflow-hidden flex-nowrap relative py-5">
            <div className="absolute top-0 left-0 h-full bg-linear-to-r dark:invert from-white to bg-transparent z-10 w-14"></div>
            <motion.div
                className="flex py-3 px-5 gap-5"
                variants={marqueeVariants}
                animate="animate"
            >
                <div className="flex gap-5 h-16 shrink-0 p-5 items-center border rounded-lg cursor-pointer">
                    <CircleUserRound height={30} widths={30} strokeWidth={2.5} className="h-12 shrink-0" />
                    <h1 className="text-md font-semibold">Chat Anonymously</h1>
                </div>

                <div className="flex gap-5 h-16 shrink-0 p-5 items-center border rounded-lg cursor-pointer">
                    <CircleAlert height={30} widths={30} strokeWidth={2.5} className="h-12 shrink-0" />
                    <h1 className="text-md font-semibold">Must be 18+</h1>
                </div>

                <div className="flex gap-5 h-16 shrink-0 p-5 items-center border rounded-lg cursor-pointer">
                    <Globe height={30} widths={30} strokeWidth={2.5} className="h-12 shrink-0" />
                    <h1 className="text-md font-semibold">{connectedUsers}+ online now</h1>
                </div>

                <div className="flex gap-5 h-16 shrink-0 p-5 items-center border rounded-lg cursor-pointer">
                    <VideoIcon height={30} widths={30} strokeWidth={2.5} className="h-12 shrink-0" />
                    <h1 className="text-md font-semibold">Videos are monitored</h1>
                </div>
            </motion.div>
            <div className="absolute top-0 right-0 h-full bg-linear-to-l dark:invert from-white to bg-transparent z-10 w-14"></div>
        </div>
    )
}