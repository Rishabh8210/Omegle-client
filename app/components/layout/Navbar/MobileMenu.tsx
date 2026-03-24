import { Rubik_Iso, Londrina_Outline } from "next/font/google"

export const rubikIso = Rubik_Iso({
    subsets: ["latin"],
    weight: "400"
})

export const londrinaOutline = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

type MobileMenuProps = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

export function MobileMenu({ setTrigger }: MobileMenuProps) {
    return (
        <nav className="h-screen md:hidden p-3 w-full absolute top-0 left-0 bg-white dark:bg-black z-100 select-none">
            <div className={`w-full ${rubikIso.className} flex justify-end p-1`}>
                <button onClick={() => setTrigger(prev => !prev)} className="text-4xl font-extrabold active:rotate-180 transition-all cursor-pointer ">X</button>
            </div>
            <ul className={`w-full ${rubikIso.className} flex justify-center items-center py-16 flex-col gap-8`}>
                <li className="text-5xl select-none active:underline active:text-6xl hover:cursor-pointer text-center font-semibold font-stretch-200% transition-all">Home</li>
                <li className="text-5xl select-none active:underline active:text-6xl hover:cursor-pointer text-center font-semibold font-stretch-200% transition-all">About Us</li>
                <li className="text-5xl select-none active:underline active:text-6xl hover:cursor-pointer text-center font-semibold font-stretch-200% transition-all">FAQ</li>
            </ul>
        </nav>
    )
}