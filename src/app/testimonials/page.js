"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import Container from '../../components/shared/Container';
import Section from '../../components/shared/sectionWrapper';
import { SectionHeader } from '../../components/shared/sectionHeading';
import { TestimonialCard } from '../../components/shared/TestimonialCard';
import { CTASection } from '../../components/shared/CTASection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah J.",
    review: "The Energy & Performance IV has made a significant difference in my daily energy levels. The clinic is professional and welcoming.",
    date: "March 2024"
  },
  {
    name: "Michael T.",
    review: "Highly professional service. The staff explained everything clearly and the environment is exceptionally clean and calming.",
    date: "February 2024"
  },
  {
    name: "Emma W.",
    review: "I visit regularly for vitamin injections. Quick, easy, and always a great experience with the nursing team.",
    date: "January 2024"
  },
  {
    name: "David L.",
    review: "The team at Wellness & Vitality are excellent. They took the time to understand my health goals and recommended the right infusion.",
    date: "December 2023"
  },
  {
    name: "Jessica P.",
    review: "A truly premium experience. The hydration and recovery IV was exactly what I needed after a long flight.",
    date: "November 2023"
  },
  {
    name: "Andrew R.",
    review: "Professional, medical-grade environment. I feel much more confident getting treatments here than at non-clinical spas.",
    date: "October 2023"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          layout="centered"
          badgeIcon={Star}
          badgeText="Patient Experiences"
          title={
            <>
              Kind Words from <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Our Patients</em>
            </>
          }
          description="Read about the experiences of our patients and the positive results they've achieved through our clinical wellness services."
        />
        <Section className="bg-accent/30">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </Container>
        </Section>
        
        <CTASection 
          title="Experience It for Yourself" 
          subtitle="Join our community of satisfied patients and start your path to optimal vitality today."
        />
        
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
