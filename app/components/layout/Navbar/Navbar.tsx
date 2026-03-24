"use client"
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { rubikIso } from "./MobileMenu";
import { useState } from "react";

export function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    return (
        <>
            <nav className="flex w-full items-center p-3 relative">
                <div className="flex h-fit w-fit items-center dark:invert-100 shrink-0 ">
                    <Image 
                        src="/logo_lg.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="h-11 rounded-full w-auto"
                    />
                </div>
                <ul className={`${rubikIso.className} hidden md:flex w-full items-center justify-center gap-10`}>
                    <li className="text-lg lg:text-2xl font-semibold text-black/70 hover:text-black dark:text-white/50 dark:hover:text-white  hover:cursor-pointer hover:underline transition-transform">Home</li>
                    <li className="text-lg lg:text-2xl font-semibold text-black/70 hover:text-black dark:text-white/50 dark:hover:text-white hover:cursor-pointer hover:underline transition-transform">About Us</li>
                    <li className="text-lg lg:text-2xl font-semibold text-black/70 hover:text-black dark:text-white/50 dark:hover:text-white hover:cursor-pointer hover:underline transition-transform">FAQ</li>
                </ul>
                <div className={` md:hidden ${rubikIso.className} w-full flex justify-end`}>
                    <button onClick={() => setIsMenuOpen(prev => !prev)} className="text-4xl md:hidden font-extrabold active:rotate-180 cursor-pointer transition-all">£</button>
                </div>
            </nav>
            {isMenuOpen && <MobileMenu setTrigger={setIsMenuOpen}/>}
        </>
    )
}