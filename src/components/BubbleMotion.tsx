import Image from 'next/image';
import { cn } from '@/lib/utils';

export function TheBubble() {
  return (
    <section className="bg-polp-blue text-white py-32 border-t-8 border-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="font-heading text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] italic">
              SIP THE DRINK. <br /> <span className="text-polp-yellow underline decoration-8">BITE THE FRUIT.</span>
            </h2>
            <p className="font-sans text-3xl md:text-5xl font-black uppercase leading-tight italic bg-black text-white inline-block px-4 py-2 border-4 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
              DRINK. BITE. FINISH.
            </p>
            <div className="font-sans text-xl md:text-2xl font-bold max-w-xl space-y-6 normal-case opacity-90">
              <p>
                POLP isn&apos;t just another beverage. It&apos;s a complete fruit experience designed for those who want more than just a drink. 
              </p>
              <p>
                Every bottle contains real, visible fruit chunks suspended in a refreshing blend. We&apos;ve transformed the act of drinking into a multi-sensory journey—combining premium refreshment with the satisfying texture of real fruit.
              </p>
              <p className="font-black uppercase italic text-polp-yellow">
                Inspired by modern Asian luxury and clean FMCG design.
              </p>
            </div>
          </div>

          <div className="relative">
             <div className="relative w-full aspect-square border-8 border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                    <Image 
                      src="/images/4.png"
                      alt="Visible Fruit Chunk"
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                
                {/* Minimalist Texture Label */}
                <div className="absolute top-8 left-8 bg-black text-white px-4 py-1 font-heading text-2xl uppercase -rotate-2 z-10">
                  MACRO TEXTURE
                </div>

                <div className="absolute inset-0 bg-polp-yellow/5 pointer-events-none" />
             </div>
             {/* Floating Label */}
             <div className="absolute -bottom-12 -right-4 md:-bottom-8 md:-left-8 bg-polp-green text-black px-8 py-6 border-4 border-black font-heading text-4xl md:text-5xl font-black uppercase -rotate-3 z-20 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center">
                <span>REAL CHUNKS</span>
                <span className="text-2xl md:text-3xl bg-black text-white px-2 mt-1">100% NATURAL</span>
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none">
         <span className="font-heading text-[30vw] font-black uppercase leading-none">
           FRUIT
         </span>
      </div>
    </section>
  );
}
export function PolpInMotion() {
  const motionImages = ['/images/5.png', '/images/6.png', '/images/2.png', '/images/3.png'];

  return (
    <section className="bg-white py-0 border-t-8 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {motionImages.map((src, i) => (
          <div key={i} className="aspect-square relative border-r-8 border-b-8 border-black group overflow-hidden bg-polp-black">
            <Image 
              src={src}
              alt="POLP Motion"
              fill
              className="object-contain p-8 group-hover:scale-150 transition-all duration-300 group-hover:rotate-12"
            />
...

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
               <span className="font-heading text-4xl text-white font-black uppercase tracking-tighter">
                 INSTANT SNAP 00{i}
               </span>
            </div>
            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 bg-polp-pink/30 mix-blend-screen opacity-0 group-hover:opacity-100 pointer-events-none animate-glitch" />
          </div>
        ))}
      </div>
      
      {/* Bottom Ticker */}
      <div className="bg-polp-yellow border-t-8 border-black py-6 overflow-hidden">
        <div className="whitespace-nowrap font-heading text-7xl font-black uppercase tracking-tighter animate-marquee-reverse">
          POLP IN MOTION // NO FLAT VIBES // FEEL THE SNAP // REBEL POLP // POLP IN MOTION // NO FLAT VIBES // FEEL THE SNAP // REBEL POLP // &nbsp;
        </div>
      </div>
    </section>
  );
}
