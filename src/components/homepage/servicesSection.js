"use client";

import { motion } from "framer-motion";
import { Droplets, ClipboardCheck, ShieldCheck, HeartPulse, Syringe, Users } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

// ── Arrow icon ──
const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Reusable card flip animation wrapper ──
const CardShell = ({ children, className = "", style = {} }) => (
  <div
    className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all duration-300 ${className}`}
    style={style}
  >
    {/* Sliding navy fill */}
    <div
      className="absolute inset-0 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms]"
      style={{
        background: "#0A2540",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
    />
    {/* Gold top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-[2.5px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
      style={{
        background: "linear-gradient(to right, #D4AF37 0%, rgba(212,175,55,0.3) 60%, transparent 100%)",
      }}
    />
    <div className="relative z-10 flex flex-col h-full">{children}</div>
  </div>
);

// ── Arrow button ──
const CardArrow = ({ dark = false }) => (
  <div
    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:rotate-45 transition-all duration-300"
    style={{ border: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(10,37,64,0.12)" }}
  >
    <span
      className="text-current group-hover:text-white transition-colors duration-300"
      style={{ color: dark ? "rgba(255,255,255,0.6)" : "#0A2540" }}
    >
      <ArrowIcon />
    </span>
  </div>
);

// ── Card footer ──
const CardFooter = ({ href, dark = false }) => (
  <div
    className="flex items-center justify-between mt-4 pt-4 transition-colors duration-300"
    style={{
      borderTop: dark
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid #E8EEF5",
    }}
  >
    <a
      href={href}
      className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#D4AF37] transition-colors duration-300"
    >
      Learn more
    </a>
    <CardArrow dark={dark} />
  </div>
);

export default function ServicesSection() {
  return (
    <Section id="services" className="bg-[#FBFDFF] py-24 lg:py-32">
      <Container>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span
                className="text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#D4AF37]"
              >
                Our Services
              </span>
            </div>
            <h2
              className="font-serif font-bold text-[#0A2540] leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Clinical & Wellness
              <br />
              <em className="italic text-[#D4AF37]">Services</em>
            </h2>
          </div>
          <div className="flex items-center gap-5 flex-shrink-0">
            <p className="text-[0.83rem] font-light text-[#6B7A8D] leading-relaxed max-w-[34ch] lg:text-right hidden lg:block">
              Professional healthcare tailored to your needs — delivered at your door.
            </p>
            <a
              href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-[1.5px] border-[rgba(10,37,64,0.15)] text-[0.78rem] font-medium text-[#0A2540] tracking-[0.04em] transition-all duration-200 hover:bg-[#0A2540] hover:text-white hover:border-[#0A2540]"
            >
              View All
              <ArrowIcon />
            </a>
          </div>
        </motion.div>

        {/* ── Magazine Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ gridTemplateRows: "auto" }}>

          {/* ── FEATURED: IV Infusions (col 1, row span 2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            className="lg:row-span-2"
          >
            <CardShell
              className="h-full min-h-[420px] lg:min-h-full p-8"
              style={{ background: "#0A2540" }}
            >
              {/* Top: badge + icon */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[9px] font-medium tracking-[0.18em] uppercase text-[#D4AF37]">
                    Most Popular
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Droplets size={22} strokeWidth={1.8} style={{ color: "rgba(255,255,255,0.85)" }} />
                </div>
              </div>

              {/* Bottom: text + ghost number */}
              <div className="mt-auto">
                <div className="relative">
                  <span
                    className="absolute -bottom-3 -right-2 font-serif font-bold leading-none select-none text-white/[0.04] group-hover:text-white/[0.06] transition-colors duration-300"
                    style={{ fontSize: "4.5rem", letterSpacing: "-0.03em" }}
                  >
                    01
                  </span>
                  <h3
                    className="font-serif font-bold text-white leading-snug mb-3 transition-colors duration-300"
                    style={{ fontSize: "1.3rem" }}
                  >
                    IV Infusions
                  </h3>
                  <p className="text-[0.77rem] font-light leading-relaxed text-white/55 transition-colors duration-300">
                    Intravenous therapy delivering essential nutrients directly into the
                    bloodstream for optimal absorption and recovery results.
                  </p>
                </div>
                <CardFooter href="/services#iv-infusions" dark />
              </div>
            </CardShell>
          </motion.div>

          {/* ── Health Assessments (col 2, row 1) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            <CardShell
              className="min-h-[200px] p-7 bg-white"
              style={{ border: "1px solid #E8EEF5" }}
            >
              <div className="relative">
                <span
                  className="absolute -top-2 -right-1 font-serif font-bold leading-none select-none text-[#0A2540]/[0.05] group-hover:text-white/[0.05] transition-colors duration-300"
                  style={{ fontSize: "4.5rem", letterSpacing: "-0.03em" }}
                >
                  02
                </span>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "#FBF6E3" }}
                >
                  <ClipboardCheck size={20} strokeWidth={1.8} style={{ color: "#D4AF37" }}
                    className="group-hover:!text-white/85 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="font-serif font-bold leading-snug mb-2 text-[#0A2540] group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "1.05rem" }}
                >
                  Health Assessments
                </h3>
                <p className="text-[0.77rem] font-light leading-relaxed text-[#6B7A8D] group-hover:text-white/55 transition-colors duration-300">
                  Comprehensive nursing assessments and clinical reports for ongoing health monitoring.
                </p>
              </div>
              <CardFooter href="/services#assessments" />
            </CardShell>
          </motion.div>

          {/* ── Preventative Health — GOLD ACCENT (col 3, row 1) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            <CardShell
              className="min-h-[200px] p-7"
              style={{ background: "linear-gradient(135deg, #D4AF37 0%, #E2C050 100%)" }}
            >
              <div className="relative">
                <span
                  className="absolute -top-2 -right-1 font-serif font-bold leading-none select-none text-white/[0.12] group-hover:text-white/[0.05] transition-colors duration-300"
                  style={{ fontSize: "4.5rem", letterSpacing: "-0.03em" }}
                >
                  03
                </span>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <ShieldCheck size={20} strokeWidth={1.8} color="rgba(255,255,255,0.95)" />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="font-serif font-bold text-white leading-snug mb-2 transition-colors duration-300"
                  style={{ fontSize: "1.05rem" }}
                >
                  Preventative Health & Wellness
                </h3>
                <p className="text-[0.77rem] font-light leading-relaxed text-white/75 group-hover:text-white/55 transition-colors duration-300">
                  Tailored strategies to maintain optimal health and prevent illness before it starts.
                </p>
              </div>
              <CardFooter href="/services#preventative" dark />
            </CardShell>
          </motion.div>

          {/* ── Aged Care & NDIS (col 2, row 2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          >
            <CardShell
              className="min-h-[200px] p-7 bg-white"
              style={{ border: "1px solid #E8EEF5" }}
            >
              <div className="relative">
                <span
                  className="absolute -top-2 -right-1 font-serif font-bold leading-none select-none text-[#0A2540]/[0.05] group-hover:text-white/[0.05] transition-colors duration-300"
                  style={{ fontSize: "4.5rem", letterSpacing: "-0.03em" }}
                >
                  04
                </span>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "#EAF3FF" }}
                >
                  <HeartPulse size={20} strokeWidth={1.8} color="#16558F"
                    className="group-hover:!text-white/85 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="font-serif font-bold leading-snug mb-2 text-[#0A2540] group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "1.05rem" }}
                >
                  Aged Care & NDIS Nursing
                </h3>
                <p className="text-[0.77rem] font-light leading-relaxed text-[#6B7A8D] group-hover:text-white/55 transition-colors duration-300">
                  Specialised in-home nursing for aged care residents and NDIS participants.
                </p>
              </div>
              <CardFooter href="/services#ndis" />
            </CardShell>
          </motion.div>

          {/* ── Blood Collection (col 3, row 2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          >
            <CardShell
              className="min-h-[200px] p-7 bg-white"
              style={{ border: "1px solid #E8EEF5" }}
            >
              <div className="relative">
                <span
                  className="absolute -top-2 -right-1 font-serif font-bold leading-none select-none text-[#0A2540]/[0.05] group-hover:text-white/[0.05] transition-colors duration-300"
                  style={{ fontSize: "4.5rem", letterSpacing: "-0.03em" }}
                >
                  05
                </span>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "#FBF6E3" }}
                >
                  <Syringe size={20} strokeWidth={1.8} color="#D4AF37"
                    className="group-hover:!text-white/85 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="font-serif font-bold leading-snug mb-2 text-[#0A2540] group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "1.05rem" }}
                >
                  Blood Collection
                </h3>
                <p className="text-[0.77rem] font-light leading-relaxed text-[#6B7A8D] group-hover:text-white/55 transition-colors duration-300">
                  Professional pathology collection by qualified practitioners at your location.
                </p>
              </div>
              <CardFooter href="/services#blood-collection" />
            </CardShell>
          </motion.div>

        </div>

        {/* ── Corporate Health — Full Width Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-4"
        >
          <CardShell
            className="bg-white flex-row items-center px-8 py-6"
            style={{ border: "1px solid #E8EEF5", minHeight: "auto" }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              <span
                className="font-serif font-bold leading-none select-none flex-shrink-0 text-[#0A2540]/[0.05] group-hover:text-white/[0.05] transition-colors duration-300"
                style={{ fontSize: "2.5rem", letterSpacing: "-0.03em" }}
              >
                06
              </span>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                style={{ background: "#EAF3FF" }}
              >
                <Users size={20} strokeWidth={1.8} color="#16558F"
                  className="group-hover:!text-white/85 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3
                  className="font-serif font-bold leading-snug mb-1 text-[#0A2540] group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "1.05rem" }}
                >
                  Corporate Health Services
                </h3>
                <p className="text-[0.77rem] font-light leading-relaxed text-[#6B7A8D] group-hover:text-white/55 transition-colors duration-300">
                  Staff wellness programs and onsite health checks for modern workplaces — tailored to your team's needs.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="/services#corporate"
                  className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#D4AF37]"
                >
                  Learn more
                </a>
                <CardArrow />
              </div>
            </div>
          </CardShell>
        </motion.div>

        {/* ── Bottom Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-4 grid grid-cols-3 rounded-2xl overflow-hidden bg-[#0A2540]"
        >
          {[
            { dot: "#3DBB8A", label: "Available", value: "7 Days a Week" },
            { dot: "#D4AF37", label: "Registered", value: "AHPRA Certified" },
            { dot: "#5B9BD5", label: "Coverage", value: "All of Australia" },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className="flex items-center gap-3.5 px-7 py-5 transition-colors duration-200 hover:bg-white/[0.04]"
              style={{
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: item.dot }}
              />
              <div>
                <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/35 mb-0.5">
                  {item.label}
                </div>
                <div className="font-serif font-bold text-white leading-none" style={{ fontSize: "1rem" }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}