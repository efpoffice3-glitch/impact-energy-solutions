import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CheckCircle2, Flame, Droplets, Gauge, Shield } from "lucide-react";
import centralTermica from "@/assets/central-termica.png";

const CentralTermica = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-16">
          <img
            src={centralTermica}
            alt="Central Térmica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Central Térmica para Grandes Volumes
                </h1>
                <p className="text-xl text-white/90">
                  Soluções completas para hotéis, pousadas, academias e motéis
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Description */}
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Desenvolvemos e instalamos centrais térmicas de alta performance para atender grandes demandas de água quente. Cada sistema é dimensionado considerando volume de consumo, pico de uso, temperatura de armazenamento e eficiência energética.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Flame,
                  title: "Alta Eficiência",
                  description: "COP acima de 4.5 e economia de até 75%",
                },
                {
                  icon: Droplets,
                  title: "Grandes Volumes",
                  description: "De 500 a 50.000 litros por hora",
                },
                {
                  icon: Gauge,
                  title: "Automação Total",
                  description: "Controle digital de temperatura e vazão",
                },
                {
                  icon: Shield,
                  title: "Segurança",
                  description: "Proteções térmicas e elétricas redundantes",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefícios da Central Térmica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Redução de até 75% no consumo de energia elétrica",
                  "Fornecimento constante de água quente em grande volume",
                  "Sistema de backup automático para máxima confiabilidade",
                  "Integração com energia solar térmica (opcional)",
                  "Manutenção preventiva programada inclusa no primeiro ano",
                  "Monitoramento remoto via internet",
                  "Payback médio entre 18 e 24 meses",
                  "Valorização do imóvel e certificações ambientais",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Aplicações Ideais</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Hotéis e Pousadas",
                    description: "Atendimento simultâneo de múltiplos quartos com temperatura uniforme e economia operacional.",
                  },
                  {
                    title: "Academias e Clubes",
                    description: "Vestiários com alta rotatividade e picos de demanda concentrados em horários específicos.",
                  },
                  {
                    title: "Motéis e Spas",
                    description: "Fornecimento ininterrupto com recuperação rápida após uso intensivo.",
                  },
                ].map((app, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CentralTermica;
