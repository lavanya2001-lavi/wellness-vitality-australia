"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, History, Activity, HeartHandshake } from "lucide-react";
import Container from "../shared/Container";

const stats = [
  {
    label: "Happy Clients",
    value: 500,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Healthcare Experience",
    value: 10,
    suffix: "+ Years",
    icon: History,
  },
  {
    label: "Wellness Programmes",
    value: 20,
    suffix: "+",
    icon: Activity,
  },
  {
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    icon: HeartHandshake,
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setCurrentValue(latest));
  }, [displayValue]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-0.5">
      <span
        className="font-serif font-bold leading-none"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#16558F" }}
      >
        {currentValue}
      </span>
      <span
        className="font-bold"
        style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)", color: "#4FA3D1" }}
      >
        {suffix}
      </span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-10 lg:py-12"
      style={{
        background: "white",
        borderTop: "1px solid rgba(22,85,143,0.07)",
        borderBottom: "1px solid rgba(22,85,143,0.07)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group flex flex-col items-center text-center rounded-2xl px-4 py-6 cursor-default"
                style={{
                  background: "white",
                  border: "1px solid #E4EDF6",
                  boxShadow: "0 2px 8px rgba(22,85,143,0.06), 0 1px 2px rgba(22,85,143,0.04)",
                  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(79,163,209,0.14), 0 4px 12px rgba(22,85,143,0.08)";
                  e.currentTarget.style.borderColor = "rgba(79,163,209,0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(22,85,143,0.06), 0 1px 2px rgba(22,85,143,0.04)";
                  e.currentTarget.style.borderColor = "#E4EDF6";
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  className="mb-3 flex items-center justify-center rounded-xl"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(79,163,209,0.09)",
                    boxShadow: "0 2px 8px rgba(79,163,209,0.12)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color: "#4FA3D1" }} />
                </motion.div>

                {/* Counter */}
                <Counter value={stat.value} suffix={stat.suffix} />

                {/* Label */}
                <p
                  className="mt-1.5 font-medium uppercase tracking-widest leading-tight"
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(22,85,143,0.45)",
                    letterSpacing: "0.14em",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}