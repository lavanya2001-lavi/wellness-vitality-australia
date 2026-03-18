"use client";

import { motion } from "framer-motion";
import { Button } from "./primaryButton";

export function TreatmentCard({ title, description, priceRange, image, features = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col h-full rounded-[2rem] bg-white border border-primary/5 shadow-2xl shadow-primary/5 hover:border-primary/20 transition-all overflow-hidden group"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2 font-serif">{title}</h3>
          <p className="text-[#1FC7C1] font-bold text-lg">{priceRange}</p>
        </div>
      
      <p className="text-text-primary/70 mb-8 flex-grow leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="mb-8 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Button href="/booking" variant="cta" className="w-full">
        Book Appointment
      </Button>
      </div>
    </motion.div>
  );
}
