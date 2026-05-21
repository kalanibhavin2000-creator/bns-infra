import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/lib/queries";
import { allProjects } from "./data";
import ProjectsGrid, { type ProjectItem } from "@/components/sections/ProjectsGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Our Projects — Portfolio',
  description: 'Explore BNS Constructions portfolio of 500+ completed tile pasting projects including high-rise buildings, residential complexes, and commercial spaces across Gujarat.',
  openGraph: {
    title: 'Projects Portfolio | BNS Constructions',
    description: 'View our completed tile pasting projects across Gujarat — high-rise, residential and commercial.',
    url: 'https://bns-infra.vercel.app/projects',
  },
  alternates: { canonical: 'https://bns-infra.vercel.app/projects' }
}

export default async function ProjectsPage() {
  const sanityProjects = await client.fetch(projectsQuery).catch(() => []);

  const projects: ProjectItem[] = sanityProjects.length > 0
    ? sanityProjects
    : allProjects.map((p) => ({
        id: p.id,
        slug: p.slug,
        category: p.category,
        name: p.name,
        location: p.location,
        state: p.state,
        type: p.type,
        scale: p.scale,
        image: p.image,
      }));

  return (
    <div className="bg-dark min-h-screen">
      <div className="pt-24 pb-12 text-center px-6">
        <h1 className="font-cormorant text-5xl md:text-6xl text-light mb-10">Our Projects</h1>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
