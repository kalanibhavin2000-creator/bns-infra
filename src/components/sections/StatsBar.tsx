"use client";

import { useState, useEffect, useRef } from "react";

type SanityStat = {
  _id?: string;
  value: string;
  label: string;
};

const fallbackStats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "2M+ Sq Ft", label: "Tiled" },
  { value: "10+", label: "Cities Served" },
];

function parseValue(val: string): { end: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/);
  if (match) return { end: parseInt(match[1]), suffix: match[2] };
  return { end: 0, suffix: val };
}

function CountUp({ end, suffix, trigger }: { end: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, trigger]);

  return (
    <span className="font-cormorant text-5xl md:text-6xl text-gold">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar({ stats: rawStats = [] }: { stats?: SanityStat[] }) {
  const stats = rawStats.length > 0 ? rawStats : fallbackStats;
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-dark-card border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => {
            const { end, suffix } = parseValue(stat.value);
            return (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <CountUp end={end} suffix={suffix} trigger={triggered} />
                <span className="text-grey text-sm tracking-wider uppercase">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
