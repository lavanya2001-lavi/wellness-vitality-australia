"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Activity, Users } from "lucide-react";
import { SectionHeading } from "../shared/Container";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const WHY_CHOOSE_HIGHLIGHTS = [
  {
    title: "AHPRA-registered professionals",
    desc: "All treatments are administered by registered nurses and healthcare practitioners who meet strict Australian healthcare standards.",
    icon: ShieldCheck,
    accent: "#16558F",
    bg: "#EAF3FF",
  },
  {
    title: "Personalised clinical care",
    desc: "Every patient undergoes a full clinical assessment to determine suitability and the optimal treatment plan.",
    icon: HeartPulse,
    accent: "#B49A63",
    bg: "#F7F0E6",
  },
  {
    title: "Mobile healthcare services",
    desc: "Professional care delivered in the comfort of your own home, workplace, or facility — on your schedule.",
    icon: Activity,
    accent: "#16558F",
    bg: "#EAF3FF",
  },
  {
    title: "Aged care & NDIS support",
    desc: "Dedicated clinical support tailored to the unique needs of aged care residents and NDIS participants.",
    icon: Users,
    accent: "#B49A63",
    bg: "#F7F0E6",
  },
];

const STATS = [
  { num: "100%", label: "Safety record" },
  { num: "AHPRA", label: "Registered nurses" },
  { num: "5★", label: "Client satisfaction" },
];

export default function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-[#FBFDFF] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <p className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#B49A63] mb-4">
              Why Choose Us
            </p>

            <h2
              className="font-serif font-bold text-[#0A2540] leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Healthcare you can
              <br />
              <span className="italic text-[#B49A63]">trust and rely on</span>
            </h2>

            <p className="text-[1rem] text-[#4A5568] leading-relaxed font-light max-w-[46ch] mb-10">
              At Wellness Vitality Australia, your health and safety are our highest
              priorities — every service delivered by fully qualified, AHPRA-registered
              Registered Nurses.
            </p>

            {/* Feature cards */}
            <div className="space-y-4">
              {WHY_CHOOSE_HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-[#E8EEF5] hover:border-[#C6D9EF] hover:shadow-[0_4px_24px_rgba(22,85,143,0.07)] transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ background: item.bg }}
                  >
                    <item.icon size={20} strokeWidth={1.8} style={{ color: item.accent }} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-serif font-bold text-[#0A2540] text-[0.95rem] mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[0.82rem] text-[#6B7A8D] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px]">

              {/* Main image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[10px] border-white"
                style={{ boxShadow: "0 32px 64px -12px rgba(10,37,64,0.14), 0 0 0 1px rgba(22,85,143,0.06)" }}
              >
                <img
                  src="/images/wellness-abstract.png"
                  alt="Wellness Vitality Australia — Clinical Excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/15 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative offset border */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] -z-10"
                style={{ border: "1.5px solid rgba(22,85,143,0.08)" }}
              />

              {/* Stats strip — floating bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 left-4 right-4 md:left-0 md:right-0 md:-bottom-8 flex divide-x divide-[#E8EEF5] bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 8px 32px rgba(10,37,64,0.10)", border: "1px solid rgba(22,85,143,0.07)" }}
              >
                {STATS.map(({ num, label }) => (
                  <div key={label} className="flex-1 flex flex-col items-center py-4 px-2">
                    <span className="font-serif font-bold text-[#0A2540] text-xl leading-none mb-1">
                      {num}
                    </span>
                    <span className="text-[0.58rem] uppercase tracking-[0.12em] font-semibold text-[#8A9BB0] text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Top-right badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 -right-4 md:-right-8 hidden md:flex items-center gap-2 bg-white/85 rounded-2xl px-4 py-2.5"
                style={{
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(10,37,64,0.08)",
                  border: "1px solid rgba(255,255,255,0.85)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#B49A63] animate-pulse" />
                <p className="text-[0.68rem] font-semibold text-[#16558F]">Nurse-led care</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}