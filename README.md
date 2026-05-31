# Sonic Astro Template

Sonic Astro Template is a premium template built by https://www.shadcnblocks.com

- [Demo](https://sonic-astro-template.vercel.app/)
- [Documentation](https://www.shadcnblocks.com/docs/templates/getting-started)

## Screenshot

![Sonic Astro Template screenshot](./public/og-image.jpg)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Tech Stack

- Astro 6.x
- Tailwind 4
- shadcn/ui

## Key Components

### Blog Posts (`src/components/sections/blog-posts.tsx`)

The blog posts component is a responsive grid layout that displays blog posts in an elegant card format. Each blog post card includes:

- Featured image
- Title and description
- Author information with avatar
- Reading time badge
- Clean separators and hover effects

The component accepts a `posts` array prop where each post should have the following structure:

```typescript
{
  id: string;
  data: {
    title: string;
    description: string;
    image: string;
    authorName: string;
    authorImage: string;
  }
}
```

## Deploy

You can deploy this template to your preferred hosting platform that supports Astro applications.

We have tested this template with the following providers using static export.

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
