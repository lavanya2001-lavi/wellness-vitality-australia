"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

export default function ContactCtaSection() {
  return (
    <Section id="contact" className="bg-[#F8FAFC]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="Have a Question?"
            subtitle="If you would like to learn more about our services or request further information, please contact our team."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-12 p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4FA3D1]/5 to-[#00B7B1]/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 w-24 h-24 mx-auto rounded-[2rem] bg-gradient-to-br from-[#E8F2FA] to-[#00B7B1]/10 flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,183,177,0.1)] transition-transform duration-500 group-hover:scale-110">
              <MessageCircle size={44} className="text-[#00B7B1]" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Get in Touch</h3>
            <p className="text-gray-500 mb-10">Our nursing team is here to support your journey to optimal health.</p>
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-14 py-5 text-lg font-bold tracking-wide shadow-[0_15px_40px_rgba(0,183,177,0.25)] hover:shadow-[0_20px_50px_rgba(0,183,177,0.35)]"
              style={{ background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 50%, #00B7B1 100%)" }}
            >
              Send Enquiry
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
