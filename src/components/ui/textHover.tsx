"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Fragment, useRef } from "react";
import fotoSection from "../../assets/gallery/fotoSection.jpg";

const STATEMENT =
  "Every cup is crafted with intention. Take a moment, pause, and savor the art of mindful coffee.";
const START_OPACITY = 0.15;

// Animation completes around 70% (0.55 + 0.15) of total scroll progress
const SPREAD = 0.55; 
const WORD_DURATION = 0.15;

interface WordProgressRange {
  start: number;
  end: number;
}

function getWordProgressRange(
  index: number,
  count: number
): WordProgressRange {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;
  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  };
}

function getWordOpacity(
  progress: number,
  { start, end }: WordProgressRange,
  startOpacity = START_OPACITY
): number {
  if (progress <= start) return startOpacity;
  if (progress >= end) return 1;

  const wordProgress = (progress - start) / (end - start);
  return startOpacity + (1 - startOpacity) * wordProgress;
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
}) {
  const range = getWordProgressRange(index, count);
  const opacity = useTransform(progress, (latest) =>
    getWordOpacity(latest, range)
  );

  return (
    <motion.span
      aria-hidden="true"
      style={reducedMotion ? undefined : { opacity }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export default function TextScrollWordReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const words = STATEMENT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white pt-20 pb-28 border-t border-neutral-900"
    >
      {/* 1. Scroll-reveal Text Section with 250vh height to hold the pinned text */}
      <div className="relative h-[250vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 sm:px-12">
          <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-6">
              MINDFUL COFFEE EXPERIENCE
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-white max-w-3xl">
              {words.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                  <Word
                    progress={scrollYProgress}
                    index={index}
                    count={words.length}
                    reducedMotion={Boolean(reducedMotion)}
                  >
                    {word}
                  </Word>
                  {index < words.length - 1 ? " " : null}
                </Fragment>
              ))}
            </h2>
          </div>
        </div>
      </div>

      {/* 2. Image and Closing Content (Appears smoothly after text finishes) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pt-16 text-center flex flex-col items-center space-y-8">
        
        {/* Center Image with 30px Radius */}
        <div className="w-full overflow-hidden rounded-[30px] shadow-2xl border border-neutral-800">
          <img
            src={fotoSection}
            alt="Balco Coffee Experience"
            className="w-full h-[380px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Closing Headline and Description */}
        <div className="max-w-2xl mx-auto space-y-3 pt-4">
          <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
            Enjoy Every Single Sip
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Thank you for being part of the Balco story. We invite you to sit back, enjoy our finest coffee brews, and discover your moment of stillness.
          </p>
        </div>

      </div>
    </section>
  );
}