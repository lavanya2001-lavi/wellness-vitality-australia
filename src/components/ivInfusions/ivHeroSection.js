"use client";

import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import { Button } from "../shared/primaryButton";

const fade = (i) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
});

export default function IvHeroSection() {
  return (
    <section className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/iv-hero.png" 
          alt="IV Therapy Scene"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div {...fade(0)} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
            <Droplet size={18} className="text-secondary" />
            <span className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-white">Intravenous Wellness</span>
          </div>
        </motion.div>

        <motion.h1 {...fade(1)} className="font-serif font-bold text-white mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1.05, textShadow: "0 20px 50px rgba(0,0,0,0.8)" }}>
          Direct Nutrient{" "}
          <span className="text-secondary italic">Optimisation</span>
        </motion.h1>

        <motion.p {...fade(2)} className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-[45ch] mx-auto font-light mb-12"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          100% absorption. Immediate hydration. Tailored clinical protocols delivered in the comfort of your home or clinic.
        </motion.p>

        <motion.div {...fade(3)} className="flex justify-center">
          <Button href="/booking" variant="cta" className="px-14 py-5 text-xl shadow-[0_0_50px_rgba(180,154,99,0.4)]">
            Schedule Treatment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
