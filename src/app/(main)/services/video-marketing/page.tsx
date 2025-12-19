
import { Faq } from "@/components/videosections/Video-Faq";
import { Testimonials } from "@/components/videosections/VideoTestimonials";
import { VideoToolkits } from "@/components/videosections/VideoToolKits";
import { VideoStrategySection } from "@/components/videosections/VideoStrategySection";


export default function VideoServicePage() {
  return (
    <>
    <VideoStrategySection/>
    <VideoToolkits/>
    <Testimonials/>
    <Faq/>
    </>
  );
}