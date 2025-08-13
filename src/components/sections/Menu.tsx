import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const allItems = {
  Starters: [
    { name: "Scallop Crudo", desc: "Yuzu gel, edible flowers, micro herbs", price: 26, img: dish1, badges: ["Chef's Recommendation"] },
    { name: "Heirloom Carrots", desc: "Tahini, pistachio crumble, pomegranate", price: 18, img: dish5 },
  ],
  Mains: [
    { name: "Wagyu & Truffle", desc: "Demi-glace, pomme purée", price: 58, img: dish2, badges: ["Bestseller"] },
    { name: "Butter-Poached Lobster", desc: "Saffron sauce, edible gold", price: 64, img: dish6 },
  ],
  Desserts: [
    { name: "Dark Chocolate Fondant", desc: "Molten center, raspberry coulis, gold leaf", price: 16, img: dish3 },
  ],
  Drinks: [
    { name: "Aurum Old Fashioned", desc: "Smoked, large clear ice, orange twist", price: 22, img: dish4 },
  ],
} as const;

type Category = keyof typeof allItems;

const Menu = () => {
  const [category, setCategory] = useState<Category>("Starters");
  const categories = useMemo(() => Object.keys(allItems) as Category[], []);

  return (
    <section id="menu" className="container py-20">
      <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <h2 className="font-playfair text-3xl sm:text-4xl">Our Menu</h2>
            <p className="text-muted-foreground mt-2">Seasonal ingredients, modern technique, and dishes designed to delight.</p>
          </div>
          <TabsList>
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((c) => (
          <TabsContent key={c} value={c} className={category === c ? "block" : "hidden"}>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems[c].map((item) => (
                <Card key={item.name} className="group overflow-hidden border-secondary/40 bg-secondary/40 hover:bg-secondary/60 transition-colors">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={`${item.name} – Aurum`} loading="lazy" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-medium">{item.name}</CardTitle>
                      <span className="font-playfair text-lg">${item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {item.badges?.map((b) => (
                        <Badge key={b} className="bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))]">{b}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-[hsl(var(--gold))]" />
                      <span>Refined and balanced</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Menu;
