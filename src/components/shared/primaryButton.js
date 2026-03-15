"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary: "bg-primary text-white shadow-[0_4px_20px_rgba(22,85,143,0.3)] hover:shadow-[0_8px_25px_rgba(22,85,143,0.4)] hover:-translate-y-0.5",
  secondary: "bg-secondary text-white shadow-[0_4px_20px_rgba(180,154,99,0.3)] hover:shadow-[0_8px_25px_rgba(180,154,99,0.4)] hover:-translate-y-0.5",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
  cta: "bg-gradient-to-r from-primary to-[#1e6fb9] text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95",
};

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  href, 
  onClick,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = variants[variant] || variants.primary;
  
  const content = (
    <motion.span
      initial={false}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block" {...props}>
      {content}
    </button>
  );
}
