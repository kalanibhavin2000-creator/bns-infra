"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

export type ProjectItem = {
  id?: number;
  _id?: string;
  slug: string | { current: string };
  category: string;
  name?: string;
  title?: string;
  location: string;
  state: string;
  type?: string;
  projectType?: string;
  scale: string;
  image?: string;
  mainImage?: { asset: { _ref: string } };
};

const categories = ["All", "High-Rise", "Residential", "Commercial", "Industrial"] as const;
type Category = (typeof categories)[number];

const EASE = [0.4, 0, 0.2, 1] as const;
const DUR = 0.4;

function ProjectCard({ project }: { project: ProjectItem }) {
  const [hovered, setHovered] = useState(false);

  const slug = typeof project.slug === 'string' ? project.slug : project.slug.current;
  const name = project.name || project.title || '';
  const type = project.type || project.projectType || '';
  const imageUrl = project.mainImage
    ? urlFor(project.mainImage).width(800).height(600).url()
    : project.image || '/images/building-highrise.jpg';

  return (
    <Link
      href={`/projects/${slug}`}
      className="relative overflow-hidden block cursor-pointer"
      style={{ minHeight: "480px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: DUR * 0.75, ease: EASE }}
      >
        <p className="text-xs tracking-widest uppercase text-white/70 mb-2">{project.category}</p>
        <h3 className="font-cormorant text-3xl text-white leading-tight mb-1">{name}</h3>
        <p className="text-white/60 text-xs tracking-wider">{project.location}</p>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ backgroundColor: "#F5F3EF" }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: DUR, ease: EASE }}
      />

      <motion.div
        className="absolute inset-0 z-40 flex flex-col justify-between p-8 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: DUR, ease: EASE, delay: hovered ? 0.1 : 0 }}
      >
        <p className="text-gold text-xs tracking-widest uppercase">{project.category}</p>
        <div>
          <h3 className="font-cormorant text-4xl text-dark leading-tight mb-2">{name}</h3>
          <p className="text-xs tracking-wider mb-5" style={{ color: "#6B6B6B" }}>{project.location}</p>
          <div className="w-10 h-px bg-gold mb-5" />
          <ul className="space-y-1.5 mb-6">
            <li className="text-dark/70 text-xs tracking-wider">{project.state}</li>
            <li className="text-dark/70 text-xs tracking-wider">{type}</li>
            <li className="text-dark/70 text-xs tracking-wider">{project.scale}</li>
          </ul>
          <span className="inline-block border border-dark text-dark text-xs tracking-[0.2em] uppercase px-6 py-3 w-fit">
            View Project
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsGrid({ projects }: { projects: ProjectItem[] }) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-8 lg:gap-10 pb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-sm lg:text-base tracking-widest uppercase px-8 py-3 transition-all duration-200 ${
              activeFilter === cat
                ? "text-gold border-b-2 border-gold"
                : "text-grey hover:text-light border-b-2 border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.map((project) => (
            <ProjectCard key={project._id || project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-grey text-center py-20">No projects found in this category.</p>
      )}
    </>
  );
}
