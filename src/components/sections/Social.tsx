import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ambience2 from "@/assets/ambience-2.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Social = () => {
  return (
    <section id="social" className="container py-20">
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2 className="font-playfair text-3xl sm:text-4xl">Follow Us</h2>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook /></a>
          <a href="#" aria-label="X" className="hover:text-foreground"><Twitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin /></a>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <img src={ambience2} alt="Aurum on Instagram" className="h-40 w-full object-cover rounded-md" />
        <img src={dish4} alt="Signature cocktail on Instagram" className="h-40 w-full object-cover rounded-md" />
        <img src={dish3} alt="Dessert on Instagram" className="h-40 w-full object-cover rounded-md" />
      </div>
    </section>
  );
};

export default Social;
