"use client";

import Link from "next/link";
import { Button } from "./primaryButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="p-2 bg-white rounded-xl shadow-lg ring-1 ring-primary/5">
                <img 
                  src="/logo.png" 
                  alt="Wellness & Vitality" 
                  className="h-14 md:h-16 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-8">
              Empowering your journey to holistic health through restorative flow and natural vitality. Professional wellness care tailored to your unique path.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary cursor-pointer transition-colors flex items-center justify-center">
                  <span className="text-xs">S{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-secondary uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-secondary uppercase tracking-widest text-sm">Get in Touch</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">A:</span> 123 Wellness Way, Melbourne, VIC
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">P:</span> +61 3 9000 0000
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">E:</span> hello@wellnessvitality.com.au
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-secondary uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">Join our community for wellness tips and updates.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
              />
              <Button variant="secondary" className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Wellness & Vitality Australia. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
