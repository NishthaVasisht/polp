'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'History', href: '#history' },
  { name: 'Polpers', href: '#polpers' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-2 md:px-12 md:py-3 flex items-center justify-between border-b-4',
        isScrolled ? 'bg-black text-white border-white' : 'bg-white text-black border-black'
      )}
    >
      <Link href="/" className="flex items-center group relative z-50">
        <span className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter hover:animate-glitch">
          POLP
        </span>
      </Link>


      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-heading text-3xl uppercase tracking-tighter transition-all duration-200 hover:bg-polp-green hover:text-black px-4 py-2"
          >
            {link.name}
          </Link>
        ))}
        <Button 
          disabled
          className={cn(
            "rounded-none font-heading text-3xl px-10 py-8 uppercase tracking-tighter transition-all duration-200 border-4 cursor-not-allowed",
            isScrolled ? "bg-white/50 text-black/50 border-white/50" : "bg-black/50 text-white/50 border-black/50"
          )}
        >
          Coming Soon
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden relative z-50">
        <Sheet>
          <SheetTrigger render={
            <Button variant="ghost" size="icon" className="p-0 hover:bg-transparent">
              <Menu className="h-12 w-12" />
            </Button>
          } />
          <SheetContent side="right" className="w-full bg-polp-yellow text-black border-none flex flex-col items-center justify-center p-0">
             <div className="absolute top-6 right-6">
                {/* Custom Close button could go here or use default SheetClose */}
             </div>
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-heading text-7xl uppercase tracking-tighter hover:bg-black hover:text-white px-8 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button disabled className="mt-12 bg-black/50 text-white/50 rounded-none font-heading text-5xl px-16 py-12 uppercase tracking-tighter border-8 border-black/50 cursor-not-allowed">
                Coming Soon
              </Button>
            </nav>
            
            <div className="absolute bottom-12">
               <span className="font-heading text-9xl font-black uppercase tracking-tighter">
                 POLP
               </span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
