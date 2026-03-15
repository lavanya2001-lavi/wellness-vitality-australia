"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { SectionHeading } from "../shared/Container";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

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
            <div className="mt-8 flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Target size={28} />
              </div>
              <div>
                <p className="font-bold text-primary font-serif text-lg">Patient-Centred Care</p>
                <p className="text-gray-500 text-sm">Every treatment is tailored to individual patient needs.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 border-8 border-white">
            <img 
              src="/images/wellness-abstract.png" 
              alt="Our Purpose"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
