import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-36 bg-brand-cream">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl md:text-5xl font-light text-primary leading-tight mb-12">
          Pour into yourself.<br />
          Restore your space.<br />
          Elevate your life.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity duration-500"
          >
            Shop on Amazon
          </a>
          <a
            href="https://www.takealot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Shop on Takealot
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
