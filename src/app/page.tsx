"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/CallToAction";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { QuoteModal } from "@/components/QuoteModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState("");

  const handleOpenQuote = (serviceTitle: string = "") => {
    setSelectedServiceForQuote(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedServiceForQuote("");
  };

  return (
    <div className="relative min-h-screen bg-charcoal text-ivory selection:bg-gold selection:text-charcoal font-sans">
      {/* Premium Sticky Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* Full Screen Cinematic Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* About Us Section */}
        <AboutUs onOpenQuote={() => handleOpenQuote()} />

        {/* Architectural & Construction Services */}
        <Services onSelectServiceForQuote={(service) => handleOpenQuote(service)} />

        {/* Featured Projects Portfolio */}
        <FeaturedProjects onSelectProjectForConsultation={(project) => handleOpenQuote(project)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Visual Call To Action */}
        <CallToAction onOpenQuote={() => handleOpenQuote()} />

        {/* Complete Contact Section & Maps */}
        <ContactSection />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive WhatsApp-Powered Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        serviceTitle={selectedServiceForQuote}
      />
    </div>
  );
}
