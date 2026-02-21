
import { Faq } from "@/components/videosections/Video-Faq";
import { Testimonials } from "@/components/videosections/VideoTestimonials";
import { VideoToolkits } from "@/components/videosections/VideoToolKits";
import { VideoStrategySection } from "@/components/videosections/VideoStrategySection";
import { MarqueeSeparator } from "@/components/ui/marquee-separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leading Video Marketing Solution | Dash Media Solutions",
  description: "Dash Media Solutions provides top video marketing solutions that create engaging videos that boost visibility, conversions, and audience engagement online.",
  keywords: ["Video marketing solutions", "Transformative video strategy", "Increased Brand Awareness", "Engaging content creation", "Full-Scale Video Marketing"],
};

export default function VideoServicePage() {
  return (
    <>
    <VideoStrategySection/>
    <VideoToolkits/>
    <MarqueeSeparator/>
    <Testimonials/>
    <Faq/>
    </>
  );
}