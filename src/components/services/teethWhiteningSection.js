"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Truck } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const KEY_POINTS = [
  { text: "Improves smile appearance", icon: Sparkles },
  { text: "Can lighten teeth by up to 6–8 shades", icon: Sun },
  { text: "Mobile service available", icon: Truck },
];

export default function TeethWhiteningSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-video rounded-[3rem] bg-gradient-to-br from-secondary/20 to-primary/10 overflow-hidden order-2 lg:order-1"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles size={120} className="text-secondary/20" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <Sun size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-serif">6–8</p>
                  <p className="text-sm text-gray-600 font-medium">Shades Lighter</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <SectionHeader
              title="Teeth Whitening"
              subtitle="Professional teeth whitening treatments delivered by qualified healthcare professionals."
              centered={false}
            />
            <div className="space-y-5 mt-8">
              {KEY_POINTS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20">
                Book Teeth Whitening
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
