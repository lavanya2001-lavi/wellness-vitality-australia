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
    label: "Wellness Programs",
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setCurrentValue(latest));
  }, [displayValue]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="text-4xl md:text-5xl font-bold text-primary font-serif">
        {currentValue}
      </span>
      <span className="text-xl md:text-2xl font-bold text-secondary ml-1">
        {suffix}
      </span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-primary/5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon size={28} className="text-primary" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm md:text-base font-medium text-text-primary/60 uppercase tracking-widest">
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
