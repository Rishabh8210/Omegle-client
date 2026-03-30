import { Navbar } from "../components/layout/Navbar"
import { HeroSection } from "../components/lobby/HeroSection"

export default function Lobby(){
    return (
        <div className="overflow-hidden">
            <Navbar />
            <HeroSection />
        </div>
    )
}