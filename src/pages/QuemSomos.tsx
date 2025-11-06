import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Quem Somos</h1>
              <p className="text-xl text-muted-foreground">
                Mais de 12 anos transformando energia em conforto
              </p>
            </div>

            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-primary">Impacto Lazer</strong> nasceu da necessidade do mercado por soluções completas e integradas em sistemas de aquecimento, climatização e geração de energia. Ao longo de mais de uma década, consolidamos nossa expertise em projetos para hotéis, pousadas, academias, condomínios e indústrias.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é entregar não apenas equipamentos, mas <strong>sistemas inteligentes</strong> que geram economia real, conforto térmico e sustentabilidade energética. Cada projeto é dimensionado com rigor técnico, instalado por equipe própria e acompanhado até a homologação junto à concessionária.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Diferenciais
                </h3>
                <ul className="space-y-3">
                  {[
                    "Engenharia própria e projetos personalizados",
                    "Equipe técnica certificada e treinada",
                    "Garantia de fábrica + garantia de instalação",
                    "Suporte técnico especializado 24/7",
                    "Manutenção preventiva e corretiva",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Nossos Valores
                </h3>
                <ul className="space-y-3">
                  {[
                    "Transparência em orçamentos e prazos",
                    "Qualidade sem concessões",
                    "Inovação tecnológica constante",
                    "Sustentabilidade e eficiência energética",
                    "Relacionamento de longo prazo com clientes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;
