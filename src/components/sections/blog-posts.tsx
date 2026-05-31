'use client';

import type { CollectionEntry } from 'astro:content';
import { ArrowRight } from 'lucide-react';

export default function BlogPosts({
  posts,
  isBlogsPage,
}: {
  posts: CollectionEntry<'blog'>[];
  isBlogsPage?: boolean;
}) {
  return (
    <section className="section-padding container space-y-10">
      <div className={isBlogsPage ? 'text-center space-y-3' : 'space-y-3'}>
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-secondary">
          Blog
        </span>
        <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
          Nos derniers articles
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl">
          Conseils, guides et actualités pour lancer et développer votre organisme de formation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <a
            key={index}
            href={`/blog/${post.id}`}
            className="group rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-sm transition-all"
            style={{ backgroundColor: '#fafafa' }}
          >
            {post.data.coverImage && (
              <div className="h-48 overflow-hidden">
                <img
                  src={post.data.coverImage}
                  alt={post.data.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5 space-y-3">
              <p className="text-xs text-muted-foreground">
                {new Date(post.data.pubDate).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h3 className="font-semibold text-sm leading-5 group-hover:text-accent transition-colors">
                {post.data.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-5 line-clamp-2">
                {post.data.description}
              </p>
              <div className="flex items-center gap-1 text-xs font-medium text-accent pt-1">
                Lire l'article
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
