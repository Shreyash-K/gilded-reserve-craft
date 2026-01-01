import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  { 
    name: "Arjun Sharma", 
    location: "Mumbai",
    quote: "PHLOX exceeded all my expectations! The fusion of flavors in every dish was absolutely incredible. The pasta was cooked to perfection and the ambiance made it even more special.", 
    rating: 5,
    dish: "Pink Sauce Pasta",
    avatar: "AS"
  },
  { 
    name: "Priya Mehta", 
    location: "Delhi",
    quote: "What an amazing experience! The staff was so welcoming and the desserts were heavenly. The Lotus Biscoff Cheesecake is a must-try. Perfect place for celebrations!", 
    rating: 5,
    dish: "Biscoff Cheesecake",
    avatar: "PM"
  },
  { 
    name: "Rohan Gupta", 
    location: "Bangalore",
    quote: "Best cafe in the city, hands down. The Vietnamese Iced Brew was mind-blowing and the paneer tikka pizza was unlike anything I've had before. Highly recommend!", 
    rating: 5,
    dish: "Vietnamese Iced Brew",
    avatar: "RG"
  },
  { 
    name: "Sneha Reddy", 
    location: "Hyderabad",
    quote: "The perfect blend of taste and presentation! Every dish looks like a work of art. The Mezze Platter with hummus was absolutely divine. Coming back every weekend now!", 
    rating: 5,
    dish: "Mezze Platter",
    avatar: "SR"
  },
  { 
    name: "Vikram Singh", 
    location: "Jaipur",
    quote: "Took my family here for Sunday brunch and everyone loved it! The kids couldn't stop talking about the shakes and I'm obsessed with their Dal Makhani. Authentic flavors!", 
    rating: 5,
    dish: "Dal Makhani",
    avatar: "VS"
  },
  { 
    name: "Ananya Pillai", 
    location: "Chennai",
    quote: "Finally, a place that gets coffee right! The Hazelnut Latte is pure bliss. The cozy interiors and soft music make it my go-to spot for work meetings.", 
    rating: 5,
    dish: "Hazelnut Latte",
    avatar: "AP"
  },
  { 
    name: "Karan Malhotra", 
    location: "Pune",
    quote: "Celebrated my birthday here and the team made it so special! The Sizzling Brownie with vanilla ice cream was the perfect end to an amazing meal. Five stars!", 
    rating: 5,
    dish: "Sizzling Brownie",
    avatar: "KM"
  },
  { 
    name: "Ishita Banerjee", 
    location: "Kolkata",
    quote: "As a food blogger, I've tried countless cafes but PHLOX stands out. The attention to detail, fresh ingredients, and innovative menu keep me coming back for more!", 
    rating: 5,
    dish: "Italian Sizzler",
    avatar: "IB"
  },
  { 
    name: "Aditya Nair", 
    location: "Kochi",
    quote: "The Paneer Butter Masala here rivals my mom's cooking - and that's the highest compliment! Great portion sizes and the naan is always fresh and fluffy.", 
    rating: 5,
    dish: "Paneer Butter Masala",
    avatar: "AN"
  },
  { 
    name: "Meera Joshi", 
    location: "Ahmedabad",
    quote: "PHLOX has become our family's favorite dining destination. The variety is incredible - from Italian to Indian, everything is prepared with love. The staff remembers our preferences!", 
    rating: 5,
    dish: "Baked Lasagna",
    avatar: "MJ"
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-1">
    {[...Array(n)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60" />
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl bg-gradient-to-r from-primary via-[hsl(45,100%,75%)] to-primary bg-clip-text text-transparent">
            Guest Experiences
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our valued guests have to say about their PHLOX experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group h-full bg-gradient-to-br from-secondary/60 to-secondary/30 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--gold)/0.15)] overflow-hidden">
                  <CardContent className="p-6 h-full flex flex-col relative">
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-16 h-16 text-primary" />
                    </div>

                    {/* Rating */}
                    <Stars n={t.rating} />
                    
                    {/* Quote */}
                    <p className="mt-4 text-foreground/80 leading-relaxed flex-grow text-sm">
                      "{t.quote}"
                    </p>

                    {/* Favorite dish badge */}
                    <div className="mt-4 inline-flex">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        ♡ {t.dish}
                      </span>
                    </div>

                    {/* Author info */}
                    <div className="mt-6 pt-4 border-t border-primary/10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === i 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { value: "4.9", label: "Average Rating" },
            { value: "2000+", label: "Happy Guests" },
            { value: "100+", label: "Menu Items" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-4xl font-playfair text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;