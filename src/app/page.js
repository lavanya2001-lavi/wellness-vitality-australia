"use client";

import Navbar from '../components/shared/navBar';
import Footer from '../components/shared/footerSection';
import { ClinicalDisclaimer } from '../components/shared/ClinicalDisclaimer';
import Hero from '../components/shared/Hero';
import { Sparkles, Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';

import WhyChooseSection from '../components/homepage/whyChooseSection';
import StatsSection from '../components/homepage/statsSection';
import ServicesSection from '../components/homepage/servicesSection';
import IvTherapySection from '../components/homepage/ivTherapySection';
import WhyIvSection from '../components/homepage/whyIvSection';
import MobileCareSection from '../components/homepage/mobileCareSection';
import BookingSection from '../components/homepage/bookingSection';
import ContactCtaSection from '../components/homepage/contactCtaSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          badgeIcon={Sparkles}
          badgeText="Premium Nurse-Led Healthcare"
          title={
            <>
              Your Trusted<br />
              Partner in{" "}
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>
                Wellness
              </em>
            </>
          }
          subtitle="Expert care delivered to your doorstep."
          description="Nurse-led IV therapy, vitamin infusions & recovery treatments — personalised for your needs and brought directly to you."
          imageComponent={
            <div className="relative w-full h-full flex items-center justify-end" style={{ paddingRight: "10%" }}>
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 opacity-30 blur-[120px]"
                style={{ background: "radial-gradient(circle at center, rgba(180,154,99,0.3) 0%, transparent 70%)" }}
              />
              <img
                src="/assets/hero_nurse_on_navy.png"
                alt="Hero Nurse Clinician"
                className="w-auto object-contain select-none"
                style={{
                  height: "85vh",
                  marginBottom: "-4vh",
                  WebkitMaskImage: "linear-gradient(to right, transparent 5%, black 40%, black 85%, transparent 100%), linear-gradient(to bottom, black 85%, transparent 100%)",
                  maskImage: "linear-gradient(to right, transparent 5%, black 40%, black 85%, transparent 100%), linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              />
            </div>
          }
          imageContainerClass="hidden lg:flex"
          ctaButtons={
            <>
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#B49A63",
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 8px 28px rgba(180,154,99,0.42)",
                }}
              >
                Schedule Appointment
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-light transition-all duration-200 hover:border-white/60 hover:text-white"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.03em",
                }}
              >
                Our Services
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </>
          }
        >
          <div className="flex items-center gap-2 w-full mt-8">
            <HomeIcon size={13} color="#B49A63" />
            <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
              Available at{" "}
              <span style={{ color: "rgba(180,154,99,0.85)", fontWeight: 500 }}>
                www.wellnessvitalityaustralia.com.au
              </span>
            </span>
          </div>
        </Hero>
        <WhyChooseSection />
        <StatsSection />
        <ServicesSection />
        <IvTherapySection />
        <WhyIvSection />
        <MobileCareSection />
        <BookingSection />
        <ContactCtaSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
