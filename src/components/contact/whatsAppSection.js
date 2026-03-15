"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

export default function WhatsAppSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white border-2 border-dashed border-[#25D366]/30 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6">
              <MessageSquare size={32} className="text-[#25D366]" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-serif mb-3">WhatsApp Support</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-2">
              WhatsApp messaging integration is being set up and will be available soon for quick enquiries and booking confirmations.
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-4">Coming Soon</p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
