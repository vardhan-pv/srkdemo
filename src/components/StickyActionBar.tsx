"use client";

import { BUSINESS, getWhatsAppUrl, getCallUrl, getDirectionsUrl } from "@/lib/business";

declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

function trackEvent(event: string, location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, { event_location: location });
  }
}

export default function StickyActionBar() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      role="region"
      aria-label="Quick mobile contact actions"
    >
      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#c99a3d]/30 shadow-[0_-4px_25px_rgba(0,0,0,0.8)] px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-3 gap-2.5 w-full max-w-md mx-auto">
          {/* Call Studio */}
          <a
            href={getCallUrl()}
            className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#181818] border border-white/10 text-white rounded-xl min-h-[52px] transition-all active:scale-95 shadow-md"
            id="sticky-call-btn"
            aria-label={`Call SRK Interiors at ${BUSINESS.phoneDisplay}`}
            onClick={() => trackEvent("call_click", "sticky_bar")}
          >
            <PhoneIcon className="w-5 h-5 text-[#d4af37]" />
            <span className="text-[11px] font-semibold tracking-wide">Call</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppUrl("Hello SRK Interiors, I would like to enquire about your interior design services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#25d366] text-white rounded-xl min-h-[52px] transition-all active:scale-95 shadow-md shadow-green-600/30"
            id="sticky-whatsapp-btn"
            aria-label="WhatsApp SRK Interiors"
            onClick={() => trackEvent("whatsapp_click", "sticky_bar")}
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-[11px] font-bold tracking-wide">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-gradient-to-r from-[#d4af37] to-[#c99a3d] text-black rounded-xl min-h-[52px] transition-all active:scale-95 shadow-md shadow-[#c99a3d]/30 font-bold"
            id="sticky-directions-btn"
            aria-label="Get directions to SRK Interiors"
            onClick={() => trackEvent("directions_click", "sticky_bar")}
          >
            <DirectionsIcon className="w-5 h-5 text-black" />
            <span className="text-[11px] font-bold tracking-wide">Directions</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

function DirectionsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
