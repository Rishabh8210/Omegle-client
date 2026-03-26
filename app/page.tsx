import { AboutUs } from "./components/home/AboutUs";
import { FAQ } from "./components/home/FAQ";
import { FeatureBanner } from "./components/home/FeatureBanner";
import { HeroSection } from "./components/home/HeroSection";
import { StartConversation } from "./components/home/StartConversation";
import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureBanner />
      <StartConversation />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  );
}
