import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutUs />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuemSomos;
