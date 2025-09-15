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
import phloxLogo from "@/assets/phlox-logo.png";

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
                 <div className="absolute inset-0 bg-background/80" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
        <CarouselNext className="bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
      </Carousel>


      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto container mx-auto px-6 text-center animate-enter relative z-10">
          <div className="mb-6 flex justify-center">
            <img 
              src={phloxLogo} 
              alt="PHLOX Logo" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <h1 className="font-playfair text-white text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
            PHLOX – Restro Cafe Experience
          </h1>
          <p className="mt-6 text-lg text-[rgba(255,255,255,0.85)] leading-relaxed max-w-2xl mx-auto">
            Where culinary artistry meets comfort. Discover our signature dishes, premium beverages, and warm hospitality.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Button 
              size="xl" 
              className="rounded-full px-8 py-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:scale-105 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-200" 
              onClick={() => {
                const el = document.getElementById('reserve');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reserve Now
            </Button>
            <Button 
              size="xl" 
              className="rounded-full px-8 py-3 bg-[#D4AF37] text-[#1A2F4A] hover:scale-105 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-200" 
              onClick={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
