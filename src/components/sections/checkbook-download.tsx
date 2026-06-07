'use client';

import { motion } from 'motion/react';
import { Download, FileCheck, CheckCircle2 } from 'lucide-react';

const highlights = [
  '25 pages de contenu structuré',
  '7 critères Qualiopi détaillés',
  '32 indicateurs expliqués',
  'Cases à cocher pour chaque point',
  'Conseils pratiques d\'auditeurs',
  'Modèle prêt à l\'emploi',
];

export default function CheckbookDownload() {
  return (
    <section className="section-padding container">
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        style={{ backgroundColor: '#fafafa' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16">

          {/* Left — text */}
          <div className="flex flex-col justify-center gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <FileCheck className="size-3.5 text-accent" />
              Ressource gratuite
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Checklist Qualiopi<br />
                <span className="text-accent">25 pages offertes</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le guide complet pour préparer votre audit Qualiopi sans surprise.
                7 critères, 32 indicateurs, cases à cocher — tout ce que les auditeurs
                cherchent, organisé pour vous.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/checkbook_qualiopi_courage.pdf"
              download="checkbook_qualiopi_courage.pdf"
              target="_self"
              onClick={(e) => {
                e.preventDefault();
                const a = document.createElement('a');
                a.href = '/checkbook_qualiopi_courage.pdf';
                a.download = 'checkbook_qualiopi_courage.pdf';
                a.click();
              }}
              className="inline-flex w-fit items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/85 active:scale-[0.98]"
            >
              <Download className="size-4" />
              Télécharger la checklist — gratuit
            </a>

            <p className="text-xs text-muted-foreground">
              PDF · 25 pages · Aucune inscription requise
            </p>
          </div>

          {/* Right — PDF mockup */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Shadow stack effect */}
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-border bg-white" />
              <div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-2xl border border-border bg-white" />

              {/* Main card */}
              <div className="relative z-10 w-56 rounded-2xl border border-border bg-white p-6 shadow-lg md:w-64">
                {/* Header stripe */}
                <div className="mb-5 h-2 w-full rounded-full bg-foreground" />

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-foreground">
                    <FileCheck className="size-5 text-background" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">Checklist Qualiopi</p>
                    <p className="text-[10px] text-muted-foreground">Courage Formation</p>
                  </div>
                </div>

                {/* Fake lines */}
                <div className="space-y-2.5">
                  {[100, 80, 90, 70, 85, 60, 75].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="size-3 shrink-0 rounded-sm border-2 border-muted-foreground/30" />
                      <div
                        className="h-1.5 rounded-full bg-muted"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-muted-foreground">25 pages</span>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                    Gratuit
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
