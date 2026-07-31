import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Réveillon na Chapada",
  description: "Pacote especial de fim de ano na Chapada Diamantina.",
  alternates: {
    canonical: "/pt/aventuras/reveillon-na-chapada",
    languages: { pt: "/pt/aventuras/reveillon-na-chapada", en: "/en/adventures/new-years-eve-chapada", es: "/es/aventuras/ano-nuevo-en-la-chapada" },
  },
  openGraph: { title: "Réveillon na Chapada", description: "Pacote especial de fim de ano na Chapada Diamantina.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Réveillon na Chapada"}
      summary={"Pacote especial de fim de ano na Chapada Diamantina."}
      level={"Moderado"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={3800}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
