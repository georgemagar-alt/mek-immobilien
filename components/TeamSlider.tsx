"use client";

import Image from "next/image";
import Link from "next/link";

const expertData = {
  name: "Mekarius Sirgious",
  role: "Gründer & CEO",
  image: "/images/mekarius-sirgious-immobilienmakler.jpg",
  stats: [
    { highlight: "26+ Jahre", text: "Erfahrung im Premium-Immobilienmarkt" },
    { highlight: "1.2+ Mio", text: "betreute Interessenten und Eigentümer" },
    { highlight: "Exklusives", text: "Netzwerk aus Immobilienexperten und Investoren" }
  ],
  buttonText: "EXPERTISE ANFRAGEN",
  buttonLink: "#kontakt"
};

export default function TeamSlider() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-background)] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="xl:w-1/2 flex flex-col justify-center">
            <div>
              {/* Decorative line (SVG) */}
              <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-10">
                <path d="M0 10 Q 10 0, 20 10 T 40 5" stroke="var(--color-foreground)" strokeWidth="1.5" fill="none" />
              </svg>

              <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-[var(--color-foreground)] font-medium uppercase tracking-tight leading-[1] mb-1">
                IHR PERSÖNLICHER<br/>EXPERTE
              </h2>
              <span className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] tracking-tight block mb-10">
                immer an Ihrer Seite
              </span>

              <p className="text-[var(--color-foreground)]/80 text-sm md:text-base leading-relaxed max-w-md">
                Mit jahrelanger Erfahrung in der Immobilienbranche und einem weitreichenden Netzwerk begleite ich Sie persönlich bei jedem Schritt. Transparent, zielgerichtet und ohne Illusionen. Für Immobilienentscheidungen ohne Risiko.
              </p>
            </div>
          </div>

          {/* Right Column: Single Hover Card */}
          <div className="xl:w-1/2 w-full flex justify-end mt-8 xl:mt-0">
            {/* The group class enables the hover effect for children */}
            <div className="relative w-[90vw] md:w-[450px] h-[550px] group overflow-hidden shadow-2xl cursor-pointer">
              
              {/* Base State: Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gray-200">
                <Image 
                  src={expertData.image} 
                  alt={expertData.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-3xl font-medium mb-1 drop-shadow-md">{expertData.name}</h4>
                  <p className="text-xs text-white/80 uppercase tracking-widest">{expertData.role}</p>
                </div>
              </div>

              {/* Hover State: Info Card */}
              {/* Starts completely transparent, becomes fully visible on group-hover */}
              <div className="absolute inset-0 bg-white p-8 md:p-12 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 border border-black/5 translate-y-4 group-hover:translate-y-0">
                <div>
                  <h4 className="text-3xl font-medium text-[var(--color-foreground)] mb-1">{expertData.name}</h4>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-foreground)]/50 mb-10">{expertData.role}</p>
                  
                  <ul className="space-y-6">
                    {expertData.stats.map((stat, i) => (
                      <li key={i} className="flex gap-4 text-sm text-[var(--color-foreground)]/80 leading-relaxed items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-foreground)] shrink-0 mt-2"></span>
                        <p>
                          <strong className="font-bold text-[var(--color-foreground)]">{stat.highlight}</strong> {stat.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={expertData.buttonLink} 
                  className="w-full text-center bg-[var(--color-foreground)] text-white font-bold uppercase tracking-widest text-[11px] py-5 hover:bg-black transition-colors mt-8 block"
                >
                  {expertData.buttonText}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
