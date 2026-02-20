import { SeoStrategySection } from "@/components/seosections/SeoStratergySection";
import { SeoToolkits } from "@/components/seosections/SeoToolkits";
import { Faq } from "@/components/seosections/Seo-Faq";
import { Testimonials } from "@/components/seosections/SeoTestimonials";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";

export default function SeoServicePage() {
  return (
    <>
      <SeoStrategySection/>
      <SeoToolkits/>
      <MarqueeSeparator/>
      <Testimonials/>
      <Faq/>
    </>
  );
}