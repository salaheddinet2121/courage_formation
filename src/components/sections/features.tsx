'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  TbUserFilled,
  TbCreditCardFilled,
  TbAwardFilled,
  TbGraphFilled,
  TbBoltFilled,
  TbHeartFilled,
} from 'react-icons/tb';

const services = [
  {
    icon: <TbUserFilled className="size-5 text-blue-500" />,
    title: "Création OF",
    description: "Lancez votre organisme de formation avec une structure claire, rapide et conforme.",
    href: "/services/creation-organisme-formation",
  },
  {
    icon: <TbCreditCardFilled className="size-5 text-pink-600" />,
    title: "Accès EDOF / CPF",
    description: "Débloquez l'accès au CPF et ouvrez de nouvelles opportunités de financement.",
    href: "/services/acces-edof-cpf",
  },
  {
    icon: <TbAwardFilled className="size-5 text-accent" />,
    title: "Création RNCP / RS",
    description: "Développez des formations certifiantes à forte valeur et différenciez votre offre.",
    href: "/services/certification-rncp-rs",
  },
  {
    icon: <TbGraphFilled className="size-5 text-green-600" />,
    title: "Génération de Leads",
    description: "Attirez des prospects qualifiés et remplissez vos sessions de formation.",
    href: "/services/generation-leads",
  },
  {
    icon: <TbBoltFilled className="size-5 text-amber-500" />,
    title: "Marketing & Croissance",
    description: "Site web, image de marque, acquisition : tout pour accélérer votre développement.",
    href: "/services/marketing-croissance",
  },
  {
    icon: <TbHeartFilled className="size-5 text-red-500" />,
    title: "Accompagnement",
    description: "Un partenaire expert à vos côtés à chaque étape de votre croissance.",
    href: "/services/accompagnement",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="section-padding container space-y-12 text-center">
      <motion.h2
        className="mx-auto max-w-xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Un accompagnement complet pour lancer et développer votre centre de formation
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.href}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 block group"
            style={{ backgroundColor: '#fafafa' }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              {service.icon}
              <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">{service.title}</h3>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
