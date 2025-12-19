import { SemStrategySection } from "@/components/semsections/SemStrategySection";
import { Testimonials } from "@/components/semsections/SemTestimonials";
import { SemToolkits } from "@/components/semsections/SemToolKits";
import { Faq } from "@/components/semsections/Sem-Faq";


export default function SemServicePage() {
    return (
        <>
            <SemStrategySection />
            <SemToolkits />
            <Testimonials />
            <Faq />
        </>
    );
}