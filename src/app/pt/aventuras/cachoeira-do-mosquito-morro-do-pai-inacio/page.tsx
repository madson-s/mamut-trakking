import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Cachoeira do Mosquito + Morro do Pai Inácio",
  description: "Day tour combinando a Cachoeira do Mosquito e o pôr do sol no Morro do Pai Inácio.",
  alternates: {
    canonical: "/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio",
    languages: { pt: "/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio", en: "/en/adventures/mosquito-waterfall-pai-inacio", es: "/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio" },
  },
  openGraph: { title: "Cachoeira do Mosquito + Morro do Pai Inácio", description: "Day tour combinando a Cachoeira do Mosquito e o pôr do sol no Morro do Pai Inácio.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Cachoeira do Mosquito + Morro do Pai Inácio"}
      summary={"Day tour combinando a Cachoeira do Mosquito e o pôr do sol no Morro do Pai Inácio."}
      level={"Moderado"}
      distance={"8km"}
      origin={"Lençóis"}
      price={420}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
