import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Valle del Pati — 3 Días",
  description: "La travesía clásica del Valle del Pati en tres días.",
  alternates: {
    canonical: "/es/aventuras/valle-del-pati-3-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-3-dias", en: "/en/adventures/pati-valley-3-days", es: "/es/aventuras/valle-del-pati-3-dias" },
  },
  openGraph: { title: "Valle del Pati — 3 Días", description: "La travesía clásica del Valle del Pati en tres días.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Valle del Pati — 3 Días"}
      summary={"La travesía clásica del Valle del Pati en tres días."}
      level={"Exigente"}
      distance={"35km"}
      origin={"Guiné / Vale do Capão"}
      price={1950}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
