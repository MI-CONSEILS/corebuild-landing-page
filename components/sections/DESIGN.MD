# CoreBuild Design System
> Premium materials from China, controlled by one partner.

---

## 1. Brand Identity

### Personality
CoreBuild sits at the intersection of **industrial precision** and **architectural luxury**. The brand communicates authority, reliability, and global reach — a single trusted partner for sourcing premium materials from Guangzhou's manufacturing network to finished sites worldwide.

**Tone:** Direct. Calm. Expert. Never promotional.  
**Voice:** B2B sourcing professional — no hyperbole, facts do the selling.

---

## 2. Color System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-red` | `#8B1A1A` | Primary brand accent, logo, CTA buttons, italic emphasis |
| `--color-black` | `#0D0D0D` | Hero overlay text, nav background (solid on scroll), footer |
| `--color-dark` | `#1A1A1A` | Body text, card descriptions |
| `--color-mid` | `#3D3D3D` | Secondary body text, eyebrow labels |
| `--color-muted` | `#888888` | Captions, sub-labels, footer meta |
| `--color-rule` | `#D4D4D4` | Dividers, borders, card strokes |
| `--color-surface` | `#F5F4F0` | Section backgrounds, footer warm off-white |
| `--color-white` | `#FFFFFF` | Default page background, text on dark |
| `--color-overlay` | `rgba(0,0,0,0.45)` | Hero image overlay |

