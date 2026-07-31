import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { SectionBlock } from '@/components/content/SectionBlock';
import { AdventureGrid } from '@/components/ui/AdventureGrid';
import { AdventureCard } from '@/components/ui/AdventureCard';

// Home EN — content written directly here.
export const metadata: Metadata = {
  alternates: { canonical: '/en', languages: { pt: '/pt', en: '/en', es: '/es' } },
};

const IMG = 'https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg';

export default function HomePage() {
  return (
    <>
      <Hero
        kicker="Chapada Diamantina · Bahia"
        title="Treks and adventures in Chapada Diamantina"
        subtitle="A specialist operator for hikes, traverses and guided tours, with local guides and low-impact tourism."
        cta={{ label: 'See adventures', href: '/en/adventures' }}
      />

      <SectionBlock title="Featured itineraries" className="pb-24">
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
      </SectionBlock>
    </>
  );
}
