import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Vale do Pati — 3 Dias",
  description: "A travessia clássica do Vale do Pati em três dias.",
  alternates: {
    canonical: "/pt/aventuras/vale-do-pati-3-dias",
    languages: { pt: "/pt/aventuras/vale-do-pati-3-dias", en: "/en/adventures/pati-valley-3-days", es: "/es/aventuras/valle-del-pati-3-dias" },
  },
  openGraph: { title: "Vale do Pati — 3 Dias", description: "A travessia clássica do Vale do Pati em três dias.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Vale do Pati — 3 Dias"}
      summary={"A travessia clássica do Vale do Pati em três dias."}
      level={"Desafiador"}
      distance={"35km"}
      origin={"Guiné / Vale do Capão"}
      price={1950}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
