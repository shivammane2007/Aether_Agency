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
import PerformanceSection from "@/components/Aether/PerformanceSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#0070f3]/30">
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
      <PerformanceSection />
    </main>
  );
}
