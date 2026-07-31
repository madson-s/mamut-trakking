# CONTEXT.md — Estado atual do projeto Mamut Trekking

> Documento para onboarding de agentes (Codex, Claude Code, etc).
> Gerado em 2026-07-28. Leia antes de tocar em qualquer arquivo.

---

## 1. O que é o projeto

Site institucional da **Mamut Trekking** (operadora de turismo de natureza, Chapada Diamantina, Lençóis — BA). Reformulação visual completa a partir de um design system no Figma.

**Figma source:**
- File key: `86nnUU9pgjXlSRW3yryewr`
- Foundations (tokens): node `161:2`
- Home PT (desktop 1440): node `572:680` / `896:4150`
- Home PT (desktop 1920): node `896:4620`

---

## 2. Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 16.2.11 (App Router, Turbopack) |
| React | 19.2.4 |
| Tailwind CSS | 4 (CSS-first, `@theme inline`, **sem** tailwind.config.js) |
| TypeScript | ^5 |
| Package manager | **pnpm** (fixado em `packageManager: "pnpm@11.5.1"`) |
| Fontes | `next/font/local` — Mergo (display) + Brutal Milk No 2 (body, 9 pesos) |

**Rodar o dev server:**
```bash
corepack pnpm@11.5.1 dev
# ou, se pnpm está no PATH:
pnpm dev
```

---

## 3. Arquitetura de pastas (o que importa)

```
mamut-trakking/
├── public/
│   ├── fonts/
│   │   ├── mergo/Mergo.ttf
│   │   └── brutal-milk-no-2/*.otf          # 9 pesos
│   ├── svg/
│   │   ├── mamut-logo-branco.svg
│   │   ├── humans-assets-yellow.svg
│   │   ├── _icons/icon_01..16_*.svg         # 16 ícones do design system
│   │   ├── figma/caret-down/               # CaretDown (language switcher)
│   │   ├── figma/guides/                   # Line-art hover dos guias
│   │   └── figma/paths/                    # Assets dos trail cards
│   ├── img/
│   │   ├── home_backgroud/                 # 4 crops + 4 no-crop (hero backgrounds)
│   │   ├── vale-do-pati/*.webp             # 22 fotos
│   │   ├── home_square_right_morro_*.webp  # 3 thumbs do hero
│   │   ├── session_02_*.webp               # manifesto backgrounds
│   │   ├── session_04_cabral_*.webp        # foto do guia (color + bw)
│   │   └── figma/paths/                    # Trail card images
│   └── llms.txt
├── src/
│   ├── app/
│   │   ├── globals.css                     # ** DESIGN TOKENS + @theme inline **
│   │   ├── pt/
│   │   │   ├── layout.tsx                  # Root layout PT (data-theme="dark")
│   │   │   ├── page.tsx                    # HOME PT — REFORMULADA (8 seções)
│   │   │   └── aventuras/[slug]/page.tsx   # Páginas individuais de roteiro
│   │   ├── en/
│   │   │   ├── layout.tsx                  # Root layout EN (tema ANTIGO/claro)
│   │   │   └── ...                         # Páginas EN (tema antigo, NÃO refazer agora)
│   │   └── es/
│   │       ├── layout.tsx                  # Root layout ES (tema ANTIGO/claro)
│   │       └── ...                         # Páginas ES (tema antigo, NÃO refazer agora)
│   ├── components/
│   │   ├── home/                           # ** COMPONENTES DA HOME PT (NOVOS) **
│   │   │   ├── Hero.tsx                    # Seção 1 — hero com card proporcional
│   │   │   ├── StatsBar.tsx                # Seção 2 — barra de autoridade
│   │   │   ├── ManifestoSection.tsx         # Seção 3 — "Somos o bando"
│   │   │   ├── PathsSection.tsx            # Seção 4 — "Escolha seu caminho" (4 cards)
│   │   │   ├── EntrelinhasBand.tsx         # Seção 5 — faixa decorativa
│   │   │   ├── GuidesSection.tsx           # Seção 6 — "Nascidos aqui" (4 guias)
│   │   │   ├── ReviewsSection.tsx          # Seção 7 — TripAdvisor reviews
│   │   │   ├── ScrollFeedbackStack.tsx     # Sub-componente de ReviewsSection
│   │   │   ├── FinalCta.tsx                # Seção 8 — CTA final
│   │   │   ├── HomeHeader.tsx              # Header dark com nav + WhatsApp
│   │   │   ├── HomeFooter.tsx              # Footer dark com 3 colunas
│   │   │   ├── LanguageSwitcher.tsx        # Dropdown PT/EN/ES
│   │   │   └── HeroDestinations.tsx        # (pode estar em desuso)
│   │   ├── ui/
│   │   │   ├── icons.tsx                   # ArrowRight, Star, StarRating, Instagram, Facebook, CaretDown
│   │   │   ├── Pill.tsx                    # Botão-pílula (solid/outline)
│   │   │   ├── Placeholder.tsx             # Placeholder visual para assets faltando
│   │   │   ├── theme-provider.tsx          # ThemeProvider (client component)
│   │   │   └── theme.tsx                   # Toggle de tema (light/dark)
│   │   └── layout/
│   │       ├── GridContainer.tsx           # Wrapper max-w-[1216px] (grid padrão)
│   │       ├── Container.tsx               # Container antigo (páginas en/es)
│   │       ├── SiteHeader.tsx              # Header antigo (páginas en/es)
│   │       ├── SiteFooter.tsx              # Footer antigo (páginas en/es)
│   │       └── LocaleSwitcher.tsx          # Locale switcher antigo
│   └── lib/
│       ├── fonts.ts                        # next/font/local (Mergo + Brutal Milk)
│       ├── site.ts                         # SITE constants, LOCALES, formatPrice
│       └── routes.ts                       # ADVENTURE_ROUTES (slugs por locale)
```

