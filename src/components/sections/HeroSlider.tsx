"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    category: "High-Rise",
    name: "Titanium World Tower",
    location: "Surat, Gujarat",
    image: "/images/building-highrise.jpg",
  },
  {
    id: 2,
    category: "Commercial",
    name: "Inorbit Mall Tiling",
    location: "Vadodara, Gujarat",
    image: "/images/building-commercial.jpg",
  },
  {
    id: 3,
    category: "Residential",
    name: "Green Valley Residency",
    location: "Ahmedabad, Gujarat",
    image: "/images/building-residential.jpg",
  },
  {
    id: 4,
    category: "Industrial",
    name: "Zydus Pharma Complex",
    location: "Ahmedabad, Gujarat",
    image: "/images/bns-office.jpeg",
  },
  {
    id: 5,
    category: "High-Rise",
    name: "Blue Sapphire Heights",
    location: "Surat, Gujarat",
    image: "/images/highrise-render.webp",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Main content — pt-24 keeps it below the fixed navbar */}
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center pt-20 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-cormorant text-6xl lg:text-7xl text-light leading-none tracking-tight mb-4 max-w-3xl"
            >
              {slide.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-white/60 text-sm tracking-[0.2em] uppercase mb-10"
            >
              {slide.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-light text-sm tracking-wider uppercase group"
              >
                <span className="w-10 h-px bg-gold group-hover:w-16 transition-all duration-300" />
                Explore Projects
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group"
          >
            <span
              className={`block h-0.5 transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-4 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Category tag — bottom right, above slide counter */}
      <motion.div
        key={`cat-${slide.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-16 right-8 z-10"
      >
        <span className="text-gold text-xs tracking-[0.3em] uppercase">{slide.category}</span>
      </motion.div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 font-cormorant text-white/30 text-sm tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
