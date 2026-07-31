import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "Pacote 6 Dias",
  description: "A experiência completa da Chapada em seis dias, incluindo o Vale do Pati.",
  alternates: {
    canonical: "/pt/aventuras/pacote-6-dias",
    languages: { pt: "/pt/aventuras/pacote-6-dias", en: "/en/adventures/package-6-days", es: "/es/aventuras/paquete-6-dias" },
  },
  openGraph: { title: "Pacote 6 Dias", description: "A experiência completa da Chapada em seis dias, incluindo o Vale do Pati.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="pt"
      title={"Pacote 6 Dias"}
      summary={"A experiência completa da Chapada em seis dias, incluindo o Vale do Pati."}
      level={"Desafiador"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={4200}
      image={IMG}
      labels={{ level: "Nível", distance: "Distância", origin: "Saída", from: "A partir de" }}
    >
      <p>Conteúdo a migrar do site atual.</p>
      <p>Conteúdo a migrar do site atual.</p>
    </AdventureDetail>
  );
}
