import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Flame, Droplets, Zap, Sun, Waves, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <Flame className="h-6 w-6" />,
    title: "Central Térmica",
    description: "Para hotéis, academias, motéis, indústrias e grandes volumes de água quente.",
    link: "/central-termica",
  },
  {
    id: 2,
    icon: <Droplets className="h-6 w-6" />,
    title: "Equipamentos de Piscina",
    description: "Bombas, filtros, trocadores de calor, automação e sistemas completos.",
    link: "/equipamentos-piscina",
  },
  {
    id: 3,
    icon: <Waves className="h-6 w-6" />,
    title: "Aquecedor de Piscina",
    description: "Trocador de calor eletrônico ou sistema solar térmico — alta eficiência com baixo consumo.",
    link: "/aquecedores-piscina",
  },
  {
    id: 4,
    icon: <Zap className="h-6 w-6" />,
    title: "Sistema Fotovoltaico",
    description: "Geração de energia limpa com redução média entre 50% e 95% na conta de luz.",
    link: "/fotovoltaico",
  },
  {
    id: 5,
    icon: <Sun className="h-6 w-6" />,
    title: "Aquecedor Solar de Banho",
    description: "Sistemas dimensionados para residências, condomínios, vestiários, pousadas e SPAs.",
    link: "/aquecedor-solar",
  },
  {
    id: 6,
    icon: <Wind className="h-6 w-6" />,
    title: "Saunas",
    description: "Sauna seca ou úmida com instalação completa e infraestrutura térmica.",
    link: "/sauna",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Soluções completas para cada tipo de demanda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos personalizados com tecnologia de ponta e garantia de resultado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={service.link}>
              <div className="relative group h-full">
                <GlowingEffect 
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative h-full rounded-2xl border bg-card p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group-hover:-translate-y-2">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-all duration-300">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
