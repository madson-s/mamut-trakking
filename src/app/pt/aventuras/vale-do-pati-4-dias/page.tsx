import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Vale do Pati — 4 Dias",
  description: "Quatro dias explorando os mirantes e casas de nativos do Vale do Pati.",
  alternates: {
    canonical: "/pt/aventuras/vale-do-pati-4-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-4-dias", en: "/en/adventures/pati-valley-4-days", es: "/es/aventuras/valle-del-pati-4-dias" },
  },
  openGraph: { title: "Vale do Pati — 4 Dias", description: "Quatro dias explorando os mirantes e casas de nativos do Vale do Pati.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Vale do Pati — 4 Dias"}
      summary={"Quatro dias explorando os mirantes e casas de nativos do Vale do Pati."}
      level={"Desafiador"}
      distance={"45km"}
      origin={"Guiné / Vale do Capão"}
      price={2450}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
