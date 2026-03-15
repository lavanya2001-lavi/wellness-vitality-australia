"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/primaryButton";
import Container from "../shared/Container";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#FBFDFF]">
      
      {/* ── Soft Abstract Ambient Background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Primary Liquid Orb — top left */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[25%] -left-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px]"
          style={{
            background: "radial-gradient(circle at 40% 40%, #D8E9FF 0%, #F0F8FF 50%, transparent 75%)",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />

        {/* Secondary Liquid Orb — right */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[20%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px]"
          style={{
            background: "radial-gradient(circle at 60% 40%, #E3F2FD 0%, #FAFDFF 50%, transparent 75%)",
            filter: "blur(110px)",
            opacity: 0.6,
          }}
        />

        {/* Brand Accent Orb — bottom center */}
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px]"
          style={{
            background: "radial-gradient(circle at 50% 50%, #F5EDD8 0%, #FCF9F2 45%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.4,
          }}
        />

        {/* Subtle Water-Inspired Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      <Container className="pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* 🚀 Left Content: Messaging */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-sm ring-1 ring-primary/5 mb-8"
            >
              <Sparkles size={14} className="text-secondary" />
              <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-primary/80">
                Premium Nurse-Led Healthcare
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-primary leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 4.8rem)" }}
            >
              Professional Wellness<br />
              <span className="text-secondary italic">Tailored to You</span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-text-primary/70 leading-relaxed max-w-[45ch] mb-10 font-light"
            >
              Discover a new standard of personalized clinical excellence. Nurse-led treatments designed to support energy, immunity and recovery — delivered safely at your location.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button variant="cta" href="/booking" className="px-12 py-5 text-lg shadow-2xl shadow-primary/10">
                Schedule Appointment
              </Button>
              <Button
                variant="outline"
                href="#services"
                className="px-10 py-5 text-lg border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
              >
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* 🖼️ Right Visual: High-Impact Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-[560px] order-1 lg:order-2"
          >
            {/* Main Floating Image Container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(10,37,64,0.18)] border-[12px] border-white z-10"
            >
              <img
                src="/images/home-hero.png"
                alt="Professional Healthcare Clinician"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </motion.div>

            {/* Decorative Offset Soft Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/5 rounded-[3rem] md:rounded-[4rem] -z-10 translate-x-4 translate-y-4" />

            {/* Credibility Floating Badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-8 -left-4 md:-left-12 bg-white rounded-3xl p-5 md:p-6 shadow-2xl border border-primary/5 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-inner">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <div className="pr-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-widest text-secondary leading-none mb-1">Authenticated</p>
                <h4 className="font-serif font-bold text-primary text-base md:text-lg leading-tight">AHPRA Registered</h4>
              </div>
            </motion.div>

            {/* Dynamic Excellence Pill — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="absolute -top-6 -right-4 md:-right-8 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg z-20 hidden md:flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wide">Clinical Excellence</span>
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}