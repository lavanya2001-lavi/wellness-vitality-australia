"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Sparkles, Leaf, Droplets, Dumbbell } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const TREATMENTS = [
  {
    title: "Immune Defence IV",
    description: "High-dose Vitamin C, Zinc and Antioxidants to support immune function.",
    price: "From $250",
    icon: ShieldCheck,
    color: "#16558F",
  },
  {
    title: "Energy & Performance IV",
    description: "B-Complex vitamins and amino acids to combat fatigue and boost energy.",
    price: "From $250",
    icon: Zap,
    color: "#B49A63",
  },
  {
    title: "Beauty & Skin Glow IV",
    description: "Glutathione and Vitamin C for radiant skin and collagen support.",
    price: "From $280",
    icon: Sparkles,
    color: "#16558F",
  },
  {
    title: "Detox & Liver Support IV",
    description: "Targeted nutrients to support liver function and natural detoxification.",
    price: "From $270",
    icon: Leaf,
    color: "#B49A63",
  },
  {
    title: "Hydration & Recovery IV",
    description: "Essential electrolytes and fluids for rapid rehydration and recovery.",
    price: "From $220",
    icon: Droplets,
    color: "#16558F",
  },
  {
    title: "Athlete Recovery IV",
    description: "Advanced recovery blend for athletes with amino acids and minerals.",
    price: "From $300",
    icon: Dumbbell,
    color: "#B49A63",
  },
];

export default function IvTreatmentsSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <SectionHeader
          title="IV Infusion Treatments"
          subtitle="Choose from our range of professionally formulated IV infusion treatments."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {TREATMENTS.map((treatment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                style={{ backgroundColor: `${treatment.color}15`, color: treatment.color }}
              >
                <treatment.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif mb-3">{treatment.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{treatment.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-lg font-bold text-secondary font-serif">{treatment.price}</span>
                <span className="text-xs font-semibold text-primary/40 uppercase tracking-wider">Per Session</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
