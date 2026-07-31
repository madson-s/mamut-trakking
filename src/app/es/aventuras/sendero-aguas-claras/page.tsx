import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Sendero Águas Claras",
  description: "Excursión de un día por las piscinas naturales y cascadas cerca de Lençóis.",
  alternates: {
    canonical: "/es/aventuras/sendero-aguas-claras",
    languages: { pt: "/pt/aventuras/trilha-aguas-claras", en: "/en/adventures/aguas-claras-trail", es: "/es/aventuras/sendero-aguas-claras" },
  },
  openGraph: { title: "Sendero Águas Claras", description: "Excursión de un día por las piscinas naturales y cascadas cerca de Lençóis.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Sendero Águas Claras"}
      summary={"Excursión de un día por las piscinas naturales y cascadas cerca de Lençóis."}
      level={"Fácil"}
      distance={"12km"}
      origin={"Lençóis"}
      price={350}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
