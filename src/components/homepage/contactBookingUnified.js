"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import Section from "../shared/sectionWrapper";

const FEATURES = [
  { icon: Clock, label: "Real-time availability" },
  { icon: CheckCircle2, label: "Instant confirmation" },
  { icon: Calendar, label: "Afterpay accepted" },
];

export default function ContactBookingUnified() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);

  return (
    <Section id="connect" className="relative overflow-hidden !py-0" style={{ background: "#F8FAFC" }}>
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 min-h-[35vh]">

        {/* LEFT — Text Side */}
        <div className="relative flex flex-col justify-center px-10 py-10 md:px-16 lg:px-20" style={{ background: "#F8FAFC" }}>

          {/* Decorative vertical line */}
          <div className="absolute top-16 left-10 md:left-16 w-px h-20" style={{ background: "rgba(22,85,143,0.25)" }} />

          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p
              className="mt-2 mb-6 text-[11px] font-semibold tracking-[0.35em] uppercase"
              style={{ color: "#00B7B1" }}
            >
              Self-Service Booking
            </p>

            {/* Headline */}
            <h2
              className="font-serif leading-[1.08] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "#060D1A" }}
            >
              Reserve your
              <br />
              <em className="not-italic" style={{ color: "#00B7B1" }}>wellness</em>
              <br />
              moment.
            </h2>

            {/* Body */}
            <p
              className="text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-[38ch] font-light"
              style={{ color: "#2d4259" }}
            >
              Book your IV therapy or wellness treatment instantly
              through our secure portal — no waiting, no phone calls.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-3 mb-12">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full"
                    style={{ background: "rgba(0,183,177,0.1)", border: "1px solid rgba(0,183,177,0.3)" }}
                  >
                    <Icon size={13} strokeWidth={2} style={{ color: "#00B7B1" }} />
                  </span>
                  <span className="text-[13px] font-medium tracking-wide" style={{ color: "#0d1f2d" }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="/booking"
              whileHover={{ y: -2, background: "#16558F" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-[0.78rem] font-bold tracking-[0.22em] uppercase"
              style={{ background: "#060D1A", color: "#ffffff" }}
            >
              Book Appointment
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: "rgba(0,183,177,0.28)" }}
              >
                <ArrowUpRight size={13} strokeWidth={2.5} style={{ color: "#ffffff" }} />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — Visual Side */}
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-0" style={{ background: "#060D1A" }}>

          {/* Soft orbs */}
          <div
            className="absolute rounded-full"
            style={{
              top: "-60px", left: "20%",
              width: "340px", height: "340px",
              background: "rgba(22,85,143,0.2)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: "-40px", right: "10%",
              width: "280px", height: "280px",
              background: "rgba(0,183,177,0.14)",
              filter: "blur(100px)",
            }}
          />

          {/* Parallax image */}
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 origin-center">
            <img
              src="/assets/iv_water_drop_hero.png"
              alt="Wellness Treatment"
              className="w-full h-full object-cover"
              style={{ opacity: 0.18 }}
            />
          </motion.div>

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(6,13,26,0.5) 0%, transparent 60%, rgba(0,183,177,0.1) 100%)" }}
          />

          {/* Stat card — top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-8 right-8 rounded-2xl px-6 py-4"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}
          >
            <p className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Treatment Types
            </p>
            <p className="font-serif text-2xl font-bold leading-none text-white">12+</p>
          </motion.div>

          {/* Centre icon ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: "88px", height: "88px", border: "1px solid rgba(0,183,177,0.18)" }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: "60px", height: "60px", background: "rgba(0,183,177,0.1)", border: "1px solid rgba(0,183,177,0.3)" }}
              >
                <Calendar size={22} strokeWidth={1.5} style={{ color: "#00B7B1" }} />
              </div>
            </div>
          </div>

          {/* Availability badge — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-8 left-8 rounded-2xl px-6 py-5 max-w-[200px]"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00B7B1" }} />
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                Open Now
              </p>
            </div>
            <p className="text-[13px] font-light leading-snug" style={{ color: "rgba(255,255,255,0.8)" }}>
              Slots available <br />
              <span className="font-medium text-white">today &amp; tomorrow</span>
            </p>
          </motion.div>

          {/* Watermark */}
          <div
            className="absolute bottom-6 right-6 font-serif leading-none font-bold select-none pointer-events-none"
            style={{ fontSize: "6rem", color: "rgba(255,255,255,0.03)" }}
            aria-hidden
          >
            IVx
          </div>
        </div>

      </div>
    </Section>
  );
}