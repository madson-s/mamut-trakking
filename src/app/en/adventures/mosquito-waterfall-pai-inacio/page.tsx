import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Mosquito Waterfall + Pai Inácio Peak",
  description: "A day tour combining Mosquito Waterfall and sunset at Pai Inácio Peak.",
  alternates: {
    canonical: "/en/adventures/mosquito-waterfall-pai-inacio",
    languages: { pt: "/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio", en: "/en/adventures/mosquito-waterfall-pai-inacio", es: "/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio" },
  },
  openGraph: { title: "Mosquito Waterfall + Pai Inácio Peak", description: "A day tour combining Mosquito Waterfall and sunset at Pai Inácio Peak.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Mosquito Waterfall + Pai Inácio Peak"}
      summary={"A day tour combining Mosquito Waterfall and sunset at Pai Inácio Peak."}
      level={"Moderate"}
      distance={"8km"}
      origin={"Lençóis"}
      price={420}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
