'use client';

import { motion } from 'motion/react';
import { ArrowRight, FileCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const CHECKLIST = [
  { icon: <FileCheck className="size-4 text-accent shrink-0" />, text: "Checklist des 7 critères Qualiopi" },
  { icon: <ShieldCheck className="size-4 text-accent shrink-0" />, text: "Documents obligatoires à préparer" },
  { icon: <TrendingUp className="size-4 text-accent shrink-0" />, text: "Plan d'action pour obtenir votre NDA" },
];

const HeroMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto px-4 mt-6 mb-10"
    >
      <a
        href="/resources"
        className="group block rounded-2xl border border-border overflow-hidden"
        style={{ backgroundColor: '#fafafa' }}
      >

        {/* Top accent line */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-accent/40 to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-7 pt-7 pb-6 border-b border-border">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-secondary">
              Guide gratuit · PDF
            </span>
            <h3 className="text-xl font-bold tracking-tight leading-snug">
              Obtenez Qualiopi en moins de 3 mois
            </h3>
            <p className="text-sm text-muted-foreground leading-6 max-w-sm">
              Le guide complet pour préparer votre dossier et décrocher la certification du premier coup.
            </p>
          </div>
          <div className="shrink-0 size-11 rounded-xl flex items-center justify-center bg-background border border-border shadow-sm">
            <img src="/layout/logo.svg" alt="Courage Formation" className="h-5 w-auto" />
          </div>
        </div>

        {/* Checklist */}
        <div className="px-7 py-5 space-y-0 divide-y divide-border">
          {CHECKLIST.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm py-3.5">
              {item.icon}
              <span className="text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 px-7 py-4 border-t border-border bg-background">
          <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap flex-wrap">
            <span className="rounded-md border border-border px-2 py-0.5 font-medium text-foreground text-[11px] shrink-0">PDF</span>
            <span className="shrink-0">12 pages</span>
            <span className="text-border shrink-0">·</span>
            <span className="shrink-0">Sans inscription</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent whitespace-nowrap shrink-0 group-hover:gap-3 transition-all duration-200">
            Télécharger <ArrowRight className="size-4" />
          </span>
        </div>

      </a>
    </motion.div>
  );
};

export default HeroMockup;
