"use client";

import { motion } from "framer-motion";

export function SectionHeader({ title, subtitle, centered = true, className = "", dark = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-serif ${dark ? "text-white" : "text-primary"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${dark ? "text-white/80" : "text-text-primary/70"}`}>
            {subtitle}
          </p>
        )}
        <div className={`mt-6 h-1 w-20 rounded-full ${centered ? "mx-auto" : ""} ${dark ? "bg-secondary" : "bg-secondary/30"}`} />
      </motion.div>
    </div>
  );
}
