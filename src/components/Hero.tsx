import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento técnico", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroBackground} 
          alt="Piscina aquecida ao pôr do sol" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/95" />
      
      {/* Sparkles effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={50}
          className="w-full h-full"
          particleColor="hsl(200, 85%, 45%)"
          speed={0.5}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img src={logo} alt="Impacto Lazer" className="h-24 w-auto drop-shadow-2xl" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight drop-shadow-2xl">
          Soluções completas em aquecimento,<br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            energia e conforto
          </span>
          <br />para grandes demandas
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in drop-shadow-lg">
          Projetos, fornecimento, instalação, automação e homologação junto à concessionária — tudo em um só lugar.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center items-center mb-12 text-sm md:text-base text-foreground/80 animate-fade-in">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-semibold">+12 anos de experiência</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="font-semibold">+1.000 instalações</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-semibold">Engenharia própria</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="font-semibold">Economia comprovada</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
            onClick={handleWhatsApp}
          >
            <Phone className="mr-2 h-5 w-5" />
            Solicitar orçamento técnico
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-accent/10"
            onClick={scrollToServices}
          >
            Conhecer nossas soluções
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
