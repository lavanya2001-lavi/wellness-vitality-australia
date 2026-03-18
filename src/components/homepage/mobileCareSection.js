"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

export default function MobileCareSection() {
  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ── Left Image ── */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-[#4FA3D1]/5"
            >
              <img
                src="/images/home_care.png"
                alt="Professional nursing care at home"
                className="w-full h-full object-cover object-center"
              />
              {/* Darker Overlay for better visibility */}
              <div className="absolute inset-0 bg-[#0F172A]/20 mix-blend-multiply opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-xl bg-[#00B7B1] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-serif leading-none">24/7</p>
                    <p className="text-[10px] uppercase tracking-wider opacity-90 mt-1">Care Support Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#4FA3D1]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#4FA3D1]">
                Mobile Healthcare
              </span>
            </div>
            
            <h2 className="font-serif font-bold text-[#0F172A] leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
              Healthcare That <span className="italic opacity-80">Comes To You</span>
            </h2>
            
            <p className="text-[0.95rem] text-[#4B5563] leading-relaxed mb-8">
              Wellness Vitality Australia provides premium healthcare services delivered at your home, workplace, or facility for ultimate clinical comfort and convenience.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "80% of patients prefer healthcare services delivered at home",
                "Reduce clinic visits and waiting times significantly",
                "Available at homes, workplaces, and care facilities"
              ].map((point, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="shrink-0 text-[#00B7B1]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-[#4B5563] text-[0.9rem] font-medium">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-[0.9rem] transition-all hover:shadow-[0_15px_35px_rgba(79,163,209,0.3)] hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #4FA3D1 0%, #00B7B1 100%)" }}
            >
              Book a Home Visit
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
