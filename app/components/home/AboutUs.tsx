import { Londrina_Solid, Londrina_Outline } from "next/font/google"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})

const londrinaOutline = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

export function AboutUs(){
    return (
        <section id="About" className="px-2 pt-2 pb-10 flex flex-col gap-3">
            <div className={`w-full flex items-center justify-center ${londrinaSolid.className}`}>
                <h2 className="text-5xl hover:underline cursor-pointer">About Us</h2>
            </div>
            <div className="text-center p-3 flex flex-col gap-3">
                <p className="text-justify font-sans font-semibold text-zinc-600 dark:text-white/40">We connect you instantly with real people from around the world. No signups, no profiles, no waiting. Just step in and start talking.</p>
                <p className="text-justify font-semibold">Stay Anonymous or Show Identity—it&apos;s up to you.</p>
                <div className={`${londrinaOutline.className}`}>
                    <h3 className="text-center font-extrabold text-2xl uppercase">Your chat. Your choice.</h3>
                </div>
                <p className="text-justify font-sans font-semibold text-zinc-600 dark:text-white/40">Every conversation is different—and that&apos;s the point. Start when you want. Leave when you want. No rules, just real moments.</p>
            </div>
        </section>
    )
}



// Your chat. Your choice.

// Stay Anonymous or Show Identity—it’s up to you.


// Keep it private, or be seen.
// Every conversation is different—and that’s the point.

// Start when you want. Leave when you want. No rules, just real moments.