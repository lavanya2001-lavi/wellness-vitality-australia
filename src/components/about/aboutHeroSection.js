"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const fade = (i) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
});

export default function AboutHeroSection() {
  return (
    <section className="relative py-32 md:py-48 flex items-center overflow-hidden bg-[#FBFBFE]">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="max-w-xl text-center lg:text-left">
            <motion.div {...fade(0)} className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-sm">
                <Users size={16} className="text-secondary" />
                <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary/80">Our Professional Team</span>
              </div>
            </motion.div>

            <motion.h1 {...fade(1)} className="font-serif font-bold text-primary mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", lineHeight: 1.1 }}>
              Dedicated to Your <br />
              <span className="text-secondary italic">Wellness & Vitality</span>
            </motion.h1>

            <motion.div {...fade(2)} className="h-1 w-20 rounded-full bg-secondary/30 mb-8 mx-auto lg:mx-0" />

            <motion.p {...fade(3)} className="text-lg text-text-primary/70 leading-relaxed font-light mb-8">
              Wellness Vitality Australia is a nurse-led mobile healthcare provider dedicated to delivering premium clinical services and wellness infusions across Melbourne and surrounding areas.
            </motion.p>
          </div>

          {/* Right: Modern Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3]">
              <img 
                src="/images/about-hero.png" 
                alt="Our Healthcare team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[3rem] border-2 border-primary/5 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
