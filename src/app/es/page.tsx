import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { SectionBlock } from '@/components/content/SectionBlock';
import { AdventureGrid } from '@/components/ui/AdventureGrid';
import { AdventureCard } from '@/components/ui/AdventureCard';

// Home ES — contenido escrito directamente aquí.
export const metadata: Metadata = {
  alternates: { canonical: '/es', languages: { pt: '/pt', en: '/en', es: '/es' } },
};

const IMG = 'https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg';

export default function HomePage() {
  return (
    <>
      <Hero
        kicker="Chapada Diamantina · Bahía"
        title="Trekkings y aventuras en la Chapada Diamantina"
        subtitle="Operadora especializada en senderos, travesías y excursiones guiadas, con guías locales y turismo de bajo impacto."
        cta={{ label: 'Ver aventuras', href: '/es/aventuras' }}
      />

      <SectionBlock title="Rutas destacadas" className="pb-24">
        <AdventureGrid columns={4}>
          <AdventureCard
            locale="es"
            href="/es/aventuras/cascada-del-palmital"
            image={IMG}
            title="Cascada del Palmital — 2 Días"
            level="Moderado"
            distance="22km"
            summary="Trekking de dos días hasta la Cascada del Palmital."
            price={1350}
            fromLabel="Desde"
          />
          <AdventureCard
            locale="es"
            href="/es/aventuras/sendero-aguas-claras"
            image={IMG}
            title="Sendero Águas Claras"
            level="Fácil"
            distance="12km"
            summary="Excursión de un día por las piscinas naturales y cascadas cerca de Lençóis."
            price={350}
            fromLabel="Desde"
          />
          <AdventureCard
            locale="es"
            href="/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio"
            image={IMG}
            title="Cascada del Mosquito + Morro do Pai Inácio"
            level="Moderado"
            distance="8km"
            summary="Excursión de un día que combina la Cascada del Mosquito y el atardecer en el Morro do Pai Inácio."
            price={420}
            fromLabel="Desde"
          />
          <AdventureCard
            locale="es"
            href="/es/aventuras/cascada-del-mixila"
            image={IMG}
            title="Cascada del Mixila"
            level="Moderado"
            distance="18km"
            summary="Trekking hasta la Cascada del Mixila, una de las más preservadas de la región."
            price={1250}
            fromLabel="Desde"
          />
        </AdventureGrid>
      </SectionBlock>
    </>
  );
}
