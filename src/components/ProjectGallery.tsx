import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import centralTermica from "@/assets/central-termica.png";
import piscinaLuxo from "@/assets/piscina-luxo.png";
import aquecedorPiscina from "@/assets/aquecedor-piscina.png";
import reservatorio from "@/assets/reservatorio.png";
import equipamentoPressao from "@/assets/equipamento-pressao.png";

const projects = [
  {
    id: 1,
    title: "Central Térmica Moderna",
    category: "central-termica",
    image: centralTermica,
    description: "Sistema completo de aquecimento para hotel com capacidade de 5.000 litros/hora.",
    details: "Projeto executado em 45 dias com economia de 65% no consumo energético.",
  },
  {
    id: 2,
    title: "Piscina Aquecida Luxury Resort",
    category: "piscina",
    image: piscinaLuxo,
    description: "Aquecimento de piscina infinity com sistema solar térmico integrado.",
    details: "Temperatura constante de 28°C durante todo o ano com custo operacional mínimo.",
  },
  {
    id: 3,
    title: "Aquecedor IDH 120",
    category: "aquecedor-piscina",
    image: aquecedorPiscina,
    description: "Instalação de aquecedor de alta eficiência para piscina residencial.",
    details: "Sistema com COP 5.2, controle digital e baixo ruído operacional.",
  },
  {
    id: 4,
    title: "Reservatório Térmico Industrial",
    category: "central-termica",
    image: reservatorio,
    description: "Reservatório de 2.000 litros para academia e vestiários.",
    details: "Isolamento térmico de alta performance mantendo água quente por 72 horas.",
  },
  {
    id: 5,
    title: "Sistema de Pressurização",
    category: "equipamentos-piscina",
    image: equipamentoPressao,
    description: "Conjunto de pressurizadores para piscina olímpica.",
    details: "Vazão de 40m³/h com acionamento automatizado e economia de energia.",
  },
  {
    id: 6,
    title: "Sistema Fotovoltaico 50kWp",
    category: "fotovoltaico",
    image: centralTermica,
    description: "Usina solar para redução de 85% na conta de energia.",
    details: "Payback de 18 meses com geração média de 6.500 kWh/mês.",
  },
];

const categories = [
  { value: "todos", label: "Todos os Projetos" },
  { value: "central-termica", label: "Central Térmica" },
  { value: "piscina", label: "Piscina" },
  { value: "aquecedor-piscina", label: "Aquecedor de Piscina" },
  { value: "equipamentos-piscina", label: "Equipamentos" },
  { value: "fotovoltaico", label: "Fotovoltaico" },
];

export const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.value)}
            className="transition-all"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg"
              />
              <p className="text-muted-foreground">{selectedProject.details}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
