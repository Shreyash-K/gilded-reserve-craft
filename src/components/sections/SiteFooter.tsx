import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SiteFooter = () => {
  return (
    <footer className="border-t border-secondary/40 mt-20">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-playfair text-xl">PHLOX</h3>
          <p className="text-muted-foreground mt-2">Modern luxury dining in the heart of the city.</p>
        </div>
        <nav className="grid gap-2">
          <a href="#about" className="story-link">About</a>
          <a href="#menu" className="story-link">Menu</a>
          <a href="#offers" className="story-link">Offers</a>
          <a href="#reserve" className="story-link">Reserve</a>
        </nav>
        <nav className="grid gap-2">
          <a href="#gallery" className="story-link">Gallery</a>
          <a href="#testimonials" className="story-link">Reviews</a>
          <a href="#events" className="story-link">Events</a>
          <a href="#contact" className="story-link">Contact</a>
        </nav>
        <div className="grid gap-3">
          <span className="text-sm text-muted-foreground">Newsletter</span>
          <div className="flex gap-2">
            <Input placeholder="Your email" />
            <Button variant="hero">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="container pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} PHLOX. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
