"use client";

import React from "react";
import { ShieldCheck, Compass, Ruler, Users, CheckCircle2, PhoneCall } from "lucide-react";
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from "@/data/company";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return ShieldCheck;
      case "DraftingCompass":
        return Compass;
      case "Ruler":
        return Ruler;
      case "UsersCheck":
        return Users;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-charcoal overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 architect-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <span>The Architect Hub Difference</span>
            <span className="w-5 h-[1px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight">
            Why Discerning Clients <br />
            <span className="text-gold-light italic font-normal">
              Trust Our Standards
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-mutedText leading-relaxed">
            Every square foot we construct is governed by systematic engineering, verified materials, and transparent client communication.
          </p>
        </div>

        {/* 4 Key Points Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-charcoal-800/60 p-8 transition-all duration-300 hover:border-gold/40 hover:bg-charcoal-800 hover:-translate-y-1 shadow-lg"
              >
                {/* Header with Number and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-2xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl border border-gold/25 bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:border-gold/60 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-ivory group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-gold/80 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24 Hours Availability Banner */}
        <div className="mt-16 rounded-2xl border border-gold/30 bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-charcoal-900 p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full border border-gold/40 bg-gold/15 flex items-center justify-center text-gold shrink-0">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-ivory">
                24 Hours Construction Advisory & Site Assistance
              </h4>
              <p className="text-xs sm:text-sm text-mutedText mt-0.5">
                Our helpline is accessible anytime at {COMPANY_INFO.phone} for emergency site consults or urgent project inquiries.
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 rounded-lg bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
