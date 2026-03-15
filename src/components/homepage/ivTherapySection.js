"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import { TreatmentCard } from "../shared/TreatmentCard";
import { Button } from "../shared/primaryButton";
import Container from "../shared/Container";

/* ─── Premium Dark Fluid Canvas ─────────────────────────────── */
function FluidCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const blobs = [
      { x: 0.20, y: 0.35, rx: 0.65, ry: 0.55, color: [30, 111, 185], speed: 0.000015, phase: 0.0 },
      { x: 0.80, y: 0.20, rx: 0.55, ry: 0.45, color: [180, 154, 99], speed: 0.000012, phase: 1.8 },
      { x: 0.50, y: 0.60, rx: 0.70, ry: 0.65, color: [22, 85, 143], speed: 0.000018, phase: 3.5 },
      { x: 0.85, y: 0.85, rx: 0.58, ry: 0.52, color: [30, 111, 185], speed: 0.000014, phase: 5.1 },
      { x: 0.15, y: 0.85, rx: 0.60, ry: 0.50, color: [180, 154, 99], speed: 0.000010, phase: 2.3 },
    ];

    const bands = Array.from({ length: 10 }, (_, i) => ({
      yBase: (i + 0.5) / 10,
      amp: 0.02 + (i % 4) * 0.008,
      freq: 0.5 + (i % 3) * 0.25,
      speed: 0.000005 + (i % 5) * 0.000002,
      phase: (i * 1.5) % (Math.PI * 2),
      color: i % 2 === 0 ? [30, 111, 185] : [180, 154, 99],
      opacity: 0.02 + (i % 3) * 0.015,
    }));

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(),
      r: 1 + Math.random() * 2.5,
      speed: 0.00005 + Math.random() * 0.00015,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.1 + Math.random() * 0.4,
    }));

    const draw = (ts) => {
      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#060D1A");
      bg.addColorStop(0.5, "#0D1E3A");
      bg.addColorStop(1, "#040914");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      blobs.forEach((b) => {
        const dx = Math.sin(ts * b.speed + b.phase) * 0.15;
        const dy = Math.cos(ts * b.speed * 0.8 + b.phase) * 0.12;
        const cx = (b.x + dx) * W; const cy = (b.y + dy) * H;
        const rX = b.rx * W * (0.95 + 0.05 * Math.sin(ts * b.speed * 1.5 + b.phase));
        const rY = b.ry * H * (0.95 + 0.05 * Math.cos(ts * b.speed * 1.2 + b.phase));
        ctx.save(); ctx.translate(cx, cy); ctx.scale(1, rY / rX);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rX);
        g.addColorStop(0, `rgba(${b.color},0.18)`); 
        g.addColorStop(0.5, `rgba(${b.color},0.05)`); 
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.beginPath(); ctx.arc(0, 0, rX, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); ctx.restore();
      });

      bands.forEach((band) => {
        const yc = band.yBase * H; const thick = H * 0.3;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 8) { const y = yc + Math.sin((x / W) * Math.PI * 2 * band.freq + ts * band.speed * 200 + band.phase) * band.amp * H; x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        for (let x = W; x >= 0; x -= 8) { const y = yc + Math.sin((x / W) * Math.PI * 2 * band.freq + ts * band.speed * 200 + band.phase) * band.amp * H + thick; ctx.lineTo(x, y); }
        ctx.closePath();
        const g = ctx.createLinearGradient(0, yc - thick * 0.5, 0, yc + thick * 1.5);
        g.addColorStop(0, `rgba(${band.color},0)`); g.addColorStop(0.5, `rgba(${band.color},${band.opacity})`); g.addColorStop(1, `rgba(${band.color},0)`);
        ctx.fillStyle = g; ctx.fill();
      });

      particles.forEach((p) => {
        p.y -= p.speed * 50; if (p.y < -0.05) p.y = 1.05;
        const cx = p.x * W + Math.sin(ts * 0.0005 + p.phase) * 30; const cy = p.y * H;
        const opacity = p.opacity * (0.5 + 0.5 * Math.sin(ts * 0.002 + p.phase));
        ctx.beginPath(); ctx.arc(cx, cy, p.r, 1, Math.PI * 2);
        ctx.fillStyle = `rgba(180,154,99,${opacity})`; ctx.shadowBlur = 15; ctx.shadowColor = "rgba(180,154,99,0.8)"; ctx.fill(); ctx.shadowBlur = 0;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />;
}

const TREATMENTS = [
  {
    title: "Immune Defence IV",
    description: "A high-dose blend of Vitamin C, Zinc, and Antioxidants to support your immune system's natural function.",
    features: ["Immune Support", "Antioxidant Rich", "Recovery Support"]
  },
  {
    title: "Energy & Performance IV",
    description: "Formulated with B-Complex vitamins and key amino acids to combat fatigue and enhance physical performance.",
    features: ["Energy Boost", "Metabolic Support", "B-Complex Focus"]
  },
  {
    title: "Beauty & Skin Glow IV",
    description: "Enriched with Glutathione and Vitamin C to promote skin health, collagen production, and a natural radiance.",
    features: ["Skin Hydration", "Collagen Support", "Glutathione Boost"]
  }
];

export default function IvTherapySection() {
  return (
    <Section id="iv-therapy" dark={true} className="relative overflow-hidden">
      <FluidCanvas />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            dark={true}
            title="IV Infusion Therapy"
            subtitle="IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, i) => (
            <TreatmentCard key={i} {...treatment} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/services#iv-infusions" variant="cta" className="px-12 py-4 text-lg shadow-2xl">
            Explore IV Infusions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
