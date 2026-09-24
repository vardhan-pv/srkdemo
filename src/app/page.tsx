import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ConsultationForm from "@/components/sections/ConsultationForm";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: BUSINESS.seo.title,
  description: BUSINESS.seo.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="with-header">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ReviewsSection />
        <ConsultationForm />
        <LocationSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </>
  );
}
