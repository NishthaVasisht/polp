import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { HistorySection } from '@/components/HistorySection';
import { RebelsSection } from '@/components/RebelsSection';
import { TheBubble, PolpInMotion } from '@/components/BubbleMotion';
import { ProductCarousel } from '@/components/ProductCarousel';
import { FeatureGrid } from '@/components/FeatureGrid';
import { VibeGallery } from '@/components/VibeGallery';
import { Stockists } from '@/components/Stockists';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HistorySection />
      <TheBubble />
      <ProductCarousel />
      <PolpInMotion />
      <RebelsSection />
      <FeatureGrid />
      <VibeGallery />
      <Stockists />
      <FAQ />
      
      <section id="contact" className="py-24 bg-polp-black text-white overflow-hidden border-t-8 border-black">
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
