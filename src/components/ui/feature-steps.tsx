"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, autoPlayInterval);

    return () => clearInterval(timer)
  }, [features.length, autoPlayInterval])

  return (
    <div className={cn(" py-25 sm:px-10", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl text-primary tracking-tighter font-regular mb-12 text-center">
          Our  <span
            className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
            style={{ backgroundSize: "300% 100%" }}
          >
            Digital Marketing
          </span> Strategy
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          {/* ✅ FIX: Changed md:order-1 to md:order-2 */}
          <div className="order-2 md:order-2 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 md:gap-4"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  <span className="text-lg font-semibold">{index + 1}</span>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-md text-muted-foreground mt-2">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-1 relative overflow-hidden rounded-lg",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full rounded-xl object-cover"
                        width={800}
                        height={500}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}