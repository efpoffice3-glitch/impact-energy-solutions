import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Sun, TrendingDown, Leaf, Zap } from "lucide-react";
import centralTermica from "@/assets/central-termica.png";

const Fotovoltaico = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="relative h-[400px] mb-16">
          <img src={centralTermica} alt="Sistema Fotovoltaico" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Sistema Fotovoltaico
                </h1>
                <p className="text-xl text-white/90">
                  Energia limpa com economia de até 95% na conta de luz
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Desenvolvemos projetos de geração de energia solar fotovoltaica para residências, empresas e indústrias. Cada sistema é dimensionado para máxima geração e economia, com homologação junto à concessionária inclusa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sun, title: "Energia Limpa", description: "100% renovável e sustentável" },
                { icon: TrendingDown, title: "Economia Real", description: "Redução de 50% a 95%" },
                { icon: Leaf, title: "Sustentável", description: "Zero emissão de CO₂" },
                { icon: Zap, title: "Valorização", description: "Imóvel vale até 30% mais" },
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do Sistema Fotovoltaico</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Redução média de 50% a 95% na conta de luz",
                  "Payback entre 3 e 5 anos",
                  "Vida útil superior a 25 anos",
                  "Manutenção mínima (limpeza anual)",
                  "Proteção contra aumento da tarifa elétrica",
                  "Créditos de energia compensados pela concessionária",
                  "Financiamento disponível com taxas especiais",
                  "Monitoramento em tempo real via aplicativo",
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
                { title: "Residencial", description: "Sistemas de 3kWp a 10kWp para casas e apartamentos." },
                { title: "Comercial", description: "De 10kWp a 100kWp para empresas e comércios." },
                { title: "Industrial", description: "Acima de 100kWp para grandes demandas energéticas." },
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

export default Fotovoltaico;
