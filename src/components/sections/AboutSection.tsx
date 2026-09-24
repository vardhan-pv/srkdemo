import { BUSINESS } from "@/lib/business";

const WHY_CHOOSE = [
  {
    icon: "custom",
    title: "Customized Designs",
    description:
      "Solutions tailored to your unique room dimensions, lifestyle preferences and budget — never generic catalog templates.",
  },
  {
    icon: "quality",
    title: "Premium Materials & Finish",
    description:
      "Durable hardware, premium laminates, moisture-resistant plywood, and meticulous carpentry finishing.",
  },
  {
    icon: "complete",
    title: "Turnkey Execution",
    description:
      "From initial 2D/3D design consultations to civil work, electrical, painting, and final handover.",
  },
  {
    icon: "communication",
    title: "Direct Local Accountability",
    description:
      "Based in Chintamani with direct, open communication. No middlemen or elusive contractor delays.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-py bg-[#0e0e0e]"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — About Story */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#f5e9c8]">
                About SRK Interiors
              </span>
            </div>
            <h2 id="about-heading" className="text-2xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Creating Spaces That Feel Like Home
            </h2>
            
            <div className="space-y-4 mb-8 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">SRK Interiors</strong> is a premier interior design and execution studio located on Chelur Road, Chintamani. We specialize in transforming houses and apartments into luxury, highly functional dream homes.
              </p>
              <p>
                Whether you need an ergonomic modular kitchen, smart bedroom wardrobes, a bespoke living room setup, or an efficient commercial office, our experienced team ensures high craftsmanship and transparent execution.
              </p>
            </div>

            {/* Symmetrical Rating Badge */}
            <div className="p-4 sm:p-5 bg-[#161616] border border-[#c99a3d]/30 rounded-xl flex items-center justify-between sm:justify-start gap-6 max-w-md mb-8 shadow-xl">
              <div>
                <div className="flex text-[#d4af37] text-base mb-1" aria-label="5 stars">
                  ★★★★★
                </div>
                <div className="text-base font-bold text-white">
                  {BUSINESS.rating} / 5.0
                </div>
                <div className="text-xs text-gray-400">Google Verified</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div>
                <div className="text-base font-bold text-white">
                  {BUSINESS.reviewCount}+ Reviews
                </div>
                <div className="text-xs text-gray-400">100% Satisfied Clients</div>
                <div className="text-[11px] text-[#d4af37] font-semibold mt-0.5">Chintamani Local</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="btn btn-primary text-center px-6 py-3"
                id="about-cta-btn"
              >
                Schedule Consultation
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-center px-6 py-3"
                id="about-maps-btn"
              >
                Locate Studio on Maps ↗
              </a>
            </div>
          </div>

          {/* Right Column — Why Choose Us */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-5">
              Why Homeowners Choose SRK Interiors
            </h3>
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="p-4 sm:p-5 rounded-xl border border-white/10 bg-[#161616] hover:border-[#c99a3d]/50 hover:shadow-lg transition-all flex gap-4 items-start"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <WhyIcon type={item.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    custom: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    quality: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    complete: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    communication: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  };

  return icons[type] || null;
}
