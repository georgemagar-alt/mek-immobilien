import React from "react";
import PageHeader from "@/components/PageHeader";

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Impressum"
        subtitle="Rechtliche Angaben"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 md:py-32 bg-[var(--color-background)]">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg prose-headings:font-medium prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[var(--color-foreground)] hover:prose-a:text-gray-500 text-[var(--color-foreground)]/80">
            
            <h2 className="text-2xl mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>MEK IMMOBILIEN GMBH</strong><br />
              -CLASSICAL AND REAL ESTATE-<br />
              Obere Grabenstraße 6<br />
              69190 Walldorf
            </p>

            <h2 className="text-2xl mt-8 mb-4">Vertreten durch</h2>
            <p>
              Geschäftsführer: Mekarius Sirgious
            </p>

            <h2 className="text-2xl mt-8 mb-4">Kontakt</h2>
            <p>
              Telefon: +49 (0) 6221 434 82 15<br />
              E-Mail: <a href="mailto:info@mek-ig.de">info@mek-ig.de</a>
            </p>

            <h2 className="text-2xl mt-8 mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Mannheim<br />
              Registernummer: HRB 65043
            </p>

            <h2 className="text-2xl mt-8 mb-4">Umsatzsteuer-ID & Steuernummer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE307992037<br />
              <br />
              Steuernummer:<br />
              32/496/02609
            </p>

            <h2 className="text-2xl mt-8 mb-4">Aufsichtsbehörde (gem. § 34c GewO)</h2>
            <p>
              <em>Erlaubnis nach § 34c Absatz 1 Satz 1 Nummer 1 Gewerbeordnung (Immobilienmakler)</em><br />
              Zuständige Aufsichtsbehörde: IHK Rhein-Neckar, L 1, 2, 68161 Mannheim 
              <br /><span className="text-sm text-red-500/80">(Hinweis: Bitte prüfen Sie, ob die IHK Rhein-Neckar oder das örtliche Landratsamt/Ordnungsamt Ihre zuständige Erlaubnisbehörde nach §34c ist und passen Sie diese Angabe ggf. an.)</span>
            </p>

            <h2 className="text-2xl mt-8 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Mekarius Sirgious<br />
              Telefon: +49 (0) 163 481 26 47<br />
              Obere Grabenstraße 6<br />
              69190 Walldorf
            </p>

            <h2 className="text-2xl mt-8 mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-2xl mt-8 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl mt-8 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2 className="text-2xl mt-8 mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2 className="text-2xl mt-8 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
