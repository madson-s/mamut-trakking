import Link from 'next/link';
import { Text } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { PRIVACIDADE_HREF, PRIVACIDADE_NOTA } from './privacidade-content';

/** Aviso curto no ponto da coleta: os dois formulários públicos pedem dados pessoais. */
export function PrivacidadeNota({ locale }: { locale: Locale }) {
  const nota = PRIVACIDADE_NOTA[locale];

  return (
    <Text size="xs" tone="subtle">
      {nota.antes}
      <Link href={PRIVACIDADE_HREF[locale]} className="underline">
        {nota.link}
      </Link>
      {nota.depois}
    </Text>
  );
}
