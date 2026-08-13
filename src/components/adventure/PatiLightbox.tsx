'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Button, CaretDownIcon, IconButton, Text, XIcon } from '@/components/ui';
import type { PatiGalleryImage } from './patiGallery';

type PatiLightboxProps = {
  images: readonly PatiGalleryImage[];
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function PatiLightbox({ images, activeIndex, onChange, onClose }: PatiLightboxProps) {
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
        aria-label={`Foto ${activeIndex + 1} de ${images.length}: ${image.alt}`}
        tabIndex={-1}
        className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col overflow-hidden rounded-panel border border-white/16 bg-[#111312] text-white shadow-popover outline-none"
      >
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-white/12 px-4 sm:px-6">
          <div className="min-w-0">
            <Text size="xs" className="text-white/55">Vale do Pati · 3 Dias</Text>
            <Text size="sm" className="truncate text-white">{image.alt}</Text>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Text size="sm" className="tabular-nums text-white/70">{activeIndex + 1} / {images.length}</Text>
            <span className="hidden sm:block">
              <Button variant="outlineOnMedia" size="sm" onClick={onClose}>Voltar ao destino</Button>
            </span>
            <IconButton label="Fechar galeria e voltar ao destino" variant="outline" size="sm" onClick={onClose} className="!size-10 !border-white/35 !text-white hover:!border-brand sm:hidden">
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
          <IconButton label="Foto anterior" variant="outline" size="lg" onClick={() => onChange(previous)} className="absolute top-1/2 left-3 !size-11 -translate-y-1/2 !border-white/35 !bg-black/30 !text-white backdrop-blur-sm hover:!bg-brand sm:left-6">
            <CaretDownIcon className="size-5 rotate-90" />
          </IconButton>
          <IconButton label="Próxima foto" variant="outline" size="lg" onClick={() => onChange(next)} className="absolute top-1/2 right-3 !size-11 -translate-y-1/2 !border-white/35 !bg-black/30 !text-white backdrop-blur-sm hover:!bg-brand sm:right-6">
            <CaretDownIcon className="size-5 -rotate-90" />
          </IconButton>
        </div>

        <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-white/12 p-3 sm:justify-center sm:p-4" aria-label="Miniaturas da galeria">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Mostrar foto ${index + 1}`}
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
