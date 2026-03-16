"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { MessageCircle } from 'lucide-react';

import ContactFormSection from '../../components/contact/contactFormSection';
import ContactInfoSection from '../../components/contact/contactInfoSection';
import WhatsAppSection from '../../components/contact/whatsAppSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          layout="centered"
          badgeIcon={MessageCircle}
          badgeText="Connect With Us"
          title={
            <>
              Let's Start a <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Conversation</em>
            </>
          }
          description="If you have any questions or would like to request further information, our team is here to support you."
        />
        <ContactFormSection />
        <ContactInfoSection />
        <WhatsAppSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
