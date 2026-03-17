"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles } from "lucide-react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   WaterCanvas — Multi-layer water-inspired particle & ripple system
   
   Layer 1: Concentric ripple rings expanding from random impact points
   Layer 2: Splash-crown particle bursts radiating from ripple origins  
   Layer 3: Floating micro-droplet particles drifting upward
   Layer 4: Soft ambient glow halos

   Inspired by water droplet impact ripples — abstract, atmospheric, calm.
   ═══════════════════════════════════════════════════════════════════════════ */
function WaterCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    /* ── Layer 1: Ripple Impact Rings ── */
    const ripples = [];
    const spawnRipple = () => {
      const x = Math.random() * W();
      const y = Math.random() * H();
      const ringCount = Math.floor(Math.random() * 3) + 3; // 3-5 concentric rings
      for (let r = 0; r < ringCount; r++) {
        ripples.push({
          x, y,
          radius: 0,
          maxRadius: 80 + Math.random() * 140,
          opacity: 0.06 + Math.random() * 0.1,
          speed: 0.35 + Math.random() * 0.25,
          delay: r * 12, // stagger rings from same origin
          age: 0,
          lineWidth: 1 + Math.random() * 0.8,
        });
      }
    };
    // Seed initial ripple sets
    for (let i = 0; i < 5; i++) spawnRipple();

    /* ── Layer 2: Splash Crown Particles ── */
    const splashParticles = [];
    const spawnSplash = (ox, oy) => {
      const count = Math.floor(Math.random() * 6) + 4;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = 0.3 + Math.random() * 0.6;
        splashParticles.push({
          x: ox, y: oy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3,
          r: 1 + Math.random() * 2,
          life: 1,
          decay: 0.004 + Math.random() * 0.004,
        });
      }
    };

    /* ── Layer 3: Floating Micro-Droplets ── */
    const droplets = Array.from({ length: 60 }, () => ({
      x: Math.random() * 2400,
      y: Math.random() * 1400,
      r: 0.8 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: -(Math.random() * 0.2 + 0.05),
      opacity: 0.06 + Math.random() * 0.18,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleAmp: 0.2 + Math.random() * 0.5,
    }));

    /* ── Layer 4: Ambient Glow Halos ── */
    const glows = Array.from({ length: 4 }, () => ({
      x: Math.random() * 2400,
      y: Math.random() * 1400,
      r: 60 + Math.random() * 100,
      opacity: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    }));

    let tick = 0;
    let nextRippleAt = 120;
    let nextSplashOrigin = null;

    const draw = () => {
      tick++;
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      /* ─ Draw Layer 4: Ambient Glows ─ */
      for (const g of glows) {
        const pulse = Math.sin(tick * 0.008 + g.phase) * 0.015 + g.opacity;
        const grd = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        grd.addColorStop(0, `rgba(110, 197, 216, ${pulse})`);
        grd.addColorStop(1, "rgba(110, 197, 216, 0)");
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      /* ─ Draw Layer 1: Ripple Rings ─ */
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.age++;
        if (rp.age < rp.delay) continue; // wait for stagger
        rp.radius += rp.speed;
        const life = 1 - rp.radius / rp.maxRadius;
        if (life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160, 215, 235, ${rp.opacity * life * life})`;
        ctx.lineWidth = rp.lineWidth * life;
        ctx.stroke();
      }

      // Periodically spawn new ripple sets
      if (tick >= nextRippleAt) {
        spawnRipple();
        // Also spawn a splash burst at the last ripple origin
        const lastSet = ripples[ripples.length - 1];
        if (lastSet) spawnSplash(lastSet.x, lastSet.y);
        nextRippleAt = tick + 150 + Math.random() * 200;
      }

      /* ─ Draw Layer 2: Splash Crown Particles ─ */
      for (let i = splashParticles.length - 1; i >= 0; i--) {
        const sp = splashParticles[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vy += 0.003; // tiny gravity
        sp.life -= sp.decay;
        if (sp.life <= 0) { splashParticles.splice(i, 1); continue; }

        const grd = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, sp.r * 2.5);
        grd.addColorStop(0, `rgba(200, 230, 245, ${sp.life * 0.35})`);
        grd.addColorStop(0.6, `rgba(110, 197, 216, ${sp.life * 0.15})`);
        grd.addColorStop(1, "rgba(110, 197, 216, 0)");
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 245, 255, ${sp.life * 0.5})`;
        ctx.fill();
      }

      /* ─ Draw Layer 3: Floating Micro-Droplets ─ */
      for (const d of droplets) {
        const wobble = Math.sin(tick * 0.01 + d.wobblePhase) * d.wobbleAmp;
        d.x += d.dx + wobble * 0.08;
        d.y += d.dy;
        if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;

        // Soft glow
        const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        grd.addColorStop(0, `rgba(190, 225, 240, ${d.opacity})`);
        grd.addColorStop(0.4, `rgba(110, 197, 216, ${d.opacity * 0.4})`);
        grd.addColorStop(1, "rgba(110, 197, 216, 0)");
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright pinpoint
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 245, 255, ${d.opacity * 1.5})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CSS Ripple Rings — large, slow, concentric rings via pure CSS animation
   These sit on the RIGHT side of the hero to give visual weight there
   ═══════════════════════════════════════════════════════════════════════════ */
function CSSRippleSet({ cx, cy }) {
  return (
    <div className="absolute pointer-events-none" style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 0, height: 0,
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            border: `${1.2 - i * 0.15}px solid rgba(140, 215, 235, ${0.12 - i * 0.018})`,
          }}
          animate={{
            width: [0, 200 + i * 80],
            height: [0, 200 + i * 80],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Fluid Blob — large, soft, blurred organic shapes 
   ═══════════════════════════════════════════════════════════════════════════ */
function FluidBlob({ className, color, size, duration, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ width: size, height: size, background: color, filter: "blur(80px)" }}
      animate={{
        scale: [1, 1.12, 0.94, 1.08, 1],
        x: [0, 12, -8, 6, 0],
        y: [0, -10, 6, -4, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HomeHero — Main Export
   ═══════════════════════════════════════════════════════════════════════════ */
export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ── Layer 1: Base Gradient ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #0a3560 0%, #16558F 30%, #1c7aab 55%, #3aa5c4 78%, #c4e6f0 96%, #eef7fa 100%)",
          }}
        />
        {/* Radial depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 90%, rgba(10,53,96,0.5) 0%, transparent 60%), " +
              "radial-gradient(ellipse 60% 45% at 75% 25%, rgba(58,165,196,0.2) 0%, transparent 55%), " +
              "radial-gradient(ellipse 40% 35% at 55% 65%, rgba(110,197,216,0.12) 0%, transparent 50%)",
          }}
        />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Layer 2: Fluid Blobs ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <FluidBlob className="top-[8%] right-[15%]"    color="rgba(110,197,216,0.10)" size={420} duration={20} delay={0} />
        <FluidBlob className="bottom-[12%] left-[3%]"  color="rgba(22,85,143,0.08)"   size={380} duration={24} delay={2} />
        <FluidBlob className="top-[45%] right-[25%]"   color="rgba(58,165,196,0.06)"  size={300} duration={18} delay={3} />
        <FluidBlob className="top-[15%] left-[35%]"    color="rgba(180,154,99,0.04)"  size={220} duration={16} delay={1} />
        <FluidBlob className="bottom-[30%] right-[5%]" color="rgba(110,197,216,0.07)" size={260} duration={22} delay={5} />
      </div>

      {/* ── Layer 3: Canvas Particle & Ripple System ── */}
      <WaterCanvas />

      {/* ── Layer 4: CSS Ripple Ring Sets (right side focus) ── */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        <CSSRippleSet cx="70%" cy="45%" />
        <CSSRippleSet cx="55%" cy="75%" />
        <CSSRippleSet cx="82%" cy="25%" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center pt-32 pb-24 lg:pb-16">

          {/* ── Left: Text Content (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">

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

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              className="text-white font-bold leading-[1.06] tracking-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              }}
            >
              Mobile Healthcare{" "}
              <br className="hidden sm:block" />
              &amp; IV{" "}
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>
                Wellness
              </em>{" "}
              Services
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="font-medium leading-relaxed mb-5"
              style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.92)", maxWidth: "48ch" }}
            >
              Professional IV infusions, wellness checks, and clinical services delivered by qualified registered nurses.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
              className="font-light leading-relaxed mb-10"
              style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.48)", maxWidth: "54ch" }}
            >
              Wellness Vitality Australia provides professional healthcare and wellness services designed to support energy, recovery, immune health and overall wellbeing. Services are available in clinic or delivered to your home, workplace, aged care facility or NDIS residence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
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

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10"
            >
              {["Registered Nurses", "TGA Approved", "Mobile Service"].map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]/50" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right Side: empty — visual weight comes from canvas ripples + blobs ── */}
          <div className="lg:col-span-2 hidden lg:block" />

        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[5]"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
