import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  { title: "Winemaker's Night", date: "Aug 24, 7:00 PM", desc: "Five-course pairing with boutique vineyards." },
  { title: "Live Jazz Brunch", date: "Every Sunday, 11:30 AM", desc: "Smooth sounds and elevated brunch classics." },
];

const Events = () => {
  return (
    <section id="events" className="container py-20">
      <h2 className="font-playfair text-3xl sm:text-4xl animate-fade-in">Coming Up Events</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <Card key={e.title} className="bg-secondary/40 border-secondary/40 hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{e.title}</span>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-muted-foreground">{e.desc}</p>
              <Button variant="hero" className="whitespace-nowrap hover-scale">Reserve</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Events;
