"use client";

import { motion } from "framer-motion";
import { Pill, Scissors, Thermometer, ShieldCheck, HeartPulse, Activity, Bandage } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const COL_ONE = [
  { text: "Medication administration", icon: Pill },
  { text: "Wound care and dressings", icon: Bandage },
  { text: "Catheter care", icon: Activity },
  { text: "Continence assessments", icon: ShieldCheck },
];

const COL_TWO = [
  { text: "Pressure injury prevention", icon: Thermometer },
  { text: "Chronic disease monitoring", icon: HeartPulse },
  { text: "Post-hospital care", icon: Scissors },
];

function ServiceItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative group flex items-center gap-5 p-5 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,163,209,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4FA3D1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-gradient-to-br group-hover:from-[#16558F] group-hover:to-[#4FA3D1] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(79,163,209,0.3)] transition-all duration-500">
        <item.icon size={22} strokeWidth={1.5} />
      </div>
      <p className="relative z-10 font-bold text-gray-800 text-[15px]">{item.text}</p>
    </motion.div>
  );
}

export default function AgedCareServicesSection() {
  return (
    <Section id="ndis" className="bg-[#F8FAFC]">
      <Container>
        <SectionHeader
          title="Aged Care & NDIS Nursing Services"
          subtitle="These services provide ongoing clinical support for individuals requiring regular nursing care."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-5">
            {COL_ONE.map((item, i) => (
              <ServiceItem key={i} item={item} index={i} />
            ))}
          </div>
          <div className="space-y-5">
            {COL_TWO.map((item, i) => (
              <ServiceItem key={i} item={item} index={i + COL_ONE.length} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
