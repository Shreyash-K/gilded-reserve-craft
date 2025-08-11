import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ambience1 from "@/assets/ambience-1.jpg";
import ambience2 from "@/assets/ambience-2.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const images = [ambience1, ambience2, dish1, dish2, dish3];

const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  function openImg(src: string) {
    setActive(src);
    setOpen(true);
  }

  return (
    <section id="gallery" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl">Gallery</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => openImg(src)} className="group rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring">
            <img src={src} alt={`PHLOX gallery image ${i+1}`} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {active && <img src={active} alt="PHLOX gallery large" className="w-full h-full object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
