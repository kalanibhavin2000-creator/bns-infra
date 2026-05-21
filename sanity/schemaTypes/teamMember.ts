export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'role', title: 'Role / Designation', type: 'string' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true }},
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'isActive', title: 'Active', type: 'boolean', initialValue: true }
  ]
}
