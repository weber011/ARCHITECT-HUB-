"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

interface CallToActionProps {
  onOpenQuote: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuote }) => {
  const whatsappUrl = getWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-charcoal">
      {/* Background Architectural Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/project-3.jpg"
          alt="Architect Hub Constructions Vision"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 architect-grid opacity-20 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold Pill Accent */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal-900/80 px-4 py-1.5 backdrop-blur-md mb-6">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Start Your Construction Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory tracking-tight leading-tight">
          Let’s Build Something <br />
          <span className="text-gold-light italic font-normal">
            Extraordinary.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-mutedText-light leading-relaxed">
          Have a construction or architectural project in mind? Let’s discuss your vision and bring it to life.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Talk to Our Team */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-gold px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-charcoal shadow-xl shadow-gold/25 transition-all duration-300 hover:bg-gold-light hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span>Talk to Our Team</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg border border-emerald-500/50 bg-charcoal-900/90 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-emerald-400 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-950/30 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Request Quote Button */}
          <button
            onClick={onOpenQuote}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-charcoal-800/80 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold-light active:scale-95"
          >
            <FileText className="h-4 w-4 text-gold" />
            <span>Get a Detailed Quote</span>
          </button>
        </div>

        {/* Quick Contact Micro-bar */}
        <p className="mt-8 text-xs text-mutedText tracking-wider">
          Direct Line: <span className="text-ivory font-medium">{COMPANY_INFO.phone}</span> • Kushinagar, Uttar Pradesh • <span className="text-gold font-medium">{COMPANY_INFO.workingHours}</span>
        </p>
      </div>
    </section>
  );
};
