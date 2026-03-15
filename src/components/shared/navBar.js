"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "./primaryButton";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/iv-infusions", label: "IV Infusions" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Prevent hydration issues by not rendering content that relies on client-side state until mounted
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24 bg-transparent border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="w-[180px] h-10 bg-gray-100/10 animate-pulse rounded" />
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav
          className={`w-full transition-all duration-400 ${scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-[#E8EEF5]"
            : "bg-transparent border-b border-transparent"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between w-full min-w-0">

            {/* ── Logo Container (Left) ── */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group py-2">
                <Image
                  src="/logo.png"
                  alt="Wellness Vitality Australia Logo"
                  width={220}
                  height={64}
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </Link>
            </div>

            {/* ── Desktop Navigation (Right, Hidden on < lg) ── */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  const isHovered = hoveredLink === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-4 py-2 text-[0.95rem] font-medium rounded-full transition-colors duration-300"
                      style={{
                        color: isActive ? "#16558F" : scrolled ? "#374151" : "#1F2937",
                        fontWeight: isActive ? "700" : "500",
                      }}
                    >
                      {/* Hover/Active Pill Background */}
                      {(isHovered || isActive) && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 rounded-full -z-10"
                          style={{
                            background: isActive
                              ? "rgba(22, 85, 143, 0.08)"
                              : "rgba(232, 242, 250, 0.6)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>

                      {/* Active Underline Dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B49A63]"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pl-4 border-l border-gray-200">
                <Button
                  href="/booking"
                  variant="primary"
                  className="px-6 py-3 text-[0.95rem] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* ── Mobile & Tablet Actions (Right, Hidden on >= lg) ── */}
            <div className="flex lg:hidden items-center gap-4">
              <div className="hidden sm:block">
                <Button
                  href="/booking"
                  variant="primary"
                  className="px-5 py-2.5 text-[0.9rem] shadow-md shadow-primary/20"
                >
                  Book
                </Button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-primary bg-primary/5 hover:bg-primary/10 transition-colors z-[80]"
                aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {mobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#0A2540]/60 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[320px] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto flex flex-col h-full">
                {/* Header Padding for Logo/Close button area */}
                <div className="h-20 md:h-24 flex items-center px-6 border-b border-gray-50 bg-gray-50/30">
                  <span className="font-serif font-bold text-primary text-2xl">Navigation</span>
                </div>

                <div className="py-8 px-6 flex flex-col gap-3">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[1.1rem] font-semibold transition-all duration-300 ${isActive
                            ? "bg-primary/5 text-primary shadow-sm"
                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                            }`}
                        >
                          {link.label}
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto p-6 space-y-8 bg-gray-50/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <Button
                      href="/booking"
                      variant="primary"
                      className="w-full py-4 text-[1.1rem] shadow-xl shadow-primary/20"
                    >
                      Book Appointment
                    </Button>
                  </motion.div>

                  <div className="text-center pb-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                      Clinical Excellence
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Professional Care Redefined</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
