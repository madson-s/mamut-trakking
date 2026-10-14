/**
 * Pacotes de 3, 4 e 6 dias ("Chapada Especial", "Chapada Deslumbrante" e
 * "Chapada Extraordinária"), por idioma.
 *
 * PT vem de mamut.agency/pacote-personalizado/pacote-{3,4,6}-dias e EN de
 * mamut.agency/en/pacote-personalizado/{3-days-package-chapada-special,
 * 4-days-package-stunning-chapada, 6-days-package-extraordinary-chapada}.
 * ES é tradução feita aqui.
 *
 * Os pacotes são combinações de passeios que o site já tem em página própria
 * (Muritiba, Mosquito + Pai Inácio, Grutas + Pratinha, Marimbus, Vale do Pati,
 * Buracão, Fumacinha) — por isso o 4 dias repete os três primeiros dias do 3
 * dias, e as fotos dos dias reaproveitam as dessas páginas quando é a mesma.
 *
 * ⚠️ Preços: as versões em PT e EN da fonte divergem (3 dias: R$ 1.750 / 1.500
 * em PT, "R$ 1.550" em EN e num rodapé do PT; 4 dias: R$ 3.100 × R$ 2.000;
 * 6 dias: R$ 4.950 / 4.650 × R$ 5.100 / 4.700). Os três idiomas usam os do
 * PT, que é a página principal da operadora — ela precisa confirmar.
 *
 * ⚠️ A fonte cobra 5% no cartão; o resto do site (e `DAY_TOUR_LEGAL`) já usa
 * 6%. Fica 6%, pela regra comum.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import type { PatiFaqItem } from './PatiFaqList';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

type Dia = NonNullable<DayTourContent['itinerario']['dias']>[number];

const ICON = {
  montanha: '/svg/_icons/icon_03_montain.svg',
  local: '/svg/_icons/icon_09_location.svg',
  casa: '/svg/_icons/icon_10_home.svg',
  calendario: '/svg/_icons/icon_11_calendar.svg',
  enviar: '/svg/_icons/icon_08_send.svg',
} as const;

/* ------------------------------------------------------------------------ */
/* Fotos                                                                    */
/* ------------------------------------------------------------------------ */

// Uma foto por dia, na ordem do roteiro — o `TrekJourney` põe `galeria[i]` ao
// lado do dia `i`. As de `pacotes/` vieram da galeria das páginas antigas; as
// outras são as mesmas fotos que as páginas de cada passeio já usam.
const FOTO = {
  muritiba: { src: '/img/adventures/pacotes/parque-da-muritiba-areias-coloridas.jpeg', width: 2000, height: 1500 },
  paiInacio: { src: '/img/adventures/pai-inacio/2-1.jpeg', width: 2048, height: 1536 },
  grutaDaFumaca: { src: '/img/adventures/pacotes/gruta-da-fumaca.jpeg', width: 2000, height: 1500 },
  roncador: { src: '/img/adventures/pacotes/piscinas-do-roncador.jpeg', width: 2000, height: 1500 },
  patiMirante: { src: '/img/adventures/pacotes/vale-do-pati-mirante.jpeg', width: 1536, height: 2048 },
  castelo: { src: '/img/adventures/pacotes/morro-do-castelo.jpeg', width: 1040, height: 780 },
  cachoeirao: { src: '/img/adventures/cachoeirao/3.jpg', width: 2560, height: 1440 },
  buracao: { src: '/img/adventures/buracao/2.jpeg', width: 2048, height: 1536 },
  fumacinha: { src: '/img/adventures/fumacinha/hero.jpg', width: 1920, height: 2560 },
  pocoAzul: { src: '/img/adventures/pacotes/poco-azul.jpeg', width: 1536, height: 2048 },
} as const;

export const PACOTE_3_ASSETS: DayTourAssets = {
  detailLayout: 'journey',
  hero: { src: '/img/adventures/pacotes/cachoeira-do-mosquito.jpeg', position: '50% 45%' },
  galeria: [FOTO.muritiba, FOTO.paiInacio, FOTO.grutaDaFumaca],
  stats: [
    ['7 km', ICON.montanha],
    ['250 km', ICON.local],
    ['12', ICON.casa],
    ['8h00', ICON.calendario],
    ['18h00', ICON.enviar],
  ],
  fromPrice: 1500,
};

export const PACOTE_4_ASSETS: DayTourAssets = {
  detailLayout: 'journey',
  hero: { src: '/img/adventures/pacotes/pantanal-marimbus-canoa.jpeg', position: '50% 55%' },
  galeria: [FOTO.muritiba, FOTO.paiInacio, FOTO.grutaDaFumaca, FOTO.roncador],
  stats: [
    ['15 km', ICON.montanha],
    ['290 km', ICON.local],
    ['14', ICON.casa],
    ['8h00', ICON.calendario],
    ['18h00', ICON.enviar],
  ],
  fromPrice: 3100,
};

export const PACOTE_6_ASSETS: DayTourAssets = {
  detailLayout: 'journey',
  hero: { src: '/img/adventures/buracao/hero.jpeg', position: '50% 50%' },
  galeria: [FOTO.patiMirante, FOTO.castelo, FOTO.cachoeirao, FOTO.buracao, FOTO.fumacinha, FOTO.pocoAzul],
  stats: [
    ['57 km', ICON.montanha],
    ['510 km', ICON.local],
    ['5', ICON.casa],
    ['8', ICON.local],
    ['7h30', ICON.calendario],
  ],
  fromPrice: 4650,
};

/* ------------------------------------------------------------------------ */
/* Dias que se repetem entre o 3 e o 4 dias                                 */
/* ------------------------------------------------------------------------ */

