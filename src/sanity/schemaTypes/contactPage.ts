import { type SchemaTypeDefinition } from 'sanity'

const contactPage: SchemaTypeDefinition = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Page Heading', type: 'string' },
    { name: 'subtext', title: 'Subtext', type: 'text' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Office Address', type: 'text' },
    { name: 'googleMapsEmbedUrl', title: 'Google Maps Embed URL', type: 'string' },
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

export default contactPage
