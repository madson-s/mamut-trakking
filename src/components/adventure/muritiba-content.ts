/**
 * Conteúdo do Parque da Muritiba, por idioma.
 *
 * PT vem de mamut.agency/aventuras/parque-da-muritiba e EN de
 * mamut.agency/en/aventuras/muritiba-park. ES é tradução feita aqui.
 *
 * O passeio mais denso em atrativos do catálogo: sete paradas em 4 km, todas a
 * pé desde o centro de Lençóis. A faixa de números conta isso, e o itinerário
 * segue a ordem real das paradas em vez de virar prosa corrida.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { pricing } from './price-table';

export const MURITIBA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/muritiba/cachoeirinha.jpg', position: '50% 50%' },
  // Uma foto por parada, na ordem do itinerário (o TrekJourney casa galeria[i] com dias[i]).
  galeria: [
    { src: '/img/adventures/muritiba/serrano.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/salao-areias-coloridas.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/poco-halley-rio.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/primavera.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/poco-paraiso.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/mirante-lencois-grupo.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/cachoeirinha.jpg', width: 1600, height: 1200 },
  ],
  // Mais fotos do parque, só para a galeria do Sobre (lightbox).
  fotos: [
    { src: '/img/adventures/muritiba/galeria/10.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/11.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/12.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/13.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/14.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/15.jpg', width: 1200, height: 1600 },
    { src: '/img/adventures/muritiba/galeria/16.jpg', width: 1200, height: 1600 },
    { src: '/img/adventures/muritiba/galeria/17.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/18.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/19.jpg', width: 1200, height: 1600 },
    { src: '/img/adventures/muritiba/galeria/20.jpg', width: 1200, height: 1600 },
    { src: '/img/adventures/muritiba/galeria/01.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/02.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/03.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/04.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/05.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/06.jpg', width: 1200, height: 1600 },
    { src: '/img/adventures/muritiba/galeria/07.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/08.jpg', width: 1600, height: 1200 },
    { src: '/img/adventures/muritiba/galeria/09.jpg', width: 1600, height: 1200 },
  ],
  stats: [
    ['4 km', '/svg/_icons/icon_03_montain.svg'],
    ['7 atrativos', '/svg/_icons/icon_09_location.svg'],
    ['4 a 5 horas', '/svg/_icons/icon_11_calendar.svg'],
    ['555 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['8h às 14h', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 375, 225],
    ['2', 299, 225],
    ['3', 225, 185],
    ['4+', 185, 149],
  ]),
};

export const MURITIBA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Parque da Muritiba',
      description:
        'Sete atrativos em 4 km a pé desde o centro de Lençóis: Serrano, Salão de Areias Coloridas, Poço Halley, Primavera, Poço Paraíso, mirante e Cachoeirinha.',
      canonical: '/pt/aventuras/parque-da-muritiba',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '4 a 5 horas',
      titulo: 'Parque da Muritiba.',
      lead: 'Sete atrativos em quatro quilômetros — e a trilha começa no centro da cidade.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Atrativos', 'Duração', 'Altitude', 'Horário de saída', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Parque da Muritiba.',
      paragrafos: [
        'Um dos passeios mais completos da Chapada Diamantina. O parque abriga cachoeiras, mirantes e grunas, e a rota tradicional passa por sete deles: Piscinas Naturais do Serrano, Salão de Areias Coloridas, Poço Halley, Cachoeira da Primavera, Poço Paraíso, Mirante de Lençóis e Cachoeirinha.',
        'Além dos atrativos, o parque é uma aula de geologia, história e vida social da região — as rochas contam de infiltração e intemperismo, e o caminho passa pelo que a cidade fez com a água.',
        'É leve o bastante para caber em qualquer dia da viagem: dá para sair entre 8h e 14h, e o passeio inteiro leva de 4 a 5 horas. Pode ser combinado com o Morro do Pai Inácio no fim da tarde — fale com o atendimento.',
      ],
    },
    itinerario: {
      titulo: 'As sete paradas.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'A trilha começa no Centro de Atendimento ao Turista (CAT), de onde já se tem um panorama do percurso inteiro. Como o passeio dura de 4 a 5 horas, a saída pode ser a qualquer hora entre 8h e 14h.',
      ],
      dias: [
        {
          rotulo: '5 min',
          titulo: 'Piscinas Naturais do Serrano',
          corpo: 'A primeira parada, logo na saída do CAT: conglomerados polidos pela ação da água ao longo do tempo, formando poços com pequenas cachoeiras.',
          distancia: 'do CAT',
          esforco: 'Leve',
        },
        {
          rotulo: '+15 min',
          titulo: 'Salão das Areias Coloridas',
          corpo: 'Um labirinto onde as pedras passaram por um processo de infiltração — intemperismo — que as deixou porosas e arenosas. É o ponto mais singular do parque, e o que mais rende conversa sobre geologia.',
          distancia: '15 min',
          esforco: 'Leve',
        },
        {
          rotulo: '+15 min',
          titulo: 'Poço Halley',
          corpo: 'Parada para banho, com as argilas coloridas que existem ali por causa das rochas ígneas que afloraram na beira do poço.',
          distancia: '15 min',
          esforco: 'Leve',
        },
        {
          rotulo: '+20 min',
          titulo: 'Cachoeira da Primavera',
          corpo: 'Um dos afluentes do Rio Lençóis — o mesmo rio que cruzamos no Serrano, no começo do dia.',
          distancia: '20 min',
          esforco: 'Leve',
        },
        {
          rotulo: 'Seguindo',
          titulo: 'Poço Paraíso',
          corpo: 'Mais uma parada para banho, em águas rasas, com uma pequena cachoeira.',
          distancia: '—',
          esforco: 'Leve',
        },
        {
          rotulo: '+10 min',
          titulo: 'Mirante de Lençóis',
          corpo: 'Daqui se vê a cidade inteira e um horizonte plano que parece não terminar.',
          distancia: '10 min',
          esforco: 'Moderado',
        },
        {
          rotulo: '+15 min',
          titulo: 'Cachoeirinha',
          corpo: 'Quinze minutos de descida até a última parada: uma cachoeira pequena de águas cristalinas, também afluente do Rio Lençóis.',
          distancia: '15 min',
          esforco: 'Leve',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 299', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 149', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Toalha'], ['Lanche ou fruta', 'Chinelos', 'Câmera']],
        note: 'São quatro paradas para banho em 4 km: toalha e uma muda seca fazem mais diferença aqui do que em qualquer outro passeio curto.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Taxas de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Carregador pessoal', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      safetyFaq(
        'pt',
        'O parque é de acesso fácil, mas os conglomerados polidos pela água ficam escorregadios — e é justamente onde todo mundo quer entrar. Calçado com boa aderência e atenção nas bordas dos poços resolvem o principal risco do dia.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para os sete', 'atrativos da Muritiba?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Muritiba Park',
      description:
        'Seven sights in 4 km on foot from the centre of Lençóis: Serrano, the Coloured Sands Hall, Poço Halley, Primavera, Poço Paraíso, the lookout and Cachoeirinha.',
      canonical: '/en/adventures/muritiba-park',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '4 to 5 hours',
      titulo: 'Muritiba Park.',
      lead: 'Seven sights in four kilometres — and the trail starts in the centre of town.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Sights', 'Duration', 'Altitude', 'Departure window', 'Difficulty'],
    sobre: {
      titulo: 'About Muritiba Park.',
      paragrafos: [
        'One of the most complete trips in the Chapada Diamantina. The park holds waterfalls, lookouts and caves, and the traditional route takes in seven of them: the Serrano natural pools, the Coloured Sands Hall, Poço Halley, Primavera Waterfall, Poço Paraíso, the Lençóis lookout and Cachoeirinha.',
        'Beyond the sights, the park is a lesson in the geology, history and social life of the region — the rocks tell you about infiltration and weathering, and the path passes through what the town made of its water.',
        'It is light enough to fit into any day of your trip: you can set off any time between 8 am and 2 pm, and the whole walk takes 4 to 5 hours. It can be combined with Pai Inácio Hill in the late afternoon — just ask us.',
      ],
    },
    itinerario: {
      titulo: 'The seven stops.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'The trail starts at the Tourist Information Centre (CAT), from where you already get a view of the whole route. Since the walk takes 4 to 5 hours, departure can be any time between 8 am and 2 pm.',
      ],
      dias: [
        {
          rotulo: '5 min',
          titulo: 'Serrano natural pools',
          corpo: 'The first stop, right as you leave the CAT: conglomerate rock polished by water over time, forming pools with small refreshing falls.',
          distancia: 'from the CAT',
          esforco: 'Light',
        },
        {
          rotulo: '+15 min',
          titulo: 'The Coloured Sands Hall',
          corpo: 'A labyrinth where the rock went through a process of infiltration — weathering — that left it porous and sandy. It is the most singular spot in the park, and the one that prompts the most conversation about geology.',
          distancia: '15 min',
          esforco: 'Light',
        },
        {
          rotulo: '+15 min',
          titulo: 'Poço Halley',
          corpo: 'A swimming stop, with the coloured clays found there thanks to the igneous rock that surfaced at the edge of the pool.',
          distancia: '15 min',
          esforco: 'Light',
        },
        {
          rotulo: '+20 min',
          titulo: 'Primavera Waterfall',
          corpo: 'One of the tributaries of the Lençóis river — the same river we crossed at the Serrano at the start of the day.',
          distancia: '20 min',
          esforco: 'Light',
        },
        {
          rotulo: 'Onwards',
          titulo: 'Poço Paraíso',
          corpo: 'Another swimming stop, in shallow water, with a small waterfall.',
          distancia: '—',
          esforco: 'Light',
        },
        {
          rotulo: '+10 min',
          titulo: 'Lençóis lookout',
          corpo: 'From here you can see the whole town and a flat horizon that seems not to end.',
          distancia: '10 min',
          esforco: 'Moderate',
        },
        {
          rotulo: '+15 min',
          titulo: 'Cachoeirinha',
          corpo: 'Fifteen minutes downhill to the last stop: a small waterfall of clear water, also a tributary of the Lençóis river.',
          distancia: '15 min',
          esforco: 'Light',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 299', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 149', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Towel'], ['Snack or fruit', 'Flip-flops', 'Camera']],
        note: 'There are four swimming stops in 4 km: a towel and a dry change matter more here than on any other short trip.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Access fees', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Personal porter', 'Extra drinks', 'Personal gear', 'Medical evacuation', 'Accommodation'],
      },
      safetyFaq(
        'en',
        'The park is easy to reach, but the conglomerate polished by the water gets slippery — and that is exactly where everyone wants to get in. Shoes with good grip and care at the edges of the pools cover the main risk of the day.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for the seven', 'sights of the Muritiba?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Parque da Muritiba',
      description:
        'Siete atractivos en 4 km a pie desde el centro de Lençóis: Serrano, Salón de Arenas Coloridas, Poço Halley, Primavera, Poço Paraíso, mirador y Cachoeirinha.',
      canonical: '/es/aventuras/parque-da-muritiba',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '4 a 5 horas',
      titulo: 'Parque da Muritiba.',
      lead: 'Siete atractivos en cuatro kilómetros — y el sendero empieza en el centro de la ciudad.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Atractivos', 'Duración', 'Altitud', 'Horario de salida', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Parque da Muritiba.',
      paragrafos: [
        'Uno de los paseos más completos de la Chapada Diamantina. El parque alberga cascadas, miradores y grutas, y la ruta tradicional pasa por siete de ellos: Piscinas Naturales del Serrano, Salón de Arenas Coloridas, Poço Halley, Cascada da Primavera, Poço Paraíso, Mirador de Lençóis y Cachoeirinha.',
        'Además de los atractivos, el parque es una clase de geología, historia y vida social de la región — las rocas cuentan de infiltración e intemperismo, y el camino pasa por lo que la ciudad hizo con el agua.',
        'Es suave lo suficiente para entrar en cualquier día del viaje: se puede salir entre las 8 y las 14, y el paseo entero lleva de 4 a 5 horas. Se puede combinar con el Morro do Pai Inácio al final de la tarde — hablá con atención.',
      ],
    },
    itinerario: {
      titulo: 'Las siete paradas.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'El sendero empieza en el Centro de Atención al Turista (CAT), desde donde ya se tiene un panorama del recorrido entero. Como el paseo dura de 4 a 5 horas, la salida puede ser a cualquier hora entre las 8 y las 14.',
      ],
      dias: [
        {
          rotulo: '5 min',
          titulo: 'Piscinas Naturales del Serrano',
          corpo: 'La primera parada, apenas saliendo del CAT: conglomerados pulidos por la acción del agua a lo largo del tiempo, formando pozos con pequeñas cascadas.',
          distancia: 'del CAT',
          esforco: 'Suave',
        },
        {
          rotulo: '+15 min',
          titulo: 'Salón de las Arenas Coloridas',
          corpo: 'Un laberinto donde las piedras pasaron por un proceso de infiltración — intemperismo — que las dejó porosas y arenosas. Es el punto más singular del parque, y el que más conversación genera sobre geología.',
          distancia: '15 min',
          esforco: 'Suave',
        },
        {
          rotulo: '+15 min',
          titulo: 'Poço Halley',
          corpo: 'Parada para bañarse, con las arcillas coloridas que hay ahí por las rocas ígneas que afloraron en el borde del pozo.',
          distancia: '15 min',
          esforco: 'Suave',
        },
        {
          rotulo: '+20 min',
          titulo: 'Cascada da Primavera',
          corpo: 'Uno de los afluentes del Río Lençóis — el mismo río que cruzamos en el Serrano, al comienzo del día.',
          distancia: '20 min',
          esforco: 'Suave',
        },
        {
          rotulo: 'Siguiendo',
          titulo: 'Poço Paraíso',
          corpo: 'Otra parada para bañarse, en aguas bajas, con una pequeña cascada.',
          distancia: '—',
          esforco: 'Suave',
        },
        {
          rotulo: '+10 min',
          titulo: 'Mirador de Lençóis',
          corpo: 'Desde acá se ve la ciudad entera y un horizonte plano que parece no terminar.',
          distancia: '10 min',
          esforco: 'Moderado',
        },
        {
          rotulo: '+15 min',
          titulo: 'Cachoeirinha',
          corpo: 'Quince minutos de bajada hasta la última parada: una cascada pequeña de aguas cristalinas, también afluente del Río Lençóis.',
          distancia: '15 min',
          esforco: 'Suave',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 299', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 149', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Toalla'], ['Snack o fruta', 'Ojotas', 'Cámara']],
        note: 'Son cuatro paradas para bañarse en 4 km: la toalla y una muda seca hacen más diferencia acá que en cualquier otro paseo corto.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Tasas de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Porteador personal', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      safetyFaq(
        'es',
        'El parque es de acceso fácil, pero los conglomerados pulidos por el agua quedan resbaladizos — y es justamente donde todos quieren entrar. Calzado con buena adherencia y atención en los bordes de los pozos resuelven el principal riesgo del día.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para los siete', 'atractivos de la Muritiba?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Parc de la Muritiba',
      description:
        'Sept sites en 4 km à pied depuis le centre de Lençóis : Serrano, Salão de Areias Coloridas, Poço Halley, Primavera, Poço Paraíso, le belvédère et Cachoeirinha.',
      canonical: '/fr/aventures/parc-de-la-muritiba',
    },
    hero: {
      nivel: 'Facile / Modéré',
      origem: 'Départ : Lençóis',
      duracao: '4 à 5 heures',
      titulo: 'Parc de la Muritiba.',
      lead: 'Sept sites en quatre kilomètres — et le sentier commence en plein centre-ville.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Sites', 'Durée', 'Altitude', 'Horaire de départ', 'Difficulté'],
    sobre: {
      titulo: 'À propos du parc de la Muritiba.',
      paragrafos: [
        'L’une des excursions les plus complètes de la Chapada Diamantina. Le parc abrite des cascades, des belvédères et des grottes, et l’itinéraire classique passe par sept d’entre eux : les piscines naturelles du Serrano, le Salão de Areias Coloridas, le Poço Halley, la cascade da Primavera, le Poço Paraíso, le belvédère de Lençóis et la Cachoeirinha.',
        'Au-delà des sites, le parc est une leçon de géologie, d’histoire et de vie sociale de la région — les roches racontent l’infiltration et l’érosion, et le chemin montre ce que la ville a fait de son eau.',
        'Assez facile pour trouver sa place n’importe quel jour du voyage : on peut partir entre 8h et 14h, et l’excursion complète dure de 4 à 5 heures. Elle peut se combiner avec le Morro do Pai Inácio en fin d’après-midi — contactez notre équipe.',
      ],
    },
    itinerario: {
      titulo: 'Les sept étapes.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Le sentier commence au centre d’accueil des visiteurs (CAT), d’où l’on a déjà une vue d’ensemble de tout le parcours. Comme l’excursion dure de 4 à 5 heures, le départ peut se faire à toute heure entre 8h et 14h.',
      ],
      dias: [
        {
          rotulo: '5 min',
          titulo: 'Piscines naturelles du Serrano',
          corpo: 'La première étape, juste à la sortie du CAT : des conglomérats polis par l’action de l’eau au fil du temps, formant des bassins avec de petites cascades.',
          distancia: 'du CAT',
          esforco: 'Facile',
        },
        {
          rotulo: '+15 min',
          titulo: 'Salão das Areias Coloridas',
          corpo: 'Un labyrinthe où les roches ont subi un processus d’infiltration — l’érosion — qui les a rendues poreuses et sableuses. C’est le point le plus singulier du parc, et celui qui suscite le plus de discussions sur la géologie.',
          distancia: '15 min',
          esforco: 'Facile',
        },
        {
          rotulo: '+15 min',
          titulo: 'Poço Halley',
          corpo: 'Halte baignade, avec les argiles colorées qui s’y trouvent grâce aux roches ignées affleurant au bord du bassin.',
          distancia: '15 min',
          esforco: 'Facile',
        },
        {
          rotulo: '+20 min',
          titulo: 'Cascade da Primavera',
          corpo: 'L’un des affluents du Rio Lençóis — la même rivière que nous traversons au Serrano, au début de la journée.',
          distancia: '20 min',
          esforco: 'Facile',
        },
        {
          rotulo: 'Ensuite',
          titulo: 'Poço Paraíso',
          corpo: 'Une autre halte baignade, en eaux peu profondes, avec une petite cascade.',
          distancia: '—',
          esforco: 'Facile',
        },
        {
          rotulo: '+10 min',
          titulo: 'Belvédère de Lençóis',
          corpo: 'D’ici, on voit toute la ville et un horizon plat qui semble ne jamais finir.',
          distancia: '10 min',
          esforco: 'Modéré',
        },
        {
          rotulo: '+15 min',
          titulo: 'Cachoeirinha',
          corpo: 'Quinze minutes de descente jusqu’à la dernière étape : une petite cascade aux eaux cristallines, elle aussi affluent du Rio Lençóis.',
          distancia: '15 min',
          esforco: 'Facile',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 299', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 149', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
        recommendedColumns: [['Imperméable (corps et sac)', 'Serviette'], ['En-cas ou fruit', 'Tongs', 'Appareil photo']],
        note: 'Quatre haltes baignade en 4 km : une serviette et des vêtements secs de rechange comptent ici plus que pour toute autre courte excursion.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue formé aux premiers secours (APH)', 'Droits d’accès', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Pique-nique (en option)', 'Porteur personnel', 'Boissons supplémentaires', 'Équipement personnel', 'Évacuation médicale', 'Hébergement'],
      },
      safetyFaq(
        'fr',
        'Le parc est facile d’accès, mais les conglomérats polis par l’eau deviennent glissants — et c’est justement là que tout le monde veut entrer. Des chaussures à bonne adhérence et de la prudence au bord des bassins règlent le principal risque de la journée.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt pour les sept', 'sites de la Muritiba ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Parque da Muritiba',
      description:
        'Zeven bezienswaardigheden in 4 km te voet vanuit het centrum van Lençóis: Serrano, de Salão de Areias Coloridas, Poço Halley, Primavera, Poço Paraíso, het uitkijkpunt en de Cachoeirinha.',
      canonical: '/nl/avonturen/park-muritiba',
    },
    hero: {
      nivel: 'Licht / Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '4 à 5 uur',
      titulo: 'Parque da Muritiba.',
      lead: 'Zeven bezienswaardigheden in vier kilometer — en het pad begint in het centrum van het stadje.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Bezienswaardigheden', 'Duur', 'Hoogte', 'Vertrektijd', 'Zwaarte'],
    sobre: {
      titulo: 'Over het Parque da Muritiba.',
      paragrafos: [
        'Een van de meest complete tochten van de Chapada Diamantina. Het park heeft watervallen, uitkijkpunten en grotten, en de traditionele route neemt er zeven mee: de natuurlijke baden van de Serrano, de Salão de Areias Coloridas (de zaal van het gekleurde zand), de Poço Halley, de Waterval Primavera, de Poço Paraíso, het uitkijkpunt over Lençóis en de Cachoeirinha.',
        'Naast de bezienswaardigheden is het park een les in de geologie, de geschiedenis en het sociale leven van de regio — de rotsen vertellen over infiltratie en verwering, en het pad loopt langs wat het stadje met zijn water heeft gedaan.',
        'Hij is licht genoeg om op elke dag van je reis te passen: je kunt op elk moment tussen 8.00 en 14.00 uur vertrekken, en de hele wandeling duurt 4 tot 5 uur. Hij is te combineren met de Morro do Pai Inácio laat in de middag — vraag het ons gewoon.',
      ],
    },
    itinerario: {
      titulo: 'De zeven stops.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Het pad begint bij het toeristeninformatiecentrum (CAT), vanwaar je de hele route al ziet liggen. Omdat de wandeling 4 tot 5 uur duurt, kun je op elk moment tussen 8.00 en 14.00 uur vertrekken.',
      ],
      dias: [
        {
          rotulo: '5 min',
          titulo: 'Natuurlijke baden van de Serrano',
          corpo: 'De eerste stop, meteen bij het verlaten van het CAT: conglomeraatgesteente dat het water in de loop der tijd heeft gladgeslepen, met poelen en kleine verfrissende watervalletjes.',
          distancia: 'vanaf het CAT',
          esforco: 'Licht',
        },
        {
          rotulo: '+15 min',
          titulo: 'Salão de Areias Coloridas',
          corpo: 'Een labyrint waar het gesteente een proces van infiltratie — verwering — heeft doorgemaakt dat het poreus en zanderig maakte. Het is de bijzonderste plek van het park, en de plek die het meeste gesprek over geologie oplevert.',
          distancia: '15 min',
          esforco: 'Licht',
        },
        {
          rotulo: '+15 min',
          titulo: 'Poço Halley',
          corpo: 'Een zwemstop, met de gekleurde kleisoorten die je hier vindt dankzij het stollingsgesteente dat aan de rand van de poel aan de oppervlakte kwam.',
          distancia: '15 min',
          esforco: 'Licht',
        },
        {
          rotulo: '+20 min',
          titulo: 'Waterval Primavera',
          corpo: 'Een van de zijrivieren van de rivier de Lençóis — dezelfde rivier die we aan het begin van de dag bij de Serrano overstaken.',
          distancia: '20 min',
          esforco: 'Licht',
        },
        {
          rotulo: 'Verder',
          titulo: 'Poço Paraíso',
          corpo: 'Nog een zwemstop, in ondiep water, met een kleine waterval.',
          distancia: '—',
          esforco: 'Licht',
        },
        {
          rotulo: '+10 min',
          titulo: 'Uitkijkpunt over Lençóis',
          corpo: 'Vanaf hier zie je het hele stadje en een vlakke horizon die geen einde lijkt te hebben.',
          distancia: '10 min',
          esforco: 'Gemiddeld',
        },
        {
          rotulo: '+15 min',
          titulo: 'Cachoeirinha',
          corpo: 'Vijftien minuten bergaf naar de laatste stop: een kleine waterval met helder water, ook een zijrivier van de rivier de Lençóis.',
          distancia: '15 min',
          esforco: 'Licht',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 299', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 149', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Handdoek'], ['Snack of fruit', 'Slippers', 'Camera']],
        note: 'Er zijn vier zwemstops in 4 km: een handdoek en droge kleren zijn hier belangrijker dan bij welke andere korte tocht ook.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met EHBO-opleiding', 'Entreegelden', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Picknick (optioneel)', 'Persoonlijke drager', 'Extra drankjes', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting'],
      },
      safetyFaq(
        'nl',
        'Het park is makkelijk bereikbaar, maar het door het water gladgeslepen conglomeraat wordt glad — en juist daar wil iedereen het water in. Schoenen met goede grip en voorzichtigheid aan de randen van de poelen dekken het belangrijkste risico van de dag af.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar voor de zeven', 'bezienswaardigheden van de Muritiba?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Parque da Muritiba',
      description:
        'Sieben Sehenswürdigkeiten auf 4 km zu Fuß ab dem Zentrum von Lençóis: Serrano, der Salão de Areias Coloridas, Poço Halley, Primavera, Poço Paraíso, der Aussichtspunkt und die Cachoeirinha.',
      canonical: '/de/abenteuer/park-muritiba',
    },
    hero: {
      nivel: 'Leicht / Mittel',
      origem: 'Start: Lençóis',
      duracao: '4 bis 5 Stunden',
      titulo: 'Parque da Muritiba.',
      lead: 'Sieben Sehenswürdigkeiten auf vier Kilometern — und der Weg beginnt im Zentrum des Städtchens.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Sehenswürdigkeiten', 'Dauer', 'Höhe', 'Startzeit', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Parque da Muritiba.',
      paragrafos: [
        'Eine der vollständigsten Touren der Chapada Diamantina. Der Park hat Wasserfälle, Aussichtspunkte und Höhlen, und die traditionelle Route nimmt sieben davon mit: die Naturbecken des Serrano, den Salão de Areias Coloridas (den Saal des farbigen Sandes), den Poço Halley, den Primavera-Wasserfall, den Poço Paraíso, den Aussichtspunkt über Lençóis und die Cachoeirinha.',
        'Neben den Sehenswürdigkeiten ist der Park eine Lektion in Geologie, Geschichte und sozialem Leben der Region — die Felsen erzählen von Infiltration und Verwitterung, und der Weg führt an dem vorbei, was das Städtchen aus seinem Wasser gemacht hat.',
        'Sie ist leicht genug, um an jeden Tag deiner Reise zu passen: Du kannst jederzeit zwischen 8:00 und 14:00 Uhr starten, und die ganze Wanderung dauert 4 bis 5 Stunden. Sie lässt sich mit dem Morro do Pai Inácio am späten Nachmittag kombinieren — frag uns einfach.',
      ],
    },
    itinerario: {
      titulo: 'Die sieben Stopps.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Der Weg beginnt am Touristeninformationszentrum (CAT), von wo du schon die ganze Route vor dir siehst. Da die Wanderung 4 bis 5 Stunden dauert, kannst du jederzeit zwischen 8:00 und 14:00 Uhr starten.',
      ],
      dias: [
        {
          rotulo: '5 Min.',
          titulo: 'Naturbecken des Serrano',
          corpo: 'Der erste Stopp, gleich nach dem CAT: Konglomeratgestein, das das Wasser im Lauf der Zeit glatt geschliffen hat, mit Becken und kleinen erfrischenden Wasserfällen.',
          distancia: 'ab dem CAT',
          esforco: 'Leicht',
        },
        {
          rotulo: '+15 Min.',
          titulo: 'Salão de Areias Coloridas',
          corpo: 'Ein Labyrinth, in dem das Gestein einen Prozess der Infiltration — Verwitterung — durchlaufen hat, der es porös und sandig machte. Es ist der besonderste Ort des Parks und der, der die meisten Gespräche über Geologie auslöst.',
          distancia: '15 Min.',
          esforco: 'Leicht',
        },
        {
          rotulo: '+15 Min.',
          titulo: 'Poço Halley',
          corpo: 'Ein Badestopp, mit den farbigen Tonen, die es hier dank des magmatischen Gesteins gibt, das am Rand des Beckens an die Oberfläche kam.',
          distancia: '15 Min.',
          esforco: 'Leicht',
        },
        {
          rotulo: '+20 Min.',
          titulo: 'Primavera-Wasserfall',
          corpo: 'Einer der Nebenflüsse des Flusses Lençóis — desselben Flusses, den wir zu Beginn des Tages am Serrano überquert haben.',
          distancia: '20 Min.',
          esforco: 'Leicht',
        },
        {
          rotulo: 'Weiter',
          titulo: 'Poço Paraíso',
          corpo: 'Noch ein Badestopp, in flachem Wasser, mit einem kleinen Wasserfall.',
          distancia: '—',
          esforco: 'Leicht',
        },
        {
          rotulo: '+10 Min.',
          titulo: 'Aussichtspunkt über Lençóis',
          corpo: 'Von hier siehst du das ganze Städtchen und einen flachen Horizont, der kein Ende zu haben scheint.',
          distancia: '10 Min.',
          esforco: 'Mittel',
        },
        {
          rotulo: '+15 Min.',
          titulo: 'Cachoeirinha',
          corpo: 'Fünfzehn Minuten bergab zum letzten Stopp: ein kleiner Wasserfall mit klarem Wasser, ebenfalls ein Nebenfluss des Flusses Lençóis.',
          distancia: '15 Min.',
          esforco: 'Leicht',
        },
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 299', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 149', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
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
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Handtuch'], ['Snack oder Obst', 'Flip-Flops', 'Kamera']],
        note: 'Es gibt vier Badestopps auf 4 km: Ein Handtuch und trockene Kleidung sind hier wichtiger als bei jeder anderen kurzen Tour.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger Bergführer mit Erste-Hilfe-Ausbildung', 'Eintrittsgebühren', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Picknick (optional)', 'Persönlicher Träger', 'Zusätzliche Getränke', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft'],
      },
      safetyFaq(
        'de',
        'Der Park ist leicht zugänglich, aber das vom Wasser glatt geschliffene Konglomerat wird rutschig — und gerade dort wollen alle ins Wasser. Schuhe mit gutem Grip und Vorsicht an den Beckenrändern decken das wichtigste Risiko des Tages ab.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit für die sieben', 'Sehenswürdigkeiten der Muritiba?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
