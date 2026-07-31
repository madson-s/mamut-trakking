import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Año Nuevo en la Chapada",
  description: "Paquete especial de fin de año en la Chapada Diamantina.",
  alternates: {
    canonical: "/es/aventuras/ano-nuevo-en-la-chapada",
    languages: { pt: "/pt/aventuras/reveillon-na-chapada", en: "/en/adventures/new-years-eve-chapada", es: "/es/aventuras/ano-nuevo-en-la-chapada" },
  },
  openGraph: { title: "Año Nuevo en la Chapada", description: "Paquete especial de fin de año en la Chapada Diamantina.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Año Nuevo en la Chapada"}
      summary={"Paquete especial de fin de año en la Chapada Diamantina."}
      level={"Moderado"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={3800}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
