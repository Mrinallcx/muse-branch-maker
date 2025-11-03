import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ClipboardList, Plane } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Llámanos",
    description: "Habla con nuestros agentes amables que entenderán tus necesidades y preferencias de viaje"
  },
  {
    icon: ClipboardList,
    title: "Obtén Opciones",
    description: "Te presentaremos una variedad para encontrar las mejores opciones de vuelo y precios para tu viaje"
  },
  {
    icon: Plane,
    title: "Reserva y Vuela",
    description: "Confirma tu reserva y manejaremos todos los detalles al instante por correo o mensaje de texto"
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-lg text-primary-foreground/90">
            Reservar tu vuelo con nosotros es rápido y fácil. Nuestro proceso está diseñado para ahorrarte tiempo y encontrarte las mejores ofertas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/20 backdrop-blur-sm border-white/30 text-center hover:bg-white/25 transition-colors">
              <CardContent className="pt-10 pb-10">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-6">
            ¿Listo para reservar tu próximo vuelo? Nuestros expertos en viajes están esperando tu llamada.
          </p>
          <Button size="lg" variant="secondary">
            Llama al +1 (888) 291-6115 Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
