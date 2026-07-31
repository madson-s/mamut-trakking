import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { AdventureGrid } from '@/components/ui/AdventureGrid';
import { AdventureCard } from '@/components/ui/AdventureCard';

// Hub de aventuras (pt) — cards escritos diretamente aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Aventuras",
  description: "Escolha entre trekkings, day tours, pacotes e a travessia do Vale do Pati.",
  alternates: {
    canonical: "/pt/aventuras",
    languages: { pt: '/pt/aventuras', en: '/en/adventures', es: '/es/aventuras' },
  },
};

export default function AdventuresHubPage() {
  return (
    <Container className="py-16">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl">Aventuras</h1>
        <p className="mt-4 text-lg text-mamut-stone">Escolha entre trekkings, day tours, pacotes e a travessia do Vale do Pati.</p>
      </header>
      <div className="mt-12">
        <AdventureGrid>
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/cachoeira-do-palmital"}
          image={IMG}
          title={"Cachoeira do Palmital 2 Dias"}
          level={"Moderado"}
          distance={"22km"}
          summary={"Dois dias de trilha até a Cachoeira do Palmital."}
          price={1350}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/trilha-aguas-claras"}
          image={IMG}
          title={"Trilha Águas Claras"}
          level={"Leve"}
          distance={"12km"}
          summary={"Passeio de um dia pelas piscinas naturais e cachoeiras próximas a Lençóis."}
          price={350}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio"}
          image={IMG}
          title={"Cachoeira do Mosquito + Morro do Pai Inácio"}
          level={"Moderado"}
          distance={"8km"}
          summary={"Day tour combinando a Cachoeira do Mosquito e o pôr do sol no Morro do Pai Inácio."}
          price={420}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/cachoeira-do-mixila"}
          image={IMG}
          title={"Cachoeira do Mixila"}
          level={"Moderado"}
          distance={"18km"}
          summary={"Trilha até a Cachoeira do Mixila, uma das mais preservadas da região."}
          price={1250}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/vale-do-pati-3-dias"}
          image={IMG}
          title={"Vale do Pati — 3 Dias"}
          level={"Desafiador"}
          distance={"35km"}
          summary={"A travessia clássica do Vale do Pati em três dias."}
          price={1950}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/vale-do-pati-4-dias"}
          image={IMG}
          title={"Vale do Pati — 4 Dias"}
          level={"Desafiador"}
          distance={"45km"}
          summary={"Quatro dias explorando os mirantes e casas de nativos do Vale do Pati."}
          price={2450}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/vale-do-pati-5-dias"}
          image={IMG}
          title={"Vale do Pati — 5 Dias"}
          level={"Desafiador"}
          distance={"55km"}
          summary={"A travessia completa do Vale do Pati em cinco dias, com subida ao Cachoeirão."}
          price={2950}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/pacote-3-dias"}
          image={IMG}
          title={"Pacote 3 Dias"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Roteiro de três dias com os principais cartões-postais da Chapada."}
          price={2200}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/pacote-4-dias"}
          image={IMG}
          title={"Pacote 4 Dias"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Quatro dias combinando cachoeiras, grutas e mirantes da Chapada."}
          price={2900}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/pacote-6-dias"}
          image={IMG}
          title={"Pacote 6 Dias"}
          level={"Desafiador"}
          distance={"Vários"}
          summary={"A experiência completa da Chapada em seis dias, incluindo o Vale do Pati."}
          price={4200}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/city-tour-lencois"}
          image={IMG}
          title={"City Tour em Lençóis"}
          level={"Leve"}
          distance={"5km"}
          summary={"Caminhada guiada pelo centro histórico de Lençóis e seus arredores."}
          price={180}
          fromLabel={"A partir de"}
        />
        <AdventureCard
          locale="pt"
          href={"/pt/aventuras/reveillon-na-chapada"}
          image={IMG}
          title={"Réveillon na Chapada"}
          level={"Moderado"}
          distance={"Vários"}
          summary={"Pacote especial de fim de ano na Chapada Diamantina."}
          price={3800}
          fromLabel={"A partir de"}
        />
        </AdventureGrid>
      </div>
    </Container>
  );
}
