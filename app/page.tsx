import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Features from '@/components/Features';
import News from '@/components/News';
import DesignFeature from '@/components/DesignFeature';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Features />
      <News />
      <DesignFeature />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}