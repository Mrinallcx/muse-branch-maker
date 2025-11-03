import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock } from "lucide-react";
import heroImage from "@/assets/jumbo-jet-flying-sky.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Reserva Tu Vuelo con Solo una Llamada
          </h1>
          <p className="text-xl text-white/90 mb-12">
            Asistencia experta para las mejores ofertas de boletos aéreos en todo el mundo
          </p>
          
          <Card className="max-w-md mx-auto p-8 bg-background shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                +1 (888) 291-6115
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Llama ahora para hablar con nuestros expertos en viajes
            </p>
            <Button size="lg" className="w-full">
              Llama Ahora para Reservar
            </Button>
          </Card>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <Clock className="h-5 w-5" />
            <span className="text-sm">Disponible 24/7 para tu conveniencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
