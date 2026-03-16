"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Activity, Users } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

const BENTO_ITEMS = [
  {
    title: "AHPRA-registered professionals",
    desc: "Nurses meeting strict Australian healthcare standards.",
    icon: ShieldCheck,
    variant: "navy",
    colSpan: 1,
  },
  {
    title: "Personalised clinical care",
    desc: "Full clinical assessment for every patient.",
    icon: HeartPulse,
    variant: "gold",
    colSpan: 1,
  },
  {
    stat: "5★",
    label: "Client satisfaction",
    variant: "muted",
    colSpan: 1,
  },
  {
    title: "Mobile healthcare services",
    desc: "Professional care delivered in the comfort of your own home, workplace, or facility — on your schedule.",
    icon: Activity,
    variant: "light",
    colSpan: 2,
  },
  {
    stat: "100%",
    label: "Safety record",
    variant: "light",
    colSpan: 1,
  },
];

const variantStyles = {
  navy: {
    wrapper: "bg-[#0A2540]",
    iconBg: "bg-white/10",
    iconColor: "rgba(255,255,255,0.85)",
    title: "text-white",
    desc: "text-white/60",
  },
  gold: {
    wrapper: "bg-gradient-to-br from-[#C8965A] to-[#DDA96A]",
    iconBg: "bg-white/20",
    iconColor: "rgba(255,255,255,0.85)",
    title: "text-white",
    desc: "text-white/70",
  },
  light: {
    wrapper: "bg-white border border-[#E8EEF5]",
    iconBg: "bg-[#EAF3FF]",
    iconColor: "#16558F",
    title: "text-[#0A2540]",
    desc: "text-[#6B7A8D]",
  },
  muted: {
    wrapper: "bg-[#F0F5FF] border border-[#E0EBFF]",
    iconBg: "bg-[#D8E8FF]",
    iconColor: "#16558F",
    title: "text-[#0A2540]",
    desc: "text-[#6B7A8D]",
  },
};

export default function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-[#FBFDFF] py-24 lg:py-32">
      <Container>

        {/* ── Header row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#C8965A] mb-4">
              Why Choose Us
            </p>
            <h2
              className="font-serif font-bold text-[#0A2540] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Healthcare you can
              <br />
              <span className="italic text-[#C8965A]">trust and rely on</span>
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#6B7A8D] leading-relaxed font-light max-w-[42ch] lg:text-right">
            Every service delivered by fully qualified, AHPRA-registered Registered
            Nurses — at your door, on your schedule.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {BENTO_ITEMS.map((item, i) => {
            const styles = variantStyles[item.variant];

            // Stat cell
            if (item.stat) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`
                    ${styles.wrapper} ${item.colSpan === 2 ? "sm:col-span-2 lg:col-span-2" : ""}
                    rounded-[22px] p-7 flex flex-col items-center justify-center text-center
                    min-h-[140px] transition-transform duration-200 hover:-translate-y-1
                  `.replace(/\s+/g, ' ').trim()}
                >
                  <span
                    className="font-serif font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      color: item.variant === "muted" ? "#0A2540" : "#0A2540",
                    }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#8A9BB0]">
                    {item.label}
                  </span>
                </motion.div>
              );
            }

            // Feature cell
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  ${styles.wrapper} ${item.colSpan === 2 ? "sm:col-span-2 lg:col-span-2" : ""}
                  rounded-[22px] p-7 flex flex-col justify-between
                  min-h-[160px] transition-transform duration-200 hover:-translate-y-1
                `.replace(/\s+/g, ' ').trim()}
              >
                <div
                  className={`w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 ${styles.iconBg}`}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color: styles.iconColor }} />
                </div>
                <div>
                  <h4 className={`font-serif font-bold text-[1rem] leading-snug mb-2 ${styles.title}`}>
                    {item.title}
                  </h4>
                  <p className={`text-[0.78rem] leading-relaxed font-light ${styles.desc}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* AHPRA registered badge cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * 5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#E8EEF5] rounded-[22px] p-7 flex flex-col justify-between min-h-[160px] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-[12px] bg-[#F7F0E6] flex items-center justify-center mb-5">
              <Users size={18} strokeWidth={1.8} style={{ color: "#B49A63" }} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[1rem] leading-snug mb-2 text-[#0A2540]">
                Aged care & NDIS support
              </h4>
              <p className="text-[0.78rem] leading-relaxed font-light text-[#6B7A8D]">
                Tailored support for aged care residents and NDIS participants.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0A2540] rounded-[22px] px-8 py-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3DBB8A] animate-pulse flex-shrink-0" />
            <p className="text-white font-light text-[0.95rem]">
              Ready to experience{" "}
              <span className="font-medium text-[#C8965A]">nurse-led care at home?</span>
            </p>
          </div>
          <a
            href="/booking"
            className="flex-shrink-0 px-7 py-3 rounded-full text-white font-medium text-[0.88rem] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#C8965A",
              boxShadow: "0 6px 20px rgba(200,150,90,0.38)",
              letterSpacing: "0.03em",
            }}
          >
            Book an Appointment
          </a>
        </motion.div>

      </Container>
    </Section>
  );
}