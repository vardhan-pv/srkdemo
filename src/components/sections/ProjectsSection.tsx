"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/projects";
import { getWhatsAppUrl } from "@/lib/business";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setLightboxOpen(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "project_view", { project_title: title });
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section
      id="projects"
      className="section-py bg-[#0a0a0a]"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#f5e9c8]">
              Our Portfolio
            </span>
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Recent Projects in Chintamani
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Explore our curated residential and commercial interior spaces crafted with luxury materials and refined execution.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center overflow-x-auto pb-3 mb-8 gap-2.5 sm:justify-center -mx-4 px-4 sm:mx-0 scrollbar-none" role="tablist" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={isActive}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#d4af37] to-[#c99a3d] text-black font-bold border-transparent shadow-[0_2px_14px_rgba(201,154,61,0.35)]"
                    : "bg-[#161616] text-gray-300 border border-white/10 hover:border-[#c99a3d] hover:text-[#d4af37]"
                }`}
                id={`category-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141414] border border-[#c99a3d]/25 rounded-xl overflow-hidden shadow-lg hover:border-[#c99a3d] hover:shadow-[0_8px_32px_rgba(201,154,61,0.2)] transition-all group flex flex-col cursor-pointer"
              onClick={() => openLightbox(project.thumbnail, project.title)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <Image
                  src={project.thumbnail}
                  alt={project.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[#f5e9c8] text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#c99a3d]/40">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 mt-auto bg-[#141414]">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-base truncate group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>{project.location || "Chintamani, Karnataka"}</span>
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl(
                    `Hello SRK Interiors, I saw your ${project.title} project and would like a similar interior design for my space.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "project_enquiry", { project_id: project.id });
                    }
                  }}
                  className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 hover:bg-[#c99a3d] hover:text-black transition-all whitespace-nowrap"
                  id={`project-enquire-${project.id}`}
                  aria-label={`Get a similar design to ${project.title} on WhatsApp`}
                >
                  Get Similar →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Want to see more completed work or 3D design walkthroughs?
          </p>
          <a
            href={getWhatsAppUrl(
              "Hello SRK Interiors, I would like to see more portfolio photos and discuss my requirements."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-6 py-3 text-sm inline-flex items-center gap-2"
            id="projects-request-portfolio-btn"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25d366]" />
            <span>Request Full Portfolio on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#d4af37] p-2 text-sm font-semibold flex items-center gap-1.5"
              aria-label="Close image viewer"
            >
              <span>Close</span>
              <span className="text-xl">✕</span>
            </button>
            <div className="relative w-full aspect-[4/3] max-h-[75vh] rounded-lg overflow-hidden bg-black border border-[#c99a3d]/30">
              <Image
                src={lightboxImage}
                alt={lightboxTitle}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 95vw, 1200px"
              />
            </div>
            <p className="text-white text-base font-semibold mt-3 text-center">
              {lightboxTitle}
            </p>
          </div>
        </div>
      )}
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
