import React, { useState, useEffect } from "react";
import { FiCoffee, FiX, FiPlus } from 'react-icons/fi'; import { motion, AnimatePresence } from "framer-motion";
import MagneticWrapper from "../animations/MagneticWrapper";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [contactHovered, setContactHovered] = useState(false);
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [sidebarHoveredIndex, setSidebarHoveredIndex] = useState<number | null>(null);

    const navLink = [
        { list: "Home", href: "/" },
        { list: "About Me", href: "/about" },
        { list: "Menu", href: "/menu" },
        { list: "Space", href: "/space" },
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        checkScreenSize();

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20) {
                setIsNavbarHidden(true);
            } else {
                setIsNavbarHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("resize", checkScreenSize);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("resize", checkScreenSize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className="font-cabinet">
            <motion.div
                animate={{ y: (isNavbarHidden && !isMobileOrTablet) ? "-100%" : "0%" }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="fixed top-0 left-0 right-0 z-50 w-full px-6 lg:px-12 py-6 lg:py-10 pointer-events-none"
            >
                <nav className="flex items-center justify-between w-full bg-transparent pointer-events-auto">
                    <a href="/" className="text-2xl lg:text-3xl font-rounded lowercase tracking-tight text-white select-none">
                        balco
                    </a>

                    <div className="hidden lg:flex items-center gap-11">
                        <div className="flex items-center gap-6">
                            {navLink.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="text-xs lg:text-sm font-light text-neutral-300 hover:text-white transition-colors overflow-hidden h-[20px] leading-[20px] flex"
                                >
                                    {link.list.toUpperCase().split("").map((char, charIndex) => (
                                        <span key={charIndex} className="relative block h-full">
                                            <motion.span
                                                className="block text-neutral-300"
                                                animate={{ y: hoveredIndex === index ? "-100%" : "0%" }}
                                                transition={{
                                                    type: "tween",
                                                    ease: [0.215, 0.61, 0.355, 1],
                                                    duration: 0.3,
                                                    delay: charIndex * 0.02
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                            <motion.span
                                                className="absolute top-full left-0 block text-white"
                                                animate={{ y: hoveredIndex === index ? "-100%" : "0%" }}
                                                transition={{
                                                    type: "tween",
                                                    ease: [0.215, 0.61, 0.355, 1],
                                                    duration: 0.3,
                                                    delay: charIndex * 0.02
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        </span>
                                    ))}
                                </a>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <MagneticWrapper>
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <a
                                        href="#visit"
                                        className="relative bg-[#1a1a1a] text-white text-[15px] px-7 py-3 rounded-full flex items-center justify-center overflow-hidden border border-neutral-800 hover:border-neutral-700 shadow-md"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white z-0"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: isHovered ? "0%" : "100%" }}
                                            transition={{
                                                type: "tween",
                                                ease: "easeInOut",
                                                duration: 0.25
                                            }}
                                            style={{
                                                left: isHovered ? "0%" : "auto"
                                            }}
                                        />
                                        <span className="relative z-10 font-light lowercase select-none mix-blend-difference flex overflow-hidden h-[22px] leading-[22px]">
                                            {"Contact Us".split("").map((char, index) => (
                                                <span key={index} className="relative block h-full">
                                                    <motion.span
                                                        className="block"
                                                        animate={{ y: isHovered ? "-100%" : "0%" }}
                                                        transition={{
                                                            type: "tween",
                                                            ease: [0.215, 0.61, 0.355, 1],
                                                            duration: 0.3,
                                                            delay: index * 0.02
                                                        }}
                                                    >
                                                        {char === " " ? "\u00A0" : char}
                                                    </motion.span>
                                                    <motion.span
                                                        className="absolute top-full left-0 block"
                                                        animate={{ y: isHovered ? "-100%" : "0%" }}
                                                        transition={{
                                                            type: "tween",
                                                            ease: [0.215, 0.61, 0.355, 1],
                                                            duration: 0.3,
                                                            delay: index * 0.02
                                                        }}
                                                    >
                                                        {char === " " ? "\u00A0" : char}
                                                    </motion.span>
                                                </span>
                                            ))}
                                        </span>
                                    </a>

                                    <div className="relative bg-[#1a1a1a] text-white w-11 h-11 rounded-full flex items-center justify-center overflow-hidden border border-neutral-800 hover:border-neutral-700 shadow-md shrink-0">
                                        <motion.div
                                            className="absolute inset-0 bg-white z-0"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: isHovered ? "0%" : "100%" }}
                                            transition={{
                                                type: "tween",
                                                ease: "easeInOut",
                                                duration: 0.25
                                            }}
                                            style={{
                                                left: isHovered ? "0%" : "auto"
                                            }}
                                        />
                                        <div className="relative z-10 flex items-center justify-center mix-blend-difference text-white">
                                            <FiCoffee size={18} />
                                        </div>
                                    </div>
                                </div>
                            </MagneticWrapper>
                        </div>
                    </div>
                </nav>
            </motion.div>

            <AnimatePresence>
                {(isMobileOrTablet || isNavbarHidden) && (
                    <motion.div
                        initial={{ x: "150%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "150%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 24, restDelta: 0.001 }}
                        className="fixed top-5 right-5 lg:top-10 lg:right-12 z-50"
                    >
                        <button
                            onClick={() => setOpen(true)}
                            className="w-14 h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] border border-neutral-800 text-white rounded-3xl flex flex-col gap-1 items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                        >
                            <span className="w-6 h-[2px] bg-white block rounded-full" />
                            <span className="w-6 h-[2px] bg-white block rounded-full" />
                            <span className="w-6 h-[2px] bg-white block rounded-full" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[450px] lg:w-[500px] bg-[#1c1c1c] z-[999] text-white p-6 lg:p-12 flex flex-col justify-between shadow-2xl font-cabinet"
                    >
                        <div className="flex justify-end w-full">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-14 h-14 bg-neutral-800 text-white rounded-3xl flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                                <FiX size={26} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 my-auto pl-2 lg:pl-6">
                            <span className="text-neutral-500 uppercase tracking-widest text-xs border-b border-white/10 pb-4 font-mono">Navigation</span>

                            {navLink.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    onMouseEnter={() => setSidebarHoveredIndex(idx)}
                                    onMouseLeave={() => setSidebarHoveredIndex(null)}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide flex items-center justify-between border-b border-white/5 pb-4 pr-4 transition-colors group"
                                >
                                    <span className="relative overflow-hidden h-[48px] sm:h-[60px] lg:h-[72px] block w-full">
                                        <motion.span
                                            className="block text-neutral-400 group-hover:text-white"
                                            animate={{ y: sidebarHoveredIndex === idx ? "-100%" : "0%" }}
                                            transition={{ type: "tween", ease: [0.215, 0.61, 0.355, 1], duration: 0.35 }}
                                        >
                                            {link.list}
                                        </motion.span>
                                        <motion.span
                                            className="absolute top-full left-0 block text-white"
                                            animate={{ y: sidebarHoveredIndex === idx ? "-100%" : "0%" }}
                                            transition={{ type: "tween", ease: [0.215, 0.61, 0.355, 1], duration: 0.35 }}
                                        >
                                            {link.list}
                                        </motion.span>
                                    </span>
                                    <FiPlus size={24} className="text-white/20 group-hover:text-white transition-colors flex-shrink-0" />
                                </a>
                            ))}

                            <a
                                href="#visit"
                                onClick={() => setOpen(false)}
                                onMouseEnter={() => setContactHovered(true)}
                                onMouseLeave={() => setContactHovered(false)}
                                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide flex items-center justify-between border-b border-white/5 pb-4 pr-4 transition-colors group"
                            >
                                <span className="relative overflow-hidden h-[48px] sm:h-[60px] lg:h-[72px] block w-full">
                                    <motion.span
                                        className="block text-neutral-400 group-hover:text-white"
                                        animate={{ y: contactHovered ? "-100%" : "0%" }}
                                        transition={{ type: "tween", ease: [0.215, 0.61, 0.355, 1], duration: 0.35 }}
                                    >
                                        Drop By
                                    </motion.span>
                                    <motion.span
                                        className="absolute top-full left-0 block text-white"
                                        animate={{ y: contactHovered ? "-100%" : "0%" }}
                                        transition={{ type: "tween", ease: [0.215, 0.61, 0.355, 1], duration: 0.35 }}
                                    >
                                        Drop By
                                    </motion.span>
                                </span>
                                <FiPlus size={24} className="text-white/20 group-hover:text-white transition-colors flex-shrink-0" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 border-t border-white/10 pt-6">
                            <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-mono">Socials</span>
                            <div className="flex gap-5 text-sm text-neutral-400">
                                <a href="https://instagram.com/balco________" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Google Maps</a>
                                <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}