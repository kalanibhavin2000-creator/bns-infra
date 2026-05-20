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
      "500+ completed projects across high-rise, residential and commercial construction throughout Gujarat.",
    button: "View Portfolio",
    href: "/projects",
    image: "/images/highrise-render.webp",
  },
  {
    id: "services",
    category: "Services",
    title: "Our Services",
    description:
      "Complete tile application solutions from site survey to final handover. Every surface, every scale.",
    button: "Explore Services",
    href: "/services",
    image: "/images/building-residential.jpg",
  },
];

function Panel({ panel }: { panel: (typeof panels)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{ minHeight: "500px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image with scale on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${panel.image}')` }}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

      {/* Extra overlay that deepens on hover */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: hovered ? 0.3 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
        {/* Category label — top left */}
        <p className="text-gold text-xs tracking-[0.3em] uppercase">{panel.category}</p>

        {/* Bottom block */}
        <div>
          {/* Description fades in on hover, sits above button */}
          <motion.p
            className="text-white/75 text-sm leading-relaxed mb-5 max-w-xs"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {panel.description}
          </motion.p>

          {/* Title */}
          <h2 className="font-cormorant text-5xl lg:text-6xl text-light leading-none mb-6">
            {panel.title}
          </h2>

          {/* Button */}
          <Link
            href={panel.href}
            className="inline-block px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-200"
          >
            {panel.button}
          </Link>
        </div>
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
