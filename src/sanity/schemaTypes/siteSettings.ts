import { type SchemaTypeDefinition } from 'sanity'

const siteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Office Address', type: 'text' },
    { name: 'googleMapsUrl', title: 'Google Maps Embed URL', type: 'string' },
    { name: 'footerTagline', title: 'Footer Tagline', type: 'string' },
    { name: 'copyrightText', title: 'Copyright Text', type: 'string' },
    {
      name: 'socialLinks', title: 'Social Media Links', type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'platform', title: 'Platform', type: 'string',
            options: { list: ['facebook', 'instagram', 'linkedin', 'youtube', 'twitter'] } },
          { name: 'url', title: 'URL', type: 'string' },
        ],
      }],
    },
    {
      name: 'seo', title: 'SEO Settings', type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Default Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Default Meta Description', type: 'text' },
        { name: 'ogImage', title: 'Default OG Image (1200x630)', type: 'image' },
        { name: 'keywords', title: 'Keywords (comma separated)', type: 'string' },
      ],
    },
  ],
}

export default siteSettings
