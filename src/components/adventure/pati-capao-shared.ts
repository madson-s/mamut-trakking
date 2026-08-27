/**
 * O que as travessias do Vale do Pati via Capão (4 e 5 dias) dizem igual.
 *
 * As duas percorrem a mesma rota — Palmeiras, Aleixos, Cachoeirão, Castelo,
 * Rampa, Gerais do Vieira — e só diferem no número de dias, na distância e no
 * preço. Manter dois blocos idênticos de "sobre", checklist e sazonalidade
 * garantiria que um dia divergissem por descuido.
 *
 * Fonte: mamut.agency/aventuras/vale-do-pati-{4,5}-dias{-,-via-}capao e as
 * versões inglesas. ES é tradução feita aqui.
 */

import type { Locale } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

/** Os parágrafos de abertura, iguais nas duas páginas da operadora. */
export const PATI_CAPAO_SOBRE: Record<Locale, string[]> = {
  pt: [
    'Um dos trekkings mais bonitos do mundo, na região central da Bahia. O Vale do Pati orbita os 1.000 metros de altitude, com uma variedade rica de transições entre resquícios de Mata Atlântica, campos rupestres — o cerrado de altitude — e campos gerais.',
    'A região foi lar de camponeses há cerca de 200 anos e hoje abriga 14 casas remanescentes, que servem de alojamento para visitantes. É onde você dorme: em casas de nativos do vale, em quartos compartilhados ou privativos (avise com antecedência se precisar de privativo).',
    'É um trekking versátil, que pessoas de qualquer idade conseguem fazer dependendo da rota escolhida. Operamos de 1 a 7 dias dentro do Pati — se estes não couberem na sua estadia, fale com o atendimento.',
    'Café da manhã e jantar são preparados nos alojamentos e o cardápio varia todo dia. Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
  ],
  en: [
    "One of the most beautiful treks in the world, in the central region of Bahia. The Pati Valley sits around 1,000 metres of altitude, with a rich variety of transitions between remnants of Atlantic Forest, rupestrian fields — the high-altitude cerrado — and open grassland.",
    'The region was home to peasant farmers some 200 years ago and today holds 14 remaining houses, which serve as lodging for visitors. That is where you sleep: in the houses of valley natives, in shared or private rooms (let us know in advance if you need a private one).',
    'It is a versatile trek that people of any age can do depending on the route chosen. We run trips of 1 to 7 days inside the Pati — if these do not fit your stay, talk to us.',
    'Breakfast and dinner are prepared at the lodgings and the menu changes daily. On the walks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
  ],
  es: [
    'Uno de los trekkings más lindos del mundo, en la región central de Bahía. El Valle del Pati orbita los 1.000 metros de altitud, con una variedad rica de transiciones entre restos de Mata Atlántica, campos rupestres — el cerrado de altura — y campos generales.',
    'La región fue hogar de campesinos hace cerca de 200 años y hoy alberga 14 casas remanentes, que sirven de alojamiento para visitantes. Es donde dormís: en casas de nativos del valle, en habitaciones compartidas o privadas (avisá con anticipación si necesitás privada).',
    'Es un trekking versátil, que personas de cualquier edad pueden hacer según la ruta elegida. Operamos de 1 a 7 días dentro del Pati — si estos no entran en tu estadía, hablá con atención.',
    'El desayuno y la cena se preparan en los alojamientos y el menú varía todos los días. Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
  ],
};

/** Aviso do itinerário — as duas páginas trazem a mesma ressalva. */
export const PATI_CAPAO_AVISO: Record<Locale, string> = {
  pt: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é muito dinâmico e pode ser feito de várias maneiras, com diversas entradas e saídas — consulte todas as opções com o atendimento.',
  en: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is highly dynamic and can be walked in several ways, with different entry and exit points — ask us about all the options.',
  es: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es muy dinámico y se puede hacer de varias maneras, con diversas entradas y salidas — consultá todas las opciones con atención.',
};

/** Checklist, o que entra no valor e quando ir — idênticos nas duas rotas. */
export function patiCapaoFaqs(locale: Locale): readonly PatiFaqItem[] {
  return PATI_CAPAO_FAQS[locale];
}

