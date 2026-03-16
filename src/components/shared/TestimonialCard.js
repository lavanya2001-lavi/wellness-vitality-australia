"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialCard({ name, review, rating = 5, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative group p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Quote className="absolute top-8 right-8 text-secondary/10 group-hover:text-secondary/20 transition-colors duration-500 z-0" size={60} />
      
      <div className="relative z-10 flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-secondary drop-shadow-sm">★</span>
        ))}
      </div>
      
      <p className="relative z-10 text-gray-600 italic mb-8 leading-relaxed text-[15px]">
        "{review}"
      </p>
      
      <div className="relative z-10">
        <h4 className="font-bold text-primary font-serif text-lg">{name}</h4>
        {date && <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-[0.15em] font-semibold">{date}</p>}
      </div>
    </motion.div>
  );
}
