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
    <section className="w-full text-center overflow-hidden pb-0">
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

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
