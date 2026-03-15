"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';

import AboutHeroSection from '../../components/about/aboutHeroSection';
import MissionSection from '../../components/about/missionSection';
import ClinicalStandardsSection from '../../components/about/clinicalStandardsSection';
import MobileHealthcareSection from '../../components/about/mobileHealthcareSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHeroSection />
        <MissionSection />
        <ClinicalStandardsSection />
        <MobileHealthcareSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
