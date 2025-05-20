// Force Vercel rebuild

import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Interior Design Portfolio",
  description: "Stunning interior design projects showcasing our expertise and creativity",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}// trigger redeploy
