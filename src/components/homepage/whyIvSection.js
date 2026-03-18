"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const WHY_IV_THERAPY = [
  {
    num: "01",
    title: "Direct Nutrient Delivery",
    desc: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system for immediate bioavailability.",
    icon: Zap,
  },
  {
    num: "02",
    title: "Higher Nutrient Levels",
    desc: "Intravenous delivery achieves higher circulating nutrient concentrations compared with oral supplementation.",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Supports Cellular Energy",
    desc: "IV nutrients support mitochondrial function and cellular metabolism, fuelling recovery at the source.",
    icon: Layers,
  },
];

export default function WhyIvSection() {
  return (
    <Section dark={true}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── Left Image Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/assets/iv_water_drop_hero.png" 
                alt="IV Therapy Science"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#4FA3D1]/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 p-6 bg-white rounded-3xl shadow-2xl border border-[#4FA3D1]/10 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00B7B1]/10 flex items-center justify-center text-[#00B7B1]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A] leading-none">100%</p>
                  <p className="text-[11px] font-bold text-[#4B5563] uppercase tracking-wider mt-1">Direct Absorption</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Content Panel ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#4FA3D1]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#4FA3D1]">
                  Why IV Therapy
                </span>
              </div>
              <h2 className="font-serif font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                The Science Behind <span className="italic text-white">Nutrient Delivery</span>
              </h2>
              <p className="text-[1rem] text-white/90 leading-relaxed max-w-[50ch]">
                Intravenous nutrient delivery provides immediate benefits that conventional supplements cannot match, ensuring your body gets what it needs, when it needs it.
              </p>
            </motion.div>

            <div className="space-y-8">
              {WHY_IV_THERAPY.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#00B7B1]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/80 text-[0.9rem] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12"
            >
              <a
                href="/booking"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-[0.9rem] transition-all hover:shadow-[0_15px_35px_rgba(0,183,177,0.3)] hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #4FA3D1 0%, #00B7B1 100%)" }}
              >
                Book a Session
                <CheckCircle2 size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}