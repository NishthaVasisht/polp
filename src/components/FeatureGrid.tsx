import Image from 'next/image';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'REAL CHUNKS',
    description: 'Every bottle is packed with real, visible fruit pieces. Sip the drink, then bite into the fresh, juicy texture within.',
    color: 'bg-polp-blue',
    textColor: 'text-white',
    image: '/images/2.png'
  },
  {
    title: 'CLEAN AESTHETIC',
    description: 'Inspired by modern Asian beverage luxury. A premium design that looks as sophisticated as it tastes.',
    color: 'bg-polp-green',
    textColor: 'text-black',
  },
  {
    title: 'PURE INDULGENCE',
    description: 'Big on flavor. Light on the nonsense. Packed with real fruit and good vibes.',
    color: 'bg-polp-pink',
    textColor: 'text-white',
  },
];

export function FeatureGrid() {
  return (
    <section id="polpers" className="py-0 bg-white border-t-8 border-black">
      {/* Top Marquee */}
      <div className="bg-polp-yellow border-b-8 border-black py-4 overflow-hidden">
        <div className="whitespace-nowrap font-heading text-6xl font-black uppercase tracking-tighter animate-marquee">
          REAL FRUIT // DRINK BITE FINISH // PREMIUM EXPERIENCE // REAL FRUIT // DRINK BITE FINISH // PREMIUM EXPERIENCE // &nbsp;
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, i) => (
          <div 
            key={feature.title} 
            className={cn(
              "group relative flex flex-col p-12 md:p-16 border-b-8 md:border-b-0 md:border-r-8 border-black min-h-[500px] justify-center transition-all duration-300 hover:invert",
              feature.color
            )}
          >
            {feature.image && (
              <div className="absolute -top-12 -right-12 w-48 h-48 z-10 animate-spin-slow group-hover:invert pointer-events-none">
                 <Image 
                   src={feature.image} 
                   alt="Fruit Chunk" 
                   fill 
                   className="object-contain mix-blend-multiply"
                 />
              </div>
            )}
            
            <h3 className={cn("font-heading text-7xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none relative z-20", feature.textColor)}>
              {feature.title}
            </h3>
            <p className={cn("font-sans text-2xl md:text-3xl font-bold leading-tight uppercase italic relative z-20", feature.textColor)}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Marquee */}
      <div className="bg-black text-white border-t-8 border-black py-4 overflow-hidden">
        <div className="whitespace-nowrap font-heading text-6xl font-black uppercase tracking-tighter animate-marquee-reverse">
          SIP BITE FINISH // 100% NATURAL // PURE FRUIT VIBES // SIP BITE FINISH // 100% NATURAL // PURE FRUIT VIBES // &nbsp;
        </div>
      </div>
    </section>
  );
}
