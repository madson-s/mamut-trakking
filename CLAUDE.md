@AGENTS.md

> **Notas de implementação (estado atual do repo — têm precedência sobre o guia abaixo):**
> - Projeto criado com **Next.js 16 + React 19 + Tailwind 4 + next-intl 4** na
>   **raiz deste repositório** (não em subpasta).
> - Como usamos a pasta `src/`, o proxy de i18n do Next 16 fica em
>   **`src/proxy.ts`** (mesmo nível de `src/app`), e **não** na raiz como sugere a
>   Parte 6 — na raiz ele não é carregado. O import interno é `./i18n/routing`.
> - `src/data/aventuras.ts` já traz os 12 roteiros do inventário (Parte 3) com
>   slugs traduzidos, mas o `corpo`/imagens são **placeholders** a substituir pelo
>   conteúdo real de `mamut.agency`.
> - Textos de UI ficam em `messages/{pt,en,es}.json` (namespaces `Home` e `Adventures`).
> - `pnpm build` gera 47 páginas estáticas e passa todo o checklist da Parte 7.
> - **Gerenciador de pacotes: pnpm** (fixado em `packageManager` no `package.json`).
>   Não usar `npm`/`yarn` neste repo — há só um lockfile, o `pnpm-lock.yaml`.
>
> **Design system (usar em toda página nova):**
> - Tema em 3 camadas: primitivos do Figma → **tokens semânticos** em
>   `src/app/globals.css` (`--surface`, `--content`, `--brand`, `--on-media`…) →
>   presets tipados em `src/design/tokens.ts`. Nos componentes use só o nome
>   semântico (`bg-surface`, `text-content-muted`, `bg-brand`, `border-line`,
>   `rounded-panel`, `shadow-card`, `ease-brand`) — **nunca** `gray-500` /
>   `primary-500` direto, senão o espelho claro/escuro quebra.
> - Primitivos em `src/components/ui` (barrel `@/components/ui`): `Section`,
>   `SectionHeading`, `Container`, `Heading`, `Text`/`Emphasis`, `Button`,
>   `IconButton`, `Badge`, `Card`, `MediaCard`, `Stat`, `Divider`, `Prose`,
>   `Placeholder`, `JsonLd`, os de roteiro (`AdventureCard`, `AdventureGrid`,
>   `AdventureDetail`) e, para formulários, `Field`, `Input`, `Textarea`,
>   `Checkbox`, `SegmentedControl`.
>   Título: `as` define a tag, `size` define a escala (uma `h1` por página).
> - **Toda página em `src/app` compõe a partir do barrel** — nenhuma escreve
>   `<h1 className="font-display …">` na mão. Os 36 detalhes de roteiro passam
>   conteúdo para `AdventureDetail`; os 3 hubs e as homes en/es montam
>   `Section` + `SectionHeading` + `AdventureGrid`/`AdventureCard`.
> - Não existe mais camada legada: `Pill`, `layout/Container`,
>   `layout/GridContainer`, `ui/Hero`, `ui/MetaList` e `content/SectionBlock`
>   foram removidos, e a paleta `--mamut-*` só sobrevive como token documentado
>   em `Theme/Colors` (nenhum componente a usa).
> - Saídas que não leem CSS (hoje o PDF do voucher, via `@react-pdf/renderer`)
>   usam `src/design/print.ts` — espelho literal dos tokens no modo claro.
>   Mudou um primitivo no `globals.css`? Atualize o espelho.
> - `className` é para **layout** (posição, tamanho, espaçamento). Não use para
>   sobrescrever cor/posição de uma variante: duas utilidades da mesma
>   propriedade têm precedência definida pela ordem do CSS, não da string
>   (ex.: `relative` vence `absolute`). Faltando variante, adicione uma prop.
> - **Storybook 10** (`pnpm storybook`, build `pnpm build-storybook`): stories
>   ficam ao lado do componente (`*.stories.tsx`). A camada do Storybook —
>   títulos, nomes de story e descrições dos docs — é **em inglês**; o copy de
>   demonstração usa o texto real do site (português). O seletor da toolbar
>   troca `data-theme` (a home nasce em dark).
> - A seção **`Theme/*`** é a referência do design system e vive em
>   `src/design/`: `Foundations` (as três camadas de token + a armadilha do
>   passo cru), `Colors`, `Typography`, `Space & grid`, `Shape & elevation`,
>   `Motion`, `Brand` (logos, o set de 16 ícones, caret, line art, fotografia) e
>   `Voice & copy` (regras de texto). `src/design/specimens.tsx` guarda a
>   mobília dessas páginas (swatch, tabela de spec, do/don't, `ThemePair`) e é
>   **só do Storybook** — nenhuma página importa de lá.
> - Os aliases semânticos são declarados em `:root` **e** em `[data-theme]`, por
>   isso um bloco com `data-theme` próprio recalcula tudo contra os primitivos
>   dele (é o que faz o painel claro dentro da página escura, e o `ThemePair`
>   das stories, funcionarem). `var()` dentro de custom property resolve no
>   elemento onde é declarada — sem o segundo seletor, a subárvore não viraria.
> - **Imagem sempre por `next/image`.** Next 16 depreciou `priority` em favor de
>   `preload` (é o que `MediaCard image.preload` usa, reservado ao LCP) e já
>   trata `.svg` como `unoptimized` — ainda assim passe a prop, como a doc
>   recomenda. `<Image>` não cobre `<source media>`: onde há art direction
>   (fundo do hero e card do manifesto) o `<picture>` fica e as duas molduras
>   vêm de `getImageProps`, então nenhuma imagem escapa do otimizador.
> - Faltando variante, **adicione uma prop** — foi assim que entraram
>   `SectionHeading spacing="loose"` (respiro 32→48 das seções centradas) e
>   `MediaCard elevation` (sombra do card ativo do carrossel). `Card` de
>   propósito não recebe `ref`/`style`: quem anima envolve o card num wrapper de
>   layout (ver `ScrollFeedbackStack`).
>
> **Ferramenta interna `/voucher`** (fora do site público, `noindex` no layout e
> `Disallow` no `robots.ts`): gerador de voucher em PDF. `src/lib/voucher.ts`
> guarda o modelo de dados (clientes com nome/idade/e-mail, serviços,
> pagamentos, checklist) e `src/lib/voucher-content.ts` o conteúdo por idioma —
> rótulos, texto legal e listas-modelo em **pt/en/es**. `VoucherDocument` monta o
> PDF (`@react-pdf/renderer`); `VoucherStudio` é o formulário com preview ao
> vivo, reordenação por arraste e auto-save no localStorage. É **client-only**
> (`VoucherStudioLoader` usa `dynamic(..., { ssr: false })`), o que permite ler o
> rascunho no primeiro render sem effect nem hydration mismatch.
> - Fidelidade aos modelos da operadora: o documento traz **os dois** blocos
>   legais — idioma do cliente primeiro, complementar depois (`LEGAL_ORDER`) — e
>   o cabeçalho/rodapé é sempre do idioma do documento, mesmo nas páginas do
>   idioma complementar.
> - `switchVoucherLocale` troca o idioma sem perder trabalho: traduz só as linhas
>   que ainda são iguais ao modelo anterior e preserva o que foi digitado.
> - ⚠️ O texto legal em **ES** é tradução feita no repo, sem voucher-modelo de
>   referência — precisa de revisão da operadora antes de emitir.
> - Os PDFs de referência preenchidos ficam fora do git (`.gitignore`): contêm
>   nome, e-mail e telefone de clientes reais.

# Mamut Trekking — Guia de Início com Claude Code (VS Code)

Este documento tem duas funções:

1. **Guia de setup** — como preparar o VS Code + Claude Code e arrancar o projeto.
2. **Contexto do projeto** — todas as decisões e especificações. Deixe este
   arquivo na **raiz do repositório com o nome `CLAUDE.md`** para que o Claude
   Code o leia automaticamente em toda sessão.

---

## Parte 1 — Preparar o ambiente

**Pré-requisitos**

- **Node.js 20.9+** (recomendado 22 LTS) — exigência do Next.js 16.
- **VS Code 1.98.0+**.
- Uma conta Anthropic com plano pago (Claude Code está incluso no Pro/Max/Team)
  ou uma API key.

**Instalar o Claude Code no VS Code**

1. Abra a aba de extensões: `Ctrl+Shift+X` (Windows/Linux) ou `Cmd+Shift+X` (Mac).
2. Busque **"Claude Code"** e instale a extensão publicada pela **Anthropic**
   (a oficial — o CLI já vem embutido nela).
3. Se o ícone (Spark ✱) não aparecer, rode `Developer: Reload Window` na paleta
   de comandos (`Ctrl+Shift+P`).
4. Abra a pasta do projeto com `File > Open Folder` — o Claude Code trabalha
   sobre a **pasta raiz**, não sobre arquivos soltos.

**Dica de fluxo:** comece as tarefas maiores em **Plan mode** (o Claude descreve
o plano e espera sua aprovação antes de editar). Em **Normal mode** ele mostra um
diff a cada alteração para você aceitar ou rejeitar.

---

## Parte 2 — Briefing do projeto

**O que é:** site institucional da **Mamut Trekking**, operadora de turismo de
natureza (trekkings) na Chapada Diamantina, baseada em Lençóis, Bahia.
Reformulação do site atual em WordPress (`https://mamut.agency`) para uma stack
moderna, com foco em **SEO, performance, multilíngue e rastreamento por IA**.

**Stack (versões mais recentes):**

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS 4 (CSS-first, sem `tailwind.config.js`)
- `next-intl` para internacionalização
- TypeScript

**Decisões já travadas (não reabrir sem avisar):**

- **3 idiomas:** Português (padrão), Inglês, Espanhol → `/pt`, `/en`, `/es`.
- **Slugs traduzidos** por idioma (ex.: `/pt/aventuras/cachoeira-do-palmital`
  ↔ `/en/adventures/palmital-waterfall`).
- **Conteúdo estático no código** (arquivo TypeScript), **sem Markdown e sem
  CMS por enquanto**. A migração para Markdown fica para a fase do blog.
- **SSG**: todas as páginas geradas estaticamente no build.
- Blog **fora de escopo** agora (hoje vive em `blog.mamut.agency`).

**Princípios de qualidade:**

- Conteúdo sempre no HTML inicial (Server Components / SSG), porque crawlers de
  IA nem sempre executam JavaScript.
- HTML semântico, uma `<h1>` por página, `next/image` para imagens,
  `next/font` para fontes, mínimo de JS de cliente (`'use client'` só onde há
  interatividade real).

---

## Parte 3 — Inventário de páginas (a migrar, reformuladas)

**Institucional:** Home · Quem Somos · Manifesto · Contato · FAQ ·
Política de Privacidade

**Aventuras (núcleo do site):**
- Hub de Aventuras
- Categorias: Trekkings · Day Tours (passeios de 1 dia) · Pacotes · Vale do Pati
- Roteiros individuais: Cachoeira do Palmital, Trilha Águas Claras,
  Mosquito + Pai Inácio, Cachoeira do Mixila, Vale do Pati (3/4/5 dias),
  Pacotes (3/4/6 dias), City Tour em Lençóis, Réveillon.

**Dicas:** Como Chegar · Transfer Salvador × Lençóis · Classificação de Nível ·
Geologia da Chapada Diamantina · Informações Gerais

---

## Parte 4 — Arquitetura de pastas

```
mamut-trekking/
  proxy.ts                       # middleware de i18n (no Next 16 chama-se proxy.ts)
  next.config.ts
  messages/
    pt.json  en.json  es.json    # textos de UI por idioma
  public/
    llms.txt                     # resumo do site para IAs
  src/
    i18n/
      routing.ts                 # idiomas + slugs traduzidos
      navigation.ts              # Link/redirect tipados
      request.ts                 # carrega as mensagens por idioma
    data/
      aventuras.ts               # CONTEÚDO estático dos roteiros (fonte de verdade)
    lib/
      content.ts                 # helpers que leem os dados
    app/
      globals.css                # Tailwind 4 + tokens de tema
      sitemap.ts                 # sitemap multilíngue
      robots.ts                  # robots liberando crawlers de IA
      [locale]/
        layout.tsx               # metadados globais + provider
        page.tsx                 # Home
        aventuras/
          page.tsx               # hub
          [slug]/page.tsx        # detalhe do roteiro (SEO + JSON-LD)
```

---

## Parte 5 — Passo a passo de criação

Peça ao Claude Code para executar nesta ordem:

**1. Criar o projeto base**

```bash
pnpm create next-app@latest mamut-trekking
```
Respostas: TypeScript **sim** · App Router **sim** · Tailwind **sim** ·
Turbopack **sim** · pasta `src/` **sim** · alias de import `@/*`.

**2. Instalar a dependência de i18n**

```bash
cd mamut-trekking
pnpm add next-intl
```

**3. Remover o boilerplate** que o create-next-app gera em `src/app/layout.tsx`
e `src/app/page.tsx` (tudo passa a viver sob `src/app/[locale]/`).

**4. Criar os arquivos** conforme as especificações da Parte 6.

**5. Rodar e validar**

```bash
pnpm dev         # abre em /pt, testar /en e /es
pnpm build       # confirmar que todas as páginas geram estáticas
```

---

## Parte 6 — Especificações técnicas (arquivos)

> As implementações abaixo são a referência. O Claude Code pode criá-las tal
> como estão.

### `src/i18n/routing.ts`

```ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'pt',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/quem-somos':  { pt: '/quem-somos',  en: '/about-us',  es: '/quienes-somos' },
    '/manifesto':   { pt: '/manifesto',   en: '/manifesto', es: '/manifiesto' },
    '/contato':     { pt: '/contato',     en: '/contact',   es: '/contacto' },
    '/perguntas-frequentes': { pt: '/perguntas-frequentes', en: '/faq', es: '/preguntas-frecuentes' },
    '/aventuras':        { pt: '/aventuras',        en: '/adventures',        es: '/aventuras' },
    '/aventuras/[slug]': { pt: '/aventuras/[slug]', en: '/adventures/[slug]', es: '/aventuras/[slug]' },
    '/dicas':       { pt: '/dicas',       en: '/tips',      es: '/consejos' },
  },
});

export const adventureSegment: Record<Locale, string> = {
  pt: 'aventuras', en: 'adventures', es: 'aventuras',
};
```

### `src/i18n/navigation.ts`

```ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

### `src/i18n/request.ts`

```ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  return { locale, messages: (await import(`../../messages/${locale}.json`)).default };
});
```

### `proxy.ts` (raiz)

```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
export default createMiddleware(routing);
export const config = { matcher: '/((?!api|_next|_vercel|.*\\..*).*)' };
```

### `next.config.ts`

```ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'mamut.agency' }] },
};
export default withNextIntl(nextConfig);
```

### `src/data/aventuras.ts` (conteúdo estático)

Array TypeScript. Cada roteiro tem campos neutros no topo (preço, imagem,
distância, origem) e um bloco `i18n` com `slug`, `titulo`, `nivel`, `resumo` e
`corpo` (parágrafos) por idioma. O `id` do topo é o mesmo nos 3 idiomas — é ele
que liga as versões para gerar o hreflang.

```ts
import type { Locale } from '@/i18n/routing';

