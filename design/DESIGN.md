# Courage Formation — Design System

Documents what the live site actually uses. Source of truth: `src/styles/global.css`, `src/components/ui/`, `src/components/layout/`.

## At a glance

- **Surface:** flat white pages, `#fafafa` cards, thin grey borders.
- **Action:** near-black pill buttons. Purple is an accent, not the default button color.
- **Type:** Inter, tight bold headings, grey body text.
- **Shape:** pills for controls and badges, 16px and 24px corners for containers.
- **Theme:** light only. See [Dark mode](#dark-mode).

---

## Logo

| Asset | Path | Usage |
|---|---|---|
| Full logo (icon + wordmark) | `/public/layout/full_logo.svg` | Navbar desktop (`h-9`), footer (`w-36 h-9`) |
| Icon mark only | `/public/layout/logo.svg` | Navbar mobile (`h-8`), small contexts |
| Favicon | `/public/favicon/favicon.svg` | Browser tab |

### Logo colors (from SVG gradients)

| Role | Hex | Notes |
|---|---|---|
| Primary bright | `#B86BFF` | Gradient start, most used |
| Primary dark | `#6F1DBA` | Gradient end |
| Mid purple | `#AF5CFA` | Bottom layer |
| Light purple | `#B15AFF` | Middle diamond |
| Soft lilac | `#C08FEC` | Accent layer |
| Pale lavender | `#DBB3FD` | Lightest stop |
| Wordmark text | `#1E1E1E` | Near-black |

---

## Color Palette

### Semantic tokens

Tokens are defined in OKLCH. Hex values are the sRGB conversion, for contexts that cannot use CSS variables, such as emails.

| Token | OKLCH | Hex | Usage |
|---|---|---|---|
| `--background` | `#ffffff` | `#ffffff` | Page background |
| `--foreground` / `--primary` | `oklch(0.1284 0.0267 261.59)` | `#030711` | Headings, strong text, primary buttons |
| `--primary-foreground` / `--accent-foreground` | `oklch(0.9838 0.0035 247.86)` | `#f8fafc` | Text on dark or accent surfaces |
| `--accent` / `--secondary-foreground` | `oklch(0.5702 0.2588 291.54)` | `#8241ff` | Brand purple: badge text, highlights, the highlighted pricing plan |
| `--secondary` | `oklch(0.93 0.04 282.09)` | `#e3e5ff` | Badge background (lavender) |
| `--muted` | `oklch(0.9679 0.0027 264.54)` | `#f3f4f6` | Subtle backgrounds |
| `--muted-foreground` | `oklch(0.5503 0.0235 264.36)` | `#6b7280` | Body and secondary text |
| `--border` / `--input` | `oklch(0.9278 0.0058 264.53)` | `#e5e7eb` | Dividers, card borders, inputs |
| `--destructive` | `oklch(0.6356 0.2082 25.38)` | `#ef4343` | Errors |
| `--ring` | `oklch(0.575 0.2351 282.09)` | `#6c56fc` | Focus ring, at 50% opacity |

### Fixed colors used in components

| Usage | Value | Where |
|---|---|---|
| Card and navbar background | `#fafafa` | Inline `backgroundColor`, 20 uses |
| Footer background | `#f9f9f9` | `footer.tsx` |
| Dark purples in service pages | `#6d28d9`, `#7c3aed`, `#4c1d95` | Inline. These are not the `--accent` token |

`--footer-background` exists in `global.css` but no component uses it. The footer is light.

### Service page hero gradients

| Service | Gradient |
|---|---|
| Création OF | `linear-gradient(135deg, #eff6ff, #f5f3ff)` — blue → violet |
| Accès EDOF / CPF | `linear-gradient(135deg, #fdf2f8, #faf5ff)` — pink → violet |
| Certification RNCP / RS | `linear-gradient(135deg, #f5f3ff, #ede9fe)` — violet |
| Génération de Leads | `linear-gradient(135deg, #ecfdf5, #d1fae5)` — emerald |
| Marketing & Croissance | `linear-gradient(135deg, #fffbeb, #fef3c7)` — amber |
| Accompagnement | `linear-gradient(135deg, #fff1f2, #ffe4e6)` — rose |

### Service CTA gradient backgrounds (dark)

| Service | Gradient |
|---|---|
| Création OF | `135deg, #1e1b4b → #312e81 → #4c1d95` |
| Accès EDOF / CPF | `135deg, #500724 → #9d174d → #a21caf` |
| Certification RNCP / RS | `135deg, #2e1065 → #4c1d95 → #5b21b6` |
| Génération de Leads | `135deg, #022c22 → #064e3b → #065f46` |
| Marketing & Croissance | `135deg, #451a03 → #92400e → #b45309` |
| Accompagnement | `135deg, #450a0a → #991b1b → #b91c1c` |

---

## Typography

### Font family

```
'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
'Segoe UI', 'Helvetica Neue', Arial, sans-serif
```

Inter loads from Google Fonts in `BaseHead.astro`. The body uses font features `cv11` and `ss01`, optical sizing, antialiasing and `optimizeLegibility`.

The SF Pro files in `/public/fonts/` are not referenced by the site.

### Type scale

| Class | Size | Usage |
|---|---|---|
| `text-xs` | 0.75rem | Badges, labels, metadata |
| `text-sm` | 0.875rem | Most UI text: nav, buttons, card copy, footer |
| `text-base` | 1rem | Page intro paragraphs |
| `text-lg` | 1.125rem | Sub-headings |
| `text-xl` | 1.25rem | Section sub-headings |
| `text-2xl` | 1.5rem | Card titles |
| `text-3xl` | **1.75rem** (custom) | Headings on mobile |
| `text-4xl` | 2.25rem | Headings on tablet |
| `text-5xl` | **2.75rem** (custom) | Headings on desktop |

Headings scale up the same way across the site:

```
text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl
```

### Letter spacing

| Token | Value | Usage |
|---|---|---|
| `tracking-tight` | `-0.045em` | All headings |
| `tracking-normal` | `-0.02em` | Body, applied globally |
| `tracking-widest` | `0.08em` | Rare uppercase label (pricing cards) |

`tracking-tighter` (`-0.07em`) is defined but unused. The site has no monospace type.

### Font weights

- `font-medium` — badges, active nav link, small labels
- `font-semibold` — buttons, card titles, footer column titles
- `font-bold` — page and section headings

---

## Spacing & Layout

| Token | Value |
|---|---|
| `section-padding` | `py-10 md:py-16 lg:py-20` |
| `hero-padding` | `pt-15 pb-20 md:pt-18 lg:pt-22.5` |
| Container | `padding-inline: 1rem`, max `1232px` from 1000px up |
| Navbar width | `max-w-6xl` |
| Content width | `max-w-5xl` (most sections), `max-w-4xl` (contact), `max-w-3xl` (articles) |

---

## Border Radius

`--radius` is `1rem`. The `sm` to `xl` steps derive from it, so they are larger than Tailwind's defaults.

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | Buttons, badges, navbar, icon circles |
| `rounded-3xl` | 24px | Large image and section cards, shadcn `Card` |
| `rounded-2xl` | 16px | Standard cards, search input, tables |
| `rounded-xl` | 20px | Rare |
| `rounded-lg` | 16px | Rare |
| `rounded-md` | 14px | shadcn default for `Button` and `Badge`, usually overridden with `rounded-full` |
| `rounded-sm` | 12px | Rare |

---

## Shadows

Purple-tinted in light mode. Every level shares the same soft base layer:

```css
--shadow-2xs, --shadow-xs:  0px 8px 30px 0px hsl(263 70% 50% / 0.04)
--shadow-sm, --shadow:      0px 8px 30px 0px hsl(263 70% 50% / 0.08), 0px 1px 2px -1px hsl(263 70% 50% / 0.08)
--shadow-md:                0px 8px 30px 0px hsl(263 70% 50% / 0.08), 0px 2px 4px -1px hsl(263 70% 50% / 0.08)
--shadow-lg:                0px 8px 30px 0px hsl(263 70% 50% / 0.08), 0px 4px 6px -1px hsl(263 70% 50% / 0.08)
--shadow-xl:                0px 8px 30px 0px hsl(263 70% 50% / 0.08), 0px 8px 10px -1px hsl(263 70% 50% / 0.08)
--shadow-2xl:               0px 8px 30px 0px hsl(263 70% 50% / 0.20)
```

`shadow-sm` is the one in common use.

---

## Icons

Library: **Lucide React** (`lucide-react`), plus **React Icons** (`react-icons/tb`) in a few places.

| Icon | Library | Usage |
|---|---|---|
| `CalendarCheck` | lucide | Navbar CTA, form submit |
| `Menu` / `X` | lucide | Mobile hamburger |
| `ArrowRight` / `ChevronRight` | lucide | CTA arrows |
| `Download` | lucide | Resource download |
| `Mail` / `Phone` | lucide | Contact info |
| `FileCheck` / `ShieldCheck` / `TrendingUp` | lucide | Feature lists |
| `TbCircleCheckFilled` | react-icons/tb | Trust items, feature lists |

| Size | Class | Context |
|---|---|---|
| 12px | `size-3` | Inline arrows, small accents |
| 14px | `size-3.5` | Mobile CTA icons |
| 16px | `size-4` | Button icons, list icons, contact icons |
| 20px | `size-5` | Card icons, nav icons |
| 24px | `size-6` | Section feature icons |

---

## Component Patterns

### Navbar

A floating pill, not a full-width bar.

```
background: #fafafa
border: 1px solid var(--border)
border-radius: rounded-full
padding: px-5 py-3
width: max-w-6xl, centered, inside px-4 pt-4 md:pt-6
```

Links use `text-sm text-muted-foreground`, and the active link is `text-foreground font-medium`. A primary pill button sits on the right. On mobile the logo is centered between the menu icon and the CTA.

### Page header

The standard top of a page or section, left-aligned:

```
Badge
Heading: text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl
Intro: text-base text-muted-foreground max-w-lg
Spacing: space-y-3
```

### Badge

```
background: var(--secondary)
border: 1px solid var(--secondary)
border-radius: rounded-full
padding: px-3 py-1
font: text-xs font-medium
color: var(--secondary-foreground)
```

`#8241ff` on `#e3e5ff` is 4.1:1, under the 4.5:1 WCAG AA target for text this size.

### Card

```
background: #fafafa
border: 1px solid var(--border)
border-radius: rounded-2xl
padding: p-6
```

Larger sections and image cards use `rounded-3xl`. The shadcn `Card` component uses `bg-card rounded-3xl border py-6`.

### Primary Button

The default action across the site.

```
background: var(--foreground)
color: var(--background)
border-radius: rounded-full
padding: px-5 py-2.5, up to px-7 for main CTAs
font: text-sm font-semibold
hover: bg-foreground/85
```

### Accent Button

Used only for the highlighted pricing plan.

```
background: var(--accent)
color: white
hover: bg-accent/90
```

### Outline Button

The shadcn `outline` variant with `rounded-full` added. It is rare on the site.

```
background: var(--background)
border: 1px solid var(--input)
border-radius: rounded-full
hover: bg-accent, text-accent-foreground
```

### Shadcn Button sizes

| Size | Height | Padding |
|---|---|---|
| `sm` | `h-8` | `px-3` |
| `default` | `h-9` | `px-4 py-2` |
| `lg` | `h-14` | `px-6` |
| `icon` | `size-9` | none |

Focus state: `ring-ring/50 ring-[3px]`. Pressed state: `active:scale-95`.

### Icon circle

Used for contact details and social links.

```
size-8 rounded-full border border-border
icon: size-4, text-muted-foreground
```

### Footer

```
background: #f9f9f9
padding: py-12 md:py-16
```

The left column holds the logo, a `text-sm text-muted-foreground` tagline, a primary pill button and social icon circles. Link columns have `text-sm font-semibold` titles over `text-sm text-muted-foreground` links. The bottom bar has a `border-t`, `text-xs text-muted-foreground` copyright and legal links.

---

## Dark mode

The site is light only. `global.css` defines a full `.dark` token set and `theme-toggle.tsx` exists, but no page mounts the toggle, so visitors never see dark mode.

If it is enabled later, the main dark values are:

| Token | Hex |
|---|---|
| `--background` | `#050406` |
| `--foreground` | `#f8fafc` |
| `--card` | `#09080d` |
| `--secondary` | `#231736` |
| `--secondary-foreground` | `#d1b8f9` |
| `--muted` | `#1d1825` |
| `--muted-foreground` | `#b0abba` |
| `--accent` | `#6c56fc` |
| `--border` | `#241f2e` |

---

## Assets

```
/public/layout/full_logo.svg     — full horizontal logo
/public/layout/logo.svg          — icon mark only
/public/layout/hero-desktop.webp — homepage hero background (desktop)
/public/layout/hero-mobile.webp  — homepage hero background (mobile)
/public/mockups_certif.png       — Qualiopi certificate mockup
/public/avatar/avatar1.png       — testimonial avatar
/public/avatar/avatar2.png       — testimonial avatar
/public/favicon/                 — all favicon sizes
/public/images/blog/             — blog cover images
```
