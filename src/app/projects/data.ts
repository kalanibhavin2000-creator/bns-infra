export type Project = {
  id: number;
  slug: string;
  category: string;
  name: string;
  location: string;
  state: string;
  type: string;
  scale: string;
  image: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    slug: "titanium-world-tower",
    category: "High-Rise",
    name: "Titanium World Tower",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "52 Floors",
    image: "/images/building-highrise.jpg",
  },
  {
    id: 2,
    slug: "inorbit-mall-tiling",
    category: "Commercial",
    name: "Inorbit Mall Tiling",
    location: "Vadodara, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "3.2M Sq Ft",
    image: "/images/building-commercial.jpg",
  },
  {
    id: 3,
    slug: "green-valley-residency",
    category: "Residential",
    name: "Green Valley Residency",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Residential Complex",
    scale: "500 Units",
    image: "/images/building-residential.jpg",
  },
  {
    id: 4,
    slug: "zydus-pharma-complex",
    category: "Industrial",
    name: "Zydus Pharma Complex",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Industrial Facility",
    scale: "1.8M Sq Ft",
    image: "/images/bns-office.jpeg",
  },
  {
    id: 5,
    slug: "blue-sapphire-heights",
    category: "High-Rise",
    name: "Blue Sapphire Heights",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "High-Rise Condo",
    scale: "38 Floors",
    image: "/images/highrise-render.webp",
  },
  {
    id: 6,
    slug: "crystal-mall-flooring",
    category: "Commercial",
    name: "Crystal Mall Flooring",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Commercial Mall",
    scale: "2.1M Sq Ft",
    image: "/images/building-complex.jpg",
  },
  {
    id: 7,
    slug: "emerald-park-villas",
    category: "Residential",
    name: "Emerald Park Villas",
    location: "Gandhinagar, Gujarat",
    state: "Gujarat",
    type: "Villa Complex",
    scale: "200 Units",
    image: "/images/building-residential.jpg",
  },
  {
    id: 8,
    slug: "torrent-power-facility",
    category: "Industrial",
    name: "Torrent Power Facility",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    type: "Power Plant",
    scale: "800K Sq Ft",
    image: "/images/building-highrise.jpg",
  },
  {
    id: 9,
    slug: "the-grand-meridian",
    category: "High-Rise",
    name: "The Grand Meridian",
    location: "Surat, Gujarat",
    state: "Gujarat",
    type: "Luxury Residences",
    scale: "60 Floors",
    image: "/images/building-commercial.jpg",
  },
];
