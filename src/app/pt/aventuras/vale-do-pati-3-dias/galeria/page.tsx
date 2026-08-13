import type { Metadata } from 'next';
import { PatiGalleryExplorer } from '@/components/adventure/PatiGalleryExplorer';

export const metadata: Metadata = {
  title: 'Galeria do Vale do Pati em 3 Dias',
  description: 'Fotos dos caminhos, mirantes e paisagens da travessia do Vale do Pati em 3 dias.',
  alternates: { canonical: '/pt/aventuras/vale-do-pati-3-dias/galeria' },
};

export default function GalleryPage() {
  return <PatiGalleryExplorer />;
}
