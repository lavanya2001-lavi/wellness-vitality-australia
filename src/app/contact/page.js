"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';

import ContactHeroSection from '../../components/contact/contactHeroSection';
import ContactFormSection from '../../components/contact/contactFormSection';
import ContactInfoSection from '../../components/contact/contactInfoSection';
import WhatsAppSection from '../../components/contact/whatsAppSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <WhatsAppSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
