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
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E8F2FA] flex items-center justify-center mb-5 text-primary">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-primary font-semibold hover:text-secondary transition-colors text-sm break-all">{item.value}</a>
                ) : (
                  <p className="text-gray-700 font-semibold text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
