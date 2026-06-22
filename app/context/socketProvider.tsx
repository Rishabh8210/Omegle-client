"use client"

import { useState, useEffect } from "react"
import { io, Socket } from "socket.io-client"
import SocketContext from "./socketContext"
import { useRouter } from "next/navigation"

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null)

    const router = useRouter()

    const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token){
            router.push('/signin')
            return;
        };

        const socketInstance = io(`${BACKEND}/chat`, {
            auth: {
                token: token
            }
        });

        socketInstance.on("connect", () => {
            console.log("Connected:", socketInstance.id);
        });

        socketInstance.on("connect_error", (err) => {
            router.push('/signin')
            console.error("Connection error:", err.message);
        });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSocket(socketInstance);
            
        return () => {
            socketInstance.disconnect()
        }
    }, [BACKEND, router])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}