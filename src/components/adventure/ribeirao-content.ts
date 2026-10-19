/**
 * Conteúdo da página do Ribeirão do Meio, por idioma.
 *
 * PT vem de mamut.agency/aventuras/ribeirao-do-meio e EN de
 * mamut.agency/en/aventuras/ribeirao-do-meio-natural-pool. ES é tradução
 * feita aqui.
 *
 * ⚠️ O preço de entrada diverge entre as duas páginas da operadora: a
 * portuguesa diz R$ 145 e a inglesa R$ 185. Mantive R$ 145, o valor em
 * português.
 *
 * ⚠️ A faixa do topo marca "1 dia", mas o próprio itinerário sai às 8h00 e
 * volta às 13h00. Usei "Meio dia", como na página da Cachoeira do Mosquito.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const RIBEIRAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/ribeirao/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/ribeirao/1.jpeg', width: 1536, height: 1229 },
    { src: '/img/adventures/ribeirao/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/ribeirao/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['7 km', '/svg/_icons/icon_03_montain.svg'],
    ['1 km', '/svg/_icons/icon_09_location.svg'],
    ['Meio dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['~13h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 145,
};

export const RIBEIRAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Ribeirão do Meio',
      description:
        'Caminhada leve de 7 km saindo do centro de Lençóis até uma grande piscina natural com tobogã de pedra polida. Meio dia, ideal para famílias.',
      canonical: '/pt/aventuras/ribeirao-do-meio',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: 'Meio dia',
      titulo: 'Ribeirão do Meio.',
      lead: 'Uma piscina natural enorme com tobogã de pedra polida, a 40 minutos de caminhada do centro.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Duração', 'Saída (Lençóis)', 'Retorno previsto', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Ribeirão do Meio.',
      paragrafos: [
        'Sete quilômetros no total, em terreno plano, saindo do próprio centro de Lençóis. É a trilha mais acessível que operamos e a que melhor funciona com crianças.',
        'No atrativo há um poço natural bem grande e, numa das bordas, uma pedra polida lentamente pela passagem da água — o tobogã natural que dá fama ao lugar. Nos arredores existem outros poços mais rasos.',
        'O caminho atravessa a transição entre resquícios de Mata Atlântica e campos rupestres, passando por plantas medicinais, bromélias e cactos. São cerca de 40 minutos de caminhada até o poço.',
        'Dá para combinar o Ribeirão do Meio no mesmo dia com o Parque da Muritiba, o Morro do Pai Inácio ou a Cachoeira do Mosquito. Fale com o atendimento para montar a combinação.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída a partir das 8h00 do centro de Lençóis. Do centro até o Ribeirão do Meio são 3,5 km, quase todos em terreno plano e sem grandes obstáculos.',
        'Durante a caminhada a paisagem muda: resquícios de Mata Atlântica vão dando lugar aos campos rupestres, com flores, cactos e plantas medicinais pelo caminho.',
        'Depois de cerca de 40 minutos chega-se ao poço — uma grande piscina natural com a pedra polida na borda.',
        'Orientação do guia e colete salva-vidas antes de entrar. Aí todo mundo pode usar o poço principal e o tobogã natural; nos arredores há poços mais rasos.',
        'A volta é pelo mesmo caminho, com retorno previsto por volta das 13h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 175', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 145', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (1L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Roupa de banho', 'Boné ou chapéu'],
          ['Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Toalha'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Chinelos', 'Câmera']],
        note: 'Roteiro curto e a pé desde o centro: dá para levar pouco. O essencial é calçado fechado, água e roupa de banho.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local credenciado com treinamento APH', 'Colete salva-vidas', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Lanche ou almoço', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O tobogã é uma pedra polida pela água e fica escorregadio por definição — é o que o torna divertido e o que exige orientação. O colete salva-vidas é fornecido e de uso obrigatório no poço principal, inclusive para adultos. A descida só acontece depois do briefing do guia.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para descer', 'o tobogã de pedra?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Ribeirão do Meio Natural Pool',
      description:
        'An easy 7 km walk from the centre of Lençóis to a large natural pool with a polished-stone slide. Half a day, ideal for families.',
      canonical: '/en/adventures/ribeirao-do-meio-natural-pool',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: 'Half day',
      titulo: 'Ribeirão do Meio.',
      lead: 'A huge natural pool with a polished-stone slide, a 40-minute walk from the town centre.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Duration', 'Departure (Lençóis)', 'Expected return', 'Difficulty'],
    sobre: {
      titulo: 'About Ribeirão do Meio.',
      paragrafos: [
        'Seven kilometres in total, on flat ground, starting from the centre of Lençóis itself. It is the most accessible trail we run and the one that works best with children.',
        'At the site there is a very large natural pool and, on one of its edges, a stone slowly polished by the passing water — the natural slide the place is known for. There are shallower pools nearby.',
        'The path crosses the transition between remnants of Atlantic Forest and rupestrian fields, passing medicinal plants, bromeliads and cacti. It is about a 40-minute walk to the pool.',
        'Ribeirão do Meio can be combined on the same day with Muritiba Park, Pai Inácio Hill or Mosquito Waterfall. Talk to us to put the combination together.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from 8:00 am from the centre of Lençóis. It is 3.5 km from the centre to Ribeirão do Meio, almost all on flat ground and without major obstacles.',
        'The landscape shifts as you walk: remnants of Atlantic Forest give way to rupestrian fields, with flowers, cacti and medicinal plants along the way.',
        'After about 40 minutes you reach the pool — a large natural basin with the polished stone at its edge.',
        "The guide's briefing and life jackets before going in. Then everyone can use the main pool and the natural slide; there are shallower pools nearby.",
        'The return is by the same path, expected back around 1:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 175', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 145', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (1L per person)', 'Trainers or hiking boots', 'Light clothing', 'Swimwear', 'Cap or hat'],
          ['Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things', 'Towel'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Flip-flops', 'Camera']],
        note: 'A short trip on foot from the centre: you can travel light. Closed shoes, water and swimwear are the essentials.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Accredited local guide with first-aid training', 'Life jacket', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Snack or lunch', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The slide is a stone polished by the water and it is slippery by definition — that is what makes it fun and what makes the briefing necessary. A life jacket is provided and mandatory in the main pool, adults included. Nobody goes down before the guide has run through it.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to ride', 'the stone slide?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Ribeirão do Meio',
      description:
        'Caminata suave de 7 km desde el centro de Lençóis hasta una gran piscina natural con tobogán de piedra pulida. Medio día, ideal para familias.',
      canonical: '/es/aventuras/ribeirao-do-meio',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: 'Medio día',
      titulo: 'Ribeirão do Meio.',
      lead: 'Una piscina natural enorme con tobogán de piedra pulida, a 40 minutos de caminata del centro.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Duración', 'Salida (Lençóis)', 'Regreso previsto', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Ribeirão do Meio.',
      paragrafos: [
        'Siete kilómetros en total, en terreno plano, saliendo del propio centro de Lençóis. Es el sendero más accesible que operamos y el que mejor funciona con chicos.',
        'En el atractivo hay un pozo natural bien grande y, en uno de los bordes, una piedra pulida lentamente por el paso del agua — el tobogán natural que le da fama al lugar. Alrededor hay otros pozos más bajos.',
        'El camino atraviesa la transición entre restos de Mata Atlántica y campos rupestres, pasando por plantas medicinales, bromelias y cactus. Son cerca de 40 minutos de caminata hasta el pozo.',
        'Se puede combinar el Ribeirão do Meio el mismo día con el Parque da Muritiba, el Morro do Pai Inácio o la Cascada del Mosquito. Hablá con atención para armar la combinación.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a partir de las 8:00 del centro de Lençóis. Del centro hasta el Ribeirão do Meio son 3,5 km, casi todos en terreno plano y sin grandes obstáculos.',
        'Durante la caminata el paisaje cambia: los restos de Mata Atlántica van dando lugar a los campos rupestres, con flores, cactus y plantas medicinales en el camino.',
        'Después de cerca de 40 minutos se llega al pozo — una gran piscina natural con la piedra pulida en el borde.',
        'Orientación del guía y chaleco salvavidas antes de entrar. Ahí todos pueden usar el pozo principal y el tobogán natural; alrededor hay pozos más bajos.',
        'La vuelta es por el mismo camino, con regreso previsto cerca de las 13:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 175', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 145', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Ropa de baño', 'Gorra o sombrero'],
          ['Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Toalla'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Ojotas', 'Cámara']],
        note: 'Recorrido corto y a pie desde el centro: se puede llevar poco. Lo esencial es calzado cerrado, agua y ropa de baño.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local acreditado con formación en primeros auxilios', 'Chaleco salvavidas', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Snack o almuerzo', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El tobogán es una piedra pulida por el agua y es resbaladizo por definición — es lo que lo hace divertido y lo que exige orientación. El chaleco salvavidas se provee y es de uso obligatorio en el pozo principal, adultos incluidos. Nadie baja antes del briefing del guía.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para bajar', 'el tobogán de piedra?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Ribeirão do Meio',
      description:
        'Une marche facile de 7 km au départ du centre de Lençóis jusqu’à une grande piscine naturelle avec un toboggan de roche polie. Une demi-journée, idéale en famille.',
      canonical: '/fr/aventures/ribeirao-do-meio',
    },
    hero: {
      nivel: 'Facile',
      origem: 'Départ : Lençóis',
      duracao: 'Demi-journée',
      titulo: 'Ribeirão do Meio.',
      lead: 'Une immense piscine naturelle avec un toboggan de roche polie, à 40 minutes de marche du centre.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Durée', 'Départ (Lençóis)', 'Retour prévu', 'Difficulté'],
    sobre: {
      titulo: 'À propos du Ribeirão do Meio.',
      paragrafos: [
        'Sept kilomètres au total, sur terrain plat, au départ même du centre de Lençóis. C’est le sentier le plus accessible que nous proposons, et celui qui convient le mieux aux enfants.',
        'Sur place, un très grand bassin naturel et, sur l’un de ses bords, une roche lentement polie par le passage de l’eau — le toboggan naturel qui a fait la réputation du lieu. Aux alentours, d’autres bassins moins profonds.',
        'Le chemin traverse la transition entre des vestiges de forêt atlantique et les champs rupestres, au milieu de plantes médicinales, de broméliacées et de cactus. Environ 40 minutes de marche jusqu’au bassin.',
        'Le Ribeirão do Meio peut se combiner le même jour avec le parc de la Muritiba, le Morro do Pai Inácio ou la cascade du Mosquito. Contactez notre équipe pour composer la combinaison.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à partir de 8h00 du centre de Lençóis. Du centre au Ribeirão do Meio, il y a 3,5 km, presque entièrement sur terrain plat et sans grands obstacles.',
        'Pendant la marche, le paysage change : les vestiges de forêt atlantique cèdent la place aux champs rupestres, avec des fleurs, des cactus et des plantes médicinales le long du chemin.',
        'Après environ 40 minutes, on arrive au bassin — une grande piscine naturelle bordée par la roche polie.',
        'Consignes du guide et gilet de sauvetage avant d’entrer dans l’eau. Ensuite, chacun peut profiter du bassin principal et du toboggan naturel ; aux alentours, il y a des bassins moins profonds.',
        'Le retour se fait par le même chemin, avec une arrivée prévue vers 13h00.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 175', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 145', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
          ['Eau (1 L par personne)', 'Baskets ou chaussures de randonnée', 'Vêtements légers', 'Maillot de bain', 'Casquette ou chapeau'],
          ['Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires', 'Serviette'],
        ],
        recommendedColumns: [['Imperméable (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Tongs', 'Appareil photo']],
        note: 'Un itinéraire court, à pied depuis le centre : vous pouvez voyager léger. L’essentiel, ce sont des chaussures fermées, de l’eau et un maillot de bain.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide local agréé formé aux premiers secours (APH)', 'Gilet de sauvetage', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Transfert (en option)', 'Pique-nique (en option)', 'En-cas ou déjeuner', 'Équipement personnel', 'Évacuation médicale', 'Hébergement avant ou après l’excursion'],
      },
      safetyFaq(
        'fr',
        'Le toboggan est une roche polie par l’eau, donc glissante par définition — c’est ce qui le rend amusant et ce qui exige des consignes. Le gilet de sauvetage est fourni et obligatoire dans le bassin principal, adultes compris. La descente n’a lieu qu’après le briefing du guide.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à descendre', 'le toboggan de pierre ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Natuurlijk bad Ribeirão do Meio',
      description:
        'Een makkelijke wandeling van 7 km vanuit het centrum van Lençóis naar een groot natuurlijk bad met een glijbaan van gladgeslepen steen. Een halve dag, ideaal voor gezinnen.',
      canonical: '/nl/avonturen/ribeirao-do-meio',
    },
    hero: {
      nivel: 'Licht',
      origem: 'Vertrek: Lençóis',
      duracao: 'Halve dag',
      titulo: 'Ribeirão do Meio.',
      lead: 'Een enorm natuurlijk bad met een glijbaan van gladgeslepen steen, 40 minuten lopen van het centrum.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Duur', 'Vertrek (Lençóis)', 'Verwachte terugkeer', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Ribeirão do Meio.',
      paragrafos: [
        'Zeven kilometer in totaal, over vlak terrein, vanuit het centrum van Lençóis zelf. Het is het toegankelijkste pad dat we organiseren en het pad dat het best werkt met kinderen.',
        'Ter plekke ligt een heel groot natuurlijk bad en, aan een van de randen, een rots die door het stromende water langzaam glad is geslepen — de natuurlijke glijbaan waar de plek om bekendstaat. Vlakbij zijn ondiepere poelen.',
        'Het pad loopt door de overgang tussen restanten van Atlantisch regenwoud en rotsvelden, langs geneeskrachtige planten, bromelia’s en cactussen. Het is zo’n 40 minuten lopen naar het bad.',
        'De Ribeirão do Meio is op dezelfde dag te combineren met het Parque da Muritiba, de Morro do Pai Inácio of de Waterval Mosquito. Praat met ons om de combinatie samen te stellen.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek vanaf 8.00 uur uit het centrum van Lençóis. Het is 3,5 km van het centrum naar de Ribeirão do Meio, bijna helemaal over vlak terrein en zonder grote obstakels.',
        'Het landschap verandert terwijl je loopt: restanten van Atlantisch regenwoud maken plaats voor rotsvelden, met bloemen, cactussen en geneeskrachtige planten onderweg.',
        'Na zo’n 40 minuten bereik je het bad — een groot natuurlijk bekken met de gladgeslepen rots aan de rand.',
        'Een briefing van de gids en zwemvesten voordat je het water in gaat. Daarna kan iedereen gebruikmaken van het grote bad en de natuurlijke glijbaan; vlakbij zijn ondiepere poelen.',
        'De terugweg gaat via hetzelfde pad; we verwachten rond 13.00 uur terug te zijn.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 175', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 145', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
          ['Water (1 L per persoon)', 'Sportschoenen of wandelschoenen', 'Lichte kleding', 'Zwemkleding', 'Pet of hoed'],
          ['Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen', 'Handdoek'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Slippers', 'Camera']],
        note: 'Een korte tocht te voet vanuit het centrum: je kunt licht reizen. Dichte schoenen, water en zwemkleding zijn het belangrijkst.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Erkende lokale gids met EHBO-opleiding', 'Zwemvest', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Vervoer (optioneel)', 'Picknick (optioneel)', 'Snack of lunch', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'De glijbaan is een door het water gladgeslepen rots en dus per definitie glad — dat maakt hem leuk en de briefing noodzakelijk. Een zwemvest krijg je van ons en is in het grote bad verplicht, ook voor volwassenen. Niemand gaat naar beneden voordat de gids het heeft uitgelegd.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar voor de', 'stenen glijbaan?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
};
