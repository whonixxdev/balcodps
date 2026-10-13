import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import foto1 from "../../assets/img/foto1.jpg";
import foto2 from "../../assets/img/foto2.jpg";
import foto3 from "../../assets/img/foto3.jpg";
import foto4 from "../../assets/img/foto4.jpg";
import foto5 from "../../assets/img/foto5.jpg";

gsap.registerPlugin(ScrollTrigger);

const menuImages = [
  foto1, foto2, foto3, foto4, foto5,
  foto1, foto2, foto3, foto4, foto5,
];

const menuList = [
  { category: "WHITE COFFEE", name: "Cafe Latte", price: "27 / 30" },
  { category: "WHITE COFFEE", name: "Cappuccino", price: "27 / 30" },
  { category: "WHITE COFFEE", name: "Piccolo", price: "27" },
  { category: "WHITE COFFEE", name: "Mochaccino", price: "28 / 32" },
  { category: "BLACK COFFEE", name: "Espresso", price: "22" },
  { category: "BLACK COFFEE", name: "Americano", price: "22 / 25" },
  { category: "BLACK COFFEE", name: "Kuro Honey Lemon", price: "28" },
  { category: "ESSENTIALS", name: "Balco Einspanner", price: "32" },
  { category: "ESSENTIALS", name: "Le Mont Balc", price: "32" },
  { category: "ESSENTIALS", name: "Overnight Latte", price: "35" },
];

export default function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".menu-card");
      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.to(
          card,
          {
            yPercent: -100 * index,
            rotation: index % 2 === 0 ? 2 : -2,
            ease: "power2.out",
            duration: 1,
          },
          index * 0.7
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 w-full h-screen bg-[#121212] font-cabinet overflow-hidden text-white flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row justify-between items-center gap-10 py-12">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 pr-0 lg:pr-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              BEST SELLER MENU
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mt-1 text-white font-rounded">
              balco
            </h1>
          </div>

          <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-neutral-700">
            {menuList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b border-white/10 pb-2.5 group hover:border-white/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-light text-neutral-200 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                </div>
                <span className="text-sm font-mono text-neutral-400">
                  {item.price}k
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
            Sip slowly, stay fully present. Setiap cangkir menyajikan biji kopi
            pilihan dengan racikan terbaik untuk menemani momen santai Anda.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-[55vh] sm:h-[65vh] relative flex items-center justify-center overflow-hidden">
          <div className="relative w-[280px] sm:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            {menuImages.map((src, idx) => (
              <div
                key={idx}
                className="menu-card absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl origin-bottom"
                style={{
                  zIndex: idx + 1,
                  transform: idx === 0 ? "none" : "translateY(100%)",
                }}
              >
                <img
                  src={src}
                  alt={`Balco Menu ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 right-4 text-[10px] font-mono text-white/80 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                  {idx + 1} / 10
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}