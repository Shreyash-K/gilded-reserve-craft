import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Offers from "@/components/sections/Offers";
import Reservation from "@/components/sections/Reservation";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Events from "@/components/sections/Events";
import Social from "@/components/sections/Social";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Aurum',
    servesCuisine: ['Modern', 'Contemporary', 'Fine Dining'],
    priceRange: '$$$',
    telephone: '+1-555-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Charcoal Ave, Suite 7',
      addressLocality: 'Metropolis',
      addressRegion: 'CA',
      postalCode: '94100',
      addressCountry: 'US'
    },
    openingHours: [
      'Mo-Th 17:00-22:00',
      'Fr-Sa 17:00-23:00',
      'Su 11:30-15:00'
    ],
    sameAs: [
      'https://instagram.com/',
      'https://facebook.com/',
      'https://x.com/'
    ]
  };

  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Offers />
        <Reservation />
        <Gallery />
        <Testimonials />
        <Events />
        <Social />
        <Contact />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
};

export default Index;
