'use client';

import Image from "next/image";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"; // 👈 2. Import the component

export function AboutIntro() {
  const paragraphText = "We are completely fixated on assisting eCommerce brands in growing. All of our collaborations are full-funnel engagements with businesses that we wholeheartedly support. Our sole goal is to promote customer retention and new customer acquisition.";

  return (
    <section className="py-15 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Top Row: Heading and Paragraph */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 p-5 md:p-0 text-center">
          <h2 className="text-4xl md:text-6xl font-regular font-heading text-primary">
            We are{" "}
            <span
              className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
              style={{ backgroundSize: "300% 100%" }}
            >
              Built{" "}
              Different
            </span>
          </h2>
        </div>

        {/* Horizontal Image Container */}
        <div className="relative w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/team-img.png"
            alt="A diverse team collaborating joyfully"
            width={2071}
            height={300}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="max-w-5xl mx-auto text-center mt-12">
          <p className="text-md sm:text-xl md:text-2xl text-primary leading-relaxed p-5 md:p-0">
            <VerticalCutReveal splitBy="words" staggerDuration={0.02}>
              {paragraphText}
            </VerticalCutReveal>
          </p>
        </div>
      </div>
    </section>
  );
}