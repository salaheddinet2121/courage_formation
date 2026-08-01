'use client';

import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export default function CertifierCostNote() {
  return (
    <motion.div
      className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/20 p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex gap-3.5">
        <Info className="size-5 shrink-0 text-accent mt-0.5" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Ce que nos tarifs couvrent — et ce qu&apos;ils ne couvrent pas
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            Nos prix correspondent à l&apos;accompagnement Courage Formation. L&apos;audit de
            certification est réalisé par un <strong className="text-foreground">organisme
            certificateur accrédité indépendant</strong>, que vous choisissez et payez
            directement : comptez en général{' '}
            <strong className="text-foreground">1 200 € à 1 800 € HT</strong> selon le
            certificateur et la taille de votre organisme. Nous ne percevons aucune
            commission sur ce montant.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
