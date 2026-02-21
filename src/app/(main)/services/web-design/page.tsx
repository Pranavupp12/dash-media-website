import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Faq } from "@/components/websections/Web-Faq";
import { WebStrategySection } from "@/components/websections/WebStrategySection";
import { Testimonials } from "@/components/websections/WebTestimonials";
import { WebToolkits } from "@/components/websections/WebToolKits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revolutionary Web Design Solutions by Dash Media Solutions",
  description: "Get a high-performance, SEO-friendly website with Dash Media’s web design solutions. Custom and responsive designs to grow your business. Contact us today!",
  keywords: ["Custom Website Design Services", "Responsive Web Design Agency", "SEO-Friendly Website Development", "UI/UX Web Design Experts", "Business Website Design Solutions"],
};

export default function WebDesignServicePage() {
  return (
    <>
     <WebStrategySection/>
     <WebToolkits/>
     <MarqueeSeparator/>
     <Testimonials/>
     <Faq/>
    </>
  );
}