export type AdventureText = {
  slug: string; titulo: string; nivel: string; resumo: string; corpo: string[];
};
export type Adventure = {
  id: string; distancia: string; origem: string; precoBase: number; imagem: string;
  i18n: Record<Locale, AdventureText>;
};

export const aventuras: Adventure[] = [
  {
    id: 'palmital',
    distancia: '22km', origem: 'Lençóis', precoBase: 1350,
    imagem: 'https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg',
    i18n: {
      pt: { slug: 'cachoeira-do-palmital', titulo: 'Cachoeira do Palmital 2 Dias', nivel: 'Moderado',
            resumo: 'Dois dias de trilha até a Cachoeira do Palmital.', corpo: ['Parágrafo 1.', 'Parágrafo 2.'] },
      en: { slug: 'palmital-waterfall', titulo: 'Palmital Waterfall — 2 Days', nivel: 'Moderate',
            resumo: 'A two-day trek to Palmital Waterfall.', corpo: ['Paragraph 1.', 'Paragraph 2.'] },
      es: { slug: 'cascada-del-palmital', titulo: 'Cascada del Palmital — 2 Días', nivel: 'Moderado',
            resumo: 'Trekking de dos días hasta la Cascada del Palmital.', corpo: ['Párrafo 1.', 'Párrafo 2.'] },
    },
  },
  // ...adicionar os demais roteiros do inventário aqui.
];
```

### `src/lib/content.ts` (helpers)

```ts
import { locales, type Locale } from '@/i18n/routing';
import { aventuras } from '@/data/aventuras';

