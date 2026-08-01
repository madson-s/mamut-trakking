import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { LOCALES, type Locale } from '@/lib/site';

// Códigos de idioma (chrome de UI, não conteúdo). Troca para a Home do idioma
// escolhido — cada idioma é uma raiz estática independente, então a navegação
// entre idiomas é sempre um full reload.
const LABELS: Record<Locale, string> = { pt: 'PT', en: 'EN', es: 'ES' };

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <div
      role="group"
      aria-label="Selecionar idioma"
      className="flex items-center gap-1 font-body text-xs font-medium"
    >
      {LOCALES.map((loc) => (
        <a
          key={loc}
          href={`/${loc}`}
          aria-current={loc === locale ? 'true' : undefined}
          className={cn(
            'rounded-control px-2 py-1 transition-colors',
            motion.fast,
            focus.onSurface,
            loc === locale
              ? 'bg-brand text-brand-contrast'
              : 'text-content-muted hover:text-content',
          )}
        >
          {LABELS[loc]}
        </a>
      ))}
    </div>
  );
}
