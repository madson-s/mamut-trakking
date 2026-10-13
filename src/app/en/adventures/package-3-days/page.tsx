import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "/img/adventures/pacotes/palmital-provisoria.jpeg";

export const metadata: Metadata = {
  title: "3-Day Package",
  description: "A three-day itinerary covering the highlights of Chapada Diamantina.",
  alternates: {
    canonical: "/en/adventures/package-3-days",
    languages: { pt: "/pt/aventuras/pacote-3-dias", en: "/en/adventures/package-3-days", es: "/es/aventuras/paquete-3-dias" },
  },
  openGraph: { title: "3-Day Package", description: "A three-day itinerary covering the highlights of Chapada Diamantina.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"3-Day Package"}
      summary={"A three-day itinerary covering the highlights of Chapada Diamantina."}
      level={"Moderate"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={2200}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