---

## 4. Decisões de arquitetura IMPORTANTES (não mudar)

### 4.1. Internacionalização: pastas manuais, NÃO next-intl
O CLAUDE.md original menciona next-intl + `[locale]` dinâmico, mas a implementação real usa **pastas manuais** (`src/app/pt/`, `src/app/en/`, `src/app/es/`). Cada idioma tem seu próprio `layout.tsx` com `<html lang="...">`. **NÃO** migrar para next-intl nem criar `src/app/[locale]/`.

### 4.2. Tema: PT = dark, EN/ES = light (antigo)
- PT usa `data-theme="dark"` no `<html>` (valor setado no `pt/layout.tsx`).
- EN/ES ainda rodam no tema claro antigo com cores `mamut-*`.
- O `globals.css` suporta ambos via variáveis CSS.
- **NÃO** mexer nas páginas EN/ES por enquanto.

### 4.3. Fontes via CSS variables
- `--font-mergo` (display) → `font-display` no Tailwind
- `--font-brutal` (body) → `font-body` no Tailwind
- Carregadas em `src/lib/fonts.ts`, injetadas como `className` no `<html>`.

### 4.4. Grid do design system
- **12 colunas × 72px + 11 gaps × 32px = 1216px** de conteúdo (Central).
- Todas as seções usam `max-w-[1216px] mx-auto`.
- `GridContainer.tsx` é a fonte de verdade: `max-w-[1216px] px-6 sm:px-10 lg:px-0`.

### 4.5. Hero: card proporcional (NÃO largura fixa)
- O card do hero usa margem lateral **proporcional**: `px-[max(24px,1.667vw)]`.
- Isso dá **1392px @ 1440** e **1856px @ 1920** automaticamente.
- O grid de conteúdo (1216px) é fixo e centralizado dentro do card.
- Border-radius: 32px default, 40px no `2xl` breakpoint.
- Altura fixa 707px no `lg+`, min-h 560px no mobile.

---

## 5. Design tokens (globals.css)

O sistema usa **CSS variables** em `:root` (light) e `[data-theme="dark"]` (espelhadas). Escalas:

| Escala | Uso |
|---|---|
| `primary-50..950` | Verde-mata (botões, CTAs, links) |
| `secondary-50..950` | Laranja-terra (acentos) |
| `gray-0..1100` | Neutros (backgrounds, texto, bordas) |
| `success/warning/error/info` | Semânticos |
| `mamut-*` | Legado (só para páginas EN/ES antigas) |

No dark mode, as escalas são **espelhadas em torno do 500** (50↔950, 100↔900, etc). Assim `bg-gray-50` é branco no light e `#1c1c1c` no dark automaticamente.

**Tailwind 4**: Tokens são mapeados via `@theme inline {}`. Não há `tailwind.config.js`. Para usar: `bg-primary-500`, `text-gray-950`, `font-display`, `font-body`, etc.

---

## 6. O que foi feito (COMPLETO)

### Home PT — 8 seções implementadas em ordem:
1. **Hero** (`Hero.tsx`) — Card com background foto, H1 "MAMUT GUIA", CTAs, thumbnails à direita, humanos-amarelos SVG. Card escala proporcionalmente.
2. **StatsBar** (`StatsBar.tsx`) — Barra de autoridade com 5 stats (+500 aventureiros, Guias, Cadastur, TripAdvisor, Reserva).
3. **ManifestoSection** (`ManifestoSection.tsx`) — "Somos o bando que guia a sua tribo" + card com manifesto + humanos-amarelos no fundo.
4. **PathsSection** (`PathsSection.tsx`) — "Escolha seu caminho" com 1 card expandido (Vale do Pati) + 3 cards compactos. **2 cards têm placeholder** (foto Cachoeira do Palmital não existe).
5. **EntrelinhasBand** (`EntrelinhasBand.tsx`) — Faixa decorativa "Um bando que reune o mundo inteiro!".
6. **GuidesSection** (`GuidesSection.tsx`) — "Nascidos aqui. Formados pela Chapada." com 4 cards de guia. **Todos usam a foto do Cabral** (os outros 3 guias precisam de fotos reais). Efeito hover: foto color→bw + line-art SVG.
7. **ReviewsSection** (`ReviewsSection.tsx`) — Reviews TripAdvisor com 3 stat chips + stack de feedback cards. **Avatares dos reviewers são placeholder**.
8. **FinalCta** (`FinalCta.tsx`) — CTA "Sua trilha começa com uma mensagem".

