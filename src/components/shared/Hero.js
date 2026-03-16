"use client";

import { motion } from "framer-motion";
import FluidCanvas from "./FluidCanvas";

export default function Hero({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  description,
  layout = "side-by-side", // "side-by-side" or "centered"
  imageSrc,
  imageAlt,
  imageCustomStyle = {},
  imageContainerClass = "",
  imageComponent, // Optional: if provided, fully overrides the image area
  ctaButtons,
  useFluidCanvas = true,
  children,
}) {
  const isCentered = layout === "centered";

  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] w-full overflow-hidden bg-[#16558F] flex items-center pt-32 pb-24">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        {useFluidCanvas && <FluidCanvas />}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64 z-20"
          style={{ background: "linear-gradient(to top, #16558F 0%, transparent 100%)" }}
        />
      </div>

      <div className={`relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex ${isCentered ? 'justify-center text-center' : 'flex-col lg:flex-row items-center gap-16'}`}>
        
        {/* Content */}
        <div className={`flex flex-col ${isCentered ? 'items-center max-w-3xl' : 'lg:w-1/2 items-start text-left max-w-xl'}`}>
          {/* Badge */}
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7`}
              style={{
                background: "rgba(180,154,99,0.12)",
                border: "1px solid rgba(180,154,99,0.32)",
              }}
            >
              {BadgeIcon && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#B49A63" }}
                >
                  <BadgeIcon size={11} color="white" />
                </div>
              )}
              <span
                className="text-[#B49A63] font-medium"
                style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {badgeText}
              </span>
            </motion.div>
          )}

          {/* Title */}
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              className="text-white font-bold leading-[1.04] tracking-tight mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              {title}
            </motion.div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="font-medium mb-3 leading-relaxed"
              style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)" }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
              className={`font-light leading-relaxed xl:text-lg ${ctaButtons || children ? 'mb-10' : 'mb-0'}`}
              style={{ color: "rgba(255,255,255,0.52)", maxWidth: "45ch" }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons / Custom Children */}
          {(ctaButtons || children) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
              className={`flex flex-col sm:flex-row gap-4 ${isCentered ? 'justify-center w-full' : ''}`}
            >
              {ctaButtons}
              {children}
            </motion.div>
          )}
        </div>

        {/* Image (for side-by-side layout) */}
        {!isCentered && (imageSrc || imageComponent) && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className={`lg:w-1/2 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 ${imageContainerClass}`}
          >
            {imageComponent ? (
              imageComponent
            ) : (
              <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-[2rem] overflow-hidden border border-[rgba(180,154,99,0.2)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#16558F] to-transparent z-10 pointer-events-none opacity-80" />
                <div className="absolute inset-0 bg-[#16558F]/20 z-0 pointer-events-none" />
                <img
                  src={imageSrc}
                  alt={imageAlt || "Hero Image"}
                  className="w-full h-full object-cover"
                  style={imageCustomStyle}
                />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
