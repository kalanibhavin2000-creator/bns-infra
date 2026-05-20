"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const panels = [
  {
    id: "about",
    title: "Precision Tiling Expertise",
    description:
      "Gujarat's most trusted tile application contractor for high-rise residential and commercial construction. Built on precision, delivered on time.",
    button: "About Us",
    href: "/about",
    image: "/images/tile-pasting.webp",
  },
  {
    id: "projects",
    title: "Our Projects",
    description:
      "500+ completed projects across high-rise, residential and commercial construction throughout Gujarat.",
    button: "View Portfolio",
    href: "/projects",
    image: "/images/highrise-render.webp",
  },
  {
    id: "services",
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
      {/* Background image — scales slightly on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${panel.image}')` }}
        animate={{ scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Base gradient always present */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Extra overlay that deepens on hover */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: hovered ? 0.35 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Content — pinned to bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
        {/* Description: height collapses to 0 when not hovered */}
        <motion.div
          animate={{
            maxHeight: hovered ? "200px" : "0px",
            opacity: hovered ? 1 : 0,
            marginBottom: hovered ? 20 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <p
            className="text-white/75 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {panel.description}
          </p>
        </motion.div>

        {/* Title — always visible */}
        <h2 className="font-cormorant text-4xl lg:text-5xl text-light leading-tight mb-6">
          {panel.title}
        </h2>

        {/* Button — always visible */}
        <Link
          href={panel.href}
          className="inline-block px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-200 w-fit"
        >
          {panel.button}
        </Link>
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
