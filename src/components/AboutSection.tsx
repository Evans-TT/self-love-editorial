import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import lifestyleImg from "@/assets/lifestyle-indulge.png";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-36 bg-brand-cream">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="order-2 md:order-1">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">
            Our Purpose
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-tight mb-8">
            With Love,<br />For Love
          </h2>
          <div className="space-y-5 font-sans text-sm md:text-base font-light leading-relaxed text-foreground/70">
            <p>
              Founded by Samukelisiwe, an aromatherapist and creative entrepreneur who wanted a holistic and resonant approach to beauty and wellness offerings for the local African market.
            </p>
            <p>
              We are committed to integrating professional health and skincare training with the principles of scent therapy to offer daily rest, restoration and holistic self-care. Every product is made for elevating your mind, body, and home.
            </p>
            <p>
              When you invest to pour back into yourself, you are replenishing your cup to show up better for your work, your community, and your life.
            </p>
            <p className="font-serif text-lg md:text-xl text-primary italic">
              And that is the art of intentional living.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={lifestyleImg}
            alt="Indulge candle in a luxury setting"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
