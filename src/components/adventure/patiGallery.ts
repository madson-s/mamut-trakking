export type PatiGalleryImage = {
  src: string;
  alt: string;
};

export const PATI_GALLERY_IMAGES: readonly PatiGalleryImage[] = [
  { src: '/img/vale-do-pati/vale-do-pati-04.webp', alt: 'Caminhantes diante dos paredões do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-06.webp', alt: 'Caminhantes celebrando em um mirante do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-02.webp', alt: 'Guia da Mamut observando o Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-14.webp', alt: 'Trilha entre as formações do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-20.webp', alt: 'Vista panorâmica do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-11.webp', alt: 'Caminho de pedra entre a vegetação do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-18.webp', alt: 'Paredões e campos verdes do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-22.webp', alt: 'Grupo percorrendo as trilhas do Vale do Pati' },
] as const;
