import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Pati Valley — 4 Days",
  description: "Four days exploring the viewpoints and local homes of Pati Valley.",
  alternates: {
    canonical: "/en/adventures/pati-valley-4-days",
    languages: { pt: "/pt/aventuras/vale-do-pati-4-dias", en: "/en/adventures/pati-valley-4-days", es: "/es/aventuras/valle-del-pati-4-dias" },
  },
  openGraph: { title: "Pati Valley — 4 Days", description: "Four days exploring the viewpoints and local homes of Pati Valley.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Pati Valley — 4 Days"}
      summary={"Four days exploring the viewpoints and local homes of Pati Valley."}
      level={"Challenging"}
      distance={"45km"}
      origin={"Guiné / Vale do Capão"}
      price={2450}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
