"use client";

import { motion } from "framer-motion";
import { Syringe, Home as HomeIcon, UserCheck } from "lucide-react";
import { SectionHeading } from "../shared/Container";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const BENEFITS = [
  { text: "Reduces clinic visits", icon: HomeIcon },
  { text: "Convenient for elderly clients", icon: UserCheck },
  { text: "Suitable for mobility-limited patients", icon: Syringe },
];

export default function BloodCollectionSection() {
  return (
    <Section id="blood-collection" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Blood Collection"
              subtitle="Professional blood collection services delivered at home, workplaces, aged care facilities or NDIS residences."
              align="left"
            />
            <div className="space-y-5 mt-10">
              {BENEFITS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative group flex items-center gap-6 p-6 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,163,209,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4FA3D1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-gradient-to-br group-hover:from-[#16558F] group-hover:to-[#4FA3D1] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(79,163,209,0.3)] transition-all duration-500">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <p className="relative z-10 font-bold text-gray-800 text-[16px] leading-tight">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <a href="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
                Book a Blood Collection
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl shadow-primary/5 border-8 border-white hidden lg:block"
          >
            <img
              src="/images/blood-collection.png"
              alt="Mobile Pathology Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
