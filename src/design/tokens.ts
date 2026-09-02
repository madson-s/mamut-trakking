/**
 * Tema Mamut — camada tipada sobre os tokens CSS de `src/app/globals.css`.
 *
 * Hierarquia:
 *   1. primitivos  (--gray-500, --primary-500…)  → só em globals.css
 *   2. semânticos  (--surface, --content, --brand…) → viram utilitários
 *      Tailwind (`bg-surface`, `text-content-muted`, `border-line`…)
 *   3. tokens deste arquivo → presets de variante que os componentes de
 *      `src/components/ui` consomem.
 *
 * Regra prática: componente novo escolhe um preset daqui; nunca escreve
 * `gray-500`/`primary-500` direto. Assim o tema claro/escuro continua
 * trocando sozinho (os primitivos espelham no `[data-theme]`).
 */

/* ------------------------------------------------------------------ */
/* Movimento                                                           */
/* ------------------------------------------------------------------ */

export const motion = {
  /** micro-interações (hover de ícone, toggle) */
  fast: 'duration-150 ease-out',
  /** padrão de botões e links */
  base: 'duration-300 ease-out',
  /** entrada/saída de conteúdo (blur + scale) */
  slow: 'duration-500 ease-brand',
  /** parallax e zoom de imagem */
  reveal: 'duration-700 ease-brand',
} as const;

/** Escala de "press" usada em tudo que é clicável. */
export const press = 'active:scale-[0.96]';

/* ------------------------------------------------------------------ */
/* Foco                                                               */
/* ------------------------------------------------------------------ */

export const focus = {
  /** sobre superfícies do tema (páginas, cards claros/escuros) */
  onSurface:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
  /** sobre foto/vídeo, onde o offset precisa ser escuro */
  onMedia:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-black',
  /** campos de formulário: anel colado na borda, sem offset */
  control: 'outline-none focus:border-brand focus:ring-2 focus:ring-brand/30',
} as const;

/* ------------------------------------------------------------------ */
/* Superfícies                                                        */
/* ------------------------------------------------------------------ */

export type SurfaceTone = 'page' | 'muted' | 'raised' | 'inverse' | 'transparent';

export const surfaceTone: Record<SurfaceTone, string> = {
  page: 'bg-surface text-content',
  muted: 'bg-surface-muted text-content',
  raised: 'bg-surface-raised text-content',
  inverse: 'bg-surface-inverse text-surface',
  transparent: '',
};

/* ------------------------------------------------------------------ */
/* Cor de texto                                                       */
/* ------------------------------------------------------------------ */

export type Tone =
  | 'default'
  | 'secondary'
  | 'muted'
  | 'subtle'
  | 'brand'
  | 'onMedia'
  | 'onMediaSoft'
  | 'onMediaMuted'
  | 'inherit';

export const tone: Record<Tone, string> = {
  default: 'text-content',
  secondary: 'text-content-secondary',
  muted: 'text-content-muted',
  subtle: 'text-content-subtle',
  brand: 'text-brand-strong',
  /** título sobre foto */
  onMedia: 'text-on-media',
  /** parágrafo sobre foto */
  onMediaSoft: 'text-on-media-soft',
  /** apoio sobre foto */
  onMediaMuted: 'text-on-media-muted',
  inherit: '',
};

/* ------------------------------------------------------------------ */
/* Tipografia                                                         */
/* ------------------------------------------------------------------ */

/** Títulos (Mergo). Cada preset já carrega a escala responsiva do Figma. */
export type DisplaySize = 'hero' | 'heroWide' | 'section' | 'card' | 'quote' | 'label';