### Usage Rules
- **Brand red** is reserved exclusively for: logo wordmark, primary CTA buttons, italic/bold emphasis in body copy, and footer "together." headline. Never use as a background.
- **Black** (#0D0D0D) is used for the hero section text and top nav text; it shifts to near-black on surface sections.
- **Surface** (#F5F4F0) is the warm off-white used for section alternation — never pure white for section backgrounds, always this token.
- Do not introduce additional colors. The restraint is intentional.

---

## 3. Typography

### Font Families

| Role | Family | Weight(s) | Notes |
|---|---|---|---|
| **Display / Headings** | `Playfair Display` or equivalent serif | 400, 700 | Section titles, hero headline, step numbers |
| **Body / UI** | `Inter` or `DM Sans` | 300, 400, 500 | Nav items, body copy, captions, buttons |
| **Accent / Italic Emphasis** | `Playfair Display Italic` | 400 Italic | "together." in footer CTA — the one emotional moment |

> **Import:** Use Google Fonts. Playfair Display + Inter. Subset to Latin only for performance.

### Type Scale

| Token | Size | Line-height | Weight | Family | Usage |
|---|---|---|---|---|---|
| `--text-hero` | `48–60px` | 1.1 | 400 | Serif | Hero headline |
| `--text-display` | `36–42px` | 1.15 | 700 | Serif | Section H2 titles ("Why CoreBuild", "Catalogue") |
| `--text-step-num` | `80–96px` | 1.0 | 400 | Serif | Process step numbers (01, 02…) |
| `--text-h3` | `20–24px` | 1.3 | 700 | Sans | Card titles, step headings |
| `--text-eyebrow` | `11–12px` | 1.5 | 400 | Sans | All-caps category labels above cards |
| `--text-body` | `15–16px` | 1.65 | 400 | Sans | Body paragraphs, descriptions |
| `--text-caption` | `12–13px` | 1.5 | 400 | Sans | Card sub-labels, image captions |
| `--text-nav` | `13–14px` | 1 | 400 | Sans | Navigation items |
| `--text-cta` | `14px` | 1 | 500 | Sans | Button labels |

### Typography Rules
- **Section titles** are centered, serif, no italic. Below every H2 there is a short subtitle/eyebrow in muted sans at 12px.
- **Hero headline** is left-aligned, large serif, max 3 lines, overlaid on image with no text-shadow — rely on the overlay instead.
- **Step numbers** ("01") are oversized display numerals — decorative, not interactive. They bleed visually into the adjacent content column.
- **Italic serif** ("together.") appears exactly once in the footer CTA — in brand red. This is the emotional signature of the brand.
- **All-caps eyebrow labels** (e.g. "STONE", "TEXTILES") are 11px, tracked at `0.1em`, color `--color-muted`. Used consistently above catalogue card titles.
- Body text in the "Why CoreBuild" section uses a **mixed-weight inline emphasis pattern**: key phrases are bolded or colored (`--color-brand-red`) inline within the paragraph to create a scanning rhythm without bullets.

---

## 4. Spacing & Layout

### Spacing Scale
```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   80px
--space-10:  120px
```

### Layout Grid

| Breakpoint | Columns | Gutter | Max content width |
|---|---|---|---|
| Mobile (`< 768px`) | 1–2 | 16px | 100% |
| Tablet (`768–1024px`) | 2–3 | 24px | 100% |
| Desktop (`> 1024px`) | 12 | 24px | 1200px |

**Content max-width:** `1200px`, centered with auto margins.  
**Section horizontal padding:** `--space-7` (48px) desktop, `--space-5` (24px) mobile.  
**Section vertical padding:** `--space-10` (120px) top/bottom desktop, `--space-8` (64px) mobile.

### Section Alternation
Sections alternate between white and `--color-surface`. Pattern:

1. Hero — full-bleed image
2. Why CoreBuild — `--color-white`
3. Catalogue — `--color-white`
4. From Brief to Site — `--color-white`
5. Selected Projects — `--color-white`
6. Footer CTA — `--color-surface`
7. Footer bar — `--color-black`

---

## 5. Components

### 5.1 Navigation

```
[Logo wordmark]    HOME   CATALOG   PROCESS   CONTACT    [Start a project ▶]
```

- **Position:** Fixed top, full-width, transparent on hero — transitions to white/solid background on scroll.
- **Logo:** "CoreBuild" wordmark, serif, "Core" in black, "Build" in `--color-brand-red` (or the full wordmark in brand red). ~20px.
- **Nav links:** 13px sans, `--color-dark`, `letter-spacing: 0.02em`. No underlines. Hover: color shifts to `--color-brand-red`.
- **CTA button (primary):** See Button spec below.
- **Mobile:** Hamburger collapses nav. Links stack vertically. CTA button full-width at bottom of drawer.

---

### 5.2 Buttons

#### Primary CTA
```
Background: --color-brand-red (#8B1A1A)
Text:       --color-white, 14px, weight 500, sans
Padding:    12px 24px
Border-radius: 4px   ← slightly rounded, not pill
Border:     none
Hover:      background darkens to #6B1414, slight box-shadow
Active:     scale(0.98)
```

#### Secondary / Ghost (not used on this page — reserved for future use)
```
Background: transparent
Border:     1.5px solid --color-brand-red
Text:       --color-brand-red
Hover:      background: rgba(139,26,26,0.06)
```

#### Text Link (inline)
```
Color:      --color-brand-red
Underline:  none default, underline on hover
Font:       same as surrounding body text
```

---

### 5.3 Hero Section

```
Height:        100vh (or min 600px)
Background:    Full-bleed image, object-fit: cover, object-position: center
Overlay:       ::before pseudo, background: rgba(0,0,0,0.40–0.50)
Content:       Left-aligned, bottom-third of hero area
Headline:      --text-hero, serif, --color-white
Sub-copy:      Optional, --text-body, --color-white, opacity 0.85
CTA:           Dark pill button ("Tell us what you're building") — black bg, white text, 14px
```

**"Tell us what you're building" button:**
```
Background: --color-black
Text:       --color-white
Padding:    12px 20px
Border-radius: 24px  ← pill shape, distinct from primary CTA
Arrow icon: → inline at right
```

---

### 5.4 Section Header (Centered Title Block)

Used for: Catalogue, Why CoreBuild, From Brief to Site, Selected Projects.

```html
<div class="section-header">
  <h2>Catalogue</h2>
  <p class="section-eyebrow">Sourced and quality-controlled in China.</p>
</div>
```

```css
.section-header {
  text-align: center;
  margin-bottom: var(--space-8);
}
.section-header h2 {
  font-family: serif;
  font-size: var(--text-display);
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: var(--space-2);
}
.section-eyebrow {
  font-size: 12px;
  color: var(--color-muted);
  font-weight: 400;
  letter-spacing: 0.01em;
}
```

---

### 5.5 Catalogue Card

A 3-column (desktop) / 2-column (tablet) / 1-column (mobile) grid of material category cards.

```
Card structure:
┌─────────────────────────────┐
│  [Square image, ~220px tall]│
│  object-fit: cover          │
├─────────────────────────────┤
│  EYEBROW LABEL (11px, muted)│
│  Card Title (16px, bold)    │
│  Short description (13px)   │
└─────────────────────────────┘
```

```css
.catalogue-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.catalogue-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2px;   /* near-zero radius — materials feel raw */
  display: block;
}
.catalogue-card .eyebrow {
  font-size: 11px;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-muted);
  font-weight: 400;
}
.catalogue-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
}
.catalogue-card p {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.5;
  margin: 0;
}
```

**Card image treatment:** Images should be dark, moody, and high-contrast — materials photographed against near-black or deep-tone backgrounds. No white-background product shots. The catalog reads like an architectural portfolio.

---

### 5.6 Process Step (From Brief to Site)

```
Layout: 2-column (text left, image right) on desktop, stacked mobile

Left column:
  [Step number] — oversized serif, ~80px, --color-dark, opacity 0.9
  [Step title]  — 22–26px, serif bold
  [Description] — 15px body sans
  [Thumbnails]  — small 3-image horizontal strip below body copy

Right column:
  [Large image] — border-radius: 8px, object-fit: cover
```

```css
.process-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: start;
}
.step-number {
  font-family: serif;
  font-size: 88px;
  font-weight: 400;
  color: var(--color-dark);
  line-height: 1;
  margin-bottom: var(--space-4);
}
.step-thumbnails {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-5);
}
.step-thumbnails img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 3px;
}
.process-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
}
```

---

### 5.7 Project Showcase Card (Selected Supply Projects)

```
Layout: Full-width or 2/3-width image card with caption below

Image:   16:9 or wider, full-bleed, rounded corners (8px)
Caption: Small text below image — project name, m² count, materials
```

```css
.project-card img {
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}
.project-caption {
  margin-top: var(--space-3);
  font-size: 12px;
  color: var(--color-muted);
  border-left: 2px solid var(--color-rule);
  padding-left: var(--space-3);
}
```

---

### 5.8 Footer CTA Section

```
Background: --color-surface (#F5F4F0)
Layout:     Two-column: left = CTA copy, right = contact details + WeChat QR

Left:
  "Let's build it,"        — 28–32px serif, --color-dark
  "together."              — same size, Playfair Display Italic, --color-brand-red
  Body paragraph (small)
  [Start a project] button — primary CTA button

Right:
  Address block (Revo Design District, Guangzhou, China)
  Phone / Email / WeChat
  [Small QR code image]
```

```css
.footer-cta {
  background: var(--color-surface);
  padding: var(--space-10) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: start;
}
.footer-cta-headline {
  font-family: serif;
  font-size: 32px;
  font-weight: 400;
  color: var(--color-dark);
  line-height: 1.2;
}
.footer-cta-headline em {
  font-style: italic;
  color: var(--color-brand-red);
}
.footer-contact-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: var(--space-1);
}
.footer-contact-value {
  font-size: 14px;
  color: var(--color-dark);
}
```

---

### 5.9 Footer Bar

```
Background: --color-black
Text:       --color-muted (#888)
Layout:     Logo left | Legal links center | Copyright right
Font:       12px sans
```

```css
.footer-bar {
  background: var(--color-black);
  padding: var(--space-5) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-bar-logo {
  font-size: 16px;
  color: var(--color-white);
  font-weight: 700;
}
.footer-bar-links a {
  font-size: 12px;
  color: var(--color-muted);
  margin: 0 var(--space-4);
  text-decoration: none;
}
.footer-bar-copy {
  font-size: 12px;
  color: var(--color-muted);
}
```

---

### 5.10 "Why CoreBuild" Body Copy (Inline Emphasis Pattern)

This section uses a distinctive inline mixed-emphasis pattern. The paragraph contains:
- **Bold sans** for key action words
- **`--color-brand-red`** for high-signal phrases
- **Normal weight** for connective tissue

```html
<p class="why-body">
  Corebuild is your <strong>single partner</strong> from 
  <span class="accent">factory floor to finished site.</span> 
  We consolidate sourcing, <strong>quality</strong> control and 
  logistics across Guangzhou's manufacturing network so you deal with 
  one contract, one invoice and one team that owns the outcome from 
  first sketch to final delivery.
</p>
```

```css
.why-body {
  font-size: 20–22px;
  line-height: 1.6;
  color: var(--color-mid);
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}
.why-body strong {
  color: var(--color-dark);
  font-weight: 700;
}
.why-body .accent {
  color: var(--color-brand-red);
  font-weight: 400;
}
```

---

## 6. Image Art Direction

### General Rules
- All photography: dark, editorial, high-contrast. Materials shown in context (installed, staged, architectural).
- No stock-style product shots on white backgrounds.
- Catalog images: 1:1 square crop, dark background, moody lighting.
- Process images: architectural interiors, construction sites, aerial views — convey scale.
- Project showcase: full-bleed luxury interior photography.
- Hero: urban/architectural environment, human figure for scale, muted tones with a single warm element.

### Overlay Behavior
Hero images always carry a `rgba(0,0,0,0.40–0.50)` overlay so white text remains legible without text-shadow.

### Border Radius by Context
| Context | Radius |
|---|---|
| Catalogue cards | `2px` (raw, material feel) |
| Process images | `8px` |
| Project showcase | `8px` |
| Thumbnail strips | `3px` |
| Buttons (primary) | `4px` |
| Pill button (hero CTA) | `24px` |

---

## 7. Effects & Interaction States

### Hover States
| Element | Hover Effect |
|---|---|
| Nav links | Color → `--color-brand-red`, transition 150ms ease |
| Primary button | Background darkens (#6B1414), subtle `box-shadow: 0 4px 12px rgba(139,26,26,0.25)` |
| Catalogue cards | Slight `transform: translateY(-2px)`, image brightness 1.05, transition 200ms ease |
| Footer links | Color → `--color-white`, transition 150ms |

### Focus States
All interactive elements must have a visible focus ring:
```css
:focus-visible {
  outline: 2px solid var(--color-brand-red);
  outline-offset: 3px;
}
```

### Transitions
```css
--transition-fast:   150ms ease;
--transition-base:   200ms ease;
--transition-slow:   350ms ease;
```

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
}
```

### Motion / Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Dividers & Structural Elements

### Section Dividers
No heavy ruled lines between sections. Whitespace is the primary separator. Use `--color-rule` only for:
- The left-border accent on project captions
- Horizontal rules inside the footer contact block
- Table/list separators in data contexts

### Eyebrow Labels
Used exclusively above section H2 titles. Format: sentence case, 12px, `--color-muted`, not tracked/uppercase at section level (uppercase tracking only on card-level eyebrows).

---

## 9. CSS Custom Properties — Master Reference

```css
:root {
  /* Colors */
  --color-brand-red:   #8B1A1A;
  --color-black:       #0D0D0D;
  --color-dark:        #1A1A1A;
  --color-mid:         #3D3D3D;
  --color-muted:       #888888;
  --color-rule:        #D4D4D4;
  --color-surface:     #F5F4F0;
  --color-white:       #FFFFFF;
  --color-overlay:     rgba(0, 0, 0, 0.45);

  /* Typography */
  --font-serif:        'Playfair Display', Georgia, serif;
  --font-sans:         'Inter', 'DM Sans', system-ui, sans-serif;

  /* Type sizes */
  --text-hero:         clamp(36px, 5vw, 60px);
  --text-display:      clamp(28px, 3.5vw, 42px);
  --text-step-num:     clamp(64px, 8vw, 96px);
  --text-h3:           clamp(18px, 2vw, 24px);
  --text-body:         16px;
  --text-caption:      13px;
  --text-eyebrow:      11px;
  --text-nav:          14px;
  --text-cta:          14px;

  /* Spacing */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   24px;
  --space-6:   32px;
  --space-7:   48px;
  --space-8:   64px;
  --space-9:   80px;
  --space-10:  120px;

  /* Layout */
  --content-max-width: 1200px;
  --section-pad-x:     var(--space-7);
  --section-pad-y:     var(--space-10);

  /* Borders */
  --radius-sm:    2px;
  --radius-md:    4px;
  --radius-lg:    8px;
  --radius-pill:  24px;
  --border-color: var(--color-rule);

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-base:   200ms ease;
  --transition-slow:   350ms ease;

  /* Shadows */
  --shadow-btn:    0 4px 12px rgba(139, 26, 26, 0.25);
  --shadow-card:   0 2px 16px rgba(0, 0, 0, 0.08);
}

/* Mobile overrides */
@media (max-width: 768px) {
  :root {
    --section-pad-x: var(--space-5);
    --section-pad-y: var(--space-8);
  }
}
```

---

## 10. Page Section Map

| # | Section | Layout | Background | Notes |
|---|---|---|---|---|
| 1 | Navigation | Sticky top bar | Transparent → white | 64px height |
| 2 | Hero | Full-bleed image + overlay | Image | Headline bottom-left |
| 3 | Why CoreBuild | Single centered column | `--color-white` | Mixed-emphasis paragraph |
| 4 | Catalogue | 3-col card grid | `--color-white` | Section header + 6 cards |
| 5 | From Brief to Site | 2-col text/image steps | `--color-white` | Step numbers oversized |
| 6 | Selected Projects | 1 large image + caption | `--color-white` | Sub-headline + project detail |
| 7 | Footer CTA | 2-col grid | `--color-surface` | Italic red "together." |
| 8 | Footer Bar | Flex row | `--color-black` | Logo + legal + copyright |

---

## 11. Accessibility

- **Color contrast:** `--color-brand-red` on white = ~5.8:1 ✓ (WCAG AA)
- **Focus visible:** Red outline ring on all interactive elements
- **Alt text:** All catalogue and project images require descriptive alt
- **Reduced motion:** Respect `prefers-reduced-motion`
- **Nav:** `aria-label="Main navigation"` on `<nav>`
- **CTA buttons:** Descriptive labels ("Start a project", not "Click here")
- **Images:** Hero image is decorative background; if `<img>` tag used, `alt=""` for screen readers
- **Form fields** (if added): Always paired with `<label>`

---

## 12. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use brand red sparingly as an accent | Fill backgrounds with red |
| Keep photography dark and editorial | Use bright product-on-white images |
| Let whitespace breathe between sections | Pack sections tight with divider lines |
| Use the italic serif "together." moment only in footer | Repeat italic serif elsewhere |
| Use 2px border-radius on material cards | Round card corners like app UI (12px+) |
| Bold specific phrases inline in body copy | Use bulleted lists in "Why" sections |
| Keep step numbers as visual decoration | Make step numbers interactive/clickable elements |
| Match nav "Start a project" button to primary CTA | Use ghost button in nav |
| Maintain the single brand red CTA color | Add secondary accent colors |
| Center all section H2 titles | Left-align section headings |

---

*CoreBuild Design System — v1.0 — June 2026*