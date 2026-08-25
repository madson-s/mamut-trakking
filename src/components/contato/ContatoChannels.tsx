import Image from 'next/image';
import type { ReactNode } from 'react';
import { Button, Card, FacebookIcon, Heading, InstagramIcon, Text } from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import { CONTATO_CONTENT } from './contato-content';

// Endereço e perfis são os mesmos publicados em mamut.agency/contato.
const ADDRESS = 'Avenida 7 de Setembro, Centro, Lençóis, Bahia — 46960-000';
const MAPS_URL =
  'https://maps.apple.com/place?address=Rua%20Miguel%20Calmon,%20108,%20Len%C3%A7%C3%B3is%20-%20BA,%2046960-000,%20Brasil';

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/mamut.agency', icon: <InstagramIcon className="size-4" /> },
  { label: 'Facebook', href: 'https://facebook.com/mamut.agency', icon: <FacebookIcon className="size-4" /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@mamut.agency', icon: null },
  {
    label: 'TripAdvisor',
    href: 'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html',
    icon: null,
  },
] as const;

function ChannelCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card as="article" surface="muted" radius="panelLg" padding="none" className="gap-3 px-7 py-7">
      <span className="flex size-10 items-center justify-center rounded-full bg-brand">
        <Image src={icon} alt="" width={20} height={20} unoptimized className="size-5 brightness-0 invert" />
      </span>
      <Heading as="h3" size="label">
        {title}
      </Heading>
      {children}
    </Card>
  );
}

export function ContatoChannels({ locale = 'pt' }: { locale?: Locale }) {
  const c = CONTATO_CONTENT[locale].canais;
  return (
    <div className="flex flex-col gap-6">
      <ChannelCard icon="/svg/figma/pati-3/whatsapp.svg" title={c.whatsapp.titulo}>
        <Text size="sm" tone="muted" pretty>
          {c.whatsapp.texto}
        </Text>
        <Button href={SITE.whatsappUrl} size="sm" arrow className="mt-2 self-start">
          {c.whatsapp.cta}
        </Button>
      </ChannelCard>

      <ChannelCard icon="/svg/_icons/icon_07_text.svg" title={c.email.titulo}>
        <Text size="sm" tone="muted" pretty>
          {c.email.texto}
        </Text>
        <a
          href={`mailto:${SITE.email}`}
          className="mt-1 self-start font-body text-base text-content underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
        >
          {SITE.email}
        </a>
      </ChannelCard>

      <ChannelCard icon="/svg/_icons/icon_09_location.svg" title={c.endereco.titulo}>
        <Text size="sm" tone="muted" pretty>
          {ADDRESS}
        </Text>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-1 self-start font-body text-base text-content underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
        >
          {c.endereco.mapa}
        </a>
      </ChannelCard>

      <ChannelCard icon="/svg/_icons/icon_16_internet.svg" title={c.redes.titulo}>
        <div className="mt-1 flex flex-wrap gap-2">
          {SOCIAL.map((rede) => (
            <a
              key={rede.label}
              href={rede.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-pill border border-line-contrast px-4 font-body text-sm text-content-secondary transition-colors ease-brand hover:border-brand hover:bg-brand hover:text-brand-contrast"
            >
              {rede.icon}
              {rede.label}
            </a>
          ))}
        </div>
        <Text size="xs" tone="subtle" className="mt-3">
          {c.redes.cadastur} {SITE.cadastur}
        </Text>
      </ChannelCard>
    </div>
  );
}
