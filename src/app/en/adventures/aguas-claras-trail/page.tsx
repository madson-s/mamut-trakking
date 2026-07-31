import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Águas Claras Trail",
  description: "A day hike through the natural pools and waterfalls near Lençóis.",
  alternates: {
    canonical: "/en/adventures/aguas-claras-trail",
    languages: { pt: "/pt/aventuras/trilha-aguas-claras", en: "/en/adventures/aguas-claras-trail", es: "/es/aventuras/sendero-aguas-claras" },
  },
  openGraph: { title: "Águas Claras Trail", description: "A day hike through the natural pools and waterfalls near Lençóis.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"Águas Claras Trail"}
      summary={"A day hike through the natural pools and waterfalls near Lençóis."}
      level={"Easy"}
      distance={"12km"}
      origin={"Lençóis"}
      price={350}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
