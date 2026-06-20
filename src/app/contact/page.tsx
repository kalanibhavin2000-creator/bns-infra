import { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { client } from "@/lib/sanity";
import { contactPageQuery } from "@/lib/queries";

export const revalidate = 60;

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

type ContactData = {
  heading?: string;
  subtext?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  googleMapsEmbedUrl?: string;
};

type SiteSettingsContact = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  googleMapsUrl?: string;
};

export default async function ContactPage() {
  const [contactData, siteSettings] = await Promise.all([
    client.fetch<ContactData>(contactPageQuery).catch(() => null),
    client.fetch<SiteSettingsContact>(
      `*[_type == "siteSettings"][0]{ phone, whatsapp, email, address, googleMapsUrl }`
    ).catch(() => null),
  ]);

  const phone = contactData?.phone || siteSettings?.phone || "Add phone in CMS";
  const whatsapp = contactData?.whatsapp || siteSettings?.whatsapp || siteSettings?.phone || phone;
  const email = contactData?.email || siteSettings?.email || "Add email in CMS";
  const address = contactData?.address || siteSettings?.address || "Add address in CMS";
  const googleMapsUrl = contactData?.googleMapsEmbedUrl || siteSettings?.googleMapsUrl || null;

  const waNumber = whatsapp.replace(/\D/g, "");
  const telNumber = phone.replace(/\D/g, "");

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
            {contactData?.heading || "Get in Touch"}
          </h1>
          {contactData?.subtext && (
            <p className="text-grey text-base max-w-2xl mt-4 leading-relaxed">{contactData.subtext}</p>
          )}
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
                  <p className="text-grey text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                    {address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 border border-gold/20 p-3 shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light text-sm font-medium mb-1">Phone</p>
                  {telNumber ? (
                    <a href={`tel:+${telNumber}`} className="text-grey text-sm hover:text-gold transition-colors">
                      {phone}
                    </a>
                  ) : (
                    <span className="text-grey text-sm">{phone}</span>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 border border-gold/20 p-3 shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light text-sm font-medium mb-1">Email</p>
                  {email.includes("@") ? (
                    <a href={`mailto:${email}`} className="text-grey text-sm hover:text-gold transition-colors">
                      {email}
                    </a>
                  ) : (
                    <span className="text-grey text-sm">{email}</span>
                  )}
                </div>
              </div>
            </div>

            {waNumber && (
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-500 text-white text-sm tracking-wider uppercase transition-colors duration-200"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            )}

            <div className="mt-12 bg-dark-card border border-white/10 aspect-video flex items-center justify-center overflow-hidden">
              {googleMapsUrl ? (
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="text-center">
                  <MapPin size={32} className="text-grey/40 mx-auto mb-3" />
                  <p className="text-grey text-sm">Map Coming Soon</p>
                </div>
              )}
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
