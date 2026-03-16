"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { Users } from 'lucide-react';

import MissionSection from '../../components/about/missionSection';
import ClinicalStandardsSection from '../../components/about/clinicalStandardsSection';
import MobileHealthcareSection from '../../components/about/mobileHealthcareSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          badgeIcon={Users}
          badgeText="Our Professional Team"
          title={
            <>
              Dedicated to Your <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Wellness & Vitality</em>
            </>
          }
          description="Wellness Vitality Australia is a nurse-led mobile healthcare provider dedicated to delivering premium clinical services and wellness infusions across Melbourne and surrounding areas."
          imageSrc="/images/about-hero.png"
          imageAlt="Our Healthcare team"
        />
        <MissionSection />
        <ClinicalStandardsSection />
        <MobileHealthcareSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
