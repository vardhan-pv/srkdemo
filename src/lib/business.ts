/**
 * SRK INTERIORS — CENTRAL BUSINESS CONFIGURATION
 * Single source of truth for all business information.
 * Update here and changes apply everywhere on the site.
 */

export const BUSINESS = {
  name: "SRK Interiors",
  nameFull: "SRK INTERIORS",
  tagline: "Beautiful Interiors. Designed Around You.",
  description:
    "Custom home interiors, modular kitchens and complete interior solutions designed around your lifestyle, space and budget.",
  category: "Interior Designer",

  // Contact — use verified Google Maps data
  phone: "+917019549295",
  phoneDisplay: "+91 70195 49295",
  whatsapp: "917019549295", // no + for wa.me
  whatsappMessage:
    "Hello SRK Interiors, I found your website and would like to know more about your interior design services.",
  email: "", // Not verified — leave blank until client confirms

  // Address — verified from Google Maps
  address: {
    street: "3rd Cross, Chelur Road, Near Valli Bhai Shop",
    city: "Chintamani",
    state: "Karnataka",
    pin: "563125",
    full: "3rd Cross, Chelur Rd, Near Valli Bhai Shop, Chintamani, Karnataka 563125",
  },

  // Google Maps — verified
  mapsUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.0!2d78.0556701!3d13.4015385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2058503f0266f%3A0xfa89dad32c35cea!2sSRK%20INTERIORS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  coordinates: {
    lat: 13.4015385,
    lng: 78.058245,
  },

  // Reviews — verified from Google Maps
  rating: 5.0,
  reviewCount: 30,
  reviewsUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",

  // Opening hours — verified from Google Maps
  hours: {
    weekdays: "9:00 AM – 7:00 PM",
    weekends: "9:00 AM – 7:00 PM",
    note: "Open all 7 days",
    days: [
      { day: "Monday", hours: "9:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
      { day: "Friday", hours: "9:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 7:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 7:00 PM" },
    ],
  },

  // Social — confirm with client
  social: {
    instagram: "", // Not verified — confirm with client
    facebook: "", // Not verified — confirm with client
    youtube: "", // Not verified — confirm with client
  },

  // SEO
  seo: {
    title: "Interior Designers in Chintamani | SRK Interiors",
    description:
      "Looking for interior designers in Chintamani? SRK Interiors provides home interiors, modular kitchens, bedroom, living room, office and renovation solutions. Contact us for a free consultation.",
    keywords: [
      "interior designers in Chintamani",
      "interior design Chintamani",
      "home interiors Chintamani",
      "modular kitchen Chintamani",
      "bedroom interiors Chintamani",
      "living room interiors Chintamani",
      "office interiors Chintamani",
      "renovation Chintamani",
      "SRK Interiors",
    ],
    canonical: "https://srkinteriors.in", // Update when domain is confirmed
    ogImage: "/images/og-image.jpg",
  },
} as const;

export const WHATSAPP_MESSAGES = {
  default:
    "Hello SRK Interiors, I found your website and would like to know more about your interior design services.",
  kitchen:
    "Hello SRK Interiors, I am interested in a Modular Kitchen consultation.",
  livingRoom:
    "Hello SRK Interiors, I am interested in Living Room Interior design.",
  bedroom:
    "Hello SRK Interiors, I am interested in Bedroom Interior design.",
  fullHome:
    "Hello SRK Interiors, I am interested in a Full Home Interior consultation.",
  office:
    "Hello SRK Interiors, I am interested in Office Interior design.",
  renovation:
    "Hello SRK Interiors, I am interested in a Renovation consultation.",
  consultation:
    "Hello SRK Interiors, I would like to book a free consultation.",
} as const;

export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.default) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getCallUrl() {
  return `tel:${BUSINESS.phone}`;
}

export function getDirectionsUrl() {
  return BUSINESS.mapsUrl;
}
