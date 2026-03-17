"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { Stethoscope } from 'lucide-react';

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
        <Hero 
          badgeIcon={Stethoscope}
          badgeText="Clinical & Wellness Services"
          videoSrc="/videos/services.mp4"
          title={
            <>
              Qualified Nursing <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Care and Support</em>
            </>
          }
          description="Wellness Vitality Australia provides a range of professional healthcare and wellness services delivered by qualified registered nurses. We support preventative health, recovery, and general wellbeing."
          imageSrc="/images/blood-collection.png"
          imageAlt="Professional Clinical Services"
        />
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
