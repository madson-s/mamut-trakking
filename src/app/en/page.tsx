import type { Metadata } from 'next';
import {
  AdventureCard,
  AdventureGrid,
  Button,
  Section,
  SectionHeading,
} from '@/components/ui';

// Home EN — content written directly here.
export const metadata: Metadata = {
  alternates: { canonical: '/en', languages: { pt: '/pt', en: '/en', es: '/es' } },
};

const IMG = 'https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg';

export default function HomePage() {
  return (
    <>
      <Section padding="tall" containerClassName="flex flex-col items-center">
        <SectionHeading
          as="h1"
          size="hero"
          align="center"
          eyebrow="Chapada Diamantina · Bahia"
          title="Treks and adventures in Chapada Diamantina"
          lead="A specialist operator for hikes, traverses and guided tours, with local guides and low-impact tourism."
          maxWidth="max-w-[900px]"
          actions={<Button href="/en/adventures" arrow>See adventures</Button>}
        />
      </Section>

      <Section
        surface="muted"
        bordered
        padding="compact"
        containerClassName="flex flex-col gap-12"
      >
        <SectionHeading title="Featured itineraries" />
        <AdventureGrid columns={4}>
          <AdventureCard
            locale="en"
            href="/en/adventures/palmital-waterfall"
            image={IMG}
            title="Palmital Waterfall — 2 Days"
            level="Moderate"
            distance="22km"
            summary="A two-day trek to Palmital Waterfall."
            price={1350}
            fromLabel="From"
          />
          <AdventureCard
            locale="en"
            href="/en/adventures/aguas-claras-trail"
            image={IMG}
            title="Águas Claras Trail"
            level="Easy"
            distance="12km"
            summary="A day hike through the natural pools and waterfalls near Lençóis."
            price={350}
            fromLabel="From"
          />
          <AdventureCard
            locale="en"
            href="/en/adventures/mosquito-waterfall-pai-inacio"
            image={IMG}
            title="Mosquito Waterfall + Pai Inácio Peak"
            level="Moderate"
            distance="8km"
            summary="A day tour combining Mosquito Waterfall and sunset at Pai Inácio Peak."
            price={420}
            fromLabel="From"
          />
          <AdventureCard
            locale="en"
            href="/en/adventures/mixila-waterfall"
            image={IMG}
            title="Mixila Waterfall"
            level="Moderate"
            distance="18km"
            summary="A trek to Mixila Waterfall, one of the most pristine in the region."
            price={1250}
            fromLabel="From"
          />
        </AdventureGrid>
      </Section>
    </>
  );
}
