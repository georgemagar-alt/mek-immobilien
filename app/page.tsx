"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Home, Building2, Key, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ExpertiseSlider from "@/components/ExpertiseSlider";
import TeamSlider from "@/components/TeamSlider";
import PropertyList from "@/components/PropertyList";

import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Luxus Immobilie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-custom relative z-10 text-white mt-12 md:mt-24 text-left">
          <div className="max-w-[1000px]">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight mb-2 leading-[0.95] uppercase"
            >
              GANZHEITLICHES<br />IMMOBILIEN-<br />MANAGEMENT
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ delay: 0.2 }}
              className="font-serif italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-200 mt-4"
            >
              <span className="text-[10px] sm:text-xs md:text-base font-sans not-italic uppercase tracking-widest mr-2 md:mr-4 opacity-80 align-middle">MIT</span>
              exzellenter Betreuung
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            transition={{ delay: 0.4 }}
            className="flex flex-col lg:flex-row justify-start items-start mt-16 md:mt-24 gap-8 w-full"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-left">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl -mt-1">
                  1.2<span className="text-xl sm:text-2xl md:text-3xl align-super ml-0.5">+</span> Mio
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80 leading-tight mt-1">erfolgreiche<br/>Vermittlungen</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30"></div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl -mt-1">12</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80 leading-tight mt-1">exklusive<br/>Partner</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30"></div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl -mt-1">360°</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80 leading-tight mt-1">Ganzheitliche<br/>Betreuung</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immobilienangebote / Property List */}
      <PropertyList />



      {/* 3. Leistungs-Grid -> Expertise Slider */}
      <section id="leistungen" className="py-16 md:py-32 bg-[var(--color-background)] overflow-hidden">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] font-medium uppercase tracking-tight leading-none mb-1">
                VON DER ANFRAGE<br/>ZUM ERGEBNIS
              </h2>
              <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] tracking-tight">
                alles unter Kontrolle
              </span>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="mt-8 md:mt-0 text-[11px] uppercase tracking-widest text-[var(--color-foreground)]/60 text-left md:text-right max-w-[250px]"
            >
              Vom ersten Kontakt bis zum erfolgreichen Abschluss regeln wir alles für Sie.
            </motion.div>
          </div>

          {/* Slider Component */}
          <ExpertiseSlider />

        </div>
      </section>


      {/* 2. Über-Uns-Teaser */}
      <section id="ueber-uns" className="py-16 md:py-32 bg-[var(--color-background)] border-t border-b border-[var(--color-foreground)]/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Headline */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-3 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] font-medium uppercase tracking-tight leading-none mb-1">
                  MEHR ALS EIN
                </h2>
                <span className="font-serif italic text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] tracking-tight block">
                  Partner
                </span>
              </div>
              <div className="hidden lg:block text-xs uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Fokus: Premium
              </div>
            </motion.div>

            {/* Column 2: Text */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-3 flex flex-col justify-between"
            >
              <div className="text-[var(--color-foreground)]/80 text-sm md:text-base leading-relaxed space-y-8 max-w-sm pt-2">
                <p>
                  Wir verstehen Immobilien nicht nur als Objekte, sondern als Lebensräume und Werte. Mit tiefer Marktkenntnis, einem kompromisslosen Qualitätsanspruch und absoluter Diskretion begleiten wir anspruchsvolle Kunden bei ihren Immobilienentscheidungen.
                </p>
                <p>
                  Erleben Sie Immobilienvermittlung auf höchstem Niveau – als strategische Partnerschaft, die Ihre Vision in den Mittelpunkt stellt.
                </p>
                <a href="#kontakt" className="inline-block mt-4 text-[11px] font-bold uppercase tracking-widest border-b border-[var(--color-foreground)]/30 pb-1 hover:border-[var(--color-foreground)] transition-colors">
                  Lernen Sie uns kennen
                </a>
              </div>
              <div className="hidden lg:block text-xs uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Standort: Mannheim
              </div>
            </motion.div>

            {/* Column 3: Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-6 relative h-[400px] md:h-[600px] xl:h-[700px] w-full mt-12 lg:mt-0"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=80"
                alt="Moderne Architektur"
                fill
                className="object-cover"
              />
            </motion.div>
            
          </div>
          
          {/* Mobile bottom info */}
          <div className="flex justify-between mt-8 lg:hidden text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50">
            <span>Fokus: Premium</span>
            <span>Standort: Mannheim</span>
          </div>
        </div>
      </section>

      {/* Team Slider Sektion */}
      <TeamSlider />

      {/* 4. Kontakt-Sektion */}
      <ContactSection />
    </div>
  );
}
