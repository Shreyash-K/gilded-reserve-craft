import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const images = [
  "/lovable-uploads/0555ec3e-f6d6-46de-abee-ef21664433ab.png",
  "/lovable-uploads/4012e2ad-a809-44fe-b4a1-5f0490404d61.png", 
  "/lovable-uploads/52aebc63-3732-4411-a02e-1c7c0efffbfb.png",
  "/lovable-uploads/390d96c3-60a6-478f-8d1e-94543da4c89f.png",
  "/lovable-uploads/1aebeffa-619e-43dd-a1fd-1b6c76fd9cc8.png",
  "/lovable-uploads/49854a41-f58f-44a2-9a96-95681b79cdc8.png"
];

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
            <img src={src} alt={`Aurum gallery image ${i+1}`} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {active && <img src={active} alt="Aurum gallery large" className="w-full h-full object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
