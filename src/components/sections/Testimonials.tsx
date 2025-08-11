import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Isabella R.", quote: "PHLOX is a revelation — every course felt like a story.", rating: 5 },
  { name: "Daniel K.", quote: "Impeccable service and a cinematic ambience.", rating: 5 },
  { name: "Maya T.", quote: "Chef's tasting menu was the highlight of our trip.", rating: 5 },
];

const Stars = ({ n }: { n: number }) => (
  <div className="text-[hsl(var(--gold))]">{"★★★★★".slice(0, n)}</div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">What Guests Say</h2>
      <Carousel className="mt-8">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-secondary/40 border-secondary/40 hover-scale">
                <CardContent className="p-6 space-y-4">
                  <Stars n={t.rating} />
                  <p className="text-muted-foreground">“{t.quote}”</p>
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
