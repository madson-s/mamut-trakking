import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "4-Day Package",
  description: "Four days combining waterfalls, caves and viewpoints of Chapada.",
  alternates: {
    canonical: "/en/adventures/package-4-days",
    languages: { pt: "/pt/aventuras/pacote-4-dias", en: "/en/adventures/package-4-days", es: "/es/aventuras/paquete-4-dias" },
  },
  openGraph: { title: "4-Day Package", description: "Four days combining waterfalls, caves and viewpoints of Chapada.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"4-Day Package"}
      summary={"Four days combining waterfalls, caves and viewpoints of Chapada."}
      level={"Moderate"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={2900}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
