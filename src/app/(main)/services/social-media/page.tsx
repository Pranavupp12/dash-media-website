import { Faq } from "@/components/socialsections/Social-Faq";
import { Testimonials } from "@/components/socialsections/SocialTestimonials";
import { SocialToolkits } from "@/components/socialsections/SocialToolKits";
import { SocialStrategySection } from "@/components/socialsections/SocialStrategySection";


export default function SocialMediaServicePage() {
  return (
    <>
      <SocialStrategySection/>
      <SocialToolkits/>
      <Testimonials/>
      <Faq/>
    </>
  );
}