export type Adventure = {
  id: string; slug: string; locale: Locale; titulo: string; nivel: string;
  distancia: string; origem: string; precoBase: number; imagem: string;
  resumo: string; corpo: string[];
};

function flatten(a: (typeof aventuras)[number], locale: Locale): Adventure {
  const t = a.i18n[locale];
  return { id: a.id, slug: t.slug, locale, titulo: t.titulo, nivel: t.nivel,
    distancia: a.distancia, origem: a.origem, precoBase: a.precoBase,
    imagem: a.imagem, resumo: t.resumo, corpo: t.corpo };
}

export function getAllAdventures(locale: Locale) { return aventuras.map((a) => flatten(a, locale)); }
export function getAdventure(locale: Locale, slug: string) {
  const f = aventuras.find((a) => a.i18n[locale].slug === slug);
  return f ? flatten(f, locale) : null;
}
export function getSlugMapById(id: string) {
  const a = aventuras.find((x) => x.id === id);
  if (!a) return {} as Partial<Record<Locale, string>>;
  const map: Partial<Record<Locale, string>> = {};
  for (const l of locales) map[l] = a.i18n[l].slug;
  return map;
}
```

### `src/app/[locale]/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mamut.agency'),
  title: { default: 'Mamut Trekking · Chapada Diamantina', template: '%s · Mamut Trekking' },
  description: 'Operadora especializada em trekkings na Chapada Diamantina.',
  openGraph: { siteName: 'Mamut Trekking', type: 'website' },
  robots: { index: true, follow: true },
};

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode; params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### `src/app/[locale]/aventuras/[slug]/page.tsx` (SEO + hreflang + JSON-LD)

