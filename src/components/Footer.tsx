import Link from "next/link";
import { BUSINESS, getWhatsAppUrl } from "@/lib/business";
import SRKLogo from "./SRKLogo";

const SERVICES_LINKS = [
  { href: "#services", label: "Full Home Interiors" },
  { href: "#services", label: "Modular Kitchen" },
  { href: "#services", label: "Living Room Setup" },
  { href: "#services", label: "Bedroom & Wardrobes" },
  { href: "#services", label: "Office / Commercial" },
  { href: "#services", label: "False Ceiling & Lighting" },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About Us" },
  { href: "#reviews", label: "Google Reviews" },
  { href: "#contact", label: "Consultation" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#111111] text-white border-t border-white/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer Container */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Column (4 cols on lg) */}
          <div className="lg:col-span-4">
            <SRKLogo className="h-10 w-auto mb-4" variant="white" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-sm">
              Premier interior design studio in Chintamani, Karnataka. Crafting tailored homes, modular kitchens, and elegant living spaces.
            </p>
            {/* Google Rating strip */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[#e8c96a] text-sm tracking-wider">★★★★★</span>
              <span className="text-xs font-semibold text-white">5.0 Rating</span>
              <span className="text-xs text-gray-400">· 30+ Reviews</span>
            </div>
          </div>

          {/* Services Column (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#e8c96a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#e8c96a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Contact & Studio
            </h3>
            <address className="not-italic space-y-3.5">
              {/* Address */}
              <div className="flex gap-3">
                <LocationIcon className="w-4 h-4 text-[#e8c96a] mt-1 flex-shrink-0" />
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors leading-relaxed"
                  aria-label="Get directions to SRK Interiors"
                >
                  {BUSINESS.address.street},<br />
                  Near Valli Bhai Shop,<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pin}
                </a>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <PhoneIcon className="w-4 h-4 text-[#e8c96a] flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-sm text-gray-300 hover:text-white font-medium transition-colors"
                  aria-label={`Call SRK Interiors at ${BUSINESS.phoneDisplay}`}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3 items-center">
                <WhatsAppIcon className="w-4 h-4 text-[#25d366] flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#25d366] font-medium transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp: +91 70195 49295
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <ClockIcon className="w-4 h-4 text-[#e8c96a] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-400">
                  Mon – Sun: 9:00 AM – 7:00 PM (All 7 Days)
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-gray-400">
              © {currentYear} SRK Interiors. All rights reserved. Chintamani, Karnataka.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-400 hover:text-[#e8c96a] transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-[#e8c96a] transition-colors"
              >
                Google Maps Profile ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom buffer so sticky bar never obscures footer copyright */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </footer>
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
