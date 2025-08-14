import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Arjun Sharma", quote: "PHLOX exceeded all my expectations! The fusion of flavors in every dish was absolutely incredible. Will definitely be coming back with family.", rating: 5 },
  { name: "Priya Mehta", quote: "What an amazing experience! The staff was so welcoming and the ambiance was perfect for our anniversary dinner. The dessert was to die for!", rating: 5 },
  { name: "Rohan Gupta", quote: "Best restaurant in the city, hands down. The chef's special was mind-blowing and the service was top-notch. Highly recommend to everyone!", rating: 5 },
];

const Stars = ({ n }: { n: number }) => (
  <div className="text-[hsl(var(--gold))]">{"★★★★★".slice(0, n)}</div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl animate-fade-in">What Guests Say</h2>
      <Carousel className="mt-8">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-secondary/40 border-secondary/40 hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <CardContent className="p-6 space-y-4">
                  <Stars n={t.rating} />
                  <p className="text-muted-foreground">"{t.quote}"</p>
                  <p className="font-medium">{t.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;