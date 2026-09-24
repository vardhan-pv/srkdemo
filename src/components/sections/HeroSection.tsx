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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 pb-14 lg:py-28 overflow-hidden bg-[#0a0a0a]"
      aria-label="SRK Interiors hero section"
    >
      {/* Background Image: Rich Cinematic Interior with Dark Gold Atmosphere */}
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
        {/* Cinematic dark veil letting the golden chandeliers and lights shine through */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Content Container: Luxury Obsidian & Gold Glass Card */}
      <div className="container relative z-10">
        <div className="max-w-xl bg-[#121212]/85 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-[#c99a3d]/35 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#c99a3d]/15 border border-[#c99a3d]/35">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#f5e9c8]">
              Interior Designers in Chintamani
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.2] tracking-tight">
            Beautiful Interiors.
            <span className="block italic text-[#d4af37] font-normal mt-0.5">
              Designed Around You.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Custom home interiors, modular kitchens and complete turnkey solutions crafted for your lifestyle, space and budget.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
            <a
              href="#contact"
              className="btn btn-primary text-sm sm:text-base px-6 py-3 text-center"
              id="hero-consultation-btn"
            >
              Get Free Consultation
            </a>
            <a
              href={getWhatsAppUrl("Hello SRK Interiors, I would like to discuss my home interior requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm sm:text-base px-5 py-3 text-center inline-flex items-center justify-center gap-2"
              id="hero-whatsapp-btn"
              onClick={handleWhatsApp}
              aria-label="Chat with SRK Interiors on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Strip inside the card */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center sm:text-left">
            {/* Rating */}
            <div>
              <div className="text-[#d4af37] text-xs sm:text-sm tracking-wider mb-0.5" aria-label="5 star rating">
                ★★★★★
              </div>
              <div className="text-white font-bold text-sm sm:text-base leading-none">
                {BUSINESS.rating} / 5.0
              </div>
              <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Google Rating</div>
            </div>

            {/* Reviews */}
            <div className="border-l border-white/10 pl-2 sm:pl-4">
              <div className="text-[#d4af37] text-xs font-semibold mb-0.5">
                Verified
              </div>
              <div className="text-white font-bold text-sm sm:text-base leading-none">
                {BUSINESS.reviewCount}+ Reviews
              </div>
              <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Happy Clients</div>
            </div>

            {/* Location */}
            <div className="border-l border-white/10 pl-2 sm:pl-4">
              <div className="text-[#d4af37] text-xs font-semibold mb-0.5">
                Studio
              </div>
              <div className="text-white font-bold text-sm sm:text-base leading-none">
                Chelur Rd
              </div>
              <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Chintamani</div>
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
