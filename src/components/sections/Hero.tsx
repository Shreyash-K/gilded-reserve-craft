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
  { src: heroDish, alt: "Signature wagyu with truffle – Aurum Restaurant" },
  { src: heroInterior, alt: "Cinematic interior ambience – Aurum Restaurant" },
  { src: heroChef, alt: "Chef portrait – Aurum Restaurant" },
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

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto container mx-auto px-6 text-center animate-enter">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Aurum – The Art of Modern Luxury Dining
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A cinematic culinary experience with chef-driven menus, crafted cocktails, and an unforgettable ambience.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="xl" variant="gold" className="hover-scale" onClick={() => {
              const el = document.getElementById('reserve');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Reserve Now
            </Button>
            <Button size="xl" variant="hero" className="hover-scale" onClick={() => {
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
