import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyBookPhone from "@/components/WhyBookPhone";
import HowItWorks from "@/components/HowItWorks";
import PopularDestinations from "@/components/PopularDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhyBookPhone />
      <HowItWorks />
      <PopularDestinations />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
