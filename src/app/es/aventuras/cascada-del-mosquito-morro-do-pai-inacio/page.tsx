import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cascada del Mosquito + Morro do Pai Inácio",
  description: "Excursión de un día que combina la Cascada del Mosquito y el atardecer en el Morro do Pai Inácio.",
  alternates: {
    canonical: "/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio",
    languages: { pt: "/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio", en: "/en/adventures/mosquito-waterfall-pai-inacio", es: "/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio" },
  },
  openGraph: { title: "Cascada del Mosquito + Morro do Pai Inácio", description: "Excursión de un día que combina la Cascada del Mosquito y el atardecer en el Morro do Pai Inácio.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="es"
      title={"Cascada del Mosquito + Morro do Pai Inácio"}
      summary={"Excursión de un día que combina la Cascada del Mosquito y el atardecer en el Morro do Pai Inácio."}
      level={"Moderado"}
      distance={"8km"}
      origin={"Lençóis"}
      price={420}
      image={IMG}
      labels={{ level: "Nivel", distance: "Distancia", origin: "Salida", from: "Desde" }}
    >
      <p>Contenido a migrar del sitio actual.</p>
      <p>Contenido a migrar del sitio actual.</p>
    </AdventureDetail>
  );
}
