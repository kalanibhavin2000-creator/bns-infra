import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "High-Rise",
    status: "Completed",
    name: "Titanium World Tower",
    client: "Titanium Builders Pvt. Ltd.",
    location: "Surat, Gujarat",
    bgColor: "#1a1a2e",
  },
  {
    id: 2,
    category: "Commercial",
    status: "Completed",
    name: "Inorbit Mall Tiling",
    client: "Inorbit Malls India",
    location: "Vadodara, Gujarat",
    bgColor: "#1a2e1a",
  },
  {
    id: 3,
    category: "Residential",
    status: "Ongoing",
    name: "Green Valley Residency",
    client: "Green Valley Developers",
    location: "Ahmedabad, Gujarat",
    bgColor: "#2e1a2e",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Our Work</p>
            <h2 className="font-barlow text-5xl md:text-6xl text-light leading-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-gold text-sm tracking-wider uppercase group"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-dark-card border border-white/10 hover:border-gold/50 transition-all duration-300 overflow-hidden"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <span className="absolute top-4 left-4 bg-dark/80 text-gold text-xs tracking-wider uppercase px-3 py-1 border border-gold/30">
                  {project.category}
                </span>
                <span
                  className={`absolute top-4 right-4 text-xs tracking-wider uppercase px-3 py-1 ${
                    project.status === "Ongoing"
                      ? "bg-gold/20 text-gold border border-gold/40"
                      : "bg-green-900/40 text-green-400 border border-green-400/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-barlow text-2xl text-light mb-1 group-hover:text-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-grey text-sm mb-3">{project.client}</p>
                <div className="flex items-center gap-1.5 text-grey text-xs">
                  <MapPin size={12} className="text-gold" />
                  {project.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gold text-sm tracking-wider uppercase border border-gold/40 px-6 py-3"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
