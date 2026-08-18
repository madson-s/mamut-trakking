'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { PatiLightbox } from './PatiLightbox';
import { PATI_GALLERY_IMAGES } from './patiGallery';

export function PatiHeroGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const change = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <>
      <div id="galeria" className="grid gap-4 sm:grid-cols-[1.7fr_1fr]">
        <button type="button" onClick={() => setActiveIndex(0)} className="group relative min-h-90 overflow-hidden rounded-panel-lg bg-media-backdrop text-left shadow-image-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:min-h-120" aria-label="Ampliar foto principal do Vale do Pati">
          <Image src={PATI_GALLERY_IMAGES[0].src} alt={PATI_GALLERY_IMAGES[0].alt} fill priority sizes="(min-width:1024px) 546px, 100vw" className="object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.02] motion-reduce:transform-none" />
          <span aria-hidden className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/8" />
        </button>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:grid-rows-2">
          {[1, 2].map((index) => (
            <button key={PATI_GALLERY_IMAGES[index].src} type="button" onClick={() => setActiveIndex(index)} className="group relative min-h-42 overflow-hidden rounded-panel-lg bg-media-backdrop text-left shadow-image-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:min-h-0" aria-label={`Ampliar: ${PATI_GALLERY_IMAGES[index].alt}`}>
              <Image src={PATI_GALLERY_IMAGES[index].src} alt={PATI_GALLERY_IMAGES[index].alt} fill sizes="(min-width:1024px) 301px, 50vw" className="object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.025] motion-reduce:transform-none" />
            </button>
          ))}
        </div>
      </div>
      <PatiLightbox images={PATI_GALLERY_IMAGES} activeIndex={activeIndex} onChange={change} onClose={close} />
    </>
  );
}
