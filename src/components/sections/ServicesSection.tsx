import { SERVICES } from "@/lib/services";
import { getWhatsAppUrl } from "@/lib/business";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-py bg-[#0e0e0e]"
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#f5e9c8]">
              What We Offer
            </span>
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
          </div>
          <h2 id="services-heading" className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Our Interior Design Services
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            From complete home interiors to custom modular kitchens — we provide
            turnkey interior solutions tailored to your space and budget.
          </p>
        </div>

        {/* Services Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141414] border border-[#c99a3d]/30 rounded-2xl text-center max-w-2xl mx-auto shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-2">
            Have a custom requirement in mind?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Share your floor plan or ideas with our team in Chintamani for a personalized estimate and material advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn btn-primary w-full sm:w-auto text-sm px-6 py-3"
              id="services-consultation-btn"
            >
              Get Free Consultation
            </a>
            <a
              href={getWhatsAppUrl("Hello SRK Interiors, I would like to discuss my interior design requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full sm:w-auto text-sm px-6 py-3"
              id="services-whatsapp-btn"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
  index: number;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-[#161616] border border-[#c99a3d]/20 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#c99a3d] hover:shadow-[0_8px_30px_rgba(201,154,61,0.15)] transition-all group">
      <div>
        {/* Top: Icon + Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 flex items-center justify-center group-hover:bg-[#c99a3d] group-hover:text-black transition-all">
            <ServiceIcon type={service.icon} className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] px-2.5 py-0.5 rounded-full bg-[#c99a3d]/10 border border-[#c99a3d]/25">
            Chintamani
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[#d4af37] transition-colors">
          {service.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
          {service.shortDescription}
        </p>
      </div>

      {/* Card Action */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-500">Direct Consultation</span>
        <a
          href={`https://wa.me/917019549295?text=${encodeURIComponent(service.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#d4af37] hover:text-[#f5e9c8] flex items-center gap-1 group-hover:gap-1.5 transition-all"
          id={`service-enquire-${service.id}`}
          aria-label={`Enquire about ${service.name} on WhatsApp`}
        >
          Enquire →
        </a>
      </div>
    </div>
  );
}

function ServiceIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    kitchen: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="8" y2="17" />
        <line x1="16" y1="21" x2="16" y2="17" />
        <line x1="4" y1="21" x2="20" y2="21" />
        <circle cx="12" cy="10" r="2" />
        <path d="M8 7h.01M12 7h.01M16 7h.01" />
      </svg>
    ),
    sofa: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v2" />
        <path d="M2 11v5a2 2 0 002 2h16a2 2 0 002-2v-5a1 1 0 00-1-1H3a1 1 0 00-1 1z" />
        <path d="M4 18v2M20 18v2M12 11v7" />
      </svg>
    ),
    bed: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4v16M2 8h20v12M2 4h20M7 8v4M17 8v4" />
      </svg>
    ),
    office: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    ceiling: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h20" />
        <path d="M12 3v6M6 9h12" />
        <circle cx="12" cy="14" r="2" />
        <path d="M8 21h8M12 16v5" />
      </svg>
    ),
    renovation: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    furniture: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M17 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2M7 17v2M17 17v2" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
