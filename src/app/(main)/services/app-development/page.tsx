
import { AppDevStrategySection } from "@/components/appdevsections/AppDevStrategySection";
import { AppDevToolkits } from "@/components/appdevsections/AppDevToolKits";
import { Faq } from "@/components/appdevsections/Appdev-Faq";
import { Testimonials } from "@/components/appdevsections/AppdevTestimonials";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cutting-Edge App Development Service | Dash Media Solutions",
  description: "Dash Media is dedicated to providing prominent app development solutions for multiple OS that run on all platforms while remaining within your budget.",
  keywords: ["Mobile App Development Services", "Custom App Development Company", "Cross-Platform App Development", "Enterprise App Solutions", "UI/UX Mobile App Design"],
};

export default function AppDevServicePage() {
  return (
    <>
    <AppDevStrategySection/>
    <AppDevToolkits/>
    <MarqueeSeparator/>
    <Testimonials/>
    <Faq/>
    </>
  );
}