'use client';

import { motion } from 'motion/react';
import { Download } from 'lucide-react';

// Same order and counts as the "Navigation rapide" page of the PDF.
const criteria = [
  { name: 'Information au public', indicators: 3 },
  { name: 'Objectifs et adaptation', indicators: 5 },
  { name: 'Accueil, accompagnement, évaluation', indicators: 8 },
  { name: 'Moyens pédagogiques et encadrement', indicators: 4 },
  { name: 'Compétences des intervenants', indicators: 2 },
  { name: 'Veille, handicap et environnement', indicators: 7 },
  { name: 'Amélioration continue', indicators: 3 },
];

const PAGE_WIDTH = 910;
const PAGE_HEIGHT = 1287;
const pageClass =
  'absolute w-[58%] max-w-[360px] rounded-[3px] bg-white shadow-[0_8px_30px_hsl(263_70%_50%/0.14),0_1px_2px_hsl(263_70%_50%/0.12)] md:w-[62%]';

export default function CheckbookDownload() {
  return (
    <section className="section-padding container">
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        style={{ backgroundColor: '#fafafa' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-6 p-8 md:p-12 lg:p-16 lg:pr-8">
            <div className="space-y-3">
              <span className="inline-block rounded-full border border-secondary bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Ressource gratuite
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Checklist Qualiopi<br />
                25 pages offertes
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                Le guide complet pour préparer votre audit Qualiopi sans surprise.
                7 critères, 32 indicateurs, cases à cocher&nbsp;: tout ce que les
                auditeurs cherchent, organisé pour vous.
              </p>
            </div>

            <ol className="max-w-lg divide-y divide-border border-y border-border text-sm">
              {criteria.map((criterion, i) => (
                <li key={criterion.name} className="flex items-baseline gap-3 py-2">
                  <span className="w-3 shrink-0 tabular-nums text-muted-foreground">{i + 1}</span>
                  <span className="min-w-0 flex-1">{criterion.name}</span>
                  <span className="shrink-0 whitespace-nowrap tabular-nums text-muted-foreground">
                    {criterion.indicators} indicateurs
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="/checkbook_qualiopi_courage.pdf"
                download="checkbook_qualiopi_courage.pdf"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
              >
                <Download className="size-4" />
                Télécharger la checklist
              </a>
              <p className="text-xs text-muted-foreground">
                PDF · 25 pages · Aucune inscription requise
              </p>
            </div>
          </div>

          {/* Real pages from the PDF, laid out like paper on a desk and cropped by the panel. */}
          <div className="relative h-[340px] sm:h-[420px] md:h-auto">
            <img
              src="/images/checklist/checklist-finale.webp"
              alt=""
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              loading="lazy"
              decoding="async"
              className={`${pageClass} left-[38%] top-20 rotate-[7deg] md:top-28`}
            />
            <img
              src="/images/checklist/critere-1.webp"
              alt=""
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              loading="lazy"
              decoding="async"
              className={`${pageClass} left-[22%] top-10 rotate-[2deg] md:top-16`}
            />
            <img
              src="/images/checklist/couverture.webp"
              alt="Couverture de la checklist Qualiopi : préparer votre audit sans vous perdre dans le référentiel"
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              loading="lazy"
              decoding="async"
              className={`${pageClass} left-[6%] top-6 -rotate-3 md:top-12`}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
