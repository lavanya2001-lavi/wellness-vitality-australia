"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const fade = (i) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
});

export default function ContactHeroSection() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-white">
      {/* Soft Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5">
            <MessageCircle size={14} className="text-secondary" />
            <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary/70">Connect With Us</span>
          </div>
        </motion.div>

        <motion.h1 {...fade(1)} className="font-serif font-bold text-primary mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
          Let's Start a <br />
          <span className="text-secondary italic">Conversation</span>
        </motion.h1>

        <motion.p {...fade(2)} className="text-lg text-text-primary/60 leading-relaxed max-w-[45ch] mx-auto font-light">
          If you have any questions or would like to request further information, our team is here to support you.
        </motion.p>
      </div>
    </section>
  );
}
