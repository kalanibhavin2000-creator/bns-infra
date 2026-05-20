"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const panels = [
  {
    id: "about",
    category: "About Us",
    title: "Precision Tiling Expertise",
    description:
      "Gujarat's most trusted tile application contractor for high-rise residential and commercial construction. Built on precision, delivered on time.",
    button: "About Us",
    href: "/about",
    image: "/images/tile-pasting.webp",
  },
  {
    id: "projects",
    category: "Portfolio",
    title: "Our Projects",
    description:
      "500+ completed projects across high-rise, residential and commercial construction throughout Gujarat and beyond.",
    button: "View Portfolio",
    href: "/projects",
    image: "/images/highrise-render.webp",
  },
  {
    id: "services",
    category: "Services",
    title: "Our Services",
    description:
      "Complete tile application solutions from site survey to final handover. Every surface, every scale, every deadline met.",
    button: "Explore Services",
    href: "/services",
    image: "/images/building-residential.jpg",
  },
];

const EASE = [0.4, 0, 0.2, 1] as const;
const DUR = 0.4;

function Panel({ panel }: { panel: (typeof panels)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{ minHeight: "500px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${panel.image}')` }}
      />

      {/* Dark gradient covering bottom 50% — always present */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
      />

      {/* Cream overlay — fades in to 90% opacity on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#F5F3EF" }}
        animate={{ opacity: hovered ? 0.9 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      />

      {/* Category label — always top-left in gold */}
      <p className="absolute top-8 left-8 z-10 text-gold text-xs tracking-widest uppercase">
        {panel.category}
      </p>

      {/* Description — centered in panel, fades in on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-10 z-10 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      >
        <p
          className="text-center text-sm leading-relaxed max-w-[240px]"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-dm-sans)" }}
        >
          {panel.description}
        </p>
      </motion.div>

      {/* Bottom block — title + button, always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <motion.h2
          className="font-cormorant text-4xl leading-tight mb-5"
          animate={{ color: hovered ? "#1A1A1A" : "#F5F3EF" }}
          transition={{ duration: DUR, ease: EASE }}
        >
          {panel.title}
        </motion.h2>

        <motion.div
          className="inline-block border w-fit"
          animate={{
            backgroundColor: hovered ? "#1A1A1A" : "transparent",
            borderColor: hovered ? "#1A1A1A" : "#F5F3EF",
          }}
          transition={{ duration: DUR, ease: EASE }}
        >
          <Link
            href={panel.href}
            className="block px-6 py-3 text-xs tracking-[0.2em] uppercase text-white"
          >
            {panel.button}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ThreePanelSection() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {panels.map((panel) => (
        <Panel key={panel.id} panel={panel} />
      ))}
    </section>
  );
}
