"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-[2rem] border border-white/80 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-8 text-left hover:bg-primary/[0.02] transition-colors"
          >
            <span className="font-bold text-primary font-serif text-[17px]">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0"
            >
              <ChevronDown size={20} className="text-secondary" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-8 pb-8 text-gray-600 leading-relaxed pt-2 text-[15px]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
