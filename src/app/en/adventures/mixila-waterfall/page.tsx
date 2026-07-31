import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Mixila Waterfall",
  description: "A trek to Mixila Waterfall, one of the most pristine in the region.",
  alternates: {
    canonical: "/en/adventures/mixila-waterfall",
    languages: { pt: "/pt/aventuras/cachoeira-do-mixila", en: "/en/adventures/mixila-waterfall", es: "/es/aventuras/cascada-del-mixila" },
  },
  openGraph: { title: "Mixila Waterfall", description: "A trek to Mixila Waterfall, one of the most pristine in the region.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Mixila Waterfall"}
      summary={"A trek to Mixila Waterfall, one of the most pristine in the region."}
      level={"Moderate"}
      distance={"18km"}
      origin={"Lençóis"}
      price={1250}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
