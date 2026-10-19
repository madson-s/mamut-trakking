/**
 * Conteúdo da página da Cachoeira do Palmital (2 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-palmital e EN de
 * mamut.agency/en/aventuras/palmital-waterfall. ES é tradução feita aqui.
 *
 * É o único trekking do site em que se dorme em barraca, não em casa de nativo
 * — por isso o bloco de hospedagem entra no `sobre` e o checklist traz saco de
 * dormir e isolante.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';
import { pricing } from './price-table';

export const PALMITAL_ASSETS: DayTourAssets = {
  detailLayout: 'journey',
  hero: { src: '/img/adventures/palmital/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/palmital/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/palmital/2.jpeg', width: 2364, height: 1330 },
    { src: '/img/adventures/palmital/3.jpeg', width: 1773, height: 1773 },
  ],
  stats: [
    ['22 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 dias / 1 noite', '/svg/_icons/icon_11_calendar.svg'],
    ['2 cachoeiras', '/svg/_icons/icon_09_location.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 1800, 1500],
    ['2', 1700, 1500],
    ['3', 1500, 1300],
    ['4+', 1350, 1300],
  ]),
  returnTime: { time: '16:00', until: '17:00', byRoad: false },
  campingGear: true,
};

export const PALMITAL_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Palmital — 2 dias',
      description:
        'Dois dias por trilhas rústicas do antigo garimpo, dormindo em barraca na beira do rio. Cachoeira do Palmital e Cachoeira do Capivara.',
      canonical: '/pt/aventuras/cachoeira-do-palmital',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Lençóis',
      duracao: '2 dias',
      titulo: 'Cachoeira do Palmital.',
      lead: 'Dois dias pelas rotas do antigo garimpo, dormindo em barraca na beira do rio.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Cachoeiras', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Palmital.',
      paragrafos: [
        'Uma das rotas mais tradicionais do garimpo na Chapada Diamantina, com duas cachoeiras: a do Palmital e a do Capivara. As trilhas são rústicas e antigas, dentro do Parque Nacional, com trechos acidentados e escorregadios.',
        'A caminhada explica o cotidiano e as técnicas do antigo garimpo de diamantes na região — inclusive dormindo nas antigas "tocas". É um roteiro de imersão natural e cultural em partes iguais.',
        'É a alternativa certa para quem tem poucos dias na Chapada e quer um trekking selvagem, ou para quem está evitando multidões: este é bem quieto.',
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
          titulo: 'Serra do Veneno + Toca da Onça + Cachoeira do Palmital',
          corpo: 'Saída a partir das 6h00 do centro de Lençóis, com todos os itens, em direção à Trilha do Ribeirão do Meio. São 40 minutos em terreno majoritariamente plano até o Rio Ribeirão, que atravessamos para começar a subida da Serra do Veneno — uma antiga lavra de garimpeiros, cerca de 2 horas de aclive considerável. A primeira parada é na Toca da Onça, mirante de onde se vê a Cachoeira do Capivari e o encontro dos rios Capivara e Capivari. Mais 1 hora até o acampamento base na Cachoeira do Palmital, e o resto do dia é da cachoeira. Jantar por volta das 19h00.',
          distancia: '9 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cachoeira do Capivara + Ribeirão do Meio',
          corpo: 'Depois do café da manhã preparado pelo guia, subimos o rio principal por 30 minutos — só com itens de ataque — até a Cachoeira do Capivara, onde fica o resto da manhã. Após o piquenique de almoço recolhemos tudo e voltamos pelo mesmo caminho, passando de novo pela Toca da Onça e pela Serra do Veneno. Na descida, parada no Ribeirão do Meio, com seu tobogã natural polido na pedra. Mais 40 minutos e estamos de volta ao centro de Lençóis, por volta das 17h00.',
          distancia: '13 km',
          esforco: 'Baixo / Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.700', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.300', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `Se não quiser carregar peso, há opção de carregador pessoal. Os itens são conferidos na reserva e no check-in. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH', 'Camping: barraca, saco de dormir e isolante térmico', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Jantar do 2º dia', 'Transfer de Salvador (opcional)', 'Carregador pessoal ou mulas (opcional)', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem e refeições antes ou após o trekking', 'Gorjetas por serviços adicionais'],
      },
      safetyFaq(
        'pt',
        'As trilhas são rústicas, com trechos acidentados e escorregadios — este roteiro pede boa aptidão física. Dormir em barraca dentro do Parque Nacional significa não ter estrutura por perto: por isso a lanterna de cabeça e a capa de chuva entram como obrigatórias, não como recomendação.',
      ),
      {
        type: 'technical',
        title: 'Ficha técnica e requisitos',
        facts: [
          ['Categoria', 'Trekking com pernoite em barraca'],
          ['Distância a pé', '22 km'],
          ['Percurso de carro', '1 km'],
          ['Ganho de elevação', '460 m'],
          ['Altitude máxima', '850 m'],
          ['Atrativos', 'Palmital, Capivara e Toca da Onça'],
          ['Locais para banho', '2'],
          ['Saída / retorno', '6h00 / 16h00–17h00'],
        ],
        requirements: [
          'Ter mais de 18 anos. Menores de idade só com o responsável legal.',
          'Condicionamento para subidas e descidas íngremes em terreno acidentado, travessia de rios e riachos, escalaminhada e longas distâncias.',
          'Informar restrições alimentares na reserva.',
          'Os valores estão sujeitos a mudança — reservas já confirmadas não sofrem reajuste.',
        ],
        documents: [
          ['Termo de Responsabilidade (PDF)', '/docs/termo-de-responsabilidade.pdf'],
          ['Classificação de nível das atividades', '/pt/classificacao-de-nivel'],
        ],
        labels: { requirements: 'Requisitos', documents: 'Documentos' },
      },
      ...DAY_TOUR_LEGAL.pt,
    ],
    relacionados: { titulo: 'Outras aventuras.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['Pronto para dormir', 'na beira do rio?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Palmital Waterfall — 2 days',
      description:
        'Two days on the rough trails of the old diamond mines, sleeping in a tent by the river. Palmital Waterfall and Capivara Waterfall.',
      canonical: '/en/adventures/palmital-waterfall',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Lençóis',
      duracao: '2 days',
      titulo: 'Palmital Waterfall.',
      lead: 'Two days on the old mining routes, sleeping in a tent by the river.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Waterfalls', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Palmital Waterfall.',
      paragrafos: [
        'One of the most traditional mining routes in the Chapada Diamantina, taking in two waterfalls: Palmital and Capivara. The trails are old and rough, inside the National Park, with uneven and slippery sections.',
        'The walk explains the daily life and the techniques of the old diamond mining in the region — including sleeping in the old "tocas", the miners’ shelters. It is a trip of natural and cultural immersion in equal measure.',
        'It is the right alternative for anyone with only a few days in the Chapada who wants a wild trek, or for anyone avoiding crowds: this one is genuinely quiet.',
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
          titulo: 'Serra do Veneno + Toca da Onça + Palmital Waterfall',
          corpo: 'Departure from 6:00 am from the centre of Lençóis, carrying everything, towards the Ribeirão do Meio trail. Forty minutes on mostly flat ground to the Ribeirão river, which we cross to begin the climb of Serra do Veneno — an old miners’ diggings, around 2 hours of substantial ascent. The first stop is Toca da Onça, a lookout over Capivari Waterfall and the meeting of the Capivara and Capivari rivers. Another hour to base camp at Palmital Waterfall, and the rest of the day belongs to the falls. Dinner around 7:00 pm.',
          distancia: '9 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Capivara Waterfall + Ribeirão do Meio',
          corpo: 'After breakfast prepared by the guide, we head up the main river for 30 minutes — with day packs only — to Capivara Waterfall, where the rest of the morning is spent. After the picnic lunch we pack up and return by the same route, past Toca da Onça and Serra do Veneno again. On the way down, a stop at Ribeirão do Meio, with its natural slide polished into the rock. Another 40 minutes and we are back in the centre of Lençóis, around 5:00 pm.',
          distancia: '13 km',
          esforco: 'Low / Moderate',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,700', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,300', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `If you would rather not carry the weight, a personal porter can be arranged. Items are checked at booking and at check-in. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training', 'Camping: tent, sleeping bag and sleeping mat', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Dinner on day 2', 'Transfer from Salvador (optional)', 'Personal porter or mules (optional)', 'Extra drinks', 'Personal gear', 'Medical evacuation', 'Accommodation and meals before or after the trek', 'Tips for additional services'],
      },
      safetyFaq(
        'en',
        'The trails are rough, with uneven and slippery sections — this route calls for decent fitness. Sleeping in a tent inside the National Park means no facilities nearby: that is why the head torch and rain gear are mandatory rather than merely recommended.',
      ),
      {
        type: 'technical',
        title: 'Technical sheet and requirements',
        facts: [
          ['Category', 'Trek with a night under canvas'],
          ['Distance on foot', '22 km'],
          ['Drive', '1 km'],
          ['Elevation gain', '460 m'],
          ['Highest point', '850 m'],
          ['Sights', 'Palmital, Capivara and Toca da Onça'],
          ['Places to swim', '2'],
          ['Departure / return', '6:00 am / 4:00–5:00 pm'],
        ],
        requirements: [
          'You must be over 18. Minors only with their legal guardian.',
          'Fitness for steep ascents and descents on rough ground, crossing rivers and streams, scrambling and long distances.',
          'Tell us about dietary restrictions when booking.',
          'Prices are subject to change — bookings already confirmed are not repriced.',
        ],
        documents: [
          ['Liability waiver (PDF)', '/docs/termo-de-responsabilidade.pdf'],
          ['Activity difficulty classification', '/en/level-classification'],
        ],
        labels: { requirements: 'Requirements', documents: 'Documents' },
      },
      ...DAY_TOUR_LEGAL.en,
    ],
    relacionados: { titulo: 'Other adventures.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['Ready to sleep', 'by the river?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada del Palmital — 2 días',
      description:
        'Dos días por senderos rústicos de la antigua minería, durmiendo en carpa a la orilla del río. Cascada del Palmital y Cascada del Capivara.',
      canonical: '/es/aventuras/cascada-del-palmital',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Lençóis',
      duracao: '2 días',
      titulo: 'Cascada del Palmital.',
      lead: 'Dos días por las rutas de la antigua minería, durmiendo en carpa a la orilla del río.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Cascadas', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada del Palmital.',
      paragrafos: [
        'Una de las rutas más tradicionales de la minería en la Chapada Diamantina, con dos cascadas: la del Palmital y la del Capivara. Los senderos son rústicos y antiguos, dentro del Parque Nacional, con tramos accidentados y resbaladizos.',
        'La caminata explica el cotidiano y las técnicas de la antigua minería de diamantes en la región — incluso durmiendo en las antiguas "tocas". Es un recorrido de inmersión natural y cultural en partes iguales.',
        'Es la alternativa justa para quien tiene pocos días en la Chapada y quiere un trekking salvaje, o para quien está evitando multitudes: este es bien tranquilo.',
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
          titulo: 'Serra do Veneno + Toca da Onça + Cascada del Palmital',
          corpo: 'Salida a partir de las 6:00 del centro de Lençóis, con todos los ítems, en dirección al Sendero del Ribeirão do Meio. Son 40 minutos en terreno mayormente plano hasta el Río Ribeirão, que cruzamos para empezar la subida de la Serra do Veneno — una antigua labor de mineros, cerca de 2 horas de subida considerable. La primera parada es en la Toca da Onça, mirador desde donde se ve la Cascada del Capivari y el encuentro de los ríos Capivara y Capivari. Otra hora hasta el campamento base en la Cascada del Palmital, y el resto del día es de la cascada. Cena cerca de las 19:00.',
          distancia: '9 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Cascada del Capivara + Ribeirão do Meio',
          corpo: 'Después del desayuno preparado por el guía, subimos el río principal por 30 minutos — solo con mochila de ataque — hasta la Cascada del Capivara, donde queda el resto de la mañana. Tras el picnic del almuerzo recogemos todo y volvemos por el mismo camino, pasando otra vez por la Toca da Onça y la Serra do Veneno. En la bajada, parada en el Ribeirão do Meio, con su tobogán natural pulido en la piedra. Otros 40 minutos y estamos de vuelta en el centro de Lençóis, cerca de las 17:00.',
          distancia: '13 km',
          esforco: 'Bajo / Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.700', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.300', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Si no querés cargar peso, hay opción de porteador personal. Los ítems se revisan en la reserva y en el check-in. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios', 'Camping: carpa, bolsa de dormir y aislante térmico', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Cena del 2º día', 'Traslado desde Salvador (opcional)', 'Porteador personal o mulas (opcional)', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Alojamiento y comidas antes o después del trekking', 'Propinas por servicios adicionales'],
      },
      safetyFaq(
        'es',
        'Los senderos son rústicos, con tramos accidentados y resbaladizos — este recorrido pide buena aptitud física. Dormir en carpa dentro del Parque Nacional significa no tener estructura cerca: por eso la linterna frontal y el piloto de lluvia entran como obligatorios, no como recomendación.',
      ),
      {
        type: 'technical',
        title: 'Ficha técnica y requisitos',
        facts: [
          ['Categoría', 'Trekking con noche en carpa'],
          ['Distancia a pie', '22 km'],
          ['Traslado en auto', '1 km'],
          ['Ganancia de elevación', '460 m'],
          ['Altitud máxima', '850 m'],
          ['Atractivos', 'Palmital, Capivara y Toca da Onça'],
          ['Lugares para bañarse', '2'],
          ['Salida / regreso', '6:00 / 16:00–17:00'],
        ],
        requirements: [
          'Tener más de 18 años. Menores de edad solo con el responsable legal.',
          'Estado físico para subidas y bajadas empinadas en terreno accidentado, cruce de ríos y arroyos, trepada y largas distancias.',
          'Informar restricciones alimentarias en la reserva.',
          'Los valores están sujetos a cambios — las reservas ya confirmadas no sufren reajuste.',
        ],
        documents: [
          ['Término de Responsabilidad (PDF)', '/docs/termo-de-responsabilidade.pdf'],
          ['Clasificación de nivel de las actividades', '/es/clasificacion-de-nivel'],
        ],
        labels: { requirements: 'Requisitos', documents: 'Documentos' },
      },
      ...DAY_TOUR_LEGAL.es,
    ],
    relacionados: { titulo: 'Otras aventuras.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['¿Listo para dormir', 'a la orilla del río?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Cascade du Palmital — 2 jours',
      description:
        'Deux jours sur les sentiers rustiques de l’ancien garimpo, en dormant sous tente au bord de la rivière. Cascade du Palmital et cascade du Capivara.',
      canonical: '/fr/aventures/cascade-du-palmital',
    },
    hero: {
      nivel: 'Modéré / Élevé',
      origem: 'Départ : Lençóis',
      duracao: '2 jours',
      titulo: 'Cascade du Palmital.',
      lead: 'Deux jours sur les routes de l’ancien garimpo, en dormant sous tente au bord de la rivière.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Cascades', 'Où l’on dort', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade du Palmital.',
      paragrafos: [
        'L’une des routes les plus traditionnelles du garimpo (l’orpaillage diamantaire) dans la Chapada Diamantina, avec deux cascades : celle du Palmital et celle du Capivara. Les sentiers sont rustiques et anciens, à l’intérieur du parc national, avec des passages accidentés et glissants.',
        'La marche raconte le quotidien et les techniques de l’ancienne extraction de diamants dans la région — on dort d’ailleurs dans les anciennes « tocas », les abris sous roche des chercheurs de diamants. C’est un itinéraire d’immersion autant naturelle que culturelle.',
        'C’est la bonne option pour qui dispose de peu de jours dans la Chapada et veut un trek sauvage, ou pour qui cherche à éviter la foule : celui-ci est vraiment tranquille.',
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
          titulo: 'Serra do Veneno + Toca da Onça + cascade du Palmital',
          corpo: 'Départ à partir de 6 h du centre de Lençóis, avec toutes vos affaires, en direction du sentier du Ribeirão do Meio. 40 minutes sur un terrain majoritairement plat jusqu’à la rivière Ribeirão, que l’on traverse pour attaquer la montée de la Serra do Veneno — une ancienne exploitation de chercheurs de diamants, environ 2 heures de montée soutenue. Premier arrêt à la Toca da Onça, un belvédère d’où l’on voit la cascade du Capivari et la confluence des rivières Capivara et Capivari. Encore 1 heure jusqu’au camp de base, à la cascade du Palmital, et le reste de la journée appartient à la cascade. Dîner vers 19 h.',
          distancia: '9 km',
          esforco: 'Modéré / Élevé',
        },
        {
          rotulo: '2e jour',
          titulo: 'Cascade du Capivara + Ribeirão do Meio',
          corpo: 'Après le petit-déjeuner préparé par le guide, nous remontons la rivière principale pendant 30 minutes — avec seulement un sac léger — jusqu’à la cascade du Capivara, où nous passons le reste de la matinée. Après le pique-nique du déjeuner, nous plions le camp et revenons par le même chemin, en repassant par la Toca da Onça et la Serra do Veneno. À la descente, arrêt au Ribeirão do Meio et à son toboggan naturel poli dans la roche. Encore 40 minutes et nous voilà de retour au centre de Lençóis, vers 17 h.',
          distancia: '13 km',
          esforco: 'Faible / Modéré',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 1.700', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 1.300', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      wildTrekChecklist('fr', WILD_TREK_PORTER.fr),
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne formé aux premiers secours (APH)', 'Camping : tente, sac de couchage et tapis isolant', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après le sentier'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Dîner du 2e jour', 'Transfert depuis Salvador (en option)', 'Porteur personnel ou mules (en option)', 'Boissons supplémentaires', 'Équipement personnel', 'Évacuation médicale', 'Hébergement et repas avant ou après le trek', 'Pourboires pour services supplémentaires'],
      },
      safetyFaq(
        'fr',
        'Les sentiers sont rustiques, avec des passages accidentés et glissants — cet itinéraire demande une bonne condition physique. Dormir sous tente à l’intérieur du parc national signifie n’avoir aucune infrastructure à proximité : c’est pourquoi la lampe frontale et la protection de pluie sont obligatoires, et non simplement recommandés.',
      ),
      {
        type: 'technical',
        title: 'Fiche technique et conditions',
        facts: [
          ['Catégorie', 'Trek avec nuit sous tente'],
          ['Distance à pied', '22 km'],
          ['Trajet en voiture', '1 km'],
          ['Dénivelé positif', '460 m'],
          ['Altitude maximale', '850 m'],
          ['Points d’intérêt', 'Palmital, Capivara et Toca da Onça'],
          ['Lieux de baignade', '2'],
          ['Départ / retour', '6 h / 16 h–17 h'],
        ],
        requirements: [
          'Avoir plus de 18 ans. Les mineurs uniquement accompagnés de leur responsable légal.',
          'Condition physique pour des montées et descentes raides sur terrain accidenté, des traversées de rivières et de ruisseaux, des passages de désescalade et de longues distances.',
          'Signaler toute restriction alimentaire à la réservation.',
          'Les tarifs peuvent changer — les réservations déjà confirmées ne sont pas réajustées.',
        ],
        documents: [
          ['Décharge de responsabilité (PDF, en portugais)', '/docs/termo-de-responsabilidade.pdf'],
          ['Classification des niveaux des activités', '/fr/classification-des-niveaux'],
        ],
        labels: { requirements: 'Conditions', documents: 'Documents' },
      },
      ...DAY_TOUR_LEGAL.fr,
    ],
    relacionados: { titulo: 'Autres aventures.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['Prêt à dormir', 'au bord de la rivière ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Palmital — 2 dagen',
      description:
        'Twee dagen over de ruige paden van de oude diamantmijnen, met een nacht in de tent aan de rivier. Waterval Palmital en Waterval Capivara.',
      canonical: '/nl/avonturen/waterval-palmital',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Lençóis',
      duracao: '2 dagen',
      titulo: 'Waterval Palmital.',
      lead: 'Twee dagen over de oude routes van de goudzoekers, met een nacht in de tent aan de rivier.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Watervallen', 'Waar je slaapt', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Palmital.',
      paragrafos: [
        'Een van de meest traditionele mijnroutes van de Chapada Diamantina, langs twee watervallen: Palmital en Capivara. De paden zijn oud en ruig, binnen het Nationaal Park, met oneffen en gladde stukken.',
        'De tocht vertelt over het dagelijks leven en de technieken van de vroegere diamantwinning in de regio — inclusief een nacht in de oude "tocas", de schuilplaatsen van de mijnwerkers. Het is een reis die in gelijke mate natuur en cultuur laat beleven.',
        'Het is de juiste keuze voor wie maar een paar dagen in de Chapada heeft en toch een wilde trektocht wil, of voor wie drukte wil vermijden: deze route is echt rustig.',
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
          titulo: 'Serra do Veneno + Toca da Onça + Waterval Palmital',
          corpo: 'Vertrek vanaf 6.00 uur uit het centrum van Lençóis, met alle bagage op de rug, richting het pad van de Ribeirão do Meio. Veertig minuten over overwegend vlak terrein naar de rivier de Ribeirão, die we oversteken om aan de klim van de Serra do Veneno te beginnen — een oude mijnplek, zo’n 2 uur flink stijgen. De eerste stop is de Toca da Onça, een uitkijkpunt over de Waterval Capivari en de samenvloeiing van de rivieren Capivara en Capivari. Nog een uur naar het basiskamp bij de Waterval Palmital, en de rest van de dag is voor de watervallen. Avondeten rond 19.00 uur.',
          distancia: '9 km',
          esforco: 'Gemiddeld / Zwaar',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'Waterval Capivara + Ribeirão do Meio',
          corpo: 'Na het ontbijt dat de gids klaarmaakt, lopen we 30 minuten de hoofdrivier op — alleen met een dagrugzak — naar de Waterval Capivara, waar we de rest van de ochtend blijven. Na de picknicklunch pakken we in en gaan we via dezelfde route terug, opnieuw langs de Toca da Onça en de Serra do Veneno. Onderweg naar beneden stoppen we bij de Ribeirão do Meio, met zijn natuurlijke glijbaan, gladgeslepen in de rots. Nog 40 minuten en we zijn rond 17.00 uur terug in het centrum van Lençóis.',
          distancia: '13 km',
          esforco: 'Licht / Gemiddeld',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 1.700', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 1.300', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      wildTrekChecklist('nl', WILD_TREK_PORTER.nl),
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Berggids met EHBO-opleiding', 'Kampeeruitrusting: tent, slaapzak en isolatiemat', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na het pad'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Avondeten op dag 2', 'Transfer vanaf Salvador (optioneel)', 'Persoonlijke drager of muilezels (optioneel)', 'Extra drankjes', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting en maaltijden voor of na de trektocht', 'Fooien voor extra diensten'],
      },
      safetyFaq(
        'nl',
        'De paden zijn ruig, met oneffen en gladde stukken — deze route vraagt een redelijke conditie. Slapen in een tent binnen het Nationaal Park betekent dat er geen voorzieningen in de buurt zijn: daarom zijn hoofdlamp en regenkleding verplicht en niet alleen aanbevolen.',
      ),
      {
        type: 'technical',
        title: 'Technische gegevens en vereisten',
        facts: [
          ['Categorie', 'Trektocht met een nacht in de tent'],
          ['Afstand te voet', '22 km'],
          ['Met de auto', '1 km'],
          ['Hoogtemeters', '460 m'],
          ['Hoogste punt', '850 m'],
          ['Bezienswaardigheden', 'Palmital, Capivara en Toca da Onça'],
          ['Zwemplekken', '2'],
          ['Vertrek / terugkeer', '6.00 / 16.00–17.00 uur'],
        ],
        requirements: [
          'Je moet ouder zijn dan 18. Minderjarigen alleen samen met hun wettelijke vertegenwoordiger.',
          'Conditie voor steile klimmen en afdalingen op ruig terrein, het oversteken van rivieren en beken, klauteren en lange afstanden.',
          'Geef dieetwensen door bij de boeking.',
          'Prijzen kunnen veranderen — al bevestigde boekingen worden niet aangepast.',
        ],
        documents: [
          ['Aansprakelijkheidsverklaring (pdf)', '/docs/termo-de-responsabilidade.pdf'],
          ['Classificatie van de moeilijkheidsgraad', '/nl/niveauclassificatie'],
        ],
        labels: { requirements: 'Vereisten', documents: 'Documenten' },
      },
      ...DAY_TOUR_LEGAL.nl,
    ],
    relacionados: { titulo: 'Andere avonturen.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['Klaar om te slapen', 'aan de rivier?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Palmital — 2 Tage',
      description:
        'Zwei Tage auf den rauen Wegen der alten Diamantminen, mit einer Nacht im Zelt am Fluss. Palmital-Wasserfall und Capivara-Wasserfall.',
      canonical: '/de/abenteuer/wasserfall-palmital',
    },
    hero: {
      nivel: 'Mittel / Schwer',
      origem: 'Start: Lençóis',
      duracao: '2 Tage',
      titulo: 'Wasserfall Palmital.',
      lead: 'Zwei Tage auf den alten Routen der Goldsucher, mit einer Nacht im Zelt am Fluss.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Dauer', 'Wasserfälle', 'Übernachtung', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Palmital-Wasserfall.',
      paragrafos: [
        'Eine der traditionsreichsten Minenrouten der Chapada Diamantina, vorbei an zwei Wasserfällen: Palmital und Capivara. Die Wege sind alt und rau, mitten im Nationalpark, mit unebenen und rutschigen Abschnitten.',
        'Die Tour erzählt vom Alltag und den Techniken des früheren Diamantenabbaus in der Region — einschließlich einer Nacht in den alten „Tocas“, den Unterschlüpfen der Minenarbeiter. Es ist eine Reise, die Natur und Kultur zu gleichen Teilen erleben lässt.',
        'Die richtige Wahl für alle, die nur wenige Tage in der Chapada haben und trotzdem eine wilde Trekkingtour wollen, oder die Trubel meiden möchten: Diese Route ist wirklich ruhig.',
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
          titulo: 'Serra do Veneno + Toca da Onça + Palmital-Wasserfall',
          corpo: 'Start ab 6:00 Uhr im Zentrum von Lençóis, mit dem ganzen Gepäck auf dem Rücken, Richtung Weg zum Ribeirão do Meio. Vierzig Minuten über überwiegend flaches Gelände bis zum Fluss Ribeirão, den wir durchqueren, um mit dem Aufstieg der Serra do Veneno zu beginnen — einer alten Minenstätte, rund 2 Stunden kräftiger Anstieg. Erster Halt ist die Toca da Onça, ein Aussichtspunkt über den Capivari-Wasserfall und den Zusammenfluss der Flüsse Capivara und Capivari. Noch eine Stunde bis zum Basislager am Palmital-Wasserfall, und der Rest des Tages gehört den Wasserfällen. Abendessen gegen 19:00 Uhr.',
          distancia: '9 km',
          esforco: 'Mittel / Schwer',
        },
        {
          rotulo: 'Tag 2',
          titulo: 'Capivara-Wasserfall + Ribeirão do Meio',
          corpo: 'Nach dem Frühstück, das der Guide zubereitet, gehen wir 30 Minuten den Hauptfluss hinauf — nur mit Tagesrucksack — zum Capivara-Wasserfall, wo wir den Rest des Vormittags bleiben. Nach dem Picknick-Mittagessen packen wir zusammen und gehen auf derselben Route zurück, wieder vorbei an der Toca da Onça und der Serra do Veneno. Beim Abstieg halten wir am Ribeirão do Meio mit seiner natürlichen, glatt geschliffenen Felsrutsche. Noch 40 Minuten, und gegen 17:00 Uhr sind wir zurück im Zentrum von Lençóis.',
          distancia: '13 km',
          esforco: 'Leicht / Mittel',
        },
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 1.700', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 1.300', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      wildTrekChecklist('de', WILD_TREK_PORTER.de),
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Bergführer mit Erste-Hilfe-Ausbildung', 'Campingausrüstung: Zelt, Schlafsack und Isomatte', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Warteraum, sichere Gepäckaufbewahrung und Dusche vor/nach der Wanderung'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Abendessen am 2. Tag', 'Transfer ab Salvador (optional)', 'Persönlicher Träger oder Maultiere (optional)', 'Zusätzliche Getränke', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft und Mahlzeiten vor oder nach der Tour', 'Trinkgelder für zusätzliche Leistungen'],
      },
      safetyFaq(
        'de',
        'Die Wege sind rau, mit unebenen und rutschigen Abschnitten — diese Route verlangt eine ordentliche Kondition. Im Zelt im Nationalpark zu schlafen heißt, dass es keine Infrastruktur in der Nähe gibt: Deshalb sind Stirnlampe und Regenschutz Pflicht und nicht nur empfohlen.',
      ),
      {
        type: 'technical',
        title: 'Technische Daten und Voraussetzungen',
        facts: [
          ['Kategorie', 'Trekking mit einer Nacht im Zelt'],
          ['Strecke zu Fuß', '22 km'],
          ['Mit dem Auto', '1 km'],
          ['Höhenmeter', '460 m'],
          ['Höchster Punkt', '850 m'],
          ['Sehenswürdigkeiten', 'Palmital, Capivara und Toca da Onça'],
          ['Badestellen', '2'],
          ['Start / Rückkehr', '6:00 / 16:00–17:00 Uhr'],
        ],
        requirements: [
          'Du musst über 18 sein. Minderjährige nur in Begleitung ihrer gesetzlichen Vertretung.',
          'Kondition für steile Auf- und Abstiege auf rauem Gelände, das Durchqueren von Flüssen und Bächen, Kletterpassagen und lange Strecken.',
          'Teile uns Ernährungswünsche bei der Buchung mit.',
          'Preise können sich ändern — bereits bestätigte Buchungen werden nicht angepasst.',
        ],
        documents: [
          ['Haftungserklärung (PDF)', '/docs/termo-de-responsabilidade.pdf'],
          ['Einstufung der Schwierigkeitsgrade', '/de/schwierigkeitsgrade'],
        ],
        labels: { requirements: 'Voraussetzungen', documents: 'Dokumente' },
      },
      ...DAY_TOUR_LEGAL.de,
    ],
    relacionados: { titulo: 'Weitere Abenteuer.', ids: ['trilha-aguas-claras-2-dias', 'city-tour-em-lencois', 'fazenda-pratinha-gruta-azul'] },
    cta: {
      titulo: ['Bereit, am Fluss', 'zu schlafen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
