"use client";

import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

/* ─── Helpers ─────────────────────────────────────────────────── */
const fade = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
});

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#FBFDFF] pt-32 lg:pt-20">
      {/* ─── Water-Inspired Background ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-[#E3F2FD] rounded-full blur-[120px] opacity-30" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-[#F0F7FF] rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          
          {/* ─── Left Column: Visual (Staggered - Image Left) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(22,85,143,0.1)] border-[10px] border-white z-10"
            >
              <img 
                src="/images/blood-collection.png" 
                alt="Professional Clinical Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#16558F]/5 to-transparent" />
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* ─── Right Column: Content ─── */}
          <div className="order-1 lg:order-2 flex flex-col text-center lg:text-left">
            <motion.div {...fade(0)} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#16558F]/10 bg-white shadow-sm ring-1 ring-[#16558F]/5">
                <Stethoscope size={16} className="text-[#B49A63]" />
                <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#16558F]/80">
                  Clinical & Wellness Services
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...fade(1)}
              className="font-serif font-bold text-[#16558F] leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}
            >
              Qualified Nursing <br />
              <span className="text-[#B49A63] italic">Care and Support</span>
            </motion.h1>

            <motion.p
              {...fade(2)}
              className="text-lg md:text-xl text-[#4A5568] leading-relaxed max-w-[45ch] mx-auto lg:mx-0 font-light"
            >
              Wellness Vitality Australia provides a range of professional healthcare and wellness services delivered by qualified registered nurses. We support preventative health, recovery, and general wellbeing.
            </motion.p>
            
            <motion.div {...fade(3)} className="mt-8 flex justify-center lg:justify-start">
              <div className="h-1 w-20 rounded-full bg-[#B49A63]/30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
