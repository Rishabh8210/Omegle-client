"use client"
import { Londrina_Solid } from "next/font/google"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export default function SignIn() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const router = useRouter()

    const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

    const handleSubmitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!email || !password) {
            alert("Please enter valid user credentials")
        }
        try {
            const response = await fetch(`${BACKEND}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok || data?.statusCode === true) {
                // 1. Store the token for the SocketProvider to use
                localStorage.setItem('token', data?.data?.token);

                // 2. Redirect to the chat/main page
                // This moves the user into the Route Group where the SocketProvider lives
                router.push('/'); 
            } else {
                // Handle backend errors (e.g., "Invalid credentials")
                alert(data.message || 'Signin failed');
            }
        } catch (error) {
            console.error("Sign-in error:", error);
            alert("An error occurred. Please check if the server is running.");
        }

    }

    return (
        <section id="signin" className="h-screen md:hidden w-full py-5 px-3 flex flex-col items-center justify-center gap-3">
            <div className="w-full py-12 px-3 flex flex-col items-center border-white border-2 border-dashed rounded-xl">
                <div className={`w-full pb-10 flex flex-col items-center justify-center ${londrinaSolid.className}`}>
                    <h2 className="text-4xl hover:underline cursor-pointer">Sign in to</h2>
                    <h2 className="text-7xl hover:underline cursor-pointer bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Omegle</h2>
                </div>
                <form className="w-full p-2 rounded flex flex-col" onSubmit={handleSubmitForm}>
                    <div className={`w-full flex flex-col gap-2 ${londrinaSolid.className}`}>
                        <label className="text-xl" htmlFor="emailInput">Email address</label>
                        <input 
                            id="emailInput"
                            type="email"
                            name="email"
                            value={email}
                            className="text-lg font-extralight py-1 ring-1 ring-zinc-500 outline-0 rounded px-1.5 focus:ring-2 focus:ring-red-500"
                            placeholder="e.g. johndoe@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={`w-full flex flex-col gap-2 ${londrinaSolid.className}`}>
                        <label className="pt-5" htmlFor="passwordInput">Password</label>
                        <input 
                            id="passwordInput"
                            type="password"
                            name="password"
                            value={password}
                            className="text-lg font-extralight py-1 ring-1 ring-zinc-500 outline-0 rounded px-1.5 focus:ring-2 focus:ring-red-500"
                            placeholder="e.g.****123"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-full pt-7 flex items-center justify-center">
                        <button className={`${londrinaSolid.className} text-3xl py-2 px-7 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white`}>SignIn</button>
                    </div>
                </form>
            </div>
        </section>
    )
}