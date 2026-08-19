import type { Metadata } from 'next';
import { Container, Section, SectionHeading } from '@/components/ui';
import { StatsBar } from '@/components/home/StatsBar';
import { ContatoChannels } from '@/components/contato/ContatoChannels';
import { ContatoForm } from '@/components/contato/ContatoForm';
import { ContatoHero } from '@/components/contato/ContatoHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Mamut Trekking: WhatsApp, e-mail e endereço em Lençóis, Chapada Diamantina. Conte sobre a sua viagem e montamos o roteiro ideal.',
  alternates: { canonical: '/pt/contato' },
  openGraph: {
    title: 'Contato · Mamut Trekking',
    description: 'Faça contato conosco — WhatsApp, e-mail e nossa base em Lençóis.',
    url: '/pt/contato',
    images: ['/img/about/cta-pai-inacio.webp'],
  },
};

// Mesma sequência das outras institucionais: hero baixo → faixa de números →
// conteúdo. Aqui o conteúdo são os canais (à esquerda) e o formulário.
export default function ContatoPage() {
  return (
    <>
      <ContatoHero />
      <StatsBar />

      <Section padding="default" container={false} labelledBy="contato-title">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            titleId="contato-title"
            align="center"
            maxWidth="max-w-[820px]"
            className="mx-auto"
            title={
              <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
                Toda trilha começa com <span className="text-brand-strong">uma conversa.</span>
              </span>
            }
            lead={`Estamos em ${SITE.location}. Escolha o canal que preferir — ou conte tudo no formulário e a gente responde com o roteiro certo.`}
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start">
            <ContatoChannels />
            <ContatoForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
