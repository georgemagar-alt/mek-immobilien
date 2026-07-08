"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Bed, Bath, Car, Maximize } from "lucide-react";

const properties = [
  {
    id: 1,
    location: "Heidelberg, Baden-Württemberg",
    title: "VILLA AM HANG",
    description: "Eine großzügige, moderne Villa mit privatem Pool, grünem Innenhof, Outdoor-Lounge und 2 Etagen – gemacht für höchsten Familienkomfort und Diskretion.",
    stats: { beds: 5, baths: 3, cars: 2, area: 320 },
    price: "2.950.000 €",
    badge: "Neu im Angebot",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
    category: "KAUFEN"
  },
  {
    id: 2,
    location: "Mannheim, Oststadt",
    title: "STADTVILLA EXKLUSIV",
    description: "Moderne Architektur mit freiem Blick. 1 Etage, eigener Fitnessbereich, Patio-Lounge und absolute Privatsphäre im Herzen der Stadt.",
    stats: { beds: 3, baths: 2, cars: 2, area: 240 },
    price: "1.850.000 €",
    badge: "Renditeobjekt",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
    category: "INVESTIEREN"
  },
  {
    id: 3,
    location: "Weinheim, Bergstraße",
    title: "MODERN HILLSIDE",
    description: "Helle Hangvilla mit 2 Etagen, Rooftop-Lounge und stilvollem Interieur – ideal für entspanntes Familienleben mit Panorama-Ausblick.",
    stats: { beds: 4, baths: 3, cars: 3, area: 280 },
    price: "4.500 € / Monat",
    badge: "Miete",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80",
    category: "MIETEN"
  }
];

const tabs = ["KAUFEN", "INVESTIEREN", "MIETEN"];

export default function PropertyList() {
  const [activeTab, setActiveTab] = useState("KAUFEN");

  const filteredProperties = properties.filter(p => p.category === activeTab);
  // No fallback needed anymore since every tab has exactly 1 property
  const displayProperties = filteredProperties;

  return (
    <section id="angebote" className="bg-[var(--color-background)]">
      {/* Header Area */}
      <div className="container-custom py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] font-medium uppercase tracking-tight leading-none mb-1">
              WELCHE OPTION
            </h2>
            <span className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] tracking-tight block mb-8 lg:mb-12">
              passt zu Ihnen?
            </span>
            
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 md:px-10 py-3 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                    activeTab === tab 
                      ? "bg-[var(--color-foreground)] text-white border-[var(--color-foreground)]" 
                      : "bg-transparent text-[var(--color-foreground)] border-[var(--color-foreground)]/20 hover:border-[var(--color-foreground)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 text-right">
            <p className="text-[11px] uppercase tracking-widest text-[var(--color-foreground)]/60 max-w-[250px] text-left md:text-right">
              Wählen Sie Ihr Ziel und erhalten Sie eine kuratierte Auswahl, die perfekt auf Ihre Wünsche zugeschnitten ist.
            </p>
            {/* Swiggly Line SVG */}
            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 10 0, 20 10 T 40 5" stroke="var(--color-foreground)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Property List */}
      <div className="flex flex-col w-full border-t border-[var(--color-foreground)]/10">
        <AnimatePresence mode="popLayout">
          {displayProperties.map((property, index) => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group border-b border-white/10"
            >
              <Image 
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Base dark overlay */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/40"></div>
              {/* Left-to-right gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-0 container-custom py-10 flex flex-col justify-between">
                
                {/* Top Row: Location & Badge */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin size={16} />
                    <span className="text-xs md:text-sm font-medium">{property.location}</span>
                  </div>
                  <div className="bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)] shadow-lg">
                    {property.badge}
                  </div>
                </div>

                {/* Middle Content */}
                <div className="flex-1 flex flex-col justify-center max-w-2xl mt-8">
                  <h3 className="text-4xl md:text-6xl lg:text-[5rem] text-white font-medium uppercase tracking-tight mb-4 drop-shadow-md">
                    {property.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-xl drop-shadow-sm">
                    {property.description}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="bg-white/90 px-3 py-2 flex items-center gap-2 text-[var(--color-foreground)] text-[11px] font-bold">
                      <Bed size={14} /> {property.stats.beds}
                    </div>
                    <div className="bg-white/90 px-3 py-2 flex items-center gap-2 text-[var(--color-foreground)] text-[11px] font-bold">
                      <Bath size={14} /> {property.stats.baths}
                    </div>
                    <div className="bg-white/90 px-3 py-2 flex items-center gap-2 text-[var(--color-foreground)] text-[11px] font-bold">
                      <Car size={14} /> {property.stats.cars}
                    </div>
                    <div className="bg-white/90 px-3 py-2 flex items-center gap-2 text-[var(--color-foreground)] text-[11px] font-bold">
                      <Maximize size={14} /> {property.stats.area} m²
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Price & Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8">
                  <div className="text-white drop-shadow-md">
                    <span className="font-serif italic text-2xl md:text-3xl mr-3">ab</span>
                    <span className="text-3xl md:text-4xl font-medium tracking-tight">{property.price}</span>
                  </div>
                  
                  <a href="#kontakt" className="bg-white text-[var(--color-foreground)] px-8 md:px-10 py-4 md:py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl">
                    Immobilie ansehen
                  </a>
                </div>
                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
