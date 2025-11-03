import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

const benefits = [
  "Acceso a asociaciones exclusivas con aerolíneas",
  "Opciones de pago flexibles disponibles",
  "Especialistas en itinerarios multiciudad y complejos",
  "Descuentos en reservas grupales",
  "Asistencia en reservas de último minuto",
  "Soporte para cambios y cancelaciones de vuelos"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-feature-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">¿Por Qué Elegir Nuestro Servicio?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Como socio afiliado de confianza de las principales aerolíneas, proporcionamos servicios 
              de viaje personalizados al mejor valor que puedes encontrar y disfrutar. Nuestros agentes experimentados 
              manejan todo, desde viajes sencillos de ida hasta itinerarios complejos de múltiples destinos.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para Reservar Tu Vuelo?
              </h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Nuestros expertos en viajes están listos para ayudarte a encontrar el vuelo perfecto al 
                mejor precio.
              </p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <p className="text-sm text-primary-foreground/80 mb-2">Llámanos ahora al</p>
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-6 w-6" />
                  <span className="text-3xl font-bold">+1 (888) 291-6115</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Disponible 24 horas al día / 7 días a la semana
                </p>
              </div>
              
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <a href="tel:+18882916115">Llama Ahora</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
