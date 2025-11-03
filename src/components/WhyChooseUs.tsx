import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

const benefits = [
  "Access to exclusive airline partnerships",
  "Flexible payment options available",
  "Multi-city and complex itinerary specialists",
  "Group booking discounts",
  "Last-minute booking assistance",
  "Flight change and cancellation support"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-feature-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Service?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a trusted affiliate partner of major airlines, we provide personalized 
              travel services at the best value you can find and enjoy. Our experienced agents 
              handle everything from simple one-way trips to complex multi-destination itineraries.
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
                Ready to Book Your Flight?
              </h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Our travel experts are standing by to help you find the perfect flight at 
                the best price.
              </p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <p className="text-sm text-primary-foreground/80 mb-2">Call us now at</p>
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-6 w-6" />
                  <span className="text-3xl font-bold">+1 (888) 291-6115</span>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Available 24 hours a day / 7 days a week
                </p>
              </div>
              
              <Button size="lg" variant="secondary" className="w-full">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
