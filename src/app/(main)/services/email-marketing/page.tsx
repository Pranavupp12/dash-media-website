import { EmailStrategySection } from "@/components/emailsections/EmailStrategySection";
import { Testimonials } from "@/components/emailsections/EmailTestimonials";
import { EmailToolkits } from "@/components/emailsections/EmailToolKits";
import { Faq } from "@/components/emailsections/Email-Faq";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Email Marketing Services | Dash Media Solutions",
  description: "Try our exceptional email marketing solutions to increase business sales. We've covered everything from email template design to targeted marketing strategies.",
  keywords: ["Boost Your Sales with Email Marketing", "Automated Email Marketing", "Tailored Email Marketing", "Improve Click-Through Rate"],
};

export default function EmailServicePage() {
  return (
    <>
    <EmailStrategySection/>
    <EmailToolkits/>
    <MarqueeSeparator/>
    <Testimonials/>
    <Faq/>
    </>
  );
}