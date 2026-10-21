/**
 * Conteúdo da página da Cachoeira do Herculano, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-herculano. A operadora não tem
 * versão em inglês nem em espanhol desta página — **EN e ES são tradução feita
 * neste repositório** e precisam de revisão antes de valerem como material de
 * venda.
 *
 * ⚠️ A página se contradiz sobre o deslocamento: a faixa do topo diz 350 km, o
 * itinerário diz "aproximadamente 140 km" por trecho e depois "250 km (ida e
 * volta)". Adotei os 140 km do itinerário, que é a única medida por trecho — e
 * a que fecha com as 3 horas de estrada declaradas.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { pricing } from './price-table';

export const HERCULANO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/herculano/hero.jpg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/herculano/1.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/herculano/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/herculano/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['6 km', '/svg/_icons/icon_03_montain.svg'],
    ['140 km', '/svg/_icons/icon_09_location.svg'],
    ['60 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 1300, 675],
    ['2', 799, 675],
    ['3', 675, 610],
    ['4+', 610, 560],
  ]),
};

export const HERCULANO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Herculano',
      description:
        'Sessenta metros de queda e um poço para banho em Itaetê, longe da rota turística. Trilha de 6 km por mata fechada e riachos.',
      canonical: '/pt/aventuras/cachoeira-do-herculano',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Cachoeira do Herculano.',
      lead: 'Sessenta metros de queda em Itaetê, do outro lado da Chapada — e quase sempre só o seu grupo.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura da queda', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Herculano.',
      paragrafos: [
        'Uma queda de cerca de 60 metros em Itaetê, município vizinho a Lençóis, com um poço largo e raso o bastante para ficar dentro d’água sem pressa.',
        'É um roteiro fora do circuito de sempre. A distância de Lençóis segura o volume de gente, e o comum é o grupo ter a cachoeira só para si.',
        'A trilha tem cerca de 6 km ida e volta e leva umas 2 horas, atravessando mata fechada e riachos, com trechos irregulares e aclives que justificam o nível moderado.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída do centro de Lençóis às 6h00, com tolerância de 30 minutos, em direção a Itaetê. São cerca de 140 km e 3 horas de estrada.',
        'Chegando a Itaetê, parada breve para um café da manhã — não incluso — e para preparar a trilha.',
        'A caminhada até a cachoeira leva cerca de 2 horas, passando por trechos de mata fechada e riachos.',
        'Chegada à Cachoeira do Herculano: cerca de 60 metros de queda formando um poço bom para banho, com tempo para ficar.',
        'Volta pela mesma trilha até o ponto de partida em Itaetê e retorno a Lençóis no fim da tarde, com chegada prevista por volta das 18h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 799', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 560', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Repelente'], ['Lanche ou fruta', 'Toalha', 'Dinheiro para o café da manhã']],
        note: 'A saída é às 6h00 e o café da manhã fica por sua conta na parada em Itaetê — leve algum trocado.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local com treinamento APH e bilíngue', 'Taxa de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Café da manhã na parada', 'Piquenique (opcional)', 'Equipamento pessoal', 'Bebidas extras', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'A trilha tem trechos irregulares e aclives, com travessia de riachos que ficam escorregadios depois de chuva. Calçado com boa aderência e repelente são o que mais faz diferença aqui — é mata fechada boa parte do caminho.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para conhecer', 'o outro lado da Chapada?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Herculano Waterfall',
      description:
        'Sixty metres of falling water and a pool to swim in, in Itaetê, off the tourist route. A 6 km trail through dense forest and streams.',
      canonical: '/en/adventures/herculano-waterfall',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Herculano Waterfall.',
      lead: 'Sixty metres of falling water in Itaetê, on the far side of the Chapada — and usually just your group.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the fall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Herculano Waterfall.',
      paragrafos: [
        'A drop of around 60 metres in Itaetê, a town neighbouring Lençóis, with a pool wide and shallow enough to stay in the water without hurrying.',
        'This is a trip off the usual circuit. The distance from Lençóis keeps the numbers down, and more often than not the group has the waterfall to itself.',
        'The trail is around 6 km there and back and takes about 2 hours, crossing dense forest and streams, with uneven sections and climbs that justify the moderate rating.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from the centre of Lençóis at 6:00 am, with 30 minutes of tolerance, heading for Itaetê. That is around 140 km and 3 hours on the road.',
        'On arrival in Itaetê, a short stop for breakfast — not included — and to get ready for the trail.',
        'The walk to the waterfall takes about 2 hours, through stretches of dense forest and streams.',
        'Arrival at Herculano Waterfall: around 60 metres of falling water into a pool that is good for swimming, with time to stay.',
        'Return along the same trail to the starting point in Itaetê and back to Lençóis in the late afternoon, arriving around 6:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 799', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 560', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked * are mandatory. Missing any of them compromises the safety of the group and makes participation unfeasible.',
        requiredColumns: [
          ['Water (1.5L per person)', 'Trainers or hiking boots', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Insect repellent'], ['Snack or fruit', 'Towel', 'Cash for breakfast']],
        note: 'You leave at 6:00 am and breakfast is on you at the stop in Itaetê — bring some cash.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Local guide with first-aid training, bilingual', 'Access fee', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Breakfast at the stop', 'Picnic (optional)', 'Personal gear', 'Extra drinks', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The trail has uneven sections and climbs, with stream crossings that get slippery after rain. Footwear with good grip and insect repellent make the biggest difference here — much of the way is through dense forest.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'the other side of the Chapada?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada do Herculano',
      description:
        'Sesenta metros de caída y un pozo para bañarse en Itaetê, lejos de la ruta turística. Sendero de 6 km por monte cerrado y arroyos.',
      canonical: '/es/aventuras/cascada-do-herculano',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Cascada do Herculano.',
      lead: 'Sesenta metros de caída en Itaetê, del otro lado de la Chapada — y casi siempre solo tu grupo.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de la caída', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada do Herculano.',
      paragrafos: [
        'Una caída de cerca de 60 metros en Itaetê, municipio vecino a Lençóis, con un pozo ancho y poco profundo como para quedarse en el agua sin apuro.',
        'Es un recorrido fuera del circuito de siempre. La distancia desde Lençóis contiene el volumen de gente, y lo común es que el grupo tenga la cascada para sí solo.',
        'El sendero tiene cerca de 6 km ida y vuelta y lleva unas 2 horas, atravesando monte cerrado y arroyos, con tramos irregulares y subidas que justifican el nivel moderado.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida del centro de Lençóis a las 6:00, con tolerancia de 30 minutos, en dirección a Itaetê. Son unos 140 km y 3 horas de ruta.',
        'Al llegar a Itaetê, parada breve para un desayuno — no incluido — y para preparar el sendero.',
        'La caminata hasta la cascada lleva cerca de 2 horas, pasando por tramos de monte cerrado y arroyos.',
        'Llegada a la Cascada do Herculano: cerca de 60 metros de caída formando un pozo bueno para bañarse, con tiempo para quedarse.',
        'Vuelta por el mismo sendero hasta el punto de partida en Itaetê y regreso a Lençóis al final de la tarde, con llegada prevista cerca de las 18:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 799', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 560', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Repelente'], ['Snack o fruta', 'Toalla', 'Efectivo para el desayuno']],
        note: 'La salida es a las 6:00 y el desayuno corre por tu cuenta en la parada en Itaetê — llevá algo de efectivo.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local con formación en primeros auxilios, bilingüe', 'Tasa de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Desayuno en la parada', 'Picnic (opcional)', 'Equipo personal', 'Bebidas extra', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El sendero tiene tramos irregulares y subidas, con cruces de arroyos que quedan resbaladizos después de la lluvia. Calzado con buena adherencia y repelente son lo que más diferencia hace acá — es monte cerrado buena parte del camino.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para conocer', 'el otro lado de la Chapada?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Cascade du Herculano',
      description:
        'Soixante mètres de chute et un bassin pour la baignade à Itaetê, loin des circuits touristiques. Un sentier de 6 km à travers forêt dense et ruisseaux.',
      canonical: '/fr/aventures/cascade-du-herculano',
    },
    hero: {
      nivel: 'Modéré',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Cascade du Herculano.',
      lead: 'Soixante mètres de chute à Itaetê, de l’autre côté de la Chapada — et presque toujours rien que pour votre groupe.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Hauteur de la chute', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade du Herculano.',
      paragrafos: [
        'Une chute d’environ 60 mètres à Itaetê, commune voisine de Lençóis, avec un bassin large et assez peu profond pour rester dans l’eau sans se presser.',
        'C’est un itinéraire hors des circuits habituels. La distance depuis Lençóis limite l’affluence, et il est courant que le groupe ait la cascade pour lui seul.',
        'Le sentier fait environ 6 km aller-retour et prend près de 2 heures, à travers une forêt dense et des ruisseaux, avec des passages irréguliers et des montées qui justifient le niveau modéré.',
        'Pendant les randonnées, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ du centre de Lençóis à 6h00, avec 30 minutes de tolérance, en direction d’Itaetê. Environ 140 km et 3 heures de route.',
        'À l’arrivée à Itaetê, courte pause pour un petit-déjeuner — non inclus — et pour préparer la randonnée.',
        'La marche jusqu’à la cascade dure environ 2 heures, à travers des passages de forêt dense et des ruisseaux.',
        'Arrivée à la cascade du Herculano : environ 60 mètres de chute qui forment un bassin idéal pour la baignade, avec du temps pour en profiter.',
        'Retour par le même sentier jusqu’au point de départ à Itaetê, puis retour à Lençóis en fin d’après-midi, avec une arrivée prévue vers 18h00.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 799', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 560', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les éléments marqués d’un * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et empêche la participation.',
        requiredColumns: [
          ['Eau (1,5 L par personne)', 'Baskets ou chaussures de randonnée', 'Chaussettes de rechange', 'Vêtements légers', 'Maillot de bain'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires'],
        ],
        recommendedColumns: [['Imperméable (corps et sac)', 'Répulsif anti-moustiques'], ['En-cas ou fruit', 'Serviette', 'De l’argent pour le petit-déjeuner']],
        note: 'Le départ est à 6h00 et le petit-déjeuner est à votre charge lors de la pause à Itaetê — prévoyez un peu de monnaie.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide local bilingue formé aux premiers secours (APH)', 'Droit d’accès', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner lors de la pause', 'Pique-nique (en option)', 'Équipement personnel', 'Boissons supplémentaires', 'Évacuation médicale', 'Hébergement avant ou après l’excursion'],
      },
      safetyFaq(
        'fr',
        'Le sentier comporte des passages irréguliers et des montées, avec des traversées de ruisseaux qui deviennent glissantes après la pluie. Des chaussures à bonne adhérence et un répulsif anti-moustiques font ici toute la différence — une grande partie du chemin se fait en forêt dense.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à découvrir', 'l’autre côté de la Chapada ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Herculano',
      description:
        'Zestig meter vallend water en een poel om in te zwemmen, in Itaetê, buiten de toeristenroute. Een pad van 6 km door dicht bos en beekjes.',
      canonical: '/nl/avonturen/waterval-herculano',
    },
    hero: {
      nivel: 'Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Waterval Herculano.',
      lead: 'Zestig meter vallend water in Itaetê, aan de andere kant van de Chapada — en meestal alleen met je eigen groep.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Hoogte van de val', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Herculano.',
      paragrafos: [
        'Een val van zo’n 60 meter in Itaetê, een buurgemeente van Lençóis, met een poel die breed en ondiep genoeg is om rustig in het water te blijven.',
        'Dit is een tocht buiten het gebruikelijke circuit. Door de afstand tot Lençóis blijft het rustig, en vaker wel dan niet heeft de groep de waterval voor zichzelf.',
        'Het pad is zo’n 6 km heen en terug en duurt ongeveer 2 uur, door dicht bos en beekjes, met oneffen stukken en klimmetjes die de beoordeling "gemiddeld" verklaren.',
        'Tijdens onze tochten is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 6.00 uur uit het centrum van Lençóis, met 30 minuten speling, richting Itaetê. Dat is zo’n 140 km en 3 uur rijden.',
        'Bij aankomst in Itaetê een korte stop voor het ontbijt — niet inbegrepen — en om je klaar te maken voor het pad.',
        'De wandeling naar de waterval duurt ongeveer 2 uur, door stukken dicht bos en beekjes.',
        'Aankomst bij de Waterval Herculano: zo’n 60 meter vallend water in een poel die goed is om te zwemmen, met tijd om te blijven.',
        'Terug via hetzelfde pad naar het startpunt in Itaetê en laat in de middag terug naar Lençóis, waar we rond 18.00 uur aankomen.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 799', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 560', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Items met een * zijn verplicht. Ontbreekt er één, dan brengt dat de veiligheid van de groep in gevaar en kun je niet deelnemen.',
        requiredColumns: [
          ['Water (1,5 L per persoon)', 'Sportschoenen of wandelschoenen', 'Extra sokken', 'Lichte kleding', 'Zwemkleding'],
          ['Pet of hoed', 'Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Insectenwerend middel'], ['Snack of fruit', 'Handdoek', 'Contant geld voor het ontbijt']],
        note: 'Je vertrekt om 6.00 uur en het ontbijt bij de stop in Itaetê is voor eigen rekening — neem wat contant geld mee.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige lokale gids met EHBO-opleiding', 'Toegangsprijs', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt bij de stop', 'Picknick (optioneel)', 'Persoonlijke uitrusting', 'Extra drankjes', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'Het pad heeft oneffen stukken en klimmetjes, met beekovergangen die na regen glad worden. Schoenen met goede grip en insectenwerend middel maken hier het grootste verschil — een groot deel van de weg gaat door dicht bos.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om de andere kant', 'van de Chapada te zien?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Herculano',
      description:
        'Sechzig Meter fallendes Wasser und ein Becken zum Schwimmen, in Itaetê, abseits der Touristenroute. Ein Weg von 6 km durch dichten Wald und Bäche.',
      canonical: '/de/abenteuer/wasserfall-herculano',
    },
    hero: {
      nivel: 'Mittel',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Wasserfall Herculano.',
      lead: 'Sechzig Meter fallendes Wasser in Itaetê, auf der anderen Seite der Chapada — und meist nur mit deiner eigenen Gruppe.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Fallhöhe', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Herculano-Wasserfall.',
      paragrafos: [
        'Ein Fall von rund 60 Metern in Itaetê, einer Nachbargemeinde von Lençóis, mit einem Becken, das breit und flach genug ist, um entspannt im Wasser zu bleiben.',
        'Dies ist eine Tour abseits der üblichen Runde. Durch die Entfernung zu Lençóis bleibt es ruhig, und meistens hat die Gruppe den Wasserfall für sich allein.',
        'Der Weg ist hin und zurück rund 6 km lang und dauert etwa 2 Stunden, durch dichten Wald und Bäche, mit unebenen Abschnitten und kleinen Anstiegen, die die Einstufung „mittel“ erklären.',
        'Auf unseren Touren ist das Picknick das Mittagessen: ausgewogene Mahlzeiten mit Vitaminen, Eiweiß, Ballaststoffen und Kohlenhydraten.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 6:00 Uhr im Zentrum von Lençóis, mit 30 Minuten Puffer, Richtung Itaetê. Das sind rund 140 km und 3 Stunden Fahrt.',
        'Bei der Ankunft in Itaetê ein kurzer Halt zum Frühstücken — nicht inklusive — und um dich für den Weg fertigzumachen.',
        'Die Wanderung zum Wasserfall dauert etwa 2 Stunden, durch Abschnitte mit dichtem Wald und Bächen.',
        'Ankunft am Herculano-Wasserfall: rund 60 Meter fallendes Wasser in ein Becken, das gut zum Schwimmen ist, mit Zeit zum Bleiben.',
        'Auf demselben Weg zurück zum Ausgangspunkt in Itaetê und am späten Nachmittag zurück nach Lençóis, wo wir gegen 18:00 Uhr ankommen.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 799', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 560', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checkliste — was du mitnimmst',
        intro: 'Mit * markierte Gegenstände sind Pflicht. Fehlt einer davon, gefährdet das die Sicherheit der Gruppe und eine Teilnahme ist nicht möglich.',
        requiredColumns: [
          ['Wasser (1,5 L pro Person)', 'Turnschuhe oder Wanderschuhe', 'Ersatzsocken', 'Leichte Kleidung', 'Badesachen'],
          ['Kappe oder Hut', 'Sonnencreme', 'Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Insektenschutz'], ['Snack oder Obst', 'Handtuch', 'Bargeld für das Frühstück']],
        note: 'Du startest um 6:00 Uhr, und das Frühstück beim Halt in Itaetê geht auf eigene Rechnung — nimm etwas Bargeld mit.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger lokaler Guide mit Erste-Hilfe-Ausbildung', 'Eintrittspreis', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück beim Halt', 'Picknick (optional)', 'Persönliche Ausrüstung', 'Zusätzliche Getränke', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq(
        'de',
        'Der Weg hat unebene Abschnitte und kleine Anstiege, mit Bachüberquerungen, die nach Regen rutschig werden. Schuhe mit gutem Grip und Insektenschutz machen hier den größten Unterschied — ein großer Teil des Weges führt durch dichten Wald.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, die andere Seite', 'der Chapada zu sehen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
