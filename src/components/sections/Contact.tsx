const Contact = () => {
  return (
    <section id="contact" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">Contact & Hours</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="font-medium mb-3 text-gold">Our Location</h3>
          <p className="text-foreground font-medium">Phlox Restro Cafe</p>
          <p className="text-muted-foreground">Armedia Ln, Opp. Sterling Cancer Hospital</p>
          <p className="text-muted-foreground">Bodakdev, Ahmedabad, Gujarat</p>
        </div>
        <div>
          <h3 className="font-medium mb-3 text-gold">Opening Hours</h3>
          <div className="text-muted-foreground space-y-2">
            <p className="font-medium">Monday – Sunday</p>
            <p>10:00 AM – 05:00 AM</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <iframe
            title="PHLOX Restro Cafe Location"
            className="w-full h-48 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.8844673834827!2d72.50053157527686!3d23.046071079071523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzQ1LjkiTiA3MsKwMzAnMDcuOCJF!5e0!3m2!1sen!2sin!4v1699000000000">
          </iframe>
        </div>
      </div>
      
      {/* Instagram Section */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="text-center">
          <h3 className="font-playfair text-2xl mb-4 text-gold">Visit Our Instagram</h3>
          <p className="text-muted-foreground mb-6">Share your PHLOX moments with us and stay updated with our latest offerings!</p>
          <a 
            href="https://www.instagram.com/phlox.restrocafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @phlox.restrocafe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
