"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { Droplet } from 'lucide-react';

import IvTreatmentsSection from '../../components/ivInfusions/ivTreatmentsSection';
import NutrientsSection from '../../components/ivInfusions/nutrientsSection';
import WhyIvTherapySection from '../../components/ivInfusions/whyIvTherapySection';
import IvBookingCtaSection from '../../components/ivInfusions/ivBookingCtaSection';

export default function IvInfusionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          badgeIcon={Droplet}
          badgeText="Intravenous Wellness"
          title={
            <>
              Direct Nutrient <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Optimisation</em>
            </>
          }
          description="100% absorption. Immediate hydration. Tailored clinical protocols delivered in the comfort of your home or clinic."
          imageSrc="/images/iv-hero.png"
          imageAlt="IV Therapy Scene"
          ctaButtons={
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
              Schedule Treatment
            </a>
          }
        />
        <IvTreatmentsSection />
        <NutrientsSection />
        <WhyIvTherapySection />
        <IvBookingCtaSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
