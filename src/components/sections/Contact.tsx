import { Instagram, MapPin, Clock, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">Contact & Hours</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-medium text-primary">Our Location</h3>
          </div>
          <p className="text-foreground font-medium">Phlox Restro Cafe</p>
          <p className="text-muted-foreground">Armedia Ln, Opp. Sterling Cancer Hospital</p>
          <p className="text-muted-foreground">Bodakdev, Ahmedabad, Gujarat</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-medium text-primary">Opening Hours</h3>
          </div>
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
      
      {/* Instagram Section - Enhanced */}
      <div className="mt-16 pt-12 border-t border-border">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/50 via-background to-secondary/30 p-8 md:p-12">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl" />
          
          {/* Floating sparkles */}
          <div className="absolute top-8 left-1/4 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary/40" />
          </div>
          <div className="absolute bottom-12 right-1/3 animate-pulse delay-300">
            <Sparkles className="w-3 h-3 text-pink-400/40" />
          </div>
          
          <div className="relative text-center">
            {/* Instagram icon with glow */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 mb-6 shadow-lg shadow-pink-500/30 animate-[float_6s_ease-in-out_infinite]">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="font-playfair text-3xl md:text-4xl mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Follow Our Journey
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              Dive into the PHLOX experience! Catch behind-the-scenes moments, mouth-watering dishes, and exciting events.
            </p>
            
            <a 
              href="https://www.instagram.com/phlox.restrocafe?igsh=MXRheDZmdDN2ano1OA=="
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 font-semibold text-lg"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>@phlox.restrocafe</span>
              <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            </a>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Stay Connected</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
