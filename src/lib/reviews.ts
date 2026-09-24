/**
 * SRK INTERIORS — REVIEWS DATA
 * Only verified public Google reviews from SRK Interiors Google Maps listing.
 * Source: https://maps.app.goo.gl/SnWkajrXxQRJkovEA
 * DO NOT add fake reviews.
 */

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "google";
  sourceUrl: string;
}

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Nayana Baby",
    rating: 5,
    text: "Absolutely great work done by the team! The best part is that they clearly understood our requirements and budget, and provided the best possible for our hotel. Thank you so much, SRK Interiors Chintamani.",
    date: "5 months ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
  {
    id: "review-2",
    name: "Balaji KS",
    rating: 5,
    text: "Had a great experience! The owner is very friendly, calm, and composed, always willing to listen and accommodate changes. The quality of materials used is excellent, and the workmanship reflects great attention to detail. The team is professional, well-mannered, and easy to work with.",
    date: "4 months ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
  {
    id: "review-3",
    name: "Banu Banu",
    rating: 5,
    text: "We didn't expect this much of work from SRK Interiors — they have the best team and support. Whenever I tried to call, they answered immediately. The team understood our needs very fast and gave the best output. I really thank SRK Interiors for excellent work.",
    date: "3 weeks ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
  {
    id: "review-4",
    name: "Arbaz Pasha",
    rating: 5,
    text: "Work is very good and they maintain quality in their work. Their workers are also very friendly with us.",
    date: "9 months ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
  {
    id: "review-5",
    name: "Firdose Firdose",
    rating: 5,
    text: "SRK Interiors is best for your dream home interiors. They have trendy designs in their design collections.",
    date: "1 year ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
  {
    id: "review-6",
    name: "Waheed Pasha",
    rating: 5,
    text: "Thank you SRK Interiors for designing my dream home, with skilled labours and completing on time. All the best for your future projects.",
    date: "2 years ago",
    source: "google",
    sourceUrl: "https://maps.app.goo.gl/SnWkajrXxQRJkovEA",
  },
];
