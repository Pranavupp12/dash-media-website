'use client';

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ... (Keep your servicesData array exactly as it is) ... 
const servicesData = [
  {
    title: "SEO Services",
    description: "Improve website visibility by attracting organic visitors from search engine results.",
    imageSrc: "/images/services/seo.png",
    href: "/services/seo",
    gradient: "bg-gradient-to-br from-accent/70 to-accent/40",
    accent: "text-blue-700"
  },
  {
    title: "Web Design",
    description: "Professional UI/UX & design to ensure user functionality and engagement.",
    imageSrc: "/images/services/web-dev.png",
    href: "/services/web-design",
    gradient: "bg-gradient-to-br from-primary/80 to-primary/40",
    accent: "text-cyan-700"
  },
  {
    title: "Content Marketing",
    description: "Develop a strategic approach to deliver valuable, relevant, and consistent content.",
    imageSrc: "/images/services/content-marketing.png",
    href: "/services/content-marketing",
    gradient: "bg-gradient-to-br from-teal-50 to-teal-100",
    accent: "text-teal-700"
  },
  {
    title: "Social Media",
    description: "Use social media to build brand awareness, drive traffic, and increase sales.",
    imageSrc: "/images/services/social-media.png",
    href: "/services/social-media",
    gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    accent: "text-indigo-700"
  },
  {
    title: "Pay Per Click (PPC)",
    description: "Target your ad campaigns to receive instant traffic and improve ROI.",
    imageSrc: "/images/services/ppc.png",
    href: "/services/ppc",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    accent: "text-purple-700"
  },
  {
    title: "Email Marketing",
    description: "Promote products or build communities with personalized, automated email marketing campaigns. ",
    imageSrc: "/images/services/email-marketing.png",
    href: "/services/email-marketing",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
    accent: "text-pink-700"
  },
  {
    title: "Video Marketing",
    description: "Promote your content to the right audiences across popular digital channels through ads.",
    imageSrc: "/images/services/video-marketing.png",
    href: "/services/video-marketing",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
    accent: "text-red-700"
  },
  {
    title: "Native Advertising",
    description: "Tailor your paid ads for each platform where they appear. Optimal for improving user experience.",
    imageSrc: "/images/services/native-marketing.png",
    href: "/services/native-advertising",
    gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
    accent: "text-orange-700"
  },
  {
    title: "App Development",
    description: "Build and deploy your desired app for mobile or browsers to engage your users and customers.",
    imageSrc: "/images/services/app-dev.png",
    href: "/services/app-dev",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    accent: "text-amber-700"
  },
  {
    title: "SEM (Search Marketing)",
    description: "Leverage strategic paid advertising to boost the website's visibility on search engines.",
    imageSrc: "/images/services/sem.png",
    href: "/services/sem",
    gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    accent: "text-yellow-700"
  },
];

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.firstChild instanceof HTMLElement
        ? scrollContainerRef.current.firstChild.clientWidth + 24
        : 350;

      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-20">

        {/* --- Header Section (Unchanged) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-4xl font-regular font-heading text-primary lg:text-5xl leading-tight">
              Our Performance
              Driven <br />
              {" "}
              <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
              Marketing Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed ">
              Our professional digital marketing solutions are supported by an entire ecosystem of tools and platforms to help your business innovate and succeed.
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <Button onClick={() => scroll('left')} variant="outline" size="icon" className="rounded-full h-12 w-12 border-none bg-transparent hover:bg-primary hover:text-white shadow-none">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button onClick={() => scroll('right')} variant="outline" size="icon" className="rounded-full h-12 w-12 border-none bg-transparent hover:bg-primary hover:text-white shadow-none">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* --- Carousel Container --- */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 scrollbar-hide pr-10 md:pr-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {servicesData.map((service, index) => {
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="
                        group relative flex-shrink-0 snap-start
                        w-[80vw] sm:w-[320px] lg:w-[360px]
                        flex flex-col h-full
                        bg-primary
                        overflow-hidden rounded-xl
                        border border-gray-100
                        shadow-sm hover:shadow-xl
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                >
                  {/* --- Image Section --- */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Removed the black gradient overlay div completely */}
                  </div>

                  {/* --- Content Section --- */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-bold text-white mb-3 ">
                      {service.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    {/* --- Footer / CTA --- */}
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                      {/* Changed from {service.accent} to text-primary */}
                      <span className="text-sm font-bold text-white uppercase tracking-wider">
                        View Details
                      </span>

                      <div className={`
                                  w-10 h-10 rounded-full 
                                  flex items-center justify-center 
                                  bg-gray-100 text-primary
                                  group-hover:bg-gray-100 group-hover:text-primary
                                  transition-all duration-300
                              `}>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}