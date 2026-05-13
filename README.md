# martincoll.dev

Landing de la agencia. Single-page editorial (paper-warm), Next.js 15 con static export, deploy en GitHub Pages.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produces ./out (static export, what GH Pages uploads)
```

## Stack

- Next.js 15 (App Router, static export)
- React 19, TypeScript
- Tailwind v4 (CSS-first tokens en `app/globals.css`)
- Geist Sans + Geist Mono via `geist` package
- Instrument Serif (italic editorial accents) via `next/font/google`
- WhatsApp deep-link como CTA primario (no backend)

## Where to edit what

| Quiero cambiar… | Editar… |
|---|---|
| Número de WhatsApp, email, GitHub/X/LinkedIn | `lib/site-config.ts` |
| Copy del hero | `app/components/hero.tsx` (constante `copy` arriba) |
| Tiers de precio | `app/components/services.tsx` (array `tiers`) |
| Portfolio (4 cards) | `app/components/work.tsx` (array `items`) |
| Pasos del proceso | `app/components/process.tsx` (array `steps`) |
| FAQ | `app/components/faq.tsx` (array `items`) |
| Manifesto / quote | `app/components/manifesto.tsx` |
| Sobre mí | `app/components/about.tsx` |
| Colores / tipografía / tokens | `app/globals.css` (`@theme inline`) |
| Mockups SVG de proyectos | `app/components/mockups.tsx` |

## Pre-deploy checklist

- [ ] `lib/site-config.ts` → reemplazar `whatsapp: "000000000000"` con tu número real (formato internacional, sin `+` ni espacios)
- [ ] `lib/site-config.ts` → confirmar handles de socials
- [ ] `app/components/about.tsx` → reemplazar el `AvatarMark` SVG por `<Image>` cuando tengas foto real
- [ ] `app/components/work.tsx` → screenshots reales en lugar de los mockups SVG (opcional; los SVG quedan lindos)

## Deploy

Push a `main` → GitHub Actions corre `npm run build` y publica `./out` a GitHub Pages. Workflow en `.github/workflows/`.

## Structure

```
app/
  components/      # secciones de la landing
  globals.css      # tokens + utilities (paper-warm light theme)
  layout.tsx       # html, fonts, metadata
  page.tsx         # composición de secciones
  not-found.tsx    # 404
  sitemap.ts       # SEO
  robots.ts        # SEO
lib/
  site-config.ts   # owner-specific values (whatsapp, email, socials)
public/
  files/           # CV PDF + otros estáticos
```
