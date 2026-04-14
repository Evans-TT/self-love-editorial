import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import indulgeImg from "@/assets/indulge.png";
import elevateImg from "@/assets/elevate.png";
import threeCandles from "@/assets/three-candles.png";

const products = [
  {
    name: "Indulge",
    notes: "Almond Milk, Peach & Coconut",
    description: "A warm, gourmand embrace that wraps you in comfort and sweetness.",
    image: indulgeImg,
  },
  {
    name: "Elevate",
    notes: "Musk, Sandalwood & Tonka Bean",
    description: "A grounding, woody scent designed to centre your mind and lift your spirit.",
    image: elevateImg,
  },
  {
    name: "Replenish",
    notes: "Bergamot, Grapefruit & Vetiver",
    description: "A crisp, revitalising blend that restores energy and refreshes your space.",
    image: threeCandles,
  },
];

const CollectionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="collection" className="py-24 md:py-36 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary">
            Coco-Soy Scented Candles
          </h2>
          <p className="font-sans text-sm text-foreground/50 mt-4">250g | 8.8oz</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`text-center group transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="overflow-hidden mb-8 bg-brand-sand">
        <img
          src={product.image}
          alt={`${product.name} candle`}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">{product.name}</h3>
      <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary/50 mb-3">
        {product.notes}
      </p>
      <p className="font-sans text-sm font-light text-foreground/60 max-w-xs mx-auto">
        {product.description}
      </p>
    </div>
  );
};

export default CollectionSection;
