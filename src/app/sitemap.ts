import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bns-infra.vercel.app'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  try {
    const projects = await client.fetch(`*[_type == "project"]{ slug, _updatedAt }`)
    const projectPages = projects.map((project: { slug: { current: string }, _updatedAt: string }) => ({
      url: `${baseUrl}/projects/${project.slug.current}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
    return [...staticPages, ...projectPages]
  } catch {
    return staticPages
  }
}
