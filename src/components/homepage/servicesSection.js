"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, ClipboardCheck, ShieldCheck, HeartPulse, Syringe, Users, Plus, Minus } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "IV Infusions",
    shortDesc: "Optimal nutrient absorption directly into the bloodstream.",
    fullDesc: "Intravenous therapy delivering vitamins, minerals, and hydration directly into the bloodstream for immediate, optimal absorption. Ideal for recovery, immunity, energy, and performance.",
    icon: Droplets,
    href: "/services#iv-infusions",
    tag: "Most Popular",
    treatments: ["Immune Defence — $220+", "Energy & Performance — $200+", "Hydration & Recovery — $180+"],
  },
  {
    number: "02",
    title: "Health Assessments",
    shortDesc: "Comprehensive clinical nursing assessments and reports.",
    fullDesc: "Thorough nursing assessments delivered at your location. Includes clinical reports, health monitoring, medication reviews, and referral coordination with your GP or specialist.",
    icon: ClipboardCheck,
    href: "/services#assessments",
    tag: "Clinical",
    treatments: ["Initial Assessment", "Ongoing Monitoring", "Clinical Reports"],
  },
  {
    number: "03",
    title: "Preventative Health & Wellness",
    shortDesc: "Tailored strategies to keep illness at bay.",
    fullDesc: "Proactive wellness planning including lifestyle assessments, nutrition guidance, supplement protocols, and health education designed to optimise your long-term wellbeing.",
    icon: ShieldCheck,
    href: "/services#preventative",
    tag: "Wellness",
    treatments: ["Lifestyle Review", "Supplement Protocol", "Wellness Planning"],
  },
  {
    number: "04",
    title: "Aged Care & NDIS Nursing",
    shortDesc: "Specialised in-home support for aged care and NDIS.",
    fullDesc: "Registered nurses providing compassionate, specialised care for aged care residents and NDIS participants — in your home, on your terms, coordinated with your care plan.",
    icon: HeartPulse,
    href: "/services#ndis",
    tag: "Support",
    treatments: ["NDIS Support", "Aged Care", "Care Coordination"],
  },
  {
    number: "05",
    title: "Blood Collection",
    shortDesc: "Professional pathology at your location.",
    fullDesc: "Qualified nurses perform professional blood draws and pathology collection at home, workplace, or care facility — results forwarded directly to your nominated practitioner.",
    icon: Syringe,
    href: "/services#blood-collection",
    tag: "Pathology",
    treatments: ["Home Collection", "Workplace Visits", "Fasting Bloods"],
  },
  {
    number: "06",
    title: "Corporate Health Services",
    shortDesc: "Onsite wellness programmes for your team.",
    fullDesc: "Tailored workplace health programmes including onsite screenings, flu vaccinations, stress management workshops, and staff wellness assessments — keeping your team healthy and productive.",
    icon: Users,
    href: "/services#corporate",
    tag: "Business",
    treatments: ["Onsite Screenings", "Flu Vaccinations", "Team Wellness"],
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const activeSvc = SERVICES[openIndex] ?? SERVICES[0];
  const ActiveIcon = activeSvc.icon;

  return (
    <Section id="services" className="py-12 lg:py-16" style={{ background: "#0a2540" }}>
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* ══════════════════════════════════
              LEFT — Accordion list (3 cols)
          ══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={svc.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 py-5 text-left group"
                  >
                    {/* Number */}
                    <span
                      className="font-serif font-bold flex-shrink-0 transition-colors duration-200"
                      style={{
                        fontSize: "0.68rem",
                        color: isOpen ? "#4FA3D1" : "rgba(255,255,255,0.2)",
                        letterSpacing: "0.08em",
                        minWidth: "22px",
                      }}
                    >
                      {svc.number}
                    </span>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        background: isOpen ? "rgba(79,163,209,0.15)" : "rgba(255,255,255,0.05)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        style={{ color: isOpen ? "#4FA3D1" : "rgba(255,255,255,0.4)" }}
                      />
                    </motion.div>

                    {/* Title + short desc */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-serif font-bold leading-snug transition-colors duration-200"
                        style={{
                          fontSize: "1rem",
                          color: isOpen ? "white" : "rgba(255,255,255,0.7)",
                        }}
                      >
                        {svc.title}
                      </h3>
                      {!isOpen && (
                        <p
                          className="text-[0.72rem] font-light mt-0.5 truncate"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          {svc.shortDesc}
                        </p>
                      )}
                    </div>

                    {/* Tag — visible when open */}
                    {isOpen && (
                      <span
                        className="flex-shrink-0 text-[9px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full hidden sm:inline-flex"
                        style={{
                          background: "rgba(79,163,209,0.1)",
                          color: "#4FA3D1",
                          border: "1px solid rgba(79,163,209,0.18)",
                        }}
                      >
                        {svc.tag}
                      </span>
                    )}

                    {/* Toggle button */}
                    <motion.div
                      animate={{
                        background: isOpen ? "#4FA3D1" : "rgba(255,255,255,0.06)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      {isOpen
                        ? <Minus size={12} color="white" strokeWidth={2.5} />
                        : <Plus size={12} style={{ color: "rgba(255,255,255,0.4)" }} strokeWidth={2.5} />
                      }
                    </motion.div>
                  </button>

                  {/* Expanded body — mobile only (hidden on lg, shown on right panel) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-5 pl-[calc(22px+36px+16px)]">
                          <p
                            className="text-[0.8rem] font-light leading-relaxed mb-4"
                            style={{ color: "rgba(255,255,255,0.48)", maxWidth: "52ch" }}
                          >
                            {svc.fullDesc}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {svc.treatments.map((t) => (
                              <span
                                key={t}
                                className="text-[0.7rem] font-medium px-3 py-1 rounded-full"
                                style={{
                                  background: "rgba(255,255,255,0.05)",
                                  border: "1px solid rgba(255,255,255,0.09)",
                                  color: "rgba(255,255,255,0.5)",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={svc.href}
                            className="inline-flex items-center gap-2 text-[0.75rem] font-medium transition-colors duration-200 hover:text-white"
                            style={{ color: "#4FA3D1", letterSpacing: "0.04em" }}
                          >
                            Learn more
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ══════════════════════════════════
              RIGHT — Sticky description panel (2 cols)
          ══════════════════════════════════ */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              {/* Label */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-px w-6 flex-shrink-0" style={{ background: "#4FA3D1" }} />
                <span
                  className="text-[9.5px] font-semibold tracking-[0.26em] uppercase"
                  style={{ color: "#4FA3D1" }}
                >
                  Our Services
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-serif font-bold text-white leading-[1.06] tracking-tight mb-4"
                style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)" }}
              >
                Clinical &amp;{" "}
                <span
                  className="block italic"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  Wellness Services
                </span>
              </h2>

              <p
                className="text-[0.82rem] font-light leading-relaxed mb-7"
                style={{ color: "rgba(255,255,255,0.38)", maxWidth: "30ch" }}
              >
                Professional nurse-led healthcare delivered wherever you are across Australia.
              </p>

              {/* Active service preview panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl p-6 mb-8 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(79,163,209,0.12) 0%, rgba(79,163,209,0.03) 100%)",
                    border: "1px solid rgba(79,163,209,0.25)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4FA3D1]/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  {/* Icon + tag row */}
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 100%)",
                        boxShadow: "0 8px 20px rgba(79,163,209,0.4)",
                      }}
                    >
                      <ActiveIcon size={20} className="text-white" strokeWidth={2} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full"
                      style={{
                        background: "rgba(79,163,209,0.15)",
                        color: "white",
                        border: "1px solid rgba(79,163,209,0.3)",
                        textShadow: "0 0 10px rgba(255,255,255,0.2)",
                      }}
                    >
                      {activeSvc.tag}
                    </span>

                    {/* Number badge */}
                    <span
                      className="ml-auto font-serif font-bold"
                      style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.06)", letterSpacing: "-0.03em" }}
                    >
                      {activeSvc.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="font-serif font-bold text-white mb-2 leading-snug"
                    style={{ fontSize: "1rem" }}
                  >
                    {activeSvc.title}
                  </h4>

                  <p
                    className="text-[0.88rem] font-light leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {activeSvc.fullDesc}
                  </p>

                  {/* Treatment tags */}
                  <div className="flex flex-col gap-2.5 mb-6">
                    {activeSvc.treatments.map((t) => (
                      <div key={t} className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ 
                            background: "#4FA3D1",
                            boxShadow: "0 0 8px #4FA3D1"
                          }}
                        />
                        <span
                          className="text-[0.82rem] font-medium"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <Link
                    href={activeSvc.href}
                    className="inline-flex items-center gap-2 text-[0.75rem] font-medium transition-colors duration-200 hover:text-white"
                    style={{ color: "#4FA3D1", letterSpacing: "0.04em" }}
                  >
                    Learn more
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-medium text-[0.82rem] transition-all duration-200"
                  style={{
                    background: "#4FA3D1",
                    boxShadow: "0 8px 24px rgba(79,163,209,0.28)",
                    letterSpacing: "0.04em",
                  }}
                >
                  View All Services
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-3 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {[
            { dot: "#3DBB8A", label: "Available", value: "7 Days a Week" },
            { dot: "#4FA3D1", label: "Registered", value: "AHPRA Certified" },
            { dot: "#7BC4E8", label: "Coverage", value: "All of Australia" },
          ].map((item, i, arr) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-4 px-8 py-5 transition-colors duration-200 hover:bg-white/[0.04]"
              style={{
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ 
                  background: item.dot, 
                  boxShadow: `0 0 12px ${item.dot}`,
                  filter: "brightness(1.2)"
                }}
              />
              <div>
                <div
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {item.label}
                </div>
                <div
                  className="font-serif font-bold text-white leading-none"
                  style={{ fontSize: "1rem", letterSpacing: "0.02em" }}
                >
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}