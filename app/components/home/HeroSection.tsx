"use client"
import { Londrina_Outline, Rubik_Iso } from "next/font/google"
import { useState } from "react"
import Image from "next/image"

export const londrinaOutline = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

export function HeroSection(){
    const [ buttonTitle, setButtonTitle ] = useState('Text')
    return(
        <div className="w-full flex flex-col justify-center items-center p-2 gap-5 py-7">
            <div className={`${londrinaOutline.className} relative`}>
                <h1 className="text-7xl text-center font-semibold">TALK TO STRANGERS</h1>
                <div className="p-1 absolute -top-5 -rotate-z-12 left-3 rounded-full bg-purple-200 overflow-hidden">
                    <Image 
                        src="/izra.svg"
                        alt="HAPPY-FACE"
                        height={50}
                        width={50}
                    />
                </div>
                
                <div className="p-1 absolute -top-4 rotate-3 right-0 rounded-full bg-pink-200 overflow-hidden">
                    <Image 
                        src="/mary.svg"
                        alt="HAPPY-FACE"
                        height={50}
                        width={50}
                    />
                </div>


                {/* <Image 
                    src="/happy_fm.svg"
                    alt="HAPPY-FACE"
                    height={40}
                    width={40}
                    className="absolute top-14 -rotate-12 -left-9 h-8"
                /> */}

                <div className=" absolute top-29 rotate-12 left-5 rounded-full bg-red-300">
                    <Image 
                        src="/krishna-white.svg"
                        alt="HAPPY-FACE"
                        height={40}
                        width={50}
                    />
                </div>


                <div className="p-.5 absolute top-10 -rotate-12 right-30 rounded-full bg-green-200">
                    <Image 
                        src="/mathew.svg"
                        alt="HAPPY-FACE"
                        height={40}
                        width={40}
                    />
                </div>

                {/* <Image 
                    src="/happy_fm.svg"
                    alt="HAPPY-FACE"
                    height={40}
                    width={120}
                    className="absolute top-12 rotate-6 -right-9 h-6"
                /> */}

            </div>
            <p className="text-center font-sans py-4 px-10">Use Omegle to get paired randomly with another person online to talk one-on-one</p>

            <div className="w-4/5 h-12 flex items-center text-white overflow-hidden rounded-full p-1 bg-black relative">
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