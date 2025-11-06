import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Sun, Home, Building, Droplets } from "lucide-react";
import reservatorio from "@/assets/reservatorio.png";

const AquecedorSolar = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="relative h-[400px] mb-16">
          <img src={reservatorio} alt="Aquecedor Solar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Aquecedor Solar de Banho
                </h1>
                <p className="text-xl text-white/90">
                  Sistemas dimensionados para residências, condomínios e SPAs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Projetamos e instalamos sistemas de aquecimento solar térmico para água de banho. Tecnologia sustentável que reduz em até 80% o custo com aquecimento de água, com retorno do investimento entre 18 e 36 meses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sun, title: "Energia Solar", description: "Gratuita e inesgotável" },
                { icon: Droplets, title: "Água Quente", description: "Temperatura ideal sempre" },
                { icon: Home, title: "Residencial", description: "Para casas e apartamentos" },
                { icon: Building, title: "Coletivo", description: "Condomínios e vestiários" },
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefícios do Aquecedor Solar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Redução de até 80% no custo com aquecimento de água",
                  "Energia 100% limpa e renovável",
                  "Payback entre 18 e 36 meses",
                  "Vida útil superior a 20 anos",
                  "Baixíssima manutenção",
                  "Aquecimento auxiliar elétrico ou a gás",
                  "Valorização do imóvel",
                  "Contribui para certificações sustentáveis",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Sun className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Residências", description: "Sistemas de 200 a 600 litros para casas e sobrados." },
                { title: "Condomínios", description: "Projetos centralizados ou individuais por unidade." },
                { title: "Pousadas e SPAs", description: "Alta demanda com múltiplos pontos de consumo." },
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

export default AquecedorSolar;
