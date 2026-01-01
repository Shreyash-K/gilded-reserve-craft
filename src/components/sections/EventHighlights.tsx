import { Sparkles, Music, Users, Flame } from "lucide-react";

const events = [
  { 
    title: "Mehfil Ka Sufi Night", 
    desc: "Where music meets magic under the stars",
    img: "/lovable-uploads/event-sufi-night.png",
    icon: Music
  },
  { 
    title: "Social Mixer", 
    desc: "Sip, vibe & find your tribe",
    img: "/lovable-uploads/event-social-mixer.png",
    icon: Users
  },
  { 
    title: "Vibe Jamming", 
    desc: "Live acoustic sessions with local artists",
    img: "/lovable-uploads/event-vibe-jamming.png",
    icon: Music
  },
  { 
    title: "Gather 'Round the Flame", 
    desc: "A little bit of peace, warmed by the firelight",
    img: "/lovable-uploads/event-bonfire.png",
    icon: Flame
  },
  { 
    title: "New Year Music Night", 
    desc: "Where music closes the year & memories open a new one",
    img: "/lovable-uploads/event-music-night.png",
    icon: Sparkles
  },
];

const EventHighlights = () => {
  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Memories in the Making</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl mb-4">
            Event <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse of the many events we periodically host — from soulful nights to vibrant gatherings
          </p>
        </div>

        {/* Events Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => {
            const Icon = event.icon;
            const isLarge = i === 0 || i === 3;
            
            return (
              <div
                key={event.title}
                className={`group relative rounded-2xl overflow-hidden animate-fade-in ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary/80">Featured Event</span>
                  </div>
                  
                  <h3 className="font-playfair text-xl sm:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {event.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground">
            Follow us on social media to stay updated on upcoming events
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
