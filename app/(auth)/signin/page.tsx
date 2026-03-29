"use client"
import { Londrina_Solid } from "next/font/google"
import { useState } from "react"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

export default function SignIn() {

    const [ email, setEmail ] = useState('')

    return (
        <section id="signin" className="h-screen w-full p-5 flex flex-col items-center justify-center gap-3">
            <div className={`w-full flex items-center justify-center ${londrinaSolid.className}`}>
                <h2 className="text-5xl hover:underline cursor-pointer">Sign-In</h2>
            </div>
            <form className="border w-full p-3 border-white rounded flex flex-col">
                <label htmlFor="emailInput">Email</label>
                <input 
                    id="emailInput"
                    type="text"
                    name="email"
                    value={email}
                    className="outline-0 focus-within:border-b border-red-500"
                    placeholder="e.g. johndoe@gmail.com"
                    onChange={() => setEmail('d')}
                />

                <label className="pt-5" htmlFor="passwordInput">Password</label>
                <input 
                    id="passwordInput"
                    type="text"
                    name="password"
                    value={email}
                    className=""
                    placeholder="e.g.****123"
                    onChange={() => setEmail('d')}
                />
                <button className="">SignIn</button>
            </form>
        </section>
    )
}