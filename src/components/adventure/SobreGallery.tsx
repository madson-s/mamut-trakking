'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { PatiLightbox } from './PatiLightbox';
import type { PatiGalleryImage } from './patiGallery';

/**
 * Galeria do bloco "Sobre" das páginas de roteiro — o mesmo modelo da galeria
 * do Vale do Pati (`PatiHeroGallery`): uma foto grande e duas empilhadas ao
 * lado, e o lightbox percorre todas. Com mais de três fotos, a última miniatura
 * mostra "+N".
 *
 * No desktop a altura acompanha o texto ao lado (o pai estica a coluna); no
 * celular as alturas são fixas.
 */
export function SobreGallery({
  images,
  maisLabel,
  ampliarLabel,
}: {
  images: readonly PatiGalleryImage[];
  /** Selo da última miniatura quando há mais fotos; `{n}` vira a quantidade ("+{n} fotos"). */
  maisLabel: string;
  /** Prefixo do rótulo acessível de cada botão ("Ampliar"). */
  ampliarLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const change = useCallback((index: number) => setActiveIndex(index), []);
  if (images.length === 0) return null;

  const restantes = images.length - 3;
  const tile =
    'group relative overflow-hidden rounded-panel-lg bg-media-backdrop text-left shadow-image-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand';
  const zoom = 'object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.025] motion-reduce:transform-none';

  return (
    <>
      <div className={images.length > 1 ? 'grid h-full gap-4 sm:grid-cols-[1.7fr_1fr]' : 'grid h-full'}>
        <button type="button" onClick={() => setActiveIndex(0)} className={`${tile} min-h-72 lg:min-h-0`} aria-label={`${ampliarLabel}: ${images[0].alt}`}>
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(min-width:1024px) 380px, 100vw" className={zoom} />
        </button>
        {images.length > 1 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:grid-rows-2">
            {images.slice(1, 3).map((image, i) => {
              const index = i + 1;
              const ultimo = index === 2 && restantes > 0;
              return (
                <button key={image.src} type="button" onClick={() => setActiveIndex(index)} className={`${tile} min-h-36 sm:min-h-0`} aria-label={`${ampliarLabel}: ${image.alt}`}>
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 220px, 50vw" className={zoom} />
                  {ultimo ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-media-backdrop/55 font-display text-xl text-on-media transition-colors group-hover:bg-media-backdrop/40">
                      {maisLabel.replace('{n}', String(restantes))}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
      <PatiLightbox images={images} activeIndex={activeIndex} onChange={change} onClose={close} />
    </>
  );
}
