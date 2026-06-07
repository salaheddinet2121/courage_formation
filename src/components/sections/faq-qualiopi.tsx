'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq {
  q: string;
  a: string;
}

interface Category {
  id: string;
  title: string;
  faqs: Faq[];
}

interface Props {
  categories: Category[];
}

function AccordionItem({ faq, isOpen, onToggle }: { faq: Faq; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen ? 'border-primary/30 bg-primary/[0.02]' : 'border-border'}`}>
      <button
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-muted/20 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-sm leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="mt-0.5 shrink-0"
        >
          <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-2 text-sm text-muted-foreground leading-7 border-t border-border/60 prose prose-sm max-w-none
                prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
                prose-strong:text-foreground prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqQualiopi({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const normalise = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const q = normalise(search.trim());

  const filteredCategories = categories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      faqs: q
        ? cat.faqs.filter((f) => normalise(f.q).includes(q) || normalise(f.a.replace(/<[^>]+>/g, ' ')).includes(q))
        : cat.faqs,
    }))
    .filter((cat) => cat.faqs.length > 0);

  const totalResults = filteredCategories.reduce((acc, c) => acc + c.faqs.length, 0);

  useEffect(() => {
    setOpenId(null);
  }, [search, activeCategory]);

  return (
    <div className="section-padding container max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-secondary">
          FAQ
        </span>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight">
          Tout savoir sur la certification Qualiopi
        </h1>
        <p className="text-muted-foreground text-base leading-7">
          {categories.reduce((acc, c) => acc + c.faqs.length, 0)} questions — réponses complètes des experts Qualiopi.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-10">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          placeholder="Rechercher une question…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-border bg-background pl-11 pr-10 py-3.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted-foreground"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all border ${activeCategory === 'all' ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'}`}
        >
          Toutes les questions
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all border ${activeCategory === cat.id ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'}`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Results count when searching */}
      <AnimatePresence>
        {search && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            {totalResults === 0 ? 'Aucun résultat' : `${totalResults} résultat${totalResults > 1 ? 's' : ''} pour « ${search} »`}
          </motion.p>
        )}
      </AnimatePresence>

      {/* FAQ sections */}
      <AnimatePresence mode="wait">
        {filteredCategories.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 space-y-4"
          >
            <div className="text-5xl">🔍</div>
            <p className="text-muted-foreground text-sm">Aucune question ne correspond à votre recherche.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="text-sm text-primary underline underline-offset-2">
              Réinitialiser les filtres
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-14"
          >
            {filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border">
                  <h2 className="text-lg font-bold">{cat.title}</h2>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground font-medium">
                    {cat.faqs.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => {
                    const id = `${cat.id}-${i}`;
                    return (
                      <AccordionItem
                        key={id}
                        faq={faq}
                        isOpen={openId === id}
                        onToggle={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="mt-20 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)' }}>
        <div className="px-10 py-12 text-center space-y-5">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Vous avez encore des questions ?</h2>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            Nos experts Qualiopi répondent à toutes vos questions en 15 minutes lors d'un diagnostic gratuit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-white text-foreground px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Réserver un diagnostic gratuit
          </a>
        </div>
      </div>

    </div>
  );
}
