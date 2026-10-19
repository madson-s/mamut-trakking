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
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
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
  fr: {
    meta: {
      title: 'Cascade da Ferradura',
      description:
        'Une marche facile de 3 km jusqu’à une cascade saisonnière sur le Rio Mandassaia, à 4,5 km de Lençóis — hors du circuit touristique principal.',
      canonical: '/fr/aventures/cascade-da-ferradura',
    },
    hero: {
      nivel: 'Facile / Modéré',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Cascade da Ferradura.',
      lead: 'Une cascade saisonnière sur le Rio Mandassaia, à une demi-heure de Lençóis — et loin de la foule des excursions habituelles.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade da Ferradura.',
      paragrafos: [
        'L’une des sorties les plus spéciales hors du circuit touristique principal de la Chapada. Elle se trouve sur le cours du Rio Mandassaia, à quelques kilomètres de Lençóis, et pourtant il n’y a presque jamais de monde.',
        'C’est une cascade saisonnière : elle est éblouissante après de fortes pluies et peut être faible en saison sèche. Mieux vaut vérifier son état auprès de notre équipe avant de fixer la date.',
        'La marche est courte et facile — 3 km jusqu’à la cascade. Le sentier comporte des passages qui demandent de l’attention, mais avec les conseils du guide ils ne présentent pas de difficulté.',
        'Pendant les randonnées, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à partir de 8h00 du centre de Lençóis, en voiture ou à moto, et 4,5 km jusqu’à l’entrée du sentier, au village de Barro Branco.',
        'Marche de 3 km jusqu’à la cascade da Ferradura, sur le cours du Rio Mandassaia. Le sentier comporte des passages qui demandent de l’attention, toujours avec le guide pour indiquer le chemin.',
        'À la cascade, le guide prépare le pique-nique face à la chute — du temps pour se reposer, nager et profiter de la vue.',
        'Retour par le même chemin jusqu’à la sortie du sentier, où le véhicule attend pour le retour au centre-ville.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 320', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 280', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
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
        recommendedColumns: [['Imperméable (corps et sac)', 'Répulsif anti-moustiques'], ['En-cas ou fruit', 'Serviette', 'Appareil photo']],
        note: 'Un itinéraire court et proche de la ville : vous pouvez voyager léger. L’essentiel, ce sont des chaussures fermées et de l’eau.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide local bilingue formé aux premiers secours (APH)', 'Transport jusqu’à l’entrée du sentier', 'Pique-nique à la cascade', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Équipement personnel', 'Boissons supplémentaires', 'Évacuation médicale', 'Hébergement avant ou après l’excursion'],
      },
      safetyFaq(
        'fr',
        'La Ferradura est saisonnière et dépend des pluies récentes : hors de la saison des pluies, son débit peut être faible. Confirmez son état auprès de notre équipe avant de fixer la date — et sachez que le sentier devient glissant justement quand la cascade est à son apogée.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à sortir', 'des sentiers battus ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Ferradura',
      description:
        'Een makkelijke wandeling van 3 km naar een seizoenswaterval in de rivier de Mandassaia, op 4,5 km van Lençóis — buiten de gebaande toeristenroute.',
      canonical: '/nl/avonturen/waterval-ferradura',
    },
    hero: {
      nivel: 'Licht / Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Waterval Ferradura.',
      lead: 'Een seizoenswaterval in de rivier de Mandassaia, een halfuur van Lençóis — en ver weg van de gebruikelijke drukte.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Ferradura.',
      paragrafos: [
        'Een van de bijzonderste tochten buiten de gebaande toeristenroute in de Chapada. Hij ligt in de loop van de rivier de Mandassaia, een paar kilometer van Lençóis, en toch is het er bijna nooit druk.',
        'Het is een seizoenswaterval: prachtig na flinke regen, en in het droge seizoen kan er weinig water zijn. Check de actuele situatie even bij ons voordat je een datum vastlegt.',
        'De wandeling is kort en makkelijk — 3 km tot de waterval. Het pad heeft een paar stukken die aandacht vragen, maar met de gids die de weg wijst zijn die geen probleem.',
        'Tijdens onze tochten is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek vanaf 8.00 uur uit het centrum van Lençóis, met de auto of de motor, en 4,5 km naar het begin van het pad in Vila do Barro Branco.',
        'Een wandeling van 3 km naar de Waterval Ferradura, in de loop van de rivier de Mandassaia. Het pad heeft stukken die aandacht vragen, altijd met de gids die de weg wijst.',
        'Bij de waterval zet de gids de picknick klaar met uitzicht op de val — tijd om uit te rusten, te zwemmen en van het uitzicht te genieten.',
        'Terug via dezelfde route naar het begin van het pad, waar het vervoer klaarstaat om terug te gaan naar het centrum.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 320', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 280', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Insectenwerend middel'], ['Snack of fruit', 'Handdoek', 'Camera']],
        note: 'Een korte tocht vlak bij het stadje: je kunt licht reizen. Dichte schoenen en water zijn het belangrijkst.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige lokale gids met EHBO-opleiding', 'Vervoer naar het begin van het pad', 'Picknick bij de waterval', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Persoonlijke uitrusting', 'Extra drankjes', 'Medische evacuatie', 'Overnachting voor of na de tour'],
      },
      safetyFaq(
        'nl',
        'De Ferradura is een seizoenswaterval en hangt af van recente regen: buiten het regenseizoen kan er weinig water zijn. Check de actuele situatie bij ons voordat je een datum vastlegt — en houd er rekening mee dat het pad juist het gladst is wanneer de waterval op zijn mooist is.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om van de', 'gebaande route af te gaan?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Ferradura',
      description:
        'Eine leichte Wanderung von 3 km zu einem saisonalen Wasserfall im Fluss Mandassaia, 4,5 km von Lençóis — abseits der ausgetretenen Touristenpfade.',
      canonical: '/de/abenteuer/wasserfall-ferradura',
    },
    hero: {
      nivel: 'Leicht / Mittel',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Wasserfall Ferradura.',
      lead: 'Ein saisonaler Wasserfall im Fluss Mandassaia, eine halbe Stunde von Lençóis — und weit weg vom üblichen Trubel.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Ferradura-Wasserfall.',
      paragrafos: [
        'Eine der besonderen Touren abseits der ausgetretenen Touristenpfade der Chapada. Er liegt im Lauf des Flusses Mandassaia, ein paar Kilometer von Lençóis entfernt, und trotzdem ist es dort fast nie voll.',
        'Es ist ein saisonaler Wasserfall: wunderschön nach kräftigem Regen, in der Trockenzeit kann wenig Wasser fließen. Frag uns kurz nach der aktuellen Lage, bevor du ein Datum festlegst.',
        'Die Wanderung ist kurz und leicht — 3 km bis zum Wasserfall. Der Weg hat ein paar Abschnitte, die Aufmerksamkeit verlangen, aber mit dem Guide, der den Weg zeigt, sind sie kein Problem.',
        'Auf unseren Touren ist das Picknick das Mittagessen: ausgewogene Mahlzeiten mit Vitaminen, Eiweiß, Ballaststoffen und Kohlenhydraten.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start ab 8:00 Uhr im Zentrum von Lençóis, mit dem Auto oder dem Motorrad, und 4,5 km bis zum Beginn des Weges in Vila do Barro Branco.',
        'Eine Wanderung von 3 km zum Ferradura-Wasserfall, im Lauf des Flusses Mandassaia. Der Weg hat Abschnitte, die Aufmerksamkeit verlangen, immer mit dem Guide, der den Weg zeigt.',
        'Am Wasserfall richtet der Guide das Picknick mit Blick auf den Fall an — Zeit zum Ausruhen, Baden und Genießen der Aussicht.',
        'Auf demselben Weg zurück zum Beginn des Weges, wo der Transport für die Rückfahrt ins Zentrum bereitsteht.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 320', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 280', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
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
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Insektenschutz'], ['Snack oder Obst', 'Handtuch', 'Kamera']],
        note: 'Eine kurze Tour ganz in der Nähe des Städtchens: Du kannst mit leichtem Gepäck reisen. Geschlossene Schuhe und Wasser sind am wichtigsten.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger lokaler Guide mit Erste-Hilfe-Ausbildung', 'Transport zum Beginn des Weges', 'Picknick am Wasserfall', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Persönliche Ausrüstung', 'Zusätzliche Getränke', 'Medizinische Evakuierung', 'Unterkunft vor oder nach der Tour'],
      },
      safetyFaq(
        'de',
        'Der Ferradura ist ein saisonaler Wasserfall und hängt vom Regen der letzten Zeit ab: Außerhalb der Regenzeit kann wenig Wasser fließen. Frag uns nach der aktuellen Lage, bevor du ein Datum festlegst — und denk daran, dass der Weg gerade dann am rutschigsten ist, wenn der Wasserfall am schönsten ist.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, die ausgetretenen', 'Pfade zu verlassen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
