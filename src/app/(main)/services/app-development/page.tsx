
import { AppDevStrategySection } from "@/components/appdevsections/AppDevStrategySection";
import { AppDevToolkits } from "@/components/appdevsections/AppDevToolKits";
import { Faq } from "@/components/appdevsections/Appdev-Faq";
import { Testimonials } from "@/components/appdevsections/AppdevTestimonials";

export default function AppDevServicePage() {
  return (
    <>
    <AppDevStrategySection/>
    <AppDevToolkits/>
    <Testimonials/>
    <Faq/>
    </>
  );
}