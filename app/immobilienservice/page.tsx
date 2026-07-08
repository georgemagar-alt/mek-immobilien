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
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function ImmobilienservicePage() {
  const services = [
    {
      id: "01",
      title: "Verkauf",
      text: "Sparen Sie beim Veräußern Ihrer Immobilie viel Zeit, Mühe, Geld und Nerven. Wir bieten Ihnen ein maßgeschneidertes Vermarktungskonzept mit modernen Exposés, diskreter Vermarktung auf Wunsch und professionellen Preisverhandlungen.",
      tags: ["Wertermittlung", "Exposé-Erstellung", "Besichtigungen", "Verhandlung", "Notar-Begleitung", "Off-Market"]
    },
    {
      id: "02",
      title: "Vermietung",
      text: "Wir übernehmen den gesamten Vermietungsprozess für Sie – von der marktgerechten Preisfindung über die Erstellung hochwertiger Exposés bis hin zur professionellen Durchführung von Besichtigungen und strengen Bonitätsprüfungen.",
      tags: ["Mietpreisfindung", "Bonitätsprüfung", "Mietvertrag", "Wohnungsübergabe", "Mieterselbstauskunft"]
    },
    {
      id: "03",
      title: "Vermögensaufbau & Kauf",
      text: "Immobilien sind ein essenzieller Baustein für den langfristigen und krisensicheren Vermögensaufbau. Durch unseren Zugang zu exklusiven Off-Market-Immobilien und unsere tiefe Marktkenntnis identifizieren wir renditestarke Anlageobjekte, die perfekt in Ihr Portfolio passen.",
      tags: ["Anlageimmobilien", "Renditeobjekte", "Off-Market-Deals", "Portfolio-Aufbau", "Altersvorsorge", "Finanzierungsstrategie"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <PageHeader 
        title="Immobilienservice" 
        subtitle="Verkauf, Vermietung & Vermögensaufbau"
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
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
                  Immobilien
                </span>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32 leading-relaxed">
                Full-Service<br/>Dienstleister
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
                  Ganzheitliche Betreuung beim Kauf, Verkauf und der Vermietung Ihrer Immobilie.
                </p>
                <p>
                  Als Premium-Immobiliendienstleister bieten wir Ihnen alle Services aus einer Hand. Unser Ziel ist es, Sie in jeder Phase Ihrer Immobilienentscheidung professionell, diskret und zielführend zu begleiten.
                </p>
                <p>
                  Ob Sie eine exklusive Immobilie veräußern, einen bonitätsstarken Mieter suchen oder durch strategische Investments langfristig Vermögen aufbauen möchten – wir sind Ihr Ansprechpartner.
                </p>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Qualität ohne Kompromisse
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
                alt="Premium Immobilienservice"
                fill 
                className="object-cover" 
              />
            </motion.div>

          </div>
        </div>

        {/* Elegant List Layout for Services */}
        <div className="container-custom pt-10 md:pt-16">
          <div className="w-full h-px bg-[var(--color-foreground)]/10 mb-20 md:mb-32"></div>
          
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="font-serif italic text-3xl md:text-4xl text-center mb-20 md:mb-32"
          >
            Unsere Immobilien-Expertise
          </motion.h3>

          <div className="max-w-5xl mx-auto flex flex-col">
            {services.map((service, idx) => (
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
