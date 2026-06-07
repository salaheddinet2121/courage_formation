'use client';

import { CircleCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

import SectionHeader from '@/components/elements/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  person: string;
  role: string;
  initials: string;
  logo?: string;
  url?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "On tournait en rond sur notre dossier Qualiopi depuis des mois. Courage Formation a remis tout à plat et on est allés jusqu'au bout. Ce qui nous bloquait était bien plus simple à résoudre qu'on ne le pensait.",
    person: 'Nour Smida',
    role: 'Fondatrice — NS Consulting',
    initials: 'NS',
    logo: '/clients/ns-consulting.svg',
    url: 'https://www.noursmida.fr/',
    featured: true,
  },
  {
    quote:
      "La préparation à l'audit était notre point faible. Ils ont passé en revue chaque indicateur avec nous, identifié les manques, et on s'est présentés à l'audit sans surprise. On a eu notre certification.",
    person: 'Équipe Sodeva',
    role: 'Direction — Sodeva',
    initials: 'SD',
    logo: '/clients/sodeva.webp',
    url: 'https://sodeva.fr/',
  },
  {
    quote:
      "Le référencement EDOF et l'accès CPF, c'est un vrai labyrinthe administratif. Courage Formation connaît le chemin. On est maintenant sur Mon Compte Formation et on reçoit des demandes régulières.",
    person: 'Équipe Nexus',
    role: 'Direction — Nexus Formation',
    initials: 'NF',
    logo: '/clients/nexus-formation.svg',
    url: 'https://nexusformations.fr/',
  },
  {
    quote:
      "On avait le contenu de formation mais pas la structure pour être conformes. NDA, règlement intérieur, conventions — tout ce qu'on ne savait pas qu'on devait avoir. Ils ont tout cadré.",
    person: 'Équipe Saniform',
    role: 'Direction — Saniform',
    initials: 'SF',
    logo: '/clients/saniform.svg',
    url: 'https://saniform.fr/',
  },
  {
    quote:
      "On ne savait pas par où commencer. Statut, NDA, positionnement de l'offre — Courage Formation a structuré tout ça avec nous. Aujourd'hui BBA School est opérationnelle et on a nos premiers apprenants.",
    person: 'Équipe BBA School',
    role: 'Direction — BBA School',
    initials: 'BB',
    logo: '/clients/bba-school.svg',
    url: 'https://www.instagram.com/bba__school/',
  },
  {
    quote:
      "On était sceptiques sur l'accompagnement à distance depuis les Antilles. En réalité ça ne change rien. Les échanges sont réguliers, le suivi sérieux, et on a avancé beaucoup plus vite qu'en autonomie.",
    person: 'Équipe 2M Santilles',
    role: 'Direction — 2M Santilles',
    initials: '2M',
    logo: '/clients/2m-santilles.svg',
    url: 'https://2msantilles.com/',
  },
];

function StarRow({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function LogoAvatar({ initials, logo, name }: { initials: string; logo?: string; name: string }) {
  if (logo) {
    return (
      <div className="size-10 rounded-full border border-border bg-white flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
        <img src={logo} alt={name} className="h-full w-auto object-contain" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="section-padding container space-y-12">
      <SectionHeader
        category="Témoignages"
        title="Ce que disent nos clients"
        description="25 organismes de formation accompagnés. Qualiopi, EDOF, CPF — des résultats concrets, pas du marketing."
        isCenter
      />

      {/* Rating + logo strip */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <StarRow size={18} />
          <span className="font-bold text-foreground">4.9/5</span>
          <span className="text-muted-foreground text-sm">· 25 audits Qualiopi réussis</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 w-full pb-6 border-b border-border">
          {testimonials.map((t) =>
            t.logo ? (
              <a
                key={t.initials}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                title={t.person}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <img
                  src={t.logo}
                  alt={t.person}
                  className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </a>
            ) : (
              <span key={t.initials} className="text-sm font-bold text-muted-foreground opacity-50">
                {t.initials}
              </span>
            )
          )}
        </div>
      </div>

      {/* Featured testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="p-0 border-2 border-primary/20">
          <CardContent className="flex flex-col gap-6 p-8 md:p-10">
            <StarRow />
            <blockquote className="flex-1 text-xl leading-8 text-foreground">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <LogoAvatar initials={featured.initials} logo={featured.logo} name={featured.person} />
              <div className="flex flex-col">
                <span className="font-bold text-sm">{featured.person}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CircleCheck className="size-4 fill-foreground text-background" />
                  {featured.role}
                </span>
              </div>
              {featured.url && (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Voir le site ↗
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((t, index) => (
          <motion.div
            key={t.initials}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className={cn('h-full p-0')}>
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <StarRow size={13} />
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2.5">
                    <LogoAvatar initials={t.initials} logo={t.logo} name={t.person} />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">{t.person}</span>
                      <span className="text-[11px] text-muted-foreground">{t.role}</span>
                    </div>
                  </div>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
