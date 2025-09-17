import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Cake, Sparkles, ChefHat, Eye, ArrowDown } from "lucide-react";

// Menu Types
type MenuItem = { name: string; price: number };
type Section = { title: string; items: MenuItem[] };
type CategoryKey = "Beverages" | "Food" | "Desserts & Others";

// Complete menu data with new items
const allItems: Record<CategoryKey, Section[]> = {
  Beverages: [
    {
      title: "Mocktails",
      items: [
        { name: "CLASSIC LEMONADE", price: 169 },
        { name: "VIRGIN MOJITO", price: 189 },
        { name: "BLACK CURRANT MOJITO", price: 189 },
        { name: "STRAWBERRY MOJITO", price: 189 },
        { name: "WATERMELON LITCHI PUNCH", price: 199 },
        { name: "REDBULL MOJITO", price: 239 },
        { name: "PINA COLADA", price: 199 },
        { name: "MINT MOJITO", price: 169 },
        { name: "CRANBERRY MOJITO", price: 169 },
        { name: "BITTER SALT MOJITO", price: 169 },
        { name: "FREEZY ENERGY MOJITO", price: 189 },
      ],
    },
    {
      title: "Brain Freezer",
      items: [
        { name: "ICE BLUE", price: 149 },
        { name: "LITCHI SLUSH", price: 159 },
        { name: "GALAXY MOCKTAIL", price: 179 },
      ],
    },
    {
      title: "Iced Tea",
      items: [
        { name: "LEMON ICED TEA", price: 189 },
        { name: "PEACH ICED TEA", price: 189 },
        { name: "STRAWBERRY ICED TEA", price: 199 },
        { name: "CRANBERRY ICED TEA", price: 199 },
        { name: "WATERMELON ICED TEA", price: 199 },
      ],
    },
    {
      title: "Iced Coffee",
      items: [
        { name: "ICED AMERICANO", price: 179 },
        { name: "ICED LATTE", price: 189 },
        { name: "ICED COFFEE", price: 189 },
        { name: "ICED VANILLA", price: 199 },
        { name: "ICED MOCHA", price: 209 },
        { name: "ICED CARAMEL", price: 219 },
        { name: "ESPRESSO TONIC (GINGER ALE)", price: 239 },
        { name: "COLD BREW (CITRUS APPLE/ORANGE)", price: 229 },
        { name: "VIETNAMESE ICED BREW", price: 249 },
      ],
    },
    {
      title: "Hot Coffee",
      items: [
        { name: "CAPPUCCINO", price: 149 },
        { name: "CAFE LATTE", price: 169 },
        { name: "CAFE MOCHA", price: 189 },
        { name: "CARAMEL CAPPUCCINO", price: 179 },
        { name: "CARAMEL LATTE", price: 179 },
        { name: "HAZELNUT CAPPUCCINO", price: 179 },
        { name: "HAZELNUT LATTE", price: 179 },
        { name: "VANILLA CAPPUCCINO", price: 179 },
        { name: "VANILLA LATTE", price: 179 },
        { name: "IRISH CAPPUCCINO", price: 189 },
        { name: "IRISH LATTE", price: 199 },
        { name: "NUTELLA CAPPUCCINO", price: 199 },
        { name: "LOTUS BISCOFF CAPPUCCINO", price: 219 },
      ],
    },
    {
      title: "Hot Coffee (without milk)",
      items: [
        { name: "ESPRESSO (COFFEE SHOTS)", price: 119 },
        { name: "AMERICANO (BLACK COFFEE)", price: 119 },
        { name: "MACCHIATO (FOAM ON SHOT)", price: 149 },
        { name: "SIGNATURE AFFOGATO", price: 189 },
        { name: "IRISH COFFEE (NO MILK)", price: 179 },
      ],
    },
    {
      title: "Hot Chocolate",
      items: [
        { name: "HOT CHOCOLATE", price: 179 },
        { name: "HOT NUTELLA", price: 189 },
        { name: "HOT ROCHER", price: 219 },
      ],
    },
    {
      title: "Chai",
      items: [
        { name: "INDIAN MASALA CHAI", price: 139 },
      ],
    },
    {
      title: "Cold Coffee (frappe)",
      items: [
        { name: "CLASSIC COLD COFFEE", price: 179 },
        { name: "CREAMY FRAPPE", price: 199 },
        { name: "CARAMEL FRAPPE", price: 219 },
        { name: "CHOCO PASSION FRAPPE", price: 219 },
        { name: "HAZELNUT FRAPPE", price: 219 },
        { name: "IRISH FRAPPE", price: 219 },
        { name: "DOUBLE CHOCO CHIP FRAPPE", price: 229 },
        { name: "NUTELLA FRAPPE", price: 239 },
        { name: "OREO FRAPPE", price: 239 },
        { name: "LOTUS BISCOFF FRAPPE", price: 249 },
        { name: "BROWNIE FRAPPE", price: 249 },
        { name: "SIGNATURE FRAPPE (100% ARABICA)", price: 249 },
      ],
    },
    {
      title: "Shakes",
      items: [
        { name: "CHOCOLATE SHAKE", price: 229 },
        { name: "BLACKCURRANT SHAKE", price: 239 },
        { name: "STRAWBERRY SHAKE", price: 239 },
        { name: "BUTTERSCOTCH SHAKE", price: 239 },
        { name: "OREO SHAKE", price: 249 },
        { name: "KITKAT SHAKE", price: 249 },
        { name: "NUTELLA SHAKE", price: 259 },
        { name: "BELGIUM (CRUNCHY) SHAKE", price: 259 },
        { name: "RED VELVET SHAKE", price: 259 },
        { name: "BROWNIE SHAKE", price: 269 },
        { name: "BLUEBERRY SHAKE", price: 269 },
        { name: "LOTUS BISCOFF SHAKE", price: 279 },
        { name: "ROCHER SHAKE", price: 289 },
      ],
    },
  ],
  Food: [
    {
      title: "Croissant",
      items: [
        { name: "PLAIN CROISSANT", price: 149 },
        { name: "BUTTER CROISSANT", price: 169 },
        { name: "CHEESE CROISSANT", price: 199 },
        { name: "NUTELLA CROISSANT", price: 229 },
        { name: "CHOCOLATE CROISSANT", price: 239 },
      ],
    },
    {
      title: "Bagel",
      items: [
        { name: "CHEESE CREAM SPREAD", price: 169 },
        { name: "RED CHILLI FLAKE CHEESE SPREAD", price: 179 },
        { name: "SPICY GARLIC CHEESE SPREAD", price: 199 },
        { name: "OREGANO PICKLE CHEESE SPREAD", price: 219 },
        { name: "JALAPENO & CREAM CHEESE", price: 229 },
        { name: "PESTO CAPRESE", price: 239 },
      ],
    },
    {
      title: "Pizza",
      items: [
        { name: "MARGHERITA", price: 519 },
        { name: "DOUBLE CHEESE MARGHERITA", price: 549 },
        { name: "PESTO BASIL", price: 599 },
        { name: "FARMHOUSE", price: 599 },
        { name: "BEDALI BURN", price: 599 },
        { name: "BBQ PANEER", price: 629 },
        { name: "PANEER TIKKA MASALA", price: 639 },
        { name: "ENGLISH RETREAT", price: 649 },
        { name: "CHEESY - 7", price: 679 },
        { name: "SPICY VEG.", price: 679 },
        { name: "PERI PERI VEG", price: 679 },
        { name: "CHEESE MAC VEG.", price: 689 },
        { name: "MEXICAN SALSA", price: 689 },
        { name: "INDIAN ZAIKA", price: 699 },
      ],
    },
    {
      title: "Burger",
      items: [
        { name: "VEG. ALOO TIKKI BURGER", price: 159 },
        { name: "CHEESE BURGER", price: 179 },
        { name: "SCHEZWAN BURGER", price: 179 },
        { name: "PANEER MAHARAJA BURGER DOUBLE", price: 219 },
        { name: "CHEESE MAKHANI", price: 239 },
      ],
    },
    {
      title: "Pasta",
      items: [
        { name: "ARRABIATA PASTA", price: 299 },
        { name: "ALFREDO PASTA", price: 309 },
        { name: "CHEESY CREAM PASTA", price: 329 },
        { name: "PINK SAUCE PASTA", price: 329 },
        { name: "AGLIO OLIO RAVIOLI PASTA", price: 339 },
        { name: "PESTO BASIL PASTA", price: 339 },
        { name: "SPAGHETTI POMODORO PASTA", price: 359 },
        { name: "FETTUCCINE PASTA", price: 359 },
      ],
    },
    {
      title: "Fries",
      items: [
        { name: "SALTED FRIES", price: 159 },
        { name: "PIZZA FRIES", price: 179 },
        { name: "PERI PERI FRIES", price: 189 },
        { name: "SCHEZWAN FRIES", price: 199 },
        { name: "ITALIAN FRIES", price: 199 },
        { name: "CHEESY FRIES", price: 219 },
        { name: "BABY CORN FRIES", price: 219 },
        { name: "COTTAGE CHEESE FINGERS", price: 229 },
      ],
    },
    {
      title: "Stuffed Garlic Bread",
      items: [
        { name: "CLASSIC", price: 219 },
        { name: "CHEESY", price: 259 },
        { name: "PANEER TIKKA", price: 289 },
      ],
    },
    {
      title: "Toast",
      items: [
        { name: "CHEESE CHILLI TOAST", price: 229 },
        { name: "CHEESE BRUSCHETTA", price: 229 },
        { name: "CHEESE GARLIC BREAD", price: 239 },
        { name: "MEXICAN TOAST", price: 249 },
        { name: "AVOCADO TOAST", price: 289 },
        { name: "TOMATO SALAD BRUSCHETTA", price: 299 },
      ],
    },
    {
      title: "Frankie",
      items: [
        { name: "VEG FRANKIE", price: 179 },
        { name: "TANDOORI PANEER FRANKIE", price: 199 },
        { name: "SCHEZWAN FRANKIE", price: 219 },
        { name: "CHEESE CORN DELIGHT FRANKIE", price: 229 },
      ],
    },
    {
      title: "Quesadilla",
      items: [
        { name: "BEAN & CHEESE QUESADILLA", price: 259 },
        { name: "MUSHROOM & CHEESE QUESADILLA", price: 289 },
      ],
    },
    {
      title: "Thai",
      items: [
        { name: "THAI GREEN CURRY & BASIL RICE", price: 259 },
        { name: "THAI RED CURRY & BASIL RICE", price: 279 },
      ],
    },
    {
      title: "Hotpot",
      items: [
        { name: "MEXICAN HOTPOT", price: 359 },
        { name: "ITALIAN HOTPOT", price: 369 },
        { name: "MEXICAN RICE & SALSA CURRY", price: 399 },
        { name: "SAUTE ITALIAN VEGETABLE", price: 399 },
      ],
    },
    {
      title: "Noodles",
      items: [
        { name: "HAKKA NOODLES", price: 239 },
        { name: "CHILLI GARLIC NOODLES", price: 259 },
        { name: "SCHEZWAN MUSHROOM NOODLES", price: 269 },
        { name: "PAD THAI NOODLES", price: 299 },
      ],
    },
    {
      title: "Khichdi",
      items: [
        { name: "DAL KHICHDI", price: 229 },
        { name: "MASALA KHICHDI", price: 249 },
        { name: "PALAK TADKA KHICHDI", price: 269 },
      ],
    },
    {
      title: "Paratha",
      items: [
        { name: "ALOO PARATHA", price: 229 },
        { name: "MIX VEG. PARATHA", price: 249 },
      ],
    },
    {
      title: "Sandwich",
      items: [
        { name: "CHEESE CHILLI SANDWICH", price: 199 },
        { name: "CHEESE CHILLI CORN SANDWICH", price: 219 },
        { name: "COLESLAW SANDWICH", price: 229 },
        { name: "PERI PERI PANEER SANDWICH", price: 249 },
        { name: "VEG. CLUB SANDWICH", price: 249 },
        { name: "TANDOORI PANEER SANDWICH", price: 259 },
        { name: "PHLOX SPECIAL SANDWICH", price: 279 },
        { name: "AVOCADO SANDWICH", price: 299 },
      ],
    },
    {
      title: "Nachos & Tacos",
      items: [
        { name: "CHEESY NACHOS", price: 229 },
        { name: "VEG. SUPREME NACHOS", price: 249 },
        { name: "MEXICAN TACOS", price: 269 },
      ],
    },
    {
      title: "Baked Dish",
      items: [
        { name: "BAKED CANNELLONI", price: 429 },
        { name: "BAKED MACARONI WITH PINEAPPLE", price: 439 },
        { name: "BAKED LASAGNA", price: 449 },
        { name: "BAKED MACARONI MARINARA SAUCE", price: 459 },
      ],
    },
    {
      title: "Panini",
      items: [
        { name: "ROASTED RED BELL PEPPER PANINI", price: 239 },
        { name: "SPICY PANEER PANINI", price: 259 },
        { name: "MEXICAN PANINI", price: 269 },
        { name: "PHLOX SPECIAL PANINI", price: 289 },
      ],
    },
    {
      title: "Sizzler",
      items: [
        { name: "MEXICAN SIZZLER", price: 619 },
        { name: "ITALIAN SIZZLER", price: 629 },
        { name: "CHINESE SIZZLER", price: 639 },
        { name: "PANEER SHASHLIC SIZZLER", price: 679 },
      ],
    },
    {
      title: "Rice Platter",
      items: [
        { name: "SPINACH COTTAGE CHEESE RICE", price: 449 },
        { name: "JAFRANI BROCCOLI GARLIC RICE", price: 489 },
        { name: "PERI PERI WITH BURNT GARLIC & ONION", price: 499 },
      ],
    },
    {
      title: "Rice Bowl",
      items: [
        { name: "MEXICAN BOWL", price: 319 },
        { name: "CHIPOTLE BOWL", price: 339 },
        { name: "CHINESE BOWL", price: 339 },
        { name: "INDIAN BOWL", price: 359 },
      ],
    },
    {
      title: "Soup",
      items: [
        { name: "LEMON CORIANDER SOUP", price: 179 },
        { name: "CHEESE CORN TOMATO SOUP", price: 179 },
        { name: "HOT&SOUR SOUP", price: 189 },
        { name: "MINESTRONE SOUP", price: 189 },
        { name: "TOMATO BASIL SOUP", price: 189 },
        { name: "THAI SPICY SOUP", price: 199 },
        { name: "MANCHOW SOUP", price: 199 },
        { name: "MEXICAN SOUP", price: 199 },
        { name: "BROCCOLI ALMOND SOUP", price: 219 },
      ],
    },
    {
      title: "Starter",
      items: [
        { name: "CRISPY VEG VOLVO", price: 209 },
        { name: "SPINACH CHEESE BALLS", price: 209 },
        { name: "ONION RINGS", price: 219 },
        { name: "CRISPY VEG.", price: 219 },
        { name: "HONEY CHILLI POTATO", price: 229 },
        { name: "CHEESE BALLS", price: 239 },
        { name: "MANCHURIAN DRY", price: 249 },
        { name: "MEXICAN TOSTADOS", price: 259 },
        { name: "PANEER CHILLI DRY", price: 279 },
        { name: "VEG SPRING ROLL", price: 289 },
        { name: "MUSHROOM AGLIO OLIO", price: 319 },
        { name: "SPICY CIGAR", price: 319 },
        { name: "HUMMUS AND PITA BREAD", price: 319 },
        { name: "VEG HARIYALI KABAB", price: 329 },
        { name: "TANDOORI ALOO", price: 339 },
        { name: "TANDOORI SOYA CHAAP", price: 399 },
        { name: "TAWA GRILL PANEER", price: 419 },
        { name: "MEZZE PLATTER", price: 429 },
        { name: "LAHORI PANEER TIKKA", price: 429 },
        { name: "MUSHROOM PLATTER", price: 429 },
        { name: "MUSHROOM CHILLY DRY", price: 469 },
        { name: "TANDOORI PLATTER", price: 479 },
        { name: "MUSHROOM DUMPLING", price: 479 },
      ],
    },
    {
      title: "Sides",
      items: [
        { name: "ROASTED PAPAD", price: 39 },
        { name: "FRIED PAPAD", price: 39 },
        { name: "ROASTED MASALA PAPAD", price: 79 },
        { name: "FRIED MASALA PAPAD", price: 79 },
        { name: "CHEESE MASALA PAPAD", price: 89 },
      ],
    },
    {
      title: "Chaat",
      items: [
        { name: "CHANA CHAT", price: 89 },
        { name: "PEANUT CHAT", price: 99 },
        { name: "PAPDI CHAT", price: 119 },
        { name: "ALOO TIKKI CHAT", price: 129 },
        { name: "CHOLE TIKKI CHAT", price: 139 },
      ],
    },
    {
      title: "Curries",
      items: [
        { name: "JEERA ALOO", price: 279 },
        { name: "MIX VEG.", price: 299 },
        { name: "BHINDI MASALA", price: 299 },
        { name: "VEG. JAIPURI", price: 319 },
        { name: "LASANIYA PALAK", price: 319 },
        { name: "VEG. KADHAI", price: 329 },
        { name: "DUM ALOO", price: 329 },
        { name: "VEG. TOOFANI", price: 349 },
        { name: "VEG. MAKHANWALA", price: 379 },
        { name: "VEG. DEEWANI HANDI", price: 389 },
        { name: "PALAK PANEER", price: 419 },
        { name: "MALAI KOFTA", price: 419 },
        { name: "PANEER ANGARA", price: 439 },
        { name: "PANEER KADHAI", price: 439 },
        { name: "PANEER BUTTER MASALA", price: 449 },
        { name: "PANEER TIKKA MASALA", price: 449 },
        { name: "VEG. KOFTA", price: 459 },
        { name: "PANEER CHEESE BUTTER MASALA", price: 459 },
        { name: "PANEER BHURJI", price: 459 },
        { name: "CHEESE BUTTER MASALA", price: 469 },
        { name: "KHOYA KAJU", price: 479 },
        { name: "CHEESE ANGURI", price: 479 },
        { name: "KAJU MASALA", price: 489 },
      ],
    },
    {
      title: "Indian Breads",
      items: [
        { name: "PLAIN TAWA ROTI", price: 30 },
        { name: "BUTTER TAWA ROTI", price: 40 },
        { name: "TANDOORI ROTI", price: 60 },
        { name: "BUTTER TANDOORI ROTI", price: 75 },
        { name: "TAWA PARATHA", price: 90 },
        { name: "LACHHA PARATHA", price: 110 },
        { name: "BUTTER NAAN", price: 130 },
        { name: "PHUDINA LACHHA PARATHA", price: 130 },
        { name: "CHEESE GARLIC LACHHA PARATHA", price: 150 },
        { name: "CHEESE NAAN", price: 150 },
        { name: "PLAIN KULCHA", price: 159 },
        { name: "CHUR CHUR NAAN", price: 160 },
        { name: "CHEESE GARLIC NAAN", price: 170 },
        { name: "CHEESE CHILLY GARLIC NAAN", price: 180 },
        { name: "STUFF KULCHA ONION", price: 209 },
        { name: "STUFF KULCHA POTATO", price: 219 },
        { name: "STUFF KULCHA MIX", price: 249 },
        { name: "STUFF KULCHA CHEESE", price: 259 },
      ],
    },
    {
      title: "Dal",
      items: [
        { name: "DAL FRY", price: 189 },
        { name: "DAL FRY TADKA", price: 219 },
        { name: "DAL MAKHNI", price: 249 },
        { name: "DAL MAKHNI WITH GHEE", price: 259 },
      ],
    },
    {
      title: "Rice",
      items: [
        { name: "JEERA RICE", price: 179 },
        { name: "VEG. TAWA PULAV", price: 229 },
        { name: "VEG. FRIED RICE", price: 229 },
        { name: "MANCHURIAN FRIED RICE", price: 269 },
        { name: "SCHEZWAN FRIED RICE", price: 279 },
        { name: "CHEESE TAWA PULAV", price: 289 },
        { name: "CRISPY PANEER PULAV", price: 319 },
        { name: "TRIPLE SCHEZWAN FRIED RICE", price: 349 },
        { name: "HYDERABADI DUM BIRYANI", price: 359 },
        { name: "PANEER TIKKA BIRYANI", price: 379 },
      ],
    },
  ],
  "Desserts & Others": [
    {
      title: "Desserts",
      items: [
        { name: "VANILLA ICE CREAM", price: 89 },
        { name: "CHOCOLATE ICE CREAM", price: 99 },
        { name: "STRAWBERRY ICE CREAM", price: 109 },
        { name: "BUTTERSCOTCH ICE CREAM", price: 119 },
        { name: "AMERICAN NUTS", price: 129 },
        { name: "GULAB JAMUN", price: 169 },
        { name: "HALAWA", price: 229 },
        { name: "HOT CHOCOLATE BROWNIE", price: 239 },
        { name: "SIZZLING BROWNIE & VANILLA", price: 289 },
      ],
    },
    {
      title: "Cheese Cake",
      items: [
        { name: "NUTELLA CHEESECAKE", price: 279 },
        { name: "BISCOFF CHEESECAKE", price: 279 },
        { name: "BLUEBERRY CHEESECAKE", price: 279 },
        { name: "RED VELVET CHEESECAKE", price: 279 },
      ],
    },
    {
      title: "Others",
      items: [
        { name: "WATER BOTTLE", price: 30 },
        { name: "COLD DRINK", price: 70 },
        { name: "BUTTER MILK", price: 70 },
        { name: "MASALA BUTTER MILK", price: 90 },
        { name: "REDBULL ON THE ROCKS", price: 190 },
      ],
    },
  ],
};

