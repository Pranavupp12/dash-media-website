'use client';

import { BrandsGrid } from "@/components/ui/brands"; // 👈 1. Import the new component
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// 2. Define the logos for the new grid
const brands = [
  { name: "samsung", logo: "/logos/samsung.svg" },
  { name: "google", logo: "/logos/google.svg" },
  { name: "meta", logo: "/logos/meta.svg" },
  { name: "microsoft", logo: "/logos/microsoft.svg" },
  { name: "netflix", logo: "/logos/netflix.svg" },
  { name: "paypal", logo: "/logos/paypal.svg" },
  { name: "nvidia", logo: "/logos/nvidia.svg" },
  { name: "youtube", logo: "/logos/youtube.svg" },
];

export function ClientLogos() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Brands", "Partners", "Innovators", "Clients"],
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
    <section className="md:pt-5 pb-15 sm:pb-25 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">

          {/* Left Column: Replaced with BrandsGrid */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <BrandsGrid brands={brands} title="" />
          </div>
          
          {/* Right Column: Text (Remains exactly as you provided) */}
          <div className="w-full lg:w-2/5 text-center lg:text-center order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-primary tracking-tighter">
              Trusted By Leading <br className="inline"/>
              <span className="relative inline-block h-[1.2em] w-auto font-semibold text-accent text-left whitespace-nowrap">
                <span className="invisible">Innovators</span>
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-4 bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient "
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
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}