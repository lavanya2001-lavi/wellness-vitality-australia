"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Layers } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const REASONS = [
  {
    title: "Direct Nutrient Delivery",
    desc: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system for maximum absorption.",
    icon: Zap,
  },
  {
    title: "Higher Nutrient Levels",
    desc: "Intravenous delivery achieves higher circulating nutrient concentrations compared with oral supplementation.",
    icon: TrendingUp,
  },
  {
    title: "Supports Cellular Energy Production",
    desc: "Many IV nutrients support mitochondrial function and cellular metabolism for sustained energy.",
    icon: Layers,
  },
];

export default function WhyIvTherapySection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <SectionHeader title="Why IV Therapy" subtitle="Understanding the clinical benefits of intravenous nutrient delivery." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4">
          {REASONS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="relative group text-center p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-20 h-20 mx-auto rounded-3xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(22,85,143,0.3)] transition-all duration-500">
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-primary mb-4 font-serif">{item.title}</h3>
              <p className="relative z-10 text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
