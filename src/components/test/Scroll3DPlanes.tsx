import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface Scroll3DPlanesProps {
  images: string[];
}

interface CardProps {
  src: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  smoothVelocity: MotionValue<number>;
}

function Card({
  src,
  index,
  total,
  scrollYProgress,
  smoothVelocity,
}: CardProps) {
  const cardSpacing = 240;

  const baseX = useTransform(
    scrollYProgress,
    [0, 1],
    [index * cardSpacing + 300, (index - total) * cardSpacing - 300]
  );

  const baseY = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 80 + 150, (index - total) * 80 - 350]
  );

  const velocityWave = useTransform(smoothVelocity, (v) => {
    return Math.sin(index * 0.6) * v * 0.1;
  });

  const velocitySkew = useTransform(smoothVelocity, (v) => {
    return Math.max(-12, Math.min(12, v * 0.015));
  });

  const x = baseX;
  const y = useTransform([baseY, velocityWave], ([by, vw]: number[]) => by + vw);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[240px] sm:w-[280px] h-[330px] sm:h-[380px] -ml-[120px] sm:-ml-[140px] -mt-[165px] sm:-mt-[190px] origin-center select-none"
      style={{
        x,
        y,
        skewY: velocitySkew,
        zIndex: index,
      }}
    >
      <div className="text-[11px] font-mono text-neutral-400 mb-1.5 font-light tracking-wider">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
        <img
          src={src}
          alt={`Balco Collection ${index + 1}`}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

export default function Scroll3DPlanes({ images }: Scroll3DPlanesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 35,
    stiffness: 250,
    mass: 0.2,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#0b0b0c] text-white font-cabinet"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-10 left-10 z-30 pointer-events-none">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none uppercase">
            HERITAGE FW25/26
            <br />
            COLLECTION{" "}
            <span className="text-xl sm:text-2xl font-mono align-super font-normal text-neutral-400">
              ({images.length})
            </span>
          </h1>
        </div>

        <div className="relative w-full h-full">
          {images.map((src, i) => (
            <Card
              key={i}
              src={src}
              index={i}
              total={images.length}
              scrollYProgress={scrollYProgress}
              smoothVelocity={smoothVelocity}
            />
          ))}
        </div>

        <div className="absolute bottom-10 right-10 z-30 text-[10px] font-mono tracking-widest text-neutral-400 uppercase pointer-events-none">
          SCROLL TO SURF
        </div>
      </div>
    </div>
  );
}