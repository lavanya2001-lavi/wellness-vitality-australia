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
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E8F2FA] flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-primary font-serif mb-2">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
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
