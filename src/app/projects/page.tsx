"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const categories = ["All", "High-Rise", "Residential", "Commercial", "Industrial"] as const;
type Category = (typeof categories)[number];

const allProjects = [
  { id: 1, category: "High-Rise", status: "Completed", name: "Titanium World Tower", client: "Titanium Builders Pvt. Ltd.", location: "Surat, Gujarat", bgColor: "#1a1a2e" },
  { id: 2, category: "Commercial", status: "Completed", name: "Inorbit Mall Tiling", client: "Inorbit Malls India", location: "Vadodara, Gujarat", bgColor: "#1a2e1a" },
  { id: 3, category: "Residential", status: "Ongoing", name: "Green Valley Residency", client: "Green Valley Developers", location: "Ahmedabad, Gujarat", bgColor: "#2e1a2e" },
  { id: 4, category: "Industrial", status: "Completed", name: "Zydus Pharma Complex", client: "Zydus Lifesciences", location: "Ahmedabad, Gujarat", bgColor: "#2e1a0a" },
  { id: 5, category: "High-Rise", status: "Ongoing", name: "Blue Sapphire Heights", client: "Sapphire Realty", location: "Surat, Gujarat", bgColor: "#050d1a" },
  { id: 6, category: "Commercial", status: "Completed", name: "Crystal Mall Flooring", client: "Crystal Developers", location: "Surat, Gujarat", bgColor: "#0a1a2e" },
  { id: 7, category: "Residential", status: "Completed", name: "Emerald Park Villas", client: "Emerald Group", location: "Gandhinagar, Gujarat", bgColor: "#0a2e1a" },
  { id: 8, category: "Industrial", status: "Ongoing", name: "Torrent Power Facility", client: "Torrent Power Ltd.", location: "Ahmedabad, Gujarat", bgColor: "#1a100a" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="pt-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h1 className="font-cormorant text-6xl md:text-7xl text-light mb-10">Our Projects</h1>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gold text-dark"
                    : "border border-white/20 text-grey hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group bg-dark-card border border-white/10 hover:border-gold/50 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <span className="absolute top-3 left-3 bg-dark/80 text-gold text-xs tracking-wider uppercase px-2.5 py-1 border border-gold/30">
                    {project.category}
                  </span>
                  <span
                    className={`absolute top-3 right-3 text-xs tracking-wider uppercase px-2.5 py-1 ${
                      project.status === "Ongoing"
                        ? "bg-gold/20 text-gold border border-gold/40"
                        : "bg-green-900/40 text-green-400 border border-green-400/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl text-light mb-1 group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-grey text-xs mb-2">{project.client}</p>
                  <div className="flex items-center gap-1 text-grey text-xs">
                    <MapPin size={11} className="text-gold" />
                    {project.location}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-grey text-center py-20">No projects found in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}
