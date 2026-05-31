'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TbCircleCheckFilled, TbFlame, TbStarFilled } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    id: 1,
    badge: null,
    name: "E-QUALIOPI",
    originalPrice: "1 490€",
    discount: "-33%",
    price: "990€",
    features: [
      "E-learning 90 vidéos",
      "Templates documents",
      "Checklist 7 critères",
      "Accès groupe privé",
      "GARANTIE : Remboursement si pas satisfait 50%",
    ],
    cta: "Rejoindre E-Qualiopi",
    highlighted: false,
    accentColor: "text-blue-500",
    discountBg: "bg-blue-100 text-blue-600",
    checkColor: "text-blue-500",
    ctaClass: "bg-foreground text-background hover:bg-foreground/85",
  },
  {
    id: 2,
    badge: { label: "Populaire", icon: <TbStarFilled className="size-3" /> },
    name: "QUALIOPI + AUDITS BLANCS",
    originalPrice: "3 490€",
    discount: "-43%",
    price: "1 990€",
    features: [
      "Tout E-QualiOpi",
      "3 audits blancs (coaching)",
      "Retours détaillés",
      "4 sessions live Q&R",
      "GARANTIE : Suivi 3 mois si refus audit",
    ],
    cta: "Rejoindre Audits Blancs",
    highlighted: true,
    accentColor: "text-accent",
    discountBg: "bg-accent/15 text-accent",
    checkColor: "text-accent",
    ctaClass: "bg-accent text-white hover:bg-accent/90",
  },
  {
    id: 3,
    badge: { label: "Offre garantie", icon: <TbFlame className="size-3" /> },
    name: "JE PASSE TON AUDIT",
    originalPrice: "4 990€",
    discount: "-50%",
    price: "2 490€",
    features: [
      "Tout Audits Blancs",
      "Je passe l'audit à ta place",
      "Suivi post-certification",
      "Garantie 100% réussite",
      "ou argent remboursé",
    ],
    cta: "Rejoindre l'Offre Garantie",
    highlighted: false,
    accentColor: "text-orange-500",
    discountBg: "bg-orange-100 text-orange-600",
    checkColor: "text-orange-500",
    ctaClass: "bg-foreground text-background hover:bg-foreground/85",
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
                ? "border-accent shadow-lg shadow-accent/20 scale-[1.02]"
                : "border-border",
            )}
            style={{ backgroundColor: '#fafafa' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            {plan.badge && (
              <div className={cn(
                "absolute -top-3 right-5 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-sm",
                plan.highlighted ? "bg-accent text-white" : "bg-orange-500 text-white",
              )}>
                {plan.badge.icon}
                {plan.badge.label}
              </div>
            )}

            <div className="space-y-1 pr-4 pt-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Offre {plan.id}
              </p>
              <h3 className={cn("text-base font-bold leading-snug", plan.accentColor)}>
                {plan.name}
              </h3>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                <span className={cn("text-xs font-bold rounded-full px-2.5 py-0.5", plan.discountBg)}>
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
                  <TbCircleCheckFilled className={cn("size-4 shrink-0 mt-0.5", plan.checkColor)} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="default"
              className={cn("w-full rounded-full font-semibold text-sm mt-2", plan.ctaClass)}
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
