"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Stethoscope } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

const STANDARDS = [
  { title: "AHPRA Registered", desc: "All practitioners are fully registered with the Australian Health Practitioner Regulation Agency.", icon: ShieldCheck },
  { title: "Clinical Protocols", desc: "Services follow appropriate clinical protocols and evidence-based guidelines.", icon: FileCheck },
  { title: "Quality Assurance", desc: "Ongoing training and quality assurance measures ensure the highest standard of care.", icon: Award },
  { title: "Professional Care", desc: "Treatments are delivered by experienced registered nurses with clinical expertise.", icon: Stethoscope },
];

export default function ClinicalStandardsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader title="Clinical Standards" subtitle="All services are delivered by AHPRA-registered healthcare professionals following appropriate clinical protocols and Australian healthcare guidelines." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {STANDARDS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="relative group text-center p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(22,85,143,0.3)] transition-all duration-500">
                <item.icon size={30} strokeWidth={1.5} />
              </div>
              <h4 className="relative z-10 font-bold text-primary text-xl mb-3 font-serif">{item.title}</h4>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
            Contact Our Clinical Team
            <span className="text-lg">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
