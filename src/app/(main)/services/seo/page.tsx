import { SeoStrategySection } from "@/components/seosections/SeoStratergySection";
import { SeoToolkits } from "@/components/seosections/SeoToolkits";
import { Faq } from "@/components/seosections/Seo-Faq";
import { Testimonials } from "@/components/seosections/SeoTestimonials";

export default function SeoServicePage() {
  return (
    <>
      <SeoStrategySection/>
      <SeoToolkits/>
      <Testimonials/>
      <Faq/>
    </>
  );
}