import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import heroSlide from './heroSlide'
import stat from './stat'
import project from './project'
import service from './service'
import teamMember from './teamMember'
import aboutPage from './aboutPage'
import threePanelSection from './threePanelSection'
import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    heroSlide,
    stat,
    project,
    service,
    teamMember,
    aboutPage,
    threePanelSection,
    contactPage,
  ],
}
