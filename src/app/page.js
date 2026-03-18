"use client";

import Navbar from '../components/shared/navBar';
import Footer from '../components/shared/footerSection';
import { ClinicalDisclaimer } from '../components/shared/ClinicalDisclaimer';
import HomeHero from '../components/homepage/HomeHero';

import WhyChooseSection from '../components/homepage/whyChooseSection';
import StatsSection from '../components/homepage/statsSection';
import ServicesSection from '../components/homepage/servicesSection';
import IvTherapySection from '../components/homepage/ivTherapySection';
import WhyIvSection from '../components/homepage/whyIvSection';
import MobileCareSection from '../components/homepage/mobileCareSection';
import ContactBookingUnified from '../components/homepage/contactBookingUnified';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        <WhyChooseSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        <IvTherapySection />
        <WhyIvSection />
        <MobileCareSection />
        <ContactBookingUnified />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
