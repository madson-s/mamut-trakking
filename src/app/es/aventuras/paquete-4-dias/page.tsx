import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Paquete 4 Días",
  description: "Cuatro días combinando cascadas, grutas y miradores de la Chapada.",
  alternates: {
    canonical: "/es/aventuras/paquete-4-dias",
    languages: { pt: "/pt/aventuras/pacote-4-dias", en: "/en/adventures/package-4-days", es: "/es/aventuras/paquete-4-dias" },
  },
  openGraph: { title: "Paquete 4 Días", description: "Cuatro días combinando cascadas, grutas y miradores de la Chapada.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Paquete 4 Días"}
      summary={"Cuatro días combinando cascadas, grutas y miradores de la Chapada."}
      level={"Moderado"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={2900}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
