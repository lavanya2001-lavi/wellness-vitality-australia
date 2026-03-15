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
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8F2FA] flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <p className="font-medium text-gray-700 text-sm">{item.text}</p>
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
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FBF5E8] flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <p className="font-medium text-gray-700 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
