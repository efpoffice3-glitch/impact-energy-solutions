import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Waves, Sun, Zap, TrendingDown } from "lucide-react";
import aquecedorPiscina from "@/assets/aquecedor-piscina.png";

const AquecedoresPiscina = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="relative h-[400px] mb-16">
          <img src={aquecedorPiscina} alt="Aquecedores de Piscina" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Aquecedores de Piscina
                </h1>
                <p className="text-xl text-white/90">
                  Trocadores de calor e sistemas solares térmicos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Oferecemos duas tecnologias principais para aquecimento de piscinas: trocadores de calor eletrônicos de alta eficiência e sistemas solares térmicos sustentáveis. Ambas garantem conforto térmico com baixo custo operacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Waves, title: "Conforto Total", description: "Temperatura ideal o ano todo" },
                { icon: Sun, title: "Energia Solar", description: "Sustentável e econômica" },
                { icon: Zap, title: "Alta Eficiência", description: "COP 5.2 nos modelos elétricos" },
                { icon: TrendingDown, title: "Baixo Custo", description: "Economia de até 80%" },
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
                <h3 className="text-2xl font-bold mb-4">Trocador de Calor Eletrônico</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Aquecimento rápido e preciso</li>
                  <li>• Controle digital de temperatura</li>
                  <li>• Funciona em qualquer clima</li>
                  <li>• Instalação compacta</li>
                  <li>• Manutenção mínima</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Sistema Solar Térmico</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Energia 100% renovável</li>
                  <li>• Custo operacional quase zero</li>
                  <li>• Valorização do imóvel</li>
                  <li>• Payback médio de 24 meses</li>
                  <li>• Sustentabilidade ambiental</li>
                </ul>
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

export default AquecedoresPiscina;
