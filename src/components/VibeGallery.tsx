'use client';

import { motion } from 'framer-motion';

export function VibeGallery() {
  return (
    <section className="bg-polp-black py-24 border-t-8 border-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-polp-pink/5 blur-[120px] pointer-events-none" />

      <div className="bg-polp-pink border-y-8 border-black py-4 mb-24 overflow-hidden -rotate-2 scale-105 relative z-10">
        <div className="whitespace-nowrap font-heading text-6xl font-black uppercase tracking-tighter animate-marquee">
          VIBE CHECK // VIBE CHECK // VIBE CHECK // VIBE CHECK // VIBE CHECK // VIBE CHECK // &nbsp;
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-7xl md:text-9xl text-white font-black uppercase tracking-tighter leading-none mb-8"
          >
            THE <span className="text-polp-green">COMMUNITY.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl text-white font-bold uppercase italic leading-tight opacity-80"
          >
            POLP ISN&apos;T JUST A DRINK; IT&apos;S THE UNFILTERED LIFESTYLE OF THOSE WHO REFUSE TO BLEND IN. SEE HOW THE REBELLION LIVES.
          </motion.p>
        </div>
      </div>
      
      <div className="mt-32 text-center relative z-10">
         <motion.span 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 0.1 }}
           viewport={{ once: true }}
           transition={{ duration: 2 }}
           className="font-heading text-8xl md:text-[15vw] text-white uppercase tracking-tighter leading-none block italic"
         >
           UNFILTERED CULTURE
         </motion.span>
      </div>
    </section>
  );
}
