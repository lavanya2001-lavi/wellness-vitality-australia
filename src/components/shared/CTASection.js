"use client";

import { motion } from "framer-motion";
import { Button } from "./primaryButton";

export function CTASection({ title, subtitle, buttonText = "Book Appointment", href = "/booking" }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary overflow-hidden relative p-12 md:p-20 text-center">
        {/* Animated background element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary blur-[100px]"
        />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
            {title}
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <Button href={href} variant="cta" className="text-lg px-10 py-5 ring-offset-primary">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
