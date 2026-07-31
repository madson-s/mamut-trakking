import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Paquete 6 Días",
  description: "La experiencia completa de la Chapada en seis días, incluyendo el Valle del Pati.",
  alternates: {
    canonical: "/es/aventuras/paquete-6-dias",
    languages: { pt: "/pt/aventuras/pacote-6-dias", en: "/en/adventures/package-6-days", es: "/es/aventuras/paquete-6-dias" },
  },
  openGraph: { title: "Paquete 6 Días", description: "La experiencia completa de la Chapada en seis días, incluyendo el Valle del Pati.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Paquete 6 Días"}
      summary={"La experiencia completa de la Chapada en seis días, incluyendo el Valle del Pati."}
      level={"Exigente"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={4200}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
