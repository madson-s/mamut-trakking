/**
 * Conteúdo da página Gruta da Fumaça + Pratinha + Morro do Camelo, por idioma.
 *
 * PT vem de mamut.agency/aventuras/grutas e EN de
 * mamut.agency/en/aventuras/caves-tour. ES é tradução feita aqui.
 *
 * Único roteiro do site em terreno cárstico — a geologia da Formação Salitre é
 * o que explica as grutas, então ela entra no corpo da página e não só como
 * curiosidade.
 *
 * ⚠️ O hub tem uma entrada separada, `fazenda-pratinha-gruta-azul`, que cobre
 * só a fazenda. Este roteiro a inclui e soma a Gruta da Fumaça e o Morro do
 * Camelo. Confirme com a operadora se os dois produtos coexistem.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const GRUTAS_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/grutas/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/grutas/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/grutas/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/grutas/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['2 km', '/svg/_icons/icon_03_montain.svg'],
    ['130 km', '/svg/_icons/icon_09_location.svg'],
    ['4 atrativos', '/svg/_icons/icon_10_home.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 540,
};

export const GRUTAS_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Grutas + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul e o pôr do sol no Morro do Camelo: um dia pelo calcário da Chapada, com caminhadas curtas.',
      canonical: '/pt/aventuras/grutas',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Grutas + Morro do Camelo.',
      lead: 'Um dia por dentro do calcário — grutas, rio de água azul e o pôr do sol no Camelo para fechar.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Atrativos', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o passeio.',
      paragrafos: [
        'Um passeio de carro com caminhadas curtas, ideal para crianças, idosos e para quem quer conhecer a Chapada Diamantina sem muito esforço. Todos os atrativos têm acesso fácil, são seguros e contam com ampla estrutura.',
        'São quatro paradas: a Gruta da Fumaça, a Fazenda Pratinha, a Gruta Azul e o Mirante do Morro do Camelo — um dos principais cartões-postais da região, e onde o dia termina, no pôr do sol.',
        'Nesta área da Chapada predomina o calcário, rocha frágil à ação da água. É isso que explica a quantidade de grutas e poços subterrâneos: a Formação Salitre tem cerca de 700 milhões de anos, e nela já foram encontrados fósseis datados de mais de 10 mil anos, além de evidências dos mares que cobriram a região e da Era do Gelo.',
        'Na Fazenda Pratinha há atividades adicionais — flutuação, foto subaquática, caiaque, tirolesa e outras. São opcionais e não entram no valor; fale com o atendimento para conferir o que está disponível.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 e cerca de 1 hora de carro até a Gruta da Fumaça, uma das mais completas da região de Iraquara.',
        'Visita de cerca de 40 minutos à gruta, com espeleotemas de todo tipo: estalactites, estalagmites, helictites e a raríssima Flor de Aragonita.',
        'De carro até a Fazenda Pratinha, onde corre o Rio Pratinha. Ali existe uma infinidade de atividades opcionais — flutuação, foto subaquática, caiaque, tirolesa e outras.',
        'Às 15h00, Gruta Azul, no interior da própria fazenda: um show natural de luzes que só acontece à tarde, quando o sol entra na água.',
        'Por volta das 16h30, cerca de 40 minutos de carro até o Mirante do Morro do Camelo, para o pôr do sol.',
        'Retorno a Lençóis, na cidade por volta das 18h30.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 580', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 540', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Dinheiro para as atividades da fazenda']],
        note: 'O piso das grutas é úmido e escorregadio o ano inteiro — calçado fechado com boa aderência não é opcional aqui, mesmo sendo um roteiro leve.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local credenciado com treinamento APH', 'Taxas de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Tirolesa e demais atividades da Pratinha (opcionais)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'Dentro das grutas o piso é úmido, irregular e escorregadio, e há trechos de teto baixo — siga o guia e não se apoie nos espeleotemas: uma estalactite leva milhares de anos para se formar e quebra num toque. A Gruta Azul depende da hora do sol para o efeito de luz, por isso a visita é fixada às 15h00.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para entrar', 'em 700 milhões de anos?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Caves + Camelo Hill',
      description:
        'Fumaça Cave, Pratinha Farm, Blue Cave and sunset from Camelo Hill: a day through the limestone of the Chapada, with short walks.',
      canonical: '/en/adventures/caves-tour',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Caves + Camelo Hill.',
      lead: 'A day inside the limestone — caves, a river of blue water, and sunset from the Camelo to close it out.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Sights', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the tour.',
      paragrafos: [
        'A trip by car with short walks, ideal for children, older travellers and anyone who wants to see the Chapada Diamantina without much effort. Every site has easy access, is safe, and has ample facilities.',
        'There are four stops: Fumaça Cave, Pratinha Farm, the Blue Cave and the Camelo Hill lookout — one of the best-known landmarks in the region, and where the day ends, at sunset.',
        'This part of the Chapada is dominated by limestone, a rock that water breaks down easily. That is what accounts for the number of caves and underground pools: the Salitre Formation is around 700 million years old, and fossils dated at over 10,000 years have been found in it, along with evidence of the seas that once covered the region and of the Ice Age.',
        'At Pratinha Farm there are extra activities — snorkelling, underwater photography, kayaking, zip-lining and more. They are optional and not included in the price; ask us what is currently available.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am and about an hour by car to Fumaça Cave, one of the most complete in the Iraquara region.',
        'A visit of around 40 minutes inside the cave, with speleothems of every kind: stalactites, stalagmites, helictites and the very rare Aragonite Flower.',
        'On by car to Pratinha Farm, where the Pratinha river runs. There is a wealth of optional activities there — snorkelling, underwater photography, kayaking, zip-lining and more.',
        'At 3:00 pm, the Blue Cave, inside the farm itself: a natural light show that only happens in the afternoon, when the sun reaches the water.',
        'Around 4:30 pm, about 40 minutes by car to the Camelo Hill lookout, for the sunset.',
        'Back to Lençóis, in town around 6:30 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 580', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 540', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Cash for the farm activities']],
        note: 'The cave floors are damp and slippery all year round — closed shoes with good grip are not optional here, easy trip or not.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited local guide with first-aid training', 'Access fees', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Zip-line and other Pratinha activities (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'Inside the caves the floor is damp, uneven and slippery, and there are low-ceilinged stretches — follow the guide and do not lean on the speleothems: a stalactite takes thousands of years to form and breaks at a touch. The Blue Cave depends on the sun for its light effect, which is why the visit is fixed at 3:00 pm.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to step into', '700 million years?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Grutas + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul y el atardecer en el Morro do Camelo: un día por la caliza de la Chapada, con caminatas cortas.',
      canonical: '/es/aventuras/grutas',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Grutas + Morro do Camelo.',
      lead: 'Un día por dentro de la caliza — grutas, río de agua azul y el atardecer en el Camelo para cerrar.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Atractivos', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el paseo.',
      paragrafos: [
        'Un paseo en auto con caminatas cortas, ideal para chicos, personas mayores y para quien quiere conocer la Chapada Diamantina sin mucho esfuerzo. Todos los atractivos tienen acceso fácil, son seguros y cuentan con amplia estructura.',
        'Son cuatro paradas: la Gruta da Fumaça, la Fazenda Pratinha, la Gruta Azul y el Mirador del Morro do Camelo — una de las principales postales de la región, y donde termina el día, en el atardecer.',
        'En esta zona de la Chapada predomina la caliza, roca frágil a la acción del agua. Eso explica la cantidad de grutas y pozos subterráneos: la Formación Salitre tiene cerca de 700 millones de años, y en ella se encontraron fósiles datados en más de 10 mil años, además de evidencias de los mares que cubrieron la región y de la Era del Hielo.',
        'En la Fazenda Pratinha hay actividades adicionales — flotación, foto subacuática, kayak, tirolesa y otras. Son opcionales y no entran en el valor; hablá con atención para ver qué está disponible.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 y cerca de 1 hora de auto hasta la Gruta da Fumaça, una de las más completas de la región de Iraquara.',
        'Visita de cerca de 40 minutos a la gruta, con espeleotemas de todo tipo: estalactitas, estalagmitas, helictitas y la rarísima Flor de Aragonita.',
        'En auto hasta la Fazenda Pratinha, donde corre el Río Pratinha. Ahí hay una infinidad de actividades opcionales — flotación, foto subacuática, kayak, tirolesa y otras.',
        'A las 15:00, Gruta Azul, en el interior de la propia fazenda: un show natural de luces que solo ocurre a la tarde, cuando el sol entra en el agua.',
        'Cerca de las 16:30, unos 40 minutos de auto hasta el Mirador del Morro do Camelo, para el atardecer.',
        'Regreso a Lençóis, en la ciudad cerca de las 18:30.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 580', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 540', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Efectivo para las actividades de la fazenda']],
        note: 'El piso de las grutas es húmedo y resbaladizo todo el año — calzado cerrado con buena adherencia no es opcional acá, aunque sea un recorrido suave.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local acreditado con formación en primeros auxilios', 'Tasas de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Tirolesa y demás actividades de la Pratinha (opcionales)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'Dentro de las grutas el piso es húmedo, irregular y resbaladizo, y hay tramos de techo bajo — seguí al guía y no te apoyes en los espeleotemas: una estalactita tarda miles de años en formarse y se rompe con un toque. La Gruta Azul depende de la hora del sol para el efecto de luz, por eso la visita se fija a las 15:00.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para entrar', 'en 700 millones de años?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Grottes + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul et le coucher de soleil au Morro do Camelo : une journée dans le calcaire de la Chapada, avec de courtes marches.',
      canonical: '/fr/aventures/grottes',
    },
    hero: {
      nivel: 'Facile',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Grottes + Morro do Camelo.',
      lead: 'Une journée au cœur du calcaire — grottes, rivière aux eaux bleues et, pour finir, le coucher de soleil au Camelo.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Sites visités', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de l’excursion.',
      paragrafos: [
        'Une excursion en voiture avec de courtes marches, idéale pour les enfants, les personnes âgées et tous ceux qui veulent découvrir la Chapada Diamantina sans trop d’effort. Tous les sites sont faciles d’accès, sûrs et bien aménagés.',
        'Quatre étapes : la Gruta da Fumaça, la Fazenda Pratinha, la Gruta Azul et le belvédère du Morro do Camelo — l’une des cartes postales emblématiques de la région, où la journée se termine au coucher du soleil.',
        'Dans cette partie de la Chapada domine le calcaire, une roche vulnérable à l’action de l’eau. C’est ce qui explique le grand nombre de grottes et de puits souterrains : la formation Salitre a environ 700 millions d’années, et on y a trouvé des fossiles datés de plus de 10 000 ans, ainsi que des traces des mers qui ont recouvert la région et de l’ère glaciaire.',
        'À la Fazenda Pratinha, des activités supplémentaires sont proposées — snorkeling, photo sous-marine, kayak, tyrolienne et autres. Elles sont en option et ne sont pas comprises dans le prix ; contactez notre équipe pour vérifier ce qui est disponible.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis à 8h00 et environ 1 heure de voiture jusqu’à la Gruta da Fumaça, l’une des plus complètes de la région d’Iraquara.',
        'Visite d’environ 40 minutes de la grotte, avec des spéléothèmes de toutes sortes : stalactites, stalagmites, hélictites et la très rare fleur d’aragonite.',
        'En voiture jusqu’à la Fazenda Pratinha, où coule le Rio Pratinha. On y trouve une multitude d’activités en option — snorkeling, photo sous-marine, kayak, tyrolienne et autres.',
        'À 15h00, la Gruta Azul, à l’intérieur même de la fazenda : un spectacle naturel de lumière qui n’a lieu que l’après-midi, quand le soleil pénètre dans l’eau.',
        'Vers 16h30, environ 40 minutes de voiture jusqu’au belvédère du Morro do Camelo, pour le coucher de soleil.',
        'Retour à Lençóis, en ville vers 18h30.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 580', nota: 'Minimum 2 personnes. Seul votre groupe pendant l’excursion.' },
        { titulo: 'En groupe', preco: 'R$ 540', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
        recommendedColumns: [['Imperméable (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Serviette', 'De l’argent pour les activités de la fazenda']],
        note: 'Le sol des grottes est humide et glissant toute l’année — des chaussures fermées à bonne adhérence ne sont pas facultatives ici, même pour un itinéraire facile.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Transfert aller-retour', 'Guide local agréé formé aux premiers secours (APH)', 'Droits d’accès', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Déjeuner (en option)', 'Tyrolienne et autres activités de la Pratinha (en option)', 'Équipement personnel', 'Évacuation médicale', 'Hébergement avant ou après l’excursion'],
      },
      safetyFaq(
        'fr',
        'Dans les grottes, le sol est humide, irrégulier et glissant, et certains passages ont un plafond bas — suivez le guide et ne vous appuyez pas sur les spéléothèmes : une stalactite met des milliers d’années à se former et se brise d’un simple contact. L’effet de lumière de la Gruta Azul dépend de la position du soleil, c’est pourquoi la visite est fixée à 15h00.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à entrer', 'dans 700 millions d’années ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Grotten + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul en zonsondergang vanaf de Morro do Camelo: een dag door het kalksteen van de Chapada, met korte wandelingen.',
      canonical: '/nl/avonturen/grotten',
    },
    hero: {
      nivel: 'Licht',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Grotten + Morro do Camelo.',
      lead: 'Een dag in het kalksteen — grotten, een rivier met blauw water, en als afsluiter de zonsondergang vanaf de Camelo.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Bezienswaardigheden', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de tour.',
      paragrafos: [
        'Een tocht met de auto en korte wandelingen, ideaal voor kinderen, oudere reizigers en iedereen die de Chapada Diamantina zonder veel inspanning wil zien. Elke plek is makkelijk bereikbaar, veilig en heeft goede voorzieningen.',
        'Er zijn vier stops: de Gruta da Fumaça, de Fazenda Pratinha, de Gruta Azul en het uitkijkpunt op de Morro do Camelo — een van de bekendste herkenningspunten van de regio, en waar de dag bij zonsondergang eindigt.',
        'In dit deel van de Chapada overheerst kalksteen, een gesteente dat water makkelijk afbreekt. Daardoor zijn er zoveel grotten en ondergrondse poelen: de Formação Salitre is zo’n 700 miljoen jaar oud, en er zijn fossielen van meer dan 10.000 jaar in gevonden, naast sporen van de zeeën die de regio ooit bedekten en van de ijstijd.',
        'Op de Fazenda Pratinha zijn er extra activiteiten — snorkelen, onderwaterfotografie, kajakken, ziplinen en meer. Die zijn optioneel en niet bij de prijs inbegrepen; vraag ons wat er op dit moment beschikbaar is.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 8.00 uur uit Lençóis en zo’n uur met de auto naar de Gruta da Fumaça, een van de meest complete grotten in de regio Iraquara.',
        'Een bezoek van zo’n 40 minuten in de grot, met allerlei druipsteenformaties: stalactieten, stalagmieten, helictieten en de zeer zeldzame aragonietbloem.',
        'Met de auto verder naar de Fazenda Pratinha, waar de rivier de Pratinha stroomt. Daar zijn veel optionele activiteiten — snorkelen, onderwaterfotografie, kajakken, ziplinen en meer.',
        'Om 15.00 uur de Gruta Azul, op dezelfde boerderij: een natuurlijk lichtspel dat alleen ’s middags te zien is, als de zon het water bereikt.',
        'Rond 16.30 uur zo’n 40 minuten met de auto naar het uitkijkpunt op de Morro do Camelo, voor de zonsondergang.',
        'Terug naar Lençóis, waar we rond 18.30 uur aankomen.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 580', nota: 'Minimaal 2 personen. Alleen jouw groep op de tocht.' },
        { titulo: 'In een groep', preco: 'R$ 540', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Handdoek', 'Contant geld voor de activiteiten op de boerderij']],
        note: 'De bodem van de grotten is het hele jaar vochtig en glad — dichte schoenen met goede grip zijn hier geen optie, ook al is het een makkelijke tocht.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Vervoer heen en terug', 'Erkende lokale gids met EHBO-opleiding', 'Entreegelden', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Lunch (optioneel)', 'Zipline en andere activiteiten op de Pratinha (optioneel)', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'In de grotten is de bodem vochtig, oneffen en glad, en er zijn stukken met een laag plafond — volg de gids en leun niet op de druipstenen: een stalactiet doet er duizenden jaren over om te groeien en breekt bij één aanraking. De Gruta Azul heeft de zon nodig voor haar lichteffect; daarom ligt het bezoek vast op 15.00 uur.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om 700 miljoen jaar', 'in te stappen?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Höhlen + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul und Sonnenuntergang auf dem Morro do Camelo: ein Tag durch den Kalkstein der Chapada, mit kurzen Wanderungen.',
      canonical: '/de/abenteuer/hoehlen',
    },
    hero: {
      nivel: 'Leicht',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Höhlen + Morro do Camelo.',
      lead: 'Ein Tag im Kalkstein — Höhlen, ein Fluss mit blauem Wasser und zum Abschluss der Sonnenuntergang auf dem Camelo.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Sehenswürdigkeiten', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über die Tour.',
      paragrafos: [
        'Eine Tour mit dem Auto und kurzen Wanderungen, ideal für Kinder, ältere Reisende und alle, die die Chapada Diamantina ohne große Anstrengung sehen möchten. Jeder Ort ist leicht erreichbar, sicher und gut ausgestattet.',
        'Es gibt vier Stopps: die Gruta da Fumaça, die Fazenda Pratinha, die Gruta Azul und den Aussichtspunkt auf dem Morro do Camelo — eines der bekanntesten Wahrzeichen der Region, wo der Tag bei Sonnenuntergang endet.',
        'In diesem Teil der Chapada überwiegt Kalkstein, ein Gestein, das Wasser leicht auflöst. Deshalb gibt es so viele Höhlen und unterirdische Becken: Die Formação Salitre ist rund 700 Millionen Jahre alt, und man hat darin Fossilien von über 10.000 Jahren gefunden, dazu Spuren der Meere, die die Region einst bedeckten, und der Eiszeit.',
        'Auf der Fazenda Pratinha gibt es Zusatzaktivitäten — Schnorcheln, Unterwasserfotografie, Kajakfahren, Zipline und mehr. Sie sind optional und nicht im Preis enthalten; frag uns, was gerade verfügbar ist.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 8:00 Uhr in Lençóis und rund eine Stunde mit dem Auto zur Gruta da Fumaça, einer der vollständigsten Höhlen der Region Iraquara.',
        'Ein Besuch von rund 40 Minuten in der Höhle, mit vielfältigen Tropfsteinformationen: Stalaktiten, Stalagmiten, Helictiten und die sehr seltene Aragonitblüte.',
        'Mit dem Auto weiter zur Fazenda Pratinha, durch die der Fluss Pratinha fließt. Dort gibt es viele optionale Aktivitäten — Schnorcheln, Unterwasserfotografie, Kajakfahren, Zipline und mehr.',
        'Um 15:00 Uhr die Gruta Azul, auf derselben Farm: ein natürliches Lichtspiel, das nur nachmittags zu sehen ist, wenn die Sonne das Wasser erreicht.',
        'Gegen 16:30 Uhr rund 40 Minuten mit dem Auto zum Aussichtspunkt auf dem Morro do Camelo, für den Sonnenuntergang.',
        'Zurück nach Lençóis, wo wir gegen 18:30 Uhr ankommen.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 580', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf der Tour.' },
        { titulo: 'In der Gruppe', preco: 'R$ 540', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
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
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Snack oder Obst', 'Handtuch', 'Bargeld für die Aktivitäten auf der Farm']],
        note: 'Der Boden der Höhlen ist das ganze Jahr feucht und rutschig — geschlossene Schuhe mit gutem Grip sind hier keine Option, auch wenn es eine leichte Tour ist.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Hin- und Rücktransport', 'Zertifizierter lokaler Guide mit Erste-Hilfe-Ausbildung', 'Eintrittsgebühren', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Mittagessen (optional)', 'Zipline und andere Aktivitäten auf der Pratinha (optional)', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq(
        'de',
        'In den Höhlen ist der Boden feucht, uneben und rutschig, und es gibt Abschnitte mit niedriger Decke — folge dem Guide und lehn dich nicht an die Tropfsteine: Ein Stalaktit braucht Tausende von Jahren zum Wachsen und bricht bei einer einzigen Berührung. Die Gruta Azul braucht die Sonne für ihren Lichteffekt; deshalb ist der Besuch auf 15:00 Uhr festgelegt.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, 700 Millionen Jahre', 'zu betreten?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
