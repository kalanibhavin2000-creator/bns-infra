"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const bezier: [number, number, number, number] = [0.76, 0, 0.24, 1];

const overlayVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: bezier },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.5, ease: bezier },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 as const } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: bezier },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      // At the top always show; otherwise show on scroll-up, hide on scroll-down
      if (currentY < 50) {
        setNavVisible(true);
      } else {
        setNavVisible(currentY < lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Navbar bar (logo only) — slides up on scroll down ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled ? "#1A1A1A" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: navVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-20">
          <Link href="/" className="font-cormorant text-2xl tracking-widest text-gold">
            BNS CONSTRUCTIONS
          </Link>
        </div>
      </motion.nav>

      {/* ── Hamburger — always fixed top-right, independent of navbar ── */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="fixed top-4 right-6 lg:right-8 z-[60] w-12 h-12 rounded-full flex items-center justify-center border border-gold/50 bg-black/40 backdrop-blur-sm"
          style={{ color: "#C8A96E" }}
        >
          <Menu size={32} />
        </button>
      )}

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col"
            style={{ backgroundColor: "#1A1A1A" }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-6 lg:px-8 h-20 shrink-0">
              <Link
                href="/"
                className="font-cormorant text-2xl tracking-widest text-gold"
                onClick={() => setMenuOpen(false)}
              >
                BNS CONSTRUCTIONS
              </Link>
              {/* Close button — same size/style as hamburger */}
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-12 h-12 rounded-full flex items-center justify-center border border-gold/50"
                style={{ color: "#C8A96E" }}
              >
                <X size={32} />
              </button>
            </div>

            {/* Links — centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <motion.ul
                className="flex flex-col items-center gap-3 lg:gap-4"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-cormorant text-3xl lg:text-4xl uppercase text-white hover:text-gold transition-colors duration-200 tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* GET A QUOTE */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
