import type { CollectionEntry } from 'astro:content';
import { ArrowLeft } from 'lucide-react';

const BlogPost = ({
  post,
  children,
}: {
  post: CollectionEntry<'blog'>[];
  children: React.ReactNode;
}) => {
  const { title, description, pubDate, coverImage } = post[0].data;

  return (
    <article className="section-padding container max-w-3xl mx-auto space-y-8">

      {/* Back */}
      <a
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-3.5" />
        Retour au blog
      </a>

      {/* Header */}
      <div className="space-y-3">
        <time className="text-xs text-muted-foreground">
          {new Date(pubDate).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h1 className="text-3xl font-bold md:text-4xl tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-base text-muted-foreground leading-7">{description}</p>
      </div>

      {/* Cover image */}
      {coverImage && (
        <div className="h-64 md:h-96 overflow-hidden rounded-2xl">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-sm max-w-none leading-7 dark:prose-invert
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-xl prose-h3:text-lg
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
      ">
        {children}
      </div>

    </article>
  );
};

export { BlogPost };