const DIAS_BASE: Record<Locale, [Omit<Dia, 'rotulo'>, Omit<Dia, 'rotulo'>, Omit<Dia, 'rotulo'>]> = {
  pt: [
    {
      titulo: 'Parque da Muritiba',
      corpo: 'A saída pode ser a qualquer hora entre 8h00 e 14h00 — o circuito leva de 4 a 5 horas e começa no Centro de Atendimento ao Turista (CAT), já com o panorama do percurso. Em 5 minutos chegamos às Piscinas Naturais do Serrano, com conglomerados polidos pela água e pequenas cachoeiras. Mais 15 minutos e entramos no labirinto do Salão das Areias Coloridas, onde a infiltração deixou a rocha porosa e arenosa. Depois vêm o Poço Halley, com argilas coloridas para brincar, a Cachoeira da Primavera, o Poço Paraíso e o Mirante de Lençóis, de onde se vê a cidade inteira e um horizonte que parece não acabar. A descida termina na Cachoeirinha, de águas cristalinas.',
      distancia: '4 km',
      esforco: 'Leve / Moderado',
    },
    {
      titulo: 'Cachoeira do Mosquito + Poço do Diabo + Morro do Pai Inácio',
      corpo: 'Saída de Lençóis às 8h00 rumo à Fazenda Santo Antônio: 40 km de carro, cerca de 1 hora, e 700 metros de caminhada até a base da Cachoeira do Mosquito. Depois do banho, mais 28 km até o Balneário Mucugêzinho e 15 minutos a pé até o Poço do Diabo, uma enorme piscina natural de águas escuras e geladas, onde ficamos até as 16h00. Mais 5 km de carro e uma subida de 300 metros, uns 20 minutos, até o topo do Morro do Pai Inácio — lá em cima o guia conta a lenda que dá nome ao morro. A volta a Lençóis é pela BR-242, com a serra ao lado.',
      distancia: '4 km',
      esforco: 'Leve',
    },
    {
      titulo: 'Gruta da Fumaça + Pratinha + Gruta Azul + Morro do Camelo',
      corpo: 'Saída às 8h00 para Iraquara, a 1 hora de Lençóis. A primeira parada é a Gruta da Fumaça, uma das mais completas do Brasil em formações. De lá seguimos para a Fazenda Pratinha, no rio de mesmo nome — flutuação, foto subaquática, caiaque e tirolesa são opcionais, pagos à parte. Às 15h00 entramos na Gruta Azul, onde a luz da tarde faz o espetáculo. Por volta das 16h30, mais 40 minutos de carro até o Mirante do Morro do Camelo, para o pôr do sol. Chegada a Lençóis por volta das 18h30.',
      distancia: '2 km',
      esforco: 'Leve',
    },
  ],
  en: [
    {
      titulo: 'Muritiba Park',
      corpo: 'You can set off any time between 8:00 am and 2:00 pm — the circuit takes 4 to 5 hours and starts at the Tourist Service Centre (CAT), which already gives you a view of the whole route. Five minutes in we reach the Serrano natural pools, with conglomerate rock polished by the water and small waterfalls. Fifteen minutes more and we enter the maze of the Salão das Areias Coloridas, where seeping water has left the rock porous and sandy. Then come Poço Halley, with coloured clay to play with, Primavera Waterfall, Poço Paraíso and the Lençóis lookout, where you can see the whole town and a horizon that seems to go on forever. The way down ends at Cachoeirinha, a small waterfall with crystal-clear water.',
      distancia: '4 km',
      esforco: 'Light / Moderate',
    },
    {
      titulo: 'Mosquito Waterfall + Poço do Diabo + Pai Inácio Hill',
      corpo: 'We leave Lençóis at 8:00 am for Fazenda Santo Antônio: 40 km by car, about an hour, and a 700-metre walk to the foot of Mosquito Waterfall. After a swim, another 28 km to the Mucugêzinho bathing area and a 15-minute walk to Poço do Diabo, a huge natural pool of dark, cold water, where we stay until 4:00 pm. Five more kilometres by car and a 300-metre climb, around 20 minutes, to the top of Pai Inácio Hill — up there the guide tells the legend the hill is named for. We return to Lençóis along the BR-242, with the ridge alongside.',
      distancia: '4 km',
      esforco: 'Light',
    },
    {
      titulo: 'Fumaça Cave + Pratinha + Blue Cave + Camelo Hill',
      corpo: 'We leave at 8:00 am for Iraquara, an hour from Lençóis. The first stop is Gruta da Fumaça, one of the most complete caves in Brazil for its formations. From there we head to Fazenda Pratinha, on the river of the same name — snorkelling, underwater photos, kayaking and the zip line are optional extras, paid on site. At 3:00 pm we go into the Blue Cave, where the afternoon light puts on the show. Around 4:30 pm, a 40-minute drive takes us to the Morro do Camelo lookout for sunset. Back in Lençóis around 6:30 pm.',
      distancia: '2 km',
      esforco: 'Light',
    },
  ],
  es: [
    {
      titulo: 'Parque da Muritiba',
      corpo: 'La salida puede ser a cualquier hora entre las 8:00 y las 14:00 — el circuito lleva de 4 a 5 horas y empieza en el Centro de Atención al Turista (CAT), que ya muestra el panorama del recorrido. A los 5 minutos llegamos a las Piscinas Naturales del Serrano, con conglomerados pulidos por el agua y pequeñas cascadas. Quince minutos más y entramos en el laberinto del Salão das Areias Coloridas, donde la infiltración dejó la roca porosa y arenosa. Después vienen el Poço Halley, con arcillas de colores para jugar, la Cascada de la Primavera, el Poço Paraíso y el Mirador de Lençóis, desde donde se ve la ciudad entera y un horizonte que parece no terminar. La bajada termina en la Cachoeirinha, de aguas cristalinas.',
      distancia: '4 km',
      esforco: 'Leve / Moderado',
    },
    {
      titulo: 'Cascada del Mosquito + Poço do Diabo + Morro do Pai Inácio',
      corpo: 'Salimos de Lençóis a las 8:00 hacia la Fazenda Santo Antônio: 40 km en auto, cerca de 1 hora, y 700 metros de caminata hasta la base de la Cascada del Mosquito. Después del baño, otros 28 km hasta el Balneario Mucugêzinho y 15 minutos a pie hasta el Poço do Diabo, una enorme piscina natural de aguas oscuras y heladas, donde nos quedamos hasta las 16:00. Otros 5 km en auto y una subida de 300 metros, unos 20 minutos, hasta la cima del Morro do Pai Inácio — arriba, el guía cuenta la leyenda que le da nombre. La vuelta a Lençóis es por la BR-242, con la sierra al costado.',
      distancia: '4 km',
      esforco: 'Leve',
    },
    {
      titulo: 'Gruta da Fumaça + Pratinha + Gruta Azul + Morro do Camelo',
      corpo: 'Salida a las 8:00 hacia Iraquara, a 1 hora de Lençóis. La primera parada es la Gruta da Fumaça, una de las más completas de Brasil en formaciones. De ahí seguimos a la Fazenda Pratinha, sobre el río del mismo nombre — flotación, foto subacuática, kayak y tirolesa son opcionales y se pagan aparte. A las 15:00 entramos en la Gruta Azul, donde la luz de la tarde hace el espectáculo. Cerca de las 16:30, otros 40 minutos en auto hasta el Mirador del Morro do Camelo, para el atardecer. Llegada a Lençóis cerca de las 18:30.',
      distancia: '2 km',
      esforco: 'Leve',
    },
  ],
};

const DIA_MARIMBUS: Record<Locale, Omit<Dia, 'rotulo'>> = {
  pt: {
    titulo: 'Pantanal Marimbus + Piscinas do Roncador',
    corpo: 'Saída às 8h00 para a comunidade quilombola do Remanso, a 20 km. Dali seguimos de canoa por 9 km — cerca de 2 horas — pelo Pantanal Marimbus, com chance de ver sucuris, jacarés e bugios, além de muitas aves e plantas aquáticas. Desembarcamos e caminhamos 30 minutos até as Piscinas Naturais do Roncador. No meio da tarde, uma trilha de 40 minutos leva até o carro.',
    distancia: '8 km',
    esforco: 'Leve',
  },
  en: {
    titulo: 'Marimbus Wetlands + Roncador Pools',
    corpo: 'We leave at 8:00 am for the quilombola community of Remanso, 20 km away. From there we paddle 9 km by canoe — about 2 hours — through the Marimbus wetlands, with a chance of spotting anacondas, caimans and howler monkeys, plus plenty of birds and water plants. We land and walk 30 minutes to the Roncador natural pools. In the middle of the afternoon, a 40-minute trail takes us back to the car.',
    distancia: '8 km',
    esforco: 'Light',
  },
  es: {
    titulo: 'Pantanal Marimbus + Piscinas del Roncador',
    corpo: 'Salida a las 8:00 hacia la comunidad quilombola del Remanso, a 20 km. Desde ahí seguimos en canoa 9 km — cerca de 2 horas — por el Pantanal Marimbus, con chance de ver anacondas, yacarés y monos aulladores, además de muchas aves y plantas acuáticas. Desembarcamos y caminamos 30 minutos hasta las Piscinas Naturales del Roncador. A media tarde, un sendero de 40 minutos nos lleva hasta el auto.',
    distancia: '8 km',
    esforco: 'Leve',
  },
};

const ROTULO: Record<Locale, (n: number) => string> = {
  pt: (n) => `${n}º dia`,
  en: (n) => `Day ${n}`,
  es: (n) => `${n}º día`,
};

function numerar(locale: Locale, dias: Omit<Dia, 'rotulo'>[]): Dia[] {
  return dias.map((dia, i) => ({ rotulo: ROTULO[locale](i + 1), ...dia }));
}

/* ------------------------------------------------------------------------ */
/* Textos comuns aos três pacotes                                           */
/* ------------------------------------------------------------------------ */

const COMUM: Record<
  Locale,
  {
    hero: Pick<DayTourContent['hero'], 'origem' | 'apartirDe' | 'porPessoa' | 'reservar'>;
    itinerario: Pick<DayTourContent['itinerario'], 'titulo' | 'aviso'>;
    precosTitulo: string;
    precosNota: string;
    privado: { titulo: string; nota: string };
    grupo: { titulo: string; nota: string };
    faqTitulo: string;
    relacionados: string;
    checklistTitulo: string;
    checklistIntro: string;
    incluidoTitulo: string;
    tecnicaTitulo: string;
    labels: { requirements: string; documents: string };
    documentos: readonly (readonly [string, string])[];
    requisitosFinais: readonly string[];
    cta: DayTourContent['cta'];
  }
