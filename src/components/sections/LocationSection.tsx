"use client";

import { useState, useRef, useEffect } from "react";
import { BUSINESS, getCallUrl, getDirectionsUrl } from "@/lib/business";

export default function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setMapLoaded(true), 250);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      className="section-py warm-bg"
      aria-labelledby="location-heading"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c99a3d]">
              Our Studio
            </span>
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
          </div>
          <h2 id="location-heading" className="text-2xl sm:text-4xl font-bold text-[#111] mb-4">
            Visit SRK Interiors in Chintamani
          </h2>
          <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed">
            Conveniently located on Chelur Road. Drop in to discuss your home or commercial interior project in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Map Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="map-container shadow-md rounded-2xl overflow-hidden border border-[#e7e2d8]">
              {mapLoaded ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7741.285!2d78.0539!3d13.4016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2058503f0266f%3A0xfa89dad32c35cea!2sSRK%20INTERIORS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  title="SRK Interiors location on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f4f4f4] rounded-2xl">
                  <LocationIcon className="w-10 h-10 text-[#c99a3d] mb-3 animate-bounce" />
                  <p className="text-sm text-[#111] font-semibold">
                    SRK Interiors — Chelur Road, Chintamani
                  </p>
                  <p className="text-xs text-[#9a9a9a] mt-1">
                    Loading interactive map...
                  </p>
                </div>
              )}
            </div>

            {/* Map Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 justify-center text-sm py-3"
                id="location-directions-btn"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "directions_click", { event_location: "map_section" });
                  }
                }}
              >
                <DirectionsIcon className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
              <a
                href={getCallUrl()}
                className="btn btn-outline flex-1 justify-center text-sm py-3"
                id="location-maps-btn"
              >
                <PhoneIcon className="w-4 h-4 text-[#c99a3d]" />
                <span>Call Studio: {BUSINESS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Details Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-5 bg-white border border-[#e7e2d8] rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#fdf8ee] text-[#c99a3d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <LocationIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111] text-base mb-1">Studio Address</h3>
                <address className="not-italic text-[#4a4a4a] text-sm leading-relaxed">
                  {BUSINESS.address.street},<br />
                  Near Valli Bhai Shop,<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} — {BUSINESS.address.pin}
                </address>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 bg-white border border-[#e7e2d8] rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#fdf8ee] text-[#c99a3d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111] text-base mb-1">Direct Contact</h3>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-[#c99a3d] font-semibold text-base hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-xs text-[#6b6b6b] mt-0.5">Call or WhatsApp anytime</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-5 bg-white border border-[#e7e2d8] rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#fdf8ee] text-[#c99a3d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111] text-base mb-1">Working Hours</h3>
                <p className="text-sm text-[#4a4a4a] font-medium">Monday – Sunday: 9:00 AM – 7:00 PM</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full mt-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Open All 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DirectionsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
