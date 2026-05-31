'use client';
import React from 'react';

import { motion } from 'motion/react';
import { TbCircleCheckFilled } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

const TRUST_ITEMS = [
  'Sans engagement',
  'Diagnostic gratuit',
  'Plan clair en 15 min',
];

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 55, damping: 20, delay: 0.6 },
    },
  };

  return (
    <section className="w-full text-center">
      <div className="hero-padding container flex flex-col items-center justify-center gap-8 pb-0!">
        <motion.div
          variants={container}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-secondary">
              Cabinet spécialisé pour organismes de formation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl"
          >
            Lancez votre organisme de formation sans perdre des mois
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base"
          >
            Nous accompagnons les formateurs, entrepreneurs et centres de formation à
            lancer leur activité, accéder au CPF&nbsp;/ EDOF et générer leurs premiers clients
          </motion.p>

          {/* CTA */}
          <motion.div variants={item}>
            <Button
              size="default"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-7 text-sm font-semibold"
              asChild
            >
              <a href="/contact">Réserver un diagnostic gratuit</a>
            </Button>
          </motion.div>

          {/* Trust items */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground"
          >
            {TRUST_ITEMS.map((t) => (
              <span key={t} className="flex items-center gap-2">
                <TbCircleCheckFilled className="size-5 text-accent shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>

          {/* Hero image / mockup */}
          <motion.div
            variants={imageAnimation}
            className="relative mt-4 w-full max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {/* Mockup top bar */}
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/60" />
                <span className="size-3 rounded-full bg-yellow-400/70" />
                <span className="size-3 rounded-full bg-green-500/60" />
              </div>
              {/* Mockup content */}
              <div className="p-6 text-left space-y-4">
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">CERTIFICAT :</p>
                <p className="text-sm font-semibold">OPF 8024-0345</p>
                <div className="border-t border-border pt-4 space-y-3">
                  <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">ORGANISME CERTIFIÉ</p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">OF</div>
                    <div>
                      <p className="font-semibold">Nom de l&apos;organisme</p>
                      <p className="text-xs text-muted-foreground">SHEN 125 450 259</p>
                      <p className="text-xs text-muted-foreground">19 rue de la Formation — 75000 Paris</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-bold tracking-wide">QUALIOPI</p>
                  <p className="text-xs text-muted-foreground">PROCESSUS CERTIFIÉ</p>
                </div>
              </div>
            </div>
            {/* Floating card behind */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-3/4 h-full rounded-2xl border border-border bg-card/60 blur-[1px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
