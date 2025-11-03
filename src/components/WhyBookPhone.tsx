import { Card, CardContent } from "@/components/ui/card";
import { Headphones, DollarSign, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Asistencia Experta",
    description: "Habla directamente con agentes de viajes experimentados que entienden tus necesidades"
  },
  {
    icon: DollarSign,
    title: "Mejores Precios",
    description: "Acceso a ofertas exclusivas y tarifas competitivas en todas las aerolíneas principales"
  },
  {
    icon: Shield,
    title: "Reserva Segura",
    description: "Procesamiento de pago seguro y protegido con protección total de reserva"
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Servicio al cliente las 24 horas para todas tus emergencias de viaje"
  }
];

const WhyBookPhone = () => {
  return (
    <section id="why" className="py-20 bg-feature-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">¿Por Qué Reservar por Teléfono?</h2>
          <p className="text-lg text-muted-foreground">
            Servicio personalizado que hace que tu planificación de viaje sea sin esfuerzo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBookPhone;
