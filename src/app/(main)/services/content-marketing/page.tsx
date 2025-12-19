import { Faq } from "@/components/contentsections/Content-Faq";
import { Testimonials } from "@/components/contentsections/ContentTestimonials";
import { ContentToolkits } from "@/components/contentsections/ContentToolKits";
import { ContentStrategySection } from "@/components/contentsections/ContentStrategySection";



export default function ContentMarketingServicePage() {
  return (
    <>
     <ContentStrategySection/>
     <ContentToolkits/>
      <Testimonials/>
      <Faq/>
    </>
  );
}