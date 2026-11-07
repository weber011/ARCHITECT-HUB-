"use client";

import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  serviceTitle = "",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-gold/30 bg-charcoal-800 p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-mutedText hover:bg-white/5 hover:text-ivory transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wider text-gold-light uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Consultation Request</span>
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ivory">
            Get an Architectural Quote
          </h3>
          <p className="mt-1 text-sm text-mutedText">
            Provide your requirements to receive direct WhatsApp consultation with our senior project leads.
          </p>
        </div>

        {/* Form Body */}
        <QuoteForm
          initialService={serviceTitle}
          onSuccess={() => {
            setTimeout(onClose, 2000);
          }}
        />
      </div>
    </div>
  );
};
