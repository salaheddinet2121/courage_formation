'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  TbCircleArrowDownFilled,
  TbCreditCardFilled,
  TbClockHour4Filled,
  TbDiamondFilled,
  TbClipboardListFilled,
  TbHeartFilled,
} from 'react-icons/tb';
import SectionHeader from '@/components/elements/section-header';

const cards = [
  {
    icons: [<TbCircleArrowDownFilled className="size-5 text-blue-500" />],
    title: "Création & Lancement",
    text: "Lancez votre organisme de formation avec des bases solides et conformes.",
  },
  {
    icons: [
      <TbCreditCardFilled className="size-5 text-pink-500" />,
      <TbDiamondFilled className="size-5 text-accent" />,
      <TbClockHour4Filled className="size-5 text-blue-600" />,
    ],
    title: "Offre & Certification",
    text: "Construisez une offre claire, attractive et pensée pour vendre.",
  },
  {
    icons: [<TbClockHour4Filled className="size-5 text-teal-500" />],
    title: "Génération de Leads",
    text: "Attirez des prospects qualifiés et remplissez vos sessions durablement.",
  },
  {
    icons: [
      <TbCreditCardFilled className="size-5 text-pink-500" />,
      <TbDiamondFilled className="size-5 text-accent" />,
    ],
    title: "Financement",
    text: "Développez vos opportunités grâce aux dispositifs de financement.",
  },
  {
    icons: [<TbClipboardListFilled className="size-5 text-green-500" />],
    title: "Organisation",
    text: "Processus, organisation et outils pour gagner du temps.",
  },
  {
    icons: [
      <TbHeartFilled className="size-5 text-green-600" />,
      <TbDiamondFilled className="size-5 text-teal-500" />,
    ],
    title: "Accompagnement",
    text: "Un partenaire stratégique à vos côtés à chaque étape.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ValueGrid = () => {
  return (
    <section className="section-padding container space-y-8">

      {/* Header */}
      <motion.div
        className="flex flex-col gap-6 max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          category="Méthode"
          icon={null}
          title="Une structure solide. Une croissance durable."
          description="Courage Formation vous accompagne de la création de votre organisme jusqu'au développement commercial, avec une méthode claire, moderne et orientée résultats."
        />
        <a
          href="/contact"
          className="inline-flex w-fit items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:bg-foreground/85 transition-colors"
        >
          Réserver un diagnostic
        </a>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#fafafa' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              {card.icons.map((icon, j) => (
                <span key={j}>{icon}</span>
              ))}
              <h3 className="font-semibold text-sm">{card.title}</h3>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {card.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default ValueGrid;