### Layout PT:
- **HomeHeader** — Logo branco, nav (5 links), LanguageSwitcher, botão WhatsApp verde.
- **HomeFooter** — 3 colunas de links, logo, social icons, toggle de tema, WhatsApp badge.

### Infraestrutura:
- Design tokens completos em `globals.css` (light + dark).
- Fontes custom (Mergo + Brutal Milk No 2) via `next/font/local`.
- Todos os SVGs e WebPs do handoff copiados para `public/`.
- Componentes UI reutilizáveis: `Pill`, `icons`, `Placeholder`, `GridContainer`.

---

## 7. O que NÃO foi feito (pendente)

### Assets faltando (precisam ser providenciados manualmente):
- [ ] Fotos da **Cachoeira do Palmital** (2 trail cards em PathsSection)
- [ ] **Fotos dos outros 3 guias** (GuidesSection usa Cabral em todos)
- [ ] **Avatares dos reviewers** (ReviewsSection)

### Páginas ainda não redesenhadas:
- [ ] Páginas internas PT (Quem Somos, Manifesto, Contato, FAQ, Dicas)
- [ ] Páginas de detalhe de aventura PT (atualmente usam layout antigo)
- [ ] Todas as páginas EN e ES (seguem no tema claro antigo)

### Funcionalidades pendentes:
- [ ] Interações/animações (scroll, hover effects avançados, transições)
- [ ] Carrossel funcional nos trail cards (PathsSection)
- [ ] Mobile menu (hamburger)
- [ ] SEO meta tags nas páginas internas
- [ ] Blog (fora de escopo atual)
- [ ] Tradução do conteúdo novo para EN/ES

---

## 8. Regras para continuar

1. **NÃO criar conteúdo fictício.** Se um asset (foto, texto, dado) não existe, use o componente `Placeholder` ou deixe o espaço sinalizado.
2. **NÃO mexer nas páginas EN/ES** — elas seguem no tema antigo até serem redesenhadas.
3. **NÃO mudar a arquitetura de i18n** — pastas manuais, sem next-intl.
4. **NÃO instalar dependências novas** sem consultar o dono do projeto.
5. **Manter o grid 1216px** (`max-w-[1216px]`) em todas as seções de conteúdo.
6. **Usar as CSS variables** do `globals.css`, não cores hardcoded.
7. **pnpm** como gerenciador de pacotes (nunca npm/yarn).
8. **Tailwind 4 CSS-first** — não criar `tailwind.config.js`.
9. Todas as fontes via `font-display` e `font-body` (classes Tailwind).
10. O Hero usa margens proporcionais (`px-[max(24px,1.667vw)]`), **não** max-width fixo para o card.

---

## 9. Referência rápida de componentes

| Componente | Arquivo | Descrição |
|---|---|---|
| `Hero` | `src/components/home/Hero.tsx` | Hero section com card proporcional |
| `StatsBar` | `src/components/home/StatsBar.tsx` | Barra de autoridade (5 stats) |
| `ManifestoSection` | `src/components/home/ManifestoSection.tsx` | "Somos o bando" + card manifesto |
| `PathsSection` | `src/components/home/PathsSection.tsx` | Trail cards (1 expandido + 3 compactos) |
| `EntrelinhasBand` | `src/components/home/EntrelinhasBand.tsx` | Faixa decorativa |
| `GuidesSection` | `src/components/home/GuidesSection.tsx` | Cards dos 4 guias |
| `ReviewsSection` | `src/components/home/ReviewsSection.tsx` | Reviews TripAdvisor |
| `FinalCta` | `src/components/home/FinalCta.tsx` | CTA final |
| `HomeHeader` | `src/components/home/HomeHeader.tsx` | Header dark (PT) |
| `HomeFooter` | `src/components/home/HomeFooter.tsx` | Footer dark (PT) |
| `Pill` | `src/components/ui/Pill.tsx` | Botão-pílula (solid/outline) |
| `GridContainer` | `src/components/layout/GridContainer.tsx` | Wrapper 1216px |
| `icons` | `src/components/ui/icons.tsx` | SVG icons inline |

---

## 10. Como rodar

```bash
cd mamut-trakking/mamut-trakking
corepack pnpm@11.5.1 dev
# → http://localhost:3000/pt (home redesenhada)
# → http://localhost:3000/en (tema antigo)
# → http://localhost:3000/es (tema antigo)
```
