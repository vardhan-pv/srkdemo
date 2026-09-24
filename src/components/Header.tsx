"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS, getWhatsAppUrl } from "@/lib/business";
import SRKLogo from "./SRKLogo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-[#e7e2d8]"
            : "bg-white/95 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px] lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="SRK Interiors — Home"
              className="flex items-center gap-3 flex-shrink-0"
              onClick={closeMenu}
            >
              <SRKLogo className="h-10 lg:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-[#2d2d2d] hover:text-[#c99a3d] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#c99a3d] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-[#2d2d2d] hover:text-[#c99a3d] transition-colors"
                id="header-call-btn"
                onClick={() => trackEvent("call_click", "header")}
              >
                <PhoneIcon className="w-4 h-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href="#contact"
                className="btn btn-primary text-sm px-6 py-3"
                id="header-cta-btn"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-[#25d366] text-white text-sm font-semibold rounded-lg"
                id="header-whatsapp-btn"
                aria-label="WhatsApp SRK Interiors"
                onClick={() => trackEvent("whatsapp_click", "header")}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                id="mobile-menu-toggle"
              >
                {menuOpen ? (
                  <CloseIcon className="w-6 h-6 text-[#111]" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-[#111]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="mobile-nav-overlay lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[55] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#e7e2d8]">
          <SRKLogo className="h-9 w-auto" />
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close navigation menu"
          >
            <CloseIcon className="w-5 h-5 text-[#111]" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-5" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3.5 text-[1rem] font-medium text-[#1a1a1a] hover:text-[#c99a3d] hover:bg-[#fdf8ee] rounded-10 transition-colors rounded-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Contact Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#e7e2d8] space-y-3">
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn btn-primary w-full justify-center"
            id="mobile-menu-cta"
          >
            Get Free Consultation
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn btn-outline justify-center text-sm"
              id="mobile-menu-call"
              onClick={() => { closeMenu(); trackEvent("call_click", "mobile_menu"); }}
            >
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp justify-center text-sm"
              id="mobile-menu-whatsapp"
              onClick={() => { closeMenu(); trackEvent("whatsapp_click", "mobile_menu"); }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function trackEvent(event: string, location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, { event_location: location });
  }
}

// Icons
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}
