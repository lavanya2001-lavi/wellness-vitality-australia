"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';

import ServicesHeroSection from '../../components/services/servicesHeroSection';
import HealthAssessmentsSection from '../../components/services/healthAssessmentsSection';
import PreventativeHealthSection from '../../components/services/preventativeHealthSection';
import AgedCareServicesSection from '../../components/services/agedCareServicesSection';
import IvInfusionOverviewSection from '../../components/services/ivInfusionOverviewSection';
import BloodCollectionSection from '../../components/services/bloodCollectionSection';
import TeethWhiteningSection from '../../components/services/teethWhiteningSection';
import CorporateServicesSection from '../../components/services/corporateServicesSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHeroSection />
        <HealthAssessmentsSection />
        <PreventativeHealthSection />
        <AgedCareServicesSection />
        <IvInfusionOverviewSection />
        <BloodCollectionSection />
        <TeethWhiteningSection />
        <CorporateServicesSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
