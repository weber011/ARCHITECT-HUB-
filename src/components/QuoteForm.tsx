"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Building2, User, Phone, Mail, MapPin, FileText } from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST, WHATSAPP_MESSAGES, getWhatsAppLink } from "@/data/company";

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService = "",
  onSuccess,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || SERVICES_LIST[0].title,
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
      if (cleanPhone.length < 10) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Project location is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Please describe your project in at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp Message
    const message = WHATSAPP_MESSAGES.quote({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service,
      location: formData.location.trim(),
      description: formData.description.trim(),
    });

    const waLink = getWhatsAppLink(message);

    setSubmittedStatus("success");

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(waLink, "_blank", "noopener,noreferrer");
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className={`w-full ${className}`}>
      {submittedStatus === "success" ? (
        <div className="rounded-xl border border-gold/40 bg-charcoal-700/90 p-8 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="font-display text-xl font-bold text-ivory">
            Connecting to WhatsApp...
          </h4>
          <p className="mt-2 text-sm text-mutedText">
            Opening WhatsApp with your project specifications formatted for our architectural consultation team.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                const message = WHATSAPP_MESSAGES.quote(formData);
                window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:bg-emerald-500 active:scale-95"
            >
              Open WhatsApp Now
            </button>
            <button
              type="button"
              onClick={() => setSubmittedStatus("idle")}
              className="text-sm font-medium text-gold hover:underline"
            >
              Modify Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
                Full Name <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-mutedText">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full rounded-lg border bg-charcoal-900/80 py-3 pl-10 pr-4 text-sm text-ivory placeholder-mutedText/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold ${
                    errors.name ? "border-rose-500" : "border-white/10"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
                Phone Number <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-mutedText">
                  <Phone className="h-4 w-4" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full rounded-lg border bg-charcoal-900/80 py-3 pl-10 pr-4 text-sm text-ivory placeholder-mutedText/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold ${
                    errors.phone ? "border-rose-500" : "border-white/10"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
                Email Address <span className="text-xs lowercase text-mutedText">(Optional)</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-mutedText">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="e.g. client@example.com"
                  className="w-full rounded-lg border border-white/10 bg-charcoal-900/80 py-3 pl-10 pr-4 text-sm text-ivory placeholder-mutedText/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            {/* Service Required */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
                Service Required <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-mutedText">
                  <Building2 className="h-4 w-4" />
                </div>
                <select
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: "" });
                  }}
                  className={`w-full rounded-lg border bg-charcoal-900/80 py-3 pl-10 pr-8 text-sm text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold ${
                    errors.service ? "border-rose-500" : "border-white/10"
                  }`}
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-charcoal text-ivory">
                      {srv.title}
                    </option>
                  ))}
                  <option value="General Architectural Inquiry" className="bg-charcoal text-ivory">
                    General Architectural Inquiry
                  </option>
                </select>
              </div>
              {errors.service && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.service}
                </p>
              )}
            </div>
          </div>

          {/* Project Location */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
              Project Location <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-mutedText">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => {
                  setFormData({ ...formData, location: e.target.value });
                  if (errors.location) setErrors({ ...errors, location: "" });
                }}
                placeholder="e.g. Tamkuhi Raj, Kushinagar, Gorakhpur, etc."
                className={`w-full rounded-lg border bg-charcoal-900/80 py-3 pl-10 pr-4 text-sm text-ivory placeholder-mutedText/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold ${
                  errors.location ? "border-rose-500" : "border-white/10"
                }`}
              />
            </div>
            {errors.location && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.location}
              </p>
            )}
          </div>

          {/* Project Description */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mutedText-light">
              Project Description & Requirements <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3.5 text-mutedText">
                <FileText className="h-4 w-4" />
              </div>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                  if (errors.description) setErrors({ ...errors, description: "" });
                }}
                placeholder="Mention plot size, building type, floors, timeline, or specific architectural requirements..."
                className={`w-full rounded-lg border bg-charcoal-900/80 py-3 pl-10 pr-4 text-sm text-ivory placeholder-mutedText/60 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold resize-none ${
                  errors.description ? "border-rose-500" : "border-white/10"
                }`}
              />
            </div>
            {errors.description && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.description}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2.5 rounded-lg bg-gold py-3.5 px-6 font-semibold tracking-wide text-charcoal shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-light hover:shadow-gold/30 active:scale-[0.99]"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span>Submit & Open WhatsApp Inquiry</span>
            </button>
            <p className="mt-2 text-center text-[11px] text-mutedText">
              Direct submission via WhatsApp to {COMPANY_INFO.phone}. No data is stored or shared.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
