"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>

      <div className="container-custom relative z-10 text-white w-full mt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="max-w-[800px]"
        >
          {subtitle && (
            <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] opacity-80 mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2 uppercase drop-shadow-lg">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
