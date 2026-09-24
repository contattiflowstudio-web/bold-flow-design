import { Navbar } from "@/components/sections/Navbar";
import { Portfolio } from "@/components/sections/Portfolio";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const PortfolioPage = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <Portfolio />
        <SocialProof />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;