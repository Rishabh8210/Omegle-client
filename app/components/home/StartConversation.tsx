import { Londrina_Solid } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const londrinaSolid = Londrina_Solid({
    subsets: ["latin"],
    weight: "400"
})


export function StartConversation(){
    return (
        <section className={`${londrinaSolid.className} px-3 py-10 flex flex-col gap-3 justify-center items-center`}>
            <h1 className="text-3xl text-center">Let&apos; start chatting with strangers</h1>
            <div className="flex w-full justify-around py-3">
                <Link 
                    href={"/chat"}
                    className="p-2 border flex items-center gap-1 justify-center rounded-lg"
                >
                    Stay Anonymous
                    <Image height={10} width={10} src={"/user.png"} alt="#" className="dark:invert w-5 top-0 left-0" />
                </Link>

                <Link 
                    href={"/login"}
                    className="p-2 border flex items-center gap-1 justify-center rounded-lg"
                >
                    Show Identity
                    <Image height={10} width={10} src={"/anonymous.png"} alt="#" className="dark:invert w-5 top-0 left-0" />
                </Link>
            </div>
        </section>
    )
}