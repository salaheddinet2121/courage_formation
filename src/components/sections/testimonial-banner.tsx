'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <section className="section-padding container">
      <motion.div
        className="mx-auto max-w-3xl rounded-2xl px-10 py-14 text-center"
        style={{ backgroundColor: '#fafafa' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.3, ease: 'backOut' }}
            >
              <Star className="size-5 fill-amber-500 text-amber-500" />
            </motion.span>
          ))}
        </div>
        <blockquote className="mb-6 text-xl font-medium leading-8 text-foreground md:text-2xl md:leading-9">
          &ldquo;Grâce à Courage Formation, j&apos;ai lancé mon organisme de formation en moins d&apos;un mois et décroché mes premiers clients CPF dès la deuxième semaine.&rdquo;
        </blockquote>
        <p className="font-serif text-sm italic text-muted-foreground">
          Idris, fondateur de Courage Formation
        </p>
      </motion.div>
    </section>
  );
};

export default TestimonialBanner;
