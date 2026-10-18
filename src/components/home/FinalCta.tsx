import { Button, Section, SectionHeading, Text } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { HOME_CONTENT } from './home-content';

export function FinalCta({ locale = 'pt' }: { locale?: Locale }) {
  const c = HOME_CONTENT[locale].finalCta;

  return (
    <Section
      padding="none"
      containerClassName="flex flex-col items-center gap-8 pt-16 pb-16 lg:gap-12 lg:pt-44 lg:pb-24"
    >
      <SectionHeading
        align="center"
        size="hero"
        title={
          <>
            {c.titulo[0]}
            <br />
            {c.titulo[1]}
          </>
        }
        lead={
          <Text size="sm" tone="muted" pretty className="max-w-131.5 sm:text-lg">
            {c.corpo}
          </Text>
        }
      />
      <Button href={c.ctaHref} arrow className="max-lg:w-full">
        {c.cta}
      </Button>
    </Section>
  );
}
