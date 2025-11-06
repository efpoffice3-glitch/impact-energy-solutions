import { Award, Users, Wrench, MapPin } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "+10 anos",
    label: "de experiência no setor",
  },
  {
    icon: Users,
    value: "+1.000",
    label: "sistemas entregues",
  },
  {
    icon: Wrench,
    value: "100%",
    label: "equipe própria de engenharia",
  },
  {
    icon: MapPin,
    value: "SP",
    label: "atendimento em São Paulo e região",
  },
];

export const Authority = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Quem confia na Impacto Lazer,
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            sente a diferença no resultado
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Experiência, qualidade e resultados comprovados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 border border-primary/20">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
