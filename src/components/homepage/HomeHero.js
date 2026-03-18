"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Check } from "lucide-react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   HomeHero — Video Background Hero Section
   
   Layers (bottom → top):
     1. Fallback gradient background (shown while video loads / if it fails)
     2. Looping background video (/videos/bgvideo.mp4)
     3. Semi-transparent gradient overlay for text readability
     4. Hero content (heading, subheading, buttons, trust indicators)
     5. Bottom fade into page background
   ═══════════════════════════════════════════════════════════════════════════ */
export default function HomeHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Slightly increase playback speed for a more dynamic feel
    video.playbackRate = 1.15;

    // Ensure seamless looping — restart immediately on ended
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => { });
    };

    // Ensure autoplay works (some browsers block it)
    const handleCanPlay = () => {
      video.play().catch(() => { });
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ── Layer 1: Fallback Gradient (visible while video loads) ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(145deg, #0a3560 0%, #16558F 30%, #1c7aab 55%, #3aa5c4 78%, #c4e6f0 96%, #eef7fa 100%)",
        }}
      />

      {/* ── Layer 2: Background Video ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/videos/bookingbg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,24,50,0.72) 0%, rgba(10,48,85,0.55) 35%, rgba(14,80,130,0.35) 65%, rgba(79,163,209,0.2) 100%)",
        }}
      />
      {/* Secondary vertical overlay for bottom contrast */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, transparent 40%, rgba(6,24,50,0.35) 100%)",
        }}
      />

      {/* ── Subtle Noise Texture ── */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Layer 4: Content ── */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center text-center pt-28 pb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(79, 163, 209, 0.15) 0%, rgba(0, 183, 177, 0.15) 100%)",
              border: "1px solid rgba(0, 183, 177, 0.45)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 25px rgba(0, 183, 177, 0.25)",
            }}
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4FA3D1] to-[#00B7B1] shadow-[0_0_12px_rgba(0,183,177,0.6)]">
              <Droplets size={13} color="white" />
            </div>
            <span className="text-white font-bold text-[11px] tracking-[0.22em] uppercase" style={{ textShadow: "0 0 10px rgba(0,183,177,0.4)" }}>
              IV Infusion &amp; Wellness
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="font-bold leading-[1.1] tracking-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              textShadow: "0 4px 30px rgba(0,0,0,0.4)",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "rgba(224, 242, 254, 0.95)" }}>Welcome to</span> <br className="sm:hidden" />
            <span style={{ color: "#4FA3D1", textShadow: "0 0 25px rgba(79,163,209,0.45)" }}>Wellness</span>
            <span style={{ color: "white" }}> & </span>
            <span style={{ color: "#00B7B1", textShadow: "0 0 25px rgba(0,183,177,0.45)" }}>Vitality</span> <br className="sm:hidden" />
            <span style={{ color: "rgba(224, 242, 254, 0.95)" }}>Australia</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="font-medium leading-relaxed mb-6"
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "42ch",
              textShadow: "0 1px 10px rgba(0,0,0,0.2)",
            }}
          >
            Professional mobile healthcare and IV wellness services across Australia.
          </motion.p>

          {/* IV Pricing Block */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-10 text-white/70 text-sm space-y-2 font-light tracking-wide"
          >
            <p>Immune Defence IV — $220+</p>
            <p>Energy & Performance IV — $200+</p>
            <p>Hydration & Recovery IV — $180+</p>
          </motion.div> */}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,183,177,0.35)]"
              style={{
                background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 50%, #00B7B1 100%)",
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                boxShadow: "0 8px 28px rgba(22,85,143,0.35)",
              }}
            >
              <Droplets size={16} />
              Book Your Treatment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(79,163,209,0.4)",
                backdropFilter: "blur(14px)",
                color: "white",
                fontSize: "0.9rem",
                letterSpacing: "0.03em",
                boxShadow: "0 0 15px rgba(79,163,209,0.1)",
              }}
            >
              View Services
              <Sparkles size={15} className="text-[#4FA3D1]" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12"
          >
            {["Registered Nurses", "TGA Approved", "Mobile Service"].map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <Check size={12} className="text-[#4FA3D1]" strokeWidth={3} />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Layer 5: Bottom Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-[5]"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