Pontos obrigatórios: `generateStaticParams` gera todas as aventuras em todos os
idiomas; `generateMetadata` monta `canonical` + `alternates.languages` (hreflang)
usando `getSlugMapById`; a página injeta um `<script type="application/ld+json">`
com `@type: TouristTrip`, `provider` (TravelAgency) e `offers` (preço em BRL).

```tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, adventureSegment, type Locale } from '@/i18n/routing';
import { getAdventure, getAllAdventures, getSlugMapById } from '@/lib/content';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllAdventures(locale).map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const adv = getAdventure(locale, slug);
  if (!adv) return {};
  const slugMap = getSlugMapById(adv.id);
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    const s = slugMap[l];
    if (s) languages[l] = `/${l}/${adventureSegment[l]}/${s}`;
  }
  return {
    title: adv.titulo, description: adv.resumo,
    alternates: { canonical: `/${locale}/${adventureSegment[locale]}/${slug}`, languages },
    openGraph: { title: adv.titulo, description: adv.resumo, images: [adv.imagem], type: 'article' },
  };
}

export default async function AdventurePage({ params }: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const adv = getAdventure(locale, slug);
  if (!adv) notFound();

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: adv.titulo, description: adv.resumo, image: adv.imagem,
    touristType: 'Trekking / ecoturismo',
    provider: { '@type': 'TravelAgency', name: 'Mamut Trekking', url: 'https://mamut.agency' },
    offers: { '@type': 'Offer', price: adv.precoBase, priceCurrency: 'BRL', availability: 'https://schema.org/InStock' },
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="font-display text-4xl">{adv.titulo}</h1>
      <div className="mt-10 space-y-4 leading-relaxed">
        {adv.corpo.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  );
}
```

