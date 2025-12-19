import { AnimatedHero } from "@/components/ui/animated-hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Stats } from "@/components/sections/Stats";
import { ServicesSection } from "@/components/sections/ServicesSection";
//import { StrategySection } from "@/components/sections/StrategySection";
import { NewHero } from "@/components/sections/NewHero";
import { TeamSkills } from "@/components/sections/TeamSkills";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <NewHero />
      <ClientLogos />
      <TeamSkills />
      <Stats />
      <ServicesSection />
      {/*<StrategySection />*/}
      <Testimonials/>
      <BlogSection />
      <AnimatedHero />
    </>
  );
}
