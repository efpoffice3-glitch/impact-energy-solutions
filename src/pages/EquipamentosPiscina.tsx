import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Settings, Zap, Timer, ThermometerSun } from "lucide-react";
import equipamentoPressao from "@/assets/equipamento-pressao.png";

const EquipamentosPiscina = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="relative h-[400px] mb-16">
          <img src={equipamentoPressao} alt="Equipamentos de Piscina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Equipamentos Completos para Piscina
                </h1>
                <p className="text-xl text-white/90">
                  Bombas, filtros, automação e sistemas integrados
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fornecemos e instalamos equipamentos de alta performance para piscinas residenciais, comerciais e olímpicas. Cada sistema é dimensionado para garantir máxima eficiência, economia de energia e facilidade de manutenção.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Settings, title: "Bombas", description: "Alta vazão e baixo consumo energético" },
                { icon: Zap, title: "Filtros", description: "Filtragem eficiente e durável" },
                { icon: Timer, title: "Automação", description: "Controle inteligente e programável" },
                { icon: ThermometerSun, title: "Trocadores", description: "Aquecimento eficiente da água" },
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Piscinas Residenciais", description: "Equipamentos compactos e silenciosos para uso doméstico." },
                { title: "Piscinas Comerciais", description: "Sistemas robustos para hotéis, clubes e academias." },
                { title: "Piscinas Olímpicas", description: "Alta vazão e performance profissional certificada." },
              ].map((app, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EquipamentosPiscina;
