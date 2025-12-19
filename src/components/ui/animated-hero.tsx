'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter-text";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "creative", "impactful"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col p-5 lg:flex-row gap-5 md:gap-10 items-center lg:items-stretch justify-center py-15 md:py-20 lg:py-25">

          {/* Left Column */}
          <div className="flex flex-col md:gap-10 items-center lg:items-start text-center lg:text-left lg:w-2/5">
            {/* ✅ FIX: Simplified the h1 structure to fix text flow */}
            <h1 className="text-4xl lg:text-6xl tracking-tighter font-regular text-primary">
              We create{' '}
              <span className="relative inline-block h-[0.9em] w-[4em] font-semibold text-accent text-left whitespace-nowrap">
                   {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient"
                    style={{ backgroundSize: "300% 100%" }}
                    initial={{ opacity: 0 }}
                    animate={
                      titleNumber === index
                        ? { opacity: 1 }
                        : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>{' '}
              <br/>
              digital solutions.
            </h1>

            <p className="text-md md:text-lg p-5 md:p-0 leading-relaxed tracking-tight text-muted-foreground max-w-2xl lg:max-w-xl">
              Our goal is to streamline your digital presence,Our goal is to streamline your digital presence
              making it more effective and engaging than ever before.
            </p>
          </div>

          {/* Right Column */}
         <div className="w-full lg:w-3/5 mt-0 flex flex-col gap-4">
            <div className="text-center lg:text-left">
              <Typewriter
                text={[
                  "Don't trust us?",
                  "No worries, visit our Instagram.",
                  "@dashmedia_solutions"
                ]}
                loop={true}
                className="text-xl md:text-xl text-accent"
              />
            </div>
            {/* This ensures mobile has a 16:9 box, while desktop flexes to fill space */}
            <div className="w-full aspect-[2/3] md:aspect-[5/3] lg:aspect-[7/3] lg:flex-1 rounded-lg overflow-hidden relative">
              <video
                src="/Social_Media_Video_Generation.mp4"
                loop
                muted
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };

