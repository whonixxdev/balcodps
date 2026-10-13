import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import foto1 from '../../assets/img/foto1.jpg';
import foto2 from '../../assets/img/foto2.jpg';
import foto3 from '../../assets/img/foto3.jpg';
import foto4 from '../../assets/img/foto4.jpg';
import foto5 from '../../assets/img/foto5.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [foto1, foto2, foto3, foto4, foto5];

export default function ScrollSequence() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const section2ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const lastCard = lastCardRef.current;
      const section2Content = section2ContentRef.current;

      if (!track || !lastCard || !section2Content) return;

      const getScrollAmount = () => {
        const lastCardOffset = lastCard.offsetLeft;
        const lastCardWidth = lastCard.offsetWidth;
        const centerPosition = (window.innerWidth - lastCardWidth) / 2;
        return lastCardOffset - centerPosition;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount() + window.innerHeight * 4}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        duration: 3,
      });

      const scaleX = () => window.innerWidth / lastCard.offsetWidth;
      const scaleY = () => window.innerHeight / lastCard.offsetHeight;
      const maxScale = () => Math.max(scaleX(), scaleY());

      tl.to(lastCard, {
        scale: maxScale,
        borderRadius: '0px',
        borderWidth: '0px',
        zIndex: 50,
        duration: 2.5,
        ease: 'power2.inOut',
      });

      const allTextElements = section2Content.children;

      tl.fromTo(
        allTextElements,
        {
          opacity: 0,
          y: (i) => (i === 1 ? 30 : i === 3 ? 15 : 20),
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1.5,
          ease: 'power3.out',
        },
        '+=0.2'
      );

      tl.to({}, { duration: 1 });

      tl.to(section2Content, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.in',
      });

      tl.to(
        lastCard,
        {
          scale: 1,
          borderRadius: '20px',
          borderWidth: '1px',
          duration: 1.5,
          ease: 'power2.inOut',
        },
        '<'
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={triggerRef}
        className="relative w-full h-screen overflow-hidden bg-[#121212] z-20 font-cabinet"
      >
        <div
          ref={trackRef}
          className="flex items-center h-full gap-6 sm:gap-10 pl-6 sm:pl-12 pr-[20vw] w-max"
        >
          <div className="flex flex-col justify-center max-w-xs sm:max-w-sm mr-4 sm:mr-8 shrink-0">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 mb-2">
              Visual Journey
            </span>
            <h2 className="text-xl sm:text-3xl font-light text-neutral-200 leading-tight">
              Crafted with passion in every detail.
            </h2>
          </div>

          {images.map((img, idx) => {
            const isLast = idx === images.length - 1;
            if (isLast) {
              return (
                <div
                  key={idx}
                  ref={lastCardRef}
                  className="relative shrink-0 w-[80vw] sm:w-[60vw] max-w-[800px] aspect-[16/9] rounded-[20px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl origin-center"
                >
                  <img
                    src={img}
                    alt="Balco Coffee Interior Space"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />

                  <div
                    ref={section2ContentRef}
                    className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white pointer-events-none"
                  >
                    <div className="max-w-[360px] sm:max-w-[420px] flex flex-col items-start space-y-3 sm:space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300">
                        THE SPACE
                      </span>

                      <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-light leading-[1.18] text-neutral-100 tracking-tight">
                        A Small Space.
                        <br />
                        Made for Slow Moments.
                      </h2>

                      <p className="text-xs sm:text-sm font-light text-neutral-300 leading-[1.65] max-w-[380px]">
                        Balco is a small coffee space in the heart of Gajah
                        Mada, Denpasar — created for good coffee, quiet
                        conversations, and moments worth slowing down for.
                      </p>
                    </div>

                    <div className="flex items-end justify-between w-full pt-4 pointer-events-auto">
                      <a
                        href="#visit"
                        className="group inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.14em] text-white border-b border-white/40 pb-0.5 hover:border-white transition-all duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          VISIT BALCO &rarr;
                        </span>
                      </a>

                      <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300 drop-shadow-md">
                        GAJAH MADA &middot; DENPASAR &middot; BALI
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="relative shrink-0 w-[80vw] sm:w-[60vw] max-w-[800px] aspect-[16/9] rounded-[20px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl"
              >
                <img
                  src={img}
                  alt={`Balco Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}