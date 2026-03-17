"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FluidCanvas from "./FluidCanvas";

/* ═══════════════════════════════════════════════════════════════════════════
   Shared Hero — Unified Design System for Internal Pages
   
   Layers (bottom → top):
     1. Base Blue Gradient
     2. FluidCanvas (Subtle motion)
     3. Diagonal Readability Overlay (Dark Blue)
     4. Bottom/Top Gradient Fades
     5. Subtle Performance Noise
     6. Hero Content (Centered on Mobile/Tablet, Left on Desktop)
   ═══════════════════════════════════════════════════════════════════════════ */
export default function Hero({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  description,
  layout = "side-by-side", // "side-by-side" or "centered"
  imageSrc,
  imageAlt,
  imageCustomStyle = {},
  imageContainerClass = "",
  imageComponent, // Optional: if provided, fully overrides the image area
  ctaButtons,
  videoSrc,
  useFluidCanvas = true,
  children,
}) {
  const isCentered = layout === "centered";
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.1;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [videoSrc]);

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0A3560] flex items-center pt-40 pb-28">
      {/* ── Layer 1 & 2: Background & Fluid ── */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient match HomeHero fallback */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, #0a3560 0%, #16558F 30%, #1c7aab 55%, #3aa5c4 78%)"
          }}
        />
        
        {useFluidCanvas && !videoSrc && (
          <div className="absolute inset-0 opacity-40">
            <FluidCanvas />
          </div>
        )}

        {videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* ── Layer 3: Diagonal Overlay for Text Readability ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: isCentered 
              ? "radial-gradient(circle at center, rgba(6,24,50,0.7) 0%, rgba(10,40,75,0.4) 60%, transparent 100%)"
              : "linear-gradient(135deg, rgba(6,24,50,0.85) 0%, rgba(10,40,75,0.6) 40%, rgba(14,80,130,0.3) 75%, transparent 100%)",
          }}
        />

        {/* ── Layer 4: Vertical Fades ── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* ── Layer 5: Subtle Noise ── */}
        <div
          className="absolute inset-0 z-15 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex flex-col ${isCentered ? 'items-center text-center' : 'lg:flex-row items-center gap-16'}`}>
          
          {/* ── Content Area ── */}
          <div className={`flex flex-col ${isCentered ? 'items-center max-w-4xl' : 'lg:w-1/2 items-center lg:items-start text-center lg:text-left max-w-2xl'}`}>
            
            {/* Badge - Glassmorphic style match HomeHero */}
            {badgeText && (
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
                {BadgeIcon && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#B49A63]">
                    <BadgeIcon size={12} color="white" />
                  </div>
                )}
                <span className="text-white/90 font-medium text-[11px] tracking-[0.18em] uppercase">
                  {badgeText}
                </span>
              </motion.div>
            )}

            {/* Title - Match HomeHero */}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="text-white font-bold leading-[1.1] tracking-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                {title}
              </motion.h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
                className="font-medium mb-3 leading-relaxed"
                style={{ 
                  fontSize: "1.05rem", 
                  color: "rgba(255,255,255,0.9)",
                  textShadow: "0 1px 10px rgba(0,0,0,0.2)",
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
                className={`font-light leading-relaxed mb-10`}
                style={{ 
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.65)", 
                  maxWidth: isCentered ? "55ch" : "48ch" 
                }}
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            {(ctaButtons || children) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
                className={`flex flex-col sm:flex-row gap-4 items-center ${isCentered ? 'justify-center w-full' : 'lg:justify-start w-full lg:w-auto'}`}
              >
                {ctaButtons}
                {children}
              </motion.div>
            )}
          </div>

          {/* ── Image Area (Side-by-side) ── */}
          {!isCentered && (imageSrc || imageComponent) && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className={`lg:w-1/2 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 ${imageContainerClass}`}
            >
              {imageComponent ? (
                imageComponent
              ) : (
                <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A3560] to-transparent z-10 pointer-events-none opacity-60" />
                  <div className="absolute inset-0 bg-[#0A3560]/20 z-0 pointer-events-none" />
                  <img
                    src={imageSrc}
                    alt={imageAlt || "Hero Image"}
                    className="w-full h-full object-cover"
                    style={imageCustomStyle}
                  />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-30"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
