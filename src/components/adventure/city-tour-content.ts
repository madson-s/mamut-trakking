/**
 * Conteúdo da página do City Tour em Lençóis, por idioma.
 *
 * PT vem de mamut.agency/aventuras/city-tour-em-lencois-ba e EN de
 * mamut.agency/en/aventuras/lencois-historic-center-guided-walking-tour.
 * ES é tradução feita aqui.
 *
 * É o único roteiro do site que dura 1 hora e não sai da cidade — daí a faixa
 * de números não trazer deslocamento de carro (a fonte marca 0 km).
 *
 * ⚠️ O checklist da fonte é o de trilha, colado por engano (o título na página
 * ainda diz "O que levar para o Cachoeirão do Pati?" e pede bota de caminhada
 * para um passeio de 1 hora no calçamento). Escrevi um checklist condizente
 * com o passeio; confira com a operadora.
 *
 * ⚠️ A aba "O que está incluso" também é boilerplate de trilha e lista
 * "Transfers in-out" num roteiro de 0 km de carro. Segui o cartão de preços da
 * própria página, que lista guia, arquitetura, história, cultura e cotidiano.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL } from './day-tour-legal';

export const CITY_TOUR_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/city-tour/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/city-tour/1.jpeg', width: 1536, height: 1229 },
    { src: '/img/adventures/city-tour/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/city-tour/3.jpeg', width: 2364, height: 1330 },
  ],
  stats: [
    ['1 km', '/svg/_icons/icon_03_montain.svg'],
    ['1 hora', '/svg/_icons/icon_11_calendar.svg'],
    ['13 pontos', '/svg/_icons/icon_10_home.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 50,
};

export const CITY_TOUR_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'City Tour em Lençóis',
      description:
        'Uma hora a pé pelo centro histórico de Lençóis: Praça Horácio de Matos, Mercado Cultural, Igreja Senhor dos Passos e a era dos diamantes.',
      canonical: '/pt/aventuras/city-tour-em-lencois-ba',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 hora',
      titulo: 'City Tour em Lençóis.',
      lead: 'Uma hora a pé para entender por que esta cidade existe — e o que os diamantes deixaram nela.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Pontos visitados', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o City Tour.',
      paragrafos: [
        'Lençóis não é só a base de onde se sai para as trilhas: é uma cidade que nasceu do garimpo e entrou no circuito global dos diamantes no século XIX. Uma hora a pé pelo centro histórico explica o resto da sua semana na Chapada.',
        'O percurso passa pela Praça Horácio de Matos, pelo antigo Consulado Francês, pelo Mercado Cultural, pela Igreja Senhor dos Passos, pela Rua das Pedras e pelo Hotel de Lençóis, onde ainda se veem ferramentas usadas pelos garimpeiros há dois séculos.',
        'Não é um tour só de arquitetura. Entram a era dos coronéis, a fé dos garimpeiros, o cotidiano de quem mora aqui hoje e a parte incômoda da história — o Mercado Cultural também foi usado para a venda de pessoas escravizadas.',
        'Como sai do escritório da Mamut e não usa carro, é o roteiro mais fácil de encaixar: cabe na tarde de chegada ou na manhã antes do transfer.',
      ],
    },
    itinerario: {
      titulo: 'Como é o passeio.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Começo a pé no escritório da Mamut e poucos metros até a Praça Horácio de Matos: construções históricas como o antigo Consulado Francês e a Loja Magnólia, a era dos coronéis e o papel de Lençóis no circuito global dos diamantes.',
        'Mercado Cultural, prédio histórico que já foi usado para a venda de diamantes, de ferramentas e de pessoas escravizadas.',
        'Travessia da ponte histórica, de arquitetura única, até a Igreja Senhor dos Passos — dedicada ao santo dos antigos garimpeiros.',
        'Volta ao Mercado Cultural e subida pela Rua das Pedras, antiga rua calçada com pedras de rio, com histórias dos garimpeiros e do cotidiano de ontem e de hoje. Segue pela Rua da Baderna.',
        'Igreja do Rosário, a igreja "oficial" da cidade, e o Memorial Afrânio Peixoto na mesma praça — personagem nativo de Lençóis, importante e controverso.',
        'Rua da Boa Vista, com a arquitetura colonial das casas e a organização urbana da cidade, até o Hotel de Lençóis: prédio antigo usado para lapidação de diamantes, com ferramentas de dois séculos atrás.',
        'Retorno ao centro passando por construções antigas e pela Associação Mineira, entidade social que preserva a memória dos garimpeiros.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 75', nota: 'Mínimo de 2 pessoas. Só o seu grupo com o guia.' },
        { titulo: 'Em grupo', preco: 'R$ 50', nota: 'De 4 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'É um passeio de uma hora dentro da cidade, então a lista é curta. Itens marcados com * são obrigatórios.',
        requiredColumns: [
          ['Calçado confortável', 'Água', 'Documento de identificação'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais'],
        ],
        recommendedColumns: [['Capa de chuva', 'Câmera'], ['Dinheiro para o Mercado Cultural']],
        note: 'A Rua das Pedras é calçada com pedra de rio, irregular por natureza — calçado fechado e firme ajuda mais do que parece.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local credenciado com treinamento APH', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Lanche ou refeição', 'Compras no Mercado Cultural', 'Ingressos de museus ou memoriais', 'Evacuação médica', 'Hospedagem'],
      },
      {
        type: 'seasons',
        title: 'Quando visitar Lençóis',
        facts: [
          ['Verão e outono (jan–mai)', 'Cachoeiras cheias; jan–mar é alta temporada'],
          ['Inverno e primavera (jun–dez)', 'Terreno mais firme, menos volume de água'],
          ['Fim de junho a julho', 'Segunda alta temporada'],
        ],
        notes: [
          'Não existe melhor época absoluta — depende do que você quer ver.',
          'O city tour funciona o ano inteiro: é a única atividade que não depende do nível dos rios.',
        ],
      },
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para conhecer', 'a cidade que os diamantes fizeram?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Lençóis Historic Centre Walking Tour',
      description:
        'An hour on foot through the historic centre of Lençóis: Horácio de Matos Square, the Cultural Market, Senhor dos Passos Church and the diamond era.',
      canonical: '/en/adventures/lencois-historic-center-guided-walking-tour',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 hour',
      titulo: 'Lençóis Walking Tour.',
      lead: 'An hour on foot to understand why this town exists — and what the diamonds left behind in it.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Stops on the route', 'Difficulty'],
    sobre: {
      titulo: 'About the walking tour.',
      paragrafos: [
        'Lençóis is not just the base you leave from to reach the trails: it is a town born of diamond mining that entered the global diamond trade in the 19th century. An hour on foot through the historic centre explains the rest of your week in the Chapada.',
        'The route takes in Horácio de Matos Square, the old French Consulate, the Cultural Market, Senhor dos Passos Church, Rua das Pedras and the Hotel de Lençóis, where you can still see tools used by miners two centuries ago.',
        'It is not only a tour of architecture. It covers the era of the colonels, the faith of the miners, the daily life of the people who live here now, and the uncomfortable part of the history — the Cultural Market was also used for the sale of enslaved people.',
        'Because it starts at the Mamut office and uses no vehicle, it is the easiest trip to fit in: it works on the afternoon you arrive or the morning before your transfer.',
      ],
    },
    itinerario: {
      titulo: 'How the tour goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'We start on foot at the Mamut office and walk a few metres to Horácio de Matos Square: historic buildings such as the old French Consulate and the Magnólia store, the era of the colonels, and the part Lençóis played in the global diamond trade.',
        'The Cultural Market, a historic building once used for the sale of diamonds, of tools and of enslaved people.',
        'Across the historic bridge, with its distinctive architecture, to Senhor dos Passos Church — dedicated to the saint of the old miners.',
        'Back to the Cultural Market and up Rua das Pedras, an old street paved with river stones, with stories of the miners and of daily life then and now. On along Rua da Baderna.',
        "Rosário Church, the town's “official” church, and the Afrânio Peixoto Memorial on the same square — a figure native to Lençóis, important and controversial in equal measure.",
        'Rua da Boa Vista, with the colonial architecture of its houses and the urban layout of the town, to the Hotel de Lençóis: an old building once used for cutting diamonds, holding tools from two centuries ago.',
        "Back to the centre past old buildings and the Associação Mineira, a social body that keeps the miners' memory alive.",
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 75', nota: 'Minimum of 2 people. Just your group with the guide.' },
        { titulo: 'Group tour', preco: 'R$ 50', nota: 'From 4 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'This is a one-hour walk inside town, so the list is short. Items marked * are mandatory.',
        requiredColumns: [
          ['Comfortable shoes', 'Water', 'Photo ID'],
          ['Cap or hat', 'Sunscreen', 'Personal medication'],
        ],
        recommendedColumns: [['Rain gear', 'Camera'], ['Cash for the Cultural Market']],
        note: 'Rua das Pedras is paved with river stones and uneven by nature — closed, sturdy shoes help more than you would expect.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Accredited local guide with first-aid training', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Snack or meal', 'Purchases at the Cultural Market', 'Museum or memorial tickets', 'Medical evacuation', 'Accommodation'],
      },
      {
        type: 'seasons',
        title: 'When to visit Lençóis',
        facts: [
          ['Summer and autumn (Jan–May)', 'Full waterfalls; Jan–Mar is high season'],
          ['Winter and spring (Jun–Dec)', 'Firmer ground, less water in the falls'],
          ['Late June to July', 'A second high season'],
        ],
        notes: [
          'There is no single best season — it depends on what you want to see.',
          'The walking tour works year-round: it is the one activity that does not depend on river levels.',
        ],
      },
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to meet', 'the town the diamonds built?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'City Tour en Lençóis',
      description:
        'Una hora a pie por el centro histórico de Lençóis: Plaza Horácio de Matos, Mercado Cultural, Iglesia Senhor dos Passos y la era de los diamantes.',
      canonical: '/es/aventuras/city-tour-lencois',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 hora',
      titulo: 'City Tour en Lençóis.',
      lead: 'Una hora a pie para entender por qué existe esta ciudad — y qué le dejaron los diamantes.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Puntos visitados', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el City Tour.',
      paragrafos: [
        'Lençóis no es solo la base desde donde se sale a los senderos: es una ciudad que nació de la minería y entró en el circuito global de los diamantes en el siglo XIX. Una hora a pie por el centro histórico explica el resto de tu semana en la Chapada.',
        'El recorrido pasa por la Plaza Horácio de Matos, el antiguo Consulado Francés, el Mercado Cultural, la Iglesia Senhor dos Passos, la Rua das Pedras y el Hotel de Lençóis, donde todavía se ven herramientas usadas por los mineros hace dos siglos.',
        'No es un tour solo de arquitectura. Entran la era de los coroneles, la fe de los mineros, el cotidiano de quien vive acá hoy y la parte incómoda de la historia — el Mercado Cultural también se usó para la venta de personas esclavizadas.',
        'Como sale de la oficina de Mamut y no usa auto, es el recorrido más fácil de encajar: entra en la tarde de llegada o en la mañana antes del traslado.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el paseo.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Comienzo a pie en la oficina de Mamut y pocos metros hasta la Plaza Horácio de Matos: construcciones históricas como el antiguo Consulado Francés y la Tienda Magnólia, la era de los coroneles y el papel de Lençóis en el circuito global de los diamantes.',
        'Mercado Cultural, edificio histórico que se usó para la venta de diamantes, de herramientas y de personas esclavizadas.',
        'Cruce del puente histórico, de arquitectura única, hasta la Iglesia Senhor dos Passos — dedicada al santo de los antiguos mineros.',
        'Vuelta al Mercado Cultural y subida por la Rua das Pedras, antigua calle empedrada con piedras de río, con historias de los mineros y del cotidiano de ayer y de hoy. Sigue por la Rua da Baderna.',
        'Iglesia do Rosário, la iglesia "oficial" de la ciudad, y el Memorial Afrânio Peixoto en la misma plaza — personaje nativo de Lençóis, importante y controvertido.',
        'Rua da Boa Vista, con la arquitectura colonial de las casas y la organización urbana de la ciudad, hasta el Hotel de Lençóis: edificio antiguo usado para el tallado de diamantes, con herramientas de hace dos siglos.',
        'Regreso al centro pasando por construcciones antiguas y por la Associação Mineira, entidad social que preserva la memoria de los mineros.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 75', nota: 'Mínimo de 2 personas. Solo tu grupo con el guía.' },
        { titulo: 'En grupo', preco: 'R$ 50', nota: 'De 4 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Es un paseo de una hora dentro de la ciudad, así que la lista es corta. Los ítems marcados con * son obligatorios.',
        requiredColumns: [
          ['Calzado cómodo', 'Agua', 'Documento de identidad'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales'],
        ],
        recommendedColumns: [['Piloto de lluvia', 'Cámara'], ['Efectivo para el Mercado Cultural']],
        note: 'La Rua das Pedras está empedrada con piedra de río, irregular por naturaleza — calzado cerrado y firme ayuda más de lo que parece.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local acreditado con formación en primeros auxilios', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Snack o comida', 'Compras en el Mercado Cultural', 'Entradas de museos o memoriales', 'Evacuación médica', 'Alojamiento'],
      },
      {
        type: 'seasons',
        title: 'Cuándo visitar Lençóis',
        facts: [
          ['Verano y otoño (ene–may)', 'Cascadas llenas; ene–mar es alta temporada'],
          ['Invierno y primavera (jun–dic)', 'Terreno más firme, menos volumen de agua'],
          ['Fin de junio a julio', 'Segunda alta temporada'],
        ],
        notes: [
          'No existe una mejor época absoluta — depende de lo que quieras ver.',
          'El city tour funciona todo el año: es la única actividad que no depende del nivel de los ríos.',
        ],
      },
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para conocer', 'la ciudad que hicieron los diamantes?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Visite guidée de Lençóis',
      description:
        'Une heure à pied dans le centre historique de Lençóis : la praça Horácio de Matos, le Mercado Cultural, l’église Senhor dos Passos et l’époque des diamants.',
      canonical: '/fr/aventures/visite-de-lencois',
    },
    hero: {
      nivel: 'Facile',
      origem: 'Départ : Lençóis',
      duracao: '1 heure',
      titulo: 'Visite guidée de Lençóis.',
      lead: 'Une heure à pied pour comprendre pourquoi cette ville existe — et ce que les diamants y ont laissé.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Lieux visités', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la visite guidée.',
      paragrafos: [
        'Lençóis n’est pas seulement le point de départ des randonnées : c’est une ville née de l’orpaillage, entrée dans le circuit mondial des diamants au XIXe siècle. Une heure à pied dans le centre historique éclaire tout le reste de votre semaine dans la Chapada.',
        'Le parcours passe par la praça Horácio de Matos, l’ancien consulat de France, le Mercado Cultural, l’église Senhor dos Passos, la Rua das Pedras et l’Hotel de Lençóis, où l’on voit encore des outils utilisés par les chercheurs de diamants il y a deux siècles.',
        'Ce n’est pas qu’une visite d’architecture. On y parle de l’époque des « coronéis », de la foi des chercheurs de diamants, du quotidien de ceux qui vivent ici aujourd’hui et du côté sombre de l’histoire — le Mercado Cultural a aussi servi à la vente de personnes réduites en esclavage.',
        'Comme elle part du bureau de Mamut et se fait sans voiture, c’est l’activité la plus facile à caser : elle tient dans l’après-midi de votre arrivée ou dans la matinée avant votre transfert.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la visite.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à pied du bureau de Mamut et quelques mètres jusqu’à la praça Horácio de Matos : des bâtiments historiques comme l’ancien consulat de France et la Loja Magnólia, l’époque des « coronéis » et le rôle de Lençóis dans le circuit mondial des diamants.',
        'Le Mercado Cultural, bâtiment historique qui a servi à la vente de diamants, d’outils et de personnes réduites en esclavage.',
        'Traversée du pont historique, à l’architecture unique, jusqu’à l’église Senhor dos Passos — dédiée au saint des anciens chercheurs de diamants.',
        'Retour au Mercado Cultural et montée par la Rua das Pedras, ancienne rue pavée de pierres de rivière, avec des histoires de chercheurs de diamants et du quotidien d’hier et d’aujourd’hui. On continue par la Rua da Baderna.',
        'L’église do Rosário, l’église « officielle » de la ville, et le mémorial Afrânio Peixoto sur la même place — personnage natif de Lençóis, important et controversé.',
        'La Rua da Boa Vista, avec l’architecture coloniale de ses maisons et l’organisation urbaine de la ville, jusqu’à l’Hotel de Lençóis : un bâtiment ancien utilisé pour la taille des diamants, avec des outils vieux de deux siècles.',
        'Retour au centre en passant devant d’anciennes constructions et l’Associação Mineira, association qui préserve la mémoire des chercheurs de diamants.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 75', nota: 'Minimum 2 personnes. Seul votre groupe avec le guide.' },
        { titulo: 'En groupe', preco: 'R$ 50', nota: 'De 4 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'C’est une visite d’une heure en ville, donc la liste est courte. Les éléments marqués d’un * sont obligatoires.',
        requiredColumns: [
          ['Chaussures confortables', 'Eau', 'Pièce d’identité'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels'],
        ],
        recommendedColumns: [['Imperméable', 'Appareil photo'], ['De l’argent pour le Mercado Cultural']],
        note: 'La Rua das Pedras est pavée de pierres de rivière, irrégulières par nature — des chaussures fermées et stables aident plus qu’on ne le pense.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide local agréé formé aux premiers secours (APH)', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'En-cas ou repas', 'Achats au Mercado Cultural', 'Entrées de musées ou de mémoriaux', 'Évacuation médicale', 'Hébergement'],
      },
      {
        type: 'seasons',
        title: 'Quand visiter Lençóis',
        facts: [
          ['Été et automne (janv.–mai)', 'Cascades pleines ; janv.–mars, c’est la haute saison'],
          ['Hiver et printemps (juin–déc.)', 'Terrain plus ferme, moins de débit'],
          ['Fin juin à juillet', 'Deuxième haute saison'],
        ],
        notes: [
          'Il n’existe pas de meilleure saison absolue — tout dépend de ce que vous voulez voir.',
          'La visite guidée fonctionne toute l’année : c’est la seule activité qui ne dépend pas du niveau des rivières.',
        ],
      },
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à découvrir', 'la ville née des diamants ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Stadswandeling door het historische centrum van Lençóis',
      description:
        'Een uur te voet door het historische centrum van Lençóis: de Praça Horácio de Matos, de Mercado Cultural, de kerk Senhor dos Passos en het tijdperk van de diamanten.',
      canonical: '/nl/avonturen/stadstour-lencois',
    },
    hero: {
      nivel: 'Licht',
      origem: 'Vertrek: Lençóis',
      duracao: '1 uur',
      titulo: 'Stadswandeling Lençóis.',
      lead: 'Een uur te voet om te begrijpen waarom dit stadje bestaat — en wat de diamanten er hebben achtergelaten.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Stops op de route', 'Zwaarte'],
    sobre: {
      titulo: 'Over de stadswandeling.',
      paragrafos: [
        'Lençóis is niet alleen de uitvalsbasis voor de paden: het is een stadje dat is ontstaan uit de diamantwinning en in de 19e eeuw deel werd van de wereldwijde diamanthandel. Een uur te voet door het historische centrum verklaart de rest van je week in de Chapada.',
        'De route gaat langs de Praça Horácio de Matos, het oude Franse consulaat, de Mercado Cultural, de kerk Senhor dos Passos, de Rua das Pedras en het Hotel de Lençóis, waar je nog gereedschap ziet dat mijnwerkers twee eeuwen geleden gebruikten.',
        'Het is niet alleen een architectuurtour. Hij gaat over het tijdperk van de kolonels, het geloof van de mijnwerkers, het dagelijks leven van de mensen die hier nu wonen, en het ongemakkelijke deel van de geschiedenis — de Mercado Cultural werd ook gebruikt voor de verkoop van tot slaaf gemaakte mensen.',
        'Omdat hij begint bij het kantoor van Mamut en er geen voertuig aan te pas komt, is dit de makkelijkste tocht om in te passen: hij past op de middag van je aankomst of op de ochtend voor je transfer.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de tour.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'We beginnen te voet bij het kantoor van Mamut en lopen een paar meter naar de Praça Horácio de Matos: historische gebouwen zoals het oude Franse consulaat en de winkel Magnólia, het tijdperk van de kolonels en de rol die Lençóis speelde in de wereldwijde diamanthandel.',
        'De Mercado Cultural, een historisch gebouw dat vroeger werd gebruikt voor de verkoop van diamanten, van gereedschap en van tot slaaf gemaakte mensen.',
        'Over de historische brug, met zijn kenmerkende architectuur, naar de kerk Senhor dos Passos — gewijd aan de heilige van de oude mijnwerkers.',
        'Terug naar de Mercado Cultural en omhoog door de Rua das Pedras, een oude straat geplaveid met rivierstenen, met verhalen over de mijnwerkers en het dagelijks leven van toen en nu. Verder via de Rua da Baderna.',
        'De kerk Rosário, de "officiële" kerk van het stadje, en op hetzelfde plein het Memorial Afrânio Peixoto — een figuur uit Lençóis, even belangrijk als omstreden.',
        'De Rua da Boa Vista, met de koloniale architectuur van de huizen en het stratenplan van het stadje, naar het Hotel de Lençóis: een oud gebouw waar vroeger diamanten werden geslepen, met gereedschap van twee eeuwen geleden.',
        'Terug naar het centrum langs oude gebouwen en de Associação Mineira, een vereniging die de herinnering aan de mijnwerkers levend houdt.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 75', nota: 'Minimaal 2 personen. Alleen jouw groep met de gids.' },
        { titulo: 'In een groep', preco: 'R$ 50', nota: 'Van 4 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Dit is een wandeling van een uur door het stadje, dus de lijst is kort. Items met een * zijn verplicht.',
        requiredColumns: [
          ['Comfortabele schoenen', 'Water', 'Identiteitsbewijs met foto'],
          ['Pet of hoed', 'Zonnebrand', 'Persoonlijke medicijnen'],
        ],
        recommendedColumns: [['Regenkleding', 'Camera'], ['Contant geld voor de Mercado Cultural']],
        note: 'De Rua das Pedras is geplaveid met rivierstenen en dus van nature oneffen — dichte, stevige schoenen helpen meer dan je zou denken.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Erkende lokale gids met EHBO-opleiding', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Snack of maaltijd', 'Aankopen op de Mercado Cultural', 'Toegang tot museum of memorial', 'Medische evacuatie', 'Overnachting'],
      },
      {
        type: 'seasons',
        title: 'Wanneer ga je naar Lençóis',
        facts: [
          ['Zomer en herfst (jan–mei)', 'Volle watervallen; jan–mrt is hoogseizoen'],
          ['Winter en lente (jun–dec)', 'Steviger terrein, minder water in de watervallen'],
          ['Eind juni tot juli', 'Een tweede hoogseizoen'],
        ],
        notes: [
          'Er is niet één beste seizoen — het hangt af van wat je wilt zien.',
          'De stadswandeling kan het hele jaar door: het is de enige activiteit die niet afhangt van de waterstand van de rivieren.',
        ],
      },
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om het stadje te leren kennen', 'dat de diamanten bouwden?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
};
