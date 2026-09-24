"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Do you provide complete turnkey home interior services?",
    answer:
      "Yes. SRK Interiors handles end-to-end home interiors in Chintamani including living rooms, modular kitchens, master bedrooms, false ceilings, custom carpentry, painting, and lighting — taking care of everything from planning to final handover.",
  },
  {
    id: "faq-2",
    question: "Do you design custom modular kitchens?",
    answer:
      "Yes. We design and install modular kitchens tailored to your kitchen space, layout (L-shaped, U-shaped, parallel, or straight), and budget. We use high-quality marine ply, moisture-resistant laminates, and smooth soft-close hardware.",
  },
  {
    id: "faq-3",
    question: "How can I book a free design consultation?",
    answer:
      "You can request a free consultation by filling in the form on this page, calling us directly at +91 70195 49295, or sending us a message on WhatsApp. Our team will get back to you within 24 hours.",
  },
  {
    id: "faq-4",
    question: "Which areas in and around Chintamani do you serve?",
    answer:
      "SRK Interiors is based in Chintamani, Karnataka. We take up residential and commercial interior projects across Chintamani town and neighboring areas across the Chikkaballapur district.",
  },
  {
    id: "faq-5",
    question: "How do you calculate the estimate and cost for a project?",
    answer:
      "We begin by understanding your room dimensions, floor plan, and material preferences. We then provide a clear, itemized quotation with transparent pricing and no hidden costs.",
  },
  {
    id: "faq-6",
    question: "Where is your studio located and what are your working hours?",
    answer:
      "Our studio is located at 3rd Cross, Chelur Road, Near Valli Bhai Shop, Chintamani, Karnataka 563125. We are open Monday to Sunday from 9:00 AM to 7:00 PM (all 7 days a week).",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="section-py warm-bg"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c99a3d]">
                Common Questions
              </span>
              <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            </div>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-bold text-[#111] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed">
              Have questions about our process, pricing, or timelines? Here are answers to common queries.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3" aria-label="Frequently asked questions">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border transition-all overflow-hidden ${
                    isOpen ? "border-[#c99a3d] shadow-sm" : "border-[#e7e2d8]"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left transition-colors cursor-pointer bg-transparent"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`answer-${item.id}`}
                    id={`question-${item.id}`}
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#111]">
                      {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen ? "bg-[#c99a3d] text-white rotate-180" : "bg-[#f4f4f4] text-[#6b6b6b]"
                      }`}
                    >
                      <ChevronIcon className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`answer-${item.id}`}
                      role="region"
                      aria-labelledby={`question-${item.id}`}
                      className="px-4 pb-5 sm:px-5 sm:pb-5 text-[#6b6b6b] text-sm sm:text-[15px] leading-relaxed border-t border-[#f0ece4] pt-3.5"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-[#6b6b6b] text-sm mb-4">
              Still have questions about your specific floor plan?
            </p>
            <a
              href="#contact"
              className="btn btn-primary px-7 py-3 text-sm"
              id="faq-contact-btn"
            >
              Ask Our Interior Designers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
