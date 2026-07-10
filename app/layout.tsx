import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEK Immobilien GmbH | Exzellenz im Immobilienmanagement",
  description: "Diskrete Vermittlung, exklusive Objekte und ganzheitliche Betreuung – von der präzisen Wertermittlung bis zum erfolgreichen Abschluss.",
};

const MAINTENANCE_MODE = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (MAINTENANCE_MODE) {
    return (
      <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
        <body className="antialiased min-h-screen flex flex-col bg-gray-50">
          <main className="flex-grow flex items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A365D]/10 text-[#1A365D]">
                  <svg className="w-8 h-8 animate-[spin_3s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Wartungsarbeiten</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wir aktualisieren unsere Website, um Ihnen in Kürze einen noch besseren Service bieten zu können. Bitte haben Sie etwas Geduld – wir sind bald wieder für Sie da.
              </p>
              <div className="pt-6 border-t border-gray-100 text-sm text-gray-500">
                <p className="font-medium text-gray-900 mb-1">MEK Immobilien GmbH</p>
                <a href="mailto:info@mek-immobilien.de" className="text-[#1A365D] hover:underline transition-colors">
                  info@mek-immobilien.de
                </a>
              </div>
            </div>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
