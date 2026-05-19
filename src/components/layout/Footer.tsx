import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-barlow text-2xl tracking-widest text-gold mb-4">BNS INFRA</h3>
            <p className="text-grey text-sm leading-relaxed mb-4">
              Precision Tiling for Every Scale
            </p>
            <p className="text-grey text-sm leading-relaxed">
              BNS Infra is a leading tile pasting contractor specializing in high-rise buildings,
              commercial complexes, residential projects, and industrial facilities across Gujarat.
            </p>
          </div>

          <div>
            <h4 className="text-light font-barlow text-lg tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-grey group-hover:bg-gold transition-colors duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-light font-barlow text-lg tracking-wider uppercase mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="text-grey text-sm hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@bnsinfra.com" className="text-grey text-sm hover:text-gold transition-colors">
                  info@bnsinfra.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-grey text-sm">
                  123, Tileworks Complex, Ring Road,<br />Surat, Gujarat – 395001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-grey text-xs">
            &copy; {new Date().getFullYear()} BNS Infra. All rights reserved.
          </p>
          <p className="text-grey text-xs">
            Precision Tiling for Every Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
