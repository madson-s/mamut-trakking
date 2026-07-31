import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Vale do Pati — 5 Dias",
  description: "A travessia completa do Vale do Pati em cinco dias, com subida ao Cachoeirão.",
  alternates: {
    canonical: "/pt/aventuras/vale-do-pati-5-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-5-dias", en: "/en/adventures/pati-valley-5-days", es: "/es/aventuras/valle-del-pati-5-dias" },
  },
  openGraph: { title: "Vale do Pati — 5 Dias", description: "A travessia completa do Vale do Pati em cinco dias, com subida ao Cachoeirão.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Vale do Pati — 5 Dias"}
      summary={"A travessia completa do Vale do Pati em cinco dias, com subida ao Cachoeirão."}
      level={"Desafiador"}
      distance={"55km"}
      origin={"Guiné / Vale do Capão"}
      price={2950}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
