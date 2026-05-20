"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThreePanelSection() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Panel 1 — Dark with text */}
      <div
        className="relative flex-1 flex items-center p-12 lg:p-16"
        style={{ backgroundColor: "#1A1A1A", minHeight: "500px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/construction-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="relative z-10 max-w-sm">
          <div className="w-10 h-px bg-gold mb-8" />
          <h2 className="font-cormorant text-4xl text-light mb-6 leading-tight">
            20 Years of Precision Tiling
          </h2>
          <p className="text-grey text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {"Gujarat’s most trusted tile application contractor for high-rise residential and commercial construction. Built on precision, delivered on time."}
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-gold text-dark text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-colors duration-200"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Panel 2 — Projects image */}
      <motion.div
        className="relative flex-1 overflow-hidden"
        style={{ backgroundColor: "#0d1117", minHeight: "500px" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/projects-panel.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-10 left-10 z-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">Our</p>
          <h2 className="font-cormorant text-6xl text-light leading-none mb-6">Projects</h2>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-200"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>

      {/* Panel 3 — Services image */}
      <motion.div
        className="relative flex-1 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a", minHeight: "500px" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/services-panel.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-10 left-10 z-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">Our</p>
          <h2 className="font-cormorant text-6xl text-light leading-none mb-6">Services</h2>
          <Link
            href="/services"
            className="inline-block px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-200"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
