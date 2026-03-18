"use client";

import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

export default function IvInfusionOverviewSection() {
  return (
    <Section id="iv-infusions" dark={true} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              dark={true}
              title="IV Infusions"
              subtitle="Targeted intravenous nutrient and hydration therapies designed to support energy, recovery, immune function and overall wellbeing."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 p-12 rounded-[3.5rem] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.12] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4FA3D1]/15 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#16558F] to-[#4FA3D1] flex items-center justify-center mb-10 shadow-[0_15px_40px_rgba(79,163,209,0.4)]">
              <Droplets size={44} className="text-white" />
            </div>
            <p className="text-white/95 text-xl leading-relaxed max-w-xl mx-auto mb-12" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
              Our IV infusion treatments are administered by AHPRA-registered nurses and tailored to each patient&apos;s needs. Choose from our range of therapy options including immune support, energy boosters, beauty drips and more.
            </p>
            <Button href="/iv-infusions" variant="primary" className="px-14 py-5 text-xl tracking-wide shadow-[0_15px_45px_rgba(22,85,143,0.5)] border border-white/10">
              Explore IV Infusions
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
