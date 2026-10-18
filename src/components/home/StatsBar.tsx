import { Section, Stat } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { HOME_CONTENT } from './home-content';

// A grade do mobile é fixa; só o texto de cada célula vem do idioma.
const CELLS = [
  'col-span-3',
  'col-span-3',
  'col-span-2',
  'order-5 col-span-2 lg:order-none',
  'order-4 col-span-2 lg:order-none',
];

export function StatsBar({ locale = 'pt' }: { locale?: Locale }) {
  const stats = HOME_CONTENT[locale].stats;

  return (
    <Section
      surface="muted"
      bordered
      padding="none"
      className="mt-0 sm:mt-7"
      containerClassName="grid grid-cols-6 items-start gap-x-4 gap-y-6 py-8 text-left sm:gap-x-8 lg:flex lg:h-27 lg:items-center lg:justify-between lg:gap-x-10 lg:py-0"
    >
      {stats.map((stat, i) => (
        <Stat
          key={stat.value}
          value={stat.value}
          label={stat.label}
          align="left"
          fill={false}
          className={CELLS[i]}
        />
      ))}
    </Section>
  );
}
