import { Check } from "lucide-react";

const benefits = [
  "Economia de até 70% no consumo de energia",
  "Projeto térmico dimensionado para sua demanda",
  "Instalação + automação + homologação com concessionária",
  "Sistemas de alta durabilidade e baixo custo de manutenção",
  "Payback médio entre 12 e 24 meses",
  "Suporte técnico e manutenção especializada",
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a Impacto Lazer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aqui você não contrata apenas equipamentos — contrata um sistema completo, 
            dimensionado para gerar conforto, economia operacional e segurança térmica no longo prazo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-base text-card-foreground pt-0.5">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
