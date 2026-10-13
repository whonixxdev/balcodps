import React from "react";

const navLink = [
  { list: "Home", href: "/" },
  { list: "About Me", href: "/about" },
  { list: "Menu", href: "/menu" },
  { list: "Space", href: "/space" },
];

export default function Footer() {
  return (
    <footer className="relative z-30 w-full bg-white text-black font-cabinet pt-20 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        
        {/* Kolom 1: Logo & Alamat */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-6xl sm:text-7xl font-normal lowercase tracking-tight font-rounded text-black">
            balco
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Jl. Gajah Mada No.28, Dauh Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80232
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="flex flex-col space-y-3 sm:pl-30">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
            Navigation
          </h3>
          <ul className="space-y-2">
            {navLink.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-base text-neutral-800 hover:text-black transition-colors"
                >
                  {item.list}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Maps */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
            Maps
          </h3>
          <div>
            <a
              href="https://www.google.com/maps/place/Balco:+Small+Coffee+Shop+%7C+Dps/@-8.6557523,115.2150939,29a,75y,358.56h,77.32t/data=!3m7!1e1!3m5!1sRogYozsgsxPJn2TOQYrRcg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.676642440206066%26panoid%3DRogYozsgsxPJn2TOQYrRcg%26yaw%3D358.5597976080578!7i16384!8i8192!4m6!3m5!1s0x2dd241003678eeed:0x1b77f24747c01b34!8m2!3d-8.6556084!4d115.2150581!16s%2Fg%2F11ytq6x5kr?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base text-neutral-800 hover:text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-all"
            >
              Open maps... ↗
            </a>
          </div>
        </div>

        {/* Kolom 4: Contact & Socials */}
        <div className="flex flex-col space-y-6 lg:items-end">
          <div className="flex flex-col space-y-3 lg:text-right">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
              Contact
            </h3>
            <a
              href="mailto:hello@balcocoffee.com"
              className="text-base text-neutral-800 hover:text-black transition-colors"
            >
              hello@balcocoffee.com
            </a>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                Socials
              </h4>
              <div className="flex items-center space-x-5 lg:justify-end text-neutral-800">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-2.901 2.879 2.896 2.896 0 01-2.896-2.896 2.896 2.896 0 012.896-2.896c.287 0 .56.043.818.122v-3.521a6.353 6.353 0 00-.818-.053 6.338 6.338 0 00-6.337 6.338 6.338 6.338 0 006.337 6.338 6.338 6.338 0 006.338-6.338V9.117a8.212 8.212 0 004.818 1.547V7.202a4.832 4.832 0 01-1.04-.516z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-black transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200 px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 sm:space-y-0 font-cabinet">
        <p>© {new Date().getFullYear()} BALCO. ALL RIGHTS RESERVED.</p>
        <p>BUILD BY RADEA</p>
        <p className="font-mono text-[11px] uppercase tracking-wider">GAJAH MADA · DENPASAR · BALI</p>
      </div>
    </footer>
  );
}