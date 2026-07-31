import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Trilha Águas Claras",
  description: "Passeio de um dia pelas piscinas naturais e cachoeiras próximas a Lençóis.",
  alternates: {
    canonical: "/pt/aventuras/trilha-aguas-claras",
    languages: { pt: "/pt/aventuras/trilha-aguas-claras", en: "/en/adventures/aguas-claras-trail", es: "/es/aventuras/sendero-aguas-claras" },
  },
  openGraph: { title: "Trilha Águas Claras", description: "Passeio de um dia pelas piscinas naturais e cachoeiras próximas a Lençóis.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Trilha Águas Claras"}
      summary={"Passeio de um dia pelas piscinas naturais e cachoeiras próximas a Lençóis."}
      level={"Leve"}
      distance={"12km"}
      origin={"Lençóis"}
      price={350}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
