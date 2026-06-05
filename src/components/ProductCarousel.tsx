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
import { NutritionalModal } from '@/components/NutritionalModal';
import { cn } from '@/lib/utils';

const products = [
  {
    name: 'POLP Peach',
    description: 'Sun-soaked and rebellious. Velvety peach nectar packed with hand-cut chunks that bite back. Summer in a bottle, unfiltered.',
    image: '/images/2.png',
    bgImage: '/images/L_FONDO.webp',
    color: 'bg-polp-yellow',
    textColor: 'text-black',
    accentColor: 'bg-polp-blue',
    info: {
      energy: '145 kJ / 34 kcal',
      fat: '0g',
      saturatedFat: '0g',
      carbs: '8.2g',
      sugars: '8.2g',
      protein: '0g',
      salt: '0.02g',
    }
  },
  {
    name: 'POLP Lagoon',
    description: 'A floral riot. Sweet, exotic Dragon Fruit essence meeting tender fruit pieces for a texture that defies the ordinary. Refined yet rowdy.',
    image: '/images/3.png',
    bgImage: '/images/C_FONDO-1.webp',
    color: 'bg-polp-blue',
    textColor: 'text-white',
    accentColor: 'bg-polp-pink',
    info: {
      energy: '180 kJ / 42 kcal',
      fat: '0g',
      saturatedFat: '0g',
      carbs: '10.5g',
      sugars: '10.5g',
      protein: '0g',
      salt: '0.01g',
    }
  },
  {
    name: 'POLP Passion Fruit',
    description: 'Intense, tangy, and unapologetically tropical. A sharp burst of passion fruit with juicy chunks that explode on impact.',
    image: '/images/4.png',
    bgImage: '/images/S_FONDO.webp',
    color: 'bg-polp-green',
    textColor: 'text-black',
    accentColor: 'bg-black',
    info: {
      energy: '150 kJ / 36 kcal',
      fat: '0g',
      saturatedFat: '0g',
      carbs: '8.8g',
      sugars: '8.8g',
      protein: '0g',
      salt: '0.01g',
    }
  },
  {
    name: 'POLP Grapefruit',
    description: 'Bitter-sweet brilliance. A sophisticated citrus surge with real grapefruit pieces for a satisfying, sharp finish. Not for the weak.',
    image: '/images/5.png',
    bgImage: '/images/S_FONDO.webp',
    color: 'bg-polp-pink',
    textColor: 'text-white',
    accentColor: 'bg-polp-yellow',
    info: {
      energy: '160 kJ / 38 kcal',
      fat: '0g',
      saturatedFat: '0g',
      carbs: '9.0g',
      sugars: '9.0g',
      protein: '0g',
      salt: '0.01g',
    }
  },
  {
    name: 'POLP Berry',
    description: 'A dark forest heist. A deep, indulgent berry mix with real fruit pieces that hit different. Bold flavor, zero apologies.',
    image: '/images/6.png',
    bgImage: '/images/L_FONDO.webp',
    color: 'bg-white',
    textColor: 'text-black',
    accentColor: 'bg-polp-green',
    info: {
      energy: '170 kJ / 40 kcal',
      fat: '0g',
      saturatedFat: '0g',
      carbs: '9.8g',
      sugars: '9.8g',
      protein: '0g',
      salt: '0.01g',
    }
  },
];

export function ProductCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(products[0]);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleOpenModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="relative min-h-screen flex flex-col justify-center overflow-hidden border-t-8 border-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className={cn("absolute inset-0 transition-colors duration-300", products[current].color)} />
         <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={product.name} className="flex flex-col lg:flex-row items-center gap-12 py-12 md:py-20">
                <div className="flex-1 flex justify-center relative">
                  {/* Large Background Product Name */}
                  <span className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[20vw] opacity-30 whitespace-nowrap select-none italic",
                    product.textColor
                  )}>
                    {product.name.split(' ')[1]}
                  </span>
                  
                  <div className="relative w-[280px] h-[450px] md:w-[400px] md:h-[600px] transition-transform duration-500 hover:scale-110 z-10 cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                <div className={cn("flex-1 text-center lg:text-left space-y-6 md:space-y-10 max-w-2xl", product.textColor)}>
                  <h3 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                    {product.name.split(' ')[0]} <br /> 
                    <span className="bg-black text-white px-4 inline-block transform -skew-x-12">
                      {product.name.split(' ')[1]}
                    </span>
                  </h3>
                  <p className="font-sans text-xl md:text-3xl font-bold leading-tight uppercase italic">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-8">
                     <Button 
                        disabled
                        className={cn(
                          "bg-black/50 text-white/50 cursor-not-allowed font-heading font-black uppercase text-3xl px-12 py-10 rounded-none border-4 border-black/50 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]"
                        )}
                      >
                        Coming Soon
                      </Button>
                      <Button 
                        className={cn(
                          "border-4 font-heading font-black uppercase text-3xl px-12 py-10 rounded-none transition-all bg-transparent",
                          product.textColor === 'text-white' 
                            ? 'border-white text-white hover:bg-white hover:text-black' 
                            : 'border-black text-black hover:bg-black hover:text-white'
                        )}
                        onClick={() => handleOpenModal(product)}
                      >
                        Specs
                      </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-6 border-4 border-black transition-all duration-300",
                  current === i ? "w-24 bg-black" : "w-12 bg-white"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      <NutritionalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProduct.name}
        info={selectedProduct.info}
      />
    </section>
  );
}
