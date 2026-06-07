'use client';

import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/elements/section-header';
import { PricingCards, plans } from './pricing-cards';

type FeatureValue = boolean | string;

const featureGroups: { category: string; rows: { label: string; values: FeatureValue[] }[] }[] = [
  {
    category: 'Contenu & Formation',
    rows: [
      { label: 'E-learning (90 vidéos)', values: [true, true, true] },
      { label: 'Templates documents Qualiopi', values: [true, true, true] },
      { label: 'Checklist 7 critères', values: [true, true, true] },
      { label: 'Accès groupe privé', values: [true, true, true] },
      { label: 'Sessions live Q&R', values: [false, '4 sessions', '4 sessions'] },
    ],
  },
  {
    category: 'Accompagnement',
    rows: [
      { label: "Simulations d'audit blanc", values: [false, '3 audits', '3 audits'] },
      { label: 'Retours détaillés par expert', values: [false, true, true] },
      { label: "Expert passe l'audit à votre place", values: [false, false, true] },
      { label: 'Suivi post-certification', values: [false, false, true] },
      { label: 'Expert dédié personnel', values: [false, false, true] },
    ],
  },
  {
    category: 'Garanties',
    rows: [
      { label: 'Remboursement 50% si insatisfait', values: [true, false, false] },
      { label: 'Suivi 3 mois si refus audit', values: [false, true, false] },
      { label: 'Garantie 100% réussite ou remboursé', values: [false, false, true] },
    ],
  },
];

function TableCell({ value, col }: { value: FeatureValue; col: number }) {
  const plan = plans[col];
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check
          className={cn('size-4', plan.highlighted ? 'text-accent' : 'text-foreground/50')}
          strokeWidth={2.5}
        />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <Minus className="size-4 text-muted-foreground/25" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className={cn('text-xs font-medium', plan.highlighted ? 'text-accent' : 'text-foreground/70')}>
        {value}
      </span>
    </div>
  );
}

const guaranteeLabels = [
  '50% remboursé',
  'Suivi 3 mois',
  '100% réussite',
];

export default function PricingPage() {
  return (
    <div>

      {/* ── Header ── */}
      <section className="section-padding container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            isCenter
            category="Tarifs"
            icon={null}
            title="Des offres claires avec garantie"
            description="Trois niveaux d'accompagnement. Toutes les offres incluent une garantie de résultats."
          />
        </motion.div>
      </section>

      {/* ── Cards (same component as homepage) ── */}
      <section className="container pb-20">
        <PricingCards animate="mount" />
      </section>

      {/* ── Comparison table ── */}
      <section className="container pb-24">
        <motion.div
          className="mb-10 space-y-1"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Comparaison détaillée</h2>
          <p className="text-muted-foreground text-sm">Ce qui est inclus dans chaque offre</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full min-w-145 border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-[42%] px-5 py-4 text-left text-xs font-medium text-muted-foreground bg-muted/30">
                  Fonctionnalité
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={cn(
                      'w-[19%] px-4 py-4 text-center',
                      plan.highlighted ? 'bg-accent/5' : 'bg-muted/30',
                    )}
                  >
                    <span className={cn('block text-xs font-medium', plan.highlighted ? 'text-accent' : 'text-foreground/70')}>
                      {plan.name}
                    </span>
                    <span className={cn('block text-lg font-semibold mt-0.5 tracking-tight', plan.highlighted ? 'text-accent' : 'text-foreground')}>
                      {plan.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {featureGroups.map((group) => (
                <>
                  <tr key={group.category}>
                    <td
                      colSpan={4}
                      className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted/40 border-y border-border"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-border/60 last:border-b-0 hover:bg-muted/10 transition-colors"
                    >
                      <td className="px-5 py-3.5 text-sm text-muted-foreground">
                        {row.label}
                      </td>
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          className={cn('px-4 py-3.5', plans[vi].highlighted && 'bg-accent/3')}
                        >
                          <TableCell value={val} col={vi} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}

              {/* Guarantee row */}
              <tr className="border-t-2 border-border bg-muted/20">
                <td className="px-5 py-4 text-sm font-medium text-foreground">Votre garantie</td>
                {plans.map((plan, i) => (
                  <td
                    key={plan.id}
                    className={cn('px-4 py-4 text-center', plan.highlighted && 'bg-accent/4')}
                  >
                    <span className={cn('text-xs font-medium', plan.highlighted ? 'text-accent' : 'text-foreground/70')}>
                      {guaranteeLabels[i]}
                    </span>
                  </td>
                ))}
              </tr>

              {/* CTA row */}
              <tr className="bg-muted/10">
                <td className="p-4" />
                {plans.map((plan) => (
                  <td key={plan.id} className={cn('p-4', plan.highlighted && 'bg-accent/3')}>
                    <a
                      href="/contact"
                      className={cn(
                        'block w-full text-center rounded-full py-2.5 text-xs font-medium transition-colors',
                        plan.highlighted
                          ? 'bg-accent text-white hover:bg-accent/90'
                          : 'border border-border text-foreground hover:bg-muted/50',
                      )}
                    >
                      Réserver
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

    </div>
  );
}
