"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

export default function BookingWidgetSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Calendar, title: "Select Date", desc: "Choose a date that works for you." },
              { icon: Clock, title: "Pick Time", desc: "Select a convenient appointment time." },
              { icon: CheckCircle, title: "Confirm", desc: "Receive instant booking confirmation." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
                className="group relative text-center p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(22,85,143,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <step.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="relative z-10 w-8 h-8 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-3 shadow-[0_0_15px_rgba(22,85,143,0.3)]">{i + 1}</div>
                <h4 className="relative z-10 font-bold text-primary text-lg font-serif mb-1">{step.title}</h4>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Calendly Integration Placeholder */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-12 md:p-16 rounded-[3rem] bg-white/60 backdrop-blur-xl border-2 border-dashed border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)] text-center overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.02]" />
            <div className="relative z-10 w-20 h-20 mx-auto rounded-3xl bg-primary/5 flex items-center justify-center mb-8 text-primary shadow-[0_0_20px_rgba(22,85,143,0.1)]">
              <Calendar size={40} strokeWidth={1.5} />
            </div>
            <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-primary font-serif mb-4">Online Booking</h3>
            <p className="relative z-10 text-gray-500 mb-2 max-w-lg mx-auto text-[15px] leading-relaxed">
              Our Calendly booking widget will be integrated here. Patients will be able to select their preferred IV treatment, date and time.
            </p>
            <p className="relative z-10 text-xs text-primary/60 uppercase tracking-wider font-semibold mt-6">Calendly Integration — Coming Soon</p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
