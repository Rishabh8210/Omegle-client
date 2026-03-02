"use client"
import { useEffect, useState } from "react";
import { Navbar } from "../components/dashboard/Navbar";
import { Socket, io } from "socket.io-client";

export default function Chat() {
    const [connectedUsers, setConnectedUsers] = useState(0)
    const [users, setUsers] = useState({})
    const [match, setMatch] = useState("match")
    const [socket, setSocket] = useState<Socket | null>(null)

    function handleClick() {
        if(socket){
            console.log("Clickeddd");
            socket.emit('match', { type: "text"}) 
        }
        console.log(socket);
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        const newSocket: Socket = io('http://localhost:3001/chat', {
            auth: {
                token: token
            }
        }) 
        console.log(newSocket);

        newSocket.on('connect', () => {
            console.log("Socket connected", newSocket.id);
            setSocket(newSocket);
        })

        newSocket.on('live-count', (data) => {
            console.log("Active Users:", data);
            setConnectedUsers(data?.activeUsers)
        })

        newSocket.on('is-user-active', (data) => {
            console.log("User status:", data);
        })

        newSocket.on('match-found', (data) => {
            console.log("Match with:", data);
            if(data?.user1)
                setMatch("Matched")
        })

        newSocket.on('new-message', (data) => {
            console.log("New Message:", data);
        })

        return () => {
            newSocket.disconnect()
        }
    }, [])

    return (
        <div className="h-screen max-h-screen w-full flex flex-col px-5">
            <Navbar />
            <div className="py-5 flex h-fit w-full">
                <h1 className="text-lg font-semibold">Connected users: {connectedUsers}</h1>
            </div>
            <div className="h-fit w-full flex justify-between items-center">
                <div className="h-92 w-72 p-2 flex flex-col gap-4">
                    <div className="h-1/2 w-full flex justify-center items-center bg-slate-600">
                        <button onClick={handleClick} className="text-lg bg-red-400 rounded px-4 py-1.5 cursor-pointer font-semibold uppercase">{match}</button>
                    </div>
                    <div className="h-1/2 w-full bg-zinc-500">

                    </div>
                </div>
            </div>
        </div>
    )
}