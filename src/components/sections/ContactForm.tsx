"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

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

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="bg-dark-card border border-gold/30 p-10 text-center">
        <CheckCircle size={48} className="text-gold mx-auto mb-4" />
        <h3 className="font-cormorant text-3xl text-light mb-3">Message Sent!</h3>
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-grey text-xs tracking-wider uppercase block mb-2">Name *</label>
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
          <label className="text-grey text-xs tracking-wider uppercase block mb-2">Company</label>
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
          <label className="text-grey text-xs tracking-wider uppercase block mb-2">Phone *</label>
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
          <label className="text-grey text-xs tracking-wider uppercase block mb-2">Email</label>
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
        <label className="text-grey text-xs tracking-wider uppercase block mb-2">Project Type</label>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full bg-dark-card border border-white/20 text-light text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors appearance-none"
        >
          <option value="" className="text-grey">Select project type</option>
          {projectTypes.map((pt) => (
            <option key={pt} value={pt} className="bg-dark-card">{pt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-grey text-xs tracking-wider uppercase block mb-2">Message *</label>
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
  );
}
