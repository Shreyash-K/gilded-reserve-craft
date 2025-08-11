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

const slides = [
  { src: "/lovable-uploads/036efeda-5d36-4691-a42f-05c9035a1220.png", alt: "PHLOX interior ambience at night" },
  { src: "/lovable-uploads/ff1edcc2-ce87-4647-816a-8a45cd41120f.png", alt: "PHLOX outdoor seating with drinks at night" },
  { src: "/lovable-uploads/98de02b3-b3c9-4c62-b271-b64f248db1c0.png", alt: "PHLOX refreshing beverages close-up" },
  { src: "/lovable-uploads/d8a4cf8e-17ce-4593-b5e9-471c16b417fe.png", alt: "PHLOX courtyard dining under night sky" },
  { src: "/lovable-uploads/8e6bd946-cdb6-4036-beb1-cf871f39cacf.png", alt: "PHLOX warm interior lighting and seating" },
  { src: "/lovable-uploads/0af246f5-6f36-4d09-a3b6-ac23ed40459f.png", alt: "PHLOX cozy dining area with wall niches" },
  { src: "/lovable-uploads/f3be11b3-5cb2-4095-a339-2e28d389044f.png", alt: "PHLOX entrance with pendant lighting" },
  { src: "/lovable-uploads/83da5405-f72d-4ad1-9d71-5d314bbb74b6.png", alt: "PHLOX covered patio seating and bar" },
  { src: "/lovable-uploads/a09d898c-c21a-43a0-9262-610b417d7a8a.png", alt: "PHLOX pendant light and interior details" },
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
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
        <CarouselNext className="hidden sm:flex bg-secondary/70 backdrop-blur-sm border-0 hover:bg-secondary" />
      </Carousel>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto container mx-auto px-6 text-center animate-enter">
          <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            PHLOX – The Art of Modern Luxury Dining
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
