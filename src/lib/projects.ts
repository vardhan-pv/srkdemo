/**
 * SRK INTERIORS — PROJECTS/PORTFOLIO DATA
 * Update with real client-approved photos.
 * Client must provide original high-resolution project photos.
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  description: string;
  thumbnail: string;
  images: string[];
  altText: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "all"
  | "living-room"
  | "bedroom"
  | "kitchen"
  | "full-home"
  | "office"
  | "renovation";

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "full-home", label: "Full Home" },
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "office", label: "Office" },
  { id: "renovation", label: "Renovation" },
];

// NOTE: Replace placeholder images with real client-approved project photos
// Naming convention: srk-interiors-[type]-[number]-chintamani.webp
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    slug: "modern-home-interior-chintamani",
    title: "Modern Home Interior",
    category: "full-home",
    location: "Chintamani",
    description:
      "A complete home interior transformation featuring custom furniture, false ceiling and premium finishes.",
    thumbnail: "/images/projects/project-1-thumbnail.jpg",
    images: ["/images/projects/project-1-thumbnail.jpg"],
    altText:
      "Modern home interior design by SRK Interiors Chintamani featuring custom furniture and premium finishes",
    featured: true,
  },
  {
    id: "project-2",
    slug: "modular-kitchen-design-chintamani",
    title: "Modular Kitchen Design",
    category: "kitchen",
    location: "Chintamani",
    description:
      "A functional and elegant modular kitchen with modern cabinets, efficient storage and premium countertops.",
    thumbnail: "/images/projects/project-2-thumbnail.jpg",
    images: ["/images/projects/project-2-thumbnail.jpg"],
    altText:
      "Modular kitchen interior design by SRK Interiors Chintamani with modern cabinets and countertops",
    featured: true,
  },
  {
    id: "project-3",
    slug: "luxury-bedroom-interior-chintamani",
    title: "Luxury Bedroom Interior",
    category: "bedroom",
    location: "Chintamani",
    description:
      "A serene and elegant bedroom design with custom wardrobe, soft lighting and premium materials.",
    thumbnail: "/images/projects/project-3-thumbnail.jpg",
    images: ["/images/projects/project-3-thumbnail.jpg"],
    altText:
      "Luxury bedroom interior design by SRK Interiors Chintamani with custom wardrobe and soft lighting",
    featured: true,
  },
  {
    id: "project-4",
    slug: "contemporary-living-room-chintamani",
    title: "Contemporary Living Room",
    category: "living-room",
    location: "Chintamani",
    description:
      "A stylish and welcoming living room designed for family comfort with a contemporary aesthetic.",
    thumbnail: "/images/projects/project-4-thumbnail.jpg",
    images: ["/images/projects/project-4-thumbnail.jpg"],
    altText:
      "Contemporary living room interior design by SRK Interiors Chintamani with modern aesthetic",
    featured: true,
  },
  {
    id: "project-5",
    slug: "hotel-interior-design-chintamani",
    title: "Hotel Interior Design",
    category: "renovation",
    location: "Chintamani",
    description:
      "Complete interior design for a hotel including reception, rooms and common areas.",
    thumbnail: "/images/projects/project-5-thumbnail.jpg",
    images: ["/images/projects/project-5-thumbnail.jpg"],
    altText:
      "Hotel interior design project by SRK Interiors Chintamani including reception and rooms",
    featured: false,
  },
  {
    id: "project-6",
    slug: "office-interior-design-chintamani",
    title: "Professional Office Interior",
    category: "office",
    location: "Chintamani",
    description:
      "A productive and professional office space with smart storage, ergonomic layout and brand-aligned design.",
    thumbnail: "/images/projects/project-6-thumbnail.jpg",
    images: ["/images/projects/project-6-thumbnail.jpg"],
    altText:
      "Office interior design by SRK Interiors Chintamani with ergonomic layout and professional finish",
    featured: false,
  },
];
