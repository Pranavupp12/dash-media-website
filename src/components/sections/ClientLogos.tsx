'use client';

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// ✅ 5 Brands
const brands = [
  { name: "samsung", logo: "/logos/samsung.svg" },
  { name: "google", logo: "/logos/google.svg" },
  { name: "meta", logo: "/logos/meta.svg" },
  { name: "microsoft", logo: "/logos/microsoft.svg" },
  { name: "netflix", logo: "/logos/netflix.svg" },
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
    <section className="pb-20 pt-10 bg-white">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">

          {/* Left Column: Manual Grid Implementation */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            {/* ✅ FIX: 
               - grid-cols-2 on mobile (2 rows)
               - grid-cols-3 on tablet
               - grid-cols-5 on desktop (All in one line) 
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="relative w-full h-16 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={48}
                    className="object-contain h-14 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Text (Unchanged) */}
          <div className="w-full lg:w-1/4 text-center lg:text-center order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-regular text-primary tracking-tighter">
              Trusted by  <span
                className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
                style={{ backgroundSize: "300% 100%" }}
              >
                Partners
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}