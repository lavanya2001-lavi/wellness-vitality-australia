"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";
import { Droplets, ClipboardCheck, ShieldCheck, HeartPulse, Syringe, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../shared/sectionWrapper";
import Container from "../shared/Container";
import Link from "next/link";

const SERVICES = [
  {
    title: "IV Infusions",
    desc: "Optimal nutrient absorption directly into the bloodstream for immunity and energy.",
    icon: Droplets,
    href: "/services#iv-infusions",
    image: "/images/iv_therapy.png",
  },
  {
    title: "Health Assessments",
    desc: "Comprehensive clinical assessments and reports delivered at your location.",
    icon: ClipboardCheck,
    href: "/services#assessments",
    image: "/assets/hero_nurse_on_navy.png",
  },
  {
    title: "Preventative Health",
    desc: "Proactive wellness planning and lifestyle strategies to keep illness at bay.",
    icon: ShieldCheck,
    href: "/services#preventative",
    image: "/images/home-hero.png",
  },
  {
    title: "Aged Care & NDIS",
    desc: "Specialised in-home nursing support for aged care and NDIS participants.",
    icon: HeartPulse,
    href: "/services#ndis",
    image: "/images/home_care.png",
  },
  {
    title: "Blood Collection",
    desc: "Professional pathology and blood draws at your home or workplace.",
    icon: Syringe,
    href: "/services#blood-collection",
    image: "/images/blood-collection.png",
  },
  {
    title: "Corporate Health",
    desc: "Onsite wellness programmes and screenings for your team's productivity.",
    icon: Users,
    href: "/services#corporate",
    image: "/images/corporate_wellness.png",
  },
];

// Double the services for a seamless infinite loop
const ALL_SERVICES = [...SERVICES, ...SERVICES];

export default function ServicesSection() {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  
  const CARD_WIDTH = 404; // 380px + 24px gap
  const SECTION_WIDTH = CARD_WIDTH * SERVICES.length;
  const SPEED = 40; // Pixels per second

  // Frame-perfect infinite loop that supports manual offset
  useAnimationFrame((time, delta) => {
    if (isPaused) return;

    let nextX = x.get() - (delta * SPEED) / 1000;
    
    // Smooth wrapping
    if (nextX <= -SECTION_WIDTH) {
      nextX += SECTION_WIDTH;
    } else if (nextX > 0) {
      nextX -= SECTION_WIDTH;
    }
    
    x.set(nextX);
  });

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    const currentX = x.get();
    let targetX = direction === "next" ? currentX - CARD_WIDTH : currentX + CARD_WIDTH;

    animate(x, targetX, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onComplete: () => {
        // Wrap after animation if needed
        const finalX = x.get();
        if (finalX <= -SECTION_WIDTH) x.set(finalX + SECTION_WIDTH);
        else if (finalX > 0) x.set(finalX - SECTION_WIDTH);
        setIsPaused(false);
      }
    });
  };

  const wrapX = () => {
    setIsPaused(false);
    const currentX = x.get();
    if (currentX <= -SECTION_WIDTH) x.set(currentX + SECTION_WIDTH);
    else if (currentX > 0) x.set(currentX - SECTION_WIDTH);
  };

  return (
    <Section id="services" className="bg-[#F8FAFC] overflow-hidden">
      <Container>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-px w-6" style={{ background: "#4FA3D1" }} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#4FA3D1]">
                Our Services
              </span>
            </div>
            <h2 className="font-serif font-bold text-[#0F172A] leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Clinical & <span className="italic opacity-90">Wellness Services</span>
            </h2>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/services"
              className="group flex items-center gap-2 text-[#4B5563] hover:text-[#0F172A] transition-colors text-sm font-medium tracking-wide"
            >
              View all services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* HYBRID CAROUSEL CONTAINER */}
        <div 
          className="relative -mx-4 px-4 overflow-hidden border-y border-white/5 py-8 group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={() => handleManualScroll("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4FA3D1] hover:scale-110 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all cursor-pointer shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleManualScroll("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4FA3D1] hover:scale-110 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all cursor-pointer shadow-xl"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -SECTION_WIDTH, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={wrapX}
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          >
            {ALL_SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="w-[300px] sm:w-[380px] flex-shrink-0 bg-[#162e4a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all select-none"
                >
                  <div className="h-[260px] w-full overflow-hidden relative pointer-events-none">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#4FA3D1]/10 mix-blend-multiply opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#4FA3D1] flex items-center justify-center shadow-lg text-white">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-serif text-white mb-4">{svc.title}</h3>
                    <p className="text-[0.95rem] text-white/90 leading-relaxed mb-8 line-clamp-2 h-[2.85rem]">
                      {svc.desc}
                    </p>
                    <Link 
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-[#4FA3D1] font-bold text-[0.9rem] tracking-wide hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}