import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-6 relative overflow-hidden border-t-8 border-white">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <span className="font-heading text-[25vw] font-black uppercase tracking-[calc(-0.05em)] leading-none hover:text-polp-green transition-colors cursor-default select-none">
            POLP
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl text-left border-t-4 border-white pt-12">
            <div className="space-y-6">
              <h4 className="font-heading text-4xl uppercase tracking-tighter text-polp-pink">Social</h4>
              <nav className="flex flex-col gap-2 font-sans text-2xl font-bold uppercase italic">
                <Link href="#" className="hover:bg-polp-blue inline-block w-fit px-2">Instagram</Link>
                <Link href="#" className="hover:bg-polp-green hover:text-black inline-block w-fit px-2">TikTok</Link>
                <Link href="#" className="hover:bg-polp-yellow hover:text-black inline-block w-fit px-2">Facebook</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading text-4xl uppercase tracking-tighter text-polp-green">Contact</h4>
              <p className="font-sans text-2xl font-black uppercase">
                message.polp@gmail.com<br />
                POPLERS // ASIA
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 border-white/20 pt-8">
          <p className="font-mono text-sm font-bold opacity-40 uppercase">
            © {new Date().getFullYear()} POLP // THE NEW RULE.
          </p>
          <div className="flex items-center gap-4 font-heading text-2xl tracking-tighter uppercase italic">
             <span className="bg-polp-pink px-2">POLP TECH v4.0.2</span>
             <span className="bg-white text-black px-2">NO LIMITS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
