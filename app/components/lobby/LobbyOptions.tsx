"use client"

import { useState } from "react"
import Link from "next/link"

export function LobbyOptions(){

    const [error, setError] = useState('')

    return (
        <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center p-5 bg-black/45 z-100">
            <ul className="bg-white dark:bg-black dark:border-white dark:border w-full p-3 flex flex-col gap-2 justify-center items-center rounded">
                <li className="w-full flex justify-center items-center ">
                    <Link href={'/lobby'} className="text-2xl p-2 w-full hover:bg-black/25 text-center cursor-pointer">Text</Link>
                </li>

                <li className="w-full flex justify-center items-center">
                    <button onClick={() => {setError('* Comming soon')}} className="text-2xl p-2 w-full hover:bg-black/25 cursor-pointer">Audio</button>
                </li>

                <li className="w-full flex justify-center items-center">
                    <button onClick={() => setError('* Comming soon')} className="text-2xl p-2 w-full hover:bg-black/25 cursor-pointer">Video</button>
                </li>

                {error && <p className="text-xs text-red-600">{error}</p>}
            </ul>
        </div>
    )
}