import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ambience1 from "@/assets/ambience-1.jpg";
import ambience2 from "@/assets/ambience-2.jpg";

const offers = [
  { title: "Chef's Table", desc: "Six-course tasting with wine pairing.", img: ambience1 },
  { title: "Weekend Brunch", desc: "Elevated classics with a bottomless option.", img: ambience2 },
  { title: "Wine Tasting", desc: "Sommelier-led journey through old & new world.", img: ambience1 },
];

const Offers = () => {
  return (
    <section id="offers" className="container py-20">
      <div className="flex items-end justify-between">
        <h2 className="font-playfair text-3xl sm:text-4xl">Special Offers</h2>
      </div>
      <div className="mt-8 flex gap-6 overflow-x-auto snap-x">
        {offers.map((o) => (
          <Card key={o.title} className="min-w-[320px] snap-start overflow-hidden bg-secondary/40 border-secondary/40 hover-scale">
            <img src={o.img} alt={`${o.title} – Aurum`} loading="lazy" className="h-44 w-full object-cover" />
            <CardHeader>
              <CardTitle>{o.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{o.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Offers;
