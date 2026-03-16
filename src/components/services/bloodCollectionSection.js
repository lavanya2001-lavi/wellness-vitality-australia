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
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-5 p-5 rounded-[1.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8F2FA] flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <a href="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20">
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
