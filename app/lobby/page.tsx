import { Navbar } from "../components/layout/Navbar"
import { HeroSection } from "../components/lobby/HeroSection"

export default function Lobby(){
    return (
        <div className="md:hidden overflow-hidden">
            <Navbar />
            <HeroSection />
        </div>
    )
}