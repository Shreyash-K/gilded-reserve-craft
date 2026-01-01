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
import { ChevronDown, Sparkles } from "lucide-react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
    
    return () => clearInterval(id);
  }, [api]);

  return (
    <header id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <Carousel setApi={setApi} className="h-full">
        <CarouselContent className="h-full">
          {slides.map((s, i) => (
            <CarouselItem key={i} className="h-full">
              <div className="relative h-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
                />
                {/* Multi-layer overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-secondary/50 backdrop-blur-md border border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-300" />
        <CarouselNext className="right-4 md:right-8 bg-secondary/50 backdrop-blur-md border border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-300" />
      </Carousel>

      {/* Decorative floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/30 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/40 animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/25 animate-[float_9s_ease-in-out_infinite_0.5s]" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto container mx-auto px-6 text-center relative z-10">
          
          {/* Glowing Logo */}
          <div className="mb-8 flex justify-center relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            </div>
            <div className="relative animate-[fadeSlideUp_1s_ease-out]">
              <img 
                src={phloxLogo} 
                alt="PHLOX Logo" 
                className="w-28 h-28 md:w-40 md:h-40 drop-shadow-[0_0_30px_hsl(var(--gold)/0.4)] transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Sparkle accent */}
          <div className="flex justify-center mb-4 animate-[fadeSlideUp_1s_ease-out_0.2s_both]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60" />
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          {/* Main Heading with gradient and glow */}
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.1] animate-[fadeSlideUp_1s_ease-out_0.3s_both]">
            <span className="bg-gradient-to-r from-primary via-[hsl(45,100%,75%)] to-primary bg-clip-text text-transparent drop-shadow-[0_4px_20px_hsl(var(--gold)/0.3)]">
              PHLOX
            </span>
            <span className="block text-[clamp(1rem,2vw,1.5rem)] font-light tracking-[0.3em] text-foreground/80 mt-2">
              RESTRO CAFE EXPERIENCE
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-light animate-[fadeSlideUp_1s_ease-out_0.5s_both]">
            Where culinary artistry meets comfort. Discover our signature dishes, 
            premium beverages, and warm hospitality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-[fadeSlideUp_1s_ease-out_0.7s_both]">
            <Button 
              size="xl" 
              className="group relative rounded-full px-10 py-4 bg-transparent border-2 border-primary/60 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 overflow-hidden"
              onClick={() => {
                const el = document.getElementById('events');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Explore Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
            <Button 
              size="xl" 
              className="group relative rounded-full px-10 py-4 bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)] transition-all duration-300 overflow-hidden"
              onClick={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-12 animate-[fadeSlideUp_1s_ease-out_0.9s_both]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === i 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeSlideUp_1s_ease-out_1.1s_both]">
        <span className="text-xs tracking-[0.2em] text-foreground/50 uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary/60 animate-bounce" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </header>
  );
};

export default Hero;
