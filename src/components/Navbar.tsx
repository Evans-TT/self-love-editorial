import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-brand-cream/95 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero">
          <img src={logo} alt="Self Love Collection" className="h-8 md:h-10" />
        </a>
        <div className="hidden md:flex items-center gap-10 font-sans text-xs tracking-[0.2em] uppercase">
          <a href="#about" className="text-brand-chocolate hover:opacity-60 transition-opacity">About</a>
          <a href="#collection" className="text-brand-chocolate hover:opacity-60 transition-opacity">Collection</a>
          <a href="#gifting" className="text-brand-chocolate hover:opacity-60 transition-opacity">Gifting</a>
          <a href="#connect" className="text-brand-chocolate hover:opacity-60 transition-opacity">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
