"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';
import Hero from '../../components/shared/Hero';
import { Calendar } from 'lucide-react';

import BookingWidgetSection from '../../components/booking/bookingWidgetSection';
import PaymentSection from '../../components/booking/paymentSection';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          layout="centered"
          badgeIcon={Calendar}
          badgeText="Secure Bookings"
          videoSrc="/videos/bookingbg.mp4"
          title={
            <>
              Book Your <br />
              <em style={{ color: "#B49A63", fontStyle: "italic", fontWeight: 600 }}>Appointment</em>
            </>
          }
          description="Simple, secure, and clinical. Select your treatment and preferred time below to start your journey to vitality."
        />
        <BookingWidgetSection />
        <PaymentSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
