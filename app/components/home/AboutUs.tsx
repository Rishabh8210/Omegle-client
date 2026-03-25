import { Londrina_Solid } from "next/font/google"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})


export function AboutUs(){
    return (
        <section className="px-2 pt-2 pb-10 flex flex-col gap-3">
            <div className={`w-full flex items-center justify-center ${londrinaSolid.className}`}>
                <h2 className="text-5xl">About Us</h2>
            </div>
            <div className="text-center">
                <p>Loading...</p>
            </div>
        </section>
    )
}