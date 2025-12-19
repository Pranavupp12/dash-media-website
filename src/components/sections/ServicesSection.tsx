'use client';

import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/animated-service-card";
import {
  AreaChart,
  LayoutTemplate,
  PenSquare,
  Users, // Changed from Megaphone for better distinction
  Briefcase,
  Mail,
  Video,
  Megaphone,
  Smartphone,
  Search,
} from "lucide-react";

// ✅ 1. Data updated to include all 10 services with hrefs
const servicesData: Service[] = [
  {
    number: "01",
    title: "SEO Services",
    description: "Expert strategies to boost your visibility and drive organic traffic.",
    icon: AreaChart,
    gradient: " bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50",
    href: "/services/seo",
  },
  {
    number: "02",
    title: "Web Design",
    description: "Creative, responsive websites that captivate and convert your audience.",
    icon: LayoutTemplate,
    gradient: " bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50",
    href: "/services/web-design",
  },
  {
    number: "03",
    title: "Content Marketing",
    description: "Engaging content that tells your brand’s story and builds authority.",
    icon: PenSquare,
    gradient: " bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50",
    href: "/services/content-marketing",
  },
  {
    number: "04",
    title: "Social Media",
    description: "Building and engaging your community across all social platforms.",
    icon: Users, // Using a more specific icon
    gradient: " bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50",
    href: "/services/social-media",
  },
  {
    number: "05",
    title: "Pay Per Click (PPC)",
    description: "Targeted ad campaigns that deliver measurable ROI and instant traffic.",
    icon: Briefcase,
    gradient: " bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
    href: "/services/ppc",
  },
  {
    number: "06",
    title: "Email Marketing",
    description: "Nurture leads and retain customers with effective email strategies.",
    icon: Mail,
    gradient: " bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50",
    href: "/services/email-marketing",
  },
  {
    number: "07",
    title: "Video Marketing",
    description: "Compelling video content that captures attention.",
    icon: Video,
    gradient: " bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50",
    href: "/services/video-marketing",
  },
  {
    number: "08",
    title: "Native Advertising",
    description: "Ads that blend seamlessly with platform content.",
    icon: Megaphone,
    gradient: " bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50",
    href: "/services/native-advertising",
  },
  {
    number: "09",
    title: "App Development",
    description: "Custom mobile apps for iOS and Android.",
    icon: Smartphone,
    gradient: " bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50",
    href: "/services/app-development",
  },
  {
    number: "10",
    title: "Search Engine Marketing (SEM)",
    description: "Drive targeted traffic with paid search campaigns.",
    icon: Search,
    gradient: " bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50",
    href: "/services/sem",
  },
];


export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto">
        <div className="relative z-10 mx-auto max-w-3xl space-y-3 text-center mb-3 md:mb-10">
          <h2 className="text-balance text-4xl font-regular font-heading text-primary lg:text-6xl">
            The Foundation For {""}
            <br className="lg:hidden"/>
            Your{" "}
            <span
              className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
              style={{ backgroundSize: "300% 100%" }}
            >
              Digital Growth
            </span>
          </h2>
          <p className="text-md sm:text-lg mt-6 text-muted-foreground leading-relaxed p-5 md:p-0">
            Dash Media is more than just an agency. We support an entire ecosystem of tools and platforms to help your business innovate and succeed.
          </p>
        </div>

        <ServiceCarousel services={servicesData} />
      </div>
    </section>
  );
}






