import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-white py-16">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight mb-6 inline-block">
            MEK<span className="text-[var(--color-accent-champagne)]">.</span>
          </Link>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">
            Premium Immobilienmanagement für höchste Ansprüche. Diskrete Vermittlung und ganzheitliche Betreuung.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-serif mb-6">Kontakt</h4>
          <address className="not-italic text-white/70 text-sm flex flex-col gap-3">
            <p>MEK IMMOBILIEN GMBH</p>
            <p>Obere Grabenstraße 6</p>
            <p>69190 Walldorf</p>
            <a href="tel:+4962214348215" className="hover:text-white transition-colors mt-2">
              +49 (0) 6221 434 82 15
            </a>
            <a href="mailto:info@mek-ig.de" className="hover:text-white transition-colors">
              info@mek-ig.de
            </a>
          </address>
        </div>


        <div>
          <h4 className="text-lg font-serif mb-6">Service</h4>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/immobilienservice" className="hover:text-white transition-colors">Immobilienservice</Link>
            <Link href="/finanzservice" className="hover:text-white transition-colors">Finanzservice</Link>
            <Link href="/hausverwaltung" className="hover:text-white transition-colors">Hausverwaltung</Link>
            <Link href="/handwerkerservice" className="hover:text-white transition-colors">Handwerkerservice</Link>
            <Link href="/vermarktung" className="hover:text-white transition-colors">Vermarktungsservice</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6">Rechtliches</h4>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="#" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} MEK IMMOBILIEN GMBH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
