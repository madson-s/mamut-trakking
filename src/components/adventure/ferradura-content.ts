/**
 * Conteúdo da página da Cachoeira da Ferradura, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-ferradura. A operadora não tem
 * versão em inglês nem em espanhol desta página — **EN e ES são tradução feita
 * neste repositório** e precisam de revisão antes de valerem como material de
 * venda.
 *
 * ⚠️ Duas divergências na fonte: a faixa do topo diz 30 km de carro e o
 * itinerário diz 4,5 km até a entrada da trilha (adotei os 4,5 km, que é o
 * trecho descrito); e o nível aparece como "Moderado" no topo e "Leve/Moderado"
 * no itinerário (adotei Leve / Moderado, coerente com 3 km de caminhada).
 *
 * A cachoeira é sazonal: só enche depois de chuva forte. Isso está no lead e no
 * bloco de segurança de propósito — é a informação que muda a decisão de ir.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const FERRADURA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/ferradura/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/ferradura/1.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/ferradura/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/ferradura/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['7 km', '/svg/_icons/icon_03_montain.svg'],
    ['4,5 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 280,
};

export const FERRADURA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Ferradura',
      description:
        'Caminhada leve de 3 km até uma cachoeira sazonal no Rio Mandassaia, a 4,5 km de Lençóis — fora da rota turística principal.',
      canonical: '/pt/aventuras/cachoeira-da-ferradura',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Cachoeira da Ferradura.',
      lead: 'Uma cachoeira sazonal no Rio Mandassaia, a meia hora de Lençóis — e longe da fila dos passeios de sempre.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira da Ferradura.',
      paragrafos: [
        'Um dos passeios mais especiais fora da rota turística principal da Chapada. Fica no curso do Rio Mandassaia, a poucos quilômetros de Lençóis, e mesmo assim quase nunca tem fila.',
        'É uma cachoeira sazonal: fica deslumbrante depois de chuva forte e pode estar fraca na estiagem. Vale conferir a condição com o atendimento antes de fechar a data.',
        'A caminhada é curta e leve — 3 km até a cachoeira. A trilha tem trechos que pedem atenção, mas com a orientação do condutor não representam dificuldade.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída a partir das 8h00 do centro de Lençóis, de carro ou de moto, e 4,5 km até a entrada da trilha, na Vila do Barro Branco.',
        'Caminhada de 3 km até a Cachoeira da Ferradura, no curso do Rio Mandassaia. A trilha tem trechos que pedem atenção, sempre com o condutor orientando a passagem.',
        'Na cachoeira, o condutor prepara o piquenique em frente à queda — tempo para descansar, nadar e ficar com a vista.',
        'Volta pelo mesmo caminho até a saída da trilha, onde o transporte espera para o retorno ao centro da cidade.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 320', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 280', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Repelente'], ['Lanche ou fruta', 'Toalha', 'Câmera']],
        note: 'Roteiro curto e perto da cidade: dá para levar pouco. O essencial é calçado fechado e água.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local com treinamento APH e bilíngue', 'Transporte até a entrada da trilha', 'Piquenique na cachoeira', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Equipamento pessoal', 'Bebidas extras', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'A Ferradura é sazonal e depende de chuva recente: fora da temporada de águas pode estar com pouco volume. Confirme a condição com o atendimento antes de fechar a data — e conte que a trilha fica escorregadia justamente quando a cachoeira está no auge.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para fugir', 'da rota de sempre?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Ferradura Waterfall',
      description:
        'An easy 3 km walk to a seasonal waterfall on the Mandassaia river, 4.5 km from Lençóis — off the main tourist route.',
      canonical: '/en/adventures/ferradura-waterfall',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Ferradura Waterfall.',
      lead: 'A seasonal waterfall on the Mandassaia river, half an hour from Lençóis — and well clear of the usual queue.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Ferradura Waterfall.',
      paragrafos: [
        'One of the most special trips off the main tourist route in the Chapada. It sits on the course of the Mandassaia river, a few kilometres from Lençóis, and even so there is almost never a queue.',
        'It is a seasonal waterfall: stunning after heavy rain, and it can be running low in the dry season. It is worth checking the current condition with us before settling on a date.',
        'The walk is short and easy — 3 km to the waterfall. The trail has a few sections that call for attention, but with the guide showing the way they are no trouble.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from 8:00 am from the centre of Lençóis, by car or motorbike, and 4.5 km to the trailhead at Vila do Barro Branco.',
        'A 3 km walk to Ferradura Waterfall, on the course of the Mandassaia river. The trail has sections that call for attention, always with the guide showing the way through.',
        'At the waterfall, the guide sets up the picnic facing the falls — time to rest, swim and sit with the view.',
        'Back along the same route to the trailhead, where the transport is waiting to return to the centre of town.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 320', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 280', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Insect repellent'], ['Snack or fruit', 'Towel', 'Camera']],
        note: 'A short trip close to town: you can travel light. Closed shoes and water are the essentials.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Local guide with first-aid training, bilingual', 'Transport to the trailhead', 'Picnic at the waterfall', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Personal gear', 'Extra drinks', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'Ferradura is seasonal and depends on recent rain: outside the wet season it can be running low. Check the current condition with us before settling on a date — and bear in mind the trail is at its most slippery exactly when the waterfall is at its best.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to leave', 'the usual route?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Ferradura',
      description:
        'Caminata suave de 3 km hasta una cascada estacional en el Río Mandassaia, a 4,5 km de Lençóis — fuera de la ruta turística principal.',
      canonical: '/es/aventuras/cascada-da-ferradura',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Cascada da Ferradura.',
      lead: 'Una cascada estacional en el Río Mandassaia, a media hora de Lençóis — y lejos de la fila de los paseos de siempre.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada da Ferradura.',
      paragrafos: [
        'Uno de los paseos más especiales fuera de la ruta turística principal de la Chapada. Está en el curso del Río Mandassaia, a pocos kilómetros de Lençóis, y aun así casi nunca hay fila.',
        'Es una cascada estacional: queda deslumbrante después de lluvia fuerte y puede estar floja en la seca. Conviene consultar la condición con atención antes de cerrar la fecha.',
        'La caminata es corta y suave — 3 km hasta la cascada. El sendero tiene tramos que piden atención, pero con la orientación del guía no representan dificultad.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a partir de las 8:00 del centro de Lençóis, en auto o en moto, y 4,5 km hasta la entrada del sendero, en la Vila do Barro Branco.',
        'Caminata de 3 km hasta la Cascada da Ferradura, en el curso del Río Mandassaia. El sendero tiene tramos que piden atención, siempre con el guía orientando el paso.',
        'En la cascada, el guía prepara el picnic frente a la caída — tiempo para descansar, nadar y quedarse con la vista.',
        'Vuelta por el mismo camino hasta la salida del sendero, donde el transporte espera para el regreso al centro de la ciudad.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 320', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 280', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Repelente'], ['Snack o fruta', 'Toalla', 'Cámara']],
        note: 'Recorrido corto y cerca de la ciudad: se puede llevar poco. Lo esencial es calzado cerrado y agua.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local con formación en primeros auxilios, bilingüe', 'Transporte hasta la entrada del sendero', 'Picnic en la cascada', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Equipo personal', 'Bebidas extra', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'La Ferradura es estacional y depende de lluvia reciente: fuera de la temporada de aguas puede tener poco volumen. Confirmá la condición con atención antes de cerrar la fecha — y contá con que el sendero queda resbaladizo justamente cuando la cascada está en su mejor momento.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para escapar', 'de la ruta de siempre?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