> = {
  pt: {
    hero: { origem: 'Origem: Lençóis', apartirDe: 'A partir de', porPessoa: '/ pessoa', reservar: 'Reservar pelo WhatsApp' },
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. O pacote também é personalizável: quer trocar um dia ou montar outra combinação? Fale com o atendimento.',
    },
    precosTitulo: 'Escolha o formato ideal para o seu grupo.',
    precosNota: 'Valores por pessoa para dinheiro, transferência ou boleto. Cartão, transferência internacional ou grupo maior: consulte o atendimento.',
    privado: { titulo: 'Pacote privado', nota: 'Mínimo de 2 pessoas. Só o seu grupo no roteiro.' },
    grupo: { titulo: 'Em grupo', nota: 'De 2 a 7 pessoas. Há condições especiais para grupos — consulte.' },
    faqTitulo: 'Tudo que você precisa saber.',
    relacionados: 'Outras aventuras.',
    checklistTitulo: 'Checklist — o que levar',
    checklistIntro: 'Os itens obrigatórios são conferidos antes das atividades: a falta de qualquer um deles inviabiliza a participação.',
    incluidoTitulo: 'O que está incluso / não incluso',
    tecnicaTitulo: 'Ficha técnica e requisitos',
    labels: { requirements: 'Requisitos', documents: 'Documentos' },
    documentos: [
      ['Termo de Responsabilidade (PDF)', '/docs/termo-de-responsabilidade.pdf'],
      ['Classificação de nível das atividades', '/pt/classificacao-de-nivel'],
    ],
    requisitosFinais: [
      'Ter mais de 18 anos. Menores de idade só com o responsável legal.',
      'Informar restrições alimentares na reserva.',
      'Os valores estão sujeitos a mudança — reservas já confirmadas não sofrem reajuste.',
    ],
    cta: {
      titulo: ['Poucos dias,', 'a Chapada inteira.'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e o que mais quer ver — a gente monta o pacote com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    hero: { origem: 'From: Lençóis', apartirDe: 'From', porPessoa: '/ person', reservar: 'Book on WhatsApp' },
    itinerario: {
      titulo: 'Day by day.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. The package can also be tailored: want to swap a day or put together another combination? Talk to us.',
    },
    precosTitulo: 'Choose the format that fits your group.',
    precosNota: 'Prices per person for cash, bank transfer or boleto. Card, international transfer or a larger group: talk to us.',
    privado: { titulo: 'Private package', nota: 'Minimum of 2 people. Just your group on the itinerary.' },
    grupo: { titulo: 'Group tour', nota: 'From 2 to 7 people. Special terms for groups — ask us.' },
    faqTitulo: 'Everything you need to know.',
    relacionados: 'Other adventures.',
    checklistTitulo: 'Checklist — what to bring',
    checklistIntro: 'Mandatory items are checked before the activities: missing any one of them makes participation impossible.',
    incluidoTitulo: "What's included / not included",
    tecnicaTitulo: 'Technical sheet and requirements',
    labels: { requirements: 'Requirements', documents: 'Documents' },
    documentos: [
      ['Liability waiver (PDF)', '/docs/termo-de-responsabilidade.pdf'],
      ['Activity difficulty classification', '/en/level-classification'],
    ],
    requisitosFinais: [
      'You must be over 18. Minors only with their legal guardian.',
      'Tell us about dietary restrictions when booking.',
      'Prices are subject to change — bookings already confirmed are not repriced.',
    ],
    cta: {
      titulo: ['A few days,', 'the whole Chapada.'],
      corpo: 'Tell us how many people, the dates you have in mind and what you most want to see — we will put the package together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    hero: { origem: 'Origen: Lençóis', apartirDe: 'Desde', porPessoa: '/ persona', reservar: 'Reservar por WhatsApp' },
    itinerario: {
      titulo: 'Día a día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. El paquete también se puede personalizar: ¿querés cambiar un día o armar otra combinación? Hablá con nosotros.',
    },
    precosTitulo: 'Elegí el formato ideal para tu grupo.',
    precosNota: 'Valores por persona para efectivo, transferencia o boleto. Tarjeta, transferencia internacional o grupo mayor: consultá con nosotros.',
    privado: { titulo: 'Paquete privado', nota: 'Mínimo de 2 personas. Solo tu grupo en el recorrido.' },
    grupo: { titulo: 'En grupo', nota: 'De 2 a 7 personas. Hay condiciones especiales para grupos — consultá.' },
    faqTitulo: 'Todo lo que necesitás saber.',
    relacionados: 'Otras aventuras.',
    checklistTitulo: 'Checklist — qué llevar',
    checklistIntro: 'Los ítems obligatorios se revisan antes de las actividades: la falta de cualquiera de ellos impide la participación.',
    incluidoTitulo: 'Qué está incluido / no incluido',
    tecnicaTitulo: 'Ficha técnica y requisitos',
    labels: { requirements: 'Requisitos', documents: 'Documentos' },
    documentos: [
      ['Término de Responsabilidad (PDF)', '/docs/termo-de-responsabilidade.pdf'],
      ['Clasificación de nivel de las actividades', '/es/clasificacion-de-nivel'],
    ],
    requisitosFinais: [
      'Tener más de 18 años. Menores de edad solo con el responsable legal.',
      'Informar restricciones alimentarias en la reserva.',
      'Los valores están sujetos a cambios — las reservas ya confirmadas no sufren reajuste.',
    ],
    cta: {
      titulo: ['Pocos días,', 'la Chapada entera.'],
      corpo: 'Contanos cuántas personas, las fechas que estás considerando y lo que más querés ver — armamos el paquete con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};

/** Checklist dos pacotes sem pernoite em trilha (3 e 4 dias). */
const CHECKLIST_LEVE: Record<Locale, Pick<Extract<PatiFaqItem, { type: 'checklist' }>, 'requiredColumns' | 'recommendedColumns' | 'note'>> = {
  pt: {
    requiredColumns: [
      ['Água (1,5 L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Duas mudas de roupa leve', 'Roupa de banho', 'Boné ou chapéu'],
      ['Protetor solar', 'Repelente', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanterna'],
    ],
    recommendedColumns: [['Toalha fina', 'Capa de chuva (consulte a agência)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Dinheiro para bebidas']],
    note: 'Todo dia tem banho de cachoeira ou de poço: leve a roupa de banho e a toalha na mochila de ataque.',
  },
  en: {
    requiredColumns: [
      ['Water (1.5 L per person)', 'Hiking shoes or boots', 'Spare socks', 'Two sets of light clothes', 'Swimwear', 'Cap or hat'],
      ['Sunscreen', 'Insect repellent', 'Personal medication', 'ID document', 'Backpack for your things', 'Torch'],
    ],
    recommendedColumns: [['Thin towel', 'Rain jacket (check with us)', 'Walking pole'], ['Snack or fruit', 'Cash for drinks']],
    note: 'Every day includes a swim at a waterfall or pool: keep your swimwear and towel in your day pack.',
  },
  es: {
    requiredColumns: [
      ['Agua (1,5 L por persona)', 'Zapatillas o botas de caminata', 'Medias extra', 'Dos mudas de ropa liviana', 'Malla', 'Gorra o sombrero'],
      ['Protector solar', 'Repelente', 'Medicamentos personales', 'Documento de identidad', 'Mochila para tus cosas', 'Linterna'],
    ],
    recommendedColumns: [['Toalla fina', 'Piloto de lluvia (consultá con nosotros)', 'Bastón de caminata'], ['Snack o fruta', 'Dinero para bebidas']],
    note: 'Todos los días hay baño de cascada o de pozo: llevá la malla y la toalla en la mochila de ataque.',
  },
};

const INCLUIDO_LEVE: Record<Locale, { included: string[]; excluded: string[] }> = {
  pt: {
    included: ['Condutor de turismo da Mamut', 'Transfer Lençóis × atrativos', 'Taxas de acesso em todos os atrativos', 'Seguro aventura', 'Kit de primeiros socorros'],
    excluded: ['Qualquer item não listado', 'Hospedagem — se precisar, a gente inclui', 'Atividades opcionais da Fazenda Pratinha (flutuação, caiaque, tirolesa)', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Carregadores pessoais', 'Hotéis e refeições antes e depois das atividades', 'Gorjetas por serviços adicionais (fotos e outros auxílios)'],
  },
  en: {
    included: ['Mamut tour guide', 'Transfers between Lençóis and the sights', 'Entry fees at every site', 'Adventure insurance', 'First-aid kit'],
    excluded: ['Anything not listed', 'Accommodation — we can add it if you need', 'Optional activities at Fazenda Pratinha (snorkelling, kayak, zip line)', 'Extra drinks', 'Personal gear', 'Medical evacuation', 'Personal porters', 'Hotels and meals before and after the activities', 'Tips for additional services (photos and other help)'],
  },
  es: {
    included: ['Conductor de turismo de Mamut', 'Traslado Lençóis × atractivos', 'Tasas de acceso en todos los atractivos', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
    excluded: ['Cualquier ítem no listado', 'Alojamiento — si lo necesitás, lo incluimos', 'Actividades opcionales de la Fazenda Pratinha (flotación, kayak, tirolesa)', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Porteadores personales', 'Hoteles y comidas antes y después de las actividades', 'Propinas por servicios adicionales (fotos y otras ayudas)'],
  },
};

const RISCO_LEVE: Record<Locale, string> = {
  pt: 'São dias de carro com caminhadas curtas, mas há banho em poços fundos e gelados, como o Poço do Diabo, e pedra escorregadia na beira das cachoeiras. Entre na água com o grupo e siga a orientação do condutor.',
  en: 'These are days by car with short walks, but there are swims in deep, cold pools such as Poço do Diabo, and slippery rock around the waterfalls. Go into the water with the group and follow the guide’s lead.',
  es: 'Son días en auto con caminatas cortas, pero hay baños en pozos hondos y helados, como el Poço do Diabo, y piedra resbaladiza al borde de las cascadas. Entrá al agua con el grupo y seguí la indicación del conductor.',
};

const FITNESS_LEVE: Record<Locale, string> = {
  pt: 'Condicionamento para subidas e descidas íngremes em terreno acidentado e travessia de riachos.',
  en: 'Fitness for steep ascents and descents on rough ground and for crossing streams.',
  es: 'Estado físico para subidas y bajadas empinadas en terreno accidentado y cruce de arroyos.',
};

/** Monta a página de um pacote "leve" (3 ou 4 dias, base em Lençóis). */
function pacoteLeve(
  locale: Locale,
  p: {
    meta: DayTourContent['meta'];
    duracao: string;
    titulo: string;
    lead: string;
    sobre: DayTourContent['sobre'];
    dias: Omit<Dia, 'rotulo'>[];
    privado: string;
    grupo?: string;
    facts: readonly (readonly [string, string])[];
    relacionados: string[];
  },
): DayTourContent {
  const c = COMUM[locale];
  return {
    meta: p.meta,
    hero: { ...c.hero, nivel: { pt: 'Leve / Moderado', en: 'Light / Moderate', es: 'Leve / Moderado' }[locale], duracao: p.duracao, titulo: p.titulo, lead: p.lead },
    stats: {
      pt: ['Distância a pé', 'Percurso de carro', 'Atrativos', 'Saída (Lençóis)', 'Retorno'],
      en: ['Distance on foot', 'Drive', 'Sights', 'Departure (Lençóis)', 'Return'],
      es: ['Distancia a pie', 'Recorrido en auto', 'Atractivos', 'Salida (Lençóis)', 'Regreso'],
    }[locale],
    sobre: p.sobre,
    itinerario: { ...c.itinerario, corpo: [], dias: numerar(locale, p.dias) },
    precos: {
      titulo: c.precosTitulo,
      formatos: [
        { titulo: c.privado.titulo, preco: p.privado, nota: c.privado.nota },
        ...(p.grupo ? [{ titulo: c.grupo.titulo, preco: p.grupo, nota: c.grupo.nota }] : []),
      ],
      nota: c.precosNota,
    },
    faqTitulo: c.faqTitulo,
    faqs: [
      { type: 'checklist', title: c.checklistTitulo, intro: c.checklistIntro, ...CHECKLIST_LEVE[locale] },
      { type: 'included', title: c.incluidoTitulo, ...INCLUIDO_LEVE[locale] },
      safetyFaq(locale, RISCO_LEVE[locale]),
      {
        type: 'technical',
        title: c.tecnicaTitulo,
        facts: p.facts,
        requirements: [c.requisitosFinais[0], FITNESS_LEVE[locale], ...c.requisitosFinais.slice(1)],
        documents: c.documentos,
        labels: c.labels,
      },
      ...DAY_TOUR_LEGAL[locale],
    ],
    relacionados: { titulo: c.relacionados, ids: p.relacionados },
    cta: c.cta,
  };
}

/* ------------------------------------------------------------------------ */
/* Pacote 3 dias — Chapada Especial                                         */
/* ------------------------------------------------------------------------ */

const ATRATIVOS_3: Record<Locale, string> = {
  pt: 'Parque da Muritiba, Salão das Areias Coloridas, Cachoeira da Primavera, Cachoeirinha, Cachoeira do Mosquito, Poço do Diabo, Rio Mucugêzinho, Morro do Pai Inácio, Fazenda Pratinha, Gruta Azul, Gruta da Fumaça e Mirante do Morro do Camelo',
  en: 'Muritiba Park, Salão das Areias Coloridas, Primavera Waterfall, Cachoeirinha, Mosquito Waterfall, Poço do Diabo, Mucugêzinho River, Pai Inácio Hill, Fazenda Pratinha, Blue Cave, Gruta da Fumaça and the Morro do Camelo lookout',
  es: 'Parque da Muritiba, Salão das Areias Coloridas, Cascada de la Primavera, Cachoeirinha, Cascada del Mosquito, Poço do Diabo, Río Mucugêzinho, Morro do Pai Inácio, Fazenda Pratinha, Gruta Azul, Gruta da Fumaça y Mirador del Morro do Camelo',
};

export const PACOTE_3_CONTENT: Record<Locale, DayTourContent> = {
  pt: pacoteLeve('pt', {
    meta: {
      title: 'Pacote Chapada Especial — 3 dias',
      description: 'Três dias com base em Lençóis: Parque da Muritiba, Cachoeira do Mosquito, Morro do Pai Inácio, Gruta da Fumaça, Pratinha e o pôr do sol no Morro do Camelo.',
      canonical: '/pt/aventuras/pacote-3-dias',
    },
    duracao: '3 dias',
    titulo: 'Chapada Especial em 3 dias.',
    lead: 'Cachoeiras, grutas, mirantes e trilhas curtas — o melhor da Chapada para quem tem pouco tempo.',
    sobre: {
      titulo: 'Sobre o pacote.',
      paragrafos: [
        'É a escolha certa para quem tem uma estadia curta na Chapada Diamantina e quer ver os lugares mais especiais da região. Em três dias, o pacote reúne caminhada, cachoeiras, cavernas e mirantes.',
        'Todas as saídas são de Lençóis. O primeiro dia é no Parque da Muritiba, colado à cidade: ali o guia apresenta a Chapada — história, geologia, o tempo do garimpo e curiosidades da fauna e da flora. É a sua introdução à região.',
        'Nos dias seguintes vamos um pouco mais longe, de carro, com caminhadas curtas: Cachoeira do Mosquito, Poço do Diabo e Pai Inácio num dia; Gruta da Fumaça, Pratinha, Gruta Azul e o pôr do sol no Morro do Camelo no outro.',
      ],
    },
    dias: [...DIAS_BASE.pt],
    privado: 'R$ 1.750',
    grupo: 'R$ 1.500',
    facts: [
      ['Categoria', 'Passeios de um dia, com base em Lençóis'],
      ['Distância a pé', '7 km'],
      ['Percurso de carro', '250 km'],
      ['Nível de esforço', 'Leve / Moderado'],
      ['Atrativos', ATRATIVOS_3.pt],
      ['Hospedagem', 'Não inclusa — se precisar, a gente inclui'],
      ['Saída / retorno', '8h00 / 18h00'],
    ],
    relacionados: ['chapada-deslumbrante-4-dias', 'chapada-extraordinaria-6-dias', 'vale-do-pati-3-dias'],
  }),
  en: pacoteLeve('en', {
    meta: {
      title: 'Chapada Special Package — 3 days',
      description: 'Three days based in Lençóis: Muritiba Park, Mosquito Waterfall, Pai Inácio Hill, Gruta da Fumaça, Pratinha and sunset from Morro do Camelo.',
      canonical: '/en/adventures/package-3-days',
    },
    duracao: '3 days',
    titulo: 'Chapada Special in 3 days.',
    lead: 'Waterfalls, caves, lookouts and short trails — the best of the Chapada when time is short.',
    sobre: {
      titulo: 'About the package.',
      paragrafos: [
        'It is the right choice if your stay in the Chapada Diamantina is short and you want to see the region’s most special places. In three days the package brings together hiking, waterfalls, caves and lookouts.',
        'Every day starts from Lençóis. The first is spent in Muritiba Park, right next to town: there the guide introduces the Chapada — its history, geology, the diamond-mining era and curiosities about the wildlife and plants. It is your introduction to the region.',
        'On the following days we go a little further, by car, with short walks: Mosquito Waterfall, Poço do Diabo and Pai Inácio one day; Gruta da Fumaça, Pratinha, the Blue Cave and sunset from Morro do Camelo the next.',
      ],
    },
    dias: [...DIAS_BASE.en],
    privado: 'R$ 1,750',
    grupo: 'R$ 1,500',
    facts: [
      ['Category', 'Day tours based in Lençóis'],
      ['Distance on foot', '7 km'],
      ['Drive', '250 km'],
      ['Effort level', 'Light / Moderate'],
      ['Sights', ATRATIVOS_3.en],
      ['Accommodation', 'Not included — we can add it if you need'],
      ['Departure / return', '8:00 am / 6:00 pm'],
    ],
    relacionados: ['chapada-deslumbrante-4-dias', 'chapada-extraordinaria-6-dias', 'vale-do-pati-3-dias'],
  }),
  es: pacoteLeve('es', {
    meta: {
      title: 'Paquete Chapada Especial — 3 días',
      description: 'Tres días con base en Lençóis: Parque da Muritiba, Cascada del Mosquito, Morro do Pai Inácio, Gruta da Fumaça, Pratinha y el atardecer en el Morro do Camelo.',
      canonical: '/es/aventuras/paquete-3-dias',
    },
    duracao: '3 días',
    titulo: 'Chapada Especial en 3 días.',
    lead: 'Cascadas, grutas, miradores y senderos cortos — lo mejor de la Chapada para quien tiene poco tiempo.',
    sobre: {
      titulo: 'Sobre el paquete.',
      paragrafos: [
        'Es la elección justa para quien tiene una estadía corta en la Chapada Diamantina y quiere ver los lugares más especiales de la región. En tres días, el paquete reúne caminata, cascadas, cuevas y miradores.',
        'Todas las salidas son desde Lençóis. El primer día es en el Parque da Muritiba, pegado a la ciudad: ahí el guía presenta la Chapada — historia, geología, la época de la minería y curiosidades de la fauna y la flora. Es tu introducción a la región.',
        'Los días siguientes vamos un poco más lejos, en auto, con caminatas cortas: Cascada del Mosquito, Poço do Diabo y Pai Inácio un día; Gruta da Fumaça, Pratinha, Gruta Azul y el atardecer en el Morro do Camelo el otro.',
      ],
    },
    dias: [...DIAS_BASE.es],
    privado: 'R$ 1.750',
    grupo: 'R$ 1.500',
    facts: [
      ['Categoría', 'Paseos de un día con base en Lençóis'],
      ['Distancia a pie', '7 km'],
      ['Recorrido en auto', '250 km'],
      ['Nivel de esfuerzo', 'Leve / Moderado'],
      ['Atractivos', ATRATIVOS_3.es],
      ['Alojamiento', 'No incluido — si lo necesitás, lo incluimos'],
      ['Salida / regreso', '8:00 / 18:00'],
    ],
    relacionados: ['chapada-deslumbrante-4-dias', 'chapada-extraordinaria-6-dias', 'vale-do-pati-3-dias'],
  }),
};

/* ------------------------------------------------------------------------ */
/* Pacote 4 dias — Chapada Deslumbrante                                     */
/* ------------------------------------------------------------------------ */

export const PACOTE_4_CONTENT: Record<Locale, DayTourContent> = {
  pt: pacoteLeve('pt', {
    meta: {
      title: 'Pacote Chapada Deslumbrante — 4 dias',
      description: 'Quatro dias com base em Lençóis: Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha e um dia de canoa pelo Pantanal Marimbus até as Piscinas do Roncador.',
      canonical: '/pt/aventuras/pacote-4-dias',
    },
    duracao: '4 dias',
    titulo: 'Chapada Deslumbrante em 4 dias.',
    lead: 'Os clássicos da Chapada e um dia de canoa pelo Pantanal Marimbus.',
    sobre: {
      titulo: 'Sobre o pacote.',
      paragrafos: [
        'Para quem tem poucos dias na Chapada Diamantina e quer ver os lugares mais especiais da região. Em quatro dias o pacote reúne caminhada, cachoeiras, cavernas, mirantes e um passeio de barco.',
        'Todas as saídas são de Lençóis. O primeiro dia é no Parque da Muritiba, colado à cidade: ali o guia apresenta a Chapada — história, geologia, o tempo do garimpo e curiosidades da fauna e da flora.',
        'Nos dias seguintes vamos um pouco mais longe: Cachoeira do Mosquito e Pai Inácio; grutas, Pratinha e o pôr do sol no Morro do Camelo; e, para fechar, a travessia de canoa pelo Pantanal Marimbus até as Piscinas do Roncador.',
      ],
    },
    dias: [...DIAS_BASE.pt, DIA_MARIMBUS.pt],
    privado: 'R$ 3.100',
    facts: [
      ['Categoria', 'Passeios de um dia, com base em Lençóis'],
      ['Distância a pé', '15 km'],
      ['Percurso de carro', '290 km'],
      ['Nível de esforço', 'Leve / Moderado'],
      ['Atrativos', `${ATRATIVOS_3.pt.replace(' e Mirante', ', Mirante')}, Pantanal Marimbus e Piscinas do Roncador`],
      ['Hospedagem', 'Não inclusa — se precisar, a gente inclui'],
      ['Saída / retorno', '8h00 / 18h00'],
    ],
    relacionados: ['chapada-especial-3-dias', 'chapada-extraordinaria-6-dias', 'pantanal-marimbus'],
  }),
  en: pacoteLeve('en', {
    meta: {
      title: 'Stunning Chapada Package — 4 days',
      description: 'Four days based in Lençóis: Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha and a day by canoe through the Marimbus wetlands to the Roncador pools.',
      canonical: '/en/adventures/package-4-days',
    },
    duracao: '4 days',
    titulo: 'Stunning Chapada in 4 days.',
    lead: 'The Chapada classics, plus a day by canoe through the Marimbus wetlands.',
    sobre: {
      titulo: 'About the package.',
      paragrafos: [
        'For anyone with only a few days in the Chapada Diamantina who wants to see the region’s most special places. In four days the package brings together hiking, waterfalls, caves, lookouts and a boat trip.',
        'Every day starts from Lençóis. The first is spent in Muritiba Park, right next to town: there the guide introduces the Chapada — its history, geology, the diamond-mining era and curiosities about the wildlife and plants.',
        'On the following days we go a little further: Mosquito Waterfall and Pai Inácio; caves, Pratinha and sunset from Morro do Camelo; and, to finish, a canoe trip through the Marimbus wetlands to the Roncador pools.',
      ],
    },
    dias: [...DIAS_BASE.en, DIA_MARIMBUS.en],
    privado: 'R$ 3,100',
    facts: [
      ['Category', 'Day tours based in Lençóis'],
      ['Distance on foot', '15 km'],
      ['Drive', '290 km'],
      ['Effort level', 'Light / Moderate'],
      ['Sights', `${ATRATIVOS_3.en.replace(' and the Morro', ', the Morro')}, the Marimbus wetlands and the Roncador pools`],
      ['Accommodation', 'Not included — we can add it if you need'],
      ['Departure / return', '8:00 am / 6:00 pm'],
    ],
    relacionados: ['chapada-especial-3-dias', 'chapada-extraordinaria-6-dias', 'pantanal-marimbus'],
  }),
  es: pacoteLeve('es', {
    meta: {
      title: 'Paquete Chapada Deslumbrante — 4 días',
      description: 'Cuatro días con base en Lençóis: Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha y un día en canoa por el Pantanal Marimbus hasta las Piscinas del Roncador.',
      canonical: '/es/aventuras/paquete-4-dias',
    },
    duracao: '4 días',
    titulo: 'Chapada Deslumbrante en 4 días.',
    lead: 'Los clásicos de la Chapada y un día en canoa por el Pantanal Marimbus.',
    sobre: {
      titulo: 'Sobre el paquete.',
      paragrafos: [
        'Para quien tiene pocos días en la Chapada Diamantina y quiere ver los lugares más especiales de la región. En cuatro días el paquete reúne caminata, cascadas, cuevas, miradores y un paseo en bote.',
        'Todas las salidas son desde Lençóis. El primer día es en el Parque da Muritiba, pegado a la ciudad: ahí el guía presenta la Chapada — historia, geología, la época de la minería y curiosidades de la fauna y la flora.',
        'Los días siguientes vamos un poco más lejos: Cascada del Mosquito y Pai Inácio; grutas, Pratinha y el atardecer en el Morro do Camelo; y, para cerrar, la travesía en canoa por el Pantanal Marimbus hasta las Piscinas del Roncador.',
      ],
    },
    dias: [...DIAS_BASE.es, DIA_MARIMBUS.es],
    privado: 'R$ 3.100',
    facts: [
      ['Categoría', 'Paseos de un día con base en Lençóis'],
      ['Distancia a pie', '15 km'],
      ['Recorrido en auto', '290 km'],
      ['Nivel de esfuerzo', 'Leve / Moderado'],
      ['Atractivos', `${ATRATIVOS_3.es.replace(' y Mirador', ', Mirador')}, Pantanal Marimbus y Piscinas del Roncador`],
      ['Alojamiento', 'No incluido — si lo necesitás, lo incluimos'],
      ['Salida / regreso', '8:00 / 18:00'],
    ],
    relacionados: ['chapada-especial-3-dias', 'chapada-extraordinaria-6-dias', 'pantanal-marimbus'],
  }),
};

/* ------------------------------------------------------------------------ */
/* Pacote 6 dias — Chapada Extraordinária                                   */
/* ------------------------------------------------------------------------ */

const STATS_6: Record<Locale, string[]> = {
  pt: ['Distância a pé', 'Percurso de carro', 'Noites de hospedagem', 'Locais para banho', 'Saída (Lençóis)'],
  en: ['Distance on foot', 'Drive', 'Nights included', 'Places to swim', 'Departure (Lençóis)'],
  es: ['Distancia a pie', 'Recorrido en auto', 'Noches de alojamiento', 'Lugares para bañarse', 'Salida (Lençóis)'],
};

const DIAS_6: Record<Locale, Omit<Dia, 'rotulo'>[]> = {
  pt: [
    {
      titulo: 'Mirante do Pati + Igrejinha',
      corpo: 'Saída de Lençóis às 7h30 para a vila do Guiné, onde começa a trilha. São cerca de 3 horas — 1 de subida íngreme e 2 em terreno plano — até o Mirante tradicional do Vale do Pati. Depois do lanche, mais 1h30 até a Igrejinha, onde seu João e a família recebem o grupo na hospedaria.',
      distancia: '12 km',
      esforco: 'Moderado',
    },
    {
      titulo: 'Morro do Castelo + cachoeiras',
      corpo: 'Depois de um café da manhã reforçado, saída às 8h00 rumo ao Morro do Castelo — o dia de maior esforço, com subida a mais de 1.200 m de altitude. No topo são três mirantes e a Gruta da Lapinha, uma das mais raras do mundo, a mais de 1.000 m. A volta é por outro caminho, passando pela Cachoeira das Lajes e pela dos Funis, com chegada à Igrejinha por volta das 18h00.',
      distancia: '18 km',
      esforco: 'Alto',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'Despedida da hospedagem e saída às 8h00. Cerca de 3 horas até o Mirante do Cachoeirão, com uns 280 m de queda — na época de chuva, dá para contar até 16 cascatas em volta do vale. Depois do lanche preparado pelo condutor, seguimos pelos Gerais do Vieira até a descida dos Aleixos, onde o carro espera por volta das 17h00 para o transfer até o Baixão, em Ibicoara.',
      distancia: '15 km',
      esforco: 'Moderado',
    },
    {
      titulo: 'Cachoeira do Buracão + Recanto Verde + Orquídeas',
      corpo: 'Trinta minutos de carro até a entrada da trilha e 3 km até o topo da Cachoeira do Buracão, com banhos na Cachoeira do Recanto Verde e na das Orquídeas pelo caminho. A trilha é tranquila, com alguns trechos íngremes e escadas. Na borda do cânion, uma escada de madeira desce até o rio, e o resto é nadando ou escalando até a queda, com um poço cristalino para nadar. Na volta, almoço típico preparado por moradores na entrada do parque e retorno à hospedagem no Baixão. O rapel é opcional.',
      distancia: '6 km',
      esforco: 'Leve / Moderado',
    },
    {
      titulo: 'Cachoeira da Fumacinha + Cachoeira do Encontro',
      corpo: 'A caminhada começa no cerrado e segue por trilhas e estradas de terra até o leito do rio, que vira o caminho — com paradas para banho em poços e pequenas cachoeiras. O trecho final é o mais exigente: sobe e desce entre cânions com paredes de mais de 100 m, e algumas passagens pedem equipamento de segurança. Na Fumacinha, descanso e contemplação; a volta é pelo mesmo caminho. No fim da tarde, transfer do Baixão para Mucugê.',
      distancia: '18 km',
      esforco: 'Alto',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'O dia mais leve, depois de dias intensos. Após o café, carro até o Poço Encantado, um enorme poço subterrâneo de águas cristalinas que se acende em azul — ali só se contempla: o banho é proibido para preservar as formações. Depois do almoço, o Poço Azul, parecido, mas onde dá para flutuar sobre uns 20 m de água transparente; ali já se encontraram fósseis de preguiça-gigante e de tigre-dentes-de-sabre. Por fim, cerca de 2 horas de carro até Lençóis, onde o pacote termina.',
      distancia: 'Trechos curtos',
      esforco: 'Leve',
    },
  ],
  en: [
    {
      titulo: 'Pati lookout + Igrejinha',
      corpo: 'We leave Lençóis at 7:30 am for the village of Guiné, where the trail begins. It is about 3 hours — 1 of steep climbing and 2 on the flat — to the classic Pati Valley lookout. After a snack, another hour and a half to Igrejinha, where Mr João and his family welcome the group to their guesthouse.',
      distancia: '12 km',
      esforco: 'Moderate',
    },
    {
      titulo: 'Morro do Castelo + waterfalls',
      corpo: 'After a hearty breakfast we set off at 8:00 am for Morro do Castelo — the toughest day, climbing to over 1,200 m. At the top there are three lookouts and Gruta da Lapinha, one of the rarest caves in the world, at over 1,000 m. We come back a different way, past the Lajes and Funis waterfalls, reaching Igrejinha around 6:00 pm.',
      distancia: '18 km',
      esforco: 'Hard',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'We say goodbye to our hosts and leave at 8:00 am. About 3 hours to the Cachoeirão lookout, with a drop of around 280 m — in the rainy season you can count up to 16 waterfalls around the valley. After a snack prepared by the guide, we continue across the Gerais do Vieira to the Aleixos descent, where the car is waiting around 5:00 pm for the transfer to Baixão, in Ibicoara.',
      distancia: '15 km',
      esforco: 'Moderate',
    },
    {
      titulo: 'Buracão Waterfall + Recanto Verde + Orquídeas',
      corpo: 'Thirty minutes by car to the trailhead and 3 km to the top of Buracão Waterfall, with swims at the Recanto Verde and Orquídeas waterfalls along the way. The trail is easy-going, with a few steep sections and steps. At the canyon’s edge a wooden staircase leads down to the river, and from there you swim or scramble to the falls, which have a crystal-clear pool for swimming. On the way back, a regional lunch cooked by local residents at the park entrance, then back to the guesthouse in Baixão. Abseiling is optional.',
      distancia: '6 km',
      esforco: 'Light / Moderate',
    },
    {
      titulo: 'Fumacinha Waterfall + Encontro Waterfall',
      corpo: 'The walk starts in the cerrado and follows trails and dirt roads to the riverbed, which then becomes the path — with stops to swim in pools and small waterfalls. The final stretch is the most demanding: up and down through canyons with walls over 100 m high, and some passages require safety gear. At Fumacinha, time to rest and take it all in; the return is the same way. In the late afternoon, transfer from Baixão to Mucugê.',
      distancia: '18 km',
      esforco: 'Hard',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'The lightest day, after several intense ones. After breakfast we drive to Poço Encantado, a huge underground pool of crystal-clear water that glows blue — here you only look: swimming is banned to protect the formations. After lunch, Poço Azul, similar, but here you can float over some 20 m of transparent water, where fossils of giant sloths and sabre-toothed cats have been found. Finally, about 2 hours by car to Lençóis, where the package ends.',
      distancia: 'Short walks',
      esforco: 'Light',
    },
  ],
  es: [
    {
      titulo: 'Mirador del Pati + Igrejinha',
      corpo: 'Salimos de Lençóis a las 7:30 hacia la villa del Guiné, donde empieza el sendero. Son cerca de 3 horas — 1 de subida empinada y 2 en terreno plano — hasta el mirador tradicional del Valle del Pati. Después de un refrigerio, 1h30 más hasta la Igrejinha, donde don João y su familia reciben al grupo en su hospedaje.',
      distancia: '12 km',
      esforco: 'Moderado',
    },
    {
      titulo: 'Morro do Castelo + cascadas',
      corpo: 'Después de un desayuno reforzado, salida a las 8:00 hacia el Morro do Castelo — el día de mayor esfuerzo, con subida a más de 1.200 m de altitud. En la cima hay tres miradores y la Gruta da Lapinha, una de las más raras del mundo, a más de 1.000 m. La vuelta es por otro camino, pasando por la Cascada das Lajes y la de los Funis, con llegada a la Igrejinha cerca de las 18:00.',
      distancia: '18 km',
      esforco: 'Alto',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'Nos despedimos del hospedaje y salimos a las 8:00. Cerca de 3 horas hasta el Mirador del Cachoeirão, con unos 280 m de caída — en época de lluvias se pueden contar hasta 16 cascadas alrededor del valle. Después del refrigerio que prepara el conductor, seguimos por los Gerais do Vieira hasta la bajada de los Aleixos, donde el auto espera cerca de las 17:00 para el traslado al Baixão, en Ibicoara.',
      distancia: '15 km',
      esforco: 'Moderado',
    },
    {
      titulo: 'Cascada do Buracão + Recanto Verde + Orquídeas',
      corpo: 'Treinta minutos en auto hasta la entrada del sendero y 3 km hasta lo alto de la Cascada do Buracão, con baños en la Cascada del Recanto Verde y en la de las Orquídeas por el camino. El sendero es tranquilo, con algunos tramos empinados y escaleras. Al borde del cañón, una escalera de madera baja hasta el río, y el resto es nadando o trepando hasta la caída, que tiene un pozo cristalino para nadar. A la vuelta, almuerzo típico preparado por vecinos en la entrada del parque y regreso al hospedaje en el Baixão. El rappel es opcional.',
      distancia: '6 km',
      esforco: 'Leve / Moderado',
    },
    {
      titulo: 'Cascada da Fumacinha + Cascada do Encontro',
      corpo: 'La caminata empieza en el cerrado y sigue por senderos y caminos de tierra hasta el lecho del río, que se vuelve el camino — con paradas para bañarse en pozos y pequeñas cascadas. El tramo final es el más exigente: sube y baja entre cañones con paredes de más de 100 m, y algunos pasos piden equipo de seguridad. En la Fumacinha, descanso y contemplación; la vuelta es por el mismo camino. Al final de la tarde, traslado del Baixão a Mucugê.',
      distancia: '18 km',
      esforco: 'Alto',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'El día más liviano, después de días intensos. Tras el desayuno, auto hasta el Poço Encantado, un enorme pozo subterráneo de aguas cristalinas que se enciende de azul — ahí solo se contempla: el baño está prohibido para preservar las formaciones. Después del almuerzo, el Poço Azul, parecido, pero donde se puede flotar sobre unos 20 m de agua transparente; ahí se encontraron fósiles de perezoso gigante y de tigre dientes de sable. Por último, cerca de 2 horas en auto hasta Lençóis, donde termina el paquete.',
      distancia: 'Tramos cortos',
      esforco: 'Leve',
    },
  ],
};

const CHECKLIST_6: Record<Locale, Pick<Extract<PatiFaqItem, { type: 'checklist' }>, 'requiredColumns' | 'recommendedColumns' | 'note'>> = {
  pt: {
    requiredColumns: [
      ['Água (1,5 L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Duas mudas de roupa leve', 'Roupa de banho', 'Roupa para dormir (pode fazer 15 °C)', 'Boné ou chapéu'],
      ['Protetor solar', 'Repelente', 'Remédios pessoais', 'Documento de identificação', 'Mochila cargueira (40 L ou mais)', 'Mochila de ataque (10 L ou mais)', 'Capa de chuva', 'Lanterna'],
    ],
    recommendedColumns: [['Toalha fina', 'Bastão de caminhada'], ['Lanche ou fruta', 'Dinheiro para bebidas']],
    note: 'Nos três dias de Pati você carrega a própria mochila: quanto mais leve, melhor. Se não quiser carregar peso, consulte a opção de carregador ou mula.',
  },
  en: {
    requiredColumns: [
      ['Water (1.5 L per person)', 'Hiking shoes or boots', 'Spare socks', 'Two sets of light clothes', 'Swimwear', 'Sleepwear (it can drop to 15 °C)', 'Cap or hat'],
      ['Sunscreen', 'Insect repellent', 'Personal medication', 'ID document', 'Trekking backpack (40 L or more)', 'Day pack (10 L or more)', 'Rain jacket', 'Torch'],
    ],
    recommendedColumns: [['Thin towel', 'Walking pole'], ['Snack or fruit', 'Cash for drinks']],
    note: 'On the three days in the Pati you carry your own pack: the lighter, the better. If you would rather not carry the weight, ask about a porter or a mule.',
  },
  es: {
    requiredColumns: [
      ['Agua (1,5 L por persona)', 'Zapatillas o botas de caminata', 'Medias extra', 'Dos mudas de ropa liviana', 'Malla', 'Ropa para dormir (puede hacer 15 °C)', 'Gorra o sombrero'],
      ['Protector solar', 'Repelente', 'Medicamentos personales', 'Documento de identidad', 'Mochila grande (40 L o más)', 'Mochila de ataque (10 L o más)', 'Piloto de lluvia', 'Linterna'],
    ],
    recommendedColumns: [['Toalla fina', 'Bastón de caminata'], ['Snack o fruta', 'Dinero para bebidas']],
    note: 'En los tres días de Pati cargás tu propia mochila: cuanto más liviana, mejor. Si no querés cargar peso, consultá la opción de porteador o mula.',
  },
};

const INCLUIDO_6: Record<Locale, { included: string[]; excluded: string[] }> = {
  pt: {
    included: ['Guia de montanha bilíngue com treinamento WAFA (consulte disponibilidade)', 'Rastreador SPOT X via satélite (consulte disponibilidade)', 'Transfer Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Hospedagem (5 noites)', 'Alimentação durante o pacote — informe restrições', 'Seguro aventura', 'Kit de primeiros socorros'],
    excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Jantar do 5º e do 6º dia', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Carregador pessoal ou mulas', 'Hotéis e refeições antes e depois do pacote', 'Gorjetas por serviços adicionais (fotos e outros auxílios)'],
  },
  en: {
    included: ['Bilingual mountain guide with WAFA training (subject to availability)', 'SPOT X satellite tracker (subject to availability)', 'Transfers Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Accommodation (5 nights)', 'Meals during the package — tell us about dietary restrictions', 'Adventure insurance', 'First-aid kit'],
    excluded: ['Anything not listed', 'Breakfast on day 1', 'Dinner on days 5 and 6', 'Extra drinks', 'Personal gear', 'Medical evacuation', 'Personal porter or mules', 'Hotels and meals before and after the package', 'Tips for additional services (photos and other help)'],
  },
  es: {
    included: ['Guía de montaña bilingüe con formación WAFA (consultá disponibilidad)', 'Rastreador SPOT X satelital (consultá disponibilidad)', 'Traslado Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Alojamiento (5 noches)', 'Comidas durante el paquete — avisá restricciones', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
    excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Cena del 5º y del 6º día', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Porteador personal o mulas', 'Hoteles y comidas antes y después del paquete', 'Propinas por servicios adicionales (fotos y otras ayudas)'],
  },
};

const RISCO_6: Record<Locale, string> = {
  pt: 'Os três primeiros dias são trekking dentro do Vale do Pati, longe de estrada. O Morro do Castelo e a Fumacinha são os trechos mais exigentes, com subidas fortes, leito de rio e passagens que pedem equipamento de segurança — e é ali que um resgate mais demora.',
  en: 'The first three days are a trek inside the Pati Valley, far from any road. Morro do Castelo and Fumacinha are the most demanding stretches, with steep climbs, riverbed walking and passages that call for safety gear — and that is where a rescue takes longest.',
  es: 'Los tres primeros días son trekking dentro del Valle del Pati, lejos de cualquier ruta. El Morro do Castelo y la Fumacinha son los tramos más exigentes, con subidas fuertes, lecho de río y pasos que piden equipo de seguridad — y es ahí donde un rescate más tarda.',
};

function pacote6(
  locale: Locale,
  p: {
    meta: DayTourContent['meta'];
    nivel: string;
    duracao: string;
    titulo: string;
    lead: string;
    sobre: DayTourContent['sobre'];
    precos: [string, string];
    grupoNota: string;
    facts: readonly (readonly [string, string])[];
    fitness: string;
  },
): DayTourContent {
  const c = COMUM[locale];
  return {
    meta: p.meta,
    hero: { ...c.hero, nivel: p.nivel, duracao: p.duracao, titulo: p.titulo, lead: p.lead },
    stats: STATS_6[locale],
    sobre: p.sobre,
    itinerario: { ...c.itinerario, corpo: [], dias: numerar(locale, DIAS_6[locale]) },
    precos: {
      titulo: c.precosTitulo,
      formatos: [
        { titulo: c.privado.titulo, preco: p.precos[0], nota: c.privado.nota },
        { titulo: c.grupo.titulo, preco: p.precos[1], nota: p.grupoNota },
      ],
      nota: c.precosNota,
    },
    faqTitulo: c.faqTitulo,
    faqs: [
      { type: 'checklist', title: c.checklistTitulo, intro: c.checklistIntro, ...CHECKLIST_6[locale] },
      { type: 'included', title: c.incluidoTitulo, ...INCLUIDO_6[locale] },
      safetyFaq(locale, RISCO_6[locale]),
      {
        type: 'technical',
        title: c.tecnicaTitulo,
        facts: p.facts,
        requirements: [c.requisitosFinais[0], p.fitness, ...c.requisitosFinais.slice(1)],
        documents: c.documentos,
        labels: c.labels,
      },
      ...DAY_TOUR_LEGAL[locale],
    ],
    relacionados: { titulo: c.relacionados, ids: ['vale-do-pati-3-dias', 'cachoeira-da-fumacinha', 'cachoeira-do-buracao'] },
    cta: {
      ...c.cta,
      titulo: { pt: ['Seis dias,', 'a Chapada de ponta a ponta.'], en: ['Six days,', 'the Chapada end to end.'], es: ['Seis días,', 'la Chapada de punta a punta.'] }[locale] as [string, string],
    },
  };
}

export const PACOTE_6_CONTENT: Record<Locale, DayTourContent> = {
  pt: pacote6('pt', {
    meta: {
      title: 'Pacote Chapada Extraordinária — 6 dias',
      description: 'Seis dias com três de trekking no Vale do Pati, Cachoeira do Buracão, Cachoeira da Fumacinha, Poço Encantado e Poço Azul. Hospedagem e alimentação inclusas.',
      canonical: '/pt/aventuras/pacote-6-dias',
    },
    nivel: 'Moderado / Alto',
    duracao: '6 dias',
    titulo: 'Chapada Extraordinária em 6 dias.',
    lead: 'Três dias de Vale do Pati, os cânions do Buracão e da Fumacinha e os poços azuis do sul da Chapada.',
    sobre: {
      titulo: 'Sobre o pacote.',
      paragrafos: [
        'Para quem tem mais tempo na Chapada Diamantina e quer conhecer os lugares mais emblemáticos da região. Em seis dias o pacote reúne trekking, canionismo, turismo de base comunitária e os atrativos de maior impacto.',
        'A saída é de Lençóis, com opção de transfer a partir de Palmeiras ou da vila do Guiné (Mucugê). Os três primeiros dias são o percurso tradicional do Vale do Pati: Mirante da Rampa, Igrejinha, Morro do Castelo, Gruta da Lapinha, Cachoeira dos Funis e o Cachoeirão por cima, dormindo em casa de nativos.',
        'Depois a base passa para a zona rural de Ibicoara, de onde se chega à Cachoeira do Buracão (com rapel opcional) e, no dia seguinte, à Cachoeira da Fumacinha. No último dia voltamos a Lençóis passando pelo Poço Encantado e pelo Poço Azul.',
      ],
    },
    precos: ['R$ 4.950', 'R$ 4.650'],
    grupoNota: 'De 2 a 7 pessoas. Há condições especiais para grupos — consulte.',
    facts: [
      ['Categoria', 'Trekking + passeios de um dia'],
      ['Distância a pé', '57 km'],
      ['Percurso de carro', '510 km'],
      ['Nível de esforço', 'Moderado / Alto'],
      ['Atrativos', 'Vale do Pati (3 dias), Cachoeira do Buracão, Cachoeira da Fumacinha, Poço Encantado e Poço Azul'],
      ['Hospedagem', 'Quarto compartilhado em casa de nativos no Pati (avise se precisar de quarto privativo); suítes privadas em Ibicoara e Mucugê'],
      ['Locais para banho', '8'],
      ['Saída / retorno', '7h30 / 20h00'],
    ],
    fitness: 'Condicionamento para subidas e descidas íngremes em terreno acidentado, travessia de rios e riachos, escalaminhada e longas distâncias.',
  }),
  en: pacote6('en', {
    meta: {
      title: 'Extraordinary Chapada Package — 6 days',
      description: 'Six days, three of them trekking the Pati Valley, plus Buracão Waterfall, Fumacinha Waterfall, Poço Encantado and Poço Azul. Accommodation and meals included.',
      canonical: '/en/adventures/package-6-days',
    },
    nivel: 'Moderate / Hard',
    duracao: '6 days',
    titulo: 'Extraordinary Chapada in 6 days.',
    lead: 'Three days in the Pati Valley, the canyons of Buracão and Fumacinha, and the blue pools of the southern Chapada.',
    sobre: {
      titulo: 'About the package.',
      paragrafos: [
        'For anyone with more time in the Chapada Diamantina who wants to see the region’s most iconic places. Over six days the package brings together trekking, canyoning, community-based tourism and the most striking sights in the area.',
        'It starts in Lençóis, with the option of a transfer from Palmeiras or the village of Guiné (Mucugê). The first three days follow the classic Pati Valley route: the Rampa lookout, Igrejinha, Morro do Castelo, Gruta da Lapinha, Funis Waterfall and Cachoeirão from above, sleeping in local families’ homes.',
        'Then the base moves to the countryside around Ibicoara, from where we reach Buracão Waterfall (with optional abseiling) and, the next day, Fumacinha Waterfall. On the last day we return to Lençóis by way of Poço Encantado and Poço Azul.',
      ],
    },
    precos: ['R$ 4,950', 'R$ 4,650'],
    grupoNota: 'From 2 to 7 people. Special terms for groups — ask us.',
    facts: [
      ['Category', 'Trek + day tours'],
      ['Distance on foot', '57 km'],
      ['Drive', '510 km'],
      ['Effort level', 'Moderate / Hard'],
      ['Sights', 'Pati Valley (3 days), Buracão Waterfall, Fumacinha Waterfall, Poço Encantado and Poço Azul'],
      ['Accommodation', 'Shared room in local homes in the Pati (tell us if you need a private room); private en-suites in Ibicoara and Mucugê'],
      ['Places to swim', '8'],
      ['Departure / return', '7:30 am / 8:00 pm'],
    ],
    fitness: 'Fitness for steep ascents and descents on rough ground, crossing rivers and streams, scrambling and long distances.',
  }),
  es: pacote6('es', {
    meta: {
      title: 'Paquete Chapada Extraordinaria — 6 días',
      description: 'Seis días, tres de ellos de trekking en el Valle del Pati, más la Cascada do Buracão, la Cascada da Fumacinha, el Poço Encantado y el Poço Azul. Alojamiento y comidas incluidos.',
      canonical: '/es/aventuras/paquete-6-dias',
    },
    nivel: 'Moderado / Alto',
    duracao: '6 días',
    titulo: 'Chapada Extraordinaria en 6 días.',
    lead: 'Tres días de Valle del Pati, los cañones del Buracão y la Fumacinha y los pozos azules del sur de la Chapada.',
    sobre: {
      titulo: 'Sobre el paquete.',
      paragrafos: [
        'Para quien tiene más tiempo en la Chapada Diamantina y quiere conocer los lugares más emblemáticos de la región. En seis días el paquete reúne trekking, barranquismo, turismo de base comunitaria y los atractivos de mayor impacto.',
        'La salida es desde Lençóis, con opción de traslado desde Palmeiras o desde la villa del Guiné (Mucugê). Los tres primeros días son el recorrido tradicional del Valle del Pati: Mirador de la Rampa, Igrejinha, Morro do Castelo, Gruta da Lapinha, Cascada de los Funis y el Cachoeirão por arriba, durmiendo en casas de nativos.',
        'Después la base pasa a la zona rural de Ibicoara, desde donde se llega a la Cascada do Buracão (con rappel opcional) y, al día siguiente, a la Cascada da Fumacinha. El último día volvemos a Lençóis pasando por el Poço Encantado y el Poço Azul.',
      ],
    },
    precos: ['R$ 4.950', 'R$ 4.650'],
    grupoNota: 'De 2 a 7 personas. Hay condiciones especiales para grupos — consultá.',
    facts: [
      ['Categoría', 'Trekking + paseos de un día'],
      ['Distancia a pie', '57 km'],
      ['Recorrido en auto', '510 km'],
      ['Nivel de esfuerzo', 'Moderado / Alto'],
      ['Atractivos', 'Valle del Pati (3 días), Cascada do Buracão, Cascada da Fumacinha, Poço Encantado y Poço Azul'],
      ['Alojamiento', 'Habitación compartida en casas de nativos en el Pati (avisá si necesitás habitación privada); suites privadas en Ibicoara y Mucugê'],
      ['Lugares para bañarse', '8'],
      ['Salida / regreso', '7:30 / 20:00'],
    ],
    fitness: 'Estado físico para subidas y bajadas empinadas en terreno accidentado, cruce de ríos y arroyos, trepada y largas distancias.',
  }),
};
