'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const rebelPrinciples = [
  { title: 'NO RULES', desc: 'WE DON&apos;T FOLLOW INDUSTRY STANDARDS. WE CREATE THEM.', color: 'bg-polp-blue' },
  { title: 'REAL CHUNKS', desc: 'IF IT DOESN&apos;T HAVE TEXTURE, IT DOESN&apos;T HAVE SOUL.', color: 'bg-polp-pink' },
  { title: 'PURE VIBES', desc: 'ENERGY IS OUR ONLY INGREDIENT THAT MATTERS.', color: 'bg-polp-green' },
  { title: 'STAY LOUD', desc: 'MAKE NOISE. BREAK SILENCE. DRINK POLP.', color: 'bg-polp-yellow' },
];

export function RebelsSection() {
  return (
    <section id="rebels" className="bg-polp-black py-32 border-t-8 border-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-8xl md:text-[12rem] text-white font-black uppercase tracking-tighter leading-none italic"
          >
            THE <span className="text-polp-pink">POLPERS.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-3xl md:text-5xl text-white font-black uppercase italic mt-8"
          >
            FOR THOSE WHO REFUSE THE ORDINARY.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rebelPrinciples.map((principle, i) => (
            <motion.div 
              key={principle.title}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 2 : -2 }}
              className={cn(
                "p-12 border-8 border-white flex flex-col items-center text-center min-h-[400px] justify-center space-y-8",
                principle.color
              )}
            >
              <h3 className="font-heading text-6xl font-black uppercase tracking-tighter text-black leading-none">
                {principle.title}
              </h3>
              <p className="font-sans text-2xl font-black uppercase italic text-black leading-tight">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block bg-white text-black p-8 border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
              ARE YOU <span className="text-polp-pink underline decoration-8">BOLD</span> ENOUGH?
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Background Kinetic Text */}
      <div className="absolute bottom-10 left-0 w-full opacity-10 pointer-events-none select-none">
        <span className="font-heading text-[20vw] whitespace-nowrap uppercase leading-none block animate-marquee-reverse">
          REBEL SOUL REBEL SOUL REBEL SOUL
        </span>
      </div>
    </section>
  );
}
