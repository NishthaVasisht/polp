'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const banners = [
  {
    image: '/images/2.png',
    title: 'THE NEW POLP',
    subtitle: 'FORGET THE PAST. TASTE THE FUTURE.',
    color: 'bg-polp-green',
    textColor: 'text-black',
  },
  {
    image: '/images/7.png',
    title: 'REBEL SPIRIT',
    subtitle: 'NO SUGAR. NO LIMITS. PURE VIBES.',
    color: 'bg-polp-blue',
    textColor: 'text-white',
  },
  {
    image: '/images/8.png',
    title: 'UNTAMED TASTE',
    subtitle: 'BOLD FLAVORS FOR BOLD PEOPLE.',
    color: 'bg-polp-pink',
    textColor: 'text-white',
  },
  {
    image: '/images/10.png',
    title: 'SQUAD GOALS',
    subtitle: 'THE ULTIMATE REFRESHMENT.',
    color: 'bg-white',
    textColor: 'text-black',
  },
];

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !api) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      
      if (scrolled >= 0 && scrolled <= scrollHeight) {
        const progress = scrolled / scrollHeight;
        const targetIndex = Math.min(
          Math.floor(progress * banners.length),
          banners.length - 1
        );
        
        if (targetIndex !== api.selectedScrollSnap()) {
          api.scrollTo(targetIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${banners.length * 100}vh` }}>
      <section className="sticky top-0 h-screen flex flex-col pt-24 overflow-hidden bg-white">
        <Carousel 
          setApi={setApi} 
          className="w-full flex-1"
          opts={{
            loop: false,
            watchDrag: false, // Disable dragging as we use scroll
          }}
        >
          <CarouselContent className="h-[calc(100vh-6rem)]">
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="relative h-full">
                <div className={cn("absolute inset-0 transition-colors duration-500", banner.color)} />
                
                <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
                  <div className="flex-1 text-center lg:text-left space-y-8">
                    <h1 className={cn(
                      "font-heading text-[12vw] lg:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter animate-in fade-in slide-in-from-left-12 duration-700",
                      banner.textColor
                    )}>
                      {banner.title.split(' ')[0]} <br />
                      <span className="bg-black text-white px-4 inline-block transform -skew-x-12">
                        {banner.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h1>
                    
                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                      <p className={cn(
                        "font-sans text-2xl md:text-4xl font-bold leading-none inline-block px-6 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
                        // Ensure subtitle visibility with contrasting background
                        banner.textColor === 'text-white' ? 'bg-black text-white' : 'bg-white text-black'
                      )}>
                        {banner.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-center lg:justify-start pt-4">
                      <Button disabled className="bg-black/50 text-white/50 cursor-not-allowed text-3xl px-12 py-10 font-heading font-black uppercase tracking-tighter transition-all duration-200 rounded-none border-4 border-black/50 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                        Coming Soon
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 relative w-full h-[40vh] lg:h-full transition-transform duration-500 hover:scale-105">
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Ticker / Marquee Band */}
        <div className="absolute bottom-0 w-full bg-black text-white py-4 border-t-8 border-black overflow-hidden z-40 rotate-[-1deg] scale-105">
          <div className="whitespace-nowrap font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter animate-marquee">
            NO SUGAR. NO LIMITS. PURE VIBES. POLP IS HERE. REBEL POLP. UNTAMED TASTE. &nbsp;
            NO SUGAR. NO LIMITS. PURE VIBES. POLP IS HERE. REBEL POLP. UNTAMED TASTE. &nbsp;
          </div>
        </div>

        {/* Custom Dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          {banners.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-4 border-4 border-black transition-all duration-300",
                current === i ? "w-16 bg-black" : "w-8 bg-white"
              )}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
