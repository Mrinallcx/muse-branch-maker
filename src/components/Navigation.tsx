import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <Plane className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Easy Bookings</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-sm font-medium hover:text-primary transition-colors">
              Por Qué Llamar
            </a>
            <a href="#how" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">
              Destinos
            </a>
          </div>

          <Button size="sm">Llama Ahora</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
