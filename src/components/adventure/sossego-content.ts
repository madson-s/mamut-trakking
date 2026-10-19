/**
 * Conteúdo da página da Cachoeira do Sossego, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-sossego e EN de
 * mamut.agency/en/adventures/sossego-waterfall. ES é tradução feita aqui.
 *
 * ⚠️ O preço de entrada diverge entre as duas páginas da operadora: a
 * portuguesa diz R$ 200 e a inglesa R$ 240. Mantive R$ 200, que é o valor já
 * registrado no hub de aventuras.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const SOSSEGO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/sossego/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/sossego/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/sossego/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/sossego/3.jpeg', width: 1600, height: 1200 },
  ],
  stats: [
    ['15 km', '/svg/_icons/icon_03_montain.svg'],
    ['+750m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Difícil', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 200,
};

export const SOSSEGO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Sossego',
      description:
        'Uma das trilhas mais desafiadoras da Chapada Diamantina: 15 km saltando pedras no leito do Rio Ribeirão, entre cânions de mais de 100 metros.',
      canonical: '/pt/aventuras/cachoeira-do-sossego',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Cachoeira do Sossego.',
      lead: 'Quinze quilômetros saltando pedra no leito do rio, entre paredões de mais de 100 metros.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Ganho de elevação', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Sossego.',
      paragrafos: [
        'Uma das trilhas mais impressionantes e desafiadoras da Chapada Diamantina. A caminhada envolve subidas e descidas, literalmente pulando pedras no leito do Rio Ribeirão, cercado por cânions que ultrapassam os 100 metros de altura.',
        'O trajeto até a cachoeira é intenso, com muitos aclives e declives. A altimetria acumulada ao final do dia pode ultrapassar os 750 metros.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída às 8h — com tolerância de 15 minutos — do centro de Lençóis, pela trilha tradicional em direção ao Ribeirão do Meio. São cerca de 30 minutos até o Mirante do Rio Ribeirão, de onde já se vê parte do trajeto.',
        'Dali a trilha segue rio acima, com a paisagem mudando a cada passo. No caminho aparecem construções antigas e as "tocas" que abrigavam garimpeiros em busca de diamantes.',
        'Depois de cerca de 1 hora chega-se ao leito do Rio Ribeirão, onde é preciso saltar por várias pedras — que podem estar escorregadias — e, dependendo do clima, atravessar a água. É o trecho que mais cobra do grupo. Mais 30 minutos até a cachoeira.',
        'A volta é pelo mesmo caminho, com parada nos Caldeirões do Ribeirão de Cima para um banho em águas mais rasas.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 250', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 200', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Câmera']],
        note: 'O leito do rio é escorregadio: calçado com boa aderência faz diferença real neste roteiro.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Colete salva-vidas'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq('pt', 'O leito do Rio Ribeirão exige saltar entre pedras que podem estar escorregadias e, conforme o clima, atravessar a água. É o que torna esta trilha mais difícil do que a distância sugere.'),
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
      title: 'Sossego Waterfall',
      description:
        'One of the most demanding trails in the Chapada Diamantina: 15 km hopping boulders along the Ribeirão riverbed, between canyons over 100 metres high.',
      canonical: '/en/adventures/sossego-waterfall',
    },
    hero: {
      nivel: 'Moderate / Hard',
      origem: 'Starts in Lençóis',
      duracao: '1 day',
      titulo: 'Sossego Waterfall.',
      lead: 'Fifteen kilometres hopping boulders along the riverbed, between walls over 100 metres high.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Walking distance', 'Elevation gain', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Sossego Waterfall.',
      paragrafos: [
        'One of the most impressive and rewarding trails in the Chapada Diamantina. It involves hiking up and down, walking and jumping on stones literally in the Ribeirão riverbed, surrounded by canyons over 100 metres high.',
        'The path to reach the waterfall is quite intense, with many ascents and descents. The accumulated elevation gain by the end of the day can exceed 750 m.',
        'On the walks the picnic stands in for lunch: balanced meals across vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any force majeure the team considers relevant.',
      corpo: [
        'Departure at 8:00 — with 15 minutes of tolerance — from the centre of Lençóis, on the traditional trail towards Ribeirão do Meio. It is about 30 minutes to the Rio Ribeirão viewpoint, from where you already see part of the route ahead.',
        'From there the trail follows the river upstream, with the landscape changing at every step. Along the way you pass old constructions and the shelters that housed prospectors searching for diamonds.',
        'After roughly 1 hour you reach the Ribeirão riverbed, where you have to jump across many stones — which may be slippery — and, depending on the weather, cross the water. This is the stretch that asks the most of the group. Another 30 minutes to the waterfall.',
        'The way back follows the same route, with a stop at the Caldeirões do Ribeirão de Cima for a swim in shallower water.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 250', nota: 'Minimum 2 people. Only your group on the trail.' },
        { titulo: 'In a group', preco: 'R$ 200', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: ask our team.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked with * are mandatory. Missing any mandatory item compromises the safety of the group and makes participation impossible.',
        requiredColumns: [
          ['Water (1.5 L per person)', 'Hiking shoes or boots', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your belongings'],
        ],
        recommendedColumns: [['Rain gear (body and backpack)', 'Trekking pole'], ['A snack or fruit', 'Towel', 'Camera']],
        note: 'The riverbed is slippery: footwear with real grip makes a difference on this route.',
      },
      {
        type: 'included',
        title: 'What is included / not included',
        included: ['Bilingual mountain guide with APH training', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Life jacket'],
        excluded: ['Anything not listed above', 'Transfer (optional)', 'Picnic (optional)', 'Personal equipment', 'Medical evacuation', 'Lodging before or after the tour'],
      },
      safetyFaq('en', 'The Ribeirão riverbed requires jumping between stones that may be slippery and, depending on the weather, crossing the water. That is what makes this trail harder than the distance suggests.'),
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
      title: 'Cascada do Sossego',
      description:
        'Uno de los senderos más exigentes de la Chapada Diamantina: 15 km saltando piedras en el lecho del Río Ribeirão, entre cañones de más de 100 metros.',
      canonical: '/es/aventuras/cascada-do-sossego',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Sale de Lençóis',
      duracao: '1 día',
      titulo: 'Cascada do Sossego.',
      lead: 'Quince kilómetros saltando piedras en el lecho del río, entre paredones de más de 100 metros.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Desnivel acumulado', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada do Sossego.',
      paragrafos: [
        'Uno de los senderos más impresionantes y desafiantes de la Chapada Diamantina. La caminata implica subidas y bajadas, literalmente saltando piedras en el lecho del Río Ribeirão, rodeado de cañones que superan los 100 metros de altura.',
        'El trayecto hasta la cascada es intenso, con muchas subidas y bajadas. El desnivel acumulado al final del día puede superar los 750 metros.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a las 8h — con tolerancia de 15 minutos — del centro de Lençóis, por el sendero tradicional hacia el Ribeirão do Meio. Son unos 30 minutos hasta el mirador del Río Ribeirão, desde donde ya se ve parte del trayecto.',
        'Desde ahí el sendero sigue río arriba, con el paisaje cambiando a cada paso. En el camino aparecen construcciones antiguas y las "tocas" que albergaban a los mineros que buscaban diamantes.',
        'Después de aproximadamente 1 hora se llega al lecho del Río Ribeirão, donde hay que saltar por varias piedras — que pueden estar resbaladizas — y, según el clima, cruzar el agua. Es el tramo que más le exige al grupo. Otros 30 minutos hasta la cascada.',
        'La vuelta es por el mismo camino, con parada en los Caldeirões do Ribeirão de Cima para un baño en aguas más bajas.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 250', nota: 'Mínimo 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 200', nota: 'De 2 a 7 personas. Te sumás a un grupo abierto.' },
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
          ['Agua (1,5 L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Merienda o fruta', 'Toalla', 'Cámara']],
        note: 'El lecho del río es resbaladizo: un calzado con buen agarre hace una diferencia real en este recorrido.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña bilingüe con formación APH', 'Rastreador satelital SPOT X', 'Seguro de aventura', 'Kit de primeros auxilios', 'Chaleco salvavidas'],
        excluded: ['Cualquier ítem no listado', 'Transfer (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq('es', 'El lecho del Río Ribeirão exige saltar entre piedras que pueden estar resbaladizas y, según el clima, cruzar el agua. Es lo que hace este sendero más difícil de lo que la distancia sugiere.'),
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
      title: 'Cascade du Sossego',
      description:
        'L’un des sentiers les plus exigeants de la Chapada Diamantina : 15 km à sauter de rocher en rocher dans le lit de la rivière Ribeirão, entre des canyons de plus de 100 mètres.',
      canonical: '/fr/aventures/cascade-du-sossego',
    },
    hero: {
      nivel: 'Modéré / Difficile',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Cascade du Sossego.',
      lead: 'Quinze kilomètres à sauter de rocher en rocher dans le lit de la rivière, entre des parois de plus de 100 mètres.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Dénivelé positif', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade du Sossego.',
      paragrafos: [
        'L’un des sentiers les plus impressionnants et les plus exigeants de la Chapada Diamantina. La marche alterne montées et descentes, en sautant littéralement de rocher en rocher dans le lit de la rivière Ribeirão, entourée de canyons de plus de 100 mètres de haut.',
        'Le trajet jusqu’à la cascade est intense, avec beaucoup de montées et de descentes. Le dénivelé cumulé en fin de journée peut dépasser les 750 mètres.',
        'Pendant les marches, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à 8 h — avec 15 minutes de tolérance — du centre de Lençóis, par le sentier traditionnel en direction du Ribeirão do Meio. Environ 30 minutes jusqu’au belvédère de la rivière Ribeirão, d’où l’on aperçoit déjà une partie du trajet.',
        'De là, le sentier remonte la rivière, et le paysage change à chaque pas. En chemin apparaissent d’anciennes constructions et les « tocas », les abris sous roche des chercheurs de diamants.',
        'Après environ 1 heure, on atteint le lit de la rivière Ribeirão, où il faut sauter de rocher en rocher — ils peuvent être glissants — et, selon la météo, traverser l’eau. C’est le passage le plus exigeant pour le groupe. Encore 30 minutes jusqu’à la cascade.',
        'Retour par le même chemin, avec un arrêt aux Caldeirões do Ribeirão de Cima pour une baignade en eaux moins profondes.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 250', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 200', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et rend la participation impossible.',
        requiredColumns: [
          ['Eau (1,5 L par personne)', 'Baskets ou chaussures de randonnée', 'Chaussettes de rechange', 'Vêtements légers', 'Maillot de bain'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Serviette', 'Appareil photo']],
        note: 'Le lit de la rivière est glissant : des chaussures avec une bonne adhérence font une vraie différence sur cet itinéraire.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue, formé aux premiers secours (APH)', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Gilet de sauvetage'],
        excluded: ['Tout ce qui n’est pas listé', 'Transfert (en option)', 'Pique-nique (en option)', 'Équipement personnel', 'Évacuation médicale', 'Hébergement avant ou après la sortie'],
      },
      safetyFaq('fr', 'Le lit de la rivière Ribeirão oblige à sauter entre des rochers qui peuvent être glissants et, selon la météo, à traverser l’eau. C’est ce qui rend ce sentier plus difficile que sa distance ne le laisse penser.'),
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
      title: 'Waterval Sossego',
      description:
        'Een van de zwaarste paden van de Chapada Diamantina: 15 km van rotsblok naar rotsblok door de bedding van de Ribeirão, tussen canyons van meer dan 100 meter hoog.',
      canonical: '/nl/avonturen/waterval-sossego',
    },
    hero: {
      nivel: 'Gemiddeld / Moeilijk',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Waterval Sossego.',
      lead: 'Vijftien kilometer van rotsblok naar rotsblok door de rivierbedding, tussen wanden van meer dan 100 meter hoog.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Hoogtemeters', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Sossego.',
      paragrafos: [
        'Een van de indrukwekkendste en meest lonende paden van de Chapada Diamantina. Je klimt en daalt, en loopt en springt letterlijk over de stenen in de bedding van de Ribeirão, omringd door canyons van meer dan 100 meter hoog.',
        'De weg naar de waterval is behoorlijk intensief, met veel klimmen en dalen. Aan het eind van de dag kunnen de opgetelde hoogtemeters boven de 750 m uitkomen.',
        'Tijdens de wandelingen is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 8.00 uur — met 15 minuten speling — uit het centrum van Lençóis, over het traditionele pad richting de Ribeirão do Meio. Het is zo’n 30 minuten naar het uitkijkpunt over de Rio Ribeirão, vanwaar je al een deel van de route voor je ziet.',
        'Vandaar volgt het pad de rivier stroomopwaarts, met een landschap dat bij elke stap verandert. Onderweg kom je langs oude bouwsels en de schuilplaatsen van de goudzoekers die hier naar diamanten zochten.',
        'Na ongeveer een uur bereik je de bedding van de Ribeirão, waar je over veel stenen moet springen — die glad kunnen zijn — en, afhankelijk van het weer, door het water moet. Dit stuk vraagt het meest van de groep. Nog 30 minuten tot de waterval.',
        'De terugweg volgt dezelfde route, met een stop bij de Caldeirões do Ribeirão de Cima om te zwemmen in ondieper water.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 250', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 200', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: vraag het ons team.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Items met een * zijn verplicht. Ontbreekt er één, dan brengt dat de veiligheid van de groep in gevaar en kun je niet deelnemen.',
        requiredColumns: [
          ['Water (1,5 L per persoon)', 'Wandelschoenen', 'Extra sokken', 'Lichte kleding', 'Zwemkleding'],
          ['Pet of hoed', 'Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Handdoek', 'Camera']],
        note: 'De rivierbedding is glad: schoenen met echte grip maken op deze route het verschil.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met APH-opleiding', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Zwemvest'],
        excluded: ['Alles wat hierboven niet staat', 'Vervoer (optioneel)', 'Picknick (optioneel)', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq('nl', 'In de bedding van de Ribeirão spring je van steen naar steen, en die kunnen glad zijn; afhankelijk van het weer moet je ook door het water. Daardoor is dit pad zwaarder dan de afstand doet vermoeden.'),
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
      title: 'Wasserfall Sossego',
      description:
        'Einer der anspruchsvollsten Wege der Chapada Diamantina: 15 km von Felsblock zu Felsblock durch das Flussbett des Ribeirão, zwischen über 100 Meter hohen Canyons.',
      canonical: '/de/abenteuer/wasserfall-sossego',
    },
    hero: {
      nivel: 'Mittel / Schwierig',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Wasserfall Sossego.',
      lead: 'Fünfzehn Kilometer von Felsblock zu Felsblock durch das Flussbett, zwischen über 100 Meter hohen Wänden.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Höhenmeter', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Sossego-Wasserfall.',
      paragrafos: [
        'Einer der eindrucksvollsten und lohnendsten Wege der Chapada Diamantina. Du steigst auf und ab, gehst und springst buchstäblich über die Steine im Flussbett des Ribeirão, umgeben von über 100 Meter hohen Canyons.',
        'Der Weg zum Wasserfall ist ziemlich intensiv, mit viel Auf und Ab. Am Ende des Tages können die summierten Höhenmeter über 750 m liegen.',
        'Auf den Wanderungen ist das Picknick das Mittagessen: ausgewogene Mahlzeiten mit Vitaminen, Eiweiß, Ballaststoffen und Kohlenhydraten.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 8:00 Uhr — mit 15 Minuten Puffer — im Zentrum von Lençóis, auf dem traditionellen Weg Richtung Ribeirão do Meio. Rund 30 Minuten sind es bis zum Aussichtspunkt über dem Rio Ribeirão, von wo du schon einen Teil der Route vor dir siehst.',
        'Von dort folgt der Weg dem Fluss stromaufwärts, mit einer Landschaft, die sich bei jedem Schritt verändert. Unterwegs kommst du an alten Bauten und den Unterschlüpfen der Goldsucher vorbei, die hier nach Diamanten suchten.',
        'Nach etwa einer Stunde erreichst du das Flussbett des Ribeirão, wo du über viele Steine springen musst — die rutschig sein können — und je nach Wetter durchs Wasser gehst. Dieser Abschnitt verlangt der Gruppe am meisten ab. Noch 30 Minuten bis zum Wasserfall.',
        'Der Rückweg folgt derselben Route, mit einem Halt an den Caldeirões do Ribeirão de Cima, um in flacherem Wasser zu baden.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 250', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 200', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: frag unser Team.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checkliste — was du mitnimmst',
        intro: 'Mit * markierte Gegenstände sind Pflicht. Fehlt einer davon, gefährdet das die Sicherheit der Gruppe und eine Teilnahme ist nicht möglich.',
        requiredColumns: [
          ['Wasser (1,5 L pro Person)', 'Wanderschuhe', 'Ersatzsocken', 'Leichte Kleidung', 'Badesachen'],
          ['Kappe oder Hut', 'Sonnencreme', 'Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Snack oder Obst', 'Handtuch', 'Kamera']],
        note: 'Das Flussbett ist rutschig: Schuhe mit echtem Grip machen auf dieser Route den Unterschied.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger Bergführer mit APH-Ausbildung', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Schwimmweste'],
        excluded: ['Alles, was oben nicht aufgeführt ist', 'Transport (optional)', 'Picknick (optional)', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq('de', 'Im Flussbett des Ribeirão springst du von Stein zu Stein, und die können rutschig sein; je nach Wetter musst du auch durchs Wasser. Deshalb ist dieser Weg anspruchsvoller, als die Strecke vermuten lässt.'),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Dein Weg beginnt', 'mit einer Nachricht.'],
      corpo: 'Schreib uns per WhatsApp. Finde heraus, welche Tour in der Chapada Diamantina am besten zu dir passt und wie du dich darauf vorbereitest.',
      botao: 'Schließ dich der Herde an',
    },
  },
};
