"use client";

import { motion } from "framer-motion";
import { CreditCard, ShieldCheck } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";

export default function PaymentSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-4 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F2FA] flex items-center justify-center text-primary">
                <CreditCard size={32} strokeWidth={1.5} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#FBF5E8] flex items-center justify-center text-secondary">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary font-serif mb-2">Payment Options</h3>
              <p className="text-gray-600 leading-relaxed">
                We accept all major credit cards and debit cards. <strong className="text-secondary">Afterpay</strong> payment option is available for all clinical wellness services, allowing you to split your payments into interest-free instalments.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
