import { Scale, Clock, Award, ShieldCheck } from "lucide-react";

const usps = [
  {
    icon: Scale,
    title: "Large Scale Capacity",
    description:
      "With a skilled workforce of 200+ professionals and advanced equipment, we handle projects of any scale — from single floors to entire towers.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Our project management systems ensure strict adherence to timelines. Over 95% of our projects are delivered on or ahead of schedule.",
  },
  {
    icon: Award,
    title: "Precision Workmanship",
    description:
      "Every tile is placed with meticulous attention to alignment, grout consistency, and finish — certified to meet IS and international standards.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We maintain rigorous safety protocols on every site. Zero-accident policy, PPE compliance, and regular safety audits are non-negotiable.",
  },
];

export default function WhyBNS() {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Our Edge</p>
          <h2 className="font-cormorant text-5xl md:text-6xl text-light leading-tight">
            Why Choose BNS Infra
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="bg-dark-card border border-white/10 hover:border-gold/30 p-8 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gold/10 border border-gold/20 p-3 shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl text-light mb-3">{usp.title}</h3>
                    <p className="text-grey text-sm leading-relaxed">{usp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
