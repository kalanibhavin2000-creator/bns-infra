"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = ["All", "High-Rise", "Residential", "Commercial", "Industrial"] as const;
type Category = (typeof categories)[number];

const allProjects = [
  {
    id: 1,
    category: "High-Rise",
    name: "Titanium World Tower",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "52 Floors",
    bgColor: "#1a1a2e",
  },
  {
    id: 2,
    category: "Commercial",
    name: "Inorbit Mall Tiling",
    location: "Vadodara, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "3.2M Sq Ft",
    bgColor: "#1a2e1a",
  },
  {
    id: 3,
    category: "Residential",
    name: "Green Valley Residency",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Residential Complex",
    scale: "500 Units",
    bgColor: "#2e1a2e",
  },
  {
    id: 4,
    category: "Industrial",
    name: "Zydus Pharma Complex",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Industrial Facility",
    scale: "1.8M Sq Ft",
    bgColor: "#2e1a0a",
  },
  {
    id: 5,
    category: "High-Rise",
    name: "Blue Sapphire Heights",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "38 Floors",
    bgColor: "#050d1a",
  },
  {
    id: 6,
    category: "Commercial",
    name: "Crystal Mall Flooring",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "2.1M Sq Ft",
    bgColor: "#0a1a2e",
  },
  {
    id: 7,
    category: "Residential",
    name: "Emerald Park Villas",
    location: "Gandhinagar, Gujarat",
    state: "Gujarat",
    type: "Villa Complex",
    scale: "200 Units",
    bgColor: "#0a2e1a",
  },
  {
    id: 8,
    category: "Industrial",
    name: "Torrent Power Facility",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Power Plant",
    scale: "800K Sq Ft",
    bgColor: "#1a100a",
  },
  {
    id: 9,
    category: "High-Rise",
    name: "The Grand Meridian",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Luxury Residences",
    scale: "60 Floors",
    bgColor: "#0d0d1a",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-dark">
      <div className="pt-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
        <h1 className="font-cormorant text-6xl md:text-7xl text-light mb-10">Our Projects</h1>

        <div className="flex flex-wrap gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm tracking-wider uppercase pb-1.5 transition-all duration-200 ${
                activeFilter === cat
                  ? "text-gold border-b-2 border-gold"
                  : "text-grey hover:text-light border-b-2 border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filtered.map((project, index) => {
            const isTextCard = (index + 1) % 3 === 0;

            if (isTextCard) {
              return (
                <div
                  key={project.id}
                  className="flex flex-col justify-between p-10"
                  style={{ backgroundColor: "#F5F3EF", minHeight: "400px" }}
                >
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                    {project.category}
                  </p>
                  <div className="flex-1">
                    <h3 className="font-cormorant text-4xl text-dark leading-tight mb-3">
                      {project.name}
                    </h3>
                    <p className="text-dark/60 text-sm tracking-wider mb-6">{project.location}</p>
                    <div className="w-10 h-px bg-gold mb-6" />
                    <ul className="space-y-2 mb-8">
                      <li className="text-dark/70 text-xs tracking-wider">{project.state}</li>
                      <li className="text-dark/70 text-xs tracking-wider">{project.type}</li>
                      <li className="text-dark/70 text-xs tracking-wider">{project.scale}</li>
                    </ul>
                  </div>
                  <Link
                    href={`/projects`}
                    className="inline-block border border-dark text-dark text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-dark hover:text-light transition-all duration-200 w-fit"
                  >
                    View Project
                  </Link>
                </div>
              );
            }

            return (
              <motion.div
                key={project.id}
                className="relative overflow-hidden group"
                style={{ backgroundColor: project.bgColor, minHeight: "400px" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 text-gold text-xs tracking-[0.2em] uppercase">
                  {project.category}
                </span>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-cormorant text-3xl text-light leading-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-xs tracking-wider">{project.location}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="text-grey text-center py-20">No projects found in this category.</p>
      )}
    </div>
  );
}
