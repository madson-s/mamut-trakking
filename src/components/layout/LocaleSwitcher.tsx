'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/motion/select';
import { cn } from '@/lib/cn';
import { focus } from '@/design/tokens';
import { LOCALES, type Locale } from '@/lib/site';

// Códigos de idioma (chrome de UI, não conteúdo). Troca para a Home do idioma
// escolhido — cada idioma é uma raiz estática independente, então a navegação
// entre idiomas é sempre um full reload (nada de router client-side aqui).
const LABELS: Record<Locale, string> = { pt: 'PT', en: 'EN', es: 'ES' };

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <Select
      value={locale}
      onValueChange={(next) => {
        if (next !== locale) window.location.assign(`/${next}`);
      }}
      className="font-body text-xs font-medium"
    >
      <SelectTrigger
        aria-label="Selecionar idioma"
        chevronClassName="text-brand-contrast/80"
        className={cn(
          'w-auto gap-1 border-0 bg-brand px-2 py-1 text-xs text-brand-contrast',
          focus.onSurface,
        )}
      >
        {/* placeholder = rótulo do idioma atual: evita o flash de "Select" no SSR,
            já que os itens só registram seus rótulos depois da hidratação. */}
        <SelectValue placeholder={LABELS[locale]} className="text-brand-contrast" />
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((loc) => (
          <SelectItem key={loc} value={loc} className="text-xs">
            {LABELS[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
