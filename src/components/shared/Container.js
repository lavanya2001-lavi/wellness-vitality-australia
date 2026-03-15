"use client";

import { motion } from "framer-motion";

export default function Container({ children, className = "", id = "" }) {
  return (
    <div 
      id={id} 
      className={`max-w-7xl mx-auto px-6 sm:px-8 relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = "center",
  dark = false,
  className = "" 
}) {
  const alignment = {
    left: "text-left",
    center: "mx-auto text-center"
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignment[align]} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-secondary font-bold tracking-widest uppercase text-xs mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-bold leading-tight font-serif ${dark ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      <div className={`mt-6 h-1 w-20 rounded-full ${dark ? 'bg-secondary' : 'bg-secondary'} ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
