import { Faq } from "@/components/websections/Web-Faq";
import { WebStrategySection } from "@/components/websections/WebStrategySection";
import { Testimonials } from "@/components/websections/WebTestimonials";
import { WebToolkits } from "@/components/websections/WebToolKits";



export default function WebDesignServicePage() {
  return (
    <>
     <WebStrategySection/>
     <WebToolkits/>
     <Testimonials/>
     <Faq/>
    </>
  );
}