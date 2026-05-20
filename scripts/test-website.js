// BNS Infra — static source-code test suite
// Checks every page, component, link, and section by reading source files.
// Run: node scripts/test-website.js

const fs   = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

let passed  = 0;
let failed  = 0;
let warned  = 0;

// ── helpers ──────────────────────────────────────────────────────────────────

function read(rel) {
  try { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
  catch { return null; }
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function has(src, str) {
  return src !== null && src.includes(str);
}

function count(src, pattern) {
  if (!src) return 0;
  return (src.match(pattern) || []).length;
}

function pass(msg)  { console.log(`✅ PASS: ${msg}`);  passed++; }
function fail(msg)  { console.log(`❌ FAIL: ${msg}`);  failed++; }
function warn(msg)  { console.log(`⚠️  WARN: ${msg}`);  warned++; }

function check(cond, passMsg, failMsg) {
  if (cond) pass(passMsg); else fail(failMsg);
}

function section(title) {
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('─'.repeat(60));
}

// ── load source files ─────────────────────────────────────────────────────────

const homePage       = read('src/app/page.tsx');
const heroSlider     = read('src/components/sections/HeroSlider.tsx');
const statsBar       = read('src/components/sections/StatsBar.tsx');
const threePanel     = read('src/components/sections/ThreePanelSection.tsx');
const navbar         = read('src/components/layout/Navbar.tsx');
const footer         = read('src/components/layout/Footer.tsx');
const projectsPage   = read('src/app/projects/page.tsx');
const projectsData   = read('src/app/projects/data.ts');
const slugPage       = read('src/app/projects/[slug]/page.tsx');
const servicesPage   = read('src/app/services/page.tsx');
const aboutPage      = read('src/app/about/page.tsx');
const contactPage    = read('src/app/contact/page.tsx');

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE (/)
// ─────────────────────────────────────────────────────────────────────────────
section('HOMEPAGE (/)');

// Hero slider
check(heroSlider !== null,                      'HeroSlider component file exists',             'HeroSlider component file missing');
check(has(heroSlider, 'const slides = ['),      'Hero slides array defined',                    'Hero slides array missing');

const slideCount = count(heroSlider, /\bid:/g);
check(slideCount === 5,                         `Hero slider has 5 slides (found ${slideCount})`, `Hero slider should have 5 slides (found ${slideCount})`);

check(has(heroSlider, '5000'),                  'Slide auto-advance interval is 5000ms',        'Slide auto-advance interval missing or wrong');
check(has(heroSlider, 'setInterval'),           'Slide auto-advance uses setInterval',          'Slide auto-advance setInterval missing');
check(has(heroSlider, 'href="/projects"'),      'EXPLORE PROJECTS button points to /projects',  'EXPLORE PROJECTS button href wrong or missing');
check(has(heroSlider, 'Explore Projects'),      'EXPLORE PROJECTS button text exists',          'EXPLORE PROJECTS button text missing');

// Dot navigation
check(has(heroSlider, 'slides.map'),            'Dot navigation mapped from slides (5 dots)',   'Dot navigation not mapped from slides');
check(has(heroSlider, 'goTo'),                  'Dot navigation goTo handler exists',           'Dot navigation goTo handler missing');

// Stats bar
check(statsBar !== null,                        'StatsBar component file exists',               'StatsBar component file missing');
const statCount = count(statsBar, /label:/g);
check(statCount === 4,                          `StatsBar has 4 stats (found ${statCount})`,    `StatsBar should have 4 stats (found ${statCount})`);
check(has(homePage, 'StatsBar'),                'StatsBar used on homepage',                    'StatsBar not on homepage');

// Three panel section
check(threePanel !== null,                      'ThreePanelSection component file exists',      'ThreePanelSection component file missing');
const panelCount = count(threePanel, /id:/g);
check(panelCount === 3,                         `ThreePanelSection has 3 panels (found ${panelCount})`, `ThreePanelSection should have 3 panels (found ${panelCount})`);
check(has(threePanel, 'href: "/about"'),        'Panel 1 (About Us) points to /about',         'Panel 1 href wrong or missing');
check(has(threePanel, 'href: "/projects"'),     'Panel 2 (View Portfolio) points to /projects','Panel 2 href wrong or missing');
check(has(threePanel, 'href: "/services"'),     'Panel 3 (Explore Services) points to /services','Panel 3 href wrong or missing');
check(has(homePage, 'ThreePanelSection'),       'ThreePanelSection used on homepage',           'ThreePanelSection not on homepage');

// Section order: ThreePanelSection must come before StatsBar (compare JSX tags, not imports)
if (homePage) {
  const tIdx = homePage.indexOf('<ThreePanelSection');
  const sIdx = homePage.indexOf('<StatsBar');
  check(tIdx > -1 && sIdx > -1 && tIdx < sIdx,
    'ThreePanelSection appears before StatsBar (correct order)',
    'ThreePanelSection is NOT before StatsBar — wrong render order');
}

// Footer
check(footer !== null,                          'Footer component file exists',                 'Footer component file missing');
check(has(footer, 'BNS INFRA'),                 'Footer has BNS INFRA logo',                   'Footer logo text missing');
check(has(footer, 'href: "/"'),                 'Footer has Home link (/)',                     'Footer Home link missing');
check(has(footer, 'href: "/projects"'),         'Footer has Projects link',                    'Footer Projects link missing');
check(has(footer, 'href: "/services"'),         'Footer has Services link',                    'Footer Services link missing');
check(has(footer, 'href: "/about"'),            'Footer has About link',                       'Footer About link missing');
check(has(footer, 'href: "/contact"'),          'Footer has Contact link',                     'Footer Contact link missing');
check(has(footer, 'tel:'),                      'Footer has phone number (tel: link)',         'Footer phone link missing');
check(has(footer, 'mailto:'),                   'Footer has email (mailto: link)',              'Footer email link missing');
check(has(footer, 'Gujarat'),                   'Footer has address with Gujarat',             'Footer address missing');

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
section('NAVBAR');

check(navbar !== null,                          'Navbar component file exists',                'Navbar component file missing');
check(has(navbar, 'BNS INFRA'),                 'BNS INFRA logo text exists',                 'BNS INFRA logo text missing');
check(has(navbar, 'href="/"'),                  'Navbar logo points to /',                    'Navbar logo href wrong or missing');
check(has(navbar, 'Menu'),                      'Hamburger icon (Menu) exists',               'Hamburger icon missing');
check(has(navbar, 'setMenuOpen(true)'),         'Hamburger click opens menu',                 'Hamburger click handler missing');
check(has(navbar, 'menuOpen'),                  'Fullscreen menu state (menuOpen) exists',    'Fullscreen menu state missing');
check(has(navbar, 'AnimatePresence'),           'Fullscreen menu uses AnimatePresence',       'AnimatePresence missing');

// Scroll hide/show
check(has(navbar, 'navVisible'),                'Navbar scroll-direction state exists',       'navVisible state missing');
check(has(navbar, 'lastScrollY'),               'lastScrollY ref for scroll tracking exists', 'lastScrollY ref missing');
check(has(navbar, 'y: navVisible ? 0 : -80'),   'Navbar animates y position on scroll',       'Navbar scroll animation missing');

// Always-visible hamburger
check(has(navbar, '!menuOpen'),                 'Hamburger only shown when menu is closed',   'Hamburger always-visible logic missing');
check(has(navbar, 'z-[60]'),                    'Hamburger has z-[60] (above navbar)',        'Hamburger z-index missing');
check(has(navbar, 'rounded-full'),              'Hamburger is round (rounded-full)',          'Hamburger rounded-full missing');
check(has(navbar, 'backdrop-blur'),             'Hamburger has backdrop-blur',                'Hamburger backdrop-blur missing');

// Nav links in menu
const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
];
navLinks.forEach(({ label, href }) => {
  check(has(navbar, `label: "${label}"`),  `Nav link "${label}" defined in navLinks`,  `Nav link "${label}" missing`);
  check(has(navbar, `href: "${href}"`),    `Nav link "${label}" points to ${href}`,    `Nav link "${label}" href wrong`);
});

check(has(navbar, 'Get a Quote'),           'GET A QUOTE button text exists in menu',   'GET A QUOTE button text missing');
check(has(navbar, 'href="/contact"'),       'GET A QUOTE points to /contact',           'GET A QUOTE href wrong');
check(has(navbar, 'setMenuOpen(false)'),    'Close button calls setMenuOpen(false)',    'Close button handler missing');
check(has(navbar, '<X '),                  'X icon in close button',                   'X icon missing from close button');
check(has(navbar, 'Close menu'),            'Close button has aria-label "Close menu"', 'Close button aria-label missing');

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS PAGE (/projects)
// ─────────────────────────────────────────────────────────────────────────────
section('PROJECTS PAGE (/projects)');

check(projectsPage !== null,                    'Projects page file exists',                   'Projects page file missing');
check(projectsData !== null,                    'Projects data file exists',                   'Projects data file missing');

// Filter buttons
['All', 'High-Rise', 'Residential', 'Commercial', 'Industrial'].forEach(cat => {
  check(has(projectsPage, `"${cat}"`),          `Filter button "${cat}" exists`,               `Filter button "${cat}" missing`);
});

check(has(projectsPage, 'activeFilter'),        'Filter state (activeFilter) exists',         'Filter state missing');
check(has(projectsPage, 'setActiveFilter'),     'Filter state setter exists',                  'Filter state setter missing');
check(has(projectsPage, '.filter('),            'Filter logic (Array.filter) exists',          'Filter logic missing');

// Project count — match slug: " (string value) to skip the TypeScript type declaration
const projCount = count(projectsData, /slug: "/g);
check(projCount === 9,                          `9 projects defined in data (found ${projCount})`, `Should have 9 projects (found ${projCount})`);

// Card content
check(has(projectsPage, 'project.image'),       'Cards have image field',                      'Cards missing image field');
check(has(projectsPage, 'project.category'),    'Cards have category field',                   'Cards missing category field');
check(has(projectsPage, 'project.name'),        'Cards have name field',                       'Cards missing name field');
check(has(projectsPage, 'project.location'),    'Cards have location field',                   'Cards missing location field');

// Hover effect
check(has(projectsPage, 'hovered'),             'Hover effect state (hovered) exists',         'Hover state missing');
check(has(projectsPage, 'onMouseEnter'),        'onMouseEnter handler on cards',               'onMouseEnter handler missing');
check(has(projectsPage, 'onMouseLeave'),        'onMouseLeave handler on cards',               'onMouseLeave handler missing');

// VIEW PROJECT
check(has(projectsPage, 'View Project'),        'VIEW PROJECT text exists on cards',           'VIEW PROJECT text missing from cards');

// Slug navigation — whole card is a Link
check(has(projectsPage, '/projects/${project.slug}'), 'Cards link to /projects/[slug]',        'Card slug link missing');

// Pointer events fix
check(has(projectsPage, 'pointer-events-none'), 'Overlay divs have pointer-events-none',       'pointer-events-none missing on overlays');

// No nested anchors
check(!has(projectsPage, `href="/projects"\n`) || has(projectsPage, 'pointer-events-none'),
  'No broken nested anchor elements',
  'Potential nested anchor issue detected');

// 3-column grid
check(has(projectsPage, 'lg:grid-cols-3'),      'Grid uses 3 columns on large screens',       '3-column grid missing');
check(has(projectsPage, 'gap-2'),               'Grid has gap-2 between cards',               'Grid gap-2 missing');

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DETAIL PAGES (/projects/[slug])
// ─────────────────────────────────────────────────────────────────────────────
section('PROJECT DETAIL PAGES (/projects/[slug])');

check(exists('src/app/projects/[slug]/page.tsx'), '[slug] detail page file exists',           '[slug] detail page missing');
check(has(slugPage, 'generateStaticParams'),    'generateStaticParams exported',               'generateStaticParams missing');
check(has(slugPage, 'notFound'),                'notFound() used for invalid slugs',           'notFound() missing');
check(has(slugPage, 'await params'),            'params awaited (async, Next.js 15+ pattern)', 'params not awaited — will break in production');
check(has(slugPage, 'project.name'),            'Detail page shows project name',              'Detail page missing project name');
check(has(slugPage, 'project.category'),        'Detail page shows category',                  'Detail page missing category');
check(has(slugPage, 'project.location'),        'Detail page shows location',                  'Detail page missing location');
check(has(slugPage, 'project.type'),            'Detail page shows type',                      'Detail page missing type');
check(has(slugPage, 'project.scale'),           'Detail page shows scale',                     'Detail page missing scale');
check(has(slugPage, 'href="/projects"'),        'Detail page Back to Projects link exists',    'Back button missing or href wrong');

// All 9 slugs present in data
const expectedSlugs = [
  'titanium-world-tower',
  'inorbit-mall-tiling',
  'green-valley-residency',
  'zydus-pharma-complex',
  'blue-sapphire-heights',
  'crystal-mall-flooring',
  'emerald-park-villas',
  'torrent-power-facility',
  'the-grand-meridian',
];
expectedSlugs.forEach(slug => {
  check(has(projectsData, `"${slug}"`),
    `Slug "${slug}" defined in data.ts`,
    `Slug "${slug}" missing from data.ts`);
});

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES PAGE (/services)
// ─────────────────────────────────────────────────────────────────────────────
section('SERVICES PAGE (/services)');

check(servicesPage !== null,                    'Services page file exists',                   'Services page file missing');
check(has(servicesPage, 'High-Rise Tiling'),    'High-Rise Tiling service exists',             'High-Rise Tiling service missing');
check(has(servicesPage, 'Residential'),         'Residential service exists',                  'Residential service missing');
check(has(servicesPage, 'Commercial'),          'Commercial service exists',                   'Commercial service missing');
check(has(servicesPage, 'Flooring'),            'Flooring & Wall Cladding service exists',    'Flooring service missing');
check(has(servicesPage, 'description'),         'Services have description field',             'Service description missing');
check(has(servicesPage, 'bullets'),             'Services have bullets/features list',         'Service bullets/features missing');
check(has(servicesPage, 'CheckCircle'),         'Service features use CheckCircle icons',      'CheckCircle icons missing from features');
check(has(servicesPage, 'processSteps'),        'Process steps array defined',                 'Process steps missing');
check(has(servicesPage, 'Survey'),              'Process step 01 "Survey" exists',             'Survey process step missing');
check(has(servicesPage, 'Handover'),            'Process step 04 "Handover" exists',           'Handover process step missing');
check(has(servicesPage, 'Our Process'),         'Process steps section heading exists',        'Process steps heading missing');

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE (/about)
// ─────────────────────────────────────────────────────────────────────────────
section('ABOUT PAGE (/about)');

check(aboutPage !== null,                       'About page file exists',                      'About page file missing');
check(has(aboutPage, 'Our Story'),              'Company story section (Our Story) exists',    'Company story section missing');
check(has(aboutPage, 'Founded in 2010') || has(aboutPage, '2010'), 'Origin story text exists', 'Origin story text missing');

const teamNames = count(aboutPage, /name:/g);
check(teamNames >= 3,                           `Team has ${teamNames} members (≥3 required)`, `Team section should have 3 members (found ${teamNames})`);
check(has(aboutPage, 'team'),                   'Team array defined',                          'Team array missing');
check(has(aboutPage, 'Leadership') || has(aboutPage, 'The Team'), 'Team section heading exists', 'Team section heading missing');
check(has(aboutPage, 'Why BNS') || has(aboutPage, 'usps'), 'Why BNS / strengths section exists', 'Why BNS section missing');
check(has(aboutPage, 'Large Scale') || has(aboutPage, 'On-Time') || has(aboutPage, 'Precision'), 'USP cards exist', 'USP cards missing');

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT PAGE (/contact)
// ─────────────────────────────────────────────────────────────────────────────
section('CONTACT PAGE (/contact)');

check(contactPage !== null,                     'Contact page file exists',                    'Contact page file missing');
check(has(contactPage, '<form'),                'Contact form element exists',                 'Contact form element missing');
check(has(contactPage, 'name="name"'),          'Name input field exists',                    'Name field missing');
check(has(contactPage, 'name="company"'),       'Company input field exists',                 'Company field missing');
check(has(contactPage, 'name="phone"'),         'Phone input field exists',                   'Phone field missing');
check(has(contactPage, 'name="email"'),         'Email input field exists',                   'Email field missing');
check(has(contactPage, '<select'),              'Project Type <select> dropdown exists',       'Project Type dropdown missing');
check(has(contactPage, 'name="projectType"'),   'Project Type dropdown has name="projectType"','Project Type dropdown name attr missing');
check(has(contactPage, '<textarea'),            'Message <textarea> exists',                   'Message textarea missing');
check(has(contactPage, 'name="message"'),       'Message textarea has name="message"',         'Message textarea name attr missing');
check(has(contactPage, 'type="submit"'),        'Submit button (type="submit") exists',        'Submit button missing');
check(has(contactPage, 'Submit Enquiry') || has(contactPage, 'Submit'), 'Submit button text exists', 'Submit button text missing');
check(has(contactPage, 'wa.me') || has(contactPage, 'WhatsApp'), 'WhatsApp button/link exists', 'WhatsApp button missing');
check(has(contactPage, 'Chat on WhatsApp') || has(contactPage, 'WhatsApp'), 'WhatsApp button text exists', 'WhatsApp button text missing');
check(has(contactPage, 'Map') || has(contactPage, 'MapPin'), 'Map placeholder exists',         'Map placeholder missing');
check(has(contactPage, 'handleSubmit'),         'Form submit handler (handleSubmit) exists',   'handleSubmit function missing');

// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY
// ─────────────────────────────────────────────────────────────────────────────
const total = passed + failed + warned;
console.log('\n' + '═'.repeat(60));
console.log('  TEST SUMMARY');
console.log('═'.repeat(60));
console.log(`  Total:    ${total}`);
console.log(`  ✅ Passed:  ${passed}`);
console.log(`  ❌ Failed:  ${failed}`);
console.log(`  ⚠️  Warnings: ${warned}`);
console.log('═'.repeat(60));

if (failed === 0 && warned === 0) {
  console.log('\n  🎉 All tests passed!');
} else if (failed === 0) {
  console.log(`\n  ✅ All tests passed (${warned} warning(s) noted).`);
} else {
  console.log(`\n  ❌ ${failed} test(s) failed — see ❌ lines above.`);
  process.exit(1);
}
