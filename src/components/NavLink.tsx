import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent/50 block"
    >
      {children}
    </Link>
  );
};
