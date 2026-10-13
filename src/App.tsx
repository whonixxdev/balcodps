import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/animations/HeroSection";
import ScrollSequence from "./components/animations/ScrollSequence";
// import ScrollVelocityWave from "./components/test/Scrollvelocitywave";
import MenuSection from "./components/test/MenuSection2";
import Footer from "./components/layouts/Footer";
import TextScrollWordReveal from "./components/ui/textHover";
import Menu from "./menu/page";
import SpacePage from './space/page'


// const imageModules = import.meta.glob('./assets/gallery/*.jpg', { eager: true });
// const galleryImages = Object.values(imageModules).map(
//   (mod) => (mod as { default: string }).default
// );

function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollSequence />
      <MenuSection />

      {/* <section className="relative z-30 py-24 bg-[#0b0b0c]">
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
      </section> */}
      <TextScrollWordReveal />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <div className="bg-[#121212] text-white font-cabinet no-scrollbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/space" element={<SpacePage/>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;