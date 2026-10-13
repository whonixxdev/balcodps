// import { useState } from "react";

import Footer from "../components/layouts/Footer";
import ScrollVelocityWave from "../components/test/Scrollvelocitywave";

export default function spacePage() {
  const imageModules = import.meta.glob("../assets/gallery/*.jpg", {
    eager: true,
  });
  const galleryImages = Object.values(imageModules).map(
    (mod) => (mod as { default: string }).default,
  );

  return (
    <>
    <section className="relative z-30 py-50 bg-[#0b0b0c]">
      <div className="text-center max-w-xl mx-auto mb-12 px-6">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
          GALLERY ATMOSPHERE
        </span>
        <h2 className="text-3xl sm:text-5xl font-light text-white mt-2">
          Moments at Balco
        </h2>
      </div>

      <ScrollVelocityWave
        images={galleryImages}
        columns={4}
        parallaxDistance={200}
        waveIntensity={0.05}
      />
    </section>
  <Footer/>
    </>
  );
}
