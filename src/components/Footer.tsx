import logo from "@/assets/logo.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Impacto Lazer" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Soluções completas em aquecimento, energia e conforto para grandes demandas.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>contato@impactolazer.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Impacto Lazer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
