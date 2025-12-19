import { EmailStrategySection } from "@/components/emailsections/EmailStrategySection";
import { Testimonials } from "@/components/emailsections/EmailTestimonials";
import { EmailToolkits } from "@/components/emailsections/EmailToolKits";
import { Faq } from "@/components/emailsections/Email-Faq";





export default function NativeServicePage() {
  return (
    <>
    <EmailStrategySection/>
    <EmailToolkits/>
    <Testimonials/>
    <Faq/>
    </>
  );
}