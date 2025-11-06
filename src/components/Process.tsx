import { Search, Calculator, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Visita técnica e diagnóstico",
    description: "Levantamento completo do consumo atual, estrutura e viabilidade.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Projeto e cálculo de economia",
    description: "Você recebe o relatório com payback, economia prevista e ROI real.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Instalação e integração total",
    description: "Equipe própria, sem terceirização. Entrega com garantia técnica.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Homologação e suporte",
    description: "Conexão com concessionária + manutenção programada.",
  },
];

export const Process = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Como funciona o processo
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Do diagnóstico à entrega final, acompanhamento completo em cada etapa
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
              )}
              
              <div className="relative bg-card border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
