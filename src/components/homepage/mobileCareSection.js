"use client";

import { motion } from "framer-motion";
import { Home as HomeIcon, Activity } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

export default function MobileCareSection() {
  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <HomeIcon size={120} className="text-primary/20" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Activity size={32} className="text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary font-serif">80%</p>
                    <p className="text-sm text-gray-600 font-medium">Patient Preference for Home Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <SectionHeader
              title="Healthcare That Comes To You"
              subtitle="Wellness Vitality Australia provides premium healthcare services delivered at home due to comfort and convenience."
              centered={false}
            />
            <div className="space-y-6 mt-8">
              {[
                "80% of patients prefer healthcare services delivered at home due to comfort and convenience",
                "Mobile healthcare can reduce clinic visits and waiting times",
                "Services available at homes, workplaces, aged care facilities and NDIS residences"
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
              >
                Book a Home Visit
                <span className="text-lg">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
