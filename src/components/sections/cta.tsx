'use client';

import { motion } from 'motion/react';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { ChevronRight } from 'lucide-react';

interface CTAProps {
  pathname: string;
}

const TRUST = ['Sans engagement', 'Diagnostic gratuit', 'Réponse sous 24h'];

const CTA = ({ pathname }: CTAProps) => {
  const shouldShowCTA = ![
    '/privacy-policy',
    '/terms-of-service',
    '/contact',
  ].includes(pathname);

  if (!shouldShowCTA) return null;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 text-center">
      <img
        src="/layout/hero-desktop.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden md:block w-full h-full object-cover object-top pointer-events-none select-none"
      />
      <img
        src="/layout/hero-mobile.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 block md:hidden w-full h-full object-cover object-top pointer-events-none select-none"
      />

      <motion.div
        className="relative z-10 container flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold leading-tight md:text-5xl max-w-2xl"
        >
          Prêt à lancer votre<br />organisme de formation ?
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-base max-w-lg"
        >
          Réservez un diagnostic gratuit et obtenez un plan d&apos;action clair
          en 15 minutes. Sans engagement.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-foreground/85 transition-colors"
          >
            Réserver un diagnostic gratuit <ChevronRight className="size-4" />
          </a>
          <a
            href="/formations"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            En savoir plus <ChevronRight className="size-4" />
          </a>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground"
        >
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-1.5">
              <TbCircleCheckFilled className="size-4 text-foreground/40" />
              {t}
              {i < TRUST.length - 1 && <span className="ml-3 text-border">·</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
