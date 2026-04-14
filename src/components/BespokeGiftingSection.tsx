import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import boxesImg from "@/assets/boxes.png";

const BespokeGiftingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gifting" className="py-24 md:py-36 bg-brand-sand">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <img
            src={boxesImg}
            alt="Self Love Collection gift boxes"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">
            For Corporates & Events
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-tight mb-8">
            Bespoke Gifting
          </h2>
          <div className="space-y-5 font-sans text-sm md:text-base font-light leading-relaxed text-foreground/70">
            <p>
              Our bespoke gifting service was established in response to a demand from corporates for wellness gifting and intentional gifting that focuses on practical use and genuine connection.
            </p>
            <p>
              We help businesses across South Africa move beyond generic items to provide luxury gifting experiences that prioritise restoration.
            </p>
            <p>
              This can be through curated gift boxes or signature self-care products; we offer a seamless, end-to-end service. From custom branding to fulfillment, we serve as your strategic, proudly local gifting partner.
            </p>
          </div>

          <a
            href="mailto:hello@selflovecollection.co.za?subject=Bespoke Gifting Quote"
            className="inline-block mt-10 px-8 py-3 bg-primary text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity duration-500"
          >
            Request a Same-Day Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default BespokeGiftingSection;
