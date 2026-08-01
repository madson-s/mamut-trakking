/**
 * Documentation furniture for the `Theme/*` stories — Storybook only.
 *
 * Nothing here is part of the design system: no page imports this file, and
 * anything a page would need belongs in `src/components/ui` instead. Kept in
 * one place so the foundation stories stay about the tokens, not about layout.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

/** Page shell of a foundation story: side padding + rhythm between blocks. */
export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('flex flex-col gap-14 px-8 py-10', className)}>{children}</div>;
}

/** Titled block with an optional one-line rule underneath the title. */
export function Block({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Heading as="h2" size="card">
          {title}
        </Heading>
        {hint && (
          <Text size="sm" tone="muted" pretty className="max-w-[68ch]">
            {hint}
          </Text>
        )}
      </div>
      {children}
    </section>
  );
}

/** Token / class name, in monospace. */
export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('font-mono text-xs tracking-tight', className)}>{children}</span>
  );
}

/** Colour chip: the utility applied to a box, its name and what it is for. */
export function Swatch({
  name,
  className,
  note,
  box = 'size-14',
}: {
  name: string;
  className: string;
  note?: string;
  /** Size utilities of the sample box — widen it for gradients. */
  box?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className={cn('shrink-0 rounded-card border border-line-strong', box, className)}
      />
      <span className="flex min-w-0 flex-col gap-0.5">
        <Mono>{name}</Mono>
        {note && (
          <Text as="span" size="xs" tone="muted">
            {note}
          </Text>
        )}
      </span>
    </div>
  );
}

/** Grid of swatches — 1 / 2 / 3 columns. */
export function SwatchGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

/** A ramp step: square + step number + hex, for the raw scales. */
export function RampStep({ step, className }: { step: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span aria-hidden className={cn('size-12 rounded-control border border-line', className)} />
      <Mono className="text-content-muted">{step}</Mono>
    </div>
  );
}

export function Ramp({ name, steps, prefix }: { name: string; steps: string[]; prefix: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Mono>{name}</Mono>
      <div className="flex flex-wrap gap-2">
        {steps.map((step) => (
          <RampStep key={step} step={step} className={`${prefix}-${step}`} />
        ))}
      </div>
    </div>
  );
}

/** Spec row: name · value · what it is for. */
export function SpecTable({
  rows,
}: {
  rows: { name: string; value: string; note?: string }[];
}) {
  return (
    <div className="flex flex-col divide-y divide-line rounded-card border border-line">
      {rows.map((row) => (
        <div
          key={row.name}
          className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,14rem)_minmax(0,12rem)_1fr] sm:items-baseline sm:gap-4"
        >
          <Mono>{row.name}</Mono>
          <Mono className="text-content-secondary">{row.value}</Mono>
          {row.note && (
            <Text as="span" size="xs" tone="muted">
              {row.note}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}

/** Do / don't line. `tone="dont"` marks a rule that breaks the system. */
export function Rule({ tone, children }: { tone: 'do' | 'dont'; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        aria-hidden
        className={cn(
          'mt-0.5 grid size-5 shrink-0 place-items-center rounded-pill text-xs font-semibold',
          tone === 'do' ? 'bg-brand text-brand-contrast' : 'bg-error-500 text-white',
        )}
      >
        {tone === 'do' ? '✓' : '✕'}
      </span>
      <Text size="sm" pretty className="max-w-[72ch]">
        {children}
      </Text>
    </div>
  );
}

export function Rules({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2.5">{children}</div>;
}

/**
 * Renders the same specimen twice, once per theme, as themed subtrees.
 * The semantic aliases are declared on `[data-theme]` as well as `:root`
 * (`src/app/globals.css`), so each panel recomputes every alias against its
 * own primitives — which is what makes a light panel inside a dark page work.
 */
export function ThemePair({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {(['light', 'dark'] as const).map((theme) => (
        <div
          key={theme}
          data-theme={theme}
          className="flex flex-col gap-4 rounded-panel border border-line bg-surface p-6 text-content"
        >
          <Mono className="text-content-muted">data-theme=&quot;{theme}&quot;</Mono>
          {children}
        </div>
      ))}
    </div>
  );
}

/**
 * One of the brand's 16 line icons, drawn as a CSS mask so it inherits
 * `color` — the same technique `CaretDownIcon` uses.
 */
export function MaskIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('inline-block shrink-0 bg-current', className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}
