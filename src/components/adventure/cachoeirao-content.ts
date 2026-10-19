/**
 * Conteúdo da página do Mirante do Cachoeirão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/mirante-do-cachoeirao e EN de
 * mamut.agency/en/aventuras/cachoeirao-viewpoint. ES é tradução feita aqui.
 *
 * Divide as primeiras pernas com o [Mirante do Pati] — Guiné, Mirante dos
 * Aleixos, Gerais do Rio Preto, travessia do Rio Preto — e separa no destino.
 * Os dois arquivos ficam independentes de propósito: os textos da operadora
 * divergem e cada página tem números próprios.
 *
 * ⚠️ O parágrafo de abertura da fonte diz "9 km", mas é o mesmo texto colado na
 * página do Mirante do Pati; a faixa de dados desta diz 18 km (e 19–22 km na
 * versão inglesa). Adotei os 18 km da faixa portuguesa.
 *
 * ⚠️ Preço em grupo: R$ 500 em português, R$ 525 em inglês. Mantive o valor em
 * português.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { pricing } from './price-table';

export const CACHOEIRAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/cachoeirao/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/cachoeirao/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/cachoeirao/2.jpeg', width: 2080, height: 1170 },
    { src: '/img/adventures/cachoeirao/3.jpg', width: 2560, height: 1440 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['80 km', '/svg/_icons/icon_09_location.svg'],
    ['280 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 1250, 650],
    ['2', 740, 650],
    ['3', 650, 599],
    ['4+', 599, 550],
  ]),
  priceOrigin: 'Guiné',
};

export const CACHOEIRAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Mirante do Cachoeirão',
      description:
        'Um mirante de 280 metros sobre o Vale do Pati, com mais de 20 quedas d’água no mesmo vale depois de chuva forte. 18 km em um dia.',
      canonical: '/pt/aventuras/mirante-do-cachoeirao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Guiné',
      duracao: '1 dia',
      titulo: 'Mirante do Cachoeirão.',
      lead: 'Duzentos e oitenta metros de paredão e, depois de chuva forte, mais de vinte quedas d’água no mesmo vale.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura do mirante', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Mirante do Cachoeirão.',
      paragrafos: [
        'Dezoito quilômetros em um dia para chegar a um mirante de 280 metros de altura sobre o Vale do Pati. Depois de chuvas fortes dá para contemplar mais de 20 quedas d’água no mesmo vale, ao mesmo tempo.',
        'A trilha é majoritariamente plana e atravessa os Gerais do Rio Preto, área aberta que corresponde a mais de 70% do Parque Nacional — um imenso jardim a céu aberto, com espécies da flora de altitude e as serras ao fundo.',
        'Nos arredores do mirante há uma área de banho com piscina natural. É lá que o grupo faz a refeição antes de começar a volta.',
        'Para nós a visita ideal ao Pati é de pelo menos 3 dias. Mas para quem tem poucos dias na Chapada, esta é uma ótima escolha — e no mesmo formato de um dia também operamos o Mirante da Rampa, o mais famoso do vale.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 7h00 rumo ao sul do Parque Nacional da Chapada Diamantina. São 80 km e cerca de 2 horas de carro até a vila do Guiné, onde a trilha começa e termina.',
        'Desembarque, explanação geral sobre o percurso, conferência do checklist e início da caminhada.',
        'Primeiro trecho: 30 minutos de subida em terreno acidentado até o Mirante dos Aleixos. Breve descanso e seguimos para o interior do vale.',
        'Cerca de 1h30 de caminhada em terreno plano pelos Gerais do Rio Preto. Na metade do caminho atravessamos o Rio Preto — rotas alternativas podem ser adotadas conforme o clima.',
        'Chegada ao Mirante do Cachoeirão, 280 metros acima do vale. Se o percurso for feito depois de chuvas fortes, são mais de 20 quedas d’água à vista de uma vez.',
        'Refeição na área de banho ao lado do mirante, com piscina natural, e preparação para a volta.',
        'Volta pelo mesmo percurso, com parada opcional no Rio Preto para um banho. Chegada ao carro por volta das 16h00, pequena parada no Guiné — onde dá para fazer uma boa refeição — e retorno a Lençóis, na cidade por volta das 19h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 740', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 550', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (1L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Boné ou chapéu', 'Protetor solar'],
          ['Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanche para o mirante', 'Roupa de banho'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Chinelos', 'Toalha', 'Câmera']],
        note: 'Os chinelos entram na lista por causa da área de banho ao lado do mirante — é onde o grupo come e descansa antes da volta.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local credenciado com treinamento APH', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Lanche ou almoço', 'Refeição no Guiné', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      {
        type: 'seasons',
        title: 'Quando visitar o Vale do Pati',
        facts: [
          ['Verão e outono (jan–mai)', 'Cachoeiras cheias, mais lama nas trilhas'],
          ['Inverno e primavera (jun–dez)', 'Terreno mais firme, menos volume de água'],
          ['As 20 quedas do mirante', 'Só aparecem depois de chuva forte'],
        ],
        notes: [
          'Não existe melhor época absoluta — depende do que você quer ver.',
          'Para o Cachoeirão especificamente, a temporada de chuvas é a que entrega a vista completa.',
        ],
      },
      safetyFaq(
        'pt',
        'O dia é longo: saída às 7h00, retorno por volta das 19h00, com cerca de 4 horas de estrada somadas aos 18 km de caminhada. A travessia do Rio Preto depende do volume de água — em época de chuva a equipe adota rota alternativa. Os Gerais não têm sombra: chapéu, protetor e água são o que mais pesa aqui.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'vinte cachoeiras de uma vez?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Cachoeirão Viewpoint',
      description:
        'A 280-metre overlook above the Pati Valley, with more than 20 waterfalls in the same valley after heavy rain. 18 km in a single day.',
      canonical: '/en/adventures/cachoeirao-viewpoint',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Guiné',
      duracao: '1 day',
      titulo: 'Cachoeirão Viewpoint.',
      lead: 'Two hundred and eighty metres of rock wall and, after heavy rain, more than twenty waterfalls in the same valley.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the overlook', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Cachoeirão Viewpoint.',
      paragrafos: [
        'Eighteen kilometres in a day to reach an overlook standing 280 metres above the Pati Valley. After heavy rain you can take in more than 20 waterfalls in the same valley, all at once.',
        'The trail is mostly flat and crosses the Gerais do Rio Preto, an open area that makes up more than 70% of the National Park — an immense garden under the open sky, with high-altitude plant species and the ranges behind.',
        'Beside the overlook there is a bathing area with a natural pool. That is where the group eats before starting back.',
        'We think the ideal visit to the Pati is at least 3 days. But for anyone with only a few days in the Chapada, this is an excellent choice — and in the same one-day format we also run the Rampa Overlook, the most famous in the valley.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 7:00 am heading south towards the Chapada Diamantina National Park. That is 80 km and about 2 hours by car to the village of Guiné, where the hike starts and ends.',
        'Arrival, a general briefing about the route, a run through the checklist and the start of the walk.',
        'First stretch: a 30-minute climb on rugged terrain to the Aleixos Overlook. A short break, then on into the valley.',
        'Around 1.5 hours walking on flat ground across the Gerais do Rio Preto. Midway we cross the Rio Preto — alternative routes may be taken depending on the weather.',
        'Arrival at the Cachoeirão Viewpoint, 280 metres above the valley. If the route is walked after heavy rain, more than 20 waterfalls are in view at once.',
        'A meal at the bathing area next to the overlook, with its natural pool, and time to get ready for the return.',
        'Back along the same route, with an optional stop at the Rio Preto for a swim. At the vehicle around 4:00 pm, a short stop in Guiné — where a good meal is available — and back to Lençóis, in town around 7:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 740', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 550', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (1L per person)', 'Trainers or hiking boots', 'Light clothing', 'Cap or hat', 'Sunscreen'],
          ['Personal medication', 'Photo ID', 'Backpack for your things', 'Snack for the overlook', 'Swimwear'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Flip-flops', 'Towel', 'Camera']],
        note: 'Flip-flops are on the list because of the bathing area next to the overlook — that is where the group eats and rests before heading back.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited local guide with first-aid training', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Snack or lunch', 'The meal in Guiné', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      {
        type: 'seasons',
        title: 'When to visit the Pati Valley',
        facts: [
          ['Summer and autumn (Jan–May)', 'Full waterfalls, more mud on the trails'],
          ['Winter and spring (Jun–Dec)', 'Firmer ground, less water in the falls'],
          ['The 20 falls from the overlook', 'Only appear after heavy rain'],
        ],
        notes: [
          'There is no single best season — it depends on what you want to see.',
          'For the Cachoeirão specifically, the rainy season is the one that delivers the full view.',
        ],
      },
      safetyFaq(
        'en',
        'It is a long day: out at 7:00 am, back around 7:00 pm, with about 4 hours of driving on top of the 18 km walk. The Rio Preto crossing depends on the water level — in the rainy season the team takes an alternative route. The Gerais have no shade: hat, sunscreen and water matter most here.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'twenty waterfalls at once?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Mirador do Cachoeirão',
      description:
        'Un mirador de 280 metros sobre el Valle del Pati, con más de 20 caídas de agua en el mismo valle después de lluvia fuerte. 18 km en un día.',
      canonical: '/es/aventuras/mirador-do-cachoeirao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Guiné',
      duracao: '1 día',
      titulo: 'Mirador do Cachoeirão.',
      lead: 'Doscientos ochenta metros de paredón y, después de lluvia fuerte, más de veinte caídas de agua en el mismo valle.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura del mirador', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Mirador do Cachoeirão.',
      paragrafos: [
        'Dieciocho kilómetros en un día para llegar a un mirador de 280 metros de altura sobre el Valle del Pati. Después de lluvias fuertes se pueden contemplar más de 20 caídas de agua en el mismo valle, al mismo tiempo.',
        'El sendero es mayormente plano y atraviesa los Gerais do Rio Preto, área abierta que corresponde a más del 70% del Parque Nacional — un inmenso jardín a cielo abierto, con especies de flora de altura y las sierras al fondo.',
        'Al lado del mirador hay un área de baño con piscina natural. Ahí es donde el grupo hace la comida antes de empezar la vuelta.',
        'Para nosotros la visita ideal al Pati es de al menos 3 días. Pero para quien tiene pocos días en la Chapada, esta es una gran elección — y en el mismo formato de un día también operamos el Mirador da Rampa, el más famoso del valle.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 7:00 rumbo al sur del Parque Nacional da Chapada Diamantina. Son 80 km y cerca de 2 horas de auto hasta la villa de Guiné, donde el sendero empieza y termina.',
        'Desembarque, explicación general sobre el recorrido, repaso del checklist e inicio de la caminata.',
        'Primer tramo: 30 minutos de subida en terreno accidentado hasta el Mirador dos Aleixos. Breve descanso y seguimos hacia el interior del valle.',
        'Cerca de 1:30 h de caminata en terreno plano por los Gerais do Rio Preto. A mitad de camino cruzamos el Rio Preto — se pueden adoptar rutas alternativas según el clima.',
        'Llegada al Mirador do Cachoeirão, 280 metros por encima del valle. Si el recorrido se hace después de lluvias fuertes, son más de 20 caídas de agua a la vista de una vez.',
        'Comida en el área de baño al lado del mirador, con piscina natural, y preparación para la vuelta.',
        'Vuelta por el mismo recorrido, con parada opcional en el Rio Preto para bañarse. Llegada al auto cerca de las 16:00, parada breve en Guiné — donde se puede hacer una buena comida — y regreso a Lençóis, en la ciudad cerca de las 19:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 740', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 550', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Gorra o sombrero', 'Protector solar'],
          ['Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Snack para el mirador', 'Ropa de baño'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Ojotas', 'Toalla', 'Cámara']],
        note: 'Las ojotas entran en la lista por el área de baño al lado del mirador — es donde el grupo come y descansa antes de la vuelta.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local acreditado con formación en primeros auxilios', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Snack o almuerzo', 'La comida en Guiné', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      {
        type: 'seasons',
        title: 'Cuándo visitar el Valle del Pati',
        facts: [
          ['Verano y otoño (ene–may)', 'Cascadas llenas, más barro en los senderos'],
          ['Invierno y primavera (jun–dic)', 'Terreno más firme, menos volumen de agua'],
          ['Las 20 caídas del mirador', 'Solo aparecen después de lluvia fuerte'],
        ],
        notes: [
          'No existe una mejor época absoluta — depende de lo que quieras ver.',
          'Para el Cachoeirão puntualmente, la temporada de lluvias es la que entrega la vista completa.',
        ],
      },
      safetyFaq(
        'es',
        'El día es largo: salida a las 7:00, regreso cerca de las 19:00, con unas 4 horas de ruta sumadas a los 18 km de caminata. El cruce del Rio Preto depende del volumen de agua — en época de lluvia el equipo adopta ruta alternativa. Los Gerais no tienen sombra: sombrero, protector y agua son lo que más pesa acá.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'veinte cascadas de una vez?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Belvédère du Cachoeirão',
      description:
        'Un belvédère à 280 mètres au-dessus de la vallée du Pati, avec plus de 20 chutes d’eau dans la même vallée après de fortes pluies. 18 km en une journée.',
      canonical: '/fr/aventures/belvedere-du-cachoeirao',
    },
    hero: {
      nivel: 'Modéré',
      origem: 'Départ : Guiné',
      duracao: '1 jour',
      titulo: 'Belvédère du Cachoeirão.',
      lead: 'Deux cent quatre-vingts mètres de falaise et, après de fortes pluies, plus de vingt chutes d’eau dans la même vallée.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Hauteur du belvédère', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos du belvédère du Cachoeirão.',
      paragrafos: [
        'Dix-huit kilomètres en une journée pour atteindre un belvédère à 280 mètres de hauteur au-dessus de la vallée du Pati. Après de fortes pluies, on peut y contempler plus de 20 chutes d’eau dans la même vallée, en même temps.',
        'Le sentier est en grande partie plat et traverse les Gerais do Rio Preto, une zone ouverte qui représente plus de 70 % du parc national — un immense jardin à ciel ouvert, avec la flore d’altitude et les montagnes en toile de fond.',
        'Aux abords du belvédère se trouve une zone de baignade avec une piscine naturelle. C’est là que le groupe prend son repas avant d’entamer le retour.',
        'Pour nous, la visite idéale du Pati dure au moins 3 jours. Mais si vous n’avez que peu de jours dans la Chapada, c’est un excellent choix — et, dans le même format d’une journée, nous proposons aussi le belvédère da Rampa, le plus célèbre de la vallée.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis à 7h00 vers le sud du parc national de la Chapada Diamantina. 80 km et environ 2 heures de voiture jusqu’au village de Guiné, où le sentier commence et se termine.',
        'Arrivée, présentation générale du parcours, vérification de la checklist et début de la marche.',
        'Premier tronçon : 30 minutes de montée sur terrain accidenté jusqu’au belvédère dos Aleixos. Courte pause, puis nous continuons vers l’intérieur de la vallée.',
        'Environ 1h30 de marche sur terrain plat à travers les Gerais do Rio Preto. À mi-chemin, nous traversons le Rio Preto — des itinéraires alternatifs peuvent être adoptés selon la météo.',
        'Arrivée au belvédère du Cachoeirão, 280 mètres au-dessus de la vallée. Si le parcours se fait après de fortes pluies, plus de 20 chutes d’eau sont visibles d’un seul coup d’œil.',
        'Repas dans la zone de baignade à côté du belvédère, avec piscine naturelle, et préparation pour le retour.',
        'Retour par le même parcours, avec un arrêt optionnel au Rio Preto pour une baignade. Arrivée à la voiture vers 16h00, courte halte à Guiné — où l’on peut bien manger — puis retour à Lençóis, en ville vers 19h00.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 740', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 550', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
          ['Eau (1 L par personne)', 'Baskets ou chaussures de randonnée', 'Vêtements légers', 'Casquette ou chapeau', 'Crème solaire'],
          ['Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires', 'En-cas pour le belvédère', 'Maillot de bain'],
        ],
        recommendedColumns: [['Imperméable (corps et sac)', 'Bâton de marche'], ['Tongs', 'Serviette', 'Appareil photo']],
        note: 'Les tongs sont sur la liste à cause de la zone de baignade à côté du belvédère — c’est là que le groupe mange et se repose avant le retour.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Transfert aller-retour', 'Guide local agréé formé aux premiers secours (APH)', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Pique-nique (en option)', 'En-cas ou déjeuner', 'Repas à Guiné', 'Équipement personnel', 'Évacuation médicale', 'Hébergement avant ou après l’excursion'],
      },
      {
        type: 'seasons',
        title: 'Quand visiter la vallée du Pati',
        facts: [
          ['Été et automne (janv.–mai)', 'Cascades pleines, plus de boue sur les sentiers'],
          ['Hiver et printemps (juin–déc.)', 'Terrain plus ferme, moins de débit'],
          ['Les 20 chutes du belvédère', 'N’apparaissent qu’après de fortes pluies'],
        ],
        notes: [
          'Il n’existe pas de meilleure saison absolue — tout dépend de ce que vous voulez voir.',
          'Pour le Cachoeirão en particulier, c’est la saison des pluies qui offre la vue complète.',
        ],
      },
      safetyFaq(
        'fr',
        'La journée est longue : départ à 7h00, retour vers 19h00, avec environ 4 heures de route en plus des 18 km de marche. La traversée du Rio Preto dépend du niveau de l’eau — en saison des pluies, l’équipe adopte un itinéraire alternatif. Les Gerais n’offrent aucune ombre : chapeau, crème solaire et eau sont ici l’essentiel.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à voir', 'vingt cascades d’un coup ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Uitkijkpunt Cachoeirão',
      description:
        'Een uitkijkpunt 280 meter boven de Vale do Pati, met na flinke regen meer dan 20 watervallen in hetzelfde dal. 18 km op één dag.',
      canonical: '/nl/avonturen/uitzichtpunt-cachoeirao',
    },
    hero: {
      nivel: 'Gemiddeld',
      origem: 'Vertrek: Guiné',
      duracao: '1 dag',
      titulo: 'Uitkijkpunt Cachoeirão.',
      lead: 'Tweehonderdtachtig meter rotswand en, na flinke regen, meer dan twintig watervallen in hetzelfde dal.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Hoogte van het uitkijkpunt', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over het uitkijkpunt Cachoeirão.',
      paragrafos: [
        'Achttien kilometer op één dag naar een uitkijkpunt 280 meter boven de Vale do Pati. Na flinke regen zie je meer dan 20 watervallen in hetzelfde dal, allemaal tegelijk.',
        'Het pad is overwegend vlak en loopt door de Gerais do Rio Preto, een open gebied dat meer dan 70% van het Nationaal Park beslaat — een immense tuin onder de open hemel, met hooggebergteplanten en de bergruggen op de achtergrond.',
        'Naast het uitkijkpunt ligt een zwemplek met een natuurlijk bad. Daar eet de groep voordat we aan de terugweg beginnen.',
        'Wij vinden dat je de Pati het best in minstens 3 dagen bezoekt. Maar voor wie maar een paar dagen in de Chapada heeft, is dit een uitstekende keuze — en in dezelfde eendaagse vorm doen we ook het uitkijkpunt Rampa, het bekendste van het dal.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 7.00 uur uit Lençóis, zuidwaarts richting het Nationaal Park Chapada Diamantina. Dat is 80 km en zo’n 2 uur met de auto naar het dorp Guiné, waar de wandeling begint en eindigt.',
        'Aankomst, een algemene briefing over de route, de checklist doorlopen en het begin van de wandeling.',
        'Eerste stuk: 30 minuten klimmen over ruig terrein naar het uitkijkpunt Aleixos. Een korte pauze en dan verder het dal in.',
        'Zo’n 1,5 uur lopen over vlak terrein door de Gerais do Rio Preto. Halverwege steken we de Rio Preto over — afhankelijk van het weer kunnen we alternatieve routes nemen.',
        'Aankomst bij het uitkijkpunt Cachoeirão, 280 meter boven het dal. Loop je de route na flinke regen, dan zie je meer dan 20 watervallen tegelijk.',
        'Een maaltijd bij de zwemplek naast het uitkijkpunt, met zijn natuurlijke bad, en tijd om je klaar te maken voor de terugweg.',
        'Terug via dezelfde route, met een optionele stop bij de Rio Preto om te zwemmen. Rond 16.00 uur bij de auto, een korte stop in Guiné — waar je goed kunt eten — en terug naar Lençóis, waar we rond 19.00 uur aankomen.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 740', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 550', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
          ['Water (1 L per persoon)', 'Sportschoenen of wandelschoenen', 'Lichte kleding', 'Pet of hoed', 'Zonnebrand'],
          ['Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen', 'Snack voor bij het uitkijkpunt', 'Zwemkleding'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Slippers', 'Handdoek', 'Camera']],
        note: 'Slippers staan op de lijst vanwege de zwemplek naast het uitkijkpunt — daar eet en rust de groep voor de terugweg.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Vervoer heen en terug', 'Erkende lokale gids met EHBO-opleiding', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Picknick (optioneel)', 'Snack of lunch', 'De maaltijd in Guiné', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      {
        type: 'seasons',
        title: 'Wanneer ga je naar de Vale do Pati',
        facts: [
          ['Zomer en herfst (jan–mei)', 'Volle watervallen, meer modder op de paden'],
          ['Winter en lente (jun–dec)', 'Steviger terrein, minder water in de watervallen'],
          ['De 20 watervallen vanaf het uitkijkpunt', 'Verschijnen alleen na flinke regen'],
        ],
        notes: [
          'Er is niet één beste seizoen — het hangt af van wat je wilt zien.',
          'Voor de Cachoeirão is het regenseizoen het seizoen dat het volledige uitzicht geeft.',
        ],
      },
      safetyFaq(
        'nl',
        'Het is een lange dag: vertrek om 7.00 uur, terug rond 19.00 uur, met zo’n 4 uur rijden bovenop de 18 km wandelen. De oversteek van de Rio Preto hangt af van de waterstand — in het regenseizoen neemt het team een alternatieve route. De Gerais bieden geen schaduw: hoed, zonnebrand en water zijn hier het belangrijkst.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om twintig watervallen', 'tegelijk te zien?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Aussichtspunkt Cachoeirão',
      description:
        'Ein Aussichtspunkt 280 Meter über dem Vale do Pati, mit nach kräftigem Regen über 20 Wasserfällen im selben Tal. 18 km an einem Tag.',
      canonical: '/de/abenteuer/aussichtspunkt-cachoeirao',
    },
    hero: {
      nivel: 'Mittel',
      origem: 'Start: Guiné',
      duracao: '1 Tag',
      titulo: 'Aussichtspunkt Cachoeirão.',
      lead: 'Zweihundertachtzig Meter Felswand und, nach kräftigem Regen, über zwanzig Wasserfälle im selben Tal.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Höhe des Aussichtspunkts', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Aussichtspunkt Cachoeirão.',
      paragrafos: [
        'Achtzehn Kilometer an einem Tag zu einem Aussichtspunkt 280 Meter über dem Vale do Pati. Nach kräftigem Regen siehst du über 20 Wasserfälle im selben Tal, alle gleichzeitig.',
        'Der Weg ist überwiegend flach und führt durch die Gerais do Rio Preto, ein offenes Gebiet, das über 70 % des Nationalparks bedeckt — ein riesiger Garten unter freiem Himmel, mit Hochgebirgspflanzen und den Bergrücken im Hintergrund.',
        'Neben dem Aussichtspunkt liegt eine Badestelle mit Naturbecken. Dort isst die Gruppe, bevor wir den Rückweg antreten.',
        'Wir finden, dass man das Pati am besten in mindestens 3 Tagen besucht. Aber für alle, die nur wenige Tage in der Chapada haben, ist dies eine hervorragende Wahl — und im selben Tagesformat bieten wir auch den Aussichtspunkt Rampa an, den bekanntesten des Tals.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 7:00 Uhr in Lençóis, nach Süden Richtung Nationalpark Chapada Diamantina. Das sind 80 km und rund 2 Stunden mit dem Auto bis zum Dorf Guiné, wo die Wanderung beginnt und endet.',
        'Ankunft, eine allgemeine Einweisung zur Route, die Checkliste durchgehen und Beginn der Wanderung.',
        'Erster Abschnitt: 30 Minuten Aufstieg über raues Gelände zum Aussichtspunkt Aleixos. Eine kurze Pause und dann weiter ins Tal.',
        'Rund 1,5 Stunden über flaches Gelände durch die Gerais do Rio Preto. Auf halber Strecke durchqueren wir den Rio Preto — je nach Wetter können wir alternative Routen nehmen.',
        'Ankunft am Aussichtspunkt Cachoeirão, 280 Meter über dem Tal. Gehst du die Route nach kräftigem Regen, siehst du über 20 Wasserfälle gleichzeitig.',
        'Eine Mahlzeit an der Badestelle neben dem Aussichtspunkt, mit ihrem Naturbecken, und Zeit, dich für den Rückweg fertigzumachen.',
        'Auf demselben Weg zurück, mit einem optionalen Halt am Rio Preto zum Baden. Gegen 16:00 Uhr am Auto, ein kurzer Halt in Guiné — wo du gut essen kannst — und zurück nach Lençóis, wo wir gegen 19:00 Uhr ankommen.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 740', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 550', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
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
          ['Wasser (1 L pro Person)', 'Turnschuhe oder Wanderschuhe', 'Leichte Kleidung', 'Kappe oder Hut', 'Sonnencreme'],
          ['Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen', 'Snack für den Aussichtspunkt', 'Badesachen'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Flip-Flops', 'Handtuch', 'Kamera']],
        note: 'Flip-Flops stehen wegen der Badestelle neben dem Aussichtspunkt auf der Liste — dort isst und ruht die Gruppe vor dem Rückweg.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Hin- und Rücktransport', 'Zertifizierter lokaler Guide mit Erste-Hilfe-Ausbildung', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Picknick (optional)', 'Snack oder Mittagessen', 'Die Mahlzeit in Guiné', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      {
        type: 'seasons',
        title: 'Wann du ins Vale do Pati fährst',
        facts: [
          ['Sommer und Herbst (Jan.–Mai)', 'Volle Wasserfälle, mehr Schlamm auf den Wegen'],
          ['Winter und Frühling (Juni–Dez.)', 'Festerer Boden, weniger Wasser in den Wasserfällen'],
          ['Die 20 Wasserfälle vom Aussichtspunkt', 'Erscheinen nur nach kräftigem Regen'],
        ],
        notes: [
          'Die eine beste Jahreszeit gibt es nicht — es hängt davon ab, was du sehen möchtest.',
          'Für den Cachoeirão ist die Regenzeit die Zeit mit dem vollständigen Blick.',
        ],
      },
      safetyFaq(
        'de',
        'Es ist ein langer Tag: Start um 7:00 Uhr, Rückkehr gegen 19:00 Uhr, mit rund 4 Stunden Fahrt zusätzlich zu den 18 km Wanderung. Die Durchquerung des Rio Preto hängt vom Wasserstand ab — in der Regenzeit nimmt das Team eine alternative Route. Die Gerais bieten keinen Schatten: Hut, Sonnencreme und Wasser sind hier am wichtigsten.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, zwanzig Wasserfälle', 'gleichzeitig zu sehen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
