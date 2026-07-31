import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cachoeira do Mixila",
  description: "Trilha até a Cachoeira do Mixila, uma das mais preservadas da região.",
  alternates: {
    canonical: "/pt/aventuras/cachoeira-do-mixila",
    languages: { pt: "/pt/aventuras/cachoeira-do-mixila", en: "/en/adventures/mixila-waterfall", es: "/es/aventuras/cascada-del-mixila" },
  },
  openGraph: { title: "Cachoeira do Mixila", description: "Trilha até a Cachoeira do Mixila, uma das mais preservadas da região.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Cachoeira do Mixila"}
      summary={"Trilha até a Cachoeira do Mixila, uma das mais preservadas da região."}
      level={"Moderado"}
      distance={"18km"}
      origin={"Lençóis"}
      price={1250}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
