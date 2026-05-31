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
        className="flex flex-col gap-4 max-w-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold leading-[1.15] md:text-4xl"
        >
          Une structure solide.<br />
          Une croissance durable.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm leading-7 text-foreground"
        >
          Courage Formation vous accompagne de la création de votre organisme jusqu&apos;au
          développement commercial, avec une méthode claire, moderne et orientée résultats.
        </motion.p>
        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          href="/contact"
          className="inline-flex w-fit items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background hover:bg-foreground/85 transition-colors"
        >
          Réserver un diagnostic
        </motion.a>
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
