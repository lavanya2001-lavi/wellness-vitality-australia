"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./shared/primaryButton";

const SERVICES = [
  { id: "iv-infusions", name: "IV Infusions" },
  { id: "vitamin-injections", name: "Vitamin Injections" },
  { id: "iron-infusions", name: "Iron Infusions" },
  { id: "blood-collection", name: "Blood Collection" },
  { id: "teeth-whitening", name: "Teeth Whitening" },
  { id: "wellness-checks", name: "Wellness Checks / Nursing Health Reports" },
];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: ""
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-primary/5">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Step {step} of 2</span>
          <div className="flex gap-2">
            <div className={`h-1.5 w-12 rounded-full transition-colors ${step >= 1 ? "bg-primary" : "bg-primary/10"}`} />
            <div className={`h-1.5 w-12 rounded-full transition-colors ${step >= 2 ? "bg-primary" : "bg-primary/10"}`} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-primary font-serif">
          {step === 1 ? "Select a Service" : "Your Details"}
        </h2>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            {SERVICES.map((service) => (
              <label 
                key={service.id}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.service === service.name 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-primary/5 hover:border-primary/20"
                }`}
              >
                <input 
                  type="radio" 
                  name="service" 
                  value={service.name}
                  className="hidden"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                />
                <span className={`w-5 h-5 rounded-full border-2 mr-4 flex-shrink-0 flex items-center justify-center transition-all ${
                  formData.service === service.name ? "border-primary" : "border-primary/20"
                }`}>
                  {formData.service === service.name && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </span>
                <span className="font-semibold text-primary">{service.name}</span>
              </label>
            ))}
            <div className="pt-6">
              <Button 
                onClick={nextStep} 
                disabled={!formData.service}
                className="w-full py-4"
              >
                Continue to Details
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-bold text-primary/60 uppercase tracking-widest mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary outline-none transition-all bg-primary/[0.02]"
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-primary/60 uppercase tracking-widest mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary outline-none transition-all bg-primary/[0.02]"
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary/60 uppercase tracking-widest mb-2 ml-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary outline-none transition-all bg-primary/[0.02]"
                  placeholder="0400 000 000"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex gap-4 pt-6">
              <Button variant="outline" onClick={prevStep} className="flex-1 py-4">
                Back
              </Button>
              <Button variant="cta" className="flex-[2] py-4">
                Confirm Booking
              </Button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
