import { BUSINESS } from "@/lib/business";

/**
 * JSON-LD Structured Data for SRK Interiors
 * Schema types: LocalBusiness, ProfessionalService, WebSite
 */
export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS.seo.canonical}/#business`,
    name: BUSINESS.name,
    alternateName: "SRK INTERIORS",
    description: BUSINESS.seo.description,
    url: BUSINESS.seo.canonical,
    telephone: BUSINESS.phone,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    image: `${BUSINESS.seo.canonical}${BUSINESS.seo.ogImage}`,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.seo.canonical}/icon.svg`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    openingHoursSpecification: BUSINESS.hours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day.day}`,
      opens: "09:00",
      closes: "19:00",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      BUSINESS.mapsUrl,
      ...(BUSINESS.social.instagram ? [BUSINESS.social.instagram] : []),
      ...(BUSINESS.social.facebook ? [BUSINESS.social.facebook] : []),
    ],
    hasMap: BUSINESS.mapsUrl,
    serviceArea: {
      "@type": "Place",
      name: "Chintamani, Karnataka",
    },
    areaServed: {
      "@type": "City",
      name: "Chintamani",
    },
    knowsAbout: [
      "Interior Design",
      "Modular Kitchen Design",
      "Home Interiors",
      "Bedroom Interiors",
      "Living Room Design",
      "Office Interiors",
      "False Ceiling",
      "Custom Furniture",
      "Home Renovation",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.seo.canonical,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.seo.canonical}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BUSINESS.seo.canonical,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide complete home interior services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SRK Interiors provides complete home interior solutions including living rooms, bedrooms, kitchens, false ceilings, custom furniture and full renovations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design modular kitchens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design and install modular kitchens tailored to your kitchen space, requirements and budget.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a free consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a free consultation by filling in the form on this page, calling us at +91 70195 49295, or sending us a WhatsApp message.",
        },
      },
      {
        "@type": "Question",
        name: "Where is SRK Interiors located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SRK Interiors is located at 3rd Cross, Chelur Road, Near Valli Bhai Shop, Chintamani, Karnataka 563125.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
