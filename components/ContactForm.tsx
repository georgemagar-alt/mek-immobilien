"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sende...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get Web3Forms Access Key from env (public)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("Fehler: Web3Forms Key fehlt.");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Erfolgreich gesendet!");
        form.reset();
      } else {
        setStatus("Fehler beim Senden. Bitte versuchen Sie es später.");
      }
    } catch (error) {
      setStatus("Ein Fehler ist aufgetreten.");
    }
  };

  return (
    <div className="bg-[var(--color-background)] p-10 md:p-14 shadow-2xl w-full max-w-[500px] ml-auto relative z-10">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-serif text-[var(--color-foreground)] mb-3">MEK<span className="text-[var(--color-accent-champagne)]">.</span></h3>
        <p className="text-[var(--color-foreground)]/60 text-xs uppercase tracking-widest max-w-[280px] mx-auto leading-relaxed">
          Wir rufen Sie an, klären alle Details und bieten Ihnen die besten Optionen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Anti-Spam Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          placeholder="Ihr Name*"
          required
          className="w-full px-5 py-4 bg-white text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/40 border border-black/5 focus:outline-none focus:border-[var(--color-foreground)]/30 transition-colors text-sm"
        />

        <input
          type="text"
          name="phone"
          placeholder="Ihre Telefonnummer*"
          required
          className="w-full px-5 py-4 bg-white text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/40 border border-black/5 focus:outline-none focus:border-[var(--color-foreground)]/30 transition-colors text-sm"
        />

        <div className="relative">
          <select
            name="goal"
            className="w-full px-5 py-4 bg-white text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/40 border border-black/5 focus:outline-none focus:border-[var(--color-foreground)]/30 transition-colors text-sm appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled className="text-[var(--color-foreground)]/40">Ihr Anliegen</option>
            <option value="Verkauf">Verkauf</option>
            <option value="Kauf">Kauf</option>
            <option value="Vermietung">Vermietung</option>
            <option value="Beratung">Allgemeine Beratung</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-xs">
            ▼
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-[var(--color-foreground)] text-white font-medium uppercase tracking-widest text-[11px] py-5 hover:bg-black transition-colors"
        >
          Anfrage senden
        </button>

        {status && (
          <p className="text-center text-sm mt-4 text-[var(--color-foreground)]">
            {status}
          </p>
        )}

        <p className="text-center text-[9px] text-[var(--color-foreground)]/40 uppercase tracking-widest mt-6 leading-relaxed max-w-[250px] mx-auto">
          Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
        </p>
      </form>
    </div>
  );
}
