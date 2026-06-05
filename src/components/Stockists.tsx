'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const dynamicNodes = [
  { 
    label: 'POP-UP DROPS', 
    vibe: 'CATCH US IN THE WILD. WE SHOW UP WHERE THE ENERGY IS HIGHEST.',
    items: ['MUSIC FESTS', 'ART BLOCKS', 'SECRET SESSIONS'],
    color: 'bg-polp-blue',
    textColor: 'text-white'
  },
  { 
    label: 'MOBILE VIBES', 
    vibe: 'NO FIXED ADDRESS. OUR POLP HUBS ARE ALWAYS IN MOTION.',
    items: ['STREET CORNER CHILLS', 'ROOFTOP TAKEOVERS', 'UNDERGROUND RAILS'],
    color: 'bg-polp-pink',
    textColor: 'text-white'
  },
  { 
    label: 'FLASH STOCKS', 
    vibe: 'HERE TODAY, GONE IN A BLINK. STAY LOUD TO STAY INFORMED.',
    items: ['LIMITED RUNS', 'COLLAB DROPS', 'VIP ACCESS'],
    color: 'bg-polp-yellow',
    textColor: 'text-black'
  },
  { 
    label: 'GLOBAL REACH', 
    vibe: 'FROM ASIA TO THE WORLD. WE ARE EVERYWHERE AND NOWHERE.',
    items: ['DIGITAL HUBS', 'CROSS-BORDER VIBES', 'FUTURE STOPS'],
    color: 'bg-white',
    textColor: 'text-black'
  },
];

export function Stockists() {
  return (
    <section className="bg-polp-green py-32 border-t-8 border-black overflow-hidden relative">
      {/* Background Animated Element */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-polp-blue/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-24 italic">
            WHERE LIFE <br /> <span className="bg-black text-polp-green px-4 inline-block">TAKES US.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dynamicNodes.map((node, i) => (
            <motion.div 
              key={node.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className={cn(
                "p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all",
                node.color,
                node.textColor
              )}
            >
              <h3 className="font-heading text-5xl font-black uppercase tracking-tighter mb-4">
                {node.label}
              </h3>
              <p className="font-sans text-xl font-bold uppercase italic leading-tight mb-8 opacity-80">
                {node.vibe}
              </p>
              <ul className="space-y-3">
                {node.items.map((item) => (
                  <li key={item} className="font-sans text-lg font-black uppercase border-b-2 border-current pb-1 flex justify-between items-center group/item">
                    <span>{item}</span>
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="opacity-0 group-hover/item:opacity-100"
                    >
                      →
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 border-8 border-black p-12 bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-12 group"
        >
           <div className="space-y-4">
             <p className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
               WANT TO JOIN <br /> THE MOTION?
             </p>
             <p className="font-sans text-xl font-bold uppercase italic opacity-60">
               WE ARE ALWAYS MOVING. BE THE NEXT STOP.
             </p>
           </div>
           <motion.button 
             whileHover={{ scale: 1.1, rotate: 3 }}
             whileTap={{ scale: 0.95 }}
             className="bg-polp-blue text-white font-heading text-4xl px-12 py-8 uppercase tracking-tighter border-4 border-black hover:bg-polp-pink transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
           >
             CONTACT SALES
           </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
