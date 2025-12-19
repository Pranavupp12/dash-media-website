
import { PpcStrategySection } from "@/components/ppcsections/PpcStrategySection";
import { Testimonials } from "@/components/ppcsections/PpcTestimonials";
import { PpcToolkits } from "@/components/ppcsections/PpcToolKits";
import { Faq } from "@/components/ppcsections/Ppc-Faq";

export default function PpcServicePage() {
  return (
    <>
    <PpcStrategySection/>
    <PpcToolkits/>
    <Testimonials/>
    <Faq/>
    </>
  );
}