import { Footer } from "@/components/layout/Footer";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <CatalogSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
