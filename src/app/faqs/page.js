"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import Container from '../../components/shared/Container';
import Section from '../../components/shared/sectionWrapper';
import { SectionHeader } from '../../components/shared/sectionHeading';
import { FAQAccordion } from '../../components/shared/FAQAccordion';
import { CTASection } from '../../components/shared/CTASection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What is IV Nutrient Therapy?",
    answer: "IV Nutrient Therapy involves the intravenous administration of essential vitamins, minerals, and nutrients directly into the bloodstream for 100% absorption, bypassing the digestive system."
  },
  {
    question: "Is IV Therapy safe?",
    answer: "Yes, when administered by qualified healthcare professionals. At Wellness & Vitality, all treatments follow strict clinical protocols and are administered by registered nurses following a clinical assessment."
  },
  {
    question: "Do I need a consultation?",
    answer: "Yes, every new patient undergoes a clinical assessment to determine suitability for treatment and to ensure protocols are tailored to individual health requirements."
  },
  {
    question: "How long does a treatment session take?",
    answer: "Treatment durations vary, but most IV infusions take between 30 to 60 minutes. Vitamin injections typically take less than 15 minutes."
  },
  {
    question: "Is there any downtime after treatment?",
    answer: "Generally, there is no downtime. Most patients can return to their normal activities immediately after their session. Some may experience mild bruising at the injection site."
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          layout="centered"
          badgeIcon={HelpCircle}
          badgeText="Information Center"
          title={
            <>
              Frequently Asked <br />
              <em style={{ color: "#C8965A", fontStyle: "italic", fontWeight: 600 }}>Questions</em>
            </>
          }
          description="Find answers to common questions about our clinical wellness therapies, safety protocols, and what to expect during your visit."
        />
        <Section>
          <Container>
            <div className="mt-8">
              <FAQAccordion items={FAQS} />
            </div>
          </Container>
        </Section>
        
        <CTASection 
          title="Still have questions?" 
          subtitle="Our clinical team is happy to provide further information about our treatments and protocols."
          buttonText="Contact Our Team"
          href="/contact"
        />
        
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
