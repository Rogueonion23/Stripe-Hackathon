import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">LocalAgent</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-body">
            Funcționalități
          </a>
          <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors font-body">
            Cazuri de Utilizare
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors font-body">
            Demo
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Button variant="default">
            Începe Acum
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
