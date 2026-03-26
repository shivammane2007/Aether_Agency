import Navbar from "@/components/Aether/Navbar";
import HeroSection from "@/components/Aether/HeroSection";
import SocialProofSection from "@/components/Aether/SocialProofSection";
import ProductOverviewSection from "@/components/Aether/ProductOverviewSection";
import FeaturesSection from "@/components/Aether/FeaturesSection";
import ExperienceSection from "@/components/Aether/ExperienceSection";
import TechnologySection from "@/components/Aether/TechnologySection";
import EcosystemSection from "@/components/Aether/EcosystemSection";
import WorkflowSection from "@/components/Aether/WorkflowSection";
import PricingSection from "@/components/Aether/PricingSection";
import TestimonialSection from "@/components/Aether/TestimonialSection";
import PerformanceSection from "@/components/Aether/PerformanceSection";
import { Footer } from "@/components/Aether/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-[#0070f3]/30">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ProductOverviewSection />
      <FeaturesSection />
      <ExperienceSection />
      <TechnologySection />
      <EcosystemSection />
      <WorkflowSection />
      <PricingSection />
      <TestimonialSection />
      <PerformanceSection />
      <div className="bg-black pt-20">
        <Footer />
      </div>
    </main>
  );
}
