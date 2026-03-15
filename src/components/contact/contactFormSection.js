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
            className="p-10 md:p-14 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-primary/5"
          >
            <h2 className="text-3xl font-bold text-primary font-serif mb-2 text-center">Send an Enquiry</h2>
            <p className="text-gray-500 text-center mb-10">Fill out the form below and our team will get back to you.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-gray-700"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-gray-700"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-gray-700"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enquiry</label>
                <textarea
                  name="enquiry" value={form.enquiry} onChange={handleChange} required rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-gray-700 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button type="submit" variant="cta" className="px-12 py-4 text-lg">
                <span className="flex items-center gap-2">Send Enquiry <Send size={18} /></span>
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
