"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../shared/sectionHeading";
import Section from "../shared/sectionWrapper";
import { TreatmentCard } from "../shared/TreatmentCard";
import { Button } from "../shared/primaryButton";
import Container from "../shared/Container";
import FluidCanvas from "../shared/FluidCanvas";


const TREATMENTS = [
  {
    title: "Immune Defence IV",
    description: "A high-dose blend of Vitamin C, Zinc, and Antioxidants to support your immune system's natural function.",
    features: ["Immune Support", "Antioxidant Rich", "Recovery Support"]
  },
  {
    title: "Energy & Performance IV",
    description: "Formulated with B-Complex vitamins and key amino acids to combat fatigue and enhance physical performance.",
    features: ["Energy Boost", "Metabolic Support", "B-Complex Focus"]
  },
  {
    title: "Beauty & Skin Glow IV",
    description: "Enriched with Glutathione and Vitamin C to promote skin health, collagen production, and a natural radiance.",
    features: ["Skin Hydration", "Collagen Support", "Glutathione Boost"]
  }
];

export default function IvTherapySection() {
  return (
    <Section id="iv-therapy" dark={true} className="relative overflow-hidden">
      <FluidCanvas />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            dark={true}
            title="IV Infusion Therapy"
            subtitle="IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient availability compared with oral supplements."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, i) => (
            <TreatmentCard key={i} {...treatment} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/services#iv-infusions" variant="cta" className="px-12 py-4 text-lg shadow-2xl">
            Explore IV Infusions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
