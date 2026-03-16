"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

export default function IvBookingCtaSection() {
  return (
    <Section dark={true} className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader dark={true} title="Book Your IV Infusion" subtitle="Schedule your IV infusion appointment through our secure online booking system." />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="mt-8 p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-8">
              <Calendar size={36} className="text-secondary" />
            </div>
            <p className="text-white/80 mb-10 max-w-md mx-auto">Choose a convenient date and time for your IV infusion session.</p>
            <Button href="/booking" variant="cta" className="px-12 py-5 text-xl shadow-[0_0_30px_rgba(180,154,99,0.3)] border border-[#B49A63]/50">
              Book Appointment
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
