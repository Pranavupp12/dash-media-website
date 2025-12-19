'use client';

import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import Image from "next/image";

// Placeholder images for the team photos
const teamImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
];

export function TeamSkills() {
  return (
    <section className="bg-blue-50 pt-15 sm:pt-25 md:pb-10">
      <div className="container mx-auto">
        {/* ✅ FIX: Removed flexbox classes for a natural paragraph flow */}
        <div className="text-2xl lg:text-5xl font-regular text-center text-primary leading-relaxed mx-auto p-5 md:p-0">
          <VerticalCutReveal splitBy="words" staggerDuration={0.05}>
            Our flexible team
          </VerticalCutReveal>

          {/* Inline Team Images */}
          <div className="inline-flex items-center align-middle -space-x-4 mx-2">
            {teamImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Team member ${index + 1}`}
                width={50}
                height={50}
                className="w-12 h-12 md:w-12 md:h-12 rounded-full object-cover border-4 border-background"
              />
            ))}
          </div>

          <VerticalCutReveal splitBy="words" staggerDuration={0.05} staggerFrom="last">
            has a wide range of skills, which lets us look at projects from a complete point of view that combines creativity 🎨 and usefulness ✨.
          </VerticalCutReveal>
        </div>
      </div>
    </section>
  );
}