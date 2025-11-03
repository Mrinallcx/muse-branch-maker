import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary rounded-lg p-2">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Easy Bookings</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Tu socio de confianza para reservas de vuelos sin complicaciones. Proporcionamos servicio personalizado 
              y ofertas exclusivas 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#why" className="text-white/70 hover:text-white transition-colors">
                  Por Qué Elegirnos
                </a>
              </li>
              <li>
                <a href="#how" className="text-white/70 hover:text-white transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-white/70 hover:text-white transition-colors">
                  Destinos Populares
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Ofertas Especiales
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Reservas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Cancelación
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Mantente Conectado</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">+1 (888) 291-6115</p>
                  <p className="text-sm text-white/70">Soporte 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">contacto@easybookings.us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">
                    123 Calle de Viajes, Suite 100<br />
                    Nueva York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-white/70 mb-3">Suscríbete a nuestro boletín</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
                <Button variant="secondary" size="sm">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Easy Bookings. Todos los derechos reservados. Servicio profesional de reservas de vuelos.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
