import { Award, Users, Wrench, TrendingUp } from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-24 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quem Somos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Impacto Lazer é referência em soluções completas de aquecimento e energia para grandes demandas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Nossa História
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 12 anos de experiência no mercado, a Impacto Lazer se consolidou como uma empresa 
              especializada em projetos térmicos e soluções energéticas de alta performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atendemos hotéis, pousadas, academias, condomínios, indústrias e residências de alto padrão 
              em toda a região de São Paulo, oferecendo desde o projeto até a homologação junto à concessionária.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">+12 Anos</h4>
              <p className="text-muted-foreground">de experiência no mercado</p>
            </div>
            <div className="bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">+1.000</h4>
              <p className="text-muted-foreground">instalações realizadas</p>
            </div>
            <div className="bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">Equipe</h4>
              <p className="text-muted-foreground">própria de engenharia</p>
            </div>
            <div className="bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="h-12 w-12 text-secondary mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">até 70%</h4>
              <p className="text-muted-foreground">de economia energética</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Diferenciais Impacto Lazer
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-1 w-16 bg-primary rounded-full" />
              <h4 className="text-xl font-semibold text-foreground">Projeto Completo</h4>
              <p className="text-muted-foreground">
                Dimensionamento técnico, cálculo de economia e projeto executivo personalizado
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-1 w-16 bg-secondary rounded-full" />
              <h4 className="text-xl font-semibold text-foreground">Instalação Própria</h4>
              <p className="text-muted-foreground">
                Equipe técnica especializada sem terceirização, garantindo qualidade total
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-1 w-16 bg-primary rounded-full" />
              <h4 className="text-xl font-semibold text-foreground">Pós-Venda Completo</h4>
              <p className="text-muted-foreground">
                Suporte técnico, manutenção preventiva e corretiva com equipe própria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
