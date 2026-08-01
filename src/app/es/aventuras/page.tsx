import type { Metadata } from 'next';
import { AdventureCard, AdventureGrid, Section, SectionHeading } from '@/components/ui';

// Hub de aventuras (es) — cards escritos diretamente aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Aventuras",
  description: "Elige entre trekkings, excursiones de un día, paquetes y la travesía del Valle del Pati.",
  alternates: {
    canonical: "/es/aventuras",
    languages: { pt: '/pt/aventuras', en: '/en/adventures', es: '/es/aventuras' },
  },
};

export default function AdventuresHubPage() {
  return (
    <Section padding="compact" containerClassName="flex flex-col gap-12">
      <SectionHeading
        as="h1"
        title="Aventuras"
        lead="Elige entre trekkings, excursiones de un día, paquetes y la travesía del Valle del Pati."
        maxWidth="max-w-2xl"
      />
      <AdventureGrid>
        <AdventureCard
          locale="es"
          href={"/es/aventuras/cascada-del-palmital"}
          image={IMG}
          title={"Cascada del Palmital — 2 Días"}
          level={"Moderado"}
          distance={"22km"}
          summary={"Trekking de dos días hasta la Cascada del Palmital."}
          price={1350}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/sendero-aguas-claras"}
          image={IMG}
          title={"Sendero Águas Claras"}
          level={"Fácil"}
          distance={"12km"}
          summary={"Excursión de un día por las piscinas naturales y cascadas cerca de Lençóis."}
          price={350}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio"}
          image={IMG}
          title={"Cascada del Mosquito + Morro do Pai Inácio"}
          level={"Moderado"}
          distance={"8km"}
          summary={"Excursión de un día que combina la Cascada del Mosquito y el atardecer en el Morro do Pai Inácio."}
          price={420}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/cascada-del-mixila"}
          image={IMG}
          title={"Cascada del Mixila"}
          level={"Moderado"}
          distance={"18km"}
          summary={"Trekking hasta la Cascada del Mixila, una de las más preservadas de la región."}
          price={1250}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/valle-del-pati-3-dias"}
          image={IMG}
          title={"Valle del Pati — 3 Días"}
          level={"Exigente"}
          distance={"35km"}
          summary={"La travesía clásica del Valle del Pati en tres días."}
          price={1950}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/valle-del-pati-4-dias"}
          image={IMG}
          title={"Valle del Pati — 4 Días"}
          level={"Exigente"}
          distance={"45km"}
          summary={"Cuatro días explorando los miradores y casas de nativos del Valle del Pati."}
          price={2450}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/valle-del-pati-5-dias"}
          image={IMG}
          title={"Valle del Pati — 5 Días"}
          level={"Exigente"}
          distance={"55km"}
          summary={"La travesía completa del Valle del Pati en cinco días, con subida al Cachoeirão."}
          price={2950}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/paquete-3-dias"}
          image={IMG}
          title={"Paquete 3 Días"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Un itinerario de tres días con los principales atractivos de la Chapada."}
          price={2200}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/paquete-4-dias"}
          image={IMG}
          title={"Paquete 4 Días"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Cuatro días combinando cascadas, grutas y miradores de la Chapada."}
          price={2900}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/paquete-6-dias"}
          image={IMG}
          title={"Paquete 6 Días"}
          level={"Exigente"}
          distance={"Vários"}
          summary={"La experiencia completa de la Chapada en seis días, incluyendo el Valle del Pati."}
          price={4200}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/city-tour-lencois"}
          image={IMG}
          title={"City Tour en Lençóis"}
          level={"Fácil"}
          distance={"5km"}
          summary={"Caminata guiada por el centro histórico de Lençóis y sus alrededores."}
          price={180}
          fromLabel={"Desde"}
        />
        <AdventureCard
          locale="es"
          href={"/es/aventuras/ano-nuevo-en-la-chapada"}
          image={IMG}
          title={"Año Nuevo en la Chapada"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Paquete especial de fin de año en la Chapada Diamantina."}
          price={3800}
          fromLabel={"Desde"}
        />
      </AdventureGrid>
    </Section>
  );
}
