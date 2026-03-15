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
            className="mt-12 p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-xl"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#E8F2FA] flex items-center justify-center mb-8">
              <MessageCircle size={36} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Get in Touch</h3>
            <p className="text-gray-500 mb-10">Our nursing team is here to support your journey to optimal health.</p>
            <Button href="/contact" variant="outline" className="px-12 py-4 border-primary/20 text-primary hover:bg-primary hover:text-white">
              Send Enquiry
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
