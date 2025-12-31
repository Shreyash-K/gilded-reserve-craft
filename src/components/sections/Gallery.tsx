import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, Utensils, Coffee, Sparkles } from "lucide-react";

const ambienceImages = [
  "/lovable-uploads/0555ec3e-f6d6-46de-abee-ef21664433ab.png",
  "/lovable-uploads/4012e2ad-a809-44fe-b4a1-5f0490404d61.png", 
  "/lovable-uploads/52aebc63-3732-4411-a02e-1c7c0efffbfb.png",
  "/lovable-uploads/390d96c3-60a6-478f-8d1e-94543da4c89f.png",
  "/lovable-uploads/1aebeffa-619e-43dd-a1fd-1b6c76fd9cc8.png",
  "/lovable-uploads/49854a41-f58f-44a2-9a96-95681b79cdc8.png"
];

const foodDrinkImages = [
  { src: "/lovable-uploads/food-biscoff-cheesecake.png", label: "Lotus Biscoff Cheesecake" },
  { src: "/lovable-uploads/food-chilli-noodles.png", label: "Chilli Garlic Noodles" },
  { src: "/lovable-uploads/food-spinach-rice.png", label: "Spinach Cottage Cheese Rice" },
  { src: "/lovable-uploads/drink-rainbow.png", label: "Rainbow Mocktail" },
  { src: "/lovable-uploads/food-mexican-hotpot.png", label: "Mexican Hotpot" },
  { src: "/lovable-uploads/food-avocado-sandwich.png", label: "Avocado Sandwich" },
  { src: "/lovable-uploads/food-garlic-bread.png", label: "Stuffed Garlic Bread" },
  { src: "/lovable-uploads/drink-iced-cappuccino.png", label: "Iced Cappuccino" },
  { src: "/lovable-uploads/drink-biscoff-shake.png", label: "Lotus Biscoff Shake" },
  { src: "/lovable-uploads/drink-mocha-latte.png", label: "Mocha Latte" },
];

type Tab = "ambience" | "food";

const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<Tab>("food");

  function openImg(src: string) {
    setActive(src);
    setOpen(true);
  }

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Visual Journey</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the essence of Phlox through our carefully curated moments
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/50 shadow-lg">
            <button
              onClick={() => setActiveTab("food")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Food & Drinks</span>
              <Coffee className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab("ambience")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "ambience"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Ambience</span>
            </button>
          </div>
        </div>

        {/* Food & Drinks Grid */}
        {activeTab === "food" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {foodDrinkImages.map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => openImg(item.src)} 
                  className={`group relative rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.label} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-foreground font-medium text-sm truncate">{item.label}</p>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ambience Grid */}
        {activeTab === "ambience" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ambienceImages.map((src, i) => (
                <button 
                  key={i} 
                  onClick={() => openImg(src)} 
                  className={`group relative rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}>
                    <img 
                      src={src} 
                      alt={`Phlox ambience ${i + 1}`} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Camera className="w-4 h-4 text-primary-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20">
          {active && (
            <div className="relative">
              <img 
                src={active} 
                alt="Gallery image" 
                className="w-full h-full object-contain max-h-[85vh]" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
