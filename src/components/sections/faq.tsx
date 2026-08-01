'use client';

import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeader from '@/components/elements/section-header';

const faqData = [
  {
    question: "Combien de temps faut-il pour créer un organisme de formation ?",
    answer: "Avec notre accompagnement, la création d'un organisme de formation prend en général entre 2 et 4 semaines. Nous gérons toutes les démarches administratives pour vous : rédaction des statuts, déclaration d'activité, mise en conformité et obtention du numéro de déclaration d'activité (NDA).",
  },
  {
    question: "Qu'est-ce que Qualiopi et est-ce obligatoire ?",
    answer: "Qualiopi est la certification nationale qualité des prestataires de formation. Elle est obligatoire pour accéder aux financements publics et mutualisés (CPF, OPCO, Pôle Emploi, etc.). Sans Qualiopi, vous ne pouvez pas proposer des formations éligibles CPF ni travailler avec les OPCO. Nous vous accompagnons de A à Z pour l'obtenir.",
  },
  {
    question: "Comment accéder au CPF et à l'EDOF ?",
    answer: "L'accès au CPF (Compte Personnel de Formation) passe par la plateforme Mon Compte Formation gérée par la Caisse des Dépôts. Il faut d'abord obtenir Qualiopi, puis faire enregistrer vos formations sur le répertoire national. L'EDOF est le système de gestion des dossiers de financement. Nous vous guidons sur toutes ces étapes.",
  },
  {
    question: "Quelle est la différence entre une certification RNCP et une RS ?",
    answer: "Le RNCP (Répertoire National des Certifications Professionnelles) regroupe les certifications reconnues par l'État qui valident des compétences métiers complètes. Le RS (Répertoire Spécifique) contient des certifications de compétences complémentaires ou transversales. Les deux ouvrent droit au financement CPF. Nous vous aidons à choisir la voie la plus adaptée à votre offre.",
  },
  {
    question: "Proposez-vous un accompagnement après la création ?",
    answer: "Oui, nous offrons un suivi complet post-création : aide au développement commercial, génération de leads, stratégie marketing, accompagnement aux audits de surveillance Qualiopi et mise en place de systèmes pour remplir vos sessions. Notre objectif est votre succès à long terme.",
  },
  {
    question: "Le coût de l'audit du certificateur est-il inclus dans vos tarifs ?",
    answer: "Non, et c'est important de le savoir avant de vous engager. Nos tarifs couvrent l'accompagnement Courage Formation. L'audit de certification est obligatoirement réalisé par un organisme certificateur accrédité et indépendant, que vous choisissez et payez directement : comptez en général entre 1 200 € et 1 800 € HT selon le certificateur et la taille de votre organisme. Nous ne percevons aucune commission sur ce montant. Nous vous aidons à choisir le certificateur le plus adapté et à budgéter l'ensemble dès le diagnostic.",
  },
  {
    question: "Quelles garanties offrez-vous sur vos offres ?",
    answer: "L'offre Qualiopi + Audits Blancs inclut un suivi de 3 mois supplémentaires sans frais en cas de refus à l'audit. L'offre Audit Serein est garantie 100% réussite : si l'audit officiel est refusé, nous remboursons intégralement la prestation. L'offre E-Qualiopi, formation en autonomie, n'est pas assortie de garantie de résultat — vous en gardez l'accès et les mises à jour.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding container">
      <div className="mx-auto max-w-3xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            isCenter
            category="FAQ"
            icon={null}
            title="Questions fréquentes"
            description="Tout ce que vous devez savoir avant de vous lancer."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
        >
          <Accordion defaultValue="item-0" type="single" collapsible className="space-y-3">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border border-border px-5"
                >
                  <AccordionTrigger className="cursor-pointer text-sm font-medium hover:no-underline py-4 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
