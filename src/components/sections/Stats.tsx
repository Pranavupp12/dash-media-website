'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // 👈 Import the Card component
import Link from "next/link";
import CountUp from "react-countup";
import { Zap, Rocket, BarChart2 } from "lucide-react";
import { PhoneCall } from "lucide-react";

// Data for the main stats at the top
const mainStats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Professional Team" },
];

// Data for the feature cards at the bottom
const featureCards = [
  {
    Icon: Zap,
    title: "Increase Traffic",
    description: "Our expertise will help you improve visibility in search engine results.",
  },
  {
    Icon: Rocket,
    title: "Improved Rankings",
    description: "We employ ultimate strategic SEO to enhance your website's ranking world wide.",
  },
  {
    Icon: BarChart2,
    title: "Targeted Audience",
    description: "We focus on targeting specific keywords to attract your ideal audience.",
  },
];

export function Stats() {
  return (
    <section className="pb-15 md:pb-25 bg-blue-50">
      <div className="container mx-auto">
        {/* Top Section: Headline & Main Stats */}
        <div className="grid lg:grid-cols-2 gap-14 items-center p-5 md:p-0">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <h2 className="text-2xl md:text-3xl pl-0 sm:pl-3 font-regular font-heading text-primary tracking-tight">
              Bring in <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
                targeted visitors
              </span> <br /> and <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
                increase sales.
              </span>
            </h2>
          </div>

          {/* Right Column: Main Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-14 pr-0 sm:pr-3  text-center">
            {mainStats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl lg:text-5xl font-regular text-accent">
                  <CountUp end={stat.value} duration={3} />
                  <span className="text-primary">{stat.suffix}</span>
                </h3>
                <p className="text-muted-foreground text-sm sm:text-md mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}