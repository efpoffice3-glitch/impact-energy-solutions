import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import CentralTermica from "./pages/CentralTermica";
import EquipamentosPiscina from "./pages/EquipamentosPiscina";
import AquecedoresPiscina from "./pages/AquecedoresPiscina";
import Fotovoltaico from "./pages/Fotovoltaico";
import AquecedorSolar from "./pages/AquecedorSolar";
import Sauna from "./pages/Sauna";
import Galeria from "./pages/Galeria";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/central-termica" element={<CentralTermica />} />
          <Route path="/equipamentos-piscina" element={<EquipamentosPiscina />} />
          <Route path="/aquecedores-piscina" element={<AquecedoresPiscina />} />
          <Route path="/fotovoltaico" element={<Fotovoltaico />} />
          <Route path="/aquecedor-solar" element={<AquecedorSolar />} />
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
