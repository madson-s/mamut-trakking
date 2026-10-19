/**
 * Conteúdo da página do Mirante do Pati (Mirante da Rampa), por idioma.
 *
 * PT vem de mamut.agency/aventuras/mirante-do-pati e EN de
 * mamut.agency/en/aventuras/pati-viewpoint-1-day. ES e FR são tradução feita aqui.
 *
 * ⚠️ A página portuguesa não publica itinerário nem checklist — só o cartão de
 * preços. O roteiro do dia aqui é tradução do itinerário inglês da operadora,
 * que é o único publicado.
 *
 * ⚠️ Distância: o parágrafo de abertura das duas páginas diz "9 km", mas é
 * texto reaproveitado — a página do Cachoeirão traz o mesmo parágrafo com o
 * mesmo número, e a faixa de dados de cada uma diz outra coisa (14–18 km aqui,
 * 18 km lá). Adotei os 14–18 km da faixa, que fecham com as ~3 horas de
 * caminhada declaradas.
 *
 * ⚠️ Preço em grupo: R$ 475 em português, R$ 500 em inglês. Mantive o valor em
 * português, que é o registrado no hub. O de pacote privado (R$ 550) só existe
 * na página inglesa.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { pricing } from './price-table';

export const MIRANTE_PATI_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/mirante-pati/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/mirante-pati/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mirante-pati/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mirante-pati/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['14–18 km', '/svg/_icons/icon_03_montain.svg'],
    ['80 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['~19h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_01_3-bars.svg'],
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

export const MIRANTE_PATI_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Mirante do Pati',
      description:
        'O Vale do Pati em um dia: 14 a 18 km pelos Gerais do Rio Preto até o Mirante da Rampa, com vista para o Morro Branco, o Castelo e o Sobradinho.',
      canonical: '/pt/aventuras/mirante-do-pati',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Guiné',
      duracao: '1 dia',
      titulo: 'Mirante do Pati.',
      lead: 'O Vale do Pati em um dia — a travessia dos Gerais até a borda do mirante mais conhecido do vale.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Duração', 'Saída (Lençóis)', 'Retorno previsto', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Mirante do Pati.',
      paragrafos: [
        'Uma caminhada considerável para quem quer conhecer o Vale do Pati em um dia só. A trilha leva cerca de 3 horas até o mirante e é majoritariamente plana — o esforço vem da distância, não do terreno.',
        'Boa parte do percurso atravessa os Gerais do Rio Preto, área aberta que corresponde a mais de 70% do Parque Nacional. É um imenso jardim a céu aberto, com espécies da flora de altitude e as serras imponentes ao fundo.',
        'No fim da trilha está o Mirante da Rampa, o mais conhecido do vale, com vista para o Morro Branco, o Castelo e o Sobradinho.',
        'Para nós a visita ideal ao Pati é de pelo menos 3 dias. Mas para quem tem poucos dias na Chapada, esta é a melhor forma de conhecer o vale sem dormir lá dentro.',
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
        'Chegada ao Mirante da Rampa, com vista para o Vale do Pati e as serras em volta: Morro Branco, Castelo e Sobradinho. Parada longa para falar de geologia, história e tradições da região e comer o lanche (não incluso).',
        'Volta pelo mesmo caminho, com parada opcional no Rio Preto para um banho. Chegada ao carro por volta das 16h00, pequena parada no Guiné — onde dá para fazer uma boa refeição — e retorno a Lençóis, na cidade por volta das 19h00.',
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
          ['Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanche para o mirante', 'Meias extras'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Roupa de banho para o Rio Preto', 'Toalha', 'Câmera']],
        note: 'O lanche do mirante não está incluso e é a única refeição do trajeto — leve o seu. Os Gerais são área aberta, sem sombra por cerca de 1h30 de caminhada.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia de montanha credenciado com treinamento APH', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Lanche ou almoço', 'Refeição no Guiné', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O dia é longo: saída às 7h00, retorno por volta das 19h00, com cerca de 4 horas de estrada somadas à caminhada. A travessia do Rio Preto depende do volume de água — em época de chuva a equipe adota rota alternativa. Os Gerais não têm sombra: chapéu, protetor e água são o que mais pesa aqui.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'o Pati de cima?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Pati Viewpoint 1 Day',
      description:
        'The Pati Valley in a day: 14 to 18 km across the Gerais do Rio Preto to the Rampa Overlook, facing Morro Branco, Castelo and Sobradinho.',
      canonical: '/en/adventures/pati-viewpoint-1-day',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Guiné',
      duracao: '1 day',
      titulo: 'Pati Viewpoint.',
      lead: 'The Pati Valley in a single day — across the Gerais to the edge of the best-known overlook in the valley.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Duration', 'Departure (Lençóis)', 'Expected return', 'Difficulty'],
    sobre: {
      titulo: 'About the Pati Viewpoint.',
      paragrafos: [
        'A considerable hike for those who want to see the Pati Valley in a single day. The trail takes around 3 hours to the overlook and is mostly flat — the effort comes from the distance, not the terrain.',
        'Much of the route crosses the Gerais do Rio Preto, an open area that makes up more than 70% of the National Park. It is an immense garden under the open sky, with high-altitude plant species and imposing ranges in the background.',
        'At the end of the trail is the Rampa Overlook, the best known in the valley, looking out over Morro Branco, Castelo and Sobradinho.',
        'We think the ideal visit to the Pati is at least 3 days. But for anyone with only a few days in the Chapada, this is the best way to see the valley without sleeping inside it.',
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
        'Arrival at the Rampa Overlook, with a view over the Pati Valley and the surrounding ranges: Morro Branco, Castelo and Sobradinho. An extended break to talk about the geology, history and traditions of the region, and to eat your snack (not included).',
        'The return follows the same route, with an optional stop at the Rio Preto for a swim. Back at the vehicle around 4:00 pm, a short stop in Guiné — where a good meal is available — and back to Lençóis, in town around 7:00 pm.',
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
          ['Personal medication', 'Photo ID', 'Backpack for your things', 'Snack for the overlook', 'Spare socks'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Swimwear for the Rio Preto', 'Towel', 'Camera']],
        note: 'The snack at the overlook is not included and is the only meal on the route — bring your own. The Gerais are open ground, with no shade for about 1.5 hours of walking.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited mountain guide with first-aid training', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Snack or lunch', 'The meal in Guiné', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'It is a long day: out at 7:00 am, back around 7:00 pm, with about 4 hours of driving on top of the walk. The Rio Preto crossing depends on the water level — in the rainy season the team takes an alternative route. The Gerais have no shade: hat, sunscreen and water matter most here.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'the Pati from above?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Mirador del Pati',
      description:
        'El Valle del Pati en un día: de 14 a 18 km por los Gerais do Rio Preto hasta el Mirador da Rampa, con vista al Morro Branco, el Castelo y el Sobradinho.',
      canonical: '/es/aventuras/mirador-del-pati',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Guiné',
      duracao: '1 día',
      titulo: 'Mirador del Pati.',
      lead: 'El Valle del Pati en un día — la travesía de los Gerais hasta el borde del mirador más conocido del valle.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Duración', 'Salida (Lençóis)', 'Regreso previsto', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Mirador del Pati.',
      paragrafos: [
        'Una caminata considerable para quien quiere conocer el Valle del Pati en un solo día. El sendero lleva cerca de 3 horas hasta el mirador y es mayormente plano — el esfuerzo viene de la distancia, no del terreno.',
        'Buena parte del recorrido atraviesa los Gerais do Rio Preto, área abierta que corresponde a más del 70% del Parque Nacional. Es un inmenso jardín a cielo abierto, con especies de flora de altura y las sierras imponentes al fondo.',
        'Al final del sendero está el Mirador da Rampa, el más conocido del valle, con vista al Morro Branco, el Castelo y el Sobradinho.',
        'Para nosotros la visita ideal al Pati es de al menos 3 días. Pero para quien tiene pocos días en la Chapada, esta es la mejor forma de conocer el valle sin dormir adentro.',
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
        'Llegada al Mirador da Rampa, con vista al Valle del Pati y las sierras alrededor: Morro Branco, Castelo y Sobradinho. Parada larga para hablar de geología, historia y tradiciones de la región y comer el snack (no incluido).',
        'Vuelta por el mismo camino, con parada opcional en el Rio Preto para bañarse. Llegada al auto cerca de las 16:00, parada breve en Guiné — donde se puede hacer una buena comida — y regreso a Lençóis, en la ciudad cerca de las 19:00.',
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
          ['Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Snack para el mirador', 'Medias extra'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Ropa de baño para el Rio Preto', 'Toalla', 'Cámara']],
        note: 'El snack del mirador no está incluido y es la única comida del trayecto — llevá el tuyo. Los Gerais son área abierta, sin sombra por cerca de 1:30 h de caminata.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía de montaña acreditado con formación en primeros auxilios', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Snack o almuerzo', 'La comida en Guiné', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El día es largo: salida a las 7:00, regreso cerca de las 19:00, con unas 4 horas de ruta sumadas a la caminata. El cruce del Rio Preto depende del volumen de agua — en época de lluvia el equipo adopta ruta alternativa. Los Gerais no tienen sombra: sombrero, protector y agua son lo que más pesa acá.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'el Pati desde arriba?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Belvédère du Pati',
      description:
        'La vallée du Pati en une journée : 14 à 18 km à travers les Gerais do Rio Preto jusqu’au Mirante da Rampa, face au Morro Branco, au Castelo et au Sobradinho.',
      canonical: '/fr/aventures/belvedere-du-pati',
    },
    hero: {
      nivel: 'Modéré',
      origem: 'Départ : Guiné',
      duracao: '1 jour',
      titulo: 'Belvédère du Pati.',
      lead: 'La vallée du Pati en une journée — la traversée des Gerais jusqu’au bord du belvédère le plus connu de la vallée.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Durée', 'Départ (Lençóis)', 'Retour prévu', 'Difficulté'],
    sobre: {
      titulo: 'À propos du belvédère du Pati.',
      paragrafos: [
        'Une belle randonnée pour qui veut découvrir la vallée du Pati en une seule journée. Le sentier mène au belvédère en 3 heures environ et il est en grande partie plat — l’effort vient de la distance, pas du terrain.',
        'Une bonne partie du parcours traverse les Gerais do Rio Preto, une zone ouverte qui représente plus de 70 % du parc national. C’est un immense jardin à ciel ouvert, avec des espèces de flore d’altitude et des serras imposantes en toile de fond.',
        'Au bout du sentier se trouve le Mirante da Rampa, le belvédère le plus connu de la vallée, avec vue sur le Morro Branco, le Castelo et le Sobradinho.',
        'Pour nous, la visite idéale du Pati dure au moins 3 jours. Mais pour qui n’a que quelques jours dans la Chapada, c’est la meilleure façon de découvrir la vallée sans y dormir.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météorologiques ou de tout autre cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis à 7h00 vers le sud du parc national de la Chapada Diamantina. 80 km et environ 2 heures de voiture jusqu’au village de Guiné, où le sentier commence et se termine.',
        'Arrivée, présentation générale du parcours, vérification de la checklist et début de la marche.',
        'Premier tronçon : 30 minutes de montée en terrain accidenté jusqu’au Mirante dos Aleixos. Courte pause, puis nous continuons vers l’intérieur de la vallée.',
        'Environ 1h30 de marche sur terrain plat à travers les Gerais do Rio Preto. À mi-chemin, nous traversons le Rio Preto — des itinéraires alternatifs peuvent être choisis selon la météo.',
        'Arrivée au Mirante da Rampa, avec vue sur la vallée du Pati et les serras alentour : Morro Branco, Castelo et Sobradinho. Longue pause pour parler de la géologie, de l’histoire et des traditions de la région, et manger votre en-cas (non inclus).',
        'Retour par le même chemin, avec un arrêt baignade facultatif au Rio Preto. Arrivée à la voiture vers 16h00, courte halte à Guiné — où l’on peut faire un bon repas — et retour à Lençóis, en ville vers 19h00.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 740', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 550', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Prix pour un paiement en espèces, par virement ou par boleto. Virement international ou groupe plus grand : contactez notre équipe.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et rend la participation impossible.',
        requiredColumns: [
          ['Eau (1 L par personne)', 'Baskets ou chaussures de randonnée', 'Vêtements légers', 'Casquette ou chapeau', 'Crème solaire'],
          ['Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires', 'En-cas pour le belvédère', 'Chaussettes de rechange'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)', 'Bâton de marche'], ['Maillot de bain pour le Rio Preto', 'Serviette', 'Appareil photo']],
        note: 'L’en-cas du belvédère n’est pas inclus et c’est le seul repas du parcours — apportez le vôtre. Les Gerais sont une zone ouverte, sans ombre pendant environ 1h30 de marche.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Transfert aller-retour', 'Guide de montagne agréé formé aux premiers secours (APH)', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Pique-nique (en option)', 'En-cas ou déjeuner', 'Le repas à Guiné', 'Équipement personnel', 'Évacuation médicale', 'Hébergement avant ou après la sortie'],
      },
      safetyFaq(
        'fr',
        'La journée est longue : départ à 7h00, retour vers 19h00, avec environ 4 heures de route en plus de la marche. La traversée du Rio Preto dépend du niveau de l’eau — en saison des pluies, l’équipe adopte un itinéraire alternatif. Les Gerais n’offrent aucune ombre : chapeau, crème solaire et eau sont ici essentiels.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à voir', 'le Pati d’en haut ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Uitkijkpunt Pati — 1 dag',
      description:
        'De Vale do Pati in één dag: 14 tot 18 km door de Gerais do Rio Preto naar het uitkijkpunt Rampa, tegenover de Morro Branco, de Castelo en de Sobradinho.',
      canonical: '/nl/avonturen/uitzichtpunt-pati',
    },
    hero: {
      nivel: 'Gemiddeld',
      origem: 'Vertrek: Guiné',
      duracao: '1 dag',
      titulo: 'Uitkijkpunt Pati.',
      lead: 'De Vale do Pati op één dag — door de Gerais naar de rand van het bekendste uitkijkpunt van het dal.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Duur', 'Vertrek (Lençóis)', 'Verwachte terugkeer', 'Zwaarte'],
    sobre: {
      titulo: 'Over het uitkijkpunt Pati.',
      paragrafos: [
        'Een flinke wandeling voor wie de Vale do Pati op één dag wil zien. Het pad duurt zo’n 3 uur tot het uitkijkpunt en is overwegend vlak — de inspanning zit in de afstand, niet in het terrein.',
        'Een groot deel van de route loopt door de Gerais do Rio Preto, een open gebied dat meer dan 70% van het Nationaal Park beslaat. Het is een immense tuin onder de open hemel, met hooggebergteplanten en indrukwekkende bergruggen op de achtergrond.',
        'Aan het eind van het pad ligt het uitkijkpunt Rampa, het bekendste van het dal, met uitzicht op de Morro Branco, de Castelo en de Sobradinho.',
        'Wij vinden dat je de Pati het best in minstens 3 dagen bezoekt. Maar voor wie maar een paar dagen in de Chapada heeft, is dit de beste manier om het dal te zien zonder er te overnachten.',
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
        'Aankomst bij het uitkijkpunt Rampa, met uitzicht over de Vale do Pati en de bergruggen eromheen: Morro Branco, Castelo en Sobradinho. Een lange pauze om te praten over de geologie, de geschiedenis en de tradities van de regio, en om je snack te eten (niet inbegrepen).',
        'De terugweg volgt dezelfde route, met een optionele stop bij de Rio Preto om te zwemmen. Rond 16.00 uur terug bij de auto, een korte stop in Guiné — waar je goed kunt eten — en terug naar Lençóis, waar we rond 19.00 uur aankomen.',
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
          ['Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen', 'Snack voor bij het uitkijkpunt', 'Extra sokken'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Zwemkleding voor de Rio Preto', 'Handdoek', 'Camera']],
        note: 'De snack bij het uitkijkpunt is niet inbegrepen en is de enige maaltijd onderweg — neem je eigen mee. De Gerais zijn open terrein, zonder schaduw gedurende zo’n 1,5 uur lopen.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Vervoer heen en terug', 'Erkende berggids met EHBO-opleiding', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Picknick (optioneel)', 'Snack of lunch', 'De maaltijd in Guiné', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'Het is een lange dag: vertrek om 7.00 uur, terug rond 19.00 uur, met zo’n 4 uur rijden bovenop de wandeling. De oversteek van de Rio Preto hangt af van de waterstand — in het regenseizoen neemt het team een alternatieve route. De Gerais bieden geen schaduw: hoed, zonnebrand en water zijn hier het belangrijkst.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om de Pati', 'van bovenaf te zien?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Aussichtspunkt Pati — 1 Tag',
      description:
        'Das Vale do Pati an einem Tag: 14 bis 18 km durch die Gerais do Rio Preto bis zum Aussichtspunkt Rampa, gegenüber dem Morro Branco, dem Castelo und dem Sobradinho.',
      canonical: '/de/abenteuer/aussichtspunkt-pati',
    },
    hero: {
      nivel: 'Mittel',
      origem: 'Start: Guiné',
      duracao: '1 Tag',
      titulo: 'Aussichtspunkt Pati.',
      lead: 'Das Vale do Pati an einem Tag — durch die Gerais bis an den Rand des bekanntesten Aussichtspunkts des Tals.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Dauer', 'Start (Lençóis)', 'Geplante Rückkehr', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Aussichtspunkt Pati.',
      paragrafos: [
        'Eine ordentliche Wanderung für alle, die das Vale do Pati an einem Tag sehen möchten. Der Weg dauert rund 3 Stunden bis zum Aussichtspunkt und ist überwiegend flach — die Anstrengung liegt in der Strecke, nicht im Gelände.',
        'Ein großer Teil der Route führt durch die Gerais do Rio Preto, ein offenes Gebiet, das über 70 % des Nationalparks bedeckt. Es ist ein riesiger Garten unter freiem Himmel, mit Hochgebirgspflanzen und eindrucksvollen Bergrücken im Hintergrund.',
        'Am Ende des Weges liegt der Aussichtspunkt Rampa, der bekannteste des Tals, mit Blick auf den Morro Branco, den Castelo und den Sobradinho.',
        'Wir finden, dass man das Pati am besten in mindestens 3 Tagen besucht. Aber für alle, die nur wenige Tage in der Chapada haben, ist dies die beste Art, das Tal zu sehen, ohne dort zu übernachten.',
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
        'Ankunft am Aussichtspunkt Rampa, mit Blick über das Vale do Pati und die Bergrücken ringsum: Morro Branco, Castelo und Sobradinho. Eine lange Pause, um über Geologie, Geschichte und Traditionen der Region zu sprechen und deinen Snack zu essen (nicht inklusive).',
        'Der Rückweg folgt derselben Route, mit einem optionalen Halt am Rio Preto zum Baden. Gegen 16:00 Uhr zurück am Auto, ein kurzer Halt in Guiné — wo du gut essen kannst — und zurück nach Lençóis, wo wir gegen 19:00 Uhr ankommen.',
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
          ['Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen', 'Snack für den Aussichtspunkt', 'Ersatzsocken'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Badesachen für den Rio Preto', 'Handtuch', 'Kamera']],
        note: 'Der Snack am Aussichtspunkt ist nicht inklusive und die einzige Mahlzeit unterwegs — bring deinen eigenen mit. Die Gerais sind offenes Gelände, ohne Schatten auf rund 1,5 Stunden Gehzeit.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Hin- und Rücktransport', 'Zertifizierter Bergführer mit Erste-Hilfe-Ausbildung', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Picknick (optional)', 'Snack oder Mittagessen', 'Die Mahlzeit in Guiné', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq(
        'de',
        'Es ist ein langer Tag: Start um 7:00 Uhr, Rückkehr gegen 19:00 Uhr, mit rund 4 Stunden Fahrt zusätzlich zur Wanderung. Die Durchquerung des Rio Preto hängt vom Wasserstand ab — in der Regenzeit nimmt das Team eine alternative Route. Die Gerais bieten keinen Schatten: Hut, Sonnencreme und Wasser sind hier am wichtigsten.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, das Pati', 'von oben zu sehen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
