'use client';

import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from '@/components/elements/section-header';
import { PricingCards } from './pricing-cards';

export default function PricingSection() {
  return (
    <section className="section-padding container space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          isCenter
          category="Tarifs"
          icon={null}
          title="Nos offres de formation"
          description="Choisissez l'accompagnement adapté à votre situation."
        />
      </motion.div>

      <PricingCards animate="scroll" />

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
        >
          Voir la comparaison détaillée de toutes les offres
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
