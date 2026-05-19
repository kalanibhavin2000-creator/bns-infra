import Link from "next/link";
import { Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative bg-dark-card py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(200,169,110,0.5) 40px,
            rgba(200,169,110,0.5) 41px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(200,169,110,0.5) 40px,
            rgba(200,169,110,0.5) 41px
          )`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-card/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Get Started</p>
        <h2 className="font-barlow text-5xl md:text-7xl text-light leading-tight mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="text-grey text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Whether it's a single floor or a 40-story tower, BNS Infra delivers precision tiling
          that stands the test of time. Let's discuss your project today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-light text-sm tracking-wider uppercase hover:border-white/60 transition-all duration-200"
          >
            <Phone size={16} />
            Call Us Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
