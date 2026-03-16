"use client";

import { motion } from "framer-motion";

export function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-white rounded-[32px] p-8 shadow-sm border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ServiceCard({ title, description, icon, href = "/services" }) {
  return (
    <Card className="flex flex-col h-full group">
      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
        {icon || <span className="text-2xl font-bold">W</span>}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4 font-serif">{title}</h3>
      <p className="text-text-primary/70 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <a 
          href={href} 
          className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:text-secondary transition-colors"
        >
          Learn More
          <span className="text-lg">→</span>
        </a>
      </div>
    </Card>
  );
}

export function TestimonialCard({ content, author, role, rating = 5 }) {
  return (
    <Card className="flex flex-col">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <span 
            key={i} 
            className={`text-lg ${i < rating ? "text-secondary" : "text-primary/10"}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-lg italic text-text-primary/80 leading-relaxed mb-8 font-serif">
        "{content}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-primary">{author}</div>
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">{role}</div>
        </div>
      </div>
    </Card>
  );
}
