"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "High-Rise", "Residential", "Commercial", "Industrial"] as const;
type Category = (typeof categories)[number];

type Project = {
  id: number;
  category: string;
  name: string;
  location: string;
  state: string;
  type: string;
  scale: string;
  image: string | null;
  textCard: boolean;
};

const allProjects: Project[] = [
  {
    id: 1,
    category: "High-Rise",
    name: "Titanium World Tower",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "52 Floors",
    image: "/images/building-highrise.jpg",
    textCard: false,
  },
  {
    id: 2,
    category: "Commercial",
    name: "Inorbit Mall Tiling",
    location: "Vadodara, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "3.2M Sq Ft",
    image: "/images/building-commercial.jpg",
    textCard: false,
  },
  {
    id: 3,
    category: "Residential",
    name: "Green Valley Residency",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Residential Complex",
    scale: "500 Units",
    image: null,
    textCard: true,
  },
  {
    id: 4,
    category: "Industrial",
    name: "Zydus Pharma Complex",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Industrial Facility",
    scale: "1.8M Sq Ft",
    image: "/images/bns-office.jpeg",
    textCard: false,
  },
  {
    id: 5,
    category: "High-Rise",
    name: "Blue Sapphire Heights",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "38 Floors",
    image: "/images/highrise-render.webp",
    textCard: false,
  },
  {
    id: 6,
    category: "Commercial",
    name: "Crystal Mall Flooring",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "2.1M Sq Ft",
    image: null,
    textCard: true,
  },
  {
    id: 7,
    category: "Residential",
    name: "Emerald Park Villas",
    location: "Gandhinagar, Gujarat",
    state: "Gujarat",
    type: "Villa Complex",
    scale: "200 Units",
    image: "/images/building-residential.jpg",
    textCard: false,
  },
  {
    id: 8,
    category: "Industrial",
    name: "Torrent Power Facility",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Power Plant",
    scale: "800K Sq Ft",
    image: "/images/building-complex.jpg",
    textCard: false,
  },
  {
    id: 9,
    category: "High-Rise",
    name: "The Grand Meridian",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Luxury Residences",
    scale: "60 Floors",
    image: null,
    textCard: true,
  },
];

const CARD_H = 450;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-dark min-h-screen">
      {/* Minimal header */}
      <div className="pt-24 pb-10 text-center px-6">
        <h1 className="font-cormorant text-5xl md:text-6xl text-light mb-8">Our Projects</h1>
        <div className="flex justify-center flex-wrap gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs tracking-widest uppercase pb-1 transition-all duration-200 ${
                activeFilter === cat
                  ? "text-gold border-b border-gold"
                  : "text-grey hover:text-light border-b border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filtered.map((project) => {
            if (project.textCard) {
              return (
                <div
                  key={project.id}
                  className="flex flex-col justify-between p-10"
                  style={{ backgroundColor: "#F5F3EF", height: `${CARD_H}px` }}
                >
                  <p className="text-gold text-xs tracking-[0.3em] uppercase">
                    {project.category}
                  </p>
                  <div>
                    <h3 className="font-cormorant text-4xl text-dark leading-tight mb-2">
                      {project.name}
                    </h3>
                    <p className="text-dark/60 text-xs tracking-wider mb-5">{project.location}</p>
                    <div className="w-10 h-px bg-gold mb-5" />
                    <ul className="space-y-1.5 mb-6">
                      <li className="text-dark/70 text-xs tracking-wider">{project.state}</li>
                      <li className="text-dark/70 text-xs tracking-wider">{project.type}</li>
                      <li className="text-dark/70 text-xs tracking-wider">{project.scale}</li>
                    </ul>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-block border border-dark text-dark text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-dark hover:text-light transition-all duration-200 w-fit"
                  >
                    View Project
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="relative overflow-hidden"
                style={{ height: `${CARD_H}px` }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-5 left-5 text-gold text-xs tracking-[0.2em] uppercase z-10">
                  {project.category}
                </span>
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h3 className="font-cormorant text-3xl text-light leading-tight mb-1">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-xs tracking-wider">{project.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-grey text-center py-20">No projects found in this category.</p>
      )}
    </div>
  );
}
