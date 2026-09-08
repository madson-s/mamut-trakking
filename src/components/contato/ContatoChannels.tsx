import { Mail, MapPin } from 'lucide-react';
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
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card as="article" surface="outline" radius="panelLg" padding="none" className="gap-4 p-7 sm:p-8">
      <span className="mb-2 flex size-12 items-center justify-center rounded-full border border-brand/50 text-brand-strong" aria-hidden="true">
        {icon}
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
    <div className="flex flex-col gap-8">
      <div className="grid gap-5 md:grid-cols-3">
      <ChannelCard icon={<span className="size-5 bg-current [mask-image:url('/svg/figma/pati-3/whatsapp.svg')] [mask-repeat:no-repeat] [mask-size:contain]" />} title={c.whatsapp.titulo}>
        <Text size="sm" tone="secondary" pretty>
          {c.whatsapp.texto}
        </Text>
        <Button href={SITE.whatsappUrl} size="sm" variant="outline" arrow className="mt-auto self-start">
          {c.whatsapp.cta}
        </Button>
      </ChannelCard>

      <ChannelCard icon={<Mail className="size-5" />} title={c.email.titulo}>
        <Text size="sm" tone="secondary" pretty>
          {c.email.texto}
        </Text>
        <a
          href={`mailto:${SITE.email}`}
          className="mt-auto inline-flex min-h-11 items-center self-start break-all font-body text-base text-content underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
        >
          {SITE.email}
        </a>
      </ChannelCard>

      <ChannelCard icon={<MapPin className="size-5" />} title={c.endereco.titulo}>
        <Text size="sm" tone="secondary" pretty>
          {ADDRESS}
        </Text>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex min-h-11 items-center self-start font-body text-base text-content underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
        >
          {c.endereco.mapa}
        </a>
      </ChannelCard>
      </div>

      <div className="flex flex-col gap-5 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <Heading as="h3" size="label">{c.redes.titulo}</Heading>
          <Text size="xs" tone="subtle">{c.redes.cadastur} {SITE.cadastur}</Text>
        </div>
        <div className="flex flex-wrap gap-2">
          {SOCIAL.map((rede) => (
            <a
              key={rede.label}
              href={rede.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-pill border border-line-contrast px-4 font-body text-sm text-content-secondary transition-colors ease-brand hover:border-brand hover:bg-brand hover:text-brand-contrast"
            >
              {rede.icon}
              {rede.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
