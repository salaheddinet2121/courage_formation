'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 1,
    badge: null,
    label: "Offre 1",
    name: "E-QUALIOPI",
    originalPrice: "1 490€",
    discount: "-33%",
    price: "990€",
    features: [
      { text: "E-learning 90 vidéos", strong: false },
      { text: "Templates documents", strong: false },
      { text: "Checklist 7 critères", strong: false },
      { text: "Accès groupe privé", strong: false },
      { text: "GARANTIE : Remboursement si pas satisfait 50%", strong: true },
    ],
    cta: "Rejoindre E-Qualiopi",
    highlighted: false,
  },
  {
    id: 2,
    badge: "Populaire",
    label: "Offre 2",
    name: "QUALIOPI + AUDITS BLANCS",
    originalPrice: "3 490€",
    discount: "-43%",
    price: "1 990€",
    features: [
      { text: "Tout E-QualiOpi", strong: false },
      { text: "3 audits blancs (coaching)", strong: false },
      { text: "Retours détaillés", strong: false },
      { text: "4 sessions live Q&R", strong: false },
      { text: "GARANTIE : Suivi 3 mois si refus audit", strong: true },
    ],
    cta: "Rejoindre Audits Blancs",
    highlighted: true,
  },
  {
    id: 3,
    badge: "Offre garantie",
    label: "Offre 3",
    name: "JE PASSE TON AUDIT",
    originalPrice: "4 990€",
    discount: "-50%",
    price: "2 490€",
    features: [
      { text: "Tout Audits Blancs", strong: false },
      { text: "Je passe l'audit à ta place", strong: false },
      { text: "Suivi post-certification", strong: false },
      { text: "Garantie 100% réussite", strong: true },
      { text: "ou argent remboursé", strong: true },
    ],
    cta: "Rejoindre l'Offre Garantie",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding container space-y-10">
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Nos offres de formation
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Choisissez l&apos;accompagnement adapté à votre situation.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-3 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative rounded-2xl p-6 flex flex-col gap-5 border",
              plan.highlighted
                ? "border-accent/40 shadow-md shadow-accent/10"
                : "border-border",
            )}
            style={{ backgroundColor: '#fafafa' }}
          >
            {plan.badge && (
              <div className={cn(
                "absolute -top-3 right-5 rounded-full px-3 py-1 text-xs font-semibold",
                plan.highlighted
                  ? "bg-accent text-white"
                  : "bg-muted text-muted-foreground border border-border",
              )}>
                {plan.badge}
              </div>
            )}

            <div className="space-y-1 pr-4 pt-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {plan.label}
              </p>
              <h3 className={cn(
                "text-base font-bold leading-snug",
                plan.highlighted ? "text-accent" : "text-foreground",
              )}>
                {plan.name}
              </h3>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                <span className={cn(
                  "text-xs font-semibold rounded-full px-2.5 py-0.5",
                  plan.highlighted
                    ? "bg-accent/10 text-accent"
                    : "bg-muted text-muted-foreground",
                )}>
                  {plan.discount}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-xs text-muted-foreground">seulement</span>
              </div>
            </div>

            <div className="border-t border-border" />

            <ul className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-5">
                  <TbCircleCheckFilled className={cn(
                    "size-4 shrink-0 mt-0.5",
                    plan.highlighted ? "text-accent" : "text-muted-foreground",
                  )} />
                  <span className={cn(
                    feature.strong ? "font-semibold text-foreground" : "text-muted-foreground",
                  )}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="default"
              className={cn(
                "w-full rounded-full font-semibold text-sm mt-2",
                plan.highlighted
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "bg-transparent border border-border text-foreground hover:bg-muted",
              )}
              asChild
            >
              <a href="/contact">{plan.cta}</a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
