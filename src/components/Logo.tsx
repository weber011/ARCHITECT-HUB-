"use client";
import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Architect Hub Constructions - Home"
    >
      {/* Luxury Architectural Emblem */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center rounded-lg border border-gold/30 bg-charcoal-700/80 p-2 shadow-inner transition-transform duration-300 group-hover:border-gold/60 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-gold"
        >
          {/* Architectural Drafting Grid Lines */}
          <path
            d="M20 4L34 32H6L20 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 24H28"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M20 4V32"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          {/* Inner Hub Intersection */}
          <circle cx="20" cy="18" r="2.5" fill="#D8AF5D" />
          <path
            d="M14 36H26"
            stroke="#D8AF5D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display text-lg md:text-xl font-bold tracking-[0.12em] text-ivory group-hover:text-gold-light transition-colors leading-tight">
            ARCHITECT HUB
          </span>
          <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.28em] text-gold uppercase leading-tight">
            CONSTRUCTIONS
          </span>
        </div>
      )}
    </Link>
  );
};
