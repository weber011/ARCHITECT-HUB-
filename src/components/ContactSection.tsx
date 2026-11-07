"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";
import { QuoteForm } from "./QuoteForm";

export const ContactSection: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <span>Direct Communication</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight">
            Consult With Our <br />
            <span className="text-gold-light italic font-normal">
              Architectural Team
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-mutedText leading-relaxed">
            Whether you are planning a new residence, developing a commercial facility, or require structural advisory, we are here 24 hours a day to assist you.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="rounded-2xl border border-white/10 bg-charcoal-800/70 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-display text-xl font-bold text-ivory pb-4 border-b border-white/10">
                Official Business Credentials
              </h3>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Phone & WhatsApp
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-bold text-ivory hover:text-gold transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Official Email
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base font-bold text-ivory hover:text-gold transition-colors block mt-0.5 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Office & Registered Address
                  </p>
                  <p className="text-sm text-ivory mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Working Schedule
                  </p>
                  <p className="text-sm font-semibold text-gold-light mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                  <p className="text-xs text-mutedText mt-0.5">
                    24/7 emergency site support and project inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Location */}
            <div className="rounded-2xl border border-white/10 bg-charcoal-800/70 p-4 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-ivory uppercase tracking-wider">
                    Site Location • Tamkuhi Raj
                  </span>
                </div>
                <a
                  href={COMPANY_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-gold hover:underline"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Embed Iframe */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5 bg-charcoal-900">
                <iframe
                  title="Architect Hub Constructions Location"
                  src={COMPANY_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(30%) contrast(1.1) invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2.5 px-2 text-[11px] text-mutedText leading-relaxed">
                Tamkuhi Ward No. 1, Shastri Nagar, Bhatwaliya, Kushinagar, Uttar Pradesh 274407
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gold/30 bg-charcoal-800/80 p-6 sm:p-10 shadow-2xl glass-panel">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ivory">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-mutedText mt-1">
                    Fill in your details below to generate a pre-formatted WhatsApp consultation request.
                  </p>
                </div>
                <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>

              {/* Interactive Quote Form */}
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
