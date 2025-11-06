import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Flame, Droplets, Zap, Sun, Waves, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Flame,
    title: "Central Térmica",
    description: "Para hotéis, academias, motéis, indústrias e grandes volumes de água quente.",
  },
  {
    icon: Droplets,
    title: "Equipamentos de Piscina",
    description: "Bombas, filtros, trocadores de calor, automação e sistemas completos.",
  },
  {
    icon: Waves,
    title: "Aquecedor de Piscina",
    description: "Trocador de calor eletrônico ou sistema solar térmico — alta eficiência com baixo consumo.",
  },
  {
    icon: Zap,
    title: "Sistema Fotovoltaico",
    description: "Geração de energia limpa com redução média entre 50% e 95% na conta de luz.",
  },
  {
    icon: Sun,
    title: "Aquecedor Solar de Banho",
    description: "Sistemas dimensionados para residências, condomínios, vestiários, pousadas e SPAs.",
  },
  {
    icon: Wind,
    title: "Saunas",
    description: "Sauna seca ou úmida com instalação completa e infraestrutura térmica.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Soluções completas para cada tipo de demanda
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Tecnologia, eficiência e economia em sistemas integrados
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="min-h-[280px]">
              <div className="relative h-full rounded-2xl border-[0.75px] border-border p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="w-fit rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-3 border border-primary/20">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary hover:bg-primary/5"
                  >
                    Saiba mais →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
