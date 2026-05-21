export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'category', title: 'Category', type: 'string',
      options: { list: ['High-Rise', 'Residential', 'Commercial', 'Industrial'] }},
    { name: 'status', title: 'Status', type: 'string',
      options: { list: ['Ongoing', 'Completed'] }},
    { name: 'location', title: 'City', type: 'string' },
    { name: 'state', title: 'State', type: 'string' },
    { name: 'projectType', title: 'Project Type', type: 'string' },
    { name: 'scale', title: 'Scale (e.g. 32 Floors)', type: 'string' },
    { name: 'year', title: 'Year Completed', type: 'number' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true }},
    { name: 'gallery', title: 'Image Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true }}]},
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
    {
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'ogImage', title: 'OG Image', type: 'image' }
      ]
    }
  ]
}
