import { getWhatsAppUrl } from "@/lib/business";

export default function FinalCTASection() {
  return (
    <section
      className="py-16 sm:py-24 bg-[#111111] relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Decorative top gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c99a3d] to-transparent opacity-60" />

      {/* Subtle radial ambient background glow (does not intersect text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c99a3d]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e8c96a]">
              Start Your Journey
            </span>
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
          </div>

          {/* Heading */}
          <h2
            id="final-cta-heading"
            className="text-white text-3xl sm:text-5xl font-bold leading-tight mb-4 tracking-tight"
          >
            Ready to Create Your
            <span className="block italic text-[#e8c96a] font-normal mt-1">
              Dream Living Space?
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Book a free, no-obligation consultation with SRK Interiors in Chintamani. We discuss your space, budget, and design vision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href="#contact"
              className="btn btn-primary text-base px-8 py-3.5 w-full sm:w-auto text-center shadow-lg"
              id="final-cta-consultation-btn"
            >
              Get Free Consultation
            </a>
            <a
              href={getWhatsAppUrl(
                "Hello SRK Interiors, I would like to discuss my interior design project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-base px-8 py-3.5 w-full sm:w-auto text-center shadow-lg inline-flex items-center justify-center gap-2"
              id="final-cta-whatsapp-btn"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">
            <span className="text-[#e8c96a] tracking-wider">★★★★★</span>
            <span className="text-white font-medium">5.0 Google Rating</span>
            <span className="text-gray-500">·</span>
            <span>30+ Happy Clients in Chintamani</span>
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
