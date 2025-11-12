import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento", "_blank");
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Impacto Lazer" className="h-16 w-auto" />
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quem-somos">Quem Somos</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent/50 flex items-center gap-1">
                Serviços
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-background border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <NavLink to="/central-termica">Central Térmica</NavLink>
                <NavLink to="/equipamentos-piscina">Equipamentos de Piscina</NavLink>
                <NavLink to="/aquecedores-piscina">Aquecedores de Piscina</NavLink>
                <NavLink to="/fotovoltaico">Sistema Fotovoltaico</NavLink>
                <NavLink to="/aquecedor-solar">Aquecedor Solar</NavLink>
                <NavLink to="/sauna">Sauna</NavLink>
              </div>
            </div>
            
            <NavLink to="/galeria">Galeria</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            
            <button onClick={handleWhatsApp} className="ml-4 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-md">
              <Phone className="h-4 w-4" />
              <span className="font-medium">WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden mt-4 space-y-2 pb-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/quem-somos" onClick={() => setIsMenuOpen(false)}>Quem Somos</NavLink>
            
            <div>
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent/50 flex items-center justify-between">
                Serviços
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && <div className="ml-4 mt-1 space-y-1">
                  <NavLink to="/central-termica" onClick={() => setIsMenuOpen(false)}>Central Térmica</NavLink>
                  <NavLink to="/equipamentos-piscina" onClick={() => setIsMenuOpen(false)}>Equipamentos de Piscina</NavLink>
                  <NavLink to="/aquecedores-piscina" onClick={() => setIsMenuOpen(false)}>Aquecedores de Piscina</NavLink>
                  <NavLink to="/fotovoltaico" onClick={() => setIsMenuOpen(false)}>Sistema Fotovoltaico</NavLink>
                  <NavLink to="/aquecedor-solar" onClick={() => setIsMenuOpen(false)}>Aquecedor Solar</NavLink>
                  <NavLink to="/sauna" onClick={() => setIsMenuOpen(false)}>Sauna</NavLink>
                </div>}
            </div>
            
            <NavLink to="/galeria" onClick={() => setIsMenuOpen(false)}>Galeria</NavLink>
            <NavLink to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</NavLink>
            
            <button onClick={handleWhatsApp} className="w-full flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-4 py-3 rounded-lg transition-all mt-4">
              <Phone className="h-4 w-4" />
              <span className="font-medium">WhatsApp</span>
            </button>
          </div>}
      </nav>
    </header>;
};