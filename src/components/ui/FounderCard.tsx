'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface FounderCardProps {
  name: string;
  title: string;
  imageSrc: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
  };
  className?: string;
}

export function FounderCard({ name, title, imageSrc, socialLinks, className }: FounderCardProps) {
  return (
    <div className={cn(
      "relative group aspect-[4/4] rounded-xl overflow-hidden shadow-md",
      "transition-all duration-300 ease-in-out hover:shadow-xl",
      className
    )}>
      <Image
        src={imageSrc}
        alt={`Portrait of ${name}`}
        fill
        className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Text and Social Icons Container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-6">
        <h3 className="text-2xl font-bold font-heading">{name}</h3>
        <p className="text-sm">{title}</p>

        {/* Social Icons - Hidden by default, appear below on hover */}
        {socialLinks && (
          <div className={cn(
            "flex space-x-4 mt-3 transition-all duration-300 ease-in-out",
            "opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto", // Hide by default, show on hover
            "pointer-events-none group-hover:pointer-events-auto"
          )}>
            {socialLinks.linkedin && (
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5 hover:text-accent transition-colors" />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 hover:text-accent transition-colors" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}