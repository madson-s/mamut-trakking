import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cascada del Palmital — 2 Días",
  description: "Trekking de dos días hasta la Cascada del Palmital.",
  alternates: {
    canonical: "/es/aventuras/cascada-del-palmital",
    languages: { pt: "/pt/aventuras/cachoeira-do-palmital", en: "/en/adventures/palmital-waterfall", es: "/es/aventuras/cascada-del-palmital" },
  },
  openGraph: { title: "Cascada del Palmital — 2 Días", description: "Trekking de dos días hasta la Cascada del Palmital.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Cascada del Palmital — 2 Días"}
      summary={"Trekking de dos días hasta la Cascada del Palmital."}
      level={"Moderado"}
      distance={"22km"}
      origin={"Lençóis"}
      price={1350}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Párrafo 1.</p>
      <p>Párrafo 2.</p>
    </AdventureDetail>
  );
}
