"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS, getWhatsAppLink } from "@/data/company";
import { ArrowUpRight, Eye, Info } from "lucide-react";

interface FeaturedProjectsProps {
  onSelectProjectForConsultation: (projectTitle: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProjectForConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<(typeof FEATURED_PROJECTS)[0] | null>(
    null
  );

  const categories = ["All", "Luxury Villa", "Modern Residential", "Commercial", "Contemporary Design"];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.tag === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
              <span className="w-5 h-[1px] bg-gold" />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight">
              Featured Concepts & <br />
              <span className="text-gold-light italic font-normal">
                Structural Landmarks
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gold text-charcoal shadow-md shadow-gold/20"
                    : "border border-white/10 bg-charcoal-800 text-mutedText hover:border-gold/40 hover:text-ivory"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setPreviewProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal-800 transition-all duration-500 hover:border-gold/40 hover:shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-md border border-white/10 bg-charcoal-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-md">
                    {project.tag}
                  </span>
                </div>

                {/* Hover Quick View Icon */}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-charcoal-900/80 border border-white/10 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Eye className="w-4 h-4 text-gold" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <p className="text-[11px] font-medium uppercase tracking-widest text-mutedText">
                  {project.category}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-ivory group-hover:text-gold-light transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-gold/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                </div>
                <p className="mt-2 text-xs text-mutedText leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="mt-12 rounded-xl border border-white/10 bg-charcoal-800/50 p-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
          <Info className="h-5 w-5 text-gold shrink-0" />
          <p className="text-xs text-mutedText leading-relaxed">
            <strong className="text-ivory font-semibold">Demonstration Portfolio Notice:</strong> The images and architectural renderings presented above represent conceptual design standards and typologies for demonstration purposes. Genuine on-site project photographs and client drawings are available for confidential review during in-person consultations.
          </p>
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md">
          <div
            className="fixed inset-0"
            onClick={() => setPreviewProject(null)}
          />
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-charcoal-800 p-6 sm:p-8 shadow-2xl z-10">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10">
              <Image
                src={previewProject.image}
                alt={previewProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-semibold text-gold tracking-widest">
                  {previewProject.tag} • {previewProject.category}
                </span>
                <span className="text-xs text-mutedText">
                  {previewProject.location}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ivory">
                {previewProject.title}
              </h3>
              <p className="mt-3 text-sm text-mutedText-light leading-relaxed">
                {previewProject.description}
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={getWhatsAppLink(
                    `Hello Architect Hub Constructions! I saw your portfolio project "${previewProject.title}" and would like to build a similar architectural concept.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-colors"
                >
                  Discuss Similar Design on WhatsApp
                </a>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="rounded-lg border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-white/10 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
