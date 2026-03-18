"use client";

export function ClinicalDisclaimer({ className = "" }) {
  return (
    <div className={`py-12 px-6 border-t border-primary/5 bg-primary/[0.02] ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#4B5563] leading-relaxed">
          <span className="font-bold uppercase tracking-widest block mb-2 text-[#0F172A]">Clinical Disclaimer</span>
          All treatments are administered by qualified healthcare professionals following appropriate clinical protocols. 
          Individual suitability is determined through clinical assessment. Results may vary and are dependent on individual health requirements.
        </p>
      </div>
    </div>
  );
}