// Category icons
const categoryIcons = {
  Beverages: Coffee,
  Food: Utensils,
  "Desserts & Others": Cake,
};

const Menu = () => {
  const [category, setCategory] = useState<CategoryKey>("Beverages");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const categories = useMemo(() => Object.keys(allItems) as CategoryKey[], []);

  // Featured menu items for preview
  const featuredItems = {
    Beverages: [
      { name: "CLASSIC LEMONADE", price: 169 },
      { name: "VIRGIN MOJITO", price: 189 },
      { name: "ICED AMERICANO", price: 179 },
      { name: "CAPPUCCINO", price: 149 },
    ],
    Food: [
      { name: "MARGHERITA PIZZA", price: 519 },
      { name: "PANEER BUTTER MASALA", price: 449 },
      { name: "VEG. CLUB SANDWICH", price: 249 },
      { name: "ALFREDO PASTA", price: 309 },
    ],
    "Desserts & Others": [
      { name: "HOT CHOCOLATE BROWNIE", price: 239 },
      { name: "NUTELLA CHEESECAKE", price: 279 },
      { name: "VANILLA ICE CREAM", price: 89 },
      { name: "GULAB JAMUN", price: 169 },
    ]
  };

  const MenuPreview = () => (
    <div className="text-center">
      {/* Menu Preview Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat];
          return (
            <Card key={cat} className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm hover:from-card/80 hover:to-card/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/10">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative pb-3">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-gold" />
                  <CardTitle className="text-xl font-playfair bg-gradient-to-r from-foreground to-gold bg-clip-text text-transparent">
                    {cat}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="space-y-2">
                  {featuredItems[cat].map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-3 py-1">
                      <span className="text-sm text-foreground/80 text-left flex-1">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 border-b border-dashed border-border/40 w-8" />
                        <span className="font-playfair text-base font-semibold text-gold whitespace-nowrap">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      + {allItems[cat].reduce((acc, section) => acc + section.items.length, 0) - 4} more items
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Reveal Menu Button */}
      <div className="relative">
        <Button
          onClick={() => setIsMenuExpanded(true)}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold text-background font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <div className="flex items-center gap-3">
            <ChefHat className="w-5 h-5" />
            <span>View Full Menu</span>
            <Eye className="w-5 h-5" />
          </div>
        </Button>
        
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm">Discover our complete selection</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  );

  const FullMenu = () => (
    <Tabs value={category} onValueChange={(v) => setCategory(v as CategoryKey)}>
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <TabsList className="grid grid-cols-3 bg-secondary/30 backdrop-blur-sm border border-border/40 p-1 rounded-2xl">
          {categories.map((c) => {
            const Icon = categoryIcons[c];
            return (
              <TabsTrigger 
                key={c} 
                value={c}
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
                {c}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      {/* Menu Content */}
      {categories.map((c) => (
        <TabsContent key={c} value={c} className="animate-fade-in">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allItems[c].map((section, index) => (
              <Card
                key={section.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:from-card/70 hover:to-card/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl font-playfair">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                    </div>
                    <span className="bg-gradient-to-r from-foreground to-gold bg-clip-text text-transparent">
                      {section.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div 
                        key={item.name} 
                        className="flex items-center justify-between gap-4 py-2 group/item hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium text-foreground/90 group-hover/item:text-foreground transition-colors text-left flex-1">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="border-b border-dashed border-border/40 w-6" />
                          <span className="font-playfair text-lg font-semibold text-gold whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
      
      {/* Collapse Menu Button */}
      <div className="text-center mt-12">
        <Button
          onClick={() => setIsMenuExpanded(false)}
          variant="outline"
          className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
        >
          Collapse Menu
        </Button>
      </div>
    </Tabs>
  );

  return (
    <section id="menu" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/5 to-transparent blur-3xl" />
      
      <div className="container relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
            <h2 className="font-playfair text-5xl sm:text-6xl bg-gradient-to-r from-foreground via-gold to-foreground bg-clip-text text-transparent">
              Our Menu
            </h2>
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of beverages, authentic flavors, and delightful desserts
          </p>
        </div>

        {/* Conditional Menu Content */}
        {!isMenuExpanded ? <MenuPreview /> : <FullMenu />}
      </div>
    </section>
  );
};

export default Menu;
