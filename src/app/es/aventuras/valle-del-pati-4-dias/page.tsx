import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Valle del Pati — 4 Días",
  description: "Cuatro días explorando los miradores y casas de nativos del Valle del Pati.",
  alternates: {
    canonical: "/es/aventuras/valle-del-pati-4-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-4-dias", en: "/en/adventures/pati-valley-4-days", es: "/es/aventuras/valle-del-pati-4-dias" },
  },
  openGraph: { title: "Valle del Pati — 4 Días", description: "Cuatro días explorando los miradores y casas de nativos del Valle del Pati.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Valle del Pati — 4 Días"}
      summary={"Cuatro días explorando los miradores y casas de nativos del Valle del Pati."}
      level={"Exigente"}
      distance={"45km"}
      origin={"Guiné / Vale do Capão"}
      price={2450}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
