"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  Calendar, 
  Clock, 
  MessageSquare,
  ChevronDown,
  ShieldCheck,
  Award,
  Zap,
  ArrowRight,
  ExternalLink,
  CreditCard,
  MailQuestion
} from "lucide-react";

const SERVICES = [
  "IV Infusions",
  "Health Assessments",
  "Preventative Health & Wellness",
  "Aged Care & NDIS Nursing",
  "Blood Collection",
  "Teeth Whitening",
  "Corporate Health Services"
];

const ADMIN_EMAIL = "admin@wellnessvitalityaustralia.com.au";

export default function BookingForm() {
  const [step, setStep] = useState(1); // 1: Details, 2: IV Redirect/Payment
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    enquiry: ""
  });

  const isIvBooking = formData.service === "IV Infusions";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (isIvBooking) {
      setStep(2);
    } else {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      enquiry: ""
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* ── Left Side: Dynamic Form/Content Card ── */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7"
      >
        <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden min-h-[500px] flex flex-col justify-center">
          {/* Subtle accent background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0" />
          
          <AnimatePresence mode="wait">
            {!submitted && step === 1 && (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleNext} 
                className="relative z-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                      <Phone size={14} className="text-primary" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                    <Stethoscope size={14} className="text-primary" /> Select Service
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-gray-800 appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled>Choose a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Enquiry / Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                    <MessageSquare size={14} className="text-primary" /> Enquiry
                  </label>
                  <textarea
                    required={!isIvBooking}
                    name="enquiry"
                    rows={3}
                    placeholder={isIvBooking ? "Any specific clinical requirements or questions? (Optional)" : "Please describe your clinical needs or questions..."}
                    value={formData.enquiry}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-gray-800 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #B49A63 0%, #d4b87a 100%)",
                    boxShadow: "0 15px 35px rgba(180,154,99,0.3)"
                  }}
                >
                  {isIvBooking ? "Proceed to Booking" : "Send Enquiry"}
                  <ArrowRight size={20} />
                </button>
              </motion.form>
            )}

            {step === 2 && !submitted && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center space-y-8 py-4"
              >
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-[#B49A63]/10 rounded-full flex items-center justify-center mx-auto text-[#B49A63]">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-serif">Finalise Your Booking</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Please select your preferred time on Calendly and proceed with clinical payment.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* Calendly Launch */}
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 rounded-2xl border-2 border-[#B49A63]/20 hover:border-[#B49A63] hover:bg-[#B49A63]/5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#B49A63] rounded-xl flex items-center justify-center text-white">
                        <Calendar size={24} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-primary">Schedule on Calendly</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Step 1: Choose Time</p>
                      </div>
                    </div>
                    <ExternalLink size={20} className="text-gray-300 group-hover:text-[#B49A63]" />
                  </a>

                  {/* Payment / Afterpay */}
                  <div className="flex items-center justify-between p-6 rounded-2xl border-2 border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                        <CreditCard size={24} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-primary">Pay via Afterpay / NursePay</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Step 2: Secure Payment</p>
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-black text-[#00D2BE] px-2 py-1 rounded bg-[#00D2BE]/10">AFTERPAY</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(1)}
                  className="text-sm font-bold text-gray-400 hover:text-primary transition-colors flex items-center gap-2 mx-auto"
                >
                  <ArrowRight size={14} className="rotate-180" /> Back to details
                </button>
              </motion.div>
            )}

            {submitted && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 text-center space-y-8 py-10"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <MailQuestion size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary font-serif">Enquiry Sent Successfully</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      Your inquiry has been forwarded to <strong>{ADMIN_EMAIL}</strong>. Our clinical team will review your request and contact you shortly via WhatsApp.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={resetForm}
                  className="px-8 py-3 rounded-xl border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Right Side: Info Panel ── */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="lg:col-span-5 space-y-8"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary font-serif leading-tight">
            Professional Care <br />
            <span className="text-[#B49A63] italic">At Your Doorstep</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team of qualified registered nurses provides premium mobile healthcare and wellness services tailored to your needs.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { 
              icon: ShieldCheck, 
              title: "Secure Booking", 
              desc: "Your data is encrypted and handled with clinical confidentiality." 
            },
            { 
              icon: Award, 
              title: "Expert Clinical Staff", 
              desc: "All treatments are delivered by experienced Registered Nurses." 
            },
            { 
              icon: Zap, 
              title: "WhatsApp Confirmation", 
              desc: "Fast confirmation and intake provided via WhatsApp once scheduled." 
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <item.icon size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Context Card */}
        <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-blue-100 flex flex-col items-center text-center">
            {isIvBooking ? (
              <>
                <p className="text-xs font-bold text-[#B49A63] uppercase tracking-widest mb-4">Direct Booking Path</p>
                <p className="text-sm text-gray-600 mb-6 font-medium italic">"IV Infusions include automated time selection and secure upfront payment options."</p>
                <div className="flex gap-4 items-center opacity-80 transition-all">
                  <span className="text-xl font-black text-[#00D2BE]">Afterpay</span>
                  <span className="text-primary font-bold italic">NursePay</span>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-4">Enquiry Path</p>
                <p className="text-sm text-gray-600 mb-4 font-medium italic">"Clinical enquiries are managed directly by our administration for tailored care plans."</p>
                <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">{ADMIN_EMAIL}</p>
              </>
            )}
        </div>
      </motion.div>

    </div>
  );
}
