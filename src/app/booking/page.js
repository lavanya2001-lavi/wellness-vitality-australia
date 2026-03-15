"use client";

import Navbar from '../../components/shared/navBar';
import Footer from '../../components/shared/footerSection';
import { ClinicalDisclaimer } from '../../components/shared/ClinicalDisclaimer';

import BookingHeroSection from '../../components/booking/bookingHeroSection';
import BookingWidgetSection from '../../components/booking/bookingWidgetSection';
import PaymentSection from '../../components/booking/paymentSection';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BookingHeroSection />
        <BookingWidgetSection />
        <PaymentSection />
        <ClinicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
