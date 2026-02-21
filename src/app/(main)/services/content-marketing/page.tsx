import { Faq } from "@/components/contentsections/Content-Faq";
import { Testimonials } from "@/components/contentsections/ContentTestimonials";
import { ContentToolkits } from "@/components/contentsections/ContentToolKits";
import { ContentStrategySection } from "@/components/contentsections/ContentStrategySection";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Content Marketing Services—Dash Media Solutions",
  description: "Dash Media Solutions is a leading digital marketing agency that offers high-quality content marketing services to improve brand authority and visibility.",
  keywords: ["Expert Content Marketing Solutions", "SEO-based practices", "Improve Visibility in Search Engines", "Develop a Stronger Online Presence", "Organic Search Growth"],
}

export default function ContentMarketingServicePage() {
  return (
    <>
     <ContentStrategySection/>
     <ContentToolkits/>
      <MarqueeSeparator/>
      <Testimonials/>
      <Faq/>
    </>
  );
}