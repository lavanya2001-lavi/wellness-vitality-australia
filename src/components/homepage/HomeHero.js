"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles } from "lucide-react";
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
      video.play().catch(() => {});
    };

    // Ensure autoplay works (some browsers block it)
    const handleCanPlay = () => {
      video.play().catch(() => {});
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
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 3: Overlay for Text Readability ── */}
      {/* Dark-to-blue gradient with stronger opacity on left for text contrast */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,24,50,0.82) 0%, rgba(10,40,75,0.65) 40%, rgba(14,80,130,0.45) 70%, rgba(14,165,233,0.25) 100%)",
        }}
      />
      {/* Secondary vertical overlay for bottom contrast */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(6,24,50,0.4) 100%)",
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
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center pt-32 pb-24 lg:pb-16">

          {/* ── Left: Text Content (3 cols) — Centered on mobile, left-aligned on desktop ── */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-8"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#B49A63]">
                <Droplets size={13} color="white" />
              </div>
              <span className="text-white/90 font-medium text-[11px] tracking-[0.18em] uppercase">
                IV Infusion &amp; Wellness
              </span>
            </motion.div>

            {/* Heading — Client Motto */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              className="text-white font-bold leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Your Trusted Partner{" "}
              <br className="hidden sm:block" />
              in{" "}
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>
                Wellness
              </em>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="font-medium leading-relaxed mb-10"
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.88)",
                maxWidth: "42ch",
                textShadow: "0 1px 10px rgba(0,0,0,0.2)",
              }}
            >
              Expert care delivered to your doorstep.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(180,154,99,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #B49A63 0%, #d4b87a 100%)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 8px 28px rgba(180,154,99,0.4)",
                }}
              >
                <Droplets size={16} />
                Book IV Infusion
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(14px)",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.03em",
                }}
              >
                Enquire Now
                <Sparkles size={15} className="opacity-55" />
              </Link>
            </motion.div>

            {/* Trust indicators — Centered on mobile, left-aligned on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-10"
            >
              {["Registered Nurses", "TGA Approved", "Mobile Service"].map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]/50" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right Side: empty — visual weight comes from video background ── */}
          <div className="lg:col-span-2 hidden lg:block" />

        </div>
      </div>

      {/* ── Layer 5: Bottom Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[5]"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
