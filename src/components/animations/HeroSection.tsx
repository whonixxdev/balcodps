import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coffeeImg from "../../assets/img/Coffee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          scale: 0.85,
          borderRadius: "20px",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between p-6 lg:p-12 z-0 font-cabinet"
    >
      <div
        ref={heroBgRef}
        className="absolute inset-0 z-0 overflow-hidden origin-center"
      >
        <img
          src={coffeeImg}
          alt="Balco Coffee"
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 pt-24 lg:pt-28 flex items-start justify-between gap-4">
        <div className="max-w-xs sm:max-w-sm">
          <p className="text-xs lg:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400 mb-2">
            Welcome to Balco
          </p>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light leading-snug tracking-wide text-neutral-200">
            Where Specialty Coffee Meets Mindful Space.
          </h2>
        </div>

        <div className="text-right hidden sm:block">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono tracking-wider text-neutral-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open Daily • 08:00 – 22:00
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-end justify-between gap-6 pb-4">
        <div className="max-w-xl">
          <span className="text-xs lg:text-sm uppercase tracking-[0.3em] font-mono text-neutral-400 block mb-1">
            Artisanal Roastery & Brew Bar
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extralight tracking-tight lowercase text-white leading-none">
            <span className="font-rounded">balco</span> coffee
          </h1>
        </div>

        <div className="text-left sm:text-right max-w-xs">
          <p className="text-sm font-light text-neutral-300 leading-relaxed mb-4">
            Jl. Gajah Mada No.28, Dauh Puri Kaja, Kec. Denpasar Utara, Kota
            Denpasar, Bali 80232
          </p>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-white hover:tracking-[0.2em] transition-all duration-300"
          >
            Explore Menu &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}