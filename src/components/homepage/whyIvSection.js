"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Layers } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const WHY_IV_THERAPY = [
  {
    title: "Direct Nutrient Delivery",
    desc: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system.",
    icon: Zap
  },
  {
    title: "Higher Nutrient Levels",
    desc: "Intravenous delivery can achieve higher circulating nutrient concentrations compared with oral supplementation.",
    icon: TrendingUp
  },
  {
    title: "Supports Cellular Energy Production",
    desc: "Many IV nutrients support mitochondrial function and cellular metabolism.",
    icon: Layers
  }
];

export default function WhyIvSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <SectionHeader
          title="Why IV Therapy"
          subtitle="Understanding the clinical benefits of intravenous nutrient delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {WHY_IV_THERAPY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[#E8F2FA] flex items-center justify-center mb-8 text-primary">
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
