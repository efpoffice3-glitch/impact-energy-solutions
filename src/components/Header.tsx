import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/#quem-somos", label: "Quem Somos" },
    { path: "/central-termica", label: "Central Térmica" },
    { path: "/equipamentos-piscina", label: "Equipamentos de Piscina" },
    { path: "/aquecedores-piscina", label: "Aquecedores de Piscina" },
    { path: "/fotovoltaico", label: "Sistema Fotovoltaico" },
    { path: "/aquecedor-solar", label: "Aquecedor Solar" },
    { path: "/sauna", label: "Sauna" },
    { path: "/galeria", label: "Galeria" },
    { path: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Impacto Lazer" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary">Impacto Lazer</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-2 pb-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
