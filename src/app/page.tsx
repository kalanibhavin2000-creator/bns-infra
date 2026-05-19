import HeroSlider from "@/components/sections/HeroSlider";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyBNS from "@/components/sections/WhyBNS";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <FeaturedProjects />
      <ServicesSection />
      <WhyBNS />
      <ContactCTA />
    </>
  );
}
