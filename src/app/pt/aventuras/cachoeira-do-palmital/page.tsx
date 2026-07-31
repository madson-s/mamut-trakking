import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cachoeira do Palmital 2 Dias",
  description: "Dois dias de trilha até a Cachoeira do Palmital.",
  alternates: {
    canonical: "/pt/aventuras/cachoeira-do-palmital",
    languages: { pt: "/pt/aventuras/cachoeira-do-palmital", en: "/en/adventures/palmital-waterfall", es: "/es/aventuras/cascada-del-palmital" },
  },
  openGraph: { title: "Cachoeira do Palmital 2 Dias", description: "Dois dias de trilha até a Cachoeira do Palmital.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Cachoeira do Palmital 2 Dias"}
      summary={"Dois dias de trilha até a Cachoeira do Palmital."}
      level={"Moderado"}
      distance={"22km"}
      origin={"Lençóis"}
      price={1350}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Parágrafo 1.</p>
      <p>Parágrafo 2.</p>
    </AdventureDetail>
  );
}
