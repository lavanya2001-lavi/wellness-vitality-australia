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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10"
          >
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 flex items-center justify-center mb-8">
              <Droplets size={40} className="text-secondary" />
            </div>
            <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
              Our IV infusion treatments are administered by AHPRA-registered nurses and tailored to each patient&apos;s needs. Choose from our range of therapy options including immune support, energy boosters, beauty drips and more.
            </p>
            <Button href="/iv-infusions" variant="cta" className="px-12 py-4 text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] border border-[#D4AF37]/50">
              Explore IV Infusions
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
