'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  TbUserFilled,
  TbAwardFilled,
  TbHeartFilled,
  TbCircleCheckFilled,
  TbBrandLinkedin,
  TbBrandFacebook,
  TbBrandYoutube,
  TbBrandInstagram,
} from 'react-icons/tb';
import SectionHeader from '@/components/elements/section-header';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const valeurs = [
  {
    icon: <TbUserFilled className="size-5 text-blue-500" />,
    title: 'Expertise',
    text: 'Nous maîtrisons le cadre réglementaire de la formation professionnelle dans ses moindres détails.',
  },
  {
    icon: <TbCircleCheckFilled className="size-5 text-green-600" />,
    title: 'Transparence',
    text: 'Tarifs clairs, garanties écrites, résultats mesurables. Nous n\'avons rien à cacher.',
  },
  {
    icon: <TbHeartFilled className="size-5 text-red-500" />,
    title: 'Engagement',
    text: 'Votre réussite est notre priorité. Nous sommes à vos côtés jusqu\'à l\'atteinte de vos objectifs.',
  },
];

const points = [
  'Expert en création et développement d\'organismes de formation professionnelle.',
  'Plus de 5 ans d\'expérience en certification Qualiopi, accès CPF et RNCP.',
  'A accompagné plus de 200 organismes de formation à travers la France.',
];

const socials = [
  {
    href: 'https://www.linkedin.com/in/driss-rafiq-b99a3116a/',
    label: 'LinkedIn',
    icon: <TbBrandLinkedin className="size-4" />,
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61582292682722',
    label: 'Facebook',
    icon: <TbBrandFacebook className="size-4" />,
  },
  {
    href: 'https://www.youtube.com/@CourageFormation',
    label: 'YouTube',
    icon: <TbBrandYoutube className="size-4" />,
  },
  {
    href: 'https://www.instagram.com/courageformation/',
    label: 'Instagram',
    icon: <TbBrandInstagram className="size-4" />,
  },
];

export default function AboutContent() {
  return (
    <div className="section-padding container space-y-16">

      {/* Hero header */}
      <motion.div
        className="text-center max-w-3xl mx-auto pt-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          isCenter
          category="À propos"
          icon={null}
          title="Notre mission : rendre la formation accessible à tous les experts"
          description="Courage Formation est un cabinet spécialisé dans l'accompagnement des organismes de formation. Nous croyons que chaque expert mérite de transformer son savoir en activité prospère."
        />
      </motion.div>

      {/* Histoire + Approche */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl p-6 space-y-3" style={{ backgroundColor: '#fafafa' }}>
          <h2 className="font-semibold text-sm text-foreground">Notre histoire</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Courage Formation est né d'un constat simple : des milliers de formateurs talentueux n'arrivent pas à lancer leur activité, non par manque de compétences, mais à cause de la complexité administrative et réglementaire du secteur.
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            Nous avons créé Courage Formation pour changer ça — en offrant un accompagnement clé en main qui transforme l'expertise en activité de formation rentable et conforme.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl p-6 space-y-3" style={{ backgroundColor: '#fafafa' }}>
          <h2 className="font-semibold text-sm text-foreground">Notre approche</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Nous ne sommes pas un simple cabinet de conseil. Nous nous impliquons directement dans votre projet : nous créons votre OF, préparons votre audit Qualiopi, référençons vos formations au CPF et vous aidons à trouver vos premiers clients.
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            Notre modèle repose sur des résultats concrets et des garanties solides — parce que votre succès est notre meilleure publicité.
          </p>
        </motion.div>
      </motion.div>

      {/* Valeurs */}
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            isCenter
            category="Valeurs"
            icon={null}
            title="Ce qui nous guide"
            description=""
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {valeurs.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#fafafa' }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                {v.icon}
                <h3 className="font-semibold text-sm">{v.title}</h3>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Équipe */}
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            isCenter
            category="L'équipe"
            icon={null}
            title="La personne derrière Courage Formation"
            description=""
          />
        </motion.div>

        <motion.div
          className="max-w-sm mx-auto rounded-2xl p-6"
          style={{ backgroundColor: '#fafafa' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Avatar + name */}
          <div className="flex items-center gap-3 mb-5">
            <div className="size-12 rounded-full bg-secondary flex items-center justify-center shrink-0 text-sm font-bold text-accent border border-border">
              IR
            </div>
            <div>
              <p className="font-semibold text-sm">Idriss Rafqi</p>
              <p className="text-xs text-muted-foreground">Fondateur &amp; Directeur</p>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-3 mb-5">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-6">
                <TbAwardFilled className="size-4 shrink-0 mt-0.5 text-accent" />
                {point}
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-2 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
