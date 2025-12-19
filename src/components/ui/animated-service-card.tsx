'use client';

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

// ✅ 1. Added `href` to the interface
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  href: string; // This property is now required
}

// ✅ 2. Wrapped the card in an anchor tag to make it clickable
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };


  return (
    <a 
      href={service.href} 
      className="block transition-transform duration-300 hover:scale-105 focus:scale-105  rounded-3xl"
    >
      <motion.div
        variants={cardVariants}
        className={cn(
          "relative flex h-[350px] sm:h-[400px] w-[350px] sm:w-full flex-col justify-between overflow-hidden rounded-3xl p-8",
          service.gradient
        )}
      >
        <div className="z-10 flex flex-col items-start text-left">
          <span className="mb-8 text-sm font-mono  text-muted-foreground">
            ( {service.number} )
          </span>
          <service.icon className="mb-auto h-12 w-12 text-primary" />
        </div>
        <div className="z-10">
          <h3 className="mb-2 text-xl font-semibold uppercase tracking-wider text-primary">
            {service.title}
          </h3>
          <p className="text-md text-muted-foreground">{service.description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
      </motion.div>
    </a>
  );
};


// --- Main Carousel Section (No changes here) ---
export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="w-full max-w-7xl mx-auto" ref={ref}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
        >
            <CarouselContent>
            {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-5 ml-5 md:ml-0">
                    {/* The ServiceCard is now clickable */}
                    <ServiceCard service={service} index={index} />
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
        </motion.div>
        <CarouselNext className="bg-white border-0 hover:bg-[#002766] text-foreground right-[1rem] md:right-[1.5rem]" />
      </Carousel>
    </div>
  );
};