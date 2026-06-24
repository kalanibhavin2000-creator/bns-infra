import { Metadata } from "next";
import Image from "next/image";
import { Building2, Home, Store, Layers, CheckCircle2 } from "lucide-react";
import { client } from "@/lib/sanity";
import { servicesQuery } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Our Services — Tile Application',
  description: 'BNS Constructions offers complete tile application services — high-rise tiling, residential flooring, commercial tile work, and wall cladding across Gujarat.',
  openGraph: {
    title: 'Tile Application Services | BNS Constructions',
    url: 'https://bns-infra.vercel.app/services',
  },
  alternates: { canonical: 'https://bns-infra.vercel.app/services' }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tile Application",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BNS Constructions"
  },
  "areaServed": "Gujarat, India",
  "name": "High-Rise Tile Pasting",
  "description": "Professional tile pasting for high-rise residential and commercial buildings"
}

const fallbackServices = [
  {
    icon: Building2,
    title: "High-Rise Tiling",
    description:
      "BNS Constructions has completed over 200 high-rise tiling projects across Gujarat. We specialize in facade tiling, lobby flooring, and corridor wall cladding for towers up to 50 floors.",
    bullets: [
      "Facade and exterior wall tiling up to 50+ floors",
      "Lobby, lift lobby, and corridor tiling",
      "Rooftop terrace tiling and waterproofing",
      "Large-format tile installation with precision machinery",
      "Compliance with NBC and IS code standards",
    ],
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "From individual villas to township housing complexes, we deliver impeccable tiling that enhances living spaces. Our teams are trained to work with premium Italian and Spanish tiles.",
    bullets: [
      "Villa and bungalow flooring and wall tiling",
      "Apartment complex common area tiling",
      "Kitchen, bathroom, and living area tiling",
      "Outdoor terrace and garden pathway tiling",
      "Custom pattern and design tiling",
    ],
  },
  {
    icon: Store,
    title: "Commercial Projects",
    description:
      "We deliver high-traffic commercial tiling solutions for malls, offices, hotels, and retail chains. Our materials and workmanship are designed for extreme durability and visual appeal.",
    bullets: [
      "Shopping mall concourse and food court tiling",
      "Hotel lobby, restaurant, and spa flooring",
      "Office reception and workspace tiling",
      "Retail store interior and exterior tiling",
      "Anti-slip tile installation for wet areas",
    ],
  },
  {
    icon: Layers,
    title: "Flooring & Wall Cladding",
    description:
      "Our specialized flooring and cladding division handles complex pattern work, large-format stone cladding, and specialty tile systems for architectural statements.",
    bullets: [
      "Natural stone and marble flooring installation",
      "Exterior stone cladding and facade panels",
      "Swimming pool and fountain tiling",
      "Industrial epoxy and anti-static flooring prep",
      "Heritage tile restoration and matching",
    ],
  },
];

const iconMap: Record<string, React.ElementType> = {
  Building2, Home, Store, Layers,
}


type SanityServiceRaw = {
  icon?: string;
  title: string;
  fullDescription?: string;
  shortDescription?: string;
  features?: string[];
  mainImage?: object;
};

export default async function ServicesPage() {
  const sanityServices: SanityServiceRaw[] = await client.fetch(servicesQuery).catch(() => []);

  const services = sanityServices.length > 0
    ? sanityServices.map((s, index) => ({
        icon: iconMap[s.icon ?? ''] ?? fallbackServices[index % fallbackServices.length].icon,
        title: s.title,
        description: s.fullDescription || s.shortDescription || '',
        bullets: s.features || [],
        mainImage: s.mainImage ?? null,
      }))
    : fallbackServices.map((s) => ({ ...s, mainImage: null }));

  return (
    <div className="pt-20 bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="bg-dark-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="font-cormorant text-6xl md:text-8xl text-light leading-none mb-6">
            Our Services
          </h1>
          <p className="text-grey text-base max-w-2xl leading-relaxed">
            From ground-level flooring to sky-high facade tiling, BNS Constructions delivers end-to-end
            tiling solutions for every type of construction project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {services.map((service: { icon: React.ElementType; title: string; description: string; bullets: string[]; mainImage: object | null }, index: number) => {
            const Icon = service.icon;
            return (
              <div key={service.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="bg-gold/10 border border-gold/20 p-3">
                        <Icon size={28} className="text-gold" />
                      </div>
                      <h2 className="font-cormorant text-4xl text-light">{service.title}</h2>
                    </div>
                    <p className="text-grey leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet: string) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-grey">
                          <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-[4/3] bg-dark-card border border-white/10 overflow-hidden ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                    style={service.mainImage ? undefined : {
                      background: `linear-gradient(135deg, #${(index * 0x111 + 0x0a0a10).toString(16).slice(-6)} 0%, #1a1a2e 100%)`,
                    }}
                  >
                    {service.mainImage && (
                      <Image
                        src={urlFor(service.mainImage).width(800).height(600).url()}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
