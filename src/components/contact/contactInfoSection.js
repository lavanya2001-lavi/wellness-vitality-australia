"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const INFO = [
  { icon: Mail, label: "Email", value: "admin@wellnessvitalityaustralia.com.au", href: "mailto:admin@wellnessvitalityaustralia.com.au" },
  { icon: MapPin, label: "Location", value: "Melbourne, Victoria, Australia", href: null },
  { icon: Phone, label: "Phone", value: "Contact via enquiry form", href: null },
];

export default function ContactInfoSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFO.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
                className="group relative text-center p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(22,85,143,0.3)] transition-all duration-500">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <p className="relative z-10 text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="relative z-10 text-primary font-semibold hover:text-secondary transition-colors text-sm break-all">{item.value}</a>
                ) : (
                  <p className="relative z-10 text-gray-700 font-semibold text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
