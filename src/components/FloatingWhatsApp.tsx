"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Subtle Micro Floating Tooltip */}
      {showTooltip && (
        <div className="relative mb-2 hidden sm:flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-charcoal-900/95 py-2 px-3 text-xs shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-ivory font-medium">
            Chat with us • <span className="text-gold-light">24/7 Online</span>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-mutedText hover:text-ivory ml-1"
            aria-label="Dismiss message"
          >
            <X className="h-3 w-3" />
          </button>
          {/* Caret */}
          <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-r border-b border-emerald-500/30 bg-charcoal-900/95" />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-emerald-400 active:scale-95"
        aria-label="Contact Architect Hub Constructions on WhatsApp"
        title="Chat on WhatsApp (+91 88580 56115)"
      >
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />

        {/* Small Active Green Status Dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-charcoal-900" />
        </span>
      </a>
    </div>
  );
};
