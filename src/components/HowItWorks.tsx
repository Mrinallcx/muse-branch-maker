import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ClipboardList, Plane } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our friendly agents who will understand your travel needs and preferences"
  },
  {
    icon: ClipboardList,
    title: "Get Options",
    description: "We'll present you with a range to find the best flight options and prices for your journey"
  },
  {
    icon: Plane,
    title: "Book & Fly",
    description: "Confirm your booking and we'll handle all details instantly via email or text"
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-primary-foreground/90">
            Booking your flight with us is quick and easy. Our process is designed to save you time and find you the best deals.
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
            Ready to book your next flight? Our travel experts are waiting for your call.
          </p>
          <Button size="lg" variant="secondary">
            Call +1 (888) 291-6115 Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
