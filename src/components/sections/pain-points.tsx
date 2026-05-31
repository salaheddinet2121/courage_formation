'use client';

import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Coins, HelpCircle } from 'lucide-react';

const painPoints = [
  {
    label: "Lancement flou",
    labelColor: "text-blue-500",
    intro: "Vous avez l'expertise,",
    body: " mais les démarches, la structure et les priorités ralentissent votre lancement.",
    icon: <RefreshCw className="size-8 text-blue-500" />,
    iconBg: "bg-blue-100",
  },
  {
    label: "Croissance limitée",
    labelColor: "text-pink-500",
    intro: "Sans stratégie claire,",
    body: " acquisition maîtrisée et offre rentable, il devient difficile de développer durablement votre activité.",
    icon: <Coins className="size-8 text-pink-500" />,
    iconBg: "bg-pink-100",
  },
  {
    label: "Système complexe",
    labelColor: "text-accent",
    intro: "",
    body: "EDOF, conformité, marketing, administratif… gérer seul plusieurs enjeux freine votre progression.",
    icon: <HelpCircle className="size-8 text-accent" />,
    iconBg: "bg-accent/10",
  },
];

const PainPoints = () => {
  return (
    <section className="section-padding container space-y-12">
      <motion.h2
        className="text-3xl font-bold md:text-4xl lg:text-5xl max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Pourquoi tant d&apos;organismes de formation stagnent&nbsp;?
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-2">
              <p className={`text-sm font-semibold ${point.labelColor}`}>
                {point.label}
              </p>
              <p className="text-sm leading-6 text-foreground">
                {point.intro && <span className="font-semibold">{point.intro}</span>}
                {point.body}
              </p>
            </div>
            <div className={`flex items-center justify-center rounded-2xl ${point.iconBg} h-32`}>
              {point.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PainPoints;
