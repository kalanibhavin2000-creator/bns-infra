import { type SchemaTypeDefinition } from 'sanity'

const aboutPage: SchemaTypeDefinition = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text' },
    { name: 'storyHeading', title: 'Our Story Heading', type: 'string' },
    { name: 'storyText', title: 'Our Story Text', type: 'text' },
    { name: 'storyImage', title: 'Story Image', type: 'image', options: { hotspot: true } },
    { name: 'missionStatement', title: 'Mission Statement', type: 'text' },
    { name: 'visionStatement', title: 'Vision Statement', type: 'text' },
    {
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
      ],
    },
  ],
}

export default aboutPage
