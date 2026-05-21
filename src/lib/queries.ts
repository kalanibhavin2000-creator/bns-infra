export const siteSettingsQuery = `*[_type == "siteSettings"][0]`
export const heroSlidesQuery = `*[_type == "heroSlide" && isActive == true] | order(order asc)`
export const statsQuery = `*[_type == "stat"] | order(order asc)`
export const projectsQuery = `*[_type == "project"] | order(order asc)`
export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc)[0...6]`
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]`
export const servicesQuery = `*[_type == "service" && isActive == true] | order(order asc)`
export const teamQuery = `*[_type == "teamMember" && isActive == true] | order(order asc)`
export const aboutPageQuery = `*[_type == "aboutPage"][0]`
export const threePanelQuery = `*[_type == "threePanelSection"][0]`
export const contactPageQuery = `*[_type == "contactPage"][0]`
