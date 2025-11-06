import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Carousel3D } from "@/components/ui/carousel-3d";
import centralTermica from "@/assets/central-termica.png";
import piscinaLuxo from "@/assets/piscina-luxo.png";
import aquecedorPiscina from "@/assets/aquecedor-piscina.png";

const carouselImages = [
  {
    src: centralTermica,
    alt: "Central Térmica Moderna",
    title: "Central Térmica de Alta Eficiência",
  },
  {
    src: piscinaLuxo,
    alt: "Piscina Aquecida Luxury",
    title: "Piscina Aquecida com Vista Panorâmica",
  },
  {
    src: aquecedorPiscina,
    alt: "Aquecedor IDH 120",
    title: "Sistema de Aquecimento Inteligente",
  },
];

const Galeria = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Galeria de Projetos</h1>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos nossos projetos realizados
            </p>
          </div>

          {/* 3D Carousel Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Projetos em Destaque</h2>
            <Carousel3D images={carouselImages} />
          </div>

          {/* Project Gallery with Filters */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Todos os Projetos</h2>
            <ProjectGallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Galeria;
