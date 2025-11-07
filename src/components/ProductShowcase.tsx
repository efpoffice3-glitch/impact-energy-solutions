import { Carousel3D } from "@/components/ui/carousel-3d";
import idh120 from "@/assets/idh-120.png";
import reservatorio from "@/assets/reservatorio-termico.png";
import pressurizacao from "@/assets/equipamento-pressurizacao.png";
import centralTermica from "@/assets/central-termica-completa.jpg";

const showcaseImages = [
  {
    src: idh120,
    alt: "Aquecedor IDH 120 - Trocador de Calor",
    title: "Aquecedor IDH 120",
  },
  {
    src: reservatorio,
    alt: "Reservatório Térmico de Alta Eficiência",
    title: "Reservatório Térmico",
  },
  {
    src: pressurizacao,
    alt: "Sistema de Pressurização",
    title: "Equipamento de Pressurização",
  },
  {
    src: centralTermica,
    alt: "Central Térmica Completa",
    title: "Central Térmica Industrial",
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nossos Equipamentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipamentos de alta performance e tecnologia de ponta para cada tipo de aplicação
          </p>
        </div>
        
        <Carousel3D images={showcaseImages} />
      </div>
    </section>
  );
};
