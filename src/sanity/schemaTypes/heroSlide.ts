import { type SchemaTypeDefinition } from 'sanity'

const heroSlide: SchemaTypeDefinition = {
  name: 'heroSlide',
  title: 'Hero Slides',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string', validation: (R) => R.required() },
    { name: 'location', title: 'Location (City, State)', type: 'string' },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['High-Rise', 'Residential', 'Commercial', 'Industrial'] },
    },
    { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'isActive', title: 'Active', type: 'boolean', initialValue: true },
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}

export default heroSlide
