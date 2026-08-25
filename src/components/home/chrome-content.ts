/**
 * Textos e links do header e do footer da identidade nova, por idioma.
 *
 * Os três idiomas têm a MESMA navegação — só o texto muda. O href aponta para
 * a versão traduzida quando ela existe (o hub de aventuras) e cai na página em
 * português quando não existe (Quem Somos, Manifesto, Contato, que ainda não
 * foram traduzidas). Melhor mandar para o conteúdo em PT do que para um 404;
 * quando essas páginas ganharem versão EN/ES, é aqui que o href muda.
 */

import type { Locale } from '@/lib/site';
import { SITE } from '@/lib/site';
import type { MobileNavItem } from './MobileMenu';

export type ChromeColumn = {
  title: string;
  /** Colunas com `false` somem no mobile — o rodapé só mostra duas lá. */
  onMobile: boolean;
  links: { label: string; href: string }[];
};

export type ChromeContent = {
  home: string;
  nav: MobileNavItem[];
  menu: {
    open: string;
    close: string;
    heading: string;
    invite: string;
    whatsapp: string;
    language: string;
  };
  footer: {
    tagline: [string, string];
    place: string;
    columns: ChromeColumn[];
    rights: string;
    whatsapp: string;
  };
};

const TRIPADVISOR = 'https://www.tripadvisor.com.br/';
const INSTAGRAM = 'https://www.instagram.com/';

export const CHROME: Record<Locale, ChromeContent> = {
  pt: {
    home: '/pt',
    nav: [
      { label: 'Aventuras', href: '/pt/aventuras' },
      { label: 'Quem Somos', mobileLabel: 'Quem somos', href: '/pt/sobre' },
      { label: 'Manifesto', href: '/pt/manifesto' },
      { label: 'Dicas', mobileLabel: 'Dicas de trilha', href: '/pt/dicas' },
      { label: 'Contato', href: '/pt/contato' },
    ],
    menu: {
      open: 'Menu',
      close: 'Fechar menu',
      heading: 'Menu',
      invite: 'Cada caminho começa com uma conversa.',
      whatsapp: 'Falar no WhatsApp',
      language: 'Idioma',
    },
    footer: {
      tagline: ['Trekkings guiados por quem é', 'filho da Chapada Diamantina.'],
      place: 'LENÇÓIS · BAHIA · BRASIL',
      columns: [
        {
          title: 'AVENTURAS',
          onMobile: true,
          links: [
            { label: 'Roteiros', href: '/pt/aventuras' },
            { label: 'Vale do Pati', href: '/pt/aventuras/vale-do-pati-3-dias' },
            { label: 'Como se preparar', href: '/pt/dicas' },
            { label: 'Ficha do participante', href: '/pt/formulario-participante' },
          ],
        },
        {
          title: 'SOBRE',
          onMobile: true,
          links: [
            { label: 'Quem Somos', href: '/pt/sobre' },
            { label: 'Manifesto', href: '/pt/manifesto' },
            { label: 'Guias Nativos', href: '/pt/sobre#guias' },
          ],
        },
        {
          title: 'CONTATO',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: SITE.whatsappUrl },
            { label: 'TripAdvisor', href: TRIPADVISOR },
            { label: 'Instagram', href: INSTAGRAM },
          ],
        },
      ],
      rights: 'Todos os direitos reservados',
      whatsapp: 'Falar no WhatsApp',
    },
  },

  en: {
    home: '/en',
    nav: [
      { label: 'Adventures', href: '/en/adventures' },
      { label: 'About us', mobileLabel: 'About us', href: '/pt/sobre' },
      { label: 'Manifesto', href: '/pt/manifesto' },
      { label: 'Tips', mobileLabel: 'Trail tips', href: '/en/tips' },
      { label: 'Contact', href: '/pt/contato' },
    ],
    menu: {
      open: 'Menu',
      close: 'Close menu',
      heading: 'Menu',
      invite: 'Every trail starts with a conversation.',
      whatsapp: 'Talk on WhatsApp',
      language: 'Language',
    },
    footer: {
      tagline: ['Treks guided by those born', 'and raised in the Chapada Diamantina.'],
      place: 'LENÇÓIS · BAHIA · BRAZIL',
      columns: [
        {
          title: 'ADVENTURES',
          onMobile: true,
          links: [
            { label: 'All trips', href: '/en/adventures' },
            { label: 'Pati Valley', href: '/en/adventures/pati-valley-3-days' },
            { label: 'How to prepare', href: '/en/tips' },
            { label: 'Participant form', href: '/en/participant-form' },
          ],
        },
        {
          title: 'ABOUT',
          onMobile: true,
          links: [
            { label: 'About us', href: '/pt/sobre' },
            { label: 'Manifesto', href: '/pt/manifesto' },
            { label: 'Native guides', href: '/pt/sobre#guias' },
          ],
        },
        {
          title: 'CONTACT',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: SITE.whatsappUrl },
            { label: 'TripAdvisor', href: TRIPADVISOR },
            { label: 'Instagram', href: INSTAGRAM },
          ],
        },
      ],
      rights: 'All rights reserved',
      whatsapp: 'Talk on WhatsApp',
    },
  },

  es: {
    home: '/es',
    nav: [
      { label: 'Aventuras', href: '/es/aventuras' },
      { label: 'Quiénes Somos', mobileLabel: 'Quiénes somos', href: '/pt/sobre' },
      { label: 'Manifiesto', href: '/pt/manifesto' },
      { label: 'Consejos', mobileLabel: 'Consejos de sendero', href: '/es/consejos' },
      { label: 'Contacto', href: '/pt/contato' },
    ],
    menu: {
      open: 'Menú',
      close: 'Cerrar menú',
      heading: 'Menú',
      invite: 'Cada camino empieza con una conversación.',
      whatsapp: 'Hablar por WhatsApp',
      language: 'Idioma',
    },
    footer: {
      tagline: ['Trekkings guiados por quienes', 'nacieron en la Chapada Diamantina.'],
      place: 'LENÇÓIS · BAHÍA · BRASIL',
      columns: [
        {
          title: 'AVENTURAS',
          onMobile: true,
          links: [
            { label: 'Todos los recorridos', href: '/es/aventuras' },
            { label: 'Valle del Pati', href: '/es/aventuras/valle-del-pati-3-dias' },
            { label: 'Cómo prepararse', href: '/es/consejos' },
            { label: 'Ficha del participante', href: '/es/formulario-participante' },
          ],
        },
        {
          title: 'SOBRE',
          onMobile: true,
          links: [
            { label: 'Quiénes Somos', href: '/pt/sobre' },
            { label: 'Manifiesto', href: '/pt/manifesto' },
            { label: 'Guías nativos', href: '/pt/sobre#guias' },
          ],
        },
        {
          title: 'CONTACTO',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: SITE.whatsappUrl },
            { label: 'TripAdvisor', href: TRIPADVISOR },
            { label: 'Instagram', href: INSTAGRAM },
          ],
        },
      ],
      rights: 'Todos los derechos reservados',
      whatsapp: 'Hablar por WhatsApp',
    },
  },
};
