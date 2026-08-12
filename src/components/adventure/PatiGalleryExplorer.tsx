'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Container, Heading, IconButton, Section, Text, XIcon } from '@/components/ui';
import { PatiLightbox } from './PatiLightbox';
import { PATI_GALLERY_IMAGES } from './patiGallery';

export function PatiGalleryExplorer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const change = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <article className="pati-three-day-page overflow-hidden">
      <Section padding="tall" container={false} className="relative isolate min-h-[70dvh] overflow-hidden">
        <Image src="/svg/screen_destinos_vale-do-pati-session-01_backgroud.svg" alt="" width={1920} height={880} unoptimized className="pati-hero-background pointer-events-none absolute left-1/2 top-44 z-0 h-auto w-full min-w-300 -translate-x-1/2 opacity-30" />
        <Container className="relative z-10 flex flex-col gap-10">
          <IconButton
            href="/pt/aventuras/vale-do-pati-3-dias"
            label="Fechar galeria e voltar ao destino"
            variant="outline"
            size="lg"
            className="absolute top-0 right-0 !size-11"
          >
            <XIcon className="size-5" />
          </IconButton>
          <header className="flex flex-col items-start gap-5">
            <Badge variant="outline" size="sm">Galeria · Vale do Pati</Badge>
            <div className="flex w-full flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-200">
                <Heading as="h1" size="hero" balance className="max-lg:text-display-lg">O Vale muda a cada passo.</Heading>
                <Text size="lg" weight="light" tone="secondary" pretty className="mt-3 max-w-[62ch]">Navegue pelas paisagens da travessia de 3 dias. As imagens abaixo exemplificam os mirantes, caminhos e encontros do roteiro.</Text>
              </div>
              <Button href="/pt/aventuras/vale-do-pati-3-dias" variant="outline" arrow>Voltar ao destino</Button>
            </div>
          </header>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PATI_GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-panel border border-line bg-media-backdrop text-left shadow-image-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${index === 0 || index === 5 ? 'sm:row-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}
                aria-label={`Abrir foto ${index + 1}: ${image.alt}`}
              >
                <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.025] motion-reduce:transform-none" />
                <span className="absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-black/65 to-transparent px-5 py-4 pt-14 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">{image.alt}</span>
              </button>
            ))}
          </div>
        </Container>
      </Section>
      <PatiLightbox images={PATI_GALLERY_IMAGES} activeIndex={activeIndex} onChange={change} onClose={close} />
    </article>
  );
}
