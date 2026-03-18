"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
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

  useEffect(() => { setIsMounted(true); }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
        <div className="w-[90%] max-w-6xl h-14 rounded-full bg-white/10 animate-pulse" />
      </header>
    );
  }

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl pointer-events-auto"
        >
          <motion.div
            animate={{
              background: "rgba(255,255,255,1)",
              borderColor: "rgba(22,85,143,0.08)",
              boxShadow: scrolled
                ? "0 4px 32px rgba(22,85,143,0.12)"
                : "0 2px 16px rgba(22,85,143,0.07)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-between px-4 py-2 rounded-full border backdrop-blur-xl"
          >

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 py-1 group">
              <Image
                src="/logo.png"
                alt="Wellness Vitality Australia"
                width={180}
                height={52}
                className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* ── Desktop Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredLink === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 rounded-full text-[0.8rem] font-medium transition-colors duration-200"
                    style={{
                      color: isActive
                        ? "#00B7B1"
                        : isHovered ? "#16558F" : "#6B7A8D",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {/* Hover pill */}
                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{
                          background: "rgba(22,85,143,0.05)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Active pill */}
                    {isActive && (
                      <motion.span
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{
                          background: scrolled
                            ? "rgba(0,183,177,0.06)"
                            : "rgba(0,183,177,0.1)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.label}
                      {/* Active teal dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="w-1 h-1 rounded-full bg-[#00B7B1] flex-shrink-0"
                          style={{ boxShadow: "0 0 8px rgba(0,183,177,0.6)" }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* ── CTA Button ── */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href="/booking"
                className="px-6 py-2.5 rounded-full text-white text-[0.8rem] font-bold
                  transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 50%, #00B7B1 100%)",
                  boxShadow: "0 8px 20px rgba(22,85,143,0.25)",
                  letterSpacing: "0.04em",
                }}
              >
                Book Appointment
              </Link>
            </div>

            {/* ── Mobile Actions ── */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/booking"
                className="hidden sm:inline-flex px-4 py-2 rounded-full text-white text-[0.85rem] font-bold shadow-lg"
                style={{ background: "linear-gradient(135deg, #16558F 0%, #00B7B1 100%)" }}
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full transition-colors duration-200"
                style={{
                  background: "rgba(22,85,143,0.06)",
                  color: "#16558F",
                }}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen
                  ? <X size={22} strokeWidth={2} />
                  : <Menu size={22} strokeWidth={2} />
                }
              </button>
            </div>

          </motion.div>
        </motion.nav>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#16558F]/70 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[320px]
                bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex-1 overflow-y-auto flex flex-col h-full">

                {/* Drawer header */}
                <div className="h-20 flex items-center justify-between px-6"
                  style={{ borderBottom: "1px solid #F0F4F8" }}>
                  <Image
                    src="/logo.png"
                    alt="Wellness Vitality Australia"
                    width={160}
                    height={46}
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Links */}
                <div className="py-6 px-4 flex flex-col gap-1">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-5 py-3.5 rounded-2xl
                            text-[1rem] font-medium transition-all duration-200"
                          style={{
                            background: isActive ? "rgba(180,154,99,0.08)" : "transparent",
                            color: isActive ? "#16558F" : "#6B7A8D",
                          }}
                        >
                          {link.label}
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#00B7B1] shadow-[0_0_8px_rgba(0,183,177,0.5)]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-auto p-6 space-y-6"
                  style={{ background: "rgba(248,250,252,0.8)" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/booking"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full py-4 rounded-2xl
                        text-white font-medium text-[1rem] transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, #16558F 0%, #4FA3D1 50%, #00B7B1 100%)",
                        boxShadow: "0 8px 30px rgba(0,183,177,0.3)",
                      }}
                    >
                      Book Appointment
                    </Link>
                  </motion.div>

                  <div className="text-center pb-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B49A63]">
                      AHPRA Registered
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Clinical Excellence · Nurse-Led Care
                    </p>
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