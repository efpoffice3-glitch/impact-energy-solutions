import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Flame, Droplets, Thermometer, Heart } from "lucide-react";
import piscinaLuxo from "@/assets/piscina-luxo.png";

const Sauna = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="relative h-[400px] mb-16">
          <img src={piscinaLuxo} alt="Sauna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Saunas Secas e Úmidas
                </h1>
                <p className="text-xl text-white/90">
                  Instalação completa com infraestrutura térmica
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Projetamos e instalamos saunas residenciais e comerciais com tecnologia de ponta. Oferecemos modelos secos (finlandês) e úmidos (steam room), com controle preciso de temperatura e umidade para máxima segurança e conforto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Flame, title: "Sauna Seca", description: "Temperatura até 90°C" },
                { icon: Droplets, title: "Sauna Úmida", description: "Vapor controlado" },
                { icon: Thermometer, title: "Controle Digital", description: "Precisão de 1°C" },
                { icon: Heart, title: "Bem-estar", description: "Relaxamento profundo" },
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Sauna Seca (Finlandesa)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Temperatura de 70°C a 90°C</li>
                  <li>• Aquecimento rápido (20 minutos)</li>
                  <li>• Madeira nobre certificada</li>
                  <li>• Sistema elétrico de alta eficiência</li>
                  <li>• Iluminação LED terapêutica</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Sauna Úmida (Steam Room)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Temperatura de 40°C a 50°C</li>
                  <li>• Umidade controlada até 100%</li>
                  <li>• Revestimento antitérmico</li>
                  <li>• Gerador de vapor automatizado</li>
                  <li>• Aromaterapia opcional</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Nossos Diferenciais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Projeto arquitetônico 3D incluso",
                  "Infraestrutura elétrica e hidráulica completa",
                  "Materiais de primeira linha",
                  "Isolamento térmico de alta performance",
                  "Sistema de segurança com desligamento automático",
                  "Ventilação forçada e exaustão",
                  "Garantia de 2 anos para equipamentos",
                  "Manutenção preventiva programada",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Flame className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
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

export default Sauna;
