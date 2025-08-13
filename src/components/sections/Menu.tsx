import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Menu Types
type MenuItem = { name: string; price: number };
type Section = { title: string; items: MenuItem[] };
type CategoryKey = "Beverages" | "Food" | "Bakery & Desserts" | "Sides & Add-ons";

// Complete menu data without images, grouped for clear navigation
const allItems: Record<CategoryKey, Section[]> = {
  Beverages: [
    {
      title: "Hot Coffee (with milk)",
      items: [
        { name: "Cappuccino", price: 160 },
        { name: "Cafe Latte", price: 160 },
        { name: "Cafe Mocha", price: 170 },
        { name: "Caramel Cappuccino", price: 170 },
        { name: "Caramel Latte", price: 170 },
        { name: "Hazelnut Cappuccino", price: 170 },
        { name: "Hazelnut Latte", price: 170 },
        { name: "Vanilla Cappuccino", price: 170 },
        { name: "Vanilla Latte", price: 170 },
        { name: "Irish Cappuccino", price: 180 },
        { name: "Irish Latte", price: 190 },
        { name: "Nutella Cappuccino", price: 190 },
        { name: "Lotus Biscoff Cappuccino", price: 210 },
      ],
    },
    {
      title: "Hot Coffee (without milk)",
      items: [
        { name: "Espresso (Coffee Shots)", price: 90 },
        { name: "Americano (Black Coffee)", price: 110 },
        { name: "Macchiato (Foam on Shot)", price: 130 },
        { name: "Signature Affogato", price: 140 },
        { name: "Irish Coffee (No Milk)", price: 140 },
      ],
    },
    {
      title: "Hot Chocolate (CHO.CO.lit)",
      items: [
        { name: "Hot Chocolate", price: 170 },
        { name: "Hot Nutella", price: 190 },
        { name: "Hot Rocher", price: 200 },
      ],
    },
    {
      title: "Cold Coffee (frappe)",
      items: [
        { name: "Creamy frappe", price: 200 },
        { name: "Caramel frappe", price: 210 },
        { name: "Choco Passion frappe", price: 200 },
        { name: "Hazelnut frappe", price: 210 },
        { name: "Irish frappe", price: 220 },
        { name: "Double Choco Chip frappe", price: 220 },
        { name: "Nutella frappe", price: 230 },
        { name: "Oreo frappe", price: 230 },
        { name: "Lotus Biscoff frappe", price: 250 },
        { name: "Brownie frappe", price: 250 },
        { name: "Signature Frappe (100% Arabica)", price: 220 },
      ],
    },
    {
      title: "Icy Coffee",
      items: [
        { name: "Iced Coffee", price: 150 },
        { name: "Iced Latte", price: 160 },
        { name: "Iced Americano", price: 150 },
        { name: "Iced Vanilla", price: 180 },
        { name: "Iced Mocha", price: 180 },
        { name: "Iced Caramel", price: 180 },
        { name: "Espresso Tonic (Ginger Ale)", price: 190 },
        { name: "Cold Brew (Citrus Apple/Orange)", price: 190 },
        { name: "Vietnamese Iced Brew", price: 200 },
      ],
    },
    {
      title: "Iced Tea",
      items: [
        { name: "Lemon Iced Tea", price: 160 },
        { name: "Peach Iced Tea", price: 170 },
        { name: "Strawberry Iced Tea", price: 170 },
        { name: "Cranberry Iced Tea", price: 180 },
        { name: "Watermelon Iced Tea", price: 180 },
      ],
    },
    {
      title: "Brain Freezers",
      items: [
        { name: "Ice Blue", price: 120 },
        { name: "Litchi Slush", price: 120 },
        { name: "Galaxy Mocktail", price: 140 },
      ],
    },
    {
      title: "Shakes",
      items: [
        { name: "Chocolate Shake", price: 200 },
        { name: "Blackcurrant Shake", price: 210 },
        { name: "Strawberry Shake", price: 210 },
        { name: "Butterscotch Shake", price: 220 },
        { name: "Oreo Shake", price: 230 },
        { name: "KitKat Shake", price: 230 },
        { name: "Nutella Shake", price: 240 },
        { name: "Belgium (Crunchy) Shake", price: 240 },
        { name: "Red Velvet Shake", price: 240 },
        { name: "Brownie Shake", price: 240 },
        { name: "Blueberry Shake", price: 250 },
        { name: "Lotus Biscoff Shake", price: 250 },
        { name: "Rocher Shake", price: 250 },
      ],
    },
    {
      title: "Mocktails",
      items: [
        { name: "Classic Lemonade", price: 150 },
        { name: "Virgin Mojito", price: 160 },
        { name: "Black Currant Mojito", price: 160 },
        { name: "Strawberry Mojito", price: 160 },
        { name: "Watermelon Litchi Punch", price: 170 },
        { name: "Redbull Mojito", price: 240 },
        { name: "Pina Colada", price: 160 },
        { name: "Mint Mojito", price: 150 },
        { name: "Cranberry Mojito", price: 160 },
        { name: "Bitter Salt Mojito", price: 170 },
        { name: "Freezy Energy Mojito", price: 180 },
      ],
    },
    {
      title: "CHAI",
      items: [
        { name: "Indian masala chai", price: 140 },
      ],
    },
  ],
  Food: [
    {
      title: "Starters",
      items: [
        { name: "Onion rings", price: 210 },
        { name: "Crispy veg volvo", price: 290 },
        { name: "Mexican toastados", price: 280 },
        { name: "Spinach cheese balls", price: 320 },
        { name: "Crispy veg.", price: 300 },
        { name: "Honey chilli potato", price: 290 },
        { name: "Manchurian dry", price: 280 },
        { name: "Paneer chilly dry", price: 330 },
        { name: "Cheese balls", price: 272 },
        { name: "Mushroom aglio olio", price: 300 },
        { name: "Spicy cigar", price: 290 },
        { name: "Veg spring roll", price: 290 },
        { name: "Lahori paneer tikka", price: 420 },
        { name: "Mushroom platter", price: 420 },
        { name: "Tandoori platter", price: 480 },
        { name: "Veg hariyali kabab", price: 300 },
        { name: "Tawa grill paneer", price: 410 },
        { name: "Tandoori soya chaap", price: 390 },
        { name: "Tandoori aloo", price: 310 },
        { name: "Mushroom dumpling", price: 490 },
        { name: "Mushroom chilly dry", price: 450 },
      ],
    },
    {
      title: "Fries",
      items: [
        { name: "Salted Fries", price: 160 },
        { name: "Pizza Fries", price: 170 },
        { name: "Peri Peri Fries", price: 180 },
        { name: "Schezwan Fries", price: 190 },
        { name: "Italian Fries", price: 190 },
        { name: "Cheesy Fries", price: 200 },
        { name: "Baby Corn Fries", price: 210 },
        { name: "Cottage Cheese Finger", price: 220 },
      ],
    },
    {
      title: "Soup",
      items: [
        { name: "Thai spicy soup", price: 200 },
        { name: "Cheese corn tomato soup", price: 180 },
        { name: "Manchow soup", price: 200 },
        { name: "Hot & sour soup", price: 190 },
        { name: "Minestrone soup", price: 180 },
        { name: "Lemon coriander soup", price: 170 },
        { name: "Mexican soup", price: 200 },
        { name: "Tomato basil soup", price: 180 },
        { name: "Broccoli almond soup", price: 210 },
      ],
    },
    {
      title: "Toast",
      items: [
        { name: "Cheese Chilli Toast", price: 220 },
        { name: "Cheese Brushetta", price: 220 },
        { name: "Cheese Garlic Bread", price: 230 },
        { name: "Mexican Toast", price: 240 },
        { name: "Avocado Toast", price: 280 },
        { name: "Tomato Salad Brushetta", price: 290 },
      ],
    },
    {
      title: "Frankie",
      items: [
        { name: "Veg Frankie", price: 170 },
        { name: "Tandoori Paneer Frankie", price: 190 },
        { name: "Schezwan Frankie", price: 220 },
        { name: "Cheese Corn Delight Frankie", price: 220 },
      ],
    },
    {
      title: "Sandwich",
      items: [
        { name: "Cheese Chilli Sandwich", price: 180 },
        { name: "Cheese Chilli Corn Sandwich", price: 190 },
        { name: "Coleslaw Sandwich", price: 190 },
        { name: "Peri Peri Paneer Sandwich", price: 230 },
        { name: "Veg. Club Sandwich", price: 230 },
        { name: "Tandoori Paneer Sandwich", price: 240 },
        { name: "Phlox Special Sandwich", price: 250 },
        { name: "Avocado Sandwich", price: 290 },
      ],
    },
    {
      title: "Panini",
      items: [
        { name: "Roasted Red Bell Pepper Panini", price: 230 },
        { name: "Spicy Paneer Panini", price: 250 },
        { name: "Mexican Panini", price: 260 },
        { name: "Phlox Special Panini", price: 280 },
      ],
    },
    {
      title: "Nachos & Tacos",
      items: [
        { name: "Cheesy Nachos", price: 200 },
        { name: "Ved. Supreme Nachos", price: 220 },
        { name: "Mexican Tacos", price: 230 },
      ],
    },
    {
      title: "Noodles",
      items: [
        { name: "Hakka Noodles", price: 230 },
        { name: "Chilli Garlic Noodles", price: 250 },
        { name: "Schezwan Mushroom Noodles", price: 260 },
        { name: "Pad Thai Noodles", price: 290 },
      ],
    },
    {
      title: "Quesadilla",
      items: [
        { name: "Bong & Cheese Quesadilla", price: 260 },
        { name: "Mushroom & Cheese Quesadilla", price: 280 },
      ],
    },
    {
      title: "Pasta",
      items: [
        { name: "Arrabiata Pasta", price: 290 },
        { name: "Alfredo Pasta", price: 290 },
        { name: "Cheesy Cream Pasta", price: 300 },
        { name: "Pink Sauce Pasta", price: 300 },
        { name: "Aglio Olio Pasta", price: 320 },
        { name: "Pesto Basil Pasta", price: 320 },
        { name: "Alio Olio Ravoli Pasta", price: 330 },
        { name: "Spaghetti Pomodoro Pasta", price: 350 },
        { name: "Fettuccine Pasta", price: 350 },
      ],
    },
    {
      title: "Pizza",
      items: [
        { name: "Margherita", price: 400 },
        { name: "Double Cheese Margherita", price: 450 },
        { name: "Pesto Basil", price: 550 },
        { name: "Farmhouse", price: 530 },
        { name: "Bedali burn", price: 550 },
        { name: "BBQ Paneer", price: 560 },
        { name: "Paneer Tikka Masala", price: 560 },
        { name: "English Retreat", price: 590 },
        { name: "Cheesy - 7", price: 600 },
        { name: "Cheese Mac Veg.", price: 590 },
        { name: "Indian zaika", price: 580 },
        { name: "Mexican Salsa", price: 590 },
        { name: "Spicy Veg", price: 560 },
        { name: "Peri Peri Veg.", price: 550 },
      ],
    },
    {
      title: "Hotpot",
      items: [
        { name: "Mexican Hotpot", price: 350 },
        { name: "Italian Hotpot", price: 360 },
        { name: "Mexican Rice & Salsa Curry", price: 390 },
        { name: "Saute Italian Vegetable", price: 390 },
      ],
    },
    {
      title: "Thai",
      items: [
        { name: "Thai Green Curry& Basil Rice", price: 420 },
        { name: "Thai Red Curry & Basil Rice", price: 420 },
      ],
    },
    {
      title: "Baked Dish",
      items: [
        { name: "Baked Cannelloni", price: 420 },
        { name: "Baked Macaroni With Pinapple", price: 420 },
        { name: "Baked Lasagnia", price: 440 },
        { name: "Baked Macaroni Marinara Sauce", price: 440 },
      ],
    },
    {
      title: "Rice Bowl",
      items: [
        { name: "Mexican Bowl", price: 330 },
        { name: "Chipotle Bowl", price: 340 },
        { name: "Chinese Bowl", price: 340 },
        { name: "Indian Bowl", price: 350 },
        { name: "Jeera rice", price: 170 },
        { name: "Veg. fried rice", price: 220 },
        { name: "Manchurian fried rice", price: 250 },
        { name: "Schezwan fried rice", price: 260 },
        { name: "Cheese tawa Pulav", price: 250 },
        { name: "Crispy paneer pulav", price: 300 },
        { name: "Hyderabadi dum biryani", price: 350 },
        { name: "Paneer tikka biryani", price: 380 },
        { name: "Triple schezwan fried rice", price: 300 },
        { name: "Veg. tawa pulav", price: 210 },
      ],
    },
    {
      title: "Rice Platter",
      items: [
        { name: "Spinach Lottage Cheese Rice", price: 440 },
        { name: "Jafrani Broccoli Garlic Rice", price: 480 },
        { name: "Peri Peri With Burnt Garlic & Onion Rice", price: 490 },
      ],
    },
    {
      title: "Khichdi",
      items: [
        { name: "Dal Khichdi", price: 230 },
        { name: "Masala Khichdi", price: 250 },
        { name: "Palak Tadka Khichdi", price: 270 },
      ],
    },
    {
      title: "Sizzler",
      items: [
        { name: "Mexican Sizzler", price: 550 },
        { name: "Italian Sizzler", price: 550 },
        { name: "Chinese Sizzler", price: 580 },
        { name: "Paneer Shashlic Sizzler", price: 580 },
      ],
    },
    {
      title: "Paratha",
      items: [
        { name: "Aloo Paratha", price: 230 },
        { name: "Cheese Onion Paratha", price: 260 },
        { name: "Mix Veg. Paratha", price: 250 },
      ],
    },
    {
      title: "Curries",
      items: [
        { name: "Mix veg.", price: 340 },
        { name: "Veg. Jaipuri", price: 350 },
        { name: "Veg. kadhai", price: 360 },
        { name: "Veg. toofani", price: 350 },
        { name: "Veg. makhanwala", price: 370 },
        { name: "Veg. deewani handi", price: 390 },
        { name: "Veg. kofta", price: 450 },
        { name: "Jeera aloo", price: 280 },
        { name: "Lasaniya palak", price: 310 },
        { name: "Dum aloo", price: 320 },
        { name: "Bhindi masala", price: 300 },
        { name: "Paneer butter masala", price: 440 },
        { name: "Paneer cheese butter masala", price: 450 },
        { name: "Paneer tikka masala", price: 440 },
        { name: "Paneer angara", price: 430 },
        { name: "Paneer bhurji", price: 450 },
        { name: "Paneer kadhai", price: 430 },
        { name: "Palak paneer", price: 410 },
        { name: "Cheese butter masala", price: 450 },
        { name: "Khoya kaju", price: 460 },
        { name: "Cheese anguri", price: 460 },
        { name: "Kaju masala", price: 450 },
        { name: "Malai kofta", price: 420 },
      ],
    },
    {
      title: "Dal",
      items: [
        { name: "Dal fry", price: 200 },
        { name: "Dal fry tadka", price: 210 },
        { name: "Dal makhni", price: 230 },
        { name: "Dal makhni with ghee", price: 250 },
      ],
    },
    {
      title: "Indian Breads",
      items: [
        { name: "Plain tawa roti", price: 25 },
        { name: "Butter tawa roti", price: 35 },
        { name: "Tandoori roti", price: 50 },
        { name: "Butter tandoori roti", price: 70 },
        { name: "Tawa paratha", price: 80 },
        { name: "Lachha paratha", price: 110 },
        { name: "Phudina lachha paratha", price: 120 },
        { name: "Cheese garlic lachha paratha", price: 150 },
        { name: "Butter naan", price: 130 },
        { name: "Cheese naan", price: 150 },
        { name: "Cheese garlic naan", price: 170 },
        { name: "Cheese chiily garlic naan", price: 180 },
        { name: "Chur chur naan", price: 160 },
      ],
    },
    {
      title: "Kulcha",
      items: [
        { name: "Plain kulcha", price: 170 },
        { name: "Stuff kulcha onion", price: 200 },
        { name: "Stuff kulcha potato", price: 220 },
        { name: "Stuff kulcha mix", price: 250 },
        { name: "Stuff kulcha cheese", price: 250 },
      ],
    },
  ],
  "Bakery & Desserts": [
    {
      title: "Croissant",
      items: [
        { name: "Plain croissant", price: 150 },
        { name: "Butter croissant", price: 180 },
        { name: "Cheese croissant", price: 200 },
        { name: "Nutella croissant", price: 220 },
        { name: "Chocolate croissant", price: 220 },
      ],
    },
    {
      title: "Cheesecake",
      items: [
        { name: "Nutella", price: 270 },
        { name: "Biscoff", price: 270 },
        { name: "Blueberry", price: 270 },
        { name: "Red velvet", price: 270 },
      ],
    },
    {
      title: "Bagel",
      items: [
        { name: "Cheese cream spread", price: 160 },
        { name: "Red chilli flake cheese spread", price: 170 },
        { name: "Spicy garlic cheese spread", price: 190 },
        { name: "Oregano pickle cheese spread", price: 200 },
        { name: "Jalapeno & cream cheese", price: 210 },
        { name: "Pesto caprese", price: 230 },
      ],
    },
    {
      title: "Stuffed Garlic Bread",
      items: [
        { name: "Classic", price: 210 },
        { name: "Cheesy", price: 250 },
        { name: "Paneer Tikka", price: 280 },
      ],
    },
    {
      title: "Dessert",
      items: [
        { name: "Vanilla Ice Cream", price: 80 },
        { name: "Chocolate Ice Cream", price: 90 },
        { name: "Strawberry Ice Cream", price: 100 },
        { name: "Butter Scotch Ice Cream", price: 110 },
        { name: "American Nuts", price: 120 },
        { name: "Hot Chocolate Brownie", price: 220 },
        { name: "Sizzling Brownie & Vanila", price: 260 },
        { name: "Gulab Jamun", price: 160 },
        { name: "Halawa", price: 220 },
      ],
    },
  ],
  "Sides & Add-ons": [
    {
      title: "Sides",
      items: [
        { name: "Roasted papad", price: 30 },
        { name: "Fried papad", price: 30 },
        { name: "Roasted masala papad", price: 70 },
        { name: "Fried masala papad", price: 70 },
        { name: "Cheese masala papad", price: 90 },
      ],
    },
    {
      title: "Addons",
      items: [
        { name: "Coffee Dust", price: 50 },
        { name: "Ice Cream Scoop", price: 50 },
        { name: "Choco Syrup", price: 40 },
        { name: "Choco Chips", price: 40 },
        { name: "Whip Cream", price: 50 },
      ],
    },
  ],
};

const Menu = () => {
  const [category, setCategory] = useState<CategoryKey>("Beverages");
  const categories = useMemo(() => Object.keys(allItems) as CategoryKey[], []);

  return (
    <section id="menu" className="container py-20">
      <Tabs value={category} onValueChange={(v) => setCategory(v as CategoryKey)}>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <h2 className="font-playfair text-3xl sm:text-4xl">Our Menu</h2>
            <p className="text-muted-foreground mt-2">
              Handpicked beverages, hearty mains, and sweet finishes. No photos—just pure taste.
            </p>
          </div>
          <TabsList className="overflow-auto">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((c) => (
          <TabsContent key={c} value={c} className={category === c ? "block" : "hidden"}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {allItems[c].map((section) => (
                <Card
                  key={section.title}
                  className="border-secondary/40 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="font-medium flex items-center gap-3">
                      <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--gold))]" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-3 py-2">
                          <span className="text-sm sm:text-base flex-shrink-0">{item.name}</span>
                          <span className="flex-1 border-b border-dashed border-border/40" />
                          <span className="font-playfair text-base sm:text-lg text-[hsl(var(--gold))]">
                            ₹{item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
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
