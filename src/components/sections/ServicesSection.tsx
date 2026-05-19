import { Building2, Home, Store, Layers } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "High-Rise Tiling",
    description:
      "Expert tile installation for skyscrapers and multi-story buildings, meeting the highest safety and quality standards.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Beautiful, durable tiling solutions for villas, apartments, and housing complexes tailored to every lifestyle.",
  },
  {
    icon: Store,
    title: "Commercial Projects",
    description:
      "Premium tiling for malls, offices, hotels, and retail spaces designed for high footfall and longevity.",
  },
  {
    icon: Layers,
    title: "Flooring & Wall Cladding",
    description:
      "Precision flooring and wall cladding services using the finest materials for a flawless finish every time.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-light py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="font-cormorant text-5xl md:text-6xl text-dark leading-tight">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-dark/10 p-8 hover:bg-dark transition-all duration-300 cursor-default"
              >
                <Icon
                  size={32}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-cormorant text-2xl text-dark group-hover:text-light mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-grey group-hover:text-light/70 text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
