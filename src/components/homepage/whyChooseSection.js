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

const STATS = [
  { value: "5★", label: "Client Rating" },
  { value: "100%", label: "Safety Record" },
  { value: "24/7", label: "Support Available" },
];

export default function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-[#F4F8FC] py-10 lg:py-14">
      <Container>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="h-px w-8 origin-left"
              style={{ background: "#4FA3D1" }}
            />
            <p
              className="text-[0.65rem] font-bold tracking-[0.28em] uppercase"
              style={{ color: "#00B7B1" }}
            >
              Why Choose Us
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="font-serif font-bold text-[#16558F] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Healthcare you can{" "}
              <span
                className="italic"
                style={{ color: "#16558F", opacity: 0.75 }}
              >
                trust and rely on
              </span>
            </h2>
            <p
              className="text-[0.88rem] leading-relaxed font-light lg:text-right"
              style={{ color: "#6B7A8D", maxWidth: "38ch" }}
            >
              Fully qualified, AHPRA-registered Registered Nurses — at your door, on your schedule.
            </p>
          </div>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

          {/* Left column — 4 feature cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.08 * i, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[#E4EDF6] cursor-default"
                  style={{
                    boxShadow: "0 2px 8px rgba(22,85,143,0.06), 0 1px 2px rgba(22,85,143,0.04)",
                    transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(79,163,209,0.15), 0 4px 12px rgba(22,85,143,0.08)";
                    e.currentTarget.style.borderColor = "rgba(79,163,209,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(22,85,143,0.06), 0 1px 2px rgba(22,85,143,0.04)";
                    e.currentTarget.style.borderColor = "#E4EDF6";
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(79,163,209,0.14) 0%, rgba(0,183,177,0.14) 100%)",
                      boxShadow: "0 2px 10px rgba(0,183,177,0.12)",
                    }}
                  >
                    <Icon size={17} strokeWidth={1.8} style={{ color: "#00B7B1" }} />
                  </motion.div>
                  <div>
                    <h4
                      className="font-serif font-bold text-[0.95rem] leading-snug mb-1.5"
                      style={{ color: "#16558F" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-[0.78rem] leading-relaxed font-light"
                      style={{ color: "#6B7A8D" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right column — Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(145deg, #16558F 0%, #0A3D6B 100%)",
              boxShadow: "0 20px 56px rgba(10,61,107,0.25), 0 4px 16px rgba(10,61,107,0.15), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Subtle inner glow top-right */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 right-0"
                style={{
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(0,183,177,0.2) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
            </div>

              {/* Top: Visual accent block */}
              <div
                className="px-7 pt-7 pb-5 border-b relative z-10"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(79,163,209,0.2) 0%, rgba(0,183,177,0.2) 100%)",
                    boxShadow: "0 2px 12px rgba(0,183,177,0.25)",
                  }}
                >
                  <ShieldCheck size={16} strokeWidth={1.8} style={{ color: "#00B7B1" }} />
                </motion.div>
                <p
                  className="font-serif font-bold leading-snug text-white mb-2"
                  style={{ fontSize: "1.05rem" }}
                >
                  Trusted by patients across Australia
                </p>
                <p
                  className="text-[0.78rem] font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Our nurses are held to the highest clinical and ethical standards in the country.
                </p>
              </div>

            {/* Stats */}
            <div className="flex flex-col flex-1">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.38 + 0.1 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between px-7 py-4 group/stat"
                  style={{
                    borderTop: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span
                    className="text-[0.75rem] font-medium uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {s.label}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif font-bold"
                    style={{ fontSize: "1.5rem", color: "white" }}
                  >
                    {s.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Bottom badge */}
            <div
              className="px-7 py-4 border-t"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(0,0,0,0.12)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                  style={{
                    background: "#3DBB8A",
                    boxShadow: "0 0 6px rgba(61,187,138,0.6)",
                  }}
                />
                <span
                  className="text-[0.72rem] font-medium"
                  style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}
                >
                  All nurses AHPRA-registered &amp; insured
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-5 border border-[#D6E8F5]"
          style={{
            background: "white",
            boxShadow: "0 4px 20px rgba(22,85,143,0.07), 0 1px 4px rgba(22,85,143,0.05)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
              style={{
                background: "#3DBB8A",
                boxShadow: "0 0 6px rgba(61,187,138,0.55)",
              }}
            />
            <p
              className="text-[0.9rem] font-light"
              style={{ color: "#16558F" }}
            >
              Ready to experience{" "}
              <span className="font-semibold">nurse-led care at home?</span>
            </p>
          </div>

          <motion.a
            href="/booking"
            whileHover={{ y: -3, boxShadow: "0 15px 35px rgba(0,183,177,0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-[0.88rem]"
            style={{
              background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 50%, #00B7B1 100%)",
              letterSpacing: "0.04em",
              boxShadow: "0 8px 25px rgba(22,85,143,0.3)",
            }}
          >
            Book an Appointment
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>

      </Container>
    </Section>
  );
}