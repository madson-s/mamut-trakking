import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Paquete 3 Días",
  description: "Un itinerario de tres días con los principales atractivos de la Chapada.",
  alternates: {
    canonical: "/es/aventuras/paquete-3-dias",
    languages: { pt: "/pt/aventuras/pacote-3-dias", en: "/en/adventures/package-3-days", es: "/es/aventuras/paquete-3-dias" },
  },
  openGraph: { title: "Paquete 3 Días", description: "Un itinerario de tres días con los principales atractivos de la Chapada.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Paquete 3 Días"}
      summary={"Un itinerario de tres días con los principales atractivos de la Chapada."}
      level={"Moderado"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={2200}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
