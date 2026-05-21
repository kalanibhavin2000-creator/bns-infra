import { Metadata } from "next";
import { Scale, Clock, Award, ShieldCheck } from "lucide-react";
import { client } from "@/lib/sanity";
import { aboutPageQuery, teamQuery } from "@/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About Us — 20 Years of Precision',
  description: "Learn about BNS Constructions — Gujarat's trusted tile pasting contractor with 20+ years of experience, 500+ projects, and a commitment to precision workmanship.",
  openGraph: {
    title: 'About BNS Constructions',
    url: 'https://bns-infra.vercel.app/about',
  },
  alternates: { canonical: 'https://bns-infra.vercel.app/about' }
}

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years of Excellence" },
  { value: "2M+", label: "Sq Ft Tiled" },
  { value: "200+", label: "Skilled Professionals" },
];

const usps = [
  { icon: Scale, title: "Large Scale Capacity", description: "Equipment and manpower for any project size." },
  { icon: Clock, title: "On-Time Delivery", description: "95%+ projects delivered on or ahead of schedule." },
  { icon: Award, title: "Precision Workmanship", description: "IS and international standards compliance." },
  { icon: ShieldCheck, title: "Safety First", description: "Zero-accident policy on every site." },
];

const fallbackTeam = [
  { name: "Bhavesh Patel", role: "Founder & Managing Director" },
  { name: "Nilesh Shah", role: "Head of Operations" },
  { name: "Suresh Mehta", role: "Senior Project Manager" },
];

export default async function AboutPage() {
  const [aboutData, teamData] = await Promise.all([
    client.fetch(aboutPageQuery).catch(() => null),
    client.fetch(teamQuery).catch(() => []),
  ]);

  const team = teamData.length > 0
    ? teamData.map((m: { name: string; role: string }) => ({ name: m.name, role: m.role }))
    : fallbackTeam;

  const heroHeading = aboutData?.heroHeading || "Built on Precision, Driven by Passion";
  const heroSubtext = aboutData?.heroSubtext || "For over 15 years, BNS Constructions has been Gujarat's trusted name in tile pasting, transforming construction projects of every scale with craftsmanship and commitment.";
  const storyHeading = aboutData?.storyHeading || "From a Small Crew to Gujarat's Leading Tile Contractor";

  return (
    <div className="pt-20 bg-dark">
      <div className="bg-dark-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">About BNS Constructions</p>
          <h1 className="font-cormorant text-6xl md:text-8xl text-light leading-none mb-6 max-w-3xl">
            {heroHeading}
          </h1>
          <p className="text-grey text-base max-w-2xl leading-relaxed">
            {heroSubtext}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-light mb-6">
              {storyHeading}
            </h2>
            <div className="space-y-4 text-grey leading-relaxed">
              {aboutData?.storyText ? (
                <p>{aboutData.storyText}</p>
              ) : (
                <>
                  <p>
                    BNS Constructions was founded in 2010 by Bhavesh Patel with a team of just 12 tilers and a
                    vision to deliver precision tiling at every scale. Starting with residential projects
                    in Surat, the company quickly earned a reputation for quality and reliability.
                  </p>
                  <p>
                    By 2015, BNS Constructions had expanded into commercial and industrial tiling, taking on
                    landmark projects including the Crystal Mall in Surat and the Zydus Pharma Complex
                    in Ahmedabad.
                  </p>
                  <p>
                    Today, with a workforce of 200+ skilled professionals and operations across 10+
                    cities in Gujarat, BNS Constructions stands as the region&apos;s most trusted tile
                    pasting contractor for high-rise and large-scale construction.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-card border border-white/10 p-8 text-center">
                <span className="font-cormorant text-5xl text-gold block mb-2">{stat.value}</span>
                <span className="text-grey text-sm tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-dark-card border-t border-b border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Our Strengths</p>
            <h2 className="font-cormorant text-5xl text-light">Why BNS Constructions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="bg-dark border border-white/10 p-6 text-center">
                  <div className="inline-flex bg-gold/10 border border-gold/20 p-3 mb-4">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-cormorant text-xl text-light mb-2">{usp.title}</h3>
                  <p className="text-grey text-sm">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">The Team</p>
          <h2 className="font-cormorant text-5xl text-light">Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((member: { name: string; role: string }) => (
            <div key={member.name} className="bg-dark-card border border-white/10 overflow-hidden">
              <div
                className="aspect-[4/3]"
                style={{ background: "linear-gradient(135deg, #1a1a2e, #2e2e4a)" }}
              />
              <div className="p-5 text-center">
                <h3 className="font-cormorant text-xl text-light">{member.name}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
