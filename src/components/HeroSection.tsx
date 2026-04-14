import heroImg from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Self Love Collection candle in a warm living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-espresso/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-cream/80 mb-6 fade-in">
          Self-Love Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-brand-cream leading-tight mb-6 fade-in-delay-1">
          The Art of<br />Intentional Living
        </h1>
        <p className="font-sans text-sm md:text-base font-light text-brand-cream/80 mb-12 tracking-wide fade-in-delay-2">
          Elevate your mind, body, and home through scent.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-delay-3">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-brand-cream/60 text-brand-cream font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-cream hover:text-brand-espresso transition-all duration-500"
          >
            Now Available on Amazon
          </a>
          <a
            href="https://www.takealot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-brand-cream/60 text-brand-cream font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-cream hover:text-brand-espresso transition-all duration-500"
          >
            Shop on Takealot
          </a>
        </div>

        <a
          href="#collection"
          className="inline-block mt-16 font-sans text-xs tracking-[0.2em] uppercase text-brand-cream/60 hover:text-brand-cream transition-colors border-b border-brand-cream/30 pb-1"
        >
          Explore the Collection
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
