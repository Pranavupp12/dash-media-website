import { Faq } from "@/components/socialsections/Social-Faq";
import { Testimonials } from "@/components/socialsections/SocialTestimonials";
import { SocialToolkits } from "@/components/socialsections/SocialToolKits";
import { SocialStrategySection } from "@/components/socialsections/SocialStrategySection";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Dash Media Solutions",
  description: "Experience the best social media marketing services by Dash Media Solutions. Digitally mesmerize your audience with our effective content and creatives.",
  keywords: ["Social Media Marketing", "Social Media Community Management & Growth", "Social Media Marketing Agency"],
};

export default function SocialMediaServicePage() {
  return (
    <>
      <SocialStrategySection/>
      <SocialToolkits/>
      <MarqueeSeparator/>
      <Testimonials/>
      <Faq/>
    </>
  );
}