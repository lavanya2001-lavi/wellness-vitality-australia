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
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(22,85,143,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: `linear-gradient(to bottom right, ${treatment.color}08, transparent)` }} 
              />
              <div
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: `${treatment.color}15`, color: treatment.color }}
              >
                <treatment.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-primary font-serif mb-3 leading-tight">{treatment.title}</h3>
              <p className="relative z-10 text-gray-500 text-[15px] leading-relaxed mb-8">{treatment.description}</p>
              <div className="relative z-10 flex items-center justify-between pt-5 border-t border-gray-100/80">
                <span className="text-xl font-bold text-secondary font-serif">{treatment.price}</span>
                <span className="text-xs font-bold text-primary/40 uppercase tracking-[0.1em]">Per Session</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
