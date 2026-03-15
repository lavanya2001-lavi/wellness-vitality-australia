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
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#E8F2FA] flex items-center justify-center mb-4 text-primary">
                  <step.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="w-8 h-8 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-3">{i + 1}</div>
                <h4 className="font-bold text-primary font-serif mb-1">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Calendly Integration Placeholder */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-white border-2 border-dashed border-primary/20 text-center">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[#E8F2FA] flex items-center justify-center mb-8 text-primary">
              <Calendar size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-primary font-serif mb-4">Online Booking</h3>
            <p className="text-gray-500 mb-2 max-w-lg mx-auto">
              Our Calendly booking widget will be integrated here. Patients will be able to select their preferred IV treatment, date and time.
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-4">Calendly Integration — Coming Soon</p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
