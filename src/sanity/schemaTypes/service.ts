import { type SchemaTypeDefinition } from 'sanity'

const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'icon', title: 'Icon Name (Lucide)', type: 'string' },
    { name: 'shortDescription', title: 'Short Description', type: 'text' },
    { name: 'fullDescription', title: 'Full Description', type: 'text' },
    { name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'processSteps', title: 'Process Steps', type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'stepNumber', title: 'Step Number', type: 'number' },
          { name: 'title', title: 'Step Title', type: 'string' },
          { name: 'description', title: 'Step Description', type: 'string' },
        ],
      }],
    },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'isActive', title: 'Active', type: 'boolean', initialValue: true },
  ],
}

export default service
