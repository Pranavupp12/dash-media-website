import { SemStrategySection } from "@/components/semsections/SemStrategySection";
import { Testimonials } from "@/components/semsections/SemTestimonials";
import { SemToolkits } from "@/components/semsections/SemToolKits";
import { Faq } from "@/components/semsections/Sem-Faq";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovative Search Engine Marketing | Dash Media Solutions",
  description: "Our exceptionally skilled and experienced marketing managers strategically create and optimize campaigns with relevant keywords, positioning, and targeting.",
  keywords: ["Search Engine Marketing Service", "Boost Your Online Visibility", "comprehensive keyword research assistance"],
};

export default function SemServicePage() {
    return (
        <>
            <SemStrategySection />
            <SemToolkits />
            <MarqueeSeparator />
            <Testimonials />
            <Faq />
        </>
    );
}