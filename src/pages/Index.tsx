import ParticleField from "@/components/cinematic/ParticleField";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import Navigation from "@/components/layout/Navigation";  // ← ADD THIS

import CinematicHero from "@/components/cinematic/CinematicHero";
import StudioManifesto from "@/components/cinematic/StudioManifesto";
import ServicesShowcase from "@/components/cinematic/ServicesShowcase";
import PricingCards from "@/components/cinematic/PricingCards";
import PortfolioParallax from "@/components/cinematic/PortfolioParallax";
import TestimonialsGlass from "@/components/cinematic/TestimonialsGlass";
import ContactFinale from "@/components/cinematic/ContactFinale";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleField />
      <ScrollProgress />
      <Navigation />
      
      <main className="relative z-10">
        <CinematicHero />
        <StudioManifesto />
        <ServicesShowcase />
        <PricingCards />
        <PortfolioParallax />
        <TestimonialsGlass />
        <ContactFinale />
      </main>
    </div>
  );
};

export default Index;
