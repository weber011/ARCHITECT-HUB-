"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroWhatsAppUrl = getWhatsAppLink(WHATSAPP_MESSAGES.hero);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal pt-20 pb-16"
    >
      {/* Background Architectural Photograph with Depth Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Architect Hub Constructions - Modern Luxury Architecture & Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform animate-fade-in transition-transform duration-1000 ease-out"
        />
        {/* Subtle Dark Luxury Overlays for Superior Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/50" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
        <div className="absolute inset-0 architect-grid opacity-25 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col items-center text-center">
        {/* Small Heading with Architectural Accent */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-charcoal-900/80 px-4 py-1.5 shadow-lg backdrop-blur-md mb-6 sm:mb-8 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold uppercase">
            ARCHITECT HUB CONSTRUCTIONS
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory max-w-5xl leading-[1.08] drop-shadow-md">
          Building Dreams. <br />
          <span className="italic font-normal text-gold-light">
            Creating Landmarks.
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-mutedText-light font-normal leading-relaxed px-2">
          From thoughtful architectural planning to exceptional construction, we turn
          your vision into spaces built to inspire.
        </p>

        {/* CTA Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-gold px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-charcoal shadow-xl shadow-gold/20 transition-all duration-300 hover:bg-gold-light hover:shadow-gold/30 hover:scale-[1.02] active:scale-95"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: WhatsApp Consultation */}
          <a
            href={heroWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg border border-gold/40 bg-charcoal-900/90 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-charcoal-800 hover:text-gold-light active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Get a Free Consultation</span>
          </a>
        </div>

        {/* Trust Badges / Coordinates */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3.5 bg-charcoal-900/60 backdrop-blur-md p-3.5 rounded-xl border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-mutedText">Operating Schedule</p>
              <p className="text-xs font-semibold text-ivory">{COMPANY_INFO.workingHours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-charcoal-900/60 backdrop-blur-md p-3.5 rounded-xl border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-mutedText">Regional Location</p>
              <p className="text-xs font-semibold text-ivory">Tamkuhi, Kushinagar, UP</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-charcoal-900/60 backdrop-blur-md p-3.5 rounded-xl border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-mutedText">Construction Standard</p>
              <p className="text-xs font-semibold text-ivory">End-to-End Architectural Quality</p>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <a
          href="#about"
          onClick={handleScrollToNext}
          className="mt-12 inline-flex flex-col items-center text-mutedText hover:text-gold transition-colors duration-200 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border border-mutedText/40 group-hover:border-gold flex items-start justify-center p-1.5 transition-colors">
            <span className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
