import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import heroDish from "@/assets/hero-dish.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import heroChef from "@/assets/hero-chef.jpg";

const slides = [
  { src: heroDish, alt: "Signature cuisine at PHLOX Restro Cafe" },
  { src: heroInterior, alt: "PHLOX Restro Cafe interior ambience" },
  { src: heroChef, alt: "Culinary excellence at PHLOX" },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <header id="home" className="relative h-[90vh] w-full overflow-hidden">
      <Carousel setApi={setApi} className="h-full">
        <CarouselContent className="h-full">
          {slides.map((s, i) => (
            <CarouselItem key={i} className="h-full">
              <div className="relative h-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
        <CarouselNext className="bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
      </Carousel>

      {/* Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/lovable-uploads/4420ee9c-1542-4ae8-923d-3adb6fa0f587.png" 
          alt="PHLOX Logo" 
          className="w-full h-full opacity-8 object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto container mx-auto px-6 text-center animate-enter relative z-10">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            PHLOX – Restro Cafe Experience
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Where culinary artistry meets comfort. Discover our signature dishes, premium beverages, and warm hospitality.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="xl" variant="gold" className="hover-scale shadow-2xl backdrop-blur-md bg-gradient-to-r from-primary to-primary-glow border-2 border-primary/50" onClick={() => {
              const el = document.getElementById('reserve');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Reserve Now
            </Button>
            <Button size="xl" variant="hero" className="hover-scale shadow-xl backdrop-blur-md bg-background/80 border-2 border-primary/30" onClick={() => {
              const el = document.getElementById('menu');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
