'use client';

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react"; // Using Lucide icons for the star

const services = [
  "WEB DESIGN",
  "APP DEVELOPMENT",
  "SEO OPTIMIZATION",
  "SOCIAL MEDIA MARKETING",
  "SEM OPTIMIZATION",
  "EMAIL MARKETING",
  "PPC CAMPAIGNS",
  "CONTENT MARKETING",
  "NATIVE ADVERTISING",
  "CONTENT MARKETING",
];

export function MarqueeSeparator() {
  return (
    <div className="w-full bg-primary py-6 overflow-hidden border-y border-white/10 relative z-10">
      
      <div className="flex whitespace-nowrap">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

function MarqueeContent() {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ 
        duration: 100, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="flex items-center flex-shrink-0"
    >
      {services.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="text-white text-md md:text-lg font-bold tracking-wider px-8 uppercase font-heading">
            {item}
          </span>
          <Sparkle className="text-white/70 w-5 h-5 md:w-6 md:h-6 fill-white/20" />
        </div>
      ))}
    </motion.div>
  );
}