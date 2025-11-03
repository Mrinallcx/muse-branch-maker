import { Card } from "@/components/ui/card";
import newYorkImage from "@/assets/destination-newyork.jpg";
import londonImage from "@/assets/destination-london.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import parisImage from "@/assets/destination-paris.jpg";

const destinations = [
  {
    name: "New York",
    country: "USA",
    image: newYorkImage
  },
  {
    name: "London",
    country: "England",
    image: londonImage
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: tokyoImage
  },
  {
    name: "Paris",
    country: "France",
    image: parisImage
  }
];

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Destinos Populares</h2>
          <p className="text-lg text-muted-foreground">
            Llámanos para reservar vuelos a estos increíbles destinos y más
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-white/90">{destination.country}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
