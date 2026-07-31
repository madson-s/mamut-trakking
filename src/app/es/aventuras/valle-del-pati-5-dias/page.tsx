import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Valle del Pati — 5 Días",
  description: "La travesía completa del Valle del Pati en cinco días, con subida al Cachoeirão.",
  alternates: {
    canonical: "/es/aventuras/valle-del-pati-5-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-5-dias", en: "/en/adventures/pati-valley-5-days", es: "/es/aventuras/valle-del-pati-5-dias" },
  },
  openGraph: { title: "Valle del Pati — 5 Días", description: "La travesía completa del Valle del Pati en cinco días, con subida al Cachoeirão.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Valle del Pati — 5 Días"}
      summary={"La travesía completa del Valle del Pati en cinco días, con subida al Cachoeirão."}
      level={"Exigente"}
      distance={"55km"}
      origin={"Guiné / Vale do Capão"}
      price={2950}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
