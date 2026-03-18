"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, HeartPulse, Activity, ShieldCheck, Scale } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const SERVICES = [
  { text: "Comprehensive wellness checks", icon: ClipboardCheck },
  { text: "Vital signs monitoring", icon: Activity },
  { text: "Cardiovascular risk screening", icon: HeartPulse },
  { text: "Diabetes risk screening", icon: ShieldCheck },
  { text: "Weight and metabolic assessments", icon: Scale },
];

export default function HealthAssessmentsSection() {
  return (
    <Section id="assessments" className="bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Health Assessments – Aged Care & NDIS"
              subtitle="We provide comprehensive health assessments designed to support aged care residents and NDIS participants with ongoing health monitoring and preventative care."
              centered={false}
            />
          </motion.div>

          <div className="space-y-5">
            {SERVICES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative group flex items-center gap-6 p-6 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,163,209,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4FA3D1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-gradient-to-br group-hover:from-[#16558F] group-hover:to-[#4FA3D1] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(79,163,209,0.3)] transition-all duration-500">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <p className="relative z-10 font-bold text-gray-800 text-[16px] leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
