import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import foto6 from "../../assets/gallery/foto6.jpg";
import foto7 from "../../assets/gallery/foto7.jpg";
import foto14 from "../../assets/gallery/foto14.jpg";
import foto15 from "../../assets/gallery/foto15.jpg";
import foto12 from "../../assets/gallery/foto12.jpg";
import foto5 from "../../assets/gallery/foto5.jpg";

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
}

interface MenuCategory {
  category: string;
  hasHotIceHeader?: boolean;
  image: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "White Coffee",
    hasHotIceHeader: true,
    image: foto6,
    items: [
      { name: "Cafe Latte", price: "27 / 30" },
      { name: "Cappuccino", price: "27 / 30" },
      { name: "Piccolo", price: "27" },
      { name: "Split", desc: "White + Espresso", price: "35" },
      { name: "Mochaccino", price: "28 / 32" },
    ],
  },
  {
    category: "Black Coffee",
    hasHotIceHeader: true,
    image: foto7,
    items: [
      { name: "Espresso", price: "22" },
      { name: "Americano", price: "22 / 25" },
      { name: "Kuro Honey Lemon", desc: "espresso, sparkling honey lemon", price: "28" },
    ],
  },
  {
    category: "Essentials",
    hasHotIceHeader: true,
    image: foto14,
    items: [
      { name: "Daydream", desc: "espresso, creamy vanilla butterscotch", price: "32" },
      { name: "Balco Einspanner", desc: "cafe latte with cream on top", price: "32" },
      { name: "Le Mont Balc", desc: "espresso, lemon, cream on top", price: "32" },
      { name: "Overnight Latte", desc: "espresso, creamy peanut butter", price: "35" },
      { name: "Flavored Latte", desc: "salted, vanilla, butterscotch, gula aren", price: "28 / 32" },
    ],
  },
  {
    category: "Others",
    hasHotIceHeader: true,
    image: foto15,
    items: [
      { name: "Matcha", price: "25 / 28" },
      { name: "Chocolate", price: "25 / 28" },
      { name: "Midori Cloud", desc: "pistachio soda cream", price: "32" },
      { name: "Spark", desc: "lemon / lychee soda", price: "25" },
      { name: "Flavored T", desc: "lemon / lychee tea", price: "20 / 25" },
    ],
  },
  {
    category: "Pastry",
    image: foto12,
    items: [
      { name: "Egg Tart", price: "18" },
      { name: "Cookies Oat & Raisin", price: "18" },
      { name: "Cookies Chocolat", price: "22" },
      { name: "Banana Bread", price: "25" },
      { name: "Pain au Raisin", price: "25" },
      { name: "Pain au Chocolat", price: "28" },
    ],
  },
  {
    category: "Snack",
    image: foto5,
    items: [
      { name: "French Fries", desc: "with balco dipping sauce", price: "25" },
    ],
  },
];

export default function MenuSection() {
  const centerTextRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string>(menuData[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = centerTextRef.current;
      if (!container) return;

      const allTextElements = container.children;

      gsap.fromTo(
        allTextElements,
        {
          opacity: 0,
          y: (i) => (i === 1 ? 30 : 20),
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, centerTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-30 pt-40 pb-24 bg-[#0b0b0c] text-white font-cabinet">
      <div
        ref={centerTextRef}
        className="text-center max-w-3xl mx-auto mb-24 px-6 space-y-3"
      >
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-100 leading-snug tracking-tight">
          Take a moment. Have a coffee.
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-300 leading-snug tracking-tight">
          Slow down, stay awhile, and enjoy the little things.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2 flex flex-col pt-8">
          <h1 className="text-6xl sm:text-8xl font-normal tracking-tight mb-12 lowercase text-white">
            balco
          </h1>

          <div className="space-y-16">
            {menuData.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-30% 0px -30% 0px" }}
                onViewportEnter={() => setActiveImage(cat.image)}
                className="flex flex-col transition-opacity duration-300"
              >
                <div className="flex justify-between items-baseline border-b border-white/20 pb-2 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
                    {cat.category}
                  </h2>
                  {cat.hasHotIceHeader && (
                    <span className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
                      H / I
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div className="flex flex-col">
                        <span className="text-base sm:text-lg font-normal text-neutral-200">
                          {item.name}
                        </span>
                        {item.desc && (
                          <span className="text-xs text-neutral-500 font-light italic">
                            [{item.desc}]
                          </span>
                        )}
                      </div>
                      <span className="text-base sm:text-lg font-mono text-neutral-300 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[450px] sm:h-[600px] lg:h-[calc(100vh-8rem)] lg:sticky lg:top-24 flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt="Balco Coffee Menu"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}