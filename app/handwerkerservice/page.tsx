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

export default function HandwerkerservicePage() {
  const craftServices = [
    {
      id: "01",
      title: "Alles aus einer Hand",
      text: "Sie haben nur einen einzigen Ansprechpartner für Ihr gesamtes Bauvorhaben. Wir übernehmen die komplette Koordination aller beteiligten Gewerke, überwachen den Baufortschritt und garantieren absolute Termintreue.",
      tags: ["Bauüberwachung", "Projektkoordination", "Qualitätskontrolle", "Termintreue", "Ein Ansprechpartner"]
    },
    {
      id: "02",
      title: "Renovierung & Sanierung",
      text: "Von der Schönheitsreparatur über die Wohnungsrenovierung bis hin zur umfassenden Kernsanierung. Unser handverlesenes Netzwerk besteht ausschließlich aus zuverlässigen, geprüften Meisterbetrieben der Region.",
      tags: ["Kernsanierung", "Malerarbeiten", "Bodenverlegung", "Trockenbau", "Elektroinstallation", "Sanitär & Heizung"]
    },
    {
      id: "03",
      title: "Innenarchitektur & Design",
      text: "Wir werten Ihre Immobilie nicht nur technisch, sondern auch optisch auf. Mit modernen Wohnkonzepten und durchdachtem Design steigern wir den Wert und die Attraktivität Ihres Objekts nachhaltig.",
      tags: ["Raumkonzepte", "Lichtplanung", "Materialauswahl", "Möblierung", "Farbgestaltung", "Home Staging"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <PageHeader 
        title="Handwerkerservice" 
        subtitle="Allroundpartner für Ihre Immobilie"
        imageSrc="/images/handwerkerservice-banner-header-v2.jpg"
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
                Handwerker-<br/>service
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
                  Wir organisieren alle Arbeiten aus einer Hand.
                </p>
                <p>
                  Sie haben nur einen Ansprechpartner, den Rest übernehmen wir für Sie. Unser hauseigener Handwerkerservice und unser geprüftes Partnernetzwerk aus Meisterbetrieben stehen für absolute Professionalität.
                </p>
                <p>
                  Wir garantieren höchste Qualität und Termintreue bei allen Bau- und Renovierungsprojekten rund um Ihre Immobilie.
                </p>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32">
                Qualität, die man sieht
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1500&q=80" 
                alt="Architektur und Handwerk"
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
            Unsere Handwerks-Expertise
          </motion.h3>

          <div className="max-w-5xl mx-auto flex flex-col">
            {craftServices.map((service, idx) => (
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

        {/* Small transition space before contact section */}
        <div className="pt-24 md:pt-32"></div>

      </main>

      <ContactSection />
    </div>
  );
}
