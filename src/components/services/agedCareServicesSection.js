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
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[#E8F2FA] flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <item.icon size={22} strokeWidth={1.5} />
      </div>
      <p className="font-semibold text-gray-700 text-[15px]">{item.text}</p>
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
