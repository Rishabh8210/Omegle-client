import { FeatureBanner } from "./components/home/FeatureBanner";
import { HeroSection } from "./components/home/HeroSection";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureBanner />
    </>
  );
}
