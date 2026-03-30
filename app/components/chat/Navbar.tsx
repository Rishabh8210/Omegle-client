import Image from "next/image";

export function Navbar() {
    return (
        <nav className="h-fit flex w-full p-3 shadow dark:shadow-white/20 items-center justify-between">
            <div className="flex h-fit w-fit items-center dark:invert-100 shrink-0 ">
                <Image
                    src="/logo_lg.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="h-10 rounded-full w-auto"
                />
            </div>

            <button className="px-4 py-1.5 font-sans dark:border-white dark:text-white font-semibold rounded border-black border hover:text-white hover:bg-red-600/80 dark:active:bg-red-600/50 transition-all dark:hover:bg-red-600/50 cursor-pointer">End chat</button>
        </nav>
    )
}