"use client";

import { motion } from "framer-motion";
import { Droplets, ClipboardCheck, ShieldCheck, HeartPulse, Syringe, Users } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import { ServiceCard } from "../shared/serviceCard";
import Container from "../shared/Container";

const SERVICES = [
  {
    title: "IV Infusions",
    description: "Intravenous therapy delivering essential nutrients directly into the bloodstream for optimal absorption.",
    icon: Droplets,
    href: "/services#iv-infusions"
  },
  {
    title: "Health Assessments",
    description: "Comprehensive nursing health assessments and clinical reports for ongoing health monitoring.",
    icon: ClipboardCheck,
    href: "/services#assessments"
  },
  {
    title: "Preventative Health & Wellness",
    description: "Tailored strategies and treatments designed to maintain optimal health and prevent illness.",
    icon: ShieldCheck,
    href: "/services#preventative"
  },
  {
    title: "Aged Care & NDIS Nursing",
    description: "Specialised in-home nursing support for aged care and NDIS participants.",
    icon: HeartPulse,
    href: "/services#ndis"
  },
  {
    title: "Blood Collection",
    description: "Professional pathology collection services performed by qualified practitioners.",
    icon: Syringe,
    href: "/services#blood-collection"
  },
  {
    title: "Corporate Health Services",
    description: "Staff wellness programs and onsite health checks for modern workplaces.",
    icon: Users,
    href: "/services#corporate"
  }
];

export default function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title="Our Clinical & Wellness Services"
            subtitle="We offer a range of professional healthcare and wellness services tailored to your needs."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
