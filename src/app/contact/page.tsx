import { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us — Get a Quote',
  description: 'Contact BNS Constructions for tile pasting services in Gujarat. Call us or send a message to get a free quote for your construction project.',
  openGraph: {
    title: 'Contact BNS Constructions',
    url: 'https://bns-infra.vercel.app/contact',
  },
  alternates: { canonical: 'https://bns-infra.vercel.app/contact' }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas does BNS Constructions serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BNS Constructions serves Surat, Ahmedabad, Vadodara, and all major cities across Gujarat, India."
      }
    },
    {
      "@type": "Question",
      "name": "What type of tiling projects does BNS Constructions handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle high-rise residential, commercial, industrial, and all types of construction tile pasting projects."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get a quote from BNS Constructions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via phone, WhatsApp, or fill in the contact form on our website to get a free project quote."
      }
    }
  ]
}

export default function ContactPage() {
  return (
    <div className="pt-20 bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-dark-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reach Out</p>
          <h1 className="font-cormorant text-6xl md:text-7xl text-light leading-none">
            Get in Touch
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-cormorant text-3xl text-light mb-8">Contact Information</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 border border-gold/20 p-3 shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light text-sm font-medium mb-1">Address</p>
                  <p className="text-grey text-sm leading-relaxed">
                    123, Tileworks Complex, Ring Road,<br />
                    Surat, Gujarat – 395001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 border border-gold/20 p-3 shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light text-sm font-medium mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-grey text-sm hover:text-gold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 border border-gold/20 p-3 shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light text-sm font-medium mb-1">Email</p>
                  <a href="mailto:info@bnsinfra.com" className="text-grey text-sm hover:text-gold transition-colors">
                    info@bnsinfra.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-500 text-white text-sm tracking-wider uppercase transition-colors duration-200"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <div className="mt-12 bg-dark-card border border-white/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-grey/40 mx-auto mb-3" />
                <p className="text-grey text-sm">Map Coming Soon</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-3xl text-light mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
