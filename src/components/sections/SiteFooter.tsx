const SiteFooter = () => {
  return (
    <footer className="border-t border-secondary/40 mt-20">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-playfair text-xl">PHLOX</h3>
          <p className="text-muted-foreground mt-2">Where culinary artistry meets comfort in an unforgettable dining experience.</p>
        </div>
        <nav className="grid gap-2">
          <a href="#menu" className="story-link">Menu</a>
          <a href="#events" className="story-link">Events</a>
        </nav>
        <nav className="grid gap-2">
          <a href="#gallery" className="story-link">Gallery</a>
          <a href="#testimonials" className="story-link">Reviews</a>
          <a href="#events" className="story-link">Events</a>
          <a href="#contact" className="story-link">Contact</a>
        </nav>
      </div>
      <div className="container pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} PHLOX. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
