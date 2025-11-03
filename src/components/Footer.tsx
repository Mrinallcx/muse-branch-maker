import { Plane, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Easy Bookings</span>
            </div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (888) 291-6115</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@easybookings.us</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Travel Street, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#why" className="hover:text-white transition-colors">Why Call</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <p className="font-semibold text-white">24/7 Phone Support</p>
              <p>Monday - Sunday</p>
              <p>All day, every day</p>
              <p className="mt-4 text-sm text-primary">
                Emergency telephone assistance services available 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p className="mb-2">© 2025 Easy Bookings. All rights reserved.</p>
          <p>Professional flight booking service - Available 24/7</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
