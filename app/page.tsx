import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { FloatingOrderButton } from '@/components/FloatingOrderButton';
import { JsonLd } from '@/components/JsonLd';

import { Hero } from '@/sections/Hero';
import { FeaturedBurgers } from '@/sections/FeaturedBurgers';
import { Menu } from '@/sections/Menu';
import { About } from '@/sections/About';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Gallery } from '@/sections/Gallery';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <FeaturedBurgers />
        <Menu />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <FloatingOrderButton />
      <BackToTop />
    </>
  );
}
