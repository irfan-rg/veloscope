import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Landing/HeroSection";
import StorySection from "@/components/Landing/StorySection";
import PartnersSection from "@/components/Landing/PartnersSection";
import StatsSection from "@/components/Landing/StatsSection";
import FooterSection from "@/components/Landing/FooterSection";
import ScrollProgress from "@/components/shared/ScrollProgress";
import CustomCursor from "@/components/shared/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <PartnersSection />
        <StatsSection />
        <FooterSection />
      </main>
    </>
  );
}
