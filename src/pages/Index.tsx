import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Authority } from "@/components/Authority";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <Authority />
        <Benefits />
        <Process />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
