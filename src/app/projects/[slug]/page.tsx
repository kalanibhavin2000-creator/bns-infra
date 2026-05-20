import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "../data";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ height: "70vh" }}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="absolute bottom-12 left-8 lg:left-16 right-8">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            {project.category}
          </p>
          <h1 className="font-cormorant text-5xl lg:text-7xl text-white leading-none">
            {project.name}
          </h1>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 border-b border-white/10 pb-14">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Location</p>
            <p className="text-light/80 text-sm tracking-wide">{project.location}</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Type</p>
            <p className="text-light/80 text-sm tracking-wide">{project.type}</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Scale</p>
            <p className="text-light/80 text-sm tracking-wide">{project.scale}</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">State</p>
            <p className="text-light/80 text-sm tracking-wide">{project.state}</p>
          </div>
        </div>

        <Link
          href="/projects"
          className="text-gold text-xs tracking-[0.2em] uppercase hover:text-light transition-colors duration-200"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
