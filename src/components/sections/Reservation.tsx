import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const times = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

const Reservation = () => {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>("");
  const [guests, setGuests] = React.useState<string>("2");
  const { toast } = useToast();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast({
      title: "Reservation request received",
      description: `${format(date ?? new Date(), 'PPP')} at ${time || 'TBD'} for ${guests} guests. We'll confirm shortly.`,
    });
  }

  return (
    <section id="reserve" className="container py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-playfair text-3xl sm:text-4xl">Reserve a Table</h2>
          <p className="text-muted-foreground mt-2">Instant confirmation coming soon. For now, submit your request and we'll contact you.</p>
          <div className="mt-6 p-6 rounded-lg border border-secondary/40 bg-secondary/40">
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full name" required />
                <Input type="email" placeholder="Email" required />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start">
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger><SelectValue placeholder="Time" /></SelectTrigger>
                  <SelectContent>
                    {times.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger><SelectValue placeholder="Guests" /></SelectTrigger>
                  <SelectContent>
                    {[...Array(8)].map((_, i) => {
                      const val = String(i + 1);
                      return <SelectItem key={val} value={val}>{val}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Special requests (optional)" />
              <Button type="submit" variant="gold" size="xl" className="hover-scale">Send Request</Button>
            </form>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <iframe
            title="PHLOX Location Map"
            className="w-full h-[420px] rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.247248972144!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5f0f!2sLuxury%20Restaurant!5e0!3m2!1sen!2sus!4v1700000000000">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
