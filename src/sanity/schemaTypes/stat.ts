import { type SchemaTypeDefinition } from 'sanity'

const stat: SchemaTypeDefinition = {
  name: 'stat',
  title: 'Stats Bar',
  type: 'document',
  fields: [
    { name: 'value', title: 'Value (e.g. 500+)', type: 'string' },
    { name: 'label', title: 'Label (e.g. Projects Completed)', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}

export default stat
