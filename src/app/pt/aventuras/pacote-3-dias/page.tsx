import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Pacote 3 Dias",
  description: "Roteiro de três dias com os principais cartões-postais da Chapada.",
  alternates: {
    canonical: "/pt/aventuras/pacote-3-dias",
    languages: { pt: "/pt/aventuras/pacote-3-dias", en: "/en/adventures/package-3-days", es: "/es/aventuras/paquete-3-dias" },
  },
  openGraph: { title: "Pacote 3 Dias", description: "Roteiro de três dias com os principais cartões-postais da Chapada.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Pacote 3 Dias"}
      summary={"Roteiro de três dias com os principais cartões-postais da Chapada."}
      level={"Moderado"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={2200}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
