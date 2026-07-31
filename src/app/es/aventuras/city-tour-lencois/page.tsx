import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "City Tour en Lençóis",
  description: "Caminata guiada por el centro histórico de Lençóis y sus alrededores.",
  alternates: {
    canonical: "/es/aventuras/city-tour-lencois",
    languages: { pt: "/pt/aventuras/city-tour-lencois", en: "/en/adventures/lencois-city-tour", es: "/es/aventuras/city-tour-lencois" },
  },
  openGraph: { title: "City Tour en Lençóis", description: "Caminata guiada por el centro histórico de Lençóis y sus alrededores.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"City Tour en Lençóis"}
      summary={"Caminata guiada por el centro histórico de Lençóis y sus alrededores."}
      level={"Fácil"}
      distance={"5km"}
      origin={"Lençóis"}
      price={180}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
