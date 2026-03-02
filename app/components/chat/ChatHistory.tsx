import { Sidebar } from "lucide-react";
import { Logo } from "../common/Logo";
import { HistoryBar } from "./HistoryBar";

export function Leftbar(){
    return (
        <div className="h-full w-1/4 bg-zinc-700/40 px-4 flex flex-col items-center justify-between">
            <div className="h-1/12 w-full pt-2 flex items-center justify-between border-b">
                <Logo />
                <Sidebar className="hover:bg-zinc-200/5 py-1.5 px-2 rounded-lg cursor-pointer" size={42} strokeWidth={2}/>
            </div>

            <div className="h-11/12 w-full pt-7 pb-5 overflow-hidden">
                <div className="h-full w-full flex flex-col gap-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <p className="text-sm font-semibold text-zinc-300/30">Today</p>
                    <HistoryBar />
                    <HistoryBar />
                    <HistoryBar />
                </div>
            </div>
        </div>
    )
}