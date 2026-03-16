"use client";

import { motion } from "framer-motion";
import { Syringe, Pill, Salad, Sparkles, HeartHandshake, ClipboardList, TrendingUp } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const VITAMIN_SERVICES = [
  { text: "B12 injections", icon: Syringe },
  { text: "Vitamin D injections", icon: Syringe },
  { text: "Amino acid injections", icon: Syringe },
  { text: "Anti-fatigue injections", icon: Syringe },
];

const LIFESTYLE_SERVICES = [
  { text: "Nutrition guidance (general advice)", icon: Salad },
  { text: "Supplement guidance", icon: Pill },
  { text: "Lifestyle health consultations", icon: HeartHandshake },
  { text: "Health optimisation programmes", icon: TrendingUp },
];

export default function PreventativeHealthSection() {
  return (
    <Section id="preventative" className="bg-white">
      <Container>
        <SectionHeader
          title="Preventative Health & Wellness"
          subtitle="Our preventative health services focus on improving wellbeing through targeted vitamin support and lifestyle health guidance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          {/* Vitamin & Nutrient Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">Vitamin & Nutrient Services</h3>
            </div>
            <div className="space-y-4">
              {VITAMIN_SERVICES.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative group flex items-center gap-5 p-5 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(22,85,143,0.3)] transition-all duration-500">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="relative z-10 font-bold text-gray-800 text-[15px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lifestyle & Preventative Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <ClipboardList size={20} />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">Lifestyle & Preventative Health</h3>
            </div>
            <div className="space-y-4">
              {LIFESTYLE_SERVICES.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative group flex items-center gap-5 p-5 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(180,154,99,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(180,154,99,0.3)] transition-all duration-500">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="relative z-10 font-bold text-gray-800 text-[15px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
