# Courage Formation — Design System

## Logo

| Asset | Path | Usage |
|---|---|---|
| Full logo (icon + wordmark) | `/public/layout/full_logo.svg` | Navbar desktop, footer |
| Icon mark only | `/public/layout/logo.svg` | Navbar mobile, favicon, small contexts |
| Favicon | `/public/favicon/favicon.svg` | Browser tab |

### Logo colors (from SVG gradients)

| Role | Hex | Notes |
|---|---|---|
| Primary bright | `#B86BFF` | Gradient start — most used |
| Primary dark | `#6F1DBA` | Gradient end |
| Mid purple | `#AF5CFA` | Bottom layer |
| Light purple | `#B15AFF` | Middle diamond |
| Soft lilac | `#C08FEC` | Accent layer |
| Pale lavender | `#DBB3FD` | Lightest stop |
| Wordmark text | `#1E1E1E` | Near-black |

---

## Color Palette

### Brand / Semantic tokens (CSS variables)

| Token | Light value | Dark value | Notes |
|---|---|---|---|
| `--background` | `#ffffff` | `oklch(0.109 0.009 301)` | Page background |
| `--foreground` | `oklch(0.128 0.027 261)` ≈ `#0f172a` | `oklch(0.984 0.004 248)` | Body text |
| `--accent` | `oklch(0.570 0.259 291)` ≈ `#7c3aed` | same | **Brand purple — primary CTA, icons, links** |
| `--accent-foreground` | `oklch(0.984 0.004 248)` | same | Text on accent bg |
| `--secondary` | `oklch(0.93 0.04 282)` | `oklch(0.236 0.058 299)` | Badge bg (light lavender) |
| `--secondary-foreground` | same as accent | `oklch(0.827 0.093 302)` | Badge text |
| `--muted` | `oklch(0.968 0.003 264)` | `oklch(0.222 0.024 299)` | Subtle bg (`#f8f8f8`) |
| `--muted-foreground` | `oklch(0.550 0.024 264)` | `oklch(0.750 0.022 301)` | Secondary text |
| `--border` | `oklch(0.928 0.006 264)` | `oklch(0.251 0.029 299)` | Dividers, card borders |
| `--destructive` | `oklch(0.636 0.208 25)` | same | Red / errors |

### Inline colors used in components

| Usage | Value |
|---|---|
| Card / section background | `#fafafa` |
| Footer background | `hsl(214, 12%, 12%)` |
| Shadow color | `hsl(263, 70%, 50%)` — purple tinted |

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
Inter — loaded via Google Fonts
Fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont
```

Font features: `cv11`, `ss01` — optical sizing auto, antialiased.

### Type scale

| Class | Size | Usage |
|---|---|---|
| `text-xs` | 0.75rem | Labels, badges, metadata |
| `text-sm` | 0.875rem | Body copy, card descriptions |
| `text-base` | 1rem | Standard body text |
| `text-lg` | 1.125rem | Sub-headings |
| `text-xl` | 1.25rem | Section sub-headings |
| `text-2xl` | 1.5rem | Card titles, section headers |
| `text-3xl` | **1.75rem** (custom) | Section headings |
| `text-4xl` | 2.25rem | Page headings |
| `text-5xl` | **2.75rem** (custom) | Hero headings |

### Letter spacing

| Token | Value | Usage |
|---|---|---|
| `tracking-tighter` | `-0.07em` | Hero headlines |
| `tracking-tight` | `-0.045em` | Section headings |
| `tracking-normal` | `-0.02em` | Body (default) |
| `tracking-widest` | `0.08em` | Monospace labels, UPPERCASE tags |

### Font weights in use

- `font-medium` — nav links, badge labels
- `font-semibold` — card titles, CTA buttons
- `font-bold` — section headings
- `font-bold` — hero H1

---

## Spacing & Layout

| Token | Value |
|---|---|
| `section-padding` | `py-10 md:py-16 lg:py-20` |
| `hero-padding` | `pt-15 pb-20 md:pt-18 lg:pt-22.5` |
| Max content width | `max-w-5xl` (most pages), `max-w-3xl` (blog/article) |
| Container padding | `px-4`, max `1232px` |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | Buttons, badges, navbar pill |
| `rounded-3xl` | 24px | Service hero cards, large cards |
| `rounded-2xl` | 16px | Feature cards, form cards, blog cards |
| `rounded-xl` | 12px | Small cards, tags |
| `rounded-lg` | 8px | Inputs, small elements |

---

## Shadows

Purple-tinted shadow system:

```css
--shadow-sm:  0px 8px 30px 0px hsl(263 70% 50% / 0.08)
--shadow:     0px 8px 30px 0px hsl(263 70% 50% / 0.08)
--shadow-md:  0px 8px 30px 0px hsl(263 70% 50% / 0.08)
--shadow-2xl: 0px 8px 30px 0px hsl(263 70% 50% / 0.20)
```

Dark mode shadows are pure black with higher opacity.

---

## Icons

Library: **Lucide React** (`lucide-react`) + **React Icons** (`react-icons/tb`)

### Common icons used

| Icon | Library | Usage |
|---|---|---|
| `CalendarCheck` | lucide | Navbar CTA, form submit |
| `Menu` / `X` | lucide | Mobile hamburger |
| `ArrowRight` / `ChevronRight` | lucide | CTA arrows |
| `Download` | lucide | Resource download |
| `Mail` / `Phone` | lucide | Contact info |
| `FileCheck` / `ShieldCheck` / `TrendingUp` | lucide | Feature lists |
| `TbCircleCheckFilled` | react-icons/tb | Trust items, feature lists |

### Icon sizes in use

| Size | Class | Context |
|---|---|---|
| 12px | `size-3` | Inline arrows, small accents |
| 14px | `size-3.5` | Mobile CTA icons |
| 16px | `size-4` | Button icons, list icons |
| 20px | `size-5` | Card icons, nav icons |
| 24px | `size-6` | Section feature icons |

---

## Component Patterns

### Card (standard)
```
background: #fafafa
border: 1px solid var(--border)
border-radius: rounded-2xl
padding: p-6
```

### Badge / Pill
```
background: var(--secondary)
border: 1px solid var(--secondary)
border-radius: rounded-full
padding: px-3 py-1
font: text-xs font-medium
color: var(--secondary-foreground)
```

### Primary Button
```
background: var(--foreground)
color: var(--background)
border-radius: rounded-full
padding: px-7 py-3
font: text-sm font-semibold
hover: bg-foreground/85
```

### Accent Button (highlighted)
```
background: var(--accent)
color: white
border-radius: rounded-full
padding: px-7 py-3
font: text-sm font-semibold
hover: bg-accent/90
```

### Ghost Button
```
background: transparent
border: 1px solid var(--border)
border-radius: rounded-full
padding: px-6 py-2.5
font: text-sm font-semibold
hover: bg-muted
```

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
/public/images/blog/             — blog cover images (blog-1 to blog-6.webp)
```
