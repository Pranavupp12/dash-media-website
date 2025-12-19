import { Testimonials } from "@/components/nativesections/NativeTestimonials";
import { NativeToolkits } from "@/components/nativesections/NativeToolKits";
import { Faq } from "@/components/nativesections/Native-Faq";
import { NativeStrategySection } from "@/components/nativesections/NativeStrategySection";



export default function NativeServicePage() {
  return (
    <>
    <NativeStrategySection/>
    <NativeToolkits/>
    <Testimonials/>
    <Faq/>
    </>
  );
}