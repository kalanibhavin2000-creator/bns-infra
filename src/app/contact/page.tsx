"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";

const projectTypes = [
  "High-Rise Tiling",
  "Residential Project",
  "Commercial Project",
  "Industrial Facility",
  "Flooring & Wall Cladding",
  "Other",
];

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="pt-20 bg-dark min-h-screen">
      <div className="bg-dark-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reach Out</p>
          <h1 className="font-barlow text-6xl md:text-7xl text-light leading-none">
            Get in Touch
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-barlow text-3xl text-light mb-8">Contact Information</h2>
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
            <h2 className="font-barlow text-3xl text-light mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-dark-card border border-gold/30 p-10 text-center">
                <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-barlow text-3xl text-light mb-3">Message Sent!</h3>
                <p className="text-grey text-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                  className="text-gold text-sm tracking-wider uppercase border border-gold/40 px-6 py-2 hover:bg-gold hover:text-dark transition-all duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-grey/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-grey/50"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-grey/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-grey/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors appearance-none"
                  >
                    <option value="" className="text-grey">Select project type</option>
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt} className="bg-dark-card">
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-grey text-xs tracking-wider uppercase block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-grey/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-dark text-sm tracking-wider uppercase font-medium py-4 hover:bg-gold/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
