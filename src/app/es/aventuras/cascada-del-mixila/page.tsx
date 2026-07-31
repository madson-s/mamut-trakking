import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cascada del Mixila",
  description: "Trekking hasta la Cascada del Mixila, una de las más preservadas de la región.",
  alternates: {
    canonical: "/es/aventuras/cascada-del-mixila",
    languages: { pt: "/pt/aventuras/cachoeira-do-mixila", en: "/en/adventures/mixila-waterfall", es: "/es/aventuras/cascada-del-mixila" },
  },
  openGraph: { title: "Cascada del Mixila", description: "Trekking hasta la Cascada del Mixila, una de las más preservadas de la región.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Cascada del Mixila"}
      summary={"Trekking hasta la Cascada del Mixila, una de las más preservadas de la región."}
      level={"Moderado"}
      distance={"18km"}
      origin={"Lençóis"}
      price={1250}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
