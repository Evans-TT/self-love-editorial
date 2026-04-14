import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img1 from "@/assets/lifestyle-indulge.png";
import img2 from "@/assets/lifestyle-elevate.png";
import img3 from "@/assets/collection-styled.png";
import img4 from "@/assets/duo-candles.png";

const images = [img1, img2, img3, img4];

const SocialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="connect" className="py-24 md:py-36 bg-brand-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">
          @selflovecollection_za
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-primary mb-16">
          Follow Our Journey
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/selflovecollection_za/"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden group"
            >
              <img
                src={img}
                alt="Self Love Collection lifestyle"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
          ))}
        </div>

        <a
          href="https://instagram.com/selflovecollection_za/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 font-sans text-xs tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default SocialSection;
