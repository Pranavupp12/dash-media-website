import { Testimonials } from "@/components/nativesections/NativeTestimonials";
import { NativeToolkits } from "@/components/nativesections/NativeToolKits";
import { Faq } from "@/components/nativesections/Native-Faq";
import { NativeStrategySection } from "@/components/nativesections/NativeStrategySection";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Native Advertising Agency Services | Dash Media Solutions",
  description: "Strategize, create, and perform ongoing optimization. Our native advertising blends into premium editorial environments for better engagement and conversion.",
  keywords: ["Native Advertising Agency", "Sponsored Content Marketing", "Native Ads Campaign Management", "Paid Media Advertising Solutions", "Content-Driven Advertising Strategy", "Native Display Advertising Services"],
};

export default function NativeServicePage() {
  return (
    <>
    <NativeStrategySection/>
    <NativeToolkits/>
    <MarqueeSeparator/>
    <Testimonials/>
    <Faq/>
    </>
  );
}