"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialCard({ name, review, rating = 5, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-white border border-primary/5 shadow-xl shadow-primary/5 hover:shadow-2xl transition-all relative"
    >
      <Quote className="absolute top-6 right-6 text-secondary/20" size={40} />
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-secondary">★</span>
        ))}
      </div>
      
      <p className="text-text-primary/80 italic mb-6 leading-relaxed relative z-10">
        "{review}"
      </p>
      
      <div>
        <h4 className="font-bold text-primary">{name}</h4>
        {date && <p className="text-xs text-text-primary/40 mt-1 uppercase tracking-widest">{date}</p>}
      </div>
    </motion.div>
  );
}
