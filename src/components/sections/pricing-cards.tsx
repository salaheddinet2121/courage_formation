'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const plans = [
  {
    id: 'e-qualiopi',
    label: 'OFFRE 1',
    name: 'E-Qualiopi',
    originalPrice: '1 490€',
    discount: '-33%',
    price: '990€',
    highlighted: false,
    badge: null as string | null,
    cta: 'Réserver',
    href: '/contact',
    features: [
      'E-learning 90 vidéos',
      'Templates documents',
      'Checklist 7 critères',
      'Accès groupe privé',
    ],
    guarantee: 'GARANTIE : Remboursement si pas satisfait 50%',
  },
  {
    id: 'audits-blancs',
    label: 'OFFRE 2',
    name: 'Qualiopi + Audits Blancs',
    originalPrice: '3 490€',
    discount: '-43%',
    price: '1 990€',
    highlighted: true,
    badge: 'Populaire' as string | null,
    cta: 'Réserver',
    href: '/contact',
    features: [
      'Tout E-QualiOpi',
      '3 audits blancs (coaching)',
      'Retours détaillés',
      '4 sessions live Q&R',
    ],
    guarantee: 'GARANTIE : Suivi 3 mois si refus audit',
  },
  {
    id: 'offre-garantie',
    label: 'OFFRE 3',
    name: 'Je Passe Ton Audit',
    originalPrice: '4 990€',
    discount: '-50%',
    price: '2 490€',
    highlighted: false,
    badge: 'Offre garantie' as string | null,
    cta: 'Réserver',
    href: '/contact',
    features: [
      'Tout Audits Blancs',
      "Je passe l'audit à ta place",
      'Suivi post-certification',
      'Garantie 100% réussite',
      'ou argent remboursé',
    ],
    guarantee: null as string | null,
  },
];

export function PricingCards({ animate = 'scroll' }: { animate?: 'scroll' | 'mount' }) {
  const initial = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const wrapperProps =
    animate === 'mount'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.1 as number } };

  return (
    <motion.div
      className="grid grid-cols-1 gap-5 md:grid-cols-3"
      transition={{ staggerChildren: 0.1 }}
      {...wrapperProps}
    >
      {plans.map((plan) => (
        <motion.div
          key={plan.id}
          variants={initial}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative rounded-3xl border flex flex-col p-7 gap-5',
            plan.highlighted
              ? 'border-accent shadow-lg shadow-accent/15 bg-white'
              : 'border-border bg-muted/20',
          )}
        >
          {/* Badge */}
          {plan.badge && (
            <span className="absolute -top-3.5 right-6 rounded-full px-4 py-1 text-xs font-medium bg-accent text-white">
              {plan.badge}
            </span>
          )}

          {/* Label + name */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
              {plan.label}
            </p>
            <h3 className={cn('text-lg font-semibold', plan.highlighted ? 'text-accent' : 'text-foreground')}>
              {plan.name}
            </h3>
          </div>

          {/* Price */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
              <span
                className={cn(
                  'text-xs font-medium rounded-full px-2.5 py-0.5',
                  plan.highlighted ? 'bg-accent/15 text-accent' : 'bg-muted text-muted-foreground',
                )}
              >
                {plan.discount}
              </span>
            </div>
            <p className="text-5xl font-black tracking-tight">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground ml-1.5">seulement</span>
            </p>
          </div>

          <hr className={cn('border-t', plan.highlighted ? 'border-accent/20' : 'border-border')} />

          {/* Features */}
          <ul className="flex-1 space-y-3">
            {plan.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className={cn(
                    'size-4 mt-0.5 shrink-0',
                    plan.highlighted ? 'text-accent' : 'text-foreground/40',
                  )}
                />
                <span className={plan.highlighted ? 'text-foreground' : 'text-muted-foreground'}>
                  {feat}
                </span>
              </li>
            ))}
            {plan.guarantee && (
              <li className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className={cn(
                    'size-4 mt-0.5 shrink-0',
                    plan.highlighted ? 'text-accent' : 'text-foreground/40',
                  )}
                />
                <span className={cn('font-medium', plan.highlighted ? 'text-foreground' : 'text-foreground/80')}>
                  {plan.guarantee}
                </span>
              </li>
            )}
          </ul>

          {/* CTA */}
          <a
            href={plan.href}
            className={cn(
              'block w-full text-center rounded-full py-3.5 text-sm font-medium transition-colors',
              plan.highlighted
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'bg-background border border-border text-foreground hover:bg-muted/50',
            )}
          >
            {plan.cta}
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
