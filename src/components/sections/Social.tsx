import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ambience2 from "@/assets/ambience-2.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Social = () => {
  return (
    <section id="social" className="container py-20">
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2 className="font-playfair text-3xl sm:text-4xl animate-fade-in">Coming Up</h2>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-foreground story-link"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-foreground story-link"><Facebook /></a>
          <a href="#" aria-label="X" className="hover:text-foreground story-link"><Twitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground story-link"><Linkedin /></a>
        </div>
      </div>
      <div className="mt-8 text-center animate-fade-in">
        <p className="text-lg text-muted-foreground mb-4">Exciting new experiences await...</p>
        <div className="space-y-3">
          <p className="text-sm">🍾 New Year's Special Menu - December 31st</p>
          <p className="text-sm">🎵 Live Music Nights - Every Friday</p>
          <p className="text-sm">👨‍🍳 Chef's Table Experience - Weekends</p>
        </div>
      </div>
    </section>
  );
};

export default Social;
