import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Lençóis City Tour",
  description: "A guided walk through the historic center of Lençóis and its surroundings.",
  alternates: {
    canonical: "/en/adventures/lencois-city-tour",
    languages: { pt: "/pt/aventuras/city-tour-lencois", en: "/en/adventures/lencois-city-tour", es: "/es/aventuras/city-tour-lencois" },
  },
  openGraph: { title: "Lençóis City Tour", description: "A guided walk through the historic center of Lençóis and its surroundings.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Lençóis City Tour"}
      summary={"A guided walk through the historic center of Lençóis and its surroundings."}
      level={"Easy"}
      distance={"5km"}
      origin={"Lençóis"}
      price={180}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
