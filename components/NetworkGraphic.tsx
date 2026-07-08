"use client";

import { motion } from "framer-motion";
import { Search, Building2, Globe, MonitorSmartphone, Gavel, Users, ShieldCheck, Megaphone } from "lucide-react";

export default function NetworkGraphic() {
  const logos = [
    { name: "ImmoScout24", icon: <Search className="w-6 h-6 text-[#FF6B00]" /> },
    { name: "Immonet", icon: <Building2 className="w-6 h-6 text-[#005EA8]" /> },
    { name: "Immowelt", icon: <Globe className="w-6 h-6 text-[#FFCC00]" /> },
    { name: "Kleinanzeigen", icon: <MonitorSmartphone className="w-6 h-6 text-[#86B817]" /> },
    { name: "Off-Market", icon: <ShieldCheck className="w-6 h-6 text-slate-700" /> },
    { name: "Käufernetzwerk", icon: <Users className="w-6 h-6 text-blue-600" /> },
    { name: "Versteigerung", icon: <Gavel className="w-6 h-6 text-amber-700" /> },
    { name: "Social Media", icon: <Megaphone className="w-6 h-6 text-pink-600" /> }
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="pt-12 md:pt-16 pb-0 bg-[var(--color-background)] overflow-hidden flex flex-col justify-center">
      
      <div className="container-custom mb-10 text-center">
        <h3 className="text-[11px] uppercase tracking-widest font-bold opacity-60 mb-4 text-[var(--color-foreground)]">Maximale Reichweite</h3>
        <p className="font-serif italic text-2xl md:text-4xl text-[var(--color-foreground)] opacity-90 max-w-2xl mx-auto leading-tight">
          Ihre Immobilie, prominent platziert auf allen relevanten Kanälen.
        </p>
      </div>

      <div className="w-full border-y border-[var(--color-foreground)]/10 py-10 relative">
        {/* Left/Right fading gradients to blend the edges into the white background */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // Moderate speed for logos
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              {logo.icon}
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
