import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Yati Foods',
    image: 'https://yatifoods.sample/images/hero_biryani.png',
    '@id': '',
    url: 'https://yatifoods.sample',
    telephone: '+919848299456',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Teachers Colony, Nimmathota',
      addressLocality: 'Samarlakota',
      addressRegion: 'Andhra Pradesh',
      postalCode: '533440',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.0500,
      longitude: 82.1667
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '22:00'
    },
    servesCuisine: ['Fast Food', 'Biryani', 'Indo-Chinese', 'Bakery', 'Multi-Cuisine'],
    priceRange: '₹200–₹400'
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Menu />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
