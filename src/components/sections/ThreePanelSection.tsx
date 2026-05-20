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

// Default y-offset pushes title from its top-8 anchor down to just above the button.
// Panel is min 500px; button area occupies ~96px from bottom (32px pad + 44px button + 20px gap).
// Title at top-8 (32px) + 320px ≈ 352px from top → ~148px from bottom, above the button.
const TITLE_Y_DEFAULT = 320;

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

      {/* Dark gradient — bottom 50%, always present */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
      />

      {/* Cream overlay — fades in to 90% on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#F5F3EF" }}
        animate={{ opacity: hovered ? 0.9 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      />

      {/* Category label — top-left, fades OUT on hover */}
      <motion.p
        className="absolute top-8 left-8 z-10 text-gold text-xs tracking-widest uppercase"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: DUR, ease: EASE }}
      >
        {panel.category}
      </motion.p>

      {/* Title — anchored top-8 left-8, translated DOWN in default state,
          slides UP to top-left on hover */}
      <motion.h2
        className="absolute top-8 left-8 right-8 z-10 font-cormorant text-4xl leading-tight"
        animate={{
          y: hovered ? 0 : TITLE_Y_DEFAULT,
          color: hovered ? "#1A1A1A" : "#F5F3EF",
        }}
        transition={{ duration: DUR, ease: EASE }}
      >
        {panel.title}
      </motion.h2>

      {/* Description — centered, fades in on hover */}
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

      {/* Button — always at bottom-left */}
      <div className="absolute bottom-0 left-0 p-8 z-10">
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
