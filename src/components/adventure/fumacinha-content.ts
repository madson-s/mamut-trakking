/**
 * Conteúdo da página da Cachoeira da Fumacinha, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumacinha e EN de
 * mamut.agency/en/aventuras/fumacinha-waterfall. ES é tradução feita aqui.
 *
 * As fotos são verticais (1920×2560) — é o formato em que a operadora
 * fotografou o cânion, e o que faz sentido para paredões de 100 metros.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { PRICE_TABLE_LABELS, pricing } from './price-table';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const FUMACINHA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumacinha/hero.jpg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/fumacinha/1.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/fumacinha/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/fumacinha/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['260 km', '/svg/_icons/icon_09_location.svg'],
    ['100 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['5h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Pesado', '/svg/_icons/icon_03_montain.svg'],
  ],
  // Valores publicados em mamut.agency/aventuras/cachoeira-da-fumacinha (#tabela-pagamento).
  // [pessoas, privado, em grupo]
  ...pricing([
    ['1', 1200, 715],
    ['2', 830, 715],
    ['3', 715, 625],
    ['4+', 625, 550],
  ]),
};

export const FUMACINHA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumacinha',
      description:
        'Dezoito quilômetros no leito do rio entre cânions de 100 metros, em Ibicoara. O roteiro mais técnico de um dia da Chapada Diamantina.',
      canonical: '/pt/aventuras/cachoeira-da-fumacinha',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origem: Ibicoara',
      duracao: '1 dia',
      titulo: 'Cachoeira da Fumacinha.',
      lead: 'Dezoito quilômetros dentro do rio, entre paredões de cem metros que vão se fechando.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura dos cânions', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira da Fumacinha.',
      paragrafos: [
        'A Fumacinha é o roteiro de um dia mais técnico que operamos. Grande parte dos 18 quilômetros é feita dentro do leito do rio, saltando entre pedras molhadas, com trechos em que é preciso usar equipamento de segurança para passar.',
        'O cenário compensa: o cânion vai estreitando e as paredes chegam a 100 metros de altura de cada lado. No caminho o grupo passa pela Cachoeira do Encontro, onde dois cursos d’água se juntam.',
        'A dificuldade não está só na distância — está no piso. É trilha para quem já caminhou antes e está confortável com terreno irregular e escorregadio por horas seguidas.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 5h00, com tolerância de 30 minutos. O horário é cedo porque o dia é longo e o deslocamento também: são cerca de 260 km e 3 horas de carro até Ibicoara.',
        'De Ibicoara, mais 1 hora até o início da trilha, já em estrada de terra.',
        'A caminhada entra logo no leito do rio. O grupo segue rio acima saltando pedras, com o cânion se fechando aos poucos e as paredes ganhando altura.',
        'Passagem pela Cachoeira do Encontro, onde dois cursos d’água se juntam — parada boa para respirar antes do trecho final.',
        'Nos pontos mais expostos usamos equipamento de segurança para a passagem, um de cada vez, com o guia posicionado.',
        'Chegada à Fumacinha, banho e piquenique. A volta é pelo mesmo caminho e o retorno a Lençóis é já à noite.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 715', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 550', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      tabela: PRICE_TABLE_LABELS.pt,
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (2L por pessoa)', 'Bota de caminhada com boa aderência', 'Meias extras', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Lanterna de cabeça'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Muda de roupa seca para a volta']],
        note: 'Calçado é o item crítico deste roteiro: quase toda a trilha é em pedra molhada. Lanterna é obrigatória porque a saída é antes do amanhecer e a volta pode terminar no escuro.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Equipamento de segurança para as passagens técnicas', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Taxa de acesso', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'Não recomendamos fazer a Fumacinha em bate-volta de Lençóis: são 3 horas de carro em cada ponta somadas a um dia inteiro de trilha técnica. Se puder, durma em Ibicoara na véspera. Os trechos expostos do cânion são vencidos com equipamento de segurança, um participante de cada vez.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para entrar', 'no cânion?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumacinha Falls',
      description:
        'Eighteen kilometres up the riverbed between 100-metre canyon walls, in Ibicoara. The most technical day trip in the Chapada Diamantina.',
      canonical: '/en/adventures/fumacinha-waterfall',
    },
    hero: {
      nivel: 'Moderate / Heavy',
      origem: 'From: Ibicoara',
      duracao: '1 day',
      titulo: 'Fumacinha Falls.',
      lead: 'Eighteen kilometres inside the river, between hundred-metre walls that keep closing in.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Canyon walls', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fumacinha Falls.',
      paragrafos: [
        'Fumacinha is the most technical day trip we run. Much of the 18 kilometres is walked inside the riverbed, hopping between wet rocks, with sections where safety equipment is needed to get through.',
        'The setting makes up for it: the canyon narrows as you go and the walls reach 100 metres on either side. On the way the group passes Encontro Waterfall, where two watercourses meet.',
        'The difficulty is not only the distance — it is the ground. This is a trail for people who have walked before and are comfortable on uneven, slippery terrain for hours at a time.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 5:00 am, with 30 minutes of tolerance. The early start is because both the day and the drive are long: around 260 km and 3 hours by car to Ibicoara.',
        'From Ibicoara, another hour to the trailhead, now on dirt road.',
        'The walk drops into the riverbed early on. The group heads upstream hopping across rocks, with the canyon gradually closing in and the walls gaining height.',
        'Past Encontro Waterfall, where two watercourses meet — a good stop to catch your breath before the final stretch.',
        'At the most exposed points we use safety equipment for the crossing, one at a time, with the guide in position.',
        'Arrival at Fumacinha, swim and picnic. The return is by the same route, and you get back to Lençóis after dark.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 715', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 550', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      tabela: PRICE_TABLE_LABELS.en,
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked * are mandatory. Missing any of them compromises the safety of the group and makes participation unfeasible.',
        requiredColumns: [
          ['Water (2L per person)', 'Hiking boots with good grip', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Head torch'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Dry change of clothes for the drive back']],
        note: 'Footwear is the critical item here: almost the whole trail is on wet rock. A head torch is mandatory because you leave before dawn and may finish in the dark.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Safety equipment for the technical sections', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Personal gear', 'Access fee', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'We do not recommend doing Fumacinha as a same-day round trip from Lençóis: that is 3 hours of driving at each end on top of a full day of technical trail. If you can, sleep in Ibicoara the night before. The exposed sections of the canyon are passed with safety equipment, one participant at a time.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to walk', 'into the canyon?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumacinha',
      description:
        'Dieciocho kilómetros por el lecho del río entre cañones de 100 metros, en Ibicoara. El recorrido de un día más técnico de la Chapada Diamantina.',
      canonical: '/es/aventuras/cascada-da-fumacinha',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origen: Ibicoara',
      duracao: '1 día',
      titulo: 'Cascada da Fumacinha.',
      lead: 'Dieciocho kilómetros dentro del río, entre paredones de cien metros que se van cerrando.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de los cañones', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada da Fumacinha.',
      paragrafos: [
        'La Fumacinha es el recorrido de un día más técnico que operamos. Gran parte de los 18 kilómetros se hace dentro del lecho del río, saltando entre piedras mojadas, con tramos en los que hay que usar equipo de seguridad para pasar.',
        'El escenario compensa: el cañón se va estrechando y las paredes llegan a 100 metros de altura de cada lado. En el camino el grupo pasa por la Cascada do Encontro, donde se juntan dos cursos de agua.',
        'La dificultad no está solo en la distancia — está en el piso. Es un sendero para quien ya caminó antes y está cómodo en terreno irregular y resbaladizo durante horas seguidas.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 5:00, con tolerancia de 30 minutos. El horario es temprano porque el día es largo y el traslado también: unos 260 km y 3 horas de auto hasta Ibicoara.',
        'Desde Ibicoara, otra hora hasta el inicio del sendero, ya por camino de tierra.',
        'La caminata entra enseguida en el lecho del río. El grupo sigue río arriba saltando piedras, con el cañón cerrándose de a poco y las paredes ganando altura.',
        'Paso por la Cascada do Encontro, donde se juntan dos cursos de agua — buena parada para respirar antes del tramo final.',
        'En los puntos más expuestos usamos equipo de seguridad para el paso, de a uno, con el guía posicionado.',
        'Llegada a la Fumacinha, baño y picnic. La vuelta es por el mismo camino y el regreso a Lençóis ya es de noche.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 715', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 550', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      tabela: PRICE_TABLE_LABELS.es,
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (2L por persona)', 'Botas de trekking con buena adherencia', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Linterna frontal'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Muda de ropa seca para la vuelta']],
        note: 'El calzado es el ítem crítico de este recorrido: casi todo el sendero es sobre piedra mojada. La linterna es obligatoria porque la salida es antes del amanecer y la vuelta puede terminar de noche.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Equipo de seguridad para los tramos técnicos', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Tasa de acceso', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'No recomendamos hacer la Fumacinha ida y vuelta en el día desde Lençóis: son 3 horas de auto de cada lado sumadas a un día entero de sendero técnico. Si podés, dormí en Ibicoara la víspera. Los tramos expuestos del cañón se pasan con equipo de seguridad, de a un participante por vez.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para entrar', 'en el cañón?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Cascade da Fumacinha',
      description:
        'Dix-huit kilomètres dans le lit de la rivière, entre des canyons de 100 mètres, à Ibicoara. L’itinéraire d’une journée le plus technique de la Chapada Diamantina.',
      canonical: '/fr/aventures/cascade-da-fumacinha',
    },
    hero: {
      nivel: 'Modéré / Difficile',
      origem: 'Départ : Ibicoara',
      duracao: '1 jour',
      titulo: 'Cascade da Fumacinha.',
      lead: 'Dix-huit kilomètres dans la rivière, entre des parois de cent mètres qui se resserrent peu à peu.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Hauteur des canyons', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade da Fumacinha.',
      paragrafos: [
        'La Fumacinha est l’itinéraire d’une journée le plus technique que nous proposons. Une grande partie des 18 kilomètres se fait dans le lit de la rivière, en sautant de rocher mouillé en rocher mouillé, avec des passages où il faut utiliser un équipement de sécurité pour franchir l’obstacle.',
        'Le décor en vaut la peine : le canyon se resserre et les parois atteignent 100 mètres de haut de chaque côté. En chemin, le groupe passe par la cascade du Encontro, où deux cours d’eau se rejoignent.',
        'La difficulté ne tient pas qu’à la distance — elle tient au terrain. C’est un sentier pour qui a déjà randonné et se sent à l’aise sur un sol irrégulier et glissant pendant des heures d’affilée.',
        'Pendant les marches, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis à 5 h, avec 30 minutes de tolérance. On part tôt parce que la journée est longue, et le trajet aussi : environ 260 km et 3 heures de voiture jusqu’à Ibicoara.',
        'D’Ibicoara, encore 1 heure jusqu’au début du sentier, sur piste en terre.',
        'La marche entre aussitôt dans le lit de la rivière. Le groupe remonte le courant en sautant de rocher en rocher, tandis que le canyon se referme peu à peu et que les parois prennent de la hauteur.',
        'Passage par la cascade du Encontro, où deux cours d’eau se rejoignent — une bonne pause pour souffler avant la dernière partie.',
        'Aux endroits les plus exposés, nous utilisons un équipement de sécurité pour le passage, un par un, avec le guide en place.',
        'Arrivée à la Fumacinha, baignade et pique-nique. Retour par le même chemin ; on rentre à Lençóis déjà de nuit.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 715', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 550', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      tabela: PRICE_TABLE_LABELS.fr,
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et rend la participation impossible.',
        requiredColumns: [
          ['Eau (2 L par personne)', 'Chaussures de randonnée à bonne adhérence', 'Chaussettes de rechange', 'Vêtements légers', 'Maillot de bain'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Lampe frontale'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Serviette', 'Vêtements secs de rechange pour le retour']],
        note: 'Les chaussures sont l’élément critique de cet itinéraire : presque tout le sentier se fait sur rocher mouillé. La lampe frontale est obligatoire car le départ a lieu avant l’aube et le retour peut se terminer dans le noir.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue, formé aux premiers secours (APH)', 'Équipement de sécurité pour les passages techniques', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Transfert (en option)', 'Pique-nique (en option)', 'Équipement personnel', 'Droit d’accès', 'Évacuation médicale', 'Hébergement avant ou après la sortie'],
      },
      safetyFaq(
        'fr',
        'Nous déconseillons de faire la Fumacinha en aller-retour depuis Lençóis : 3 heures de voiture à l’aller et au retour, en plus d’une journée entière de sentier technique. Si possible, dormez à Ibicoara la veille. Les passages exposés du canyon se franchissent avec un équipement de sécurité, un participant à la fois.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à entrer', 'dans le canyon ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Fumacinha',
      description:
        'Achttien kilometer stroomopwaarts door de rivierbedding, tussen canyonwanden van 100 meter, in Ibicoara. De meest technische dagtocht van de Chapada Diamantina.',
      canonical: '/nl/avonturen/waterval-fumacinha',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Ibicoara',
      duracao: '1 dag',
      titulo: 'Waterval Fumacinha.',
      lead: 'Achttien kilometer in de rivier, tussen wanden van honderd meter die steeds dichter naar elkaar toe komen.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Canyonwanden', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Fumacinha.',
      paragrafos: [
        'De Fumacinha is de meest technische dagtocht die we organiseren. Een groot deel van de 18 kilometer loop je in de rivierbedding, springend tussen natte rotsen, met stukken waar je veiligheidsuitrusting nodig hebt om erdoor te komen.',
        'De omgeving maakt het goed: de canyon wordt steeds smaller en de wanden worden aan beide kanten 100 meter hoog. Onderweg komt de groep langs de Waterval Encontro, waar twee waterlopen samenkomen.',
        'De moeilijkheid zit niet alleen in de afstand — maar in het terrein. Dit pad is voor mensen die al eerder hebben gewandeld en zich urenlang op hun gemak voelen op oneffen, glad terrein.',
        'Tijdens onze tochten is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 5.00 uur uit Lençóis, met 30 minuten speling. We vertrekken zo vroeg omdat zowel de dag als de rit lang zijn: zo’n 260 km en 3 uur met de auto naar Ibicoara.',
        'Vanuit Ibicoara nog een uur naar het begin van het pad, nu over onverharde weg.',
        'Al snel daalt de wandeling af in de rivierbedding. De groep trekt stroomopwaarts, springend over de rotsen, terwijl de canyon zich langzaam sluit en de wanden hoger worden.',
        'Langs de Waterval Encontro, waar twee waterlopen samenkomen — een goede stop om op adem te komen voor het laatste stuk.',
        'Op de meest blootgestelde punten gebruiken we veiligheidsuitrusting om over te steken, één voor één, met de gids op zijn plek.',
        'Aankomst bij de Fumacinha, zwemmen en picknicken. De terugweg gaat via dezelfde route, en je bent na het donker terug in Lençóis.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 715', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 550', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      tabela: PRICE_TABLE_LABELS.nl,
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Items met een * zijn verplicht. Ontbreekt er één, dan brengt dat de veiligheid van de groep in gevaar en kun je niet deelnemen.',
        requiredColumns: [
          ['Water (2 L per persoon)', 'Wandelschoenen met goede grip', 'Extra sokken', 'Lichte kleding', 'Zwemkleding'],
          ['Pet of hoed', 'Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Hoofdlamp'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Handdoek', 'Droge set kleren voor de terugrit']],
        note: 'Schoeisel is hier het belangrijkste item: bijna het hele pad loop je over natte rots. Een hoofdlamp is verplicht, want je vertrekt voor zonsopgang en komt misschien in het donker aan.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met EHBO-opleiding', 'Veiligheidsuitrusting voor de technische stukken', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Vervoer (optioneel)', 'Picknick (optioneel)', 'Persoonlijke uitrusting', 'Toegangsprijs', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'We raden af de Fumacinha op één dag heen en terug vanuit Lençóis te doen: dat is aan beide kanten 3 uur rijden, bovenop een volle dag technisch pad. Als het kan, slaap dan de nacht ervoor in Ibicoara. De blootgestelde stukken van de canyon passeer je met veiligheidsuitrusting, één deelnemer tegelijk.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om de canyon', 'in te lopen?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
};
