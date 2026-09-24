"use client";

import { REVIEWS } from "@/lib/reviews";
import { BUSINESS } from "@/lib/business";

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="section-py"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c99a3d]">
              Google Reviews
            </span>
            <span className="w-6 h-[1.5px] bg-[#c99a3d]" />
          </div>
          <h2 id="reviews-heading" className="text-2xl sm:text-4xl font-bold text-[#111] mb-4">
            Trusted by Chintamani Homeowners
          </h2>
          <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Real customer experiences directly from our Google Business Profile.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center justify-center gap-3 mt-6 px-4 py-2 bg-[#fdf8ee] border border-[#f5e9c8] rounded-full">
            <div className="flex text-[#c99a3d] text-base tracking-wider" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <span className="text-sm font-bold text-[#111]">
              5.0 / 5.0
            </span>
            <span className="text-xs text-[#6b6b6b]">
              · {BUSINESS.reviewCount}+ Google Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              {/* Top: Star rating + Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#c99a3d] text-sm tracking-wider" aria-label={`${review.rating} star review`}>
                  {"★".repeat(review.rating)}
                </div>
                <QuoteIcon className="w-6 h-6 text-[#c99a3d]/30" />
              </div>

              {/* Review Text */}
              <blockquote className="text-[#333333] text-sm leading-relaxed mb-6 flex-1 font-normal">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-[#f0ece4] mt-auto">
                <div>
                  <p className="font-semibold text-sm text-[#111]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[#9a9a9a] mt-0.5">{review.date}</p>
                </div>
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#6b6b6b] hover:text-[#c99a3d] transition-colors font-medium bg-[#f8f8f8] px-2.5 py-1 rounded-md"
                  aria-label="View this review on Google"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Google</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-6 py-3 text-sm inline-flex items-center gap-2"
            id="reviews-view-all-btn"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "google_reviews_click", { event_location: "reviews_section" });
              }
            }}
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Read All 30+ Reviews on Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
