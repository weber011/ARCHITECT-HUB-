"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, Clock, Building } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

interface AboutUsProps {
  onOpenQuote: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuote }) => {
  const highlights = [
    {
      title: "Thoughtful Architectural Planning",
      desc: "Every structure is rooted in spatial harmony, environmental adaptation, and structural feasibility before ground is broken.",
      icon: Ruler,
    },
    {
      title: "Uncompromising Construction Quality",
      desc: "From foundation reinforcement to final surface textures, we prioritize grade-A materials and structural longevity.",
      icon: ShieldCheck,
    },
    {
      title: "Attention to Structural Detail",
      desc: "Meticulous oversight across MEP conduits, joinery lines, and structural tolerances eliminates costly oversights.",
      icon: Building,
    },
    {
      title: "Continuous 24-Hour Commitment",
      desc: "Operating around the clock to provide responsive client advisory and transparent milestone progress.",
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-gold/25 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                alt="Architect Hub Constructions Site Execution & Planning"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-gold/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/40">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ivory tracking-wide">
                      {COMPANY_INFO.name}
                    </p>
                    <p className="text-[11px] text-mutedText">
                      {COMPANY_INFO.category} • {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Offset Architectural Accent Border */}
            <div className="absolute -inset-2 -z-10 rounded-2xl border border-gold/15 hidden sm:block" />
          </div>

          {/* Right Column: Company Introduction & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span>About Architect Hub Constructions</span>
            </div>

            {/* Primary Section Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight leading-tight">
              Building With Vision. <br />
              <span className="text-gold-light italic font-normal">
                Delivering With Excellence.
              </span>
            </h2>

            {/* Editorial Introduction */}
            <div className="mt-6 space-y-4 text-mutedText-light text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-ivory font-semibold">{COMPANY_INFO.name}</strong>, we believe that every structure should be a testament to deliberate planning, robust engineering, and timeless aesthetics. Based in Tamkuhi, Kushinagar, Uttar Pradesh, we provide dedicated construction and architectural solutions tailored to clients who value precision and durability.
              </p>
              <p>
                From private luxury residences to commercial spaces, our approach combines thoughtful architectural blueprints with disciplined on-site craftsmanship. We manage every phase with obsessive attention to detail—ensuring structural integrity, transparent communication, and client satisfaction from initial soil assessment through project handover.
              </p>
            </div>

            {/* Key Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/5 bg-charcoal-800/60 hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <IconComponent className="w-4 h-4 text-gold shrink-0" />
                      <h3 className="text-xs sm:text-sm font-semibold text-ivory">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-mutedText leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-charcoal shadow-lg shadow-gold/20 hover:bg-gold-light transition-all active:scale-95"
              >
                <span>Discover More & Consult</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mutedText-light hover:text-gold transition-colors py-3 px-4 border border-white/10 rounded-lg hover:border-gold/30"
              >
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
