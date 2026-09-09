/**
 * Conteúdo do Parque da Muritiba, por idioma.
 *
 * PT vem de mamut.agency/aventuras/parque-da-muritiba e EN de
 * mamut.agency/en/aventuras/muritiba-park. ES é tradução feita aqui.
 *
 * O passeio mais denso em atrativos do catálogo: sete paradas em 4 km, todas a
 * pé desde o centro de Lençóis. A faixa de números conta isso, e o itinerário
 * segue a ordem real das paradas em vez de virar prosa corrida.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const MURITIBA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/muritiba/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/muritiba/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/muritiba/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/muritiba/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['4 km', '/svg/_icons/icon_03_montain.svg'],
    ['7 atrativos', '/svg/_icons/icon_09_location.svg'],
    ['4 a 5 horas', '/svg/_icons/icon_11_calendar.svg'],
    ['555 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['8h às 14h', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 160,
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
        { titulo: 'Pacote privado', preco: 'R$ 220', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 160', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        { titulo: 'Private package', preco: 'R$ 220', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 160', nota: 'From 2 to 7 people. You join an open group.' },
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
        { titulo: 'Paquete privado', preco: 'R$ 220', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 160', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
};
