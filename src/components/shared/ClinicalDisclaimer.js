"use client";

export function ClinicalDisclaimer({ className = "" }) {
  return (
    <div className={`py-12 px-6 border-t border-primary/5 bg-primary/[0.02] ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-text-primary/50 leading-relaxed">
          <span className="font-bold uppercase tracking-widest block mb-2 opacity-60">Clinical Disclaimer</span>
          All treatments are administered by qualified healthcare professionals following appropriate clinical protocols. 
          Individual suitability is determined through clinical assessment. Results may vary and are dependent on individual health requirements.
        </p>
      </div>
    </div>
  );
}
