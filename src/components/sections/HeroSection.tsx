"use client";

import Image from "next/image";
import { BUSINESS, getWhatsAppUrl } from "@/lib/business";

export default function HeroSection() {
  const handleWhatsApp = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", { event_location: "hero" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-20 pb-16 lg:py-28 overflow-hidden"
      aria-label="SRK Interiors hero section"
    >
      {/* Background Image with Dark Tinted Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Premium living room interior design by SRK Interiors Chintamani"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlays to guarantee 100% WCAG text contrast across any image luminance */}
        <div className="absolute inset-0 bg-black/75 sm:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#c99a3d]/20 border border-[#c99a3d]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#e8c96a] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#f5e9c8]">
              Interior Designers in Chintamani
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.15] tracking-tight">
            Beautiful Interiors.
            <span className="block italic text-[#e8c96a] font-normal mt-1">
              Designed Around You.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal drop-shadow-sm">
            Custom home interiors, modular kitchens and complete interior
            solutions crafted for your lifestyle, space and budget.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 max-w-md sm:max-w-none">
            <a
              href="#contact"
              className="btn btn-primary text-base px-7 py-3.5 shadow-lg text-center"
              id="hero-consultation-btn"
            >
              Get Free Consultation
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-base px-6 py-3.5 shadow-lg text-center"
              id="hero-whatsapp-btn"
              onClick={handleWhatsApp}
              aria-label="Chat with SRK Interiors on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#projects"
              className="btn btn-outline-white text-base px-6 py-3.5 text-center"
              id="hero-projects-btn"
            >
              View Projects
            </a>
          </div>

          {/* Trust Strip */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-2 sm:gap-6 max-w-md">
            {/* Rating */}
            <div className="text-center sm:text-left">
              <div className="text-[#e8c96a] text-xs sm:text-sm tracking-wider mb-1" aria-label="5 star rating">
                ★★★★★
              </div>
              <div className="text-white font-bold text-lg sm:text-xl leading-none">
                {BUSINESS.rating} / 5.0
              </div>
              <div className="text-white/70 text-[11px] sm:text-xs mt-1">Google Rating</div>
            </div>

            {/* Reviews */}
            <div className="text-center sm:text-left border-l border-white/20 pl-2 sm:pl-6">
              <div className="text-[#e8c96a] text-xs sm:text-sm font-semibold mb-1">
                Verified
              </div>
              <div className="text-white font-bold text-lg sm:text-xl leading-none">
                {BUSINESS.reviewCount}+
              </div>
              <div className="text-white/70 text-[11px] sm:text-xs mt-1">Happy Clients</div>
            </div>

            {/* Location */}
            <div className="text-center sm:text-left border-l border-white/20 pl-2 sm:pl-6">
              <div className="text-[#e8c96a] text-xs sm:text-sm font-semibold mb-1">
                Chintamani
              </div>
              <div className="text-white font-bold text-lg sm:text-xl leading-none">
                Local Team
              </div>
              <div className="text-white/70 text-[11px] sm:text-xs mt-1">Karnataka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
