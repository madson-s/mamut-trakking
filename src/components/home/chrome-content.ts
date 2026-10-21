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
import { PRIVACIDADE_HREF } from '@/components/privacidade/privacidade-content';
import type { MobileNavItem } from './MobileMenu';
import { whatsappLink } from '@/lib/whatsapp';

export type ChromeColumn = {
  title: string;
  /** Colunas com `false` somem no mobile — o rodapé só mostra duas lá. */
  onMobile: boolean;
  links: { label: string; href: string }[];
};

export type ChromeContent = {
  home: string;
  /** Botão de WhatsApp na barra do desktop. */
  whatsapp: string;
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
    /** Link legal na linha de baixo, ao lado dos direitos. */
    privacy: { label: string; href: string };
    whatsapp: string;
  };
};

export const CHROME: Record<Locale, ChromeContent> = {
  pt: {
    home: '/pt',
    whatsapp: 'Falar no WhatsApp',
    nav: [
      { label: 'Aventuras', href: '/pt/aventuras', children: [{ label: 'Vale do Pati', href: '/pt/aventuras/vale-do-pati-03-dias' }] },
      { label: 'Grupos', mobileLabel: 'Calendário e grupos', href: '/pt/calendario-e-grupos' },
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
            { label: 'Próximas saídas', href: '/pt/calendario-e-grupos' },
            { label: 'Vale do Pati', href: '/pt/aventuras/vale-do-pati-03-dias' },
            { label: 'Como se preparar', href: '/pt/dicas' },
          ],
        },
        {
          title: 'SOBRE',
          onMobile: true,
          links: [
            { label: 'Quem Somos', href: '/pt/sobre' },
            { label: 'Manifesto', href: '/pt/manifesto' },
            { label: 'Guias Nativos', href: '/pt/sobre#guias' },
            { label: 'Perguntas frequentes', href: '/pt/perguntas-frequentes' },
          ],
        },
        {
          title: 'CONTATO',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('pt') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'Todos os direitos reservados',
      privacy: { label: 'Política de privacidade', href: PRIVACIDADE_HREF.pt },
      whatsapp: 'Falar no WhatsApp',
    },
  },

  en: {
    home: '/en',
    whatsapp: 'Talk on WhatsApp',
    nav: [
      { label: 'Adventures', href: '/en/adventures', children: [{ label: 'Pati Valley', href: '/en/adventures/pati-valley-3-days' }] },
      { label: 'Group trips', mobileLabel: 'Calendar and groups', href: '/en/calendar-and-groups' },
      { label: 'About us', mobileLabel: 'About us', href: '/en/about' },
      { label: 'Manifesto', href: '/en/manifesto' },
      { label: 'Tips', mobileLabel: 'Trail tips', href: '/en/tips' },
      { label: 'Contact', href: '/en/contact' },
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
            { label: 'Upcoming departures', href: '/en/calendar-and-groups' },
            { label: 'Pati Valley', href: '/en/adventures/pati-valley-3-days' },
            { label: 'How to prepare', href: '/en/tips' },
          ],
        },
        {
          title: 'ABOUT',
          onMobile: true,
          links: [
            { label: 'About us', href: '/en/about' },
            { label: 'Manifesto', href: '/en/manifesto' },
            { label: 'Native guides', href: '/en/about#guias' },
            { label: 'FAQ', href: '/en/faq' },
          ],
        },
        {
          title: 'CONTACT',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('en') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'All rights reserved',
      privacy: { label: 'Privacy policy', href: PRIVACIDADE_HREF.en },
      whatsapp: 'Talk on WhatsApp',
    },
  },

  es: {
    home: '/es',
    whatsapp: 'Hablar por WhatsApp',
    nav: [
      { label: 'Aventuras', href: '/es/aventuras', children: [{ label: 'Valle del Pati', href: '/es/aventuras/valle-del-pati-3-dias' }] },
      { label: 'Grupos', mobileLabel: 'Calendario y grupos', href: '/es/calendario-y-grupos' },
      { label: 'Quiénes Somos', mobileLabel: 'Quiénes somos', href: '/es/quienes-somos' },
      { label: 'Manifiesto', href: '/es/manifiesto' },
      { label: 'Consejos', mobileLabel: 'Consejos de sendero', href: '/es/consejos' },
      { label: 'Contacto', href: '/es/contacto' },
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
            { label: 'Próximas salidas', href: '/es/calendario-y-grupos' },
            { label: 'Valle del Pati', href: '/es/aventuras/valle-del-pati-3-dias' },
            { label: 'Cómo prepararse', href: '/es/consejos' },
          ],
        },
        {
          title: 'SOBRE',
          onMobile: true,
          links: [
            { label: 'Quiénes Somos', href: '/es/quienes-somos' },
            { label: 'Manifiesto', href: '/es/manifiesto' },
            { label: 'Guías nativos', href: '/es/quienes-somos#guias' },
            { label: 'Preguntas frecuentes', href: '/es/preguntas-frecuentes' },
          ],
        },
        {
          title: 'CONTACTO',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('es') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'Todos los derechos reservados',
      privacy: { label: 'Política de privacidad', href: PRIVACIDADE_HREF.es },
      whatsapp: 'Hablar por WhatsApp',
    },
  },

  fr: {
    home: '/fr',
    whatsapp: 'Écrire sur WhatsApp',
    nav: [
      { label: 'Aventures', href: '/fr/aventures', children: [{ label: 'Vallée du Pati', href: '/fr/aventures/vallee-du-pati-3-jours' }] },
      { label: 'Groupes', mobileLabel: 'Calendrier et groupes', href: '/fr/calendrier-et-groupes' },
      { label: 'Qui sommes-nous', mobileLabel: 'Qui sommes-nous', href: '/fr/a-propos' },
      { label: 'Manifeste', href: '/fr/manifeste' },
      { label: 'Conseils', mobileLabel: 'Conseils de trek', href: '/fr/conseils' },
      { label: 'Contact', href: '/fr/contact' },
    ],
    menu: {
      open: 'Menu',
      close: 'Fermer le menu',
      heading: 'Menu',
      invite: 'Chaque sentier commence par une conversation.',
      whatsapp: 'Écrire sur WhatsApp',
      language: 'Langue',
    },
    footer: {
      tagline: ['Des treks guidés par des enfants', 'de la Chapada Diamantina.'],
      place: 'LENÇÓIS · BAHIA · BRÉSIL',
      columns: [
        {
          title: 'AVENTURES',
          onMobile: true,
          links: [
            { label: 'Tous les itinéraires', href: '/fr/aventures' },
            { label: 'Prochains départs', href: '/fr/calendrier-et-groupes' },
            { label: 'Vallée du Pati', href: '/fr/aventures/vallee-du-pati-3-jours' },
            { label: 'Se préparer', href: '/fr/conseils' },
          ],
        },
        {
          title: 'À PROPOS',
          onMobile: true,
          links: [
            { label: 'Qui sommes-nous', href: '/fr/a-propos' },
            { label: 'Manifeste', href: '/fr/manifeste' },
            { label: 'Guides locaux', href: '/fr/a-propos#guias' },
            { label: 'Questions fréquentes', href: '/fr/questions-frequentes' },
          ],
        },
        {
          title: 'CONTACT',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('fr') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'Tous droits réservés',
      privacy: { label: 'Politique de confidentialité', href: PRIVACIDADE_HREF.fr },
      whatsapp: 'Écrire sur WhatsApp',
    },
  },
  nl: {
    home: '/nl',
    whatsapp: 'Praat via WhatsApp',
    nav: [
      { label: 'Avonturen', href: '/nl/avonturen', children: [{ label: 'Vale do Pati', href: '/nl/avonturen/pati-vallei-3-dagen' }] },
      { label: 'Groepsreizen', mobileLabel: 'Kalender en groepen', href: '/nl/kalender-en-groepen' },
      { label: 'Over ons', mobileLabel: 'Over ons', href: '/nl/over-ons' },
      { label: 'Manifest', href: '/nl/manifest' },
      { label: 'Tips', mobileLabel: 'Tips voor onderweg', href: '/nl/tips' },
      { label: 'Contact', href: '/nl/contact' },
    ],
    menu: {
      open: 'Menu',
      close: 'Menu sluiten',
      heading: 'Menu',
      invite: 'Elk pad begint met een gesprek.',
      whatsapp: 'Praat via WhatsApp',
      language: 'Taal',
    },
    footer: {
      tagline: ['Trektochten met gidsen die geboren en getogen', 'zijn in de Chapada Diamantina.'],
      place: 'LENÇÓIS · BAHIA · BRAZILIË',
      columns: [
        {
          title: 'AVONTUREN',
          onMobile: true,
          links: [
            { label: 'Alle tochten', href: '/nl/avonturen' },
            { label: 'Komende vertrekdata', href: '/nl/kalender-en-groepen' },
            { label: 'Vale do Pati', href: '/nl/avonturen/pati-vallei-3-dagen' },
            { label: 'Hoe bereid je je voor', href: '/nl/tips' },
          ],
        },
        {
          title: 'OVER ONS',
          onMobile: true,
          links: [
            { label: 'Over ons', href: '/nl/over-ons' },
            { label: 'Manifest', href: '/nl/manifest' },
            { label: 'Lokale gidsen', href: '/nl/over-ons#guias' },
            { label: 'Veelgestelde vragen', href: '/nl/veelgestelde-vragen' },
          ],
        },
        {
          title: 'CONTACT',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('nl') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'Alle rechten voorbehouden',
      privacy: { label: 'Privacybeleid', href: PRIVACIDADE_HREF.nl },
      whatsapp: 'Praat via WhatsApp',
    },
  },
  de: {
    home: '/de',
    whatsapp: 'Per WhatsApp schreiben',
    nav: [
      { label: 'Abenteuer', href: '/de/abenteuer', children: [{ label: 'Vale do Pati', href: '/de/abenteuer/pati-tal-3-tage' }] },
      { label: 'Gruppenreisen', mobileLabel: 'Kalender und Gruppen', href: '/de/kalender-und-gruppen' },
      { label: 'Über uns', mobileLabel: 'Über uns', href: '/de/ueber-uns' },
      { label: 'Manifest', href: '/de/manifest' },
      { label: 'Tipps', mobileLabel: 'Reisetipps', href: '/de/tipps' },
      { label: 'Kontakt', href: '/de/kontakt' },
    ],
    menu: {
      open: 'Menü',
      close: 'Menü schließen',
      heading: 'Menü',
      invite: 'Jeder Weg beginnt mit einem Gespräch.',
      whatsapp: 'Per WhatsApp schreiben',
      language: 'Sprache',
    },
    footer: {
      tagline: ['Trekkingtouren mit Guides, die in der', 'Chapada Diamantina geboren und aufgewachsen sind.'],
      place: 'LENÇÓIS · BAHIA · BRASILIEN',
      columns: [
        {
          title: 'ABENTEUER',
          onMobile: true,
          links: [
            { label: 'Alle Touren', href: '/de/abenteuer' },
            { label: 'Nächste Termine', href: '/de/kalender-und-gruppen' },
            { label: 'Vale do Pati', href: '/de/abenteuer/pati-tal-3-tage' },
            { label: 'So bereitest du dich vor', href: '/de/tipps' },
          ],
        },
        {
          title: 'ÜBER UNS',
          onMobile: true,
          links: [
            { label: 'Über uns', href: '/de/ueber-uns' },
            { label: 'Manifest', href: '/de/manifest' },
            { label: 'Lokale Guides', href: '/de/ueber-uns#guias' },
            { label: 'Häufige Fragen', href: '/de/haeufige-fragen' },
          ],
        },
        {
          title: 'KONTAKT',
          onMobile: false,
          links: [
            { label: 'WhatsApp', href: whatsappLink('de') },
            { label: 'TripAdvisor', href: SITE.social.tripadvisor },
            { label: 'Instagram', href: SITE.social.instagram },
            { label: 'Facebook', href: SITE.social.facebook },
          ],
        },
      ],
      rights: 'Alle Rechte vorbehalten',
      privacy: { label: 'Datenschutzerklärung', href: PRIVACIDADE_HREF.de },
      whatsapp: 'Per WhatsApp schreiben',
    },
  },
};
