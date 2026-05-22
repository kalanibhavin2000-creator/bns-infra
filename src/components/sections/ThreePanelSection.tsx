"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

type SanityPanelData = {
  panel1Heading?: string;
  panel1Description?: string;
  panel1ButtonText?: string;
  panel1Image?: { asset: { _ref: string } };
  panel2Heading?: string;
  panel2Description?: string;
  panel2ButtonText?: string;
  panel2Image?: { asset: { _ref: string } };
  panel3Heading?: string;
  panel3Description?: string;
  panel3ButtonText?: string;
  panel3Image?: { asset: { _ref: string } };
};

const fallbackPanels = [
  {
    id: "about",
    category: "About Us",
    title: "Precision Tiling Expertise",
    description: "Gujarat's most trusted tile application contractor for high-rise residential and commercial construction. Built on precision, delivered on time.",
    button: "About Us",
    href: "/about",
    image: "/images/tile-pasting.webp",
  },
  {
    id: "projects",
    category: "Portfolio",
    title: "Our Projects",
    description: "500+ completed projects across high-rise, residential and commercial construction throughout Gujarat and beyond.",
    button: "View Portfolio",
    href: "/projects",
    image: "/images/highrise-render.webp",
  },
  {
    id: "services",
    category: "Services",
    title: "Our Services",
    description: "Complete tile application solutions from site survey to final handover. Every surface, every scale, every deadline met.",
    button: "Explore Services",
    href: "/services",
    image: "/images/building-residential.jpg",
  },
];

type PanelConfig = {
  id: string;
  category: string;
  title: string;
  description: string;
  button: string;
  href: string;
  image: string;
};

function buildPanels(data: SanityPanelData | null): PanelConfig[] {
  if (!data) return fallbackPanels;
  return [
    {
      id: "about",
      category: "About Us",
      title: data.panel1Heading || fallbackPanels[0].title,
      description: data.panel1Description || fallbackPanels[0].description,
      button: data.panel1ButtonText || fallbackPanels[0].button,
      href: "/about",
      image: data.panel1Image ? urlFor(data.panel1Image).width(800).height(1000).url() : fallbackPanels[0].image,
    },
    {
      id: "projects",
      category: "Portfolio",
      title: data.panel2Heading || fallbackPanels[1].title,
      description: data.panel2Description || fallbackPanels[1].description,
      button: data.panel2ButtonText || fallbackPanels[1].button,
      href: "/projects",
      image: data.panel2Image ? urlFor(data.panel2Image).width(800).height(1000).url() : fallbackPanels[1].image,
    },
    {
      id: "services",
      category: "Services",
      title: data.panel3Heading || fallbackPanels[2].title,
      description: data.panel3Description || fallbackPanels[2].description,
      button: data.panel3ButtonText || fallbackPanels[2].button,
      href: "/services",
      image: data.panel3Image ? urlFor(data.panel3Image).width(800).height(1000).url() : fallbackPanels[2].image,
    },
  ];
}

const EASE = [0.4, 0, 0.2, 1] as const;
const DUR = 0.4;

function Panel({ panel }: { panel: PanelConfig }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{ minHeight: "500px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${panel.image}')` }}
      />

      {/* Bottom gradient — visible in default state */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
      />

      {/* Hover cream overlay */}
      <motion.div
        className="absolute inset-0 bg-light"
        animate={{ opacity: hovered ? 0.9 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      />

      {/* Default state layout: flex column, space-between, padding 24px / pb 40px */}
      <div
        className="absolute inset-0 flex flex-col justify-between z-10"
        style={{ padding: "24px", paddingBottom: "40px" }}
      >
        {/* TOP: category label — gold, small, uppercase, visible in default */}
        <motion.p
          className="text-gold text-xs tracking-widest uppercase"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: DUR, ease: EASE }}
        >
          {panel.category}
        </motion.p>

        {/* BOTTOM: title + button stacked with gap, never overlapping */}
        <div className="flex flex-col gap-4">
          <motion.h2
            className="font-cormorant text-2xl lg:text-3xl leading-tight text-light"
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: DUR, ease: EASE }}
            aria-hidden={hovered}
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

      {/* Hover: title at top-left in dark color */}
      <motion.h2
        className="absolute top-6 left-6 right-6 z-20 font-cormorant text-2xl lg:text-3xl leading-tight text-dark"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
        aria-hidden={!hovered}
      >
        {panel.title}
      </motion.h2>

      {/* Hover: description centered */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-10 z-10 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      >
        <p
          className="text-center text-sm leading-relaxed max-w-[240px] text-dark font-dmsans"
        >
          {panel.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ThreePanelSection({ panelData = null }: { panelData?: SanityPanelData | null }) {
  const panels = buildPanels(panelData);

  return (
    <section className="flex flex-col md:flex-row w-full">
      {panels.map((panel) => (
        <Panel key={panel.id} panel={panel} />
      ))}
    </section>
  );
}
