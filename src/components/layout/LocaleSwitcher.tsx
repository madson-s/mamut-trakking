import { LOCALES, type Locale } from '@/lib/site';

// Códigos de idioma (chrome de UI, não conteúdo). Troca para a Home do idioma
// escolhido — cada idioma é uma raiz estática independente, então a navegação
// entre idiomas é sempre um full reload.
const LABELS: Record<Locale, string> = { pt: 'PT', en: 'EN', es: 'ES' };

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      {LOCALES.map((loc) => (
        <a
          key={loc}
          href={`/${loc}`}
          aria-current={loc === locale ? 'true' : undefined}
          className={
            loc === locale
              ? 'rounded px-2 py-1 bg-mamut-moss text-mamut-sand'
              : 'rounded px-2 py-1 text-mamut-stone transition hover:text-mamut-ink'
          }
        >
          {LABELS[loc]}
        </a>
      ))}
    </div>
  );
}
