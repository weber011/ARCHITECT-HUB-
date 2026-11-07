"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY_INFO, SERVICES_LIST, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const whatsappUrl = getWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <footer className="relative bg-charcoal-950 text-ivory border-t border-gold/15 pt-20 pb-12 overflow-hidden">
      {/* Background Architectural Accent Grid */}
      <div className="absolute inset-0 architect-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Intro */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-mutedText leading-relaxed">
              Architect Hub Constructions delivers comprehensive architectural planning, bespoke residential villas, and commercial developments engineered to endure for generations.
            </p>

            {/* Social & Direct Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-md"
                aria-label="WhatsApp Architect Hub Constructions"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"
                aria-label="Facebook Page Architect Hub"
                title="Facebook: Architect Hub"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-10 h-10 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all shadow-md"
                aria-label="Call Architect Hub Constructions"
                title="Call 24/7"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-mutedText hover:text-ivory hover:translate-x-1 transition-all inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Proposed Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="text-mutedText hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Headquarters
            </h4>
            <ul className="space-y-3.5 text-xs text-mutedText leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-ivory transition-colors font-medium text-ivory"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-ivory transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-gold-light font-medium">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mutedText">
          <p>
            © {new Date().getFullYear()} <span className="text-ivory font-medium">{COMPANY_INFO.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-mutedText/80">
              Kushinagar, Uttar Pradesh – 274407
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors p-1"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
