"use client";

import Navbar from '../components/shared/navBar';
import Footer from '../components/shared/footerSection';
import { ClinicalDisclaimer } from '../components/shared/ClinicalDisclaimer';

import HeroSection from '../components/homepage/heroSection';
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
        <HeroSection />
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
