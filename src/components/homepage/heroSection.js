"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Home } from "lucide-react";
import FluidCanvas from "../shared/FluidCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A2540]">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <FluidCanvas />
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64 z-20"
          style={{ background: "linear-gradient(to top, #0A2540 0%, transparent 100%)" }}
        />
      </div>

      {/* ── Nurse Cut-out Image ── */}
      <div className="absolute right-0 bottom-0 z-10 hidden lg:flex items-end justify-end pointer-events-none w-1/2 h-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="relative w-full h-full flex items-center justify-end"
          style={{ paddingRight: "14%" }}
        >
          {/* Back glow */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 opacity-30 blur-[120px]"
            style={{ background: "radial-gradient(circle at center, rgba(200,150,90,0.3) 0%, transparent 70%)" }}
          />

          <img
            src="/assets/hero_nurse_on_navy.png"
            alt="Hero Nurse Clinician"
            className="w-auto object-contain select-none"
            style={{
              height: "92vh",
              marginBottom: "-4vh",
              WebkitMaskImage: "linear-gradient(to right, transparent 5%, black 40%, black 85%, transparent 100%), linear-gradient(to bottom, black 85%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 5%, black 40%, black 85%, transparent 100%), linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          />
        </motion.div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="px-12 pb-32 pt-36 max-w-[560px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7"
            style={{
              background: "rgba(200,150,90,0.12)",
              border: "1px solid rgba(200,150,90,0.32)",
            }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#C8965A" }}
            >
              <Sparkles size={11} color="white" />
            </div>
            <span
              className="text-[#C8965A] font-medium"
              style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Premium Nurse-Led Healthcare
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="text-white font-bold leading-[1.04] tracking-tight mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 5.2vw, 4.5rem)",
            }}
          >
            Your Trusted<br />
            Partner in{" "}
            <em style={{ color: "#C8965A", fontStyle: "italic", fontWeight: 600 }}>
              Wellness
            </em>
          </motion.h1>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="font-medium mb-3 leading-relaxed"
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)" }}
          >
            Expert care delivered to your doorstep.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
            className="font-light leading-relaxed mb-10"
            style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.52)", maxWidth: "42ch" }}
          >
            Nurse-led IV therapy, vitamin infusions &amp; recovery treatments —
            personalised for your needs and brought directly to you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#C8965A",
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                boxShadow: "0 8px 28px rgba(200,150,90,0.42)",
              }}
            >
              Schedule Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-light transition-all duration-200 hover:border-white/60 hover:text-white"
              style={{
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.78)",
                fontSize: "0.9rem",
                letterSpacing: "0.03em",
              }}
            >
              Our Services
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Website tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
            className="flex items-center gap-2"
          >
            <Home size={13} color="#C8965A" />
            <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
              Available at{" "}
              <span style={{ color: "rgba(200,150,90,0.85)", fontWeight: 500 }}>
                www.wellnessvitalityaustralia.com.au
              </span>
            </span>
          </motion.div>

        </div>
      </div>

      {/* ── Service Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
        className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center pb-8 px-12"
      >
        {[
          {
            label: "Services",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8965A" strokeWidth="1.3">
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" strokeLinecap="round" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            ),
          },
          {
            label: "Treatments",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8965A" strokeWidth="1.3">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 8v8M8 12h8" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            label: "Practitioners",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8965A" strokeWidth="1.3">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            label: "Nurtureship",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8965A" strokeWidth="1.3">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.52 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.52-4.674z" strokeLinecap="round" />
              </svg>
            ),
          },
        ].map((item, i, arr) => (
          <a
            key={item.label}
            href={`#${item.label.toLowerCase()}`}
            className="flex flex-col items-center gap-2 px-10 cursor-pointer transition-opacity duration-200 hover:opacity-70"
            style={{
              borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            {item.icon}
            <span
              className="font-medium"
              style={{
                fontSize: "9.5px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>

    </section>
  );
}