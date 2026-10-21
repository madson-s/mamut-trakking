/**
 * Conteúdo da Trilha Águas Claras (2 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/trilha-aguas-claras-2-dias. A operadora não
 * tem versão em inglês nem em espanhol — o `/en/` da mesma URL devolve a página
 * em português —, então **EN e ES são tradução feita neste repositório** e
 * precisam de revisão antes de valerem como material de venda.
 *
 * Trekking selvagem, como o [Palmital], o [Mixila] e a [Fumaça por Baixo]:
 * comida, hospedagem e checklist vêm de `wild-trek-shared`. É o mais leve dos
 * quatro — a página se vende como a primeira noite de barraca de quem nunca
 * acampou, e o corpo diz isso.
 *
 * ⚠️ O checklist da fonte está intitulado "O que levar para a Cachoeira do
 * Palmital" — texto colado por engano, como no City Tour e na Fumaça por Baixo.
 *
 * Não confundir com `aguas-claras` no hub, que é o passeio de um dia saindo do
 * Vale do Capão (18 km).
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';
import { pricing } from './price-table';

export const AGUAS_CLARAS_ASSETS: DayTourAssets = {
  detailLayout: 'journey',
  hero: { src: '/img/adventures/aguas-claras/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/aguas-claras/1.jpeg', width: 1536, height: 864 },
    { src: '/img/adventures/aguas-claras/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['23 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 dias / 1 noite', '/svg/_icons/icon_11_calendar.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 2000, 1650],
    ['2', 1850, 1650],
    ['3', 1650, 1500],
    ['4+', 1500, 1250],
  ]),
  returnTime: { time: '16:00', byRoad: false },
  campingGear: true,
};

export const AGUAS_CLARAS_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Trilha Águas Claras — 2 dias',
      description:
        'A primeira noite de barraca de quem nunca acampou: 23 km em terreno majoritariamente plano até as piscinas cristalinas do Vale dos 3 Irmãos.',
      canonical: '/pt/aventuras/trilha-aguas-claras-2-dias',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Lençóis',
      duracao: '2 dias',
      titulo: 'Trilha Águas Claras.',
      lead: 'A trilha certa para a primeira noite de barraca — plana, curta e com o céu inteiro à noite.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Trilha Águas Claras.',
      paragrafos: [
        'É a atividade ideal para quem nunca acampou e quer começar por uma trilha leve, e também para quem vem com crianças ou pessoas idosas. O terreno é majoritariamente plano.',
        'A caminhada começa nos arredores do Morro do Pai Inácio e segue em direção ao Vale dos 3 Irmãos — dois cartões-postais da Chapada Diamantina no mesmo dia. São 9 km, cerca de 3 horas, até as piscinas cristalinas onde fica o acampamento.',
        'A região de nascentes do Águas Claras é uma área sensível: o cuidado com resíduos é redobrado aqui, e o acampamento fica a cerca de 60 metros do rio por esse motivo.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.pt,
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é dinâmico e admite várias entradas e saídas — consulte as opções com o atendimento.',
      corpo: [],
      dias: [
        {
          rotulo: '1º dia',
          titulo: 'Transfer até o Pai Inácio + Trilha Águas Claras + acampamento',
          corpo: 'Saída a partir das 7h00 do centro de Lençóis, com todos os itens, de carro até os arredores do Morro do Pai Inácio, na BR-242. Depois dos ajustes finais começa a caminhada rumo ao Vale dos 3 Irmãos: 9 km, cerca de 3 horas, até as piscinas cristalinas. Montamos o acampamento a cerca de 60 metros do rio — a região de nascentes é sensível e o cuidado com resíduos é redobrado. Chegada por volta das 13h00, com o guia preparando o piquenique enquanto o grupo aproveita o rio. À tarde dá para explorar os arredores, reconhecer plantas e observar as montanhas até o jantar, servido a partir das 18h00. Se o céu estiver aberto, a noite não tem nenhuma luz artificial atrapalhando — e, dependendo da data, tem lua cheia.',
          distancia: '9 km',
          esforco: 'Leve / Moderado',
        },
        {
          rotulo: '2º dia',
          titulo: 'Águas Claras + Trilha do Grisante',
          corpo: 'Depois do café da manhã preparado pelo guia, levantamos acampamento e saímos por volta das 9h00. Caminhamos 1 hora até ver o Morrão de frente, um dos principais atrativos do Vale do Capão, e mais 30 minutos até o Poço das Piabas, onde dá para tomar um banho e aproveitar o lanche por volta do meio-dia. Seguimos mais 2 horas até avistar Lençóis e descemos 40 minutos até o centro histórico, onde a trilha termina.',
          distancia: '15 km',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.850', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.250', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `É a trilha mais leve dos nossos acampamentos, mas a noite no alto esfria. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Camping selvagem (1 noite), com barraca, isolante térmico e saco de dormir', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'A trilha é leve, mas a noite é em barraca a céu aberto e esfria — roupa de dormir não é opcional aqui. O acampamento fica numa área de nascentes: tudo o que entra precisa sair junto com o grupo, sem exceção.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para a sua', 'primeira noite de barraca?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Águas Claras Trail — 2 days',
      description:
        'The right first night under canvas: 23 km on mostly flat ground to the clear pools of the Vale dos 3 Irmãos.',
      canonical: '/en/adventures/aguas-claras-trail',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Lençóis',
      duracao: '2 days',
      titulo: 'Águas Claras Trail.',
      lead: 'The right trail for a first night in a tent — flat, short, and with the whole sky at night.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Águas Claras Trail.',
      paragrafos: [
        'This is the right trip for anyone who has never camped and wants to start with an easy trail, and equally for anyone travelling with children or older companions. The ground is mostly flat.',
        'The walk starts near Pai Inácio Hill and heads towards the Vale dos 3 Irmãos — two of the Chapada Diamantina’s landmarks in the same day. It is 9 km, about 3 hours, to the clear pools where we camp.',
        'The Águas Claras headwaters are a sensitive area: care with waste is doubled here, and the campsite sits around 60 metres from the river for that reason.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.en,
    itinerario: {
      titulo: 'Day by day.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is dynamic and allows several entry and exit points — ask us about the options.',
      corpo: [],
      dias: [
        {
          rotulo: 'Day 1',
          titulo: 'Transfer to Pai Inácio + Águas Claras Trail + camp',
          corpo: 'Departure from 7:00 am from the centre of Lençóis, carrying everything, by car to the area around Pai Inácio Hill on the BR-242. After final adjustments the walk begins towards the Vale dos 3 Irmãos: 9 km, around 3 hours, to the clear pools. We set up camp some 60 metres from the river — the headwaters are a sensitive area and care with waste is doubled. We arrive around 1:00 pm, with the guide preparing the picnic while the group enjoys the river. In the afternoon there is time to explore around the camp, learn the plants and watch the mountains until dinner, served from 6:00 pm. If the sky is clear, the night comes with no artificial light at all — and, depending on the date, a full moon.',
          distancia: '9 km',
          esforco: 'Light / Moderate',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Águas Claras + Grisante Trail',
          corpo: 'After breakfast prepared by the guide, we strike camp and set off around 9:00 am. We walk an hour until the Morrão stands in front of us, one of the main sights of Vale do Capão, and another 30 minutes to Poço das Piabas, where there is a swim and the snack around midday. Another 2 hours brings Lençóis into view, and a 40-minute descent takes us into the historic centre, where the trail ends.',
          distancia: '15 km',
          esforco: 'Moderate',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,850', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,250', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `It is the easiest of our camping trips, but the night up there gets cold. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Wild camping (1 night), with tent, sleeping mat and sleeping bag', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'The trail is easy, but the night is in a tent under open sky and it gets cold — sleepwear is not optional here. The camp sits in a headwaters area: everything that goes in comes out with the group, without exception.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for your', 'first night under canvas?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Sendero Águas Claras — 2 días',
      description:
        'La primera noche de carpa para quien nunca acampó: 23 km en terreno mayormente plano hasta las piscinas cristalinas del Valle dos 3 Irmãos.',
      canonical: '/es/aventuras/sendero-aguas-claras',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Lençóis',
      duracao: '2 días',
      titulo: 'Sendero Águas Claras.',
      lead: 'El sendero justo para la primera noche de carpa — plano, corto y con el cielo entero de noche.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Sendero Águas Claras.',
      paragrafos: [
        'Es la actividad ideal para quien nunca acampó y quiere empezar por un sendero suave, y también para quien viene con chicos o personas mayores. El terreno es mayormente plano.',
        'La caminata empieza en los alrededores del Morro do Pai Inácio y sigue hacia el Valle dos 3 Irmãos — dos postales de la Chapada Diamantina el mismo día. Son 9 km, cerca de 3 horas, hasta las piscinas cristalinas donde está el campamento.',
        'La región de nacientes del Águas Claras es un área sensible: el cuidado con los residuos es redoblado acá, y el campamento queda a unos 60 metros del río por ese motivo.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.es,
    itinerario: {
      titulo: 'Día a día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es dinámico y admite varias entradas y salidas — consultá las opciones con atención.',
      corpo: [],
      dias: [
        {
          rotulo: '1º día',
          titulo: 'Traslado hasta el Pai Inácio + Sendero Águas Claras + campamento',
          corpo: 'Salida a partir de las 7:00 del centro de Lençóis, con todos los ítems, en auto hasta los alrededores del Morro do Pai Inácio, en la BR-242. Después de los ajustes finales empieza la caminata rumbo al Valle dos 3 Irmãos: 9 km, cerca de 3 horas, hasta las piscinas cristalinas. Armamos el campamento a unos 60 metros del río — la región de nacientes es sensible y el cuidado con los residuos es redoblado. Llegada cerca de las 13:00, con el guía preparando el picnic mientras el grupo disfruta del río. A la tarde se pueden explorar los alrededores, reconocer plantas y observar las montañas hasta la cena, servida a partir de las 18:00. Si el cielo está despejado, la noche no tiene ninguna luz artificial molestando — y, según la fecha, hay luna llena.',
          distancia: '9 km',
          esforco: 'Suave / Moderado',
        },
        {
          rotulo: '2º día',
          titulo: 'Águas Claras + Sendero do Grisante',
          corpo: 'Después del desayuno preparado por el guía, levantamos campamento y salimos cerca de las 9:00. Caminamos 1 hora hasta ver el Morrão de frente, uno de los principales atractivos del Valle do Capão, y otros 30 minutos hasta el Poço das Piabas, donde se puede tomar un baño y disfrutar del snack cerca del mediodía. Seguimos otras 2 horas hasta divisar Lençóis y bajamos 40 minutos hasta el centro histórico, donde termina el sendero.',
          distancia: '15 km',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.850', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.250', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Es el sendero más suave de nuestros campamentos, pero la noche en lo alto refresca. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Camping salvaje (1 noche), con carpa, aislante térmico y bolsa de dormir', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'El sendero es suave, pero la noche es en carpa a cielo abierto y refresca — la ropa para dormir no es opcional acá. El campamento queda en un área de nacientes: todo lo que entra sale junto con el grupo, sin excepción.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para tu', 'primera noche de carpa?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Sentier d’Águas Claras — 2 jours',
      description:
        'La première nuit sous tente de ceux qui n’ont jamais campé : 23 km sur un terrain majoritairement plat jusqu’aux piscines cristallines du Vale dos 3 Irmãos.',
      canonical: '/fr/aventures/sentier-aguas-claras',
    },
    hero: {
      nivel: 'Modéré',
      origem: 'Départ : Lençóis',
      duracao: '2 jours',
      titulo: 'Sentier d’Águas Claras.',
      lead: 'Le bon sentier pour une première nuit sous tente — plat, court, et tout le ciel étoilé pour vous la nuit.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Où l’on dort', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos du sentier d’Águas Claras.',
      paragrafos: [
        'C’est l’activité idéale pour qui n’a jamais campé et veut commencer par un sentier facile, mais aussi pour qui vient avec des enfants ou des personnes âgées. Le terrain est majoritairement plat.',
        'La marche commence aux abords du Morro do Pai Inácio et se dirige vers le Vale dos 3 Irmãos — deux cartes postales de la Chapada Diamantina dans la même journée. 9 km, environ 3 heures, jusqu’aux piscines cristallines où se trouve le campement.',
        'La zone des sources d’Águas Claras est fragile : ici, l’attention portée aux déchets est redoublée, et c’est pour cette raison que le campement est installé à environ 60 mètres de la rivière.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.fr,
    itinerario: {
      titulo: 'Jour après jour.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent. Ce trek est flexible et admet plusieurs points d’entrée et de sortie — renseignez-vous auprès de nous sur les options.',
      corpo: [],
      dias: [
        {
          rotulo: '1er jour',
          titulo: 'Transfert jusqu’au Pai Inácio + sentier d’Águas Claras + campement',
          corpo: 'Départ à partir de 7 h du centre de Lençóis, avec toutes vos affaires, en voiture jusqu’aux abords du Morro do Pai Inácio, sur la BR-242. Après les derniers ajustements, la marche commence en direction du Vale dos 3 Irmãos : 9 km, environ 3 heures, jusqu’aux piscines cristallines. Nous montons le campement à environ 60 mètres de la rivière — la zone des sources est fragile et l’attention portée aux déchets est redoublée. Arrivée vers 13 h ; le guide prépare le pique-nique pendant que le groupe profite de la rivière. L’après-midi, on peut explorer les environs, apprendre à reconnaître les plantes et contempler les montagnes jusqu’au dîner, servi à partir de 18 h. Si le ciel est dégagé, aucune lumière artificielle ne vient troubler la nuit — et, selon la date, il y a la pleine lune.',
          distancia: '9 km',
          esforco: 'Facile / Modéré',
        },
        {
          rotulo: '2e jour',
          titulo: 'Águas Claras + sentier du Grisante',
          corpo: 'Après le petit-déjeuner préparé par le guide, nous levons le camp et partons vers 9 h. 1 heure de marche jusqu’à voir le Morrão de face, l’un des grands attraits du Vale do Capão, puis encore 30 minutes jusqu’au Poço das Piabas, où l’on peut se baigner et profiter du casse-croûte vers midi. Nous continuons 2 heures jusqu’à apercevoir Lençóis, puis descendons 40 minutes jusqu’au centre historique, où se termine le sentier.',
          distancia: '15 km',
          esforco: 'Modéré',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 1.850', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 1.250', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      wildTrekChecklist('fr', `C’est le sentier le plus facile de nos campements, mais la nuit en altitude se rafraîchit. ${WILD_TREK_PORTER.fr}`),
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue, formé aux premiers secours (APH)', 'Camping sauvage (1 nuit), avec tente, tapis isolant et sac de couchage', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après le sentier'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Équipement personnel', 'Évacuation médicale'],
      },
      safetyFaq(
        'fr',
        'Le sentier est facile, mais la nuit se passe sous tente à la belle étoile et il fait frais — les vêtements pour dormir ne sont pas une option ici. Le campement se trouve dans une zone de sources : tout ce qui entre doit ressortir avec le groupe, sans exception.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt pour votre', 'première nuit sous tente ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Wandelpad Águas Claras — 2 dagen',
      description:
        'De ideale eerste nacht in de tent: 23 km over overwegend vlak terrein naar de heldere poelen van de Vale dos 3 Irmãos.',
      canonical: '/nl/avonturen/wandelpad-aguas-claras',
    },
    hero: {
      nivel: 'Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '2 dagen',
      titulo: 'Wandelpad Águas Claras.',
      lead: 'Het ideale pad voor een eerste nacht in de tent — vlak, kort, en ’s nachts de hele sterrenhemel.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Waar je slaapt', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over het wandelpad Águas Claras.',
      paragrafos: [
        'Dit is de juiste tocht voor wie nog nooit heeft gekampeerd en met een makkelijk pad wil beginnen, en net zo goed voor wie met kinderen of oudere reisgenoten reist. Het terrein is overwegend vlak.',
        'De wandeling begint bij de Morro do Pai Inácio en gaat richting de Vale dos 3 Irmãos — twee iconen van de Chapada Diamantina op één dag. Het is 9 km, zo’n 3 uur, tot de heldere poelen waar we kamperen.',
        'Het brongebied van Águas Claras is kwetsbaar: hier letten we dubbel zo goed op ons afval, en daarom ligt het kamp zo’n 60 meter van de rivier.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.nl,
    itinerario: {
      titulo: 'Dag voor dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt. Deze trektocht is flexibel en kent verschillende in- en uitstappunten — vraag ons naar de mogelijkheden.',
      corpo: [],
      dias: [
        {
          rotulo: 'Dag 1',
          titulo: 'Transfer naar Pai Inácio + wandelpad Águas Claras + kamp',
          corpo: 'Vertrek vanaf 7.00 uur uit het centrum van Lençóis, met alle bagage, per auto naar de omgeving van de Morro do Pai Inácio aan de BR-242. Na de laatste voorbereidingen begint de wandeling richting de Vale dos 3 Irmãos: 9 km, zo’n 3 uur, tot de heldere poelen. We zetten het kamp op zo’n 60 meter van de rivier — het brongebied is kwetsbaar en we letten dubbel zo goed op afval. Rond 13.00 uur komen we aan; de gids maakt de picknick klaar terwijl de groep van de rivier geniet. ’s Middags is er tijd om de omgeving van het kamp te verkennen, de planten te leren kennen en naar de bergen te kijken tot het avondeten, vanaf 18.00 uur. Is de lucht helder, dan valt de nacht zonder enig kunstlicht — en, afhankelijk van de datum, met volle maan.',
          distancia: '9 km',
          esforco: 'Licht / Gemiddeld',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'Águas Claras + wandelpad Grisante',
          corpo: 'Na het ontbijt dat de gids klaarmaakt, breken we het kamp op en vertrekken we rond 9.00 uur. We lopen een uur tot de Morrão voor ons opdoemt, een van de bekendste bezienswaardigheden van de Vale do Capão, en nog 30 minuten naar de Poço das Piabas, waar we rond het middaguur zwemmen en iets eten. Na nog 2 uur komt Lençóis in zicht, en een afdaling van 40 minuten brengt ons in het historische centrum, waar het pad eindigt.',
          distancia: '15 km',
          esforco: 'Gemiddeld',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 1.850', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 1.250', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      wildTrekChecklist('nl', `Het is de makkelijkste van onze kampeertochten, maar ’s nachts wordt het daarboven koud. ${WILD_TREK_PORTER.nl}`),
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met EHBO-opleiding', 'Wildkamperen (1 nacht), met tent, isolatiemat en slaapzak', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na het pad'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Persoonlijke uitrusting', 'Medische evacuatie'],
      },
      safetyFaq(
        'nl',
        'Het pad is makkelijk, maar de nacht breng je door in een tent onder de open hemel en het wordt koud — nachtkleding is hier geen optie maar een must. Het kamp ligt in een brongebied: alles wat erin gaat, gaat met de groep weer mee naar buiten, zonder uitzondering.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar voor je', 'eerste nacht in de tent?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wanderweg Águas Claras — 2 Tage',
      description:
        'Die ideale erste Nacht im Zelt: 23 km über überwiegend flaches Gelände zu den klaren Becken des Vale dos 3 Irmãos.',
      canonical: '/de/abenteuer/wanderweg-aguas-claras',
    },
    hero: {
      nivel: 'Mittel',
      origem: 'Start: Lençóis',
      duracao: '2 Tage',
      titulo: 'Wanderweg Águas Claras.',
      lead: 'Der ideale Weg für die erste Nacht im Zelt — flach, kurz, und nachts der ganze Sternenhimmel.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Dauer', 'Übernachtung', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Wanderweg Águas Claras.',
      paragrafos: [
        'Die richtige Tour für alle, die noch nie gezeltet haben und mit einem leichten Weg anfangen möchten — und genauso für alle, die mit Kindern oder älteren Mitreisenden unterwegs sind. Das Gelände ist überwiegend flach.',
        'Die Wanderung beginnt am Morro do Pai Inácio und führt Richtung Vale dos 3 Irmãos — zwei Wahrzeichen der Chapada Diamantina an einem Tag. Es sind 9 km, rund 3 Stunden, bis zu den klaren Becken, an denen wir zelten.',
        'Das Quellgebiet von Águas Claras ist empfindlich: Hier achten wir doppelt auf unseren Müll, und deshalb liegt das Lager rund 60 Meter vom Fluss entfernt.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.de,
    itinerario: {
      titulo: 'Tag für Tag.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält. Diese Tour ist flexibel und hat verschiedene Ein- und Ausstiegspunkte — frag uns nach den Möglichkeiten.',
      corpo: [],
      dias: [
        {
          rotulo: 'Tag 1',
          titulo: 'Transfer zum Pai Inácio + Wanderweg Águas Claras + Lager',
          corpo: 'Start ab 7:00 Uhr im Zentrum von Lençóis, mit dem ganzen Gepäck, per Auto in die Umgebung des Morro do Pai Inácio an der BR-242. Nach den letzten Vorbereitungen beginnt die Wanderung Richtung Vale dos 3 Irmãos: 9 km, rund 3 Stunden, bis zu den klaren Becken. Wir schlagen das Lager rund 60 Meter vom Fluss entfernt auf — das Quellgebiet ist empfindlich, und wir achten doppelt auf den Müll. Gegen 13:00 Uhr kommen wir an; der Guide bereitet das Picknick vor, während die Gruppe den Fluss genießt. Am Nachmittag ist Zeit, die Umgebung des Lagers zu erkunden, die Pflanzen kennenzulernen und auf die Berge zu schauen, bis es ab 18:00 Uhr Abendessen gibt. Ist der Himmel klar, bricht die Nacht ganz ohne künstliches Licht herein — und je nach Datum bei Vollmond.',
          distancia: '9 km',
          esforco: 'Leicht / Mittel',
        },
        {
          rotulo: 'Tag 2',
          titulo: 'Águas Claras + Wanderweg Grisante',
          corpo: 'Nach dem Frühstück, das der Guide zubereitet, bauen wir das Lager ab und brechen gegen 9:00 Uhr auf. Wir gehen eine Stunde, bis der Morrão vor uns auftaucht, eine der bekanntesten Sehenswürdigkeiten des Vale do Capão, und noch 30 Minuten bis zum Poço das Piabas, wo wir gegen Mittag baden und etwas essen. Nach weiteren 2 Stunden kommt Lençóis in Sicht, und ein Abstieg von 40 Minuten bringt uns ins historische Zentrum, wo der Weg endet.',
          distancia: '15 km',
          esforco: 'Mittel',
        },
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 1.850', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 1.250', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      wildTrekChecklist('de', `Es ist die leichteste unserer Campingtouren, aber nachts wird es dort oben kalt. ${WILD_TREK_PORTER.de}`),
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger Bergführer mit Erste-Hilfe-Ausbildung', 'Wildcamping (1 Nacht), mit Zelt, Isomatte und Schlafsack', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Warteraum, sichere Gepäckaufbewahrung und Dusche vor/nach der Wanderung'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Unterkunft vor oder nach der Tour', 'Persönliche Ausrüstung', 'Medizinische Evakuierung'],
      },
      safetyFaq(
        'de',
        'Der Weg ist leicht, aber die Nacht verbringst du im Zelt unter freiem Himmel, und es wird kalt — Schlafkleidung ist hier keine Option, sondern Pflicht. Das Lager liegt in einem Quellgebiet: Alles, was hineingeht, nimmt die Gruppe ohne Ausnahme wieder mit hinaus.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit für deine', 'erste Nacht im Zelt?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
