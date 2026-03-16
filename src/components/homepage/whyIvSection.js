"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Layers } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const WHY_IV_THERAPY = [
  {
    num: "01",
    title: "Direct Nutrient Delivery",
    desc: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system entirely for immediate bioavailability.",
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
    <Section className="py-24 lg:py-32" style={{ background: "#0A2540" }}>
      <Container>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span
              className="text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#D4AF37]"
            >
              Why IV Therapy
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>

          <h2
            className="font-serif font-bold text-white leading-[1.06] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            The Science Behind{" "}
            <em className="italic text-[#D4AF37]">IV Therapy</em>
          </h2>

          <p className="text-[0.85rem] font-light text-white/45 leading-relaxed max-w-[46ch] mx-auto">
            Understanding the clinical benefits of intravenous nutrient delivery
            — and why it outperforms conventional supplementation.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WHY_IV_THERAPY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-[20px] p-8 overflow-hidden cursor-default transition-all duration-300 hover:border-[rgba(212,175,55,0.25)]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Gold radial glow on hover */}
                <div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Subtle top shimmer on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)",
                  }}
                />

                {/* Card content */}
                <div className="relative z-10">

                  {/* Benefit number */}
                  <p
                    className="text-[9px] font-semibold tracking-[0.2em] uppercase mb-5"
                    style={{ color: "rgba(212,175,55,0.5)" }}
                  >
                    {item.num} — Benefit
                  </p>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.18)] group-hover:border-[rgba(212,175,55,0.3)]"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-[#D4AF37] transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif font-bold text-white leading-snug mb-3 transition-colors duration-300"
                    style={{ fontSize: "1.08rem" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[0.78rem] font-light leading-relaxed transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {item.desc}
                  </p>

                  {/* Animated gold divider */}
                  <div
                    className="mt-6 h-[1.5px] bg-[#D4AF37] opacity-40 w-7 group-hover:w-11 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: "#D4AF37" }}
            />
            <p className="text-white/70 font-light text-[0.95rem]">
              Ready to experience the benefits of{" "}
              <span className="text-[#D4AF37] font-medium">IV therapy at home?</span>
            </p>
          </div>
          <a
            href="/booking"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium text-[0.88rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "#D4AF37",
              boxShadow: "0 6px 20px rgba(212,175,55,0.3)",
            }}
          >
            Book a Session
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}