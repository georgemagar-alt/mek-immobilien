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

export default function VermarktungPage() {
  const marketingTargets = [
    {
      id: "01",
      title: "Vermarktung von Immobilienmaklern",
      text: "Damit Sie sich auf Ihr Kerngeschäft – den Verkauf – konzentrieren können, unterstützen wir Sie umfassend bei Ihrer Positionierung, Ihren Vertriebskanälen, der Leadgenerierung und bei der Schulung Ihres Personals. Mit unserer Erfahrung als Makler und Marketingexperten begleiten wir Sie auf Ihrem Erfolgskurs.",
      tags: ["Leadgenerierung", "Vertriebskanäle", "Positionierung", "Personal & Schulung"]
    },
    {
      id: "02",
      title: "Vermarktung von Unternehmen",
      text: "Um sich in einem wettbewerbsintensiven Markt von der Konkurrenz abzuheben, erarbeiten wir mit Ihnen eine individuelle Vermarktungsstrategie. Wir sorgen dafür, dass Sie bei Ihren Zielgruppen ankommen und einen bleibenden, starken Eindruck hinterlassen.",
      tags: ["Corporate Identity", "Markenaufbau", "Strategie", "Reichweite", "Wettbewerbsanalyse"]
    },
    {
      id: "03",
      title: "Vermarktung von Dienstleistern",
      text: "Sichtbarkeit ist der Schlüssel zum Erfolg. Wir setzen auf einen erprobten Mix aus Online- und Offline-Maßnahmen, die passgenau auf Ihre Bedürfnisse und Ihr Budget zugeschnitten sind. Setzen Sie auf uns und starten Sie nachhaltig durch.",
      tags: ["Sichtbarkeit", "Online-Marketing", "Offline-Kampagnen", "Zielgruppenansprache"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <PageHeader 
        title="Vermarktung" 
        subtitle="Wir vermarkten Ihr Unternehmen"
        imageSrc="/images/vermarktung-banner-header.jpg"
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
                  IHR PARTNER
                </h2>
                <span className="font-serif italic text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] tracking-tight">
                  MEK
                </span>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32 leading-relaxed">
                Strategische<br/>Vermarktung
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
                  Strategische Vermarktung für Ihren maximalen Erfolg.
                </p>
                <p>
                  Immobilien sind unsere Leidenschaft, doch unsere Expertise reicht deutlich weiter. Mit unserem fundierten Know-how als Marketing- und Immobilienexperten vermarkten wir Ihr gesamtes Unternehmen.
                </p>
                <p>
                  Wir helfen Unternehmen, Dienstleistern und anderen Immobilienmaklern dabei, ihre Marke aufzubauen, ihre Zielgruppe messbar zu erreichen und nachhaltiges Wachstum zu generieren.
                </p>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Expertise, die Reichweite schafft
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
                src="/images/vermarktung-strategie.jpg" 
                alt="Strategie und Marketing"
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
            Unsere Zielgruppen
          </motion.h3>

          <div className="max-w-5xl mx-auto flex flex-col">
            {marketingTargets.map((target, idx) => (
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
                    {target.id}
                  </span>
                </div>
                <div className="w-full md:w-1/3 shrink-0 pt-1 md:pt-4">
                  <h4 className="text-lg md:text-xl font-medium tracking-widest uppercase text-[var(--color-foreground)]/90">{target.title}</h4>
                </div>
                <div className="w-full md:flex-1 pt-1 md:pt-4">
                  <p className="text-base md:text-lg opacity-70 leading-relaxed font-light mb-8">
                    {target.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {target.tags.map((tag, tagIdx) => (
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

        <div className="pt-24 md:pt-32"></div>

      </main>

      <ContactSection />
    </div>
  );
}
