"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-16 md:py-24 flex items-center min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxusvilla mit Palmen"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay for better contrast on the text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20"></div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-white flex flex-col justify-between h-full py-8 lg:min-h-[500px]"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight mb-2 leading-[1.1] uppercase drop-shadow-md">
                LASSEN SIE UNS ÜBER
              </h2>
              <span className="font-serif italic text-4xl md:text-5xl lg:text-[4.5rem] text-gray-100 tracking-tight drop-shadow-md leading-tight block mt-2">
                Ihre Ziele sprechen
              </span>
              
              <p className="text-white/90 text-sm md:text-base mt-8 max-w-md leading-relaxed drop-shadow-md">
                Hinterlassen Sie uns Ihre Kontaktdaten und beschreiben Sie kurz Ihr Anliegen – unsere Experten melden sich umgehend bei Ihnen, um Details zu klären und Ihnen die besten Optionen vorzustellen.
              </p>
              
              <div className="mt-12 lg:mt-24 mb-12 lg:mb-8">
                <a href="tel:+4962214348215" className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight hover:text-[var(--color-accent-champagne)] transition-colors drop-shadow-lg block">
                  +49 (0) 6221 434 82 15
                </a>
              </div>
            </div>
            
            <div className="text-[10px] text-white/70 uppercase tracking-widest leading-relaxed max-w-[200px] mt-8 lg:mt-auto pt-4">
              Wir begleiten jeden Schritt mit größter Sorgfalt
            </div>
          </motion.div>
          
          {/* Right Content (Form) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
