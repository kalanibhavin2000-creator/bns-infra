import { type SchemaTypeDefinition } from 'sanity'

const threePanelSection: SchemaTypeDefinition = {
  name: 'threePanelSection',
  title: 'Three Panel Section (Homepage)',
  type: 'document',
  fields: [
    { name: 'panel1Heading', title: 'Panel 1 Heading', type: 'string' },
    { name: 'panel1Description', title: 'Panel 1 Description', type: 'text' },
    { name: 'panel1ButtonText', title: 'Panel 1 Button Text', type: 'string' },
    { name: 'panel1Image', title: 'Panel 1 Background Image', type: 'image', options: { hotspot: true } },
    { name: 'panel2Heading', title: 'Panel 2 Heading', type: 'string' },
    { name: 'panel2Description', title: 'Panel 2 Description', type: 'text' },
    { name: 'panel2ButtonText', title: 'Panel 2 Button Text', type: 'string' },
    { name: 'panel2Image', title: 'Panel 2 Background Image', type: 'image', options: { hotspot: true } },
    { name: 'panel3Heading', title: 'Panel 3 Heading', type: 'string' },
    { name: 'panel3Description', title: 'Panel 3 Description', type: 'text' },
    { name: 'panel3ButtonText', title: 'Panel 3 Button Text', type: 'string' },
    { name: 'panel3Image', title: 'Panel 3 Background Image', type: 'image', options: { hotspot: true } },
  ],
}

export default threePanelSection
