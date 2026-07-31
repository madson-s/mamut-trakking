import type { Metadata } from 'next';
import { AdventureDetail } from '@/components/ui/AdventureDetail';

// Página gerada como scaffold — edite o conteúdo (textos, imagem, corpo) direto aqui.
const IMG = "https://mamut.agency/wp-content/uploads/2024/11/palmital-768x432.jpeg";

export const metadata: Metadata = {
  title: "6-Day Package",
  description: "The complete Chapada experience in six days, including Pati Valley.",
  alternates: {
    canonical: "/en/adventures/package-6-days",
    languages: { pt: "/pt/aventuras/pacote-6-dias", en: "/en/adventures/package-6-days", es: "/es/aventuras/paquete-6-dias" },
  },
  openGraph: { title: "6-Day Package", description: "The complete Chapada experience in six days, including Pati Valley.", images: [IMG], type: 'article' },
};

export default function Page() {
  return (
    <AdventureDetail
      locale="en"
      title={"6-Day Package"}
      summary={"The complete Chapada experience in six days, including Pati Valley."}
      level={"Challenging"}
      distance={"Vários"}
      origin={"Lençóis"}
      price={4200}
      image={IMG}
      labels={{ level: "Level", distance: "Distance", origin: "Departure", from: "From" }}
    >
      <p>Content to migrate from the current site.</p>
      <p>Content to migrate from the current site.</p>
    </AdventureDetail>
  );
}
