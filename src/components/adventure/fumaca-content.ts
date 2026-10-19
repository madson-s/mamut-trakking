/**
 * Conteúdo da página da Cachoeira da Fumaça, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumaca e EN de
 * mamut.agency/en/aventuras/fumaca-waterfall. ES é tradução feita aqui.
 *
 * Pagamento, cancelamento e o corpo do bloco de segurança vêm de
 * `day-tour-legal` — são regra da operadora, iguais em todos os passeios.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { PRICE_TABLE_LABELS, pricing } from './price-table';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const FUMACA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumaca/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/fumaca/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['12 km', '/svg/_icons/icon_03_montain.svg'],
    ['60 km', '/svg/_icons/icon_09_location.svg'],
    ['380 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_03_montain.svg'],
  ],
  // Valores publicados em mamut.agency/aventuras/cachoeira-da-fumaca (#tabela-pagamento).
  // [pessoas, privado, em grupo]
  ...pricing([
    ['1', 650, 420],
    ['2', 490, 420],
    ['3', 390, 350],
    ['4+', 390, 320],
  ]),
};

export const FUMACA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumaça',
      description:
        'A maior queda livre do Brasil: 380 metros de água que viram névoa antes de tocar o chão. Trilha de 12 km pelo Vale do Capão até o mirante.',
      canonical: '/pt/aventuras/cachoeira-da-fumaca',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Vale do Capão',
      duracao: '1 dia',
      titulo: 'Cachoeira da Fumaça.',
      lead: 'Trezentos e oitenta metros de queda livre — a água vira fumaça antes de chegar embaixo.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura da queda', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira da Fumaça.',
      paragrafos: [
        'Com 380 metros, é a maior queda livre do Brasil. O volume de água é pequeno diante da altura: o vento pega a lâmina no meio do caminho e a transforma em névoa — daí o nome. Em boa parte do ano a água não chega ao chão.',
        'A visita é feita por cima. Do mirante, deitado de bruços na borda, você vê o abismo inteiro se abrir e o vale do Capão ao fundo. São dois mirantes, ambos com cerca de 400 metros de exposição.',
        'A trilha começa com a parte mais dura: cerca de 1 hora de subida em 2 km de pedra até o platô. Depois disso o terreno fica plano e a caminhada é tranquila até a borda.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 rumo ao Vale do Capão — são cerca de 60 km de carro, com trechos de estrada de terra.',
        'A trilha começa no Capão. A primeira hora é a mais exigente: 2 km de subida em piso de pedra, ganhando altura rápido até alcançar o platô.',
        'No alto o terreno abre e fica plano. A caminhada segue por campo rupestre, entre sempre-vivas e afloramentos de arenito, até a borda do cânion.',
        'Chegada aos mirantes. Deitar na borda para ver a queda de 380 metros é a razão da caminhada — dá para passar um bom tempo ali antes do piquenique.',
        'A volta é pelo mesmo caminho, agora com a descida de pedra no fim. Retorno a Lençóis no fim da tarde.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 420', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 320', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (2L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Roupas leves', 'Boné ou chapéu'],
          ['Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanterna de cabeça'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Roupa de banho', 'Câmera']],
        note: 'Não há sombra no platô e o sol bate direto durante quase toda a travessia. Chapéu e protetor não são opcionais na prática.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Taxa de acesso', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O mirante é uma borda de cânion sem qualquer proteção, com cerca de 400 metros de exposição. A aproximação é feita deitado, um de cada vez, sempre com o guia. Quem tem vertigem consegue fazer a trilha e apreciar o vale sem chegar à borda.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'a água virar fumaça?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumaça Waterfall',
      description:
        "Brazil's tallest free fall: 380 metres of water that turns to mist before reaching the ground. A 12 km trail through Vale do Capão to the lookout.",
      canonical: '/en/adventures/fumaca-waterfall',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Vale do Capão',
      duracao: '1 day',
      titulo: 'Fumaça Waterfall.',
      lead: 'Three hundred and eighty metres of free fall — the water turns to smoke before it lands.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the fall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fumaça Waterfall.',
      paragrafos: [
        "At 380 metres, it is the tallest free fall in Brazil. The volume of water is small against that height: the wind catches the sheet halfway down and turns it to mist — hence the name, fumaça, smoke. For much of the year the water never reaches the ground.",
        'You visit it from above. Lying flat on the edge of the lookout, the whole abyss opens beneath you with the Capão valley beyond. There are two lookouts, both with around 400 metres of exposure.',
        'The trail starts with the hardest part: about 1 hour climbing 2 km of rock up to the plateau. After that the ground flattens out and the walk to the rim is easy.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am towards Vale do Capão — around 60 km by car, with stretches of dirt road.',
        'The trail starts in Capão. The first hour is the demanding one: 2 km climbing over rock, gaining height quickly until you reach the plateau.',
        'Up top the terrain opens out and levels off. The walk continues across rocky grassland, among everlasting flowers and sandstone outcrops, to the canyon rim.',
        'Arrival at the lookouts. Lying down on the edge to watch the 380-metre drop is the reason for the walk — there is time to stay a while before the picnic.',
        'The return is by the same route, with the rock descent at the end. Back in Lençóis in the late afternoon.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 420', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 320', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (2L per person)', 'Trainers or hiking boots', 'Spare socks', 'Light clothing', 'Cap or hat'],
          ['Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things', 'Head torch'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Swimwear', 'Camera']],
        note: 'There is no shade on the plateau and the sun hits directly for most of the crossing. Hat and sunscreen are not optional in practice.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Personal gear', 'Access fee', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The lookout is an unprotected canyon edge with around 400 metres of exposure. You approach it lying down, one at a time, always with the guide. Anyone with vertigo can still do the trail and enjoy the valley without going to the edge.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to watch', 'water turn to smoke?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumaça',
      description:
        'La mayor caída libre de Brasil: 380 metros de agua que se vuelve niebla antes de tocar el suelo. Sendero de 12 km por el Valle do Capão hasta el mirador.',
      canonical: '/es/aventuras/cascada-da-fumaca',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Valle do Capão',
      duracao: '1 día',
      titulo: 'Cascada da Fumaça.',
      lead: 'Trescientos ochenta metros de caída libre — el agua se vuelve humo antes de llegar abajo.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de la caída', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada da Fumaça.',
      paragrafos: [
        'Con 380 metros, es la mayor caída libre de Brasil. El volumen de agua es pequeño frente a la altura: el viento toma la lámina a mitad de camino y la convierte en niebla — de ahí el nombre, fumaça, humo. Buena parte del año el agua no llega al suelo.',
        'La visita se hace desde arriba. Del mirador, acostado boca abajo en el borde, se abre el abismo entero con el valle do Capão al fondo. Son dos miradores, ambos con unos 400 metros de exposición.',
        'El sendero empieza con la parte más dura: cerca de 1 hora de subida en 2 km de piedra hasta la meseta. Después el terreno se aplana y la caminata hasta el borde es tranquila.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 rumbo al Valle do Capão — unos 60 km en auto, con tramos de camino de tierra.',
        'El sendero empieza en Capão. La primera hora es la más exigente: 2 km de subida sobre piedra, ganando altura rápido hasta alcanzar la meseta.',
        'Arriba el terreno se abre y se aplana. La caminata sigue por campo rupestre, entre siemprevivas y afloramientos de arenisca, hasta el borde del cañón.',
        'Llegada a los miradores. Acostarse en el borde para ver la caída de 380 metros es la razón de la caminata — hay tiempo para quedarse un buen rato antes del picnic.',
        'La vuelta es por el mismo camino, ahora con la bajada de piedra al final. Regreso a Lençóis al final de la tarde.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 420', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 320', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (2L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Gorra o sombrero'],
          ['Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Linterna frontal'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Ropa de baño', 'Cámara']],
        note: 'No hay sombra en la meseta y el sol pega directo casi toda la travesía. Sombrero y protector no son opcionales en la práctica.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Tasa de acceso', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El mirador es un borde de cañón sin ninguna protección, con unos 400 metros de exposición. La aproximación se hace acostado, de a uno, siempre con el guía. Quien tiene vértigo puede hacer el sendero y disfrutar el valle sin llegar al borde.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'el agua volverse humo?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Cascade da Fumaça',
      description:
        'La plus haute chute libre du Brésil : 380 mètres d’eau qui se changent en brume avant de toucher le sol. Un sentier de 12 km depuis le Vale do Capão jusqu’au belvédère.',
      canonical: '/fr/aventures/cascade-da-fumaca',
    },
    hero: {
      nivel: 'Modéré / Élevé',
      origem: 'Départ : Vale do Capão',
      duracao: '1 jour',
      titulo: 'Cascade da Fumaça.',
      lead: 'Trois cent quatre-vingts mètres de chute libre — l’eau se change en fumée avant d’atteindre le bas.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Hauteur de la chute', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade da Fumaça.',
      paragrafos: [
        'Avec ses 380 mètres, c’est la plus haute chute libre du Brésil. Le débit est faible face à la hauteur : le vent saisit le filet d’eau à mi-chemin et le transforme en brume — d’où son nom, « fumaça », la fumée. Une bonne partie de l’année, l’eau n’atteint pas le sol.',
        'La visite se fait par le haut. Depuis le belvédère, allongé à plat ventre au bord, vous voyez tout l’abîme s’ouvrir sous vous, avec le Vale do Capão au loin. Il y a deux belvédères, tous deux avec environ 400 mètres de vide.',
        'Le sentier commence par le plus dur : environ 1 heure de montée sur 2 km de rocher jusqu’au plateau. Ensuite, le terrain devient plat et la marche est tranquille jusqu’au bord.',
        'Pendant les marches, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis à 8 h vers le Vale do Capão — environ 60 km de voiture, avec des tronçons de piste en terre.',
        'Le sentier commence au Capão. La première heure est la plus exigeante : 2 km de montée sur sol rocheux, où l’on prend vite de la hauteur jusqu’au plateau.',
        'En haut, le terrain s’ouvre et devient plat. La marche se poursuit à travers le campo rupestre, entre immortelles et affleurements de grès, jusqu’au bord du canyon.',
        'Arrivée aux belvédères. S’allonger au bord pour voir la chute de 380 mètres, c’est la raison d’être de la marche — on peut y passer un bon moment avant le pique-nique.',
        'Retour par le même chemin, avec cette fois la descente rocheuse à la fin. Retour à Lençóis en fin d’après-midi.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 420', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 320', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
          ['Eau (2 L par personne)', 'Baskets ou chaussures de randonnée', 'Chaussettes de rechange', 'Vêtements légers', 'Casquette ou chapeau'],
          ['Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires', 'Lampe frontale'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Maillot de bain', 'Appareil photo']],
        note: 'Il n’y a pas d’ombre sur le plateau et le soleil tape directement pendant presque toute la traversée. Chapeau et crème solaire ne sont pas optionnels, en pratique.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue, formé aux premiers secours (APH)', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Transfert (en option)', 'Pique-nique (en option)', 'Équipement personnel', 'Droit d’accès', 'Évacuation médicale', 'Hébergement avant ou après la sortie'],
      },
      safetyFaq(
        'fr',
        'Le belvédère est un bord de canyon sans aucune protection, avec environ 400 mètres de vide. On s’en approche allongé, un par un, toujours avec le guide. Si vous êtes sujet au vertige, vous pouvez faire le sentier et profiter de la vallée sans aller jusqu’au bord.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à voir', 'l’eau se changer en fumée ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Fumaça',
      description:
        'De hoogste vrije val van Brazilië: 380 meter water dat in nevel verandert voordat het de grond raakt. Een pad van 12 km vanuit de Vale do Capão naar het uitkijkpunt.',
      canonical: '/nl/avonturen/waterval-fumaca',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Vale do Capão',
      duracao: '1 dag',
      titulo: 'Waterval Fumaça.',
      lead: 'Driehonderdtachtig meter vrije val — het water wordt rook voordat het landt.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Hoogte van de val', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Fumaça.',
      paragrafos: [
        'Met 380 meter is het de hoogste vrije val van Brazilië. De hoeveelheid water is klein vergeleken met die hoogte: halverwege grijpt de wind het watergordijn en maakt er nevel van — vandaar de naam, fumaça, rook. Een groot deel van het jaar bereikt het water de grond nooit.',
        'Je bezoekt hem van bovenaf. Plat liggend op de rand van het uitkijkpunt opent de hele afgrond zich onder je, met de Vale do Capão erachter. Er zijn twee uitkijkpunten, allebei met zo’n 400 meter diepte onder je.',
        'Het pad begint met het zwaarste stuk: zo’n uur klimmen over 2 km rots naar het plateau. Daarna wordt het terrein vlak en is de wandeling naar de rand makkelijk.',
        'Tijdens onze tochten is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 8.00 uur uit Lençóis richting de Vale do Capão — zo’n 60 km met de auto, met stukken onverharde weg.',
        'Het pad begint in de Capão. Het eerste uur is het zware deel: 2 km klimmen over rots, waarbij je snel hoogte wint tot je het plateau bereikt.',
        'Bovenaan wordt het terrein open en vlak. De wandeling gaat verder over rotsig grasland, tussen strobloemen en zandsteenformaties, tot aan de rand van de canyon.',
        'Aankomst bij de uitkijkpunten. Op de rand liggen en de diepte van 380 meter in kijken is de reden van de wandeling — er is tijd om even te blijven voor de picknick.',
        'De terugweg gaat via dezelfde route, met aan het eind de afdaling over de rots. Laat in de middag terug in Lençóis.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 420', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 320', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
          ['Water (2 L per persoon)', 'Sportschoenen of wandelschoenen', 'Extra sokken', 'Lichte kleding', 'Pet of hoed'],
          ['Zonnebrand', 'Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Rugzak voor je spullen', 'Hoofdlamp'],
        ],
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Zwemkleding', 'Camera']],
        note: 'Op het plateau is geen schaduw en de zon staat het grootste deel van de tocht vol op je. Hoed en zonnebrand zijn in de praktijk geen optie.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met EHBO-opleiding', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Vervoer (optioneel)', 'Picknick (optioneel)', 'Persoonlijke uitrusting', 'Toegangsprijs', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'Het uitkijkpunt is een onbeveiligde canyonrand met zo’n 400 meter diepte. Je nadert hem liggend, één voor één, altijd samen met de gids. Wie last heeft van hoogtevrees kan het pad toch lopen en van het dal genieten zonder naar de rand te gaan.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om water', 'in rook te zien veranderen?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Fumaça',
      description:
        'Der höchste freie Fall Brasiliens: 380 Meter Wasser, das zu Nebel wird, bevor es den Boden erreicht. Ein Weg von 12 km vom Vale do Capão bis zum Aussichtspunkt.',
      canonical: '/de/abenteuer/wasserfall-fumaca',
    },
    hero: {
      nivel: 'Mittel / Schwer',
      origem: 'Start: Vale do Capão',
      duracao: '1 Tag',
      titulo: 'Wasserfall Fumaça.',
      lead: 'Dreihundertachtzig Meter freier Fall — das Wasser wird zu Rauch, bevor es landet.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Fallhöhe', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Fumaça-Wasserfall.',
      paragrafos: [
        'Mit 380 Metern ist er der höchste freie Fall Brasiliens. Die Wassermenge ist im Verhältnis zu dieser Höhe klein: Auf halber Strecke packt der Wind den Wasservorhang und macht Nebel daraus — daher der Name, fumaça, Rauch. Einen großen Teil des Jahres erreicht das Wasser den Boden nie.',
        'Du besuchst ihn von oben. Flach auf dem Rand des Aussichtspunkts liegend, öffnet sich der ganze Abgrund unter dir, mit dem Vale do Capão dahinter. Es gibt zwei Aussichtspunkte, beide mit rund 400 Metern Tiefe unter dir.',
        'Der Weg beginnt mit dem anstrengendsten Abschnitt: rund eine Stunde Aufstieg über 2 km Fels bis zum Plateau. Danach wird das Gelände flach, und der Weg zum Rand ist leicht.',
        'Auf unseren Touren ist das Picknick das Mittagessen: ausgewogene Mahlzeiten mit Vitaminen, Eiweiß, Ballaststoffen und Kohlenhydraten.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 8:00 Uhr in Lençóis Richtung Vale do Capão — rund 60 km mit dem Auto, mit Abschnitten auf Schotterpiste.',
        'Der Weg beginnt im Capão. Die erste Stunde ist der anstrengende Teil: 2 km Aufstieg über Fels, bei dem du schnell an Höhe gewinnst, bis du das Plateau erreichst.',
        'Oben wird das Gelände offen und flach. Die Wanderung geht weiter über felsiges Grasland, zwischen Strohblumen und Sandsteinformationen, bis zum Rand des Canyons.',
        'Ankunft an den Aussichtspunkten. Am Rand zu liegen und in die 380 Meter Tiefe zu schauen ist der Grund für die Wanderung — es bleibt Zeit, für das Picknick eine Weile zu bleiben.',
        'Der Rückweg folgt derselben Route, am Ende mit dem Abstieg über den Fels. Am späten Nachmittag zurück in Lençóis.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 420', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 320', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      tabela: PRICE_TABLE_LABELS.de,
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checkliste — was du mitnimmst',
        intro: 'Mit * markierte Gegenstände sind Pflicht. Fehlt einer davon, gefährdet das die Sicherheit der Gruppe und eine Teilnahme ist nicht möglich.',
        requiredColumns: [
          ['Wasser (2 L pro Person)', 'Turnschuhe oder Wanderschuhe', 'Ersatzsocken', 'Leichte Kleidung', 'Kappe oder Hut'],
          ['Sonnencreme', 'Persönliche Medikamente', 'Lichtbildausweis', 'Rucksack für deine Sachen', 'Stirnlampe'],
        ],
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Snack oder Obst', 'Badesachen', 'Kamera']],
        note: 'Auf dem Plateau gibt es keinen Schatten, und die Sonne brennt den größten Teil der Tour direkt auf dich. Hut und Sonnencreme sind in der Praxis keine Option.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger Bergführer mit Erste-Hilfe-Ausbildung', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Transport (optional)', 'Picknick (optional)', 'Persönliche Ausrüstung', 'Eintrittspreis', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq(
        'de',
        'Der Aussichtspunkt ist ein ungesicherter Canyonrand mit rund 400 Metern Tiefe. Du näherst dich ihm liegend, einer nach dem anderen, immer zusammen mit dem Guide. Wer unter Höhenangst leidet, kann den Weg trotzdem gehen und das Tal genießen, ohne an den Rand zu gehen.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit zu sehen, wie', 'Wasser zu Rauch wird?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