export const displaySize: Record<DisplaySize, string> = {
  /** 40 → 60 → 72 · h1 do hero e h2 das seções de respiro */
  hero: 'text-display-md leading-[1.1] sm:text-display-xl lg:text-display-2xl',
  /** Igual a `hero`, mas o último passo só entra em 1124px (lg + 100px). É a
   *  escala do h1 da home: as linhas em EN e ES são mais longas que as em PT e
   *  precisam de mais largura antes de chegar aos 72px. */
  heroWide: 'text-display-md leading-[1.1] sm:text-display-xl min-[1124px]:text-display-2xl',
  /** 40 → 48 · h2 padrão de seção */
  section: 'text-display-md sm:text-display-lg',
  /** 30 · título de card */
  card: 'text-display-sm',
  /** 24 · destaque curto dentro de texto corrido */
  quote: 'text-display-xs',
  /** 18 · título de bloco de formulário / ferramenta interna */
  label: 'text-lg leading-snug',
};

/** Corpo (Brutal Milk No 2). */
export type BodySize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export const bodySize: Record<BodySize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

/**
 * Entrelinha default de cada tamanho de corpo. Fica separada do tamanho para
 * que a prop `leading` do `Text` substitua (e não empilhe com) o default —
 * duas utilidades `leading-*` na mesma classe têm precedência imprevisível.
 */
export const bodyLeading: Record<BodySize, string> = {
  xs: 'leading-[1.4]',
  sm: 'leading-[1.45]',
  base: 'leading-[1.5]',
  lg: 'leading-[1.5]',
  xl: 'leading-[1.5]',
};

export type Leading = 'tight' | 'snug' | 'normal' | 'relaxed';

export const leading: Record<Leading, string> = {
  tight: 'leading-[1.1]',
  snug: 'leading-[1.25]',
  normal: 'leading-[1.5]',
  relaxed: 'leading-relaxed',
};

export type BodyWeight = 'light' | 'normal' | 'medium' | 'semibold';

export const bodyWeight: Record<BodyWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
};

/* ------------------------------------------------------------------ */
/* Forma                                                              */
/* ------------------------------------------------------------------ */

export type Radius =
  | 'none'
  | 'control'
  | 'chip'
  | 'card'
  | 'cardLg'
  | 'panel'
  | 'panelLg'
  | 'pill';

export const radius: Record<Radius, string> = {
  none: 'rounded-none',
  control: 'rounded-control',
  chip: 'rounded-chip',
  card: 'rounded-card',
  cardLg: 'rounded-card-lg',
  panel: 'rounded-panel',
  panelLg: 'rounded-panel-lg',
  pill: 'rounded-pill',
};

export type Elevation = 'none' | 'chip' | 'card' | 'float' | 'popover';

export const elevation: Record<Elevation, string> = {
  none: '',
  chip: 'shadow-chip',
  card: 'shadow-card',
  float: 'shadow-float',
  popover: 'shadow-popover',
};

/* ------------------------------------------------------------------ */
/* Layout                                                             */
/* ------------------------------------------------------------------ */

/** Larguras de conteúdo. `grid` é o grid de 12 colunas do Figma (1216). */
export type ContainerSize = 'grid' | 'wide' | 'panel' | 'prose' | 'full';

export const containerSize: Record<ContainerSize, string> = {
  grid: 'max-w-[1216px]',
  wide: 'max-w-[1562px]',
  // Entre `prose` e `grid`: largo o bastante para as duas colunas do checklist
  // e a tabela de preços respirarem, sem esticar o parágrafo além do
  // confortável de ler.
  panel: 'max-w-[1009px]',
  prose: 'max-w-3xl',
  full: 'max-w-none',
};

/** Respiro vertical das seções. */
export type SectionPadding = 'none' | 'band' | 'compact' | 'default' | 'tall';

export const sectionPadding: Record<SectionPadding, string> = {
  none: '',
  band: 'py-10',
  compact: 'py-16',
  default: 'py-12',
  tall: 'py-20 lg:py-[108px]',
};

/** Véus sobre mídia — o texto por cima usa sempre `tone="onMedia"`. */
export type Overlay = 'none' | 'bottom' | 'left' | 'tint' | 'soft';

export const overlay: Record<Overlay, string> = {
  none: '',
  bottom: 'bg-gradient-to-t from-black/85 via-black/20 to-black/5',
  left: 'bg-gradient-to-r from-black/70 via-black/40 to-black/10',
  tint: 'bg-media-tint',
  soft: 'bg-black/30',
};
