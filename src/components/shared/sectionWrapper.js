"use client";

import { motion } from "framer-motion";

export default function Section({ children, className = "", id = "", dark = false, style = {} }) {
  return (
    <section 
      id={id} 
      className={`py-16 lg:py-20 relative overflow-hidden ${dark ? "bg-[#0F172A] text-white" : "bg-transparent"} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
