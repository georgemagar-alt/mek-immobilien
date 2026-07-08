"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-background)] flex flex-col items-center justify-center text-center px-4 border-t border-[var(--color-foreground)]/5 border-b">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl flex flex-col items-center"
      >
        {/* Decorative line (SVG) */}
        <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8">
          <path d="M0 10 Q 10 0, 20 10 T 40 5" stroke="var(--color-foreground)" strokeWidth="1.5" fill="none" />
        </svg>

        <p className="text-[var(--color-foreground)]/80 text-base md:text-lg leading-relaxed mb-10">
          Nicht das passende Objekt dabei? Wir finden etwas Besseres.<br className="hidden md:block" />
          Senden Sie uns eine Anfrage und wir teilen weitere exklusive Angebote mit Ihnen.
        </p>

        <Link 
          href="#kontakt" 
          className="bg-[var(--color-foreground)] text-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl"
        >
          WEITERE OPTIONEN ANFRAGEN
        </Link>
      </motion.div>
    </section>
  );
}
