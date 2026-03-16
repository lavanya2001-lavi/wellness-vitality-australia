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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {STANDARDS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="group text-center p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E8F2FA] flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-primary text-lg mb-2 font-serif">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20">
            Contact Our Clinical Team
            <span className="text-lg">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
