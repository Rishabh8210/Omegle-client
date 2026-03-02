import { Communication } from "../components/dashboard/Communication";
import { Navbar } from "../components/dashboard/Navbar";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full max-w-full flex-col bg-white dark:bg-black px-5">
            <Navbar />
            <Communication />
        </div>
    )
}