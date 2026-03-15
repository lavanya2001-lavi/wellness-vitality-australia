"use client";

import { Calendar, CreditCard } from "lucide-react";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import { Button } from "../shared/primaryButton";

export default function BookingSection() {
  return (
    <Section id="booking" dark={true} className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            dark={true}
            title="Book Your IV Infusion"
            subtitle="Schedule your IV infusion through our secure online booking system."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Calendar size={28} className="text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-serif">Flexible Scheduling</h4>
              <p className="text-white/70 text-sm">Book via Calendly at a time that suits you best.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CreditCard size={28} className="text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-serif">Payment Options</h4>
              <p className="text-white/70 text-sm">Afterpay available for all clinical wellness services.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button href="/booking" variant="cta" className="px-12 py-5 text-xl shadow-2xl">
              Book Appointment
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
