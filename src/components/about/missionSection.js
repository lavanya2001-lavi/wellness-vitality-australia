"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { SectionHeading } from "../shared/Container";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

export default function MissionSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Our Mission" align="left" />
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              To provide safe, professional and accessible healthcare services that support overall wellbeing for individuals, aged care clients and NDIS participants.
            </p>
            <div className="mt-10 flex items-center gap-6 p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(22,85,143,0.08)] hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(22,85,143,0.3)] transition-all duration-500">
                <Target size={30} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-primary font-serif text-xl mb-1">Patient-Centred Care</p>
                <p className="text-gray-500 text-sm leading-relaxed">Every treatment is uniquely tailored to individual patient needs and requirements.</p>
              </div>
            </div>
            <div className="mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
                Explore Our Services
                <span className="text-lg">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(22,85,143,0.12)] border-[10px] border-white/80 backdrop-blur-sm group">
            <img 
              src="/images/wellness-abstract.png" 
              alt="Our Purpose"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent mix-blend-multiply" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
