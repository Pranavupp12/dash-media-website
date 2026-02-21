
import { PpcStrategySection } from "@/components/ppcsections/PpcStrategySection";
import { Testimonials } from "@/components/ppcsections/PpcTestimonials";
import { PpcToolkits } from "@/components/ppcsections/PpcToolKits";
import { Faq } from "@/components/ppcsections/Ppc-Faq";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Services for Genuine Businesses | Dash Media Solutions",
  description: "Get your brand discovered faster with expert pay-per-click marketing services by Dash Media. Hire our professionals and boost your sales at an affordable cost.",
  keywords: ["Powerful Pay Per Click (PPC) solutions", "Effective Ads Campaigns", "High-Impact Social Advertising", "Boost Your Sales with Pay Per Click (PPC)"],
};

export default function PpcServicePage() {
  return (
    <>
    <PpcStrategySection/>
    <PpcToolkits/>
    <MarqueeSeparator/>
    <Testimonials/>
    <Faq/>
    </>
  );
}