/**
 * Conteúdo da página do Morro do Pai Inácio, por idioma.
 *
 * PT vem de mamut.agency/aventuras/morro-do-pai-inacio e EN de
 * mamut.agency/en/adventures/pai-inacio-hill. ES é tradução feita aqui.
 *
 * ⚠️ O preço de entrada diverge entre as duas páginas da operadora: a
 * portuguesa diz R$ 265 e a inglesa R$ 275. Mantive R$ 265 nos três idiomas,
 * que é o valor já registrado no hub de aventuras.
 *
 * Números, fotos e o texto legal compartilhado ficam no componente.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL } from './day-tour-legal';

export const PAI_INACIO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/pai-inacio/2-1.jpeg', position: '50% 62%' },
  galeria: [
    { src: '/img/adventures/pai-inacio/1.jpeg', width: 2365, height: 1330 },
    { src: '/img/adventures/pai-inacio/3-1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pai-inacio/4.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['2 km', '/svg/_icons/icon_03_montain.svg'],
    ['55 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['16h00', '/svg/_icons/icon_11_calendar.svg'],
    ['~18h30', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 265,
};

export const PAI_INACIO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Morro do Pai Inácio',
      description:
        'Pôr do sol no cartão-postal da Chapada Diamantina: caminhada curta de 2 km até o platô, com vista de 360° sobre o Vale do Capão.',
      canonical: '/pt/aventuras/morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Morro do Pai Inácio.',
      lead: 'O pôr do sol mais famoso da Chapada, no alto de um platô com vista de 360°.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Percurso de carro', 'Duração', 'Saída (Lençóis)', 'Retorno', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Morro do Pai Inácio.',
      paragrafos: [
        'O passeio começa no fim da tarde, para pegar o pôr do sol no alto do morro. A caminhada até o platô é curta e segura: de 15 a 30 minutos.',
        'Lá de cima aparecem o Morro do Camelo, o Vale dos Três Irmãos e muito mais. A saída é às 16h do centro de Lençóis, com retorno a partir das 18h30.',
        'Dá para combinar este passeio com o Parque da Muritiba, a Cachoeira do Sossego ou o Pantanal Marimbus — fale com o atendimento para montar o dia.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída a partir das 16h do centro de Lençóis. São 26 km — cerca de 40 minutos — no sentido Brasília pela BR-242, com paisagem boa o caminho inteiro até o desembarque.',
        'Na guarita de acesso o guia faz uma introdução sobre o atrativo e a caminhada começa. São 20 minutos de subida até o platô, com escadas, corrimãos e muita pedra pelo caminho.',
        'No alto, vista de 360°: Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia e Serra do Brejão.',
        'Depois do pôr do sol começa a descida pelo mesmo caminho, com atenção redobrada e seguindo o guia — a essa hora já está levemente escuro. Chegada a Lençóis por volta das 18h30.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 300', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 265', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Cartão: +5%, em até 12x. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (500ml por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Boné ou chapéu'],
          ['Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)'], ['Lanche ou fruta', 'Bastão de caminhada']],
        note: 'Precisa de alternativa para algum item? Fale com o atendimento antes da reserva.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local credenciado com treinamento APH', 'Transfer in-out', 'Seguro aventura', 'Kit de primeiros socorros', 'Taxas de acesso'],
        excluded: ['Qualquer item não listado', 'Lanche ou almoço', 'Equipamento pessoal', 'Evacuação médica', 'Hotéis e refeições antes ou após a atividade', 'Gorjetas'],
      },
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo: 'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      botao: 'Entrar para o bando',
    },
  },

  en: {
    meta: {
      title: 'Pai Inácio Hill',
      description:
        'Sunset at the postcard of the Chapada Diamantina: a short 2 km walk up to the plateau, with a 360° view over the Capão Valley.',
      canonical: '/en/adventures/pai-inacio-hill',
    },
    hero: {
      nivel: 'Light',
      origem: 'Starts in Lençóis',
      duracao: '1 day',
      titulo: 'Pai Inácio Hill.',
      lead: 'The most famous sunset in the Chapada, on top of a plateau with a 360° view.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Walking distance', 'Road section', 'Duration', 'Departure (Lençóis)', 'Return', 'Difficulty'],
    sobre: {
      titulo: 'About Pai Inácio Hill.',
      paragrafos: [
        'The tour starts in the late afternoon so we can catch the sunset from the top of the hill. The walk up to the plateau is short and safe: 15 to 30 minutes.',
        'From up there you see the Morro do Camelo, the Vale dos Três Irmãos and much more. We leave at 16:00 from the centre of Lençóis and return from 18:30.',
        'This tour can be combined with the Muritiba Park, the Sossego Waterfall or the Marimbus wetlands — talk to our team to put the day together.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any force majeure the team considers relevant.',
      corpo: [
        'Departure from 16:00 from the centre of Lençóis. It is 26 km — around 40 minutes — heading towards Brasília on the BR-242, with good scenery the whole way to the drop-off.',
        'At the access checkpoint the guide gives a brief introduction to the site and the hike begins. It is a 20-minute climb to the plateau, with stairs, handrails and plenty of rock along the way.',
        'At the top, a 360° view: Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia and Serra do Brejão.',
        'After sunset the descent starts on the same path, with extra care and always following the guide — by then it is slightly dark. Arrival in Lençóis around 18:30.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 300', nota: 'Minimum 2 people. Only your group on the tour.' },
        { titulo: 'In a group', preco: 'R$ 265', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. Card: +5%, up to 12 instalments. International transfer or a larger group: ask our team.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked with * are mandatory. Missing any mandatory item compromises the safety of the group and makes participation impossible.',
        requiredColumns: [
          ['Water (500 ml per person)', 'Hiking shoes or boots', 'Light clothing', 'Cap or hat'],
          ['Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your belongings'],
        ],
        recommendedColumns: [['Rain gear (body and backpack)'], ['A snack or fruit', 'Trekking pole']],
        note: 'Need an alternative for any item? Talk to our team before booking.',
      },
      {
        type: 'included',
        title: 'What is included / not included',
        included: ['Accredited local guide with APH training', 'Transfer in-out', 'Adventure insurance', 'First-aid kit', 'Entrance fees'],
        excluded: ['Anything not listed above', 'Snack or lunch', 'Personal equipment', 'Medical evacuation', 'Hotels and meals before or after the activity', 'Tips'],
      },
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo: 'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      botao: 'Join the herd',
    },
  },

  es: {
    meta: {
      title: 'Morro do Pai Inácio',
      description:
        'Atardecer en la postal de la Chapada Diamantina: caminata corta de 2 km hasta la meseta, con vista de 360° sobre el Valle del Capão.',
      canonical: '/es/aventuras/morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Liviano',
      origem: 'Sale de Lençóis',
      duracao: '1 día',
      titulo: 'Morro do Pai Inácio.',
      lead: 'El atardecer más famoso de la Chapada, en lo alto de una meseta con vista de 360°.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Tramo en auto', 'Duración', 'Salida (Lençóis)', 'Regreso', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Morro do Pai Inácio.',
      paragrafos: [
        'El paseo empieza al final de la tarde, para agarrar el atardecer en lo alto del morro. La caminata hasta la meseta es corta y segura: de 15 a 30 minutos.',
        'Desde arriba aparecen el Morro do Camelo, el Vale dos Três Irmãos y mucho más. La salida es a las 16h del centro de Lençóis, con regreso a partir de las 18h30.',
        'Se puede combinar este paseo con el Parque da Muritiba, la Cascada do Sossego o el Pantanal Marimbus — hablá con atención para armar el día.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a partir de las 16h del centro de Lençóis. Son 26 km — unos 40 minutos — en sentido Brasília por la BR-242, con buen paisaje todo el camino hasta el desembarque.',
        'En la garita de acceso el guía hace una introducción sobre el atractivo y empieza la caminata. Son 20 minutos de subida hasta la meseta, con escaleras, pasamanos y mucha piedra en el camino.',
        'Arriba, vista de 360°: Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia y Serra do Brejão.',
        'Después del atardecer empieza la bajada por el mismo camino, con atención redoblada y siguiendo al guía — a esa hora ya está algo oscuro. Llegada a Lençóis alrededor de las 18h30.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 300', nota: 'Mínimo 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 265', nota: 'De 2 a 7 personas. Te sumás a un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Tarjeta: +5%, hasta en 12 cuotas. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (500 ml por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Gorra o sombrero'],
          ['Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)'], ['Merienda o fruta', 'Bastón de caminata']],
        note: '¿Necesitás una alternativa para algún ítem? Hablá con atención antes de reservar.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local acreditado con formación APH', 'Transfer in-out', 'Seguro de aventura', 'Kit de primeros auxilios', 'Tasas de acceso'],
        excluded: ['Cualquier ítem no listado', 'Merienda o almuerzo', 'Equipo personal', 'Evacuación médica', 'Hoteles y comidas antes o después de la actividad', 'Propinas'],
      },
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo: 'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      botao: 'Sumate a la manada',
    },
  },
  fr: {
    meta: {
      title: 'Morro do Pai Inácio',
      description:
        'Le coucher de soleil sur la carte postale de la Chapada Diamantina : une courte marche de 2 km jusqu’au plateau, avec une vue à 360° sur le Vale do Capão.',
      canonical: '/fr/aventures/morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Facile',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Morro do Pai Inácio.',
      lead: 'Le coucher de soleil le plus célèbre de la Chapada, au sommet d’un plateau avec une vue à 360°.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Durée', 'Départ (Lençóis)', 'Retour', 'Difficulté'],
    sobre: {
      titulo: 'À propos du Morro do Pai Inácio.',
      paragrafos: [
        'La sortie commence en fin d’après-midi, pour assister au coucher de soleil au sommet du morro. La marche jusqu’au plateau est courte et sûre : de 15 à 30 minutes.',
        'De là-haut, on aperçoit le Morro do Camelo, le Vale dos Três Irmãos et bien plus encore. Départ à 16 h du centre de Lençóis, retour à partir de 18 h 30.',
        'Cette sortie peut se combiner avec le Parque da Muritiba, la cascade du Sossego ou le Pantanal Marimbus — contactez-nous pour composer votre journée.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à partir de 16 h du centre de Lençóis. 26 km — environ 40 minutes — en direction de Brasília par la BR-242, avec de beaux paysages tout au long du trajet.',
        'Au poste d’accès, le guide présente le site et la marche commence. 20 minutes de montée jusqu’au plateau, avec des escaliers, des rampes et beaucoup de rochers en chemin.',
        'Au sommet, vue à 360° : Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia et Serra do Brejão.',
        'Après le coucher du soleil, descente par le même chemin, avec une attention redoublée et en suivant le guide — à cette heure-là, il commence déjà à faire sombre. Arrivée à Lençóis vers 18 h 30.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 300', nota: 'Minimum 2 personnes. Seul votre groupe pendant la sortie.' },
        { titulo: 'En groupe', preco: 'R$ 265', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Carte : +5 %, jusqu’à 12 mensualités. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et rend la participation impossible.',
        requiredColumns: [
          ['Eau (500 ml par personne)', 'Baskets ou chaussures de randonnée', 'Vêtements légers', 'Casquette ou chapeau'],
          ['Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)'], ['En-cas ou fruit', 'Bâton de marche']],
        note: 'Besoin d’une alternative pour un article ? Contactez-nous avant de réserver.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide local agréé, formé aux premiers secours (APH)', 'Transfert aller-retour', 'Assurance aventure', 'Trousse de premiers secours', 'Droits d’accès'],
        excluded: ['Tout ce qui n’est pas listé', 'Casse-croûte ou déjeuner', 'Équipement personnel', 'Évacuation médicale', 'Hôtels et repas avant ou après l’activité', 'Pourboires'],
      },
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Votre sentier commence', 'par un message.'],
      corpo: 'Écrivez-nous sur WhatsApp. Découvrez l’itinéraire idéal pour connaître la Chapada Diamantina et comment vous y préparer.',
      botao: 'Rejoindre la harde',
    },
  },
  nl: {
    meta: {
      title: 'Morro do Pai Inácio',
      description:
        'Zonsondergang bij hét plaatje van de Chapada Diamantina: een korte klim van 2 km naar het plateau, met een uitzicht van 360° over de Vale do Capão.',
      canonical: '/nl/avonturen/morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Licht',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Morro do Pai Inácio.',
      lead: 'De beroemdste zonsondergang van de Chapada, boven op een plateau met 360° uitzicht.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Duur', 'Vertrek (Lençóis)', 'Terugkeer', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Morro do Pai Inácio.',
      paragrafos: [
        'De tour begint laat in de middag, zodat we de zonsondergang vanaf de top van de berg zien. De klim naar het plateau is kort en veilig: 15 tot 30 minuten.',
        'Van bovenaf zie je de Morro do Camelo, de Vale dos Três Irmãos en nog veel meer. We vertrekken om 16.00 uur uit het centrum van Lençóis en zijn vanaf 18.30 uur terug.',
        'Deze tour is te combineren met het Parque da Muritiba, de Waterval Sossego of het moeras van Marimbus — overleg met ons team om de dag samen te stellen.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek vanaf 16.00 uur uit het centrum van Lençóis. Het is 26 km — zo’n 40 minuten — richting Brasília over de BR-242, met de hele weg tot het afzetpunt mooie uitzichten.',
        'Bij de toegangspost geeft de gids een korte introductie over de plek en begint de wandeling. Het is 20 minuten klimmen naar het plateau, met trappen, leuningen en veel rots onderweg.',
        'Op de top een uitzicht van 360°: Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia en Serra do Brejão.',
        'Na zonsondergang begint de afdaling via hetzelfde pad, extra voorzichtig en altijd achter de gids aan — het is dan al wat donker. Aankomst in Lençóis rond 18.30 uur.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 300', nota: 'Minimaal 2 personen. Alleen jouw groep op de tour.' },
        { titulo: 'In een groep', preco: 'R$ 265', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Creditcard: +5%, tot 12 termijnen. Internationale overboeking of een grotere groep: vraag het ons team.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Items met een * zijn verplicht. Ontbreekt er één, dan brengt dat de veiligheid van de groep in gevaar en kun je niet deelnemen.',
        requiredColumns: [
          ['Water (500 ml per persoon)', 'Wandelschoenen', 'Lichte kleding', 'Pet of hoed'],
          ['Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)'], ['Snack of fruit', 'Wandelstok']],
        note: 'Heb je voor een item een alternatief nodig? Overleg met ons team voordat je boekt.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Erkende lokale gids met APH-opleiding', 'Vervoer heen en terug', 'Avonturenverzekering', 'EHBO-kit', 'Entreegelden'],
        excluded: ['Alles wat hierboven niet staat', 'Snack of lunch', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Hotels en maaltijden voor of na de activiteit', 'Fooien'],
      },
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Je pad begint', 'met een bericht.'],
      corpo: 'Praat met ons via WhatsApp. Ontdek welke tocht in de Chapada Diamantina het best bij je past, en hoe je je erop voorbereidt.',
      botao: 'Sluit je aan bij de kudde',
    },
  },
  de: {
    meta: {
      title: 'Morro do Pai Inácio',
      description:
        'Sonnenuntergang am Wahrzeichen der Chapada Diamantina: ein kurzer Aufstieg von 2 km zum Plateau, mit 360°-Blick über das Vale do Capão.',
      canonical: '/de/abenteuer/morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Leicht',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Morro do Pai Inácio.',
      lead: 'Der berühmteste Sonnenuntergang der Chapada, oben auf einem Plateau mit 360°-Blick.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Dauer', 'Start (Lençóis)', 'Rückkehr', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Morro do Pai Inácio.',
      paragrafos: [
        'Die Tour beginnt am späten Nachmittag, damit wir den Sonnenuntergang vom Gipfel des Berges sehen. Der Aufstieg zum Plateau ist kurz und sicher: 15 bis 30 Minuten.',
        'Von oben siehst du den Morro do Camelo, das Vale dos Três Irmãos und vieles mehr. Wir starten um 16:00 Uhr im Zentrum von Lençóis und sind ab 18:30 Uhr zurück.',
        'Diese Tour lässt sich mit dem Parque da Muritiba, dem Sossego-Wasserfall oder dem Sumpfgebiet Marimbus kombinieren — sprich mit unserem Team, um den Tag zusammenzustellen.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start ab 16:00 Uhr im Zentrum von Lençóis. Es sind 26 km — rund 40 Minuten — Richtung Brasília über die BR-242, mit schönen Ausblicken auf der ganzen Strecke bis zum Parkplatz.',
        'Am Eingang gibt der Guide eine kurze Einführung zum Ort, dann beginnt die Wanderung. Es sind 20 Minuten Aufstieg zum Plateau, mit Treppen, Geländern und viel Fels auf dem Weg.',
        'Auf dem Gipfel ein 360°-Blick: Vale do Cercado, Morro do Camelo, Vale dos Três Irmãos, Serra da Bacia und Serra do Brejão.',
        'Nach Sonnenuntergang beginnt der Abstieg auf demselben Weg, besonders vorsichtig und immer hinter dem Guide — es ist dann schon etwas dunkel. Ankunft in Lençóis gegen 18:30 Uhr.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 300', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf der Tour.' },
        { titulo: 'In der Gruppe', preco: 'R$ 265', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Kreditkarte: +5 %, bis zu 12 Raten. Internationale Überweisung oder größere Gruppe: frag unser Team.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checkliste — was du mitnimmst',
        intro: 'Mit * markierte Gegenstände sind Pflicht. Fehlt einer davon, gefährdet das die Sicherheit der Gruppe und eine Teilnahme ist nicht möglich.',
        requiredColumns: [
          ['Wasser (500 ml pro Person)', 'Wanderschuhe', 'Leichte Kleidung', 'Kappe oder Hut'],
          ['Sonnencreme', 'Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)'], ['Snack oder Obst', 'Wanderstock']],
        note: 'Brauchst du für einen Gegenstand eine Alternative? Sprich vor der Buchung mit unserem Team.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zertifizierter lokaler Guide mit APH-Ausbildung', 'Hin- und Rücktransport', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Eintrittsgebühren'],
        excluded: ['Alles, was oben nicht aufgeführt ist', 'Snack oder Mittagessen', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Hotels und Mahlzeiten vor oder nach der Aktivität', 'Trinkgelder'],
      },
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Dein Weg beginnt', 'mit einer Nachricht.'],
      corpo: 'Schreib uns per WhatsApp. Finde heraus, welche Tour in der Chapada Diamantina am besten zu dir passt und wie du dich darauf vorbereitest.',
      botao: 'Schließ dich der Herde an',
    },
  },
};
