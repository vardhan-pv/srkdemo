"use client";

import { useState, useTransition } from "react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/business";

type FormState = "idle" | "loading" | "success" | "error";

const REQUIREMENT_OPTIONS = [
  "Full Home Interior",
  "Modular Kitchen",
  "Living Room Interior",
  "Bedroom & Wardrobe",
  "Office / Commercial Space",
  "Renovation & Remodel",
  "False Ceiling & Lighting",
  "Custom Furniture",
  "Other Interior Requirement",
];

interface FormData {
  name: string;
  phone: string;
  requirement: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  requirement?: string;
}

export default function ConsultationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      newErrors.name = "Please enter your name";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[+]?[\d\s\-().]{8,15}$/.test(data.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (e.g. 9876543210)";
    }
    if (!data.requirement) {
      newErrors.requirement = "Please select what you are looking for";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (formState === "loading") return;

    setFormState("loading");

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setFormState("success");
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "consultation_form_submit", {
              requirement: data.requirement,
            });
          }
        } else {
          setFormState("error");
        }
      } catch {
        setFormState("error");
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (formState === "idle" && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "consultation_form_start");
    }
  };

  return (
    <section
      id="contact"
      className="section-py bg-[#080808] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative top gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c99a3d] to-transparent opacity-60" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column — Text & Direct Contact (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#f5e9c8]">
                Get in Touch
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            >
              Planning Your{" "}
              <span className="italic text-[#d4af37] font-normal">
                Dream Interior?
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Tell us what you&apos;re looking for and our team will get in touch for a free design consultation and site estimate in Chintamani.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#141414] border border-[#c99a3d]/25 hover:border-[#c99a3d] hover:bg-[#181818] transition-all group"
                id="contact-phone-link"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Direct Call</p>
                  <p className="text-white text-base font-semibold">{BUSINESS.phoneDisplay}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl("Hello SRK Interiors, I would like to schedule a free interior consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#141414] border border-[#c99a3d]/25 hover:border-[#25d366]/60 hover:bg-[#181818] transition-all group"
                id="contact-whatsapp-link"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25d366]/20 text-[#25d366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Chat</p>
                  <p className="text-white text-base font-semibold">Instant Response Online</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#141414] border border-[#c99a3d]/25">
                <div className="w-10 h-10 rounded-lg bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 flex items-center justify-center flex-shrink-0">
                  <LocationIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Studio Address</p>
                  <p className="text-white text-sm font-medium">
                    3rd Cross, Chelur Rd, Chintamani, Karnataka 563125
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#141414] border border-[#c99a3d]/25">
                <div className="w-10 h-10 rounded-lg bg-[#c99a3d]/15 text-[#d4af37] border border-[#c99a3d]/30 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Working Hours</p>
                  <p className="text-white text-sm font-medium">Mon – Sun: 9:00 AM – 7:00 PM (Open 7 Days)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Consultation Form Card (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#c99a3d]/35 rounded-2xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              {formState === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#c99a3d]/20 text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request Received!
                  </h3>
                  <p className="text-gray-300 text-base mb-6 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{data.name}</strong>. Our interior design team will contact you shortly on <strong className="text-white">{data.phone}</strong>.
                  </p>
                  <a
                    href={getWhatsAppUrl(
                      `Hello SRK Interiors, I just submitted a consultation request for ${data.requirement}. My name is ${data.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full sm:w-auto px-6 py-3.5 inline-flex items-center justify-center gap-2"
                    id="form-success-whatsapp"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Also Connect on WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Request a Free Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      No commitment required. We respect your privacy.
                    </p>
                  </div>

                  {formState === "error" && (
                    <div className="mb-5 p-3.5 bg-red-950/60 border border-red-500/50 rounded-lg text-red-300 text-sm">
                      Something went wrong. Please call us directly at {BUSINESS.phoneDisplay} or WhatsApp us.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate aria-label="Consultation request form" className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500 bg-red-950/20" : "border-white/15"
                        } bg-[#0a0a0a] text-white placeholder-gray-500 focus:outline-none focus:border-[#c99a3d] focus:ring-1 focus:ring-[#c99a3d] transition-all text-sm`}
                        placeholder="e.g. Ramesh Kumar"
                        autoComplete="name"
                        required
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? "border-red-500 bg-red-950/20" : "border-white/15"
                        } bg-[#0a0a0a] text-white placeholder-gray-500 focus:outline-none focus:border-[#c99a3d] focus:ring-1 focus:ring-[#c99a3d] transition-all text-sm`}
                        placeholder="e.g. +91 98765 43210"
                        autoComplete="tel"
                        required
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Requirement Select */}
                    <div>
                      <label htmlFor="requirement" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        What Are You Looking For? <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={data.requirement}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.requirement ? "border-red-500 bg-red-950/20" : "border-white/15"
                        } bg-[#0a0a0a] text-white focus:outline-none focus:border-[#c99a3d] focus:ring-1 focus:ring-[#c99a3d] transition-all text-sm`}
                        required
                        aria-invalid={!!errors.requirement}
                      >
                        <option value="" className="bg-[#111] text-gray-400">Select your requirement</option>
                        {REQUIREMENT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#111] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.requirement && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.requirement}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Tell Us About Your Space <span className="text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-[#0a0a0a] text-white placeholder-gray-500 focus:outline-none focus:border-[#c99a3d] focus:ring-1 focus:ring-[#c99a3d] transition-all text-sm resize-none"
                        placeholder="e.g. 2BHK flat in Chintamani, need modular kitchen and master bedroom wardrobe..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending || formState === "loading"}
                      className="w-full btn btn-primary py-3.5 text-base font-bold shadow-lg mt-2 flex items-center justify-center gap-2"
                      id="form-submit-btn"
                    >
                      {isPending || formState === "loading" ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <span>Request Free Consultation</span>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-gray-500 pt-1">
                      🔒 Your phone number is strictly kept confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
