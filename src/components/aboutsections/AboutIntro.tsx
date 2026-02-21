'use client';

import Image from "next/image";
import CountUp from "react-countup";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";


const mainStats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 1300, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Professional Team" },
];

export function AboutIntro() {
  return (
    <section className="bg-white py-20">
      {/* 1. Header & Image Section */}
        <div className="container mx-auto px-5 md:px-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-0 p-5 md:p-0 text-center">
            <h2 className="text-4xl md:text-6xl font-regular font-heading text-primary">
              We are{" "}
              <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
                Built Different
              </span>
            </h2>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src="/images/image-abt-us.png"
              alt="A diverse team collaborating joyfully"
              width={2071}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      {/* 2. Team Skills Paragraph (Transition to Blue) */}
      <div className="bg-white pt-15 px-5 md:px-20">
        <div className="container mx-auto ">
          <div className="text-xl lg:text-3xl font-regular text-center text-primary leading-relaxed mx-auto p-5 md:p-0 max-w-6xl">
            <VerticalCutReveal splitBy="words" staggerDuration={0.05}>
              At Dash Media Solutions, we help our partners to navigate ever-evolving online innovation and offer solutions that not only align with their business but also support their online visibility. 
            </VerticalCutReveal>
          </div>
        </div>
      </div>

      {/* 3. Stats Section */}
      <div className="bg-white pt-15 ">
        <div className="container mx-auto px-5 md:px-20 ">
          <div className="grid lg:grid-cols-2 gap-14 items-center p-5 md:p-0">
            {/* Left Column: Targeted Headline */}
            <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
              <h2 className="text-xl md:text-2xl font-regular font-heading text-primary tracking-tight leading-tight">
                Be there for your {" "}               
                 <span
                  className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                  style={{ backgroundSize: "300% 100%" }}
                >
                audience
                </span><br />
                with effective{" "}
                <span
                  className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                  style={{ backgroundSize: "300% 100%" }}
                >
                  strategies.
                </span>
              </h2>
            </div>

            {/* Right Column: Main Stats with CountUp */}
            <div className="grid grid-cols-3 gap-3 sm:gap-14 text-center">
              {mainStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-3xl lg:text-5xl font-regular text-accent">
                    <CountUp end={stat.value} duration={3} enableScrollSpy />
                    <span className="text-primary">{stat.suffix}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-md mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}