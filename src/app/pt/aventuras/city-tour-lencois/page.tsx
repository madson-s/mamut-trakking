import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "City Tour em Lençóis",
  description: "Caminhada guiada pelo centro histórico de Lençóis e seus arredores.",
  alternates: {
    canonical: "/pt/aventuras/city-tour-lencois",
    languages: { pt: "/pt/aventuras/city-tour-lencois", en: "/en/adventures/lencois-city-tour", es: "/es/aventuras/city-tour-lencois" },
  },
  openGraph: { title: "City Tour em Lençóis", description: "Caminhada guiada pelo centro histórico de Lençóis e seus arredores.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"City Tour em Lençóis"}
      summary={"Caminhada guiada pelo centro histórico de Lençóis e seus arredores."}
      level={"Leve"}
      distance={"5km"}
      origin={"Lençóis"}
      price={180}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
