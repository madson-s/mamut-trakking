import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Pati Valley — 3 Days",
  description: "The classic Pati Valley traverse in three days.",
  alternates: {
    canonical: "/en/adventures/pati-valley-3-days",
    languages: { pt: "/pt/aventuras/vale-do-pati-3-dias", en: "/en/adventures/pati-valley-3-days", es: "/es/aventuras/valle-del-pati-3-dias" },
  },
  openGraph: { title: "Pati Valley — 3 Days", description: "The classic Pati Valley traverse in three days.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Pati Valley — 3 Days"}
      summary={"The classic Pati Valley traverse in three days."}
      level={"Challenging"}
      distance={"35km"}
      origin={"Guiné / Vale do Capão"}
      price={1950}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
