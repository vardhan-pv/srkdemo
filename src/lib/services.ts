/**
 * SRK INTERIORS — SERVICES DATA
 */

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  icon: string; // SVG path data or emoji
  whatsappMessage: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "home-interiors",
    name: "Home Interiors",
    shortDescription:
      "Complete home interior solutions tailored to your lifestyle, space, and budget.",
    icon: "home",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in a Full Home Interior consultation.",
    featured: true,
  },
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    shortDescription:
      "Functional and stylish modular kitchens designed for efficiency and elegance.",
    icon: "kitchen",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in a Modular Kitchen consultation.",
    featured: true,
  },
  {
    id: "living-room",
    name: "Living Room",
    shortDescription:
      "Beautiful living room designs that create comfortable and impressive spaces.",
    icon: "sofa",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in Living Room Interior design.",
    featured: true,
  },
  {
    id: "bedroom",
    name: "Bedroom Interiors",
    shortDescription:
      "Peaceful and elegant bedroom designs for the perfect rest space.",
    icon: "bed",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in Bedroom Interior design.",
    featured: true,
  },
  {
    id: "office-interiors",
    name: "Office Interiors",
    shortDescription:
      "Professional and productive office spaces designed for focus and creativity.",
    icon: "office",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in Office Interior design.",
  },
  {
    id: "false-ceiling",
    name: "False Ceiling",
    shortDescription:
      "Creative false ceiling designs that add depth, character and elegance to any room.",
    icon: "ceiling",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in False Ceiling design.",
  },
  {
    id: "renovation",
    name: "Renovation",
    shortDescription:
      "Expert renovation services to transform and refresh your existing spaces.",
    icon: "renovation",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in a Renovation consultation.",
  },
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    shortDescription:
      "Bespoke furniture crafted to fit your specific space and style requirements.",
    icon: "furniture",
    whatsappMessage:
      "Hello SRK Interiors, I am interested in Custom Furniture.",
  },
];
