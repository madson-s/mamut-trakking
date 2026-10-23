'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Button, CaretDownIcon, IconButton, Text, XIcon } from '@/components/ui';
import type { Locale } from '@/lib/site';
import type { PatiGalleryImage } from './patiGallery';

/** Textos do lightbox por idioma; `{n}` e `{t}` viram número da foto e total. */
export const LIGHTBOX_LABELS: Record<Locale, {
  voltar: string;
  fechar: string;
  anterior: string;
  proxima: string;
  miniaturas: string;
  mostrar: string;
  foto: string;
  ampliar: string;
}> = {
  pt: { voltar: 'Voltar ao destino', fechar: 'Fechar galeria e voltar ao destino', anterior: 'Foto anterior', proxima: 'Próxima foto', miniaturas: 'Miniaturas da galeria', mostrar: 'Mostrar foto {n}', foto: 'Foto {n} de {t}', ampliar: 'Ampliar' },
  en: { voltar: 'Back to the trip', fechar: 'Close gallery', anterior: 'Previous photo', proxima: 'Next photo', miniaturas: 'Gallery thumbnails', mostrar: 'Show photo {n}', foto: 'Photo {n} of {t}', ampliar: 'Enlarge' },
  es: { voltar: 'Volver al destino', fechar: 'Cerrar galería', anterior: 'Foto anterior', proxima: 'Foto siguiente', miniaturas: 'Miniaturas de la galería', mostrar: 'Mostrar foto {n}', foto: 'Foto {n} de {t}', ampliar: 'Ampliar' },
  fr: { voltar: 'Retour à la destination', fechar: 'Fermer la galerie', anterior: 'Photo précédente', proxima: 'Photo suivante', miniaturas: 'Miniatures de la galerie', mostrar: 'Afficher la photo {n}', foto: 'Photo {n} sur {t}', ampliar: 'Agrandir' },
  nl: { voltar: 'Terug naar de bestemming', fechar: 'Galerij sluiten', anterior: 'Vorige foto', proxima: 'Volgende foto', miniaturas: 'Miniaturen van de galerij', mostrar: 'Toon foto {n}', foto: 'Foto {n} van {t}', ampliar: 'Vergroten' },
  de: { voltar: 'Zurück zum Ziel', fechar: 'Galerie schließen', anterior: 'Vorheriges Foto', proxima: 'Nächstes Foto', miniaturas: 'Galerie-Miniaturen', mostrar: 'Foto {n} anzeigen', foto: 'Foto {n} von {t}', ampliar: 'Vergrößern' },
};

type PatiLightboxProps = {
  images: readonly PatiGalleryImage[];
  /** Idioma dos botões e rótulos (padrão: pt). */
  locale?: Locale;
  /** Linha de cima do cabeçalho: o nome do roteiro. */
  title?: string;
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function PatiLightbox({ images, locale = 'pt', title = 'Vale do Pati · 3 Dias', activeIndex, onChange, onClose }: PatiLightboxProps) {
  const t = LIGHTBOX_LABELS[locale];
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % images.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, images.length, onChange, onClose]);

  if (activeIndex === null || typeof document === 'undefined') return null;

  const image = images[activeIndex];
  const previous = (activeIndex - 1 + images.length) % images.length;
  const next = (activeIndex + 1) % images.length;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex bg-black/88 p-3 backdrop-blur-md sm:p-5"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${t.foto.replace('{n}', String(activeIndex + 1)).replace('{t}', String(images.length))}: ${image.alt}`}
        tabIndex={-1}
        className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col overflow-hidden rounded-panel border border-white/16 bg-[#111312] text-white shadow-popover outline-none"
      >
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-white/12 px-4 sm:px-6">
          <div className="min-w-0">
            <Text size="xs" className="text-white/55">{title}</Text>
            <Text size="sm" className="truncate text-white">{image.alt}</Text>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Text size="sm" className="tabular-nums text-white/70">{activeIndex + 1} / {images.length}</Text>
            <span className="hidden sm:block">
              <Button variant="outlineOnMedia" size="sm" onClick={onClose}>{t.voltar}</Button>
            </span>
            <IconButton label={t.fechar} variant="outline" size="sm" onClick={onClose} className="!size-10 !border-white/35 !text-white hover:!border-brand sm:hidden">
              <XIcon className="size-4" />
            </IconButton>
          </div>
        </header>

        <div className="relative min-h-0 flex-1">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain p-2 sm:p-6"
          />
          <IconButton label={t.anterior} variant="outline" size="lg" onClick={() => onChange(previous)} className="absolute top-1/2 left-3 !size-11 -translate-y-1/2 !border-white/35 !bg-black/30 !text-white backdrop-blur-sm hover:!bg-brand sm:left-6">
            <CaretDownIcon className="size-5 rotate-90" />
          </IconButton>
          <IconButton label={t.proxima} variant="outline" size="lg" onClick={() => onChange(next)} className="absolute top-1/2 right-3 !size-11 -translate-y-1/2 !border-white/35 !bg-black/30 !text-white backdrop-blur-sm hover:!bg-brand sm:right-6">
            <CaretDownIcon className="size-5 -rotate-90" />
          </IconButton>
        </div>

        <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-white/12 p-3 sm:justify-center sm:p-4" aria-label={t.miniaturas}>
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={t.mostrar.replace('{n}', String(index + 1))}
              aria-pressed={index === activeIndex}
              onClick={() => onChange(index)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-card border transition-[border-color,opacity,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${index === activeIndex ? 'scale-[1.03] border-brand opacity-100' : 'border-white/16 opacity-55 hover:opacity-100'}`}
            >
              <Image src={item.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
