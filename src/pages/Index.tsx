import { Cursor } from "@/components/ui/inverted-cursor";
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
      <Cursor />
      <Hero />
      <Services />
      <Authority />
      <Benefits />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
