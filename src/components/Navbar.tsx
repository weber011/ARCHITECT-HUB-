"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY_INFO } from "@/data/company";

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section in viewport
      const sections = ["home", "about", "services", "projects", "why-us", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Why Choose Us", href: "#why-us", id: "why-us" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-900/95 backdrop-blur-md border-b border-gold/15 py-3 shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Name */}
            <Logo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 py-1 ${
                      isActive ? "text-gold font-semibold" : "text-ivory/80 hover:text-ivory"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Phone Quick Link & Quote CTA Button */}
            <div className="hidden lg:flex items-center space-x-5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-medium text-mutedText hover:text-gold transition-colors tracking-wide"
                title="Call 24/7"
              >
                <div className="w-7 h-7 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-gold px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-charcoal shadow-md transition-all duration-300 hover:bg-gold-light hover:shadow-gold/25 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="text-xs font-semibold tracking-wider uppercase bg-gold text-charcoal px-3 py-1.5 rounded-md hover:bg-gold-light"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-ivory hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gold" />
                ) : (
                  <Menu className="h-6 w-6 text-ivory" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-down Drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-30 transform transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-charcoal-900/98 backdrop-blur-xl border-b border-gold/20 pt-24 pb-8 px-6 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between border-b border-white/5 py-3 text-sm font-medium tracking-widest uppercase text-ivory hover:text-gold"
              >
                <span>{link.name}</span>
                <span className="text-gold/40 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold py-3 text-center text-xs font-bold uppercase tracking-wider text-charcoal shadow-lg hover:bg-gold-light"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-gold/30 bg-charcoal-800 py-3 text-center text-xs font-medium tracking-wide text-ivory hover:border-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
