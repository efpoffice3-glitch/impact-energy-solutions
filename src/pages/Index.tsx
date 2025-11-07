import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Authority } from "@/components/Authority";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <AboutUs />
        <Services />
        <ProductShowcase />
        <Authority />
        <Benefits />
        <Process />
        <CTA />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
