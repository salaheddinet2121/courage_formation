'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/elements/section-header';

const stats = [
  { value: '+200', label: 'Organismes de formation créés' },
  { value: '98%', label: 'Taux de réussite Qualiopi' },
  { value: '5 ans', label: "D'expérience terrain" },
  { value: '100%', label: 'Clé en main' },
];

const points = [
  'Nous avons accompagné plus de 200 organismes de formation à se structurer, se certifier et se développer.',
  'Notre équipe connaît chaque exigence DREETS, chaque critère Qualiopi et chaque rouage du financement CPF.',
  'Pas de prestataire généraliste : nous sommes spécialisés exclusivement dans la création et la croissance des organismes de formation.',
];

export default function NousSection() {
  return (
    <section className="section-padding container">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border" style={{ backgroundColor: '#fafafa' }}>
        <div className="grid md:grid-cols-2">

          {/* Left — text */}
          <motion.div
            className="p-8 md:p-12 space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5">
              <SectionHeader
                category="Qui sommes-nous"
                icon={null}
                title="Le cabinet de référence pour les organismes de formation"
                description=""
              />
              <p className="text-muted-foreground text-sm leading-7">
                Courage Formation est un cabinet spécialisé, fondé par des experts du secteur de la formation professionnelle. Notre mission : vous permettre de créer, certifier et développer votre organisme de formation sans perdre de temps ni d'énergie.
              </p>
            </div>

            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-6">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                En savoir plus sur nous
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            className="grid grid-cols-2 divide-x divide-y divide-border border-l border-border"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col justify-center p-8 space-y-2">
                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground leading-5">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
