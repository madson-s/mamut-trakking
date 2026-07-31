import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "New Year’s Eve in Chapada",
  description: "A special year-end package in Chapada Diamantina.",
  alternates: {
    canonical: "/en/adventures/new-years-eve-chapada",
    languages: { pt: "/pt/aventuras/reveillon-na-chapada", en: "/en/adventures/new-years-eve-chapada", es: "/es/aventuras/ano-nuevo-en-la-chapada" },
  },
  openGraph: { title: "New Year’s Eve in Chapada", description: "A special year-end package in Chapada Diamantina.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"New Year’s Eve in Chapada"}
      summary={"A special year-end package in Chapada Diamantina."}
      level={"Moderate"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={3800}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
