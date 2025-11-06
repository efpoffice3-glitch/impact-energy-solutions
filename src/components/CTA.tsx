import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export const CTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento e receber o cálculo de economia", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
          
          <div className="relative z-10 p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Solicite um orçamento e receba o cálculo de economia
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Análise do seu sistema atual — sem custo e sem compromisso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Solicitar projeto
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/80">
              Resposta em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
