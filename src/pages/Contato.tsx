import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Entre em Contato</h1>
              <p className="text-xl text-muted-foreground">
                Solicite um orçamento ou tire suas dúvidas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Envie sua Mensagem</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          São Paulo, SP - Brasil<br />
                          Atendemos toda a região metropolitana
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-muted-foreground">
                          (11) 99999-9999<br />
                          WhatsApp disponível
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          contato@impactolazer.com.br
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 12h<br />
                          Emergências: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Orçamento Rápido via WhatsApp</h3>
                  <p className="text-muted-foreground mb-6">
                    Receba atendimento imediato e tire suas dúvidas diretamente com nossa equipe técnica.
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
