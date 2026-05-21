import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { projectBySlugQuery, projectsQuery } from "@/lib/queries";
import { allProjects } from "../data";

export const revalidate = 60;

export async function generateStaticParams() {
  const sanityProjects = await client.fetch(projectsQuery).catch(() => []);
  if (sanityProjects.length > 0) {
    return sanityProjects.map((p: { slug: { current: string } }) => ({ slug: p.slug.current }));
  }
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug }).catch(() => null);

  if (!project) {
    const fallback = allProjects.find((p) => p.slug === slug);
    if (!fallback) return { title: 'Project Not Found' };
    return {
      title: `${fallback.name} — ${fallback.location}`,
      description: `${fallback.name} tile application project in ${fallback.location} by BNS Constructions.`,
    };
  }

  const name = project.title || project.name;
  return {
    title: `${name} — ${project.location}`,
    description: project.seo?.metaDescription || project.description || `${name} tile application project in ${project.location} by BNS Constructions.`,
    openGraph: {
      title: `${name} | BNS Constructions`,
      description: project.description || '',
      images: project.seo?.ogImage
        ? [{ url: urlFor(project.seo.ogImage).width(1200).height(630).url() }]
        : project.mainImage
        ? [{ url: urlFor(project.mainImage).width(1200).height(630).url() }]
        : [],
      url: `https://bns-infra.vercel.app/projects/${slug}`,
    },
    alternates: { canonical: `https://bns-infra.vercel.app/projects/${slug}` }
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sanityProject = await client.fetch(projectBySlugQuery, { slug }).catch(() => null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bns-infra.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://bns-infra.vercel.app/projects" },
      { "@type": "ListItem", "position": 3, "name": sanityProject?.title || sanityProject?.name || slug, "item": `https://bns-infra.vercel.app/projects/${slug}` }
    ]
  }

  if (sanityProject) {
    const name = sanityProject.title || sanityProject.name;
    const imageUrl = sanityProject.mainImage
      ? urlFor(sanityProject.mainImage).width(1600).height(900).url()
      : '/images/building-highrise.jpg';

    return (
      <div className="bg-dark min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <div className="relative" style={{ height: "70vh" }}>
          <Image src={imageUrl} alt={name} fill className="object-cover" priority />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)" }}
          />
          <div className="absolute bottom-12 left-8 lg:left-16 right-8">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{sanityProject.category}</p>
            <h1 className="font-cormorant text-5xl lg:text-7xl text-white leading-none">{name}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 border-b border-white/10 pb-14">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Location</p>
              <p className="text-light/80 text-sm tracking-wide">{sanityProject.location}</p>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Type</p>
              <p className="text-light/80 text-sm tracking-wide">{sanityProject.projectType || sanityProject.type}</p>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Scale</p>
              <p className="text-light/80 text-sm tracking-wide">{sanityProject.scale}</p>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">State</p>
              <p className="text-light/80 text-sm tracking-wide">{sanityProject.state}</p>
            </div>
          </div>
          {sanityProject.description && (
            <p className="text-grey leading-relaxed mb-14">{sanityProject.description}</p>
          )}
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

  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative" style={{ height: "70vh" }}>
        <Image src={project.image} alt={project.name} fill className="object-cover" priority />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)" }}
        />
        <div className="absolute bottom-12 left-8 lg:left-16 right-8">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{project.category}</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl text-white leading-none">{project.name}</h1>
        </div>
      </div>

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
