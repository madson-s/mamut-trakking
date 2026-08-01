import type { Metadata } from 'next';
import { AdventureCard, AdventureGrid, Section, SectionHeading } from '@/components/ui';

// Hub de aventuras (en) — cards escritos diretamente aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Adventures",
  description: "Choose from treks, day tours, packages and the Pati Valley traverse.",
  alternates: {
    canonical: "/en/adventures",
    languages: { pt: '/pt/aventuras', en: '/en/adventures', es: '/es/aventuras' },
  },
};

export default function AdventuresHubPage() {
  return (
    <Section padding="compact" containerClassName="flex flex-col gap-12">
      <SectionHeading
        as="h1"
        title="Adventures"
        lead="Choose from treks, day tours, packages and the Pati Valley traverse."
        maxWidth="max-w-2xl"
      />
      <AdventureGrid>
        <AdventureCard
          locale="en"
          href={"/en/adventures/palmital-waterfall"}
          image={IMG}
          title={"Palmital Waterfall — 2 Days"}
          level={"Moderate"}
          distance={"22km"}
          summary={"A two-day trek to Palmital Waterfall."}
          price={1350}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/aguas-claras-trail"}
          image={IMG}
          title={"Águas Claras Trail"}
          level={"Easy"}
          distance={"12km"}
          summary={"A day hike through the natural pools and waterfalls near Lençóis."}
          price={350}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/mosquito-waterfall-pai-inacio"}
          image={IMG}
          title={"Mosquito Waterfall + Pai Inácio Peak"}
          level={"Moderate"}
          distance={"8km"}
          summary={"A day tour combining Mosquito Waterfall and sunset at Pai Inácio Peak."}
          price={420}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/mixila-waterfall"}
          image={IMG}
          title={"Mixila Waterfall"}
          level={"Moderate"}
          distance={"18km"}
          summary={"A trek to Mixila Waterfall, one of the most pristine in the region."}
          price={1250}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/pati-valley-3-days"}
          image={IMG}
          title={"Pati Valley — 3 Days"}
          level={"Challenging"}
          distance={"35km"}
          summary={"The classic Pati Valley traverse in three days."}
          price={1950}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/pati-valley-4-days"}
          image={IMG}
          title={"Pati Valley — 4 Days"}
          level={"Challenging"}
          distance={"45km"}
          summary={"Four days exploring the viewpoints and local homes of Pati Valley."}
          price={2450}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/pati-valley-5-days"}
          image={IMG}
          title={"Pati Valley — 5 Days"}
          level={"Challenging"}
          distance={"55km"}
          summary={"The full Pati Valley traverse in five days, including the Cachoeirão climb."}
          price={2950}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/package-3-days"}
          image={IMG}
          title={"3-Day Package"}
          level={"Moderate"}
          distance={"Vários"}
          summary={"A three-day itinerary covering the highlights of Chapada Diamantina."}
          price={2200}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/package-4-days"}
          image={IMG}
          title={"4-Day Package"}
          level={"Moderate"}
          distance={"Vários"}
          summary={"Four days combining waterfalls, caves and viewpoints of Chapada."}
          price={2900}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/package-6-days"}
          image={IMG}
          title={"6-Day Package"}
          level={"Challenging"}
          distance={"Vários"}
          summary={"The complete Chapada experience in six days, including Pati Valley."}
          price={4200}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/lencois-city-tour"}
          image={IMG}
          title={"Lençóis City Tour"}
          level={"Easy"}
          distance={"5km"}
          summary={"A guided walk through the historic center of Lençóis and its surroundings."}
          price={180}
          fromLabel={"From"}
        />
        <AdventureCard
          locale="en"
          href={"/en/adventures/new-years-eve-chapada"}
          image={IMG}
          title={"New Year’s Eve in Chapada"}
          level={"Moderate"}
          distance={"Vários"}
          summary={"A special year-end package in Chapada Diamantina."}
          price={3800}
          fromLabel={"From"}
        />
      </AdventureGrid>
    </Section>
  );
}
