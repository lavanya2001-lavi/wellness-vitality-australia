import { useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import {
  Zap, Shield, Heart, Activity, Brain,
  Sparkles, Gauge, Pill, Droplet, PlusCircle,
  Stethoscope, Microscope, FlaskConical,
  Dna, Beaker, Atom,
} from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NUTRIENT_DATA = [
  { name: "Vitamin C", icon: Shield, color: "#FBBF24", description: "Supports immune function and antioxidant protection." },
  { name: "Vitamin D3", icon: Sparkles, color: "#F59E0B", description: "Essential for bone health and immune regulation." },
  { name: "Biotin", icon: Zap, color: "#10B981", description: "Promotes healthy hair, skin, and metabolic function." },
  { name: "B Complex", icon: Pill, color: "#3B82F6", description: "Fuels energy production and nervous system support." },
  { name: "Methylcobalamin", icon: Brain, color: "#8B5CF6", description: "Active B12 form for cognition and neurological health." },
  { name: "Magnesium Sulphate", icon: Activity, color: "#6366F1", description: "Helps muscle recovery and nervous system balance." },
  { name: "Zinc", icon: PlusCircle, color: "#EC4899", description: "Critical for immune defence and cellular repair." },
  { name: "Selenium", icon: Stethoscope, color: "#F43F5E", description: "Trace mineral with powerful antioxidant properties." },
  { name: "Taurine", icon: Gauge, color: "#06B6D4", description: "Supports cardiovascular function and cellular hydration." },
  { name: "Arginine", icon: FlaskConical, color: "#3B82F6", description: "Boosts nitric oxide for circulation and recovery." },
  { name: "Glutamine", icon: Beaker, color: "#10B981", description: "Gut lining repair and immune system fuel source." },
  { name: "Lysine", icon: Droplet, color: "#6366F1", description: "Collagen synthesis and antiviral immune defence." },
  { name: "Ornithine", icon: Dna, color: "#8B5CF6", description: "Supports detoxification and growth hormone release." },
  { name: "Glutathione", icon: Sparkles, color: "#FCD34D", description: "Powerful antioxidant supporting cellular detoxification." },
  { name: "Coenzyme Q10", icon: Heart, color: "#EF4444", description: "Cellular energy currency and cardioprotective agent." },
  { name: "Alpha Lipoic Acid", icon: Microscope, color: "#14B8A6", description: "Universal antioxidant that regenerates other antioxidants." },
  { name: "NAD+", icon: Atom, color: "#2563EB", description: "Longevity coenzyme powering DNA repair and metabolism." },
];

const ROW_1 = NUTRIENT_DATA.slice(0, 9);
const ROW_2 = NUTRIENT_DATA.slice(9);

// ─── Individual Card ──────────────────────────────────────────────────────────

function NutrientCard({ nutrient, onHoverStart, onHoverEnd }) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => { setHovered(true); onHoverStart?.(); };
  const handleLeave = () => { setHovered(false); onHoverEnd?.(); };

  // Ensure readable text for very light accent colours
  const labelColor =
    ["#FCD34D", "#FBBF24", "#F59E0B"].includes(nutrient.color) ? "#7A5C00" : nutrient.color;

  return (
    <motion.div
      className="relative flex-shrink-0 w-[300px] sm:w-[320px] mx-4"
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="relative h-full p-5 rounded-3xl cursor-default select-none backdrop-blur-xl border border-white/80 transition-all duration-300 overflow-hidden"
        style={{
          boxShadow: hovered
            ? `0 20px 48px rgba(22,85,143,0.13), 0 0 0 1.5px ${nutrient.color}45`
            : "0 8px 32px rgba(0,0,0,0.06)",
          backgroundColor: hovered ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.65)",
        }}
      >
        {/* Background ambient glow */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: nutrient.color }}
          animate={{ opacity: hovered ? 0.28 : 0.07 }}
          transition={{ duration: 0.35 }}
        />

        {/* ── Icon  +  Text — always visible, side by side ── */}
        <div className="relative flex items-center gap-5">

          {/* Icon */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${nutrient.color}20` }}
              animate={{ rotate: hovered ? 8 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <nutrient.icon size={28} style={{ color: nutrient.color }} strokeWidth={1.8} />
            </motion.div>
            {/* Icon halo */}
            <motion.div
              className="absolute inset-0 blur-lg scale-75 rounded-2xl pointer-events-none"
              style={{ backgroundColor: nutrient.color }}
              animate={{ opacity: hovered ? 0.55 : 0.15 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Name + description */}
          <div className="flex flex-col min-w-0">
            <h3
              className="text-[1rem] font-extrabold leading-tight transition-colors duration-200 truncate"
              style={{ color: hovered ? labelColor : "#0A2540" }}
            >
              {nutrient.name}
            </h3>

            {/* Colour accent rule */}
            <motion.div
              className="h-[2px] rounded-full mt-1.5 mb-2"
              style={{ backgroundColor: nutrient.color }}
              animate={{ width: hovered ? "44px" : "18px", opacity: hovered ? 1 : 0.35 }}
              transition={{ duration: 0.28 }}
            />

            <p className="text-[0.76rem] font-medium leading-snug text-gray-500 line-clamp-2">
              {nutrient.description}
            </p>
          </div>
        </div>

        {/* Bottom sweep on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] rounded-b-3xl"
          style={{ backgroundColor: nutrient.color }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// ─── Carousel Row ─────────────────────────────────────────────────────────────

function CarouselRow({ items, direction = "left", speed = 28 }) {
  const looped = [...items, ...items, ...items];
  const pauseCount = useRef(0);
  const controls = useAnimationControls();

  // card width 320 + mx-4 (16px each side = 32px) = 352px per slot
  const distancePx = items.length * 352;
  const durationSec = distancePx / speed;

  const animX = direction === "left"
    ? ["0%", "-33.333%"]
    : ["-33.333%", "0%"];

  function startAnim() {
    controls.start({
      x: animX,
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: durationSec, ease: "linear" } },
    });
  }

  function pause() {
    pauseCount.current += 1;
    controls.stop();
  }

  function resume() {
    pauseCount.current = Math.max(0, pauseCount.current - 1);
    if (pauseCount.current === 0) startAnim();
  }

  return (
    <div className="relative overflow-hidden w-full" onMouseLeave={resume}>
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-[#FBFDFE] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-[#FBFDFE] to-transparent" />

      <motion.div
        className="flex w-max items-center py-4"
        animate={controls}
        initial={{ x: direction === "left" ? "0%" : "-33.333%" }}
        onViewportEnter={startAnim}
      >
        {looped.map((nutrient, i) => (
          <NutrientCard
            key={`${nutrient.name}-${i}`}
            nutrient={nutrient}
            onHoverStart={pause}
            onHoverEnd={resume}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function NutrientsSection() {
  return (
    <Section className="relative overflow-hidden bg-[#FBFDFE]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          title="Nutrients Used in Infusions"
          subtitle="We use only pharmaceutical-grade vitamins, minerals, and amino acids in our clinical formulations for maximum efficacy."
          centered
        />
      </Container>

      <div className="relative z-10 mt-16 flex flex-col gap-5">
        <CarouselRow items={ROW_1} direction="left" speed={26} />
        <CarouselRow items={ROW_2} direction="right" speed={22} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Droplet size={14} className="text-secondary" />
            Highest Clinical Standards
          </div>
          <p className="mt-4 text-gray-400 text-sm italic">
            All ingredients are sourced from TGA-approved suppliers.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}