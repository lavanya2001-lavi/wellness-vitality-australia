"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';

import IvHeroSection from '../../components/ivInfusions/ivHeroSection';
import IvTreatmentsSection from '../../components/ivInfusions/ivTreatmentsSection';
import NutrientsSection from '../../components/ivInfusions/nutrientsSection';
import WhyIvTherapySection from '../../components/ivInfusions/whyIvTherapySection';
import IvBookingCtaSection from '../../components/ivInfusions/ivBookingCtaSection';

export default function IvInfusionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <IvHeroSection />
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
