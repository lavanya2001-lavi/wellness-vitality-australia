"use client";

import { motion } from "framer-motion";
import { Building2, Droplets, FlaskConical, TestTube } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

const SERVICES = [
  {
    title: "Workplace health checks",
    description: "Comprehensive on-site wellness assessments for your team.",
    icon: Building2,
  },
  {
    title: "Corporate IV hydration services",
    description: "Boost staff energy and recovery with professional IV therapy.",
    icon: Droplets,
  },
  {
    title: "Drug and alcohol screening",
    description: "Compliant workplace screening performed by qualified nurses.",
    icon: FlaskConical,
  },
  {
    title: "Workplace blood testing",
    description: "Convenient pathology collection at your office or facility.",
    icon: TestTube,
  },
];

export default function CorporateServicesSection() {
  return (
    <Section id="corporate" className="bg-white">
      <Container>
        <SectionHeader
          title="Corporate & Workplace Health Services"
          subtitle="We provide professional healthcare services designed for organisations and workplaces."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,163,209,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FA3D1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-gradient-to-br group-hover:from-[#16558F] group-hover:to-[#4FA3D1] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(79,163,209,0.3)] transition-all duration-500">
                <service.icon size={30} strokeWidth={1.5} />
              </div>
              <h4 className="relative z-10 text-2xl font-bold text-primary font-serif mb-3 leading-tight">{service.title}</h4>
              <p className="relative z-10 text-gray-500 leading-relaxed text-[15px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/contact" variant="primary" className="px-12 py-4 text-lg">
            Enquire About Corporate Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
