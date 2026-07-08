"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const expertiseData = [
  {
    id: "01",
    title: "Exklusive Vermarktung",
    text: "Wir positionieren Ihre Immobilie optimal am Markt. Ob diskrete Off-Market-Transaktion oder reichweitenstarke Premium-Kampagne – wir erzielen Höchstpreise.",
    image: "/images/exklusive-vermarktung-luxusimmobilien.jpg"
  },
  {
    id: "02",
    title: "Gezielte Akquisition",
    text: "Entdecken Sie außergewöhnliche Wohnwelten und lukrative Investments. Wir öffnen Ihnen Türen zu Immobilien, die Ihren Ansprüchen gerecht werden.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "03",
    title: "Vermietung & Management",
    text: "Von der sorgfältigen Bonitätsprüfung bis zur Vertragsunterzeichnung sichern wir nachhaltige Renditen durch die Auswahl erstklassiger Mieter.",
    image: "/images/vermietung-management-immobilien.jpg"
  },
  {
    id: "04",
    title: "Ganzheitliche Betreuung",
    text: "Maßgeschneiderte Finanzierungskonzepte und ein verlässliches Netzwerk aus Premium-Handwerkern. Ein Ansprechpartner für alle Belange.",
    image: "/images/ganzheitliche-betreuung-immobilien-service-v2.jpg"
  },
  {
    id: "05",
    title: "Immobilien-Bewertung",
    text: "Präzise und marktgerechte Wertermittlung Ihrer Immobilie durch zertifizierte Experten. Die solide Basis für Ihren Verkaufserfolg.",
    image: "/images/immobilienbewertung-wertermittlung-haus.jpg"
  },
  {
    id: "06",
    title: "Off-Market Deals",
    text: "Diskrete Transaktionen abseits des öffentlichen Marktes. Wir verbinden exklusive Objekte mit bonitätsstarken, geprüften Käufern.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  }
];

export interface SliderItem {
  id: string;
  title: string;
  text: string;
  image: string;
}

export default function ExpertiseSlider({ data = expertiseData }: { data?: SliderItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  const itemsToDisplay = data;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % itemsToDisplay.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + itemsToDisplay.length) % itemsToDisplay.length);

  return (
    <div className="relative w-full flex items-center justify-center py-12 md:py-24 overflow-hidden">
      
      {/* Wrapper for the whole slider including arrows */}
      <div className="relative w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-12">
        
        {/* Left Arrow */}
        <button onClick={prev} className="z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[var(--color-foreground)]/30 flex items-center justify-center hover:bg-[var(--color-foreground)] hover:text-white transition-colors text-[var(--color-foreground)] bg-transparent shrink-0">
          <ArrowLeft size={28} strokeWidth={1} />
        </button>

        {/* Cards Container with overflow-hidden to clip outer cards */}
        <div className="relative flex-1 h-[400px] md:h-[450px] overflow-hidden mx-4 md:mx-12">
          <div className="absolute inset-0 flex items-center justify-center">
            {itemsToDisplay.map((item, index) => {
              let offset = index - currentIndex;
              const total = itemsToDisplay.length;
              
              if (offset > Math.floor(total / 2)) offset -= total;
              if (offset < -Math.floor(total / 2)) offset += total;

              let x = "0%";
              let scale = 1;
              let zIndex = 20;
              let opacity = 1;

              const isMobile = windowWidth < 768;

              if (offset === 0) {
                x = "0%"; scale = 1; zIndex = 30; opacity = 1;
              } else if (offset === 1) {
                x = isMobile ? "105%" : "35%"; scale = 0.85; zIndex = 20; opacity = 1;
              } else if (offset === 2) {
                x = isMobile ? "200%" : "65%"; scale = 0.7; zIndex = 10; opacity = isMobile ? 0 : 1;
              } else if (offset === -1) {
                x = isMobile ? "-105%" : "-35%"; scale = 0.85; zIndex = 20; opacity = 1;
              } else if (offset === -2) {
                x = isMobile ? "-200%" : "-65%"; scale = 0.7; zIndex = 10; opacity = isMobile ? 0 : 1;
              } else {
                x = "0%"; scale = 0.5; zIndex = 0; opacity = 0;
              }

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{ x, scale, zIndex, opacity }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className="absolute w-[85%] md:w-[550px] lg:w-[720px] h-[350px] lg:h-[380px] bg-white shadow-2xl shadow-black/5 p-2 flex flex-col md:flex-row"
                  style={{ transformOrigin: "center center" }}
                >
                  {/* Content */}
                  <div className="flex-1 py-4 px-4 md:py-8 lg:py-10 md:pl-8 lg:pl-10 md:pr-6 lg:pr-8 flex flex-col justify-center order-2 md:order-1">
                    <div className="flex items-center gap-4 lg:gap-6 mb-5 lg:mb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[var(--color-background)] flex items-center justify-center shrink-0">
                        <span className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)]">{item.id}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[var(--color-foreground)] leading-[1.15] max-w-[180px]">{item.title}</h3>
                    </div>
                    <p className="text-[var(--color-foreground)]/70 text-sm md:text-base lg:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  {/* Image */}
                  <div className="w-full md:w-[240px] lg:w-[300px] h-[150px] md:h-full relative shrink-0 order-1 md:order-2 rounded-sm overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={next} className="z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[var(--color-foreground)]/30 flex items-center justify-center hover:bg-[var(--color-foreground)] hover:text-white transition-colors text-[var(--color-foreground)] bg-transparent shrink-0">
          <ArrowRight size={28} strokeWidth={1} />
        </button>

      </div>
    </div>
  );
}
