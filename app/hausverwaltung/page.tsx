"use client";

import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HausverwaltungPage() {
  const managementServices = [
    {
      id: "01",
      title: "Kaufmännische Verwaltung",
      text: "Wir übernehmen die komplette kaufmännische Abwicklung Ihrer Immobilie. Von der rechtssicheren Nebenkostenabrechnung über das Mietinkasso bis hin zur transparenten Wirtschaftsplanung sorgen wir für eine optimale Rendite.",
      tags: ["Nebenkostenabrechnung", "Mietinkasso", "Wirtschaftsplan", "Buchhaltung", "Mahnwesen"]
    },
    {
      id: "02",
      title: "Technische Verwaltung",
      text: "Werterhalt und Instandsetzung Ihrer Immobilie sind bei uns in besten Händen. Wir koordinieren Handwerker, überwachen Modernisierungsmaßnahmen und sorgen für eine schnelle Abwicklung bei Schadensfällen.",
      tags: ["Instandhaltung", "Modernisierung", "Schadensmanagement", "Objektbegehungen", "Handwerkerkoordination"]
    },
    {
      id: "03",
      title: "Mietverwaltung",
      text: "Wir entlasten Sie bei allen Fragen rund um Ihre Mieter. Von der sorgfältigen Mieterauswahl bei Neuvermietungen über Wohnungsabnahmen bis hin zur fortlaufenden Mieterkommunikation stehen wir Ihnen zur Seite.",
      tags: ["Neuvermietung", "Mieterkommunikation", "Wohnungsabnahme", "Vertragsmanagement", "Kautionsverwaltung"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <PageHeader 
        title="Hausverwaltung" 
        subtitle="Professionelles Management für Ihre Immobilie"
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      <main className="flex-grow pt-20 md:pt-32">
        <div className="container-custom">
          
          {/* 3-Column Intro (Master Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32 items-stretch">
            
            {/* Column 1: Headline */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-3 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] font-medium uppercase tracking-tight leading-none mb-1">
                  IHR PARTNER FÜR
                </h2>
                <span className="font-serif italic text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] tracking-tight">
                  Verwaltung
                </span>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32 leading-relaxed">
                Ganzheitliche<br/>Betreuung
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
              <div className="text-[var(--color-foreground)]/80 text-sm md:text-base leading-relaxed space-y-6 pt-2">
                <p className="text-base md:text-lg font-light text-[var(--color-foreground)] opacity-100">
                  Werterhalt, Renditeoptimierung und Entlastung für Eigentümer.
                </p>
                <p>
                  Eine professionelle Hausverwaltung ist das Fundament für den langfristigen Werterhalt und die Rentabilität Ihrer Immobilie. Wir übernehmen für Sie alle anfallenden Aufgaben – transparent, zuverlässig und rechtssicher.
                </p>
                <p>
                  Ob kaufmännische, technische oder administrative Verwaltung: Mit unserem erfahrenen Team und unserem exzellenten Netzwerk an Handwerkern und Dienstleistern schnüren wir ein Rundum-sorglos-Paket für Ihre Immobilie.
                </p>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Ihre Immobilie in besten Händen
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
                src="/images/hausverwaltung-ganzheitliche-betreuung-v2.jpg" 
                alt="Professionelle Hausverwaltung und Immobilienmanagement"
                fill 
                className="object-cover" 
              />
            </motion.div>

          </div>
        </div>

        {/* Elegant List Layout for Services (No Images) */}
        <div className="container-custom pt-10 md:pt-16">
          <div className="w-full h-px bg-[var(--color-foreground)]/10 mb-20 md:mb-32"></div>
          
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="font-serif italic text-3xl md:text-4xl text-center mb-20 md:mb-32"
          >
            Unsere Verwaltungs-Expertise
          </motion.h3>

          <div className="max-w-5xl mx-auto flex flex-col">
            {managementServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
                }}
                className="group flex flex-col md:flex-row py-12 md:py-16 border-t border-[var(--color-foreground)]/10 gap-6 md:gap-12 items-start hover:bg-[var(--color-foreground)]/[0.02] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
              >
                <div className="w-full md:w-32 shrink-0">
                  <span className="font-serif italic text-5xl md:text-7xl text-[var(--color-foreground)]/20 group-hover:text-[var(--color-accent-champagne)] transition-colors duration-500">
                    {service.id}
                  </span>
                </div>
                <div className="w-full md:w-1/3 shrink-0 pt-1 md:pt-4">
                  <h4 className="text-lg md:text-xl font-medium tracking-widest uppercase text-[var(--color-foreground)]/90">{service.title}</h4>
                </div>
                <div className="w-full md:flex-1 pt-1 md:pt-4">
                  <p className="text-base md:text-lg opacity-70 leading-relaxed font-light mb-8">
                    {service.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-[var(--color-foreground)]/10 rounded-full text-[var(--color-foreground)]/70 group-hover:border-[var(--color-accent-champagne)]/40 transition-colors duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="w-full border-t border-[var(--color-foreground)]/10"></div>
          </div>
        </div>
      </main>

      <ContactSection />
    </div>
  );
}
