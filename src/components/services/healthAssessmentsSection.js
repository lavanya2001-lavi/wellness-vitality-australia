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
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-5 p-5 rounded-[1.5rem] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F2FA] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-gray-700 text-[15px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
