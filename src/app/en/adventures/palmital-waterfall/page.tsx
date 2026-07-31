import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Palmital Waterfall — 2 Days",
  description: "A two-day trek to Palmital Waterfall.",
  alternates: {
    canonical: "/en/adventures/palmital-waterfall",
    languages: { pt: "/pt/aventuras/cachoeira-do-palmital", en: "/en/adventures/palmital-waterfall", es: "/es/aventuras/cascada-del-palmital" },
  },
  openGraph: { title: "Palmital Waterfall — 2 Days", description: "A two-day trek to Palmital Waterfall.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Palmital Waterfall — 2 Days"}
      summary={"A two-day trek to Palmital Waterfall."}
      level={"Moderate"}
      distance={"22km"}
      origin={"Lençóis"}
      price={1350}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Paragraph 1.</p>
      <p>Paragraph 2.</p>
    </AdventureDetail>
  );
}
