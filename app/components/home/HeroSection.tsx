"use client"
import { Londrina_Outline, Rubik_Iso } from "next/font/google"
import { useState } from "react"

export const londrinaOutline = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

export function HeroSection(){
    const [ buttonTitle, setButtonTitle ] = useState('Text')
    return(
        <div className="w-full flex flex-col p-2 gap-5 py-7">
            <div className={`${londrinaOutline.className} overflow-hidden`}>
                <h1 className="text-7xl text-center font-semibold">TALK TO STRANGERS</h1>
            </div>
            <p className="text-center font-sans py-4 px-10">Use Omegle to get paired randomly with another person online to talk one-on-one</p>

            <div className="w-full h-12 flex items-center text-white overflow-hidden rounded-full p-1 bg-black relative">
                <button onClick={() => setButtonTitle('Video')} className={`z-10 h-full w-1/2 font-semibold font-sans text-lg rounded-full ${buttonTitle === 'Text' ? 'text-black' : 'text-white'}`}>
                    {buttonTitle === 'Text' ? buttonTitle : 'Text' }
                </button>
                <button onClick={() => setButtonTitle('Text')} className={`z-10 h-full w-1/2 font-semibold font-sans text-lg rounded-full ${buttonTitle === 'Video' ? 'text-black' : 'text-white'}`}>
                    {buttonTitle === 'Text' ? 'Video' : buttonTitle }
                </button>
                <div className={`absolute top-1 left-1  h-10 w-1/2 bg-white rounded-full transition-all duration-200 ${buttonTitle === 'Video' ? 'translate-x-[95%]' : ''} `}></div>
            </div>
        </div>
    )
}