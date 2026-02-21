import { SeoStrategySection } from "@/components/seosections/SeoStratergySection";
import { SeoToolkits } from "@/components/seosections/SeoToolkits";
import { Faq } from "@/components/seosections/Seo-Faq";
import { Testimonials } from "@/components/seosections/SeoTestimonials";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Best SEO Solutions with Proven Results—Dash Media Solutions",
  description: "Drive organic growth with the best SEO company. With years of expertise, Dash Media Solutions delivers higher rankings, quality leads, and lasting SEO success.",
  keywords: ["Search Engine Optimization", "SEO Management", "SEO Strategy Services", "Rank your content on search engines", "importance of SEO services"],
};

export default function SeoServicePage() {
  return (
    <>
      <SeoStrategySection/>
      <SeoToolkits/>
      <MarqueeSeparator/>
      <Testimonials/>
      <Faq/>
    </>
  );
}