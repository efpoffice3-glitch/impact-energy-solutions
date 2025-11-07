import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento técnico", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA59] text-white p-0 animate-fade-in hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </Button>
  );
};
