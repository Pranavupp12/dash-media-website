import { AboutIntro } from "@/components/aboutsections/AboutIntro";
import { FoundersSection } from "@/components/aboutsections/FoundersSection";
import { AboutClientLogos } from "@/components/aboutsections/AboutClientLogos";
import { AboutCompany } from "@/components/aboutsections/AboutCompany";
//import { Faq } from "@/components/aboutsections/Faq";



export default function AboutUsPage() {
  return (
    <>
      <AboutCompany/>
      <AboutClientLogos/>
      <AboutIntro />
      <FoundersSection/>
      {/*<Faq/>*/}
    </>
  );
}