"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Activity, Users, ArrowRight } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const FEATURES = [
  {
    title: "AHPRA-Registered Professionals",
    desc: "Every nurse meets strict Australian healthcare registration standards — no exceptions.",
    icon: ShieldCheck,
    accent: "#4FA3D1",
  },
  {
    title: "Personalised Clinical Care",
    desc: "Full clinical assessment conducted before every single treatment.",
    icon: HeartPulse,
    accent: "#4FA3D1",
  },
  {
    title: "Mobile Healthcare",
    desc: "We come to your home, workplace, or facility — on your schedule.",
    icon: Activity,
    accent: "#4FA3D1",
  },
  {
    title: "Aged Care & NDIS Support",
    desc: "Tailored support for aged care residents and NDIS participants.",
    icon: Users,
    accent: "#4FA3D1",
  },
];

export default function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "#4FA3D1" }} />
              <p className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#00B7B1]">
                Why Choose Us
              </p>
            </div>
            
            <h2 className="font-serif font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Healthcare you can <span className="italic opacity-80">trust and rely on</span>
            </h2>
            
            <p className="text-[0.95rem] leading-relaxed text-[#4B5563] mb-8 max-w-[50ch]">
              Fully qualified, AHPRA-registered Registered Nurses — at your door, on your schedule. We provide premium clinical care with a personal touch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4FA3D1]/10 flex items-center justify-center shrink-0 text-[#4FA3D1]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[1.05rem] font-serif font-bold text-[#0F172A] mb-2">{feature.title}</h4>
                      <p className="text-[0.85rem] text-[#4B5563] leading-relaxed max-w-[32ch]">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.a
              href="/booking"
              whileHover={{ y: -3, boxShadow: "0 15px 35px rgba(79,163,209,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-[0.9rem]"
              style={{
                background: "linear-gradient(135deg, #4FA3D1 0%, #00B7B1 100%)",
                boxShadow: "0 8px 25px rgba(79,163,209,0.2)",
              }}
            >
              Book an Appointment
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* ── Right Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/images/about-hero.png" 
                alt="Healthcare Professional"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#4FA3D1]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#16558F]/80 via-transparent to-transparent" />
            </div>
              {/* Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#00B7B1] flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-serif leading-none">100%</p>
                    <p className="text-[10px] uppercase tracking-wider opacity-80 mt-1">AHPRA-Registered Nurses</p>
                  </div>
                </div>
              </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00B7B1]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#4FA3D1]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}