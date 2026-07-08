"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[var(--color-background)] text-[var(--color-foreground)] shadow-sm py-4" : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-3xl font-serif tracking-tight">
          MEK
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-10">
          <Link href="/immobilienservice" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Immobilienservice
          </Link>
          <Link href="/finanzservice" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Finanzservice
          </Link>
          <Link href="/hausverwaltung" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Hausverwaltung
          </Link>
          <Link href="/handwerkerservice" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Handwerk
          </Link>
          <Link href="/vermarktung" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Vermarktung
          </Link>
          <Link href="/ueber-uns" className="text-[10px] font-medium tracking-widest uppercase hover:opacity-70 transition-opacity">
            Über uns
          </Link>
        </nav>

        {/* Right: Contact & CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex flex-col gap-1 text-[11px]">
            <a href="tel:+4962214348215" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Phone size={12} /> +49 (0) 6221 434 82 15
            </a>
            <span className="flex items-center gap-2 opacity-80">
              <MapPin size={12} /> Rhein-Neckar / Rhein Main
            </span>
          </div>
          <a
            href="#kontakt"
            className={`text-[10px] font-bold uppercase tracking-widest px-8 py-4 transition-colors ${
              isScrolled 
                ? "bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-black" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Erstgespräch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-background)] text-[var(--color-foreground)] border-t border-[var(--color-foreground)]/10 shadow-xl xl:hidden flex flex-col p-8 gap-6">
          <Link href="/immobilienservice" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Immobilienservice</Link>
          <Link href="/finanzservice" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Finanzservice</Link>
          <Link href="/hausverwaltung" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Hausverwaltung</Link>
          <Link href="/handwerkerservice" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Handwerkerservice</Link>
          <Link href="/vermarktung" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Vermarktungsservice</Link>
          <div className="border-t border-black/5 my-2"></div>
          <Link href="/ueber-uns" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Über uns</Link>
          <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Kontakt</a>
        </div>
      )}
    </header>
  );
}
