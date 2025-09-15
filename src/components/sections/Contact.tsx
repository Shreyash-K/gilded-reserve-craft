const Contact = () => {
  return (
    <section id="contact" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">Contact & Hours</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <p className="text-muted-foreground">Phlox Restro Cafe, Armedia Ln</p>
          <p className="text-muted-foreground">Opp. Sterling Cancer Hospital</p>
          <p className="text-muted-foreground">Bodakdev, Ahmedabad</p>
          <div className="mt-4">
            <p className="text-sm text-gold mb-2">Follow us on Instagram:</p>
            <a 
              href="https://www.instagram.com/phlox.restrocafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              @phlox.restrocafe - Share your moments with us!
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Opening Hours</h3>
          <ul className="text-muted-foreground space-y-1">
            <li>Monday – Sunday</li>
            <li>10:00 AM – 05:00 AM</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden">
          <iframe
            title="PHLOX Restro Cafe Location"
            className="w-full h-48 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8892662557815!2d72.50244887527684!3d23.045941279072048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8dd7e8f54d%3A0x9b8b1a7b1a7b1a7b!2sArmedia%20Ln%2C%20Bodakdev%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1699000000000">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
