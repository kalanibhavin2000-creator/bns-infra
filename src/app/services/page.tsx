import { Building2, Home, Store, Layers, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "High-Rise Tiling",
    description:
      "BNS Infra has completed over 200 high-rise tiling projects across Gujarat. We specialize in facade tiling, lobby flooring, and corridor wall cladding for towers up to 50 floors.",
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

const processSteps = [
  {
    step: "01",
    title: "Survey",
    description: "On-site assessment of surfaces, area measurements, and material requirements.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Detailed layout drawings, material selection, and project timeline finalization.",
  },
  {
    step: "03",
    title: "Execute",
    description: "Skilled crew deployment with quality checks at every stage of tile installation.",
  },
  {
    step: "04",
    title: "Handover",
    description: "Final inspection, cleaning, and documentation handover with 1-year warranty.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-dark">
      <div className="bg-dark-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="font-barlow text-6xl md:text-8xl text-light leading-none mb-6">
            Our Services
          </h1>
          <p className="text-grey text-base max-w-2xl leading-relaxed">
            From ground-level flooring to sky-high facade tiling, BNS Infra delivers end-to-end
            tiling solutions for every type of construction project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gold/10 border border-gold/20 p-3">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <h2 className="font-barlow text-4xl text-light">{service.title}</h2>
                  </div>
                  <p className="text-grey leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-grey">
                        <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`aspect-[4/3] bg-dark-card border border-white/10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, #${(index * 0x111 + 0x0a0a10).toString(16).slice(-6)} 0%, #1a1a2e 100%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-dark-card border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">How We Work</p>
            <h2 className="font-barlow text-5xl text-light">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gold/20 z-0" />
                )}
                <div className="relative bg-dark border border-white/10 p-6">
                  <span className="font-barlow text-5xl text-gold/20 block mb-3">{step.step}</span>
                  <h3 className="font-barlow text-2xl text-light mb-2">{step.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
