"use client";

import React from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Compass,
  Palette,
  Wrench,
  ClipboardCheck,
  MessageCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import { SERVICES_LIST, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return Home;
      case "Building2":
        return Building2;
      case "Compass":
        return Compass;
      case "Palette":
        return Palette;
      case "Wrench":
        return Wrench;
      case "ClipboardCheck":
        return ClipboardCheck;
      default:
        return Building2;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-charcoal">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 architect-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <span>Expertise & Capabilities</span>
            <span className="w-5 h-[1px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight">
            Our Architectural & <br />
            <span className="text-gold-light italic font-normal">
              Construction Services
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-mutedText leading-relaxed">
            Delivering comprehensive, end-to-end solutions from conceptual drafting and structural engineering to turnkey construction and interior execution.
          </p>
        </div>

        {/* Services Grid (6 Services) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => {
            const IconComponent = getIcon(srv.icon);
            const serviceWaUrl = getWhatsAppLink(WHATSAPP_MESSAGES.service(srv.title));

            return (
              <div
                key={srv.id}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-charcoal-800/80 overflow-hidden shadow-xl glass-panel-hover"
              >
                {/* Service Card Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

                  {/* Floating Minimal Line Icon */}
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-charcoal-950/90 text-gold shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 stroke-[1.75]" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ivory group-hover:text-gold-light transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-mutedText-light leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    {/* Feature bullets */}
                    <ul className="mt-4 space-y-1.5 pt-4 border-t border-white/5">
                      {srv.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-mutedText">
                          <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                      title={`Inquire about ${srv.title} via WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    <button
                      onClick={() => onSelectServiceForQuote(srv.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                      title="Request a customized quote for this service"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-mutedText/80">
            * Proposed service catalog for client consultation. Specific structural requirements and customized scope can be reviewed with our planning engineers.
          </p>
        </div>
      </div>
    </section>
  );
};
