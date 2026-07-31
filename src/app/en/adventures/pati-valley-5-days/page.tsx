import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Pati Valley — 5 Days",
  description: "The full Pati Valley traverse in five days, including the Cachoeirão climb.",
  alternates: {
    canonical: "/en/adventures/pati-valley-5-days",
    languages: { pt: "/pt/aventuras/vale-do-pati-5-dias", en: "/en/adventures/pati-valley-5-days", es: "/es/aventuras/valle-del-pati-5-dias" },
  },
  openGraph: { title: "Pati Valley — 5 Days", description: "The full Pati Valley traverse in five days, including the Cachoeirão climb.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Pati Valley — 5 Days"}
      summary={"The full Pati Valley traverse in five days, including the Cachoeirão climb."}
      level={"Challenging"}
      distance={"55km"}
      origin={"Guiné / Vale do Capão"}
      price={2950}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
