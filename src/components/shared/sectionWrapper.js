"use client";

import { motion } from "framer-motion";

export default function Section({ children, className = "", id = "", dark = false, style = {} }) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${dark ? "bg-primary text-white" : "bg-transparent"} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
