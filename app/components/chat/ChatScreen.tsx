import { Send } from "lucide-react";

export function ChatScreen(){
    return (
        <div className="h-full w-[40%] flex flex-col justify-between border-l border-zinc-700/40 p-5">
            <div className="h-[6%] w-full">
                <select className="border rounded p-1 outline-0">
                    <option>English</option>
                    <option>German</option>
                    <option>French</option>
                    <option>Hindi</option>
                </select>
            </div>

            <div className="h-[87%] w-full ">

            </div>

            <div className="h-[7%] w-full rounded border flex justify-between items-center px-5 bg-zinc-700/10">
                <input type="text" placeholder="Type new message" name="input-msg" className="text-lg text-zinc-300/80 w-10/12 p-0 outline-0" />
                <Send className="hover:bg-zinc-200/10 p-2 cursor-pointer rounded-lg" size={38} />
            </div>
        </div>
    )
}