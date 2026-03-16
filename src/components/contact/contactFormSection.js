"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", enquiry: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will be in touch shortly.");
    setForm({ name: "", phone: "", email: "", enquiry: "" });
  };

  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-10 md:p-14 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_rgba(22,85,143,0.08)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
            
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-primary font-serif mb-3 text-center">Send an Enquiry</h2>
            <p className="relative z-10 text-gray-500 text-center mb-10 text-[15px]">Fill out the form below and our team will get back to you.</p>
            
            <div className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  className="w-full px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 shadow-sm"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 shadow-sm"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 shadow-sm"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enquiry</label>
                <textarea
                  name="enquiry" value={form.enquiry} onChange={handleChange} required rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 resize-none shadow-sm"
                  placeholder="Tell us how we can help..."
                />
              </div>
            </div>

            <div className="relative z-10 mt-10 text-center">
              <Button type="submit" variant="cta" className="px-12 py-4 text-lg hover:shadow-[0_10px_30px_rgba(22,85,143,0.3)] hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">Send Enquiry <Send size={18} /></span>
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
