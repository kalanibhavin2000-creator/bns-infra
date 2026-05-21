import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://bns-infra.vercel.app/sitemap.xml',
    host: 'https://bns-infra.vercel.app',
  }
}
