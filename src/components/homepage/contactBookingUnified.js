"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Activity, Sparkles } from "lucide-react";
import Section from "../shared/sectionWrapper";
import { Button } from "../shared/primaryButton";

export default function ContactBookingUnified() {
  return (
    <Section id="connect" dark={true} className="!py-0 overflow-hidden bg-[#060D1A]">
      <div className="flex flex-col lg:flex-row min-h-[600px] relative">
        
        {/* Left Side: Contact (Slanted) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[55%] w-full relative group overflow-hidden z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        >
          <img 
            src="/assets/hero_nurse_on_navy.png" 
            alt="Clinical Support" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#16558F] via-[#16558F]/95 to-transparent" />
          
          <div className="relative z-20 h-full p-10 lg:p-20 flex flex-col items-center lg:items-start justify-center">
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 shadow-2xl">
              <MessageCircle size={32} className="text-[#4FA3D1]" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#4FA3D1]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#4FA3D1]">
                Enquiry Portal
              </span>
            </div>
            
            <h2 className="font-serif font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Have a <span className="italic text-[#4FA3D1]">Question?</span>
            </h2>
            
            <p className="text-white/70 text-base lg:text-lg mb-10 max-w-[36ch] leading-relaxed">
              Connect with our registered nursing lead for expert clinical advice and personalised support.
            </p>
            
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-12 py-4 text-base font-bold tracking-widest uppercase shadow-2xl hover:translate-x-3 transition-transform duration-300"
              style={{ background: "white", color: "#16558F" }}
            >
              Message Us
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Booking (Underlying/Slanted) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[55%] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 relative group overflow-hidden bg-[#00B7B1]"
        >
          <img 
            src="/assets/iv_water_drop_hero.png" 
            alt="Wellness Booking" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#00A39C] via-[#00B7B1]/95 to-transparent" />

          <div className="relative z-20 h-full p-10 lg:pl-[15%] lg:pr-20 flex flex-col items-center lg:items-start justify-center">
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 shadow-2xl">
              <Calendar size={32} className="text-white" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">
                Self-Service Booking
              </span>
            </div>
            
            <h2 className="font-serif font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Book Your <span className="italic underline underline-offset-8 decoration-white/30">Wellness</span>
            </h2>
            
            <p className="text-white/70 text-base lg:text-lg mb-10 max-w-[36ch] leading-relaxed">
              Skip the wait and schedule your treatment instantly through our secure clinical gateway.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                <Activity size={16} />
                Live Availability
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                <Sparkles size={16} />
                Instant Confirm
              </div>
            </div>
            
            <Button 
              href="/booking" 
              variant="primary" 
              className="px-12 py-4 text-base font-bold tracking-widest uppercase shadow-2xl hover:translate-x-3 transition-transform duration-300"
              style={{ background: "#060D1A", color: "white" }}
            >
              Book Now
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