const PATI_CAPAO_FAQS: Record<Locale, readonly PatiFaqItem[]> = {
  pt: [
    {
      type: 'checklist',
      title: 'Checklist — o que levar',
      intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório inviabiliza a participação. Os itens são conferidos na reserva e no check-in.',
      requiredColumns: [
        ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves para caminhar', 'Roupas para dormir', 'Roupa de banho', 'Mochila cargueira 50L+'],
        ['Capa de chuva (corpo e mochila)', 'Protetor solar', 'Remédios pessoais', 'Itens de higiene pessoal', 'Documento de identificação', 'Lanterna de cabeça e mochila de ataque'],
      ],
      recommendedColumns: [['Meias extras', 'Toalha de secagem rápida'], ['Bastão de caminhada', 'Power bank', 'Lanche ou fruta']],
      note: 'Se não quiser carregar peso, há opção de carregador pessoal — a mochila cargueira segue obrigatória para os dias em que o grupo troca de alojamento.',
    },
    {
      type: 'included',
      title: 'O que está incluso / não incluso',
      included: ['Guia de montanha credenciado com treinamento APH', 'Hospedagem nas casas do Vale do Pati', 'Transfers Palmeiras › Pati › Capão › Lençóis (alguns por transporte alternativo ou intermunicipal)', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
      excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Bebidas extras no mercado do alojamento', 'Equipamento pessoal', 'Evacuação médica'],
    },
    {
      type: 'seasons',
      title: 'Quando visitar o Vale do Pati',
      facts: [
        ['Verão e outono (jan–mai)', 'Cachoeiras cheias, mais lama nas trilhas'],
        ['Inverno e primavera (jun–dez)', 'Terreno mais firme, menos volume de água'],
        ['Altitude do vale', 'Em torno de 1.000 m'],
      ],
      notes: [
        'Não existe melhor época absoluta — depende do que você quer ver.',
        'Faz frio à noite o ano inteiro: roupa de dormir entra no checklist mesmo no verão.',
      ],
    },
  ],
  en: [
    {
      type: 'checklist',
      title: 'Checklist — what to bring',
      intro: 'Items marked * are mandatory. Missing any of them makes participation unfeasible. Items are checked at booking and at check-in.',
      requiredColumns: [
        ['Water (1.5L per person)', 'Trainers or hiking boots', 'Light walking clothes', 'Sleepwear', 'Swimwear', 'Carrying pack, 50L+'],
        ['Rain gear (body and pack)', 'Sunscreen', 'Personal medication', 'Toiletries', 'Photo ID', 'Head torch and day pack'],
      ],
      recommendedColumns: [['Spare socks', 'Quick-dry towel'], ['Trekking pole', 'Power bank', 'Snack or fruit']],
      note: 'If you would rather not carry the weight, a personal porter can be arranged — the carrying pack stays mandatory for the days the group changes lodging.',
    },
    {
      type: 'included',
      title: "What's included / not included",
      included: ['Accredited mountain guide with first-aid training', 'Lodging in the houses of the Pati Valley', 'Transfers Palmeiras › Pati › Capão › Lençóis (some by alternative or intercity transport)', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
      excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Extra drinks at the lodging shop', 'Personal gear', 'Medical evacuation'],
    },
    {
      type: 'seasons',
      title: 'When to visit the Pati Valley',
      facts: [
        ['Summer and autumn (Jan–May)', 'Full waterfalls, more mud on the trails'],
        ['Winter and spring (Jun–Dec)', 'Firmer ground, less water in the falls'],
        ['Valley altitude', 'Around 1,000 m'],
      ],
      notes: [
        'There is no single best season — it depends on what you want to see.',
        'It gets cold at night all year round: sleepwear is on the checklist even in summer.',
      ],
    },
  ],
  es: [
    {
      type: 'checklist',
      title: 'Checklist — qué llevar',
      intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio impide la participación. Los ítems se revisan en la reserva y en el check-in.',
      requiredColumns: [
        ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana para caminar', 'Ropa para dormir', 'Ropa de baño', 'Mochila de carga 50L+'],
        ['Piloto de lluvia (cuerpo y mochila)', 'Protector solar', 'Medicamentos personales', 'Artículos de higiene personal', 'Documento de identidad', 'Linterna frontal y mochila de ataque'],
      ],
      recommendedColumns: [['Medias extra', 'Toalla de secado rápido'], ['Bastón de caminata', 'Power bank', 'Snack o fruta']],
      note: 'Si no querés cargar peso, hay opción de porteador personal — la mochila de carga sigue siendo obligatoria para los días en que el grupo cambia de alojamiento.',
    },
    {
      type: 'included',
      title: 'Qué está incluido / no incluido',
      included: ['Guía de montaña acreditado con formación en primeros auxilios', 'Alojamiento en las casas del Valle del Pati', 'Traslados Palmeiras › Pati › Capão › Lençóis (algunos por transporte alternativo o intermunicipal)', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
      excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Bebidas extra en el mercado del alojamiento', 'Equipo personal', 'Evacuación médica'],
    },
    {
      type: 'seasons',
      title: 'Cuándo visitar el Valle del Pati',
      facts: [
        ['Verano y otoño (ene–may)', 'Cascadas llenas, más barro en los senderos'],
        ['Invierno y primavera (jun–dic)', 'Terreno más firme, menos volumen de agua'],
        ['Altitud del valle', 'Cerca de 1.000 m'],
      ],
      notes: [
        'No existe una mejor época absoluta — depende de lo que quieras ver.',
        'Hace frío de noche todo el año: la ropa para dormir entra en el checklist incluso en verano.',
      ],
    },
  ],
};
