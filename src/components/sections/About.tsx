import { Badge } from "@/components/ui/badge";
import heroChef from "@/assets/hero-chef.jpg";

const About = () => {
  return (
    <section id="about" className="container py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <Badge className="bg-secondary text-secondary-foreground">Our Story</Badge>
          <h2 className="font-playfair text-3xl sm:text-4xl">Crafted with Obsession, Served with Grace</h2>
          <p className="text-muted-foreground">
            At Aurum, every plate is a canvas and every service a performance. Our kitchen blends time-honored techniques with modern precision to create
            a tasting experience that is indulgent, soulful, and unforgettable.
          </p>
          <p className="text-muted-foreground">
            Sourced from the finest producers and presented with quiet luxury, our philosophy is simple: exquisite ingredients, masterful execution, and hospitality
            that feels personal.
          </p>
        </div>
        <div className="relative">
          <img src={heroChef} alt="Chef at Aurum" className="w-full h-[440px] object-cover rounded-lg shadow-[var(--shadow-elegant)]" />
          <div className="absolute bottom-4 left-4 bg-secondary/70 backdrop-blur-sm px-4 py-2 rounded-md">
            <span className="font-playfair text-lg">Chef Marco Aurelio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
