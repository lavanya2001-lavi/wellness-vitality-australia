"use client";

import { motion } from "framer-motion";
import { Home as HomeIcon, Building2, Users, MapPin } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const LOCATIONS = [
  { title: "Private Homes", desc: "Receive treatments in the comfort of your own home.", icon: HomeIcon },
  { title: "Workplaces", desc: "Corporate wellness and health services at your office.", icon: Building2 },
  { title: "Aged Care Facilities", desc: "On-site nursing support for aged care residents.", icon: Users },
  { title: "NDIS Residences", desc: "Dedicated services for NDIS participants.", icon: MapPin },
];

export default function MobileHealthcareSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <SectionHeader title="Healthcare That Comes To You" subtitle="Our mobile healthcare services allow patients to receive professional treatments in homes, workplaces, aged care facilities and NDIS residences." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {LOCATIONS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="group p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FBF5E8] flex items-center justify-center mb-5 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-primary text-lg mb-2 font-serif">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
