const faqs = [
  { q: 'WHAT IS POLP?', a: 'GLAD YOU ASKED. POLP IS WHAT HAPPENS WHEN YOU LEAVE THE BEST PART OF THE FRUIT IN THE BOTTLE. 🍓' },
  { q: 'WHERE IS IT MADE?', a: 'CRAFTED WITH INTENT. LOCALLY MADE. GLOBALLY CRAVABLE. 🌍🇮🇳' },
  { q: 'IS IT VEGAN?', a: 'OF COURSE. WE BROUGHT THE FRUIT, NOT THE DAIRY.' },
  { q: 'WHY THE CHUNKS?', a: "SIPPING ON PLAIN DRINKS IN 2026? COULDN'T BE US." },
  { q: 'HOW TO JOIN?', a: 'THE REBELLION IS OPEN. BLAST US A MESSAGE ON SOCIALS OR HIT THE CONTACT FORM BELOW.' },
];

export function FAQ() {
  return (
    <section className="bg-white py-32 border-t-8 border-black">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-24">
           POLP <br /> <span className="text-polp-pink">TECH SUPPORT.</span>
        </h2>

        <div className="max-w-4xl space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="group border-b-4 border-black pb-8">
              <h3 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-polp-blue transition-colors cursor-help">
                {faq.q}
              </h3>
              <p className="font-sans text-xl md:text-2xl font-bold uppercase leading-tight opacity-0 group-hover:opacity-100 transition-all duration-300">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
