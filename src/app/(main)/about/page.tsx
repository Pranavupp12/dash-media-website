import { AboutIntro } from "@/components/aboutsections/AboutIntro";
import { FoundersSection } from "@/components/aboutsections/FoundersSection";
import { AboutCompany } from "@/components/aboutsections/AboutCompany";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";


export default function AboutUsPage() {
  return (
    <>
      <AboutCompany/>
      <MarqueeSeparator />
      <AboutIntro />
      <MarqueeSeparator />
      <FoundersSection/>
    </>
  );
}