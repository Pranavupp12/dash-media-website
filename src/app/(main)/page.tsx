
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { NewHero } from "@/components/sections/NewHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Leading Digital Marketing Agency | Dash Media Solutions",
  description: "Dash Media Solutions is a performance-driven digital marketing agency that offers customizable solutions to boost businesses' growth and online visibility.",
  keywords: ["Dash Media Solutions", "Digital Marketing Agency for Business Growth", "Performance-Driven Marketing Solutions", "SEO & Paid Advertising Experts"],
};

export default function Home() {
  return (
    <>
      <NewHero />
      <ClientLogos />
      <MarqueeSeparator />
      <ServicesSection />
      <Testimonials/>
      <BlogSection />
    </>
  );
}
