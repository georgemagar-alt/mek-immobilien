"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import TeamSlider from "@/components/TeamSlider";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function UeberUnsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <PageHeader 
        title="Über uns" 
        subtitle="MEK Home Immobiliengruppe"
        imageSrc="/images/ueber-uns-banner-header-v2.jpg"
      />

      <main className="flex-grow pt-20 md:pt-32">
        <div className="container-custom mb-32">
          {/* 3-Column Intro (Master Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
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
                  MEHR ALS EIN
                </h2>
                <span className="font-serif italic text-4xl lg:text-5xl xl:text-6xl text-[var(--color-foreground)] tracking-tight block">
                  Partner
                </span>
              </div>
              <div className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/50 mt-32 leading-relaxed">
                Ganzheitliches<br/>Management
              </div>
            </motion.div>

            {/* Column 2: Text */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-4 flex flex-col justify-between"
            >
              <div className="text-[var(--color-foreground)]/80 text-sm md:text-base leading-relaxed space-y-6 pt-2">
                <p className="text-base md:text-lg font-light text-[var(--color-foreground)] opacity-100 mb-8">
                  Wir sind Ihr Knotenpunkt im Bereich ganzheitliches Immobilienmanagement.
                </p>
                <ul className="space-y-4">
                  {[
                    "Ganzheitliches nationales & internationales Immobilienmanagement",
                    "Bundesweit für unsere Mieter und Eigentümer unterwegs",
                    "Diskrete Vermarktung auf Wunsch unserer Eigentümer"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base leading-relaxed opacity-80">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-foreground)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 lg:mt-32">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-[var(--color-foreground)] text-[var(--color-background)] px-10 py-5 text-[11px] uppercase tracking-widest font-bold hover:bg-black transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </motion.div>
            
            {/* Column 3: Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="lg:col-span-5 relative h-[500px] md:h-[600px] xl:h-[700px] w-full mt-12 lg:mt-0"
            >
              <Image 
                src="/images/unternehmen-ganzheitliches-management.jpg"
                alt="MEK Ganzheitliches Management Team"
                fill 
                className="object-cover" 
              />
              {/* Decorative Box */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl z-20 max-w-xs border-t-4 border-[var(--color-foreground)] hidden md:block">
                <p className="font-serif italic text-2xl mb-2 text-[var(--color-foreground)]">
                  "Seit 20 Jahren leben wir Immobilien."
                </p>
                <p className="text-xs uppercase tracking-widest font-bold mt-4">
                  Mekarius Sirgious<br/>
                  <span className="opacity-60 font-normal">Gründer & CEO</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Credo Section */}
        <section className="py-24 md:py-32 bg-[var(--color-foreground)] text-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-[11px] uppercase tracking-widest font-bold mb-8 opacity-60">
                Unser Credo
              </h3>
              <p className="font-serif italic text-3xl md:text-5xl leading-tight opacity-90">
                "Nur wer eigene Immobilien im Bestand hält, saniert, projektiert und entwickelt, weiß worauf es bei der Vermietung, Verwaltung, Vermittlung, Vermarktung und beim Verkauf ankommt."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 md:py-32">
          <div className="container-custom">
            <div className="w-full h-px bg-[var(--color-foreground)]/10 mb-20 md:mb-32"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="text-center mb-20 md:mb-32"
            >
              <h2 className="font-serif italic text-3xl md:text-5xl mb-6 text-[var(--color-foreground)]">
                Unsere Unternehmenswerte
              </h2>
              <p className="text-[11px] uppercase tracking-widest font-bold opacity-60">
                So führen wir Sie zur erfolgreichen Transaktion
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto flex flex-col">
              {[
                {
                  id: "01",
                  title: "MEK",
                  text: "Wir sind für Sie vor Ort und den anderen Unternehmen auf dem MARKT einen weiten Sprung voraus. Mit endlosem ENGAGEMENT und positiver Energie wird unser gemeinsames KONZEPT Sie ganzheitlich zufriedenstellen."
                },
                {
                  id: "02",
                  title: "Integer",
                  text: "Absolute Verlässlichkeit ist unser Fundament. Verschwiegenheit, strengster Datenschutz und Diskretion spiegeln sich kompromisslos in jedem unserer Arbeitsschritte wider."
                },
                {
                  id: "03",
                  title: "Passion",
                  text: "Ganz nach unserem Credo besitzen und verwalten wir selbst Immobilien. Wir kennen die Bedürfnisse unserer Kunden persönlich sehr gut und behandeln jede uns anvertraute Immobilie so, als wäre es unsere eigene."
                },
                {
                  id: "04",
                  title: "Historie",
                  text: "In unserem Unternehmensverbund sind viele Jahrzehnte an gebündelter Berufserfahrung vereint. Diese tiefe Expertise wird präzise und maßgeschneidert an unsere Kunden weitergegeben."
                }
              ].map((value, idx) => (
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
                      {value.id}
                    </span>
                  </div>
                  <div className="w-full md:w-1/3 shrink-0 pt-1 md:pt-4">
                    <h4 className="text-xl md:text-2xl font-medium tracking-widest uppercase text-[var(--color-foreground)]/90">{value.title}</h4>
                  </div>
                  <div className="w-full md:flex-1 pt-1 md:pt-4">
                    <p className="text-base md:text-lg opacity-70 leading-relaxed font-light">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="w-full border-t border-[var(--color-foreground)]/10"></div>
            </div>
          </div>
        </section>

        {/* Final Quote */}
        <section className="py-24 md:py-32 bg-[var(--color-foreground)]/5">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif italic text-4xl md:text-6xl mb-12 text-[var(--color-foreground)]">
                "Man lebt nur einmal, <br/> wir zeigen Ihnen, wo!"
              </h2>
              <div className="space-y-6 text-base md:text-lg opacity-80 leading-relaxed mb-12">
                <p>
                  Ob Sie ein exklusives Anwesen kaufen möchten, ein gemütliches Häuschen im Grünen suchen, endlich in einer Wohnung mit Balkon leben wollen oder ein Zimmer mehr für Ihr Baby brauchen, wir von der MEK Immobiliengruppe finden für Sie Ihr neues Zuhause – kompetent, seriös und erfahren.
                </p>
                <p>
                  Ob Sie Ihre Immobilie veräußern wollen, Ihr Elternhaus in gute Hände geben möchten oder solvente Mieter für Ihre Eigentumswohnung suchen, wir kümmern uns darum – diskret und engagiert.
                </p>
                <p>
                  Wir nehmen uns Zeit für Sie. Wir beraten und begleiten Sie mit profundem Fachwissen, Menschenkenntnis und Feingefühl. Eine individuelle und persönliche Betreuung zeichnet uns aus.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <TeamSlider />
      <ContactSection />
    </div>
  );
}
