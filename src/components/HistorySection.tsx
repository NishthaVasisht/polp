'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HistorySection() {
  return (
    <section id="history" className="bg-white py-32 border-t-8 border-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="font-heading text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] italic">
              OUR <br /> <span className="bg-polp-blue text-white px-4 inline-block transform -rotate-2">STORY.</span>
            </h2>
            <div className="space-y-6 font-sans text-2xl md:text-3xl font-bold uppercase italic leading-tight">
              <p className="bg-black text-white px-4 py-2 inline-block">
                BORN IN THE CHAOS.
              </p>
              <p>
                POLP BEGAN AS A WHISPER IN THE BACK ALLEYS OF ASIA — A REACTION TO THE BLAND, SYRUPY WATER THAT DOMINATED THE STREETS.
              </p>
              <p className="text-polp-pink">
                WE WANTED TEXTURE. WE WANTED IMPACT. WE WANTED A DRINK THAT YOU DON'T JUST SWALLOW, BUT EXPERIENCE.
              </p>
            </div>
            <div className="font-sans text-xl md:text-2xl font-medium normal-case opacity-70 max-w-xl">
              <p>
                In May 2026, we took the "Bubble Tech" of the past and infused it with the raw energy of modern youth culture. The result was POLP — the first beverage designed to be bitten. Every chunk of fruit represents a piece of our history: raw, real, and unapologetic.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square border-8 border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] bg-polp-yellow overflow-hidden group"
            >
              <Image 
                src="/images/10.png"
                alt="POLP History"
                fill
                className="object-cover grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="font-heading text-6xl text-white font-black uppercase italic leading-none">
                  EST. MAY 2026 <br /> UNTAMED.
                </span>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-polp-green border-4 border-black rounded-full flex items-center justify-center -rotate-12 animate-pulse z-20">
              <span className="font-heading text-3xl font-black uppercase text-center leading-none">
                THE NEW <br /> HERITAGE
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Scroll Text */}
      <div className="absolute top-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none -translate-y-1/2">
        <span className="font-heading text-[30vw] whitespace-nowrap uppercase leading-none block animate-marquee">
          HERITAGE REBEL HERITAGE REBEL HERITAGE REBEL
        </span>
      </div>
    </section>
  );
}