### `src/app/sitemap.ts`

Gera Home + hub + cada aventura em cada idioma. Base `https://mamut.agency`.
Usa `getAllAdventures` e `adventureSegment` para montar as URLs.

### `src/app/robots.ts`

Libera `*` e explicitamente os user-agents de IA: `GPTBot`, `OAI-SearchBot`,
`ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, `CCBot`.
Aponta `sitemap: https://mamut.agency/sitemap.xml`.

### `public/llms.txt`

Resumo em markdown do que é a Mamut, categorias de aventuras, informações úteis
e contato (WhatsApp +55 75 99935-9150, contato@mamut.agency, Cadastur 43500583000122).

### `src/app/globals.css`

```css
@import "tailwindcss";
@theme {
  --color-mamut-ink: #14211b;
  --color-mamut-stone: #6b6a63;
  --color-mamut-sand: #f2efe6;
  --color-mamut-moss: #3f5a44;
  --color-mamut-clay: #b5623c;
  --font-display: "Fraunces", ui-serif, serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
}
body { background: var(--color-mamut-sand); color: var(--color-mamut-ink); font-family: var(--font-body); }
```

---

## Parte 7 — Checklist de aceite

- [ ] `/`, `/pt`, `/en`, `/es` funcionam e o idioma é detectado.
- [ ] Slugs traduzidos: `/en/adventures/palmital-waterfall` resolve.
- [ ] Cada página de aventura tem `<link rel="alternate" hreflang>` para os 3 idiomas.
- [ ] Cada aventura tem JSON-LD `TouristTrip` válido (testar no Rich Results Test).
- [ ] `/sitemap.xml` lista todas as URLs nos 3 idiomas.
- [ ] `/robots.txt` libera os crawlers de IA e aponta o sitemap.
- [ ] `/llms.txt` acessível.
- [ ] `pnpm build` gera tudo estaticamente, sem erros.
- [ ] Uma única `<h1>` por página; imagens via `next/image`.

---

## Parte 8 — Fora de escopo agora

- Blog (fase futura; quando entrar, migrar o conteúdo para Markdown trocando só
  a fonte de dados em `src/lib/content.ts`).
- CMS / painel de administração.
- Integrações de reserva/pagamento.

---

## Prompt sugerido para colar no Claude Code

> Leia o CLAUDE.md deste repositório. Vamos iniciar o projeto Mamut Trekking
> seguindo exatamente as decisões e especificações desse arquivo. Comece pela
> Parte 5 (passo a passo). Trabalhe em Plan mode: proponha o plano da etapa 1
> a 4, aguarde minha aprovação e então crie os arquivos da Parte 6. Ao final,
> rode `pnpm build` e valide o checklist da Parte 7.
