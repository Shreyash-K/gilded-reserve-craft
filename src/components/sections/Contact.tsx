const Contact = () => {
  return (
    <section id="contact" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">Contact & Hours</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <p className="text-muted-foreground">123 Charcoal Ave, Suite 7, Metropolis</p>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
          <p className="text-muted-foreground">reservations@aurum.dine</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Opening Hours</h3>
          <ul className="text-muted-foreground space-y-1">
            <li>Mon–Thu: 17:00 – 22:00</li>
            <li>Fri–Sat: 17:00 – 23:00</li>
            <li>Sun: 11:30 – 15:00 (Brunch)</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden">
          <iframe
            title="Aurum Location Map"
            className="w-full h-48 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.247248972144!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5f0f!2sLuxury%20Restaurant!5e0!3m2!1sen!2sus!4v1700000000000">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
