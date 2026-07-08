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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
