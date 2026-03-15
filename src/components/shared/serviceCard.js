"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceCard({ title, description, icon: Icon, href = "/booking" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(22,85,143,0.08)] transition-all overflow-hidden"
    >
      {/* Soft Glow Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-[#E8F2FA] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
          {Icon && <Icon size={32} strokeWidth={1.5} />}
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-3 font-serif leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
          {description}
        </p>
        
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link uppercase tracking-widest"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300" />
          </span>
          <ArrowRight size={16} className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
