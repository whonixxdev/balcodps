"use client"
import { useMemo, useRef } from "react"
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion"

export interface ScrollVelocityWaveProps {
  images: string[]
  columns?: number
  parallaxDistance?: number
  waveIntensity?: number
  className?: string
}

interface ColumnProps {
  images: string[]
  index: number
  scrollYProgress: MotionValue<number>
  smoothVelocity: MotionValue<number>
  parallaxDistance: number
  waveIntensity: number
}

function GalleryColumn({
  images,
  index,
  scrollYProgress,
  smoothVelocity,
  parallaxDistance,
  waveIntensity,
}: ColumnProps) {
  const direction = index % 2 === 0 ? -1 : 1
  const baseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, direction * parallaxDistance]
  )

  const phase = index * 0.9

  const waveY = useTransform(smoothVelocity, (v) => {
    return Math.sin(phase) * v * waveIntensity
  })

  const skew = useTransform(smoothVelocity, (v) => {
    const clamped = Math.max(-20, Math.min(20, v * 0.01))
    return clamped
  })

  const y = useTransform([baseY, waveY], ([b, w]: number[]) => b + w)

  return (
    <motion.div className="scroll-wave__column" style={{ y, skewY: skew }}>
      {images.map((src, i) => (
        <div className="scroll-wave__item" key={`${index}-${i}`}>
          <img src={src} alt="" draggable={false} loading="lazy" />
        </div>
      ))}
    </motion.div>
  )
}

export default function ScrollVelocityWave({
  images,
  columns = 4,
  parallaxDistance = 220,
  waveIntensity = 0.06,
  className,
}: ScrollVelocityWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scrollVelocity = useVelocity(scrollYProgress)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
    mass: 0.5,
  })


  const columnImages = useMemo(() => {
    const grouped: string[][] = Array.from({ length: columns }, () => [])
    images.forEach((src, i) => grouped[i % columns].push(src))
    return grouped
  }, [images, columns])

  return (
    <div
      ref={containerRef}
      className={["scroll-wave", className].filter(Boolean).join(" ")}
    >
      {columnImages.map((imgs, i) => (
        <GalleryColumn
          key={i}
          images={imgs}
          index={i}
          scrollYProgress={scrollYProgress}
          smoothVelocity={smoothVelocity}
          parallaxDistance={parallaxDistance}
          waveIntensity={waveIntensity}
        />
      ))}
    </div>
  )
}