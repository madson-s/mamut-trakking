/**
 * Conteúdo da Trilha Águas Claras de 1 dia, por idioma.
 *
 * PT vem de mamut.agency/aventuras/aguas-claras e EN de
 * mamut.agency/en/aventuras/aguas-claras-trail. ES é tradução feita aqui.
 *
 * Não confundir com `aguas-claras-content`, a versão de 2 dias que acampa nas
 * piscinas. Esta é o bate-volta (ou travessia) pela mesma região, sem pernoite,
 * entrando pela base do Morro do Pai Inácio em vez do Capão.
 *
 * ⚠️ A fonte diz "Nível de Esforço: Moderado" na faixa e "Esforço:
 * Leve/Moderado" no itinerário. Adotei Leve/Moderado, coerente com os 18 km em
 * terreno majoritariamente plano.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const AGUAS_CLARAS_1D_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/aguas-claras-1d/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/aguas-claras-1d/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras-1d/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras-1d/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['9 km até a cachoeira', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 390,
};

export const AGUAS_CLARAS_1D_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Trilha Águas Claras — 1 dia',
      description:
        'Dezoito quilômetros pelos campos gerais até a Cachoeira Águas Claras, com o Morrão de perto e as nascentes do Rio Ribeirão pelo caminho.',
      canonical: '/pt/aventuras/aguas-claras',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Trilha Águas Claras.',
      lead: 'Dezoito quilômetros de campo aberto, com serras em todo o horizonte e o Morrão de perto.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Até a cachoeira', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Trilha Águas Claras.',
      paragrafos: [
        'Uma das travessias mais especiais da Chapada Diamantina, e uma das poucas em vegetação aberta — o que aqui se chama de campos gerais, áreas que antigamente serviam à pecuária. O horizonte fica cheio de serras e morros durante todo o trajeto.',
        'É uma região de nascentes, e é dali que brota, entre outras, a do Rio Ribeirão — o mesmo que corta Lençóis. Também se vê o Morrão bem de perto, um dos principais cartões-postais do Vale do Capão; para vê-lo por inteiro é preciso fazer o passeio por uma rota alternativa.',
        'O terreno é majoritariamente plano, o que faz os 18 km serem menos duros do que o número sugere. A volta muda conforme a modalidade escolhida — bate-volta ou travessia —, mas nas duas a distância é praticamente a mesma.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída às 8h00 pela BR-242 até a base do Morro do Pai Inácio, onde fica a entrada da trilha.',
        'A caminhada começa numa antiga cabana que servia de ponto de apoio para os viajantes que passavam por ali. Dali são 9 km, cerca de 2 horas, em terreno majoritariamente plano até a Cachoeira Águas Claras — com serras e morros de formatos e tamanhos muito diversos à vista o tempo todo.',
        'Na cachoeira o guia prepara o lanche do grupo, enquanto todos aproveitam a vista das montanhas e o banho de águas cristalinas.',
        'A volta depende da modalidade escolhida: bate-volta pelo mesmo caminho ou travessia saindo por outro ponto. Nas duas opções a distância é de aproximadamente 9 km.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 450', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 390', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Câmera']],
        note: 'Campo aberto significa sol direto nos 18 km, sem sombra para se abrigar. Chapéu, protetor e água são o que mais pesa aqui.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia de montanha com treinamento APH e bilíngue', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      safetyFaq(
        'pt',
        'A trilha é plana e sem trecho técnico, mas são 18 km em campo aberto, sem sombra em quase todo o percurso. O risco real do dia é insolação e desidratação, não o terreno — leve os 1,5L de água e não conte com abrigo no meio do caminho.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para atravessar', 'os campos gerais?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Águas Claras Trail — 1 day',
      description:
        'Eighteen kilometres across open grassland to Águas Claras Waterfall, with the Morrão close up and the headwaters of the Ribeirão river along the way.',
      canonical: '/en/adventures/aguas-claras-trail-1-day',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Águas Claras Trail.',
      lead: 'Eighteen kilometres of open country, with ranges filling the horizon and the Morrão close up.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'To the waterfall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Águas Claras Trail.',
      paragrafos: [
        'One of the most special crossings in the Chapada Diamantina, and one of the few through open vegetation — what is called campos gerais here, land once used for cattle. The horizon stays full of ranges and hills for the whole route.',
        'This is headwater country, and among the springs that rise here is the one that feeds the Ribeirão river — the same one that runs through Lençóis. You also see the Morrão close up, one of the main landmarks of Vale do Capão; to see it in full you need to walk an alternative route.',
        'The ground is mostly flat, which makes the 18 km less punishing than the number suggests. The return changes with the format you choose — there and back, or a full crossing — but the distance is much the same either way.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure at 8:00 am along the BR-242 to the foot of Pai Inácio Hill, where the trailhead is.',
        'The walk starts at an old cabin that once served as a waypoint for travellers passing through. From there it is 9 km, around 2 hours, on mostly flat ground to Águas Claras Waterfall — with ranges and hills of every shape and size in view the whole time.',
        'At the waterfall the guide prepares the snack while the group takes in the mountains and swims in the clear water.',
        'The return depends on the format chosen: back the same way, or a crossing that exits at another point. Either option is around 9 km.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 450', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 390', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Camera']],
        note: 'Open country means direct sun for all 18 km, with no shade to shelter in. Hat, sunscreen and water matter most here.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Mountain guide with first-aid training, bilingual', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation'],
      },
      safetyFaq(
        'en',
        'The trail is flat and has no technical sections, but it is 18 km of open country with almost no shade. The real risk of the day is heatstroke and dehydration, not the terrain — carry the 1.5L of water and do not count on shelter along the way.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to cross', 'the open country?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Sendero Águas Claras — 1 día',
      description:
        'Dieciocho kilómetros por los campos generales hasta la Cascada Águas Claras, con el Morrão de cerca y las nacientes del Río Ribeirão en el camino.',
      canonical: '/es/aventuras/sendero-aguas-claras-1-dia',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Sendero Águas Claras.',
      lead: 'Dieciocho kilómetros de campo abierto, con sierras en todo el horizonte y el Morrão de cerca.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Hasta la cascada', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Sendero Águas Claras.',
      paragrafos: [
        'Una de las travesías más especiales de la Chapada Diamantina, y una de las pocas en vegetación abierta — lo que acá se llama campos generales, áreas que antiguamente servían a la ganadería. El horizonte queda lleno de sierras y morros durante todo el trayecto.',
        'Es una región de nacientes, y de ahí brota, entre otras, la del Río Ribeirão — el mismo que corta Lençóis. También se ve el Morrão bien de cerca, una de las principales postales del Valle do Capão; para verlo entero hay que hacer el paseo por una ruta alternativa.',
        'El terreno es mayormente plano, lo que hace que los 18 km sean menos duros de lo que el número sugiere. La vuelta cambia según la modalidad elegida — ida y vuelta o travesía —, pero en las dos la distancia es prácticamente la misma.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a las 8:00 por la BR-242 hasta la base del Morro do Pai Inácio, donde está la entrada del sendero.',
        'La caminata empieza en una antigua cabaña que servía de punto de apoyo para los viajeros que pasaban por ahí. De ahí son 9 km, cerca de 2 horas, en terreno mayormente plano hasta la Cascada Águas Claras — con sierras y morros de formas y tamaños muy diversos a la vista todo el tiempo.',
        'En la cascada el guía prepara el snack del grupo, mientras todos aprovechan la vista de las montañas y el baño de aguas cristalinas.',
        'La vuelta depende de la modalidad elegida: ida y vuelta por el mismo camino o travesía saliendo por otro punto. En las dos opciones la distancia es de aproximadamente 9 km.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 450', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 390', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Cámara']],
        note: 'Campo abierto significa sol directo en los 18 km, sin sombra donde abrigarse. Sombrero, protector y agua son lo que más pesa acá.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía de montaña con formación en primeros auxilios, bilingüe', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      safetyFaq(
        'es',
        'El sendero es plano y sin tramos técnicos, pero son 18 km en campo abierto, sin sombra en casi todo el recorrido. El riesgo real del día es la insolación y la deshidratación, no el terreno — llevá los 1,5L de agua y no cuentes con refugio en el medio del camino.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para atravesar', 'los campos generales?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Sentier d’Águas Claras — 1 jour',
      description:
        'Dix-huit kilomètres à travers les campos gerais jusqu’à la cascade d’Águas Claras, avec le Morrão tout proche et les sources de la rivière Ribeirão en chemin.',
      canonical: '/fr/aventures/sentier-aguas-claras-1-jour',
    },
    hero: {
      nivel: 'Facile / Modéré',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Sentier d’Águas Claras.',
      lead: 'Dix-huit kilomètres de grands espaces ouverts, des montagnes sur tout l’horizon et le Morrão tout proche.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Jusqu’à la cascade', 'Durée', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos du sentier d’Águas Claras.',
      paragrafos: [
        'L’une des traversées les plus singulières de la Chapada Diamantina, et l’une des rares en végétation ouverte — ce qu’on appelle ici les campos gerais, des terres qui servaient autrefois à l’élevage. L’horizon est bordé de montagnes et de collines tout au long du parcours.',
        'C’est une région de sources, et c’est là que jaillit, entre autres, celle de la rivière Ribeirão — celle-là même qui traverse Lençóis. On voit aussi de très près le Morrão, l’une des cartes postales du Vale do Capão ; pour le voir en entier, il faut faire la sortie par un itinéraire alternatif.',
        'Le terrain est majoritairement plat, ce qui rend les 18 km moins durs que le chiffre ne le laisse penser. Le retour change selon la formule choisie — aller-retour ou traversée —, mais dans les deux cas la distance est pratiquement la même.',
      ],
    },
    itinerario: {
      titulo: 'Le déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ à 8 h par la BR-242 jusqu’au pied du Morro do Pai Inácio, où se trouve l’entrée du sentier.',
        'La marche commence à une ancienne cabane qui servait de halte aux voyageurs de passage. De là, 9 km, environ 2 heures, sur un terrain majoritairement plat jusqu’à la cascade d’Águas Claras — avec, en permanence sous les yeux, des montagnes et des collines aux formes et aux tailles très variées.',
        'À la cascade, le guide prépare le casse-croûte du groupe, pendant que chacun profite de la vue sur les montagnes et d’une baignade dans les eaux cristallines.',
        'Le retour dépend de la formule choisie : aller-retour par le même chemin, ou traversée avec sortie par un autre point. Dans les deux cas, la distance est d’environ 9 km.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 450', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 390', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux compromet la sécurité du groupe et rend la participation impossible.',
        requiredColumns: [
          ['Eau (1,5 L par personne)', 'Baskets ou chaussures de randonnée', 'Chaussettes de rechange', 'Vêtements légers', 'Maillot de bain'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires'],
        ],
        recommendedColumns: [['Protection de pluie (corps et sac)', 'Bâton de marche'], ['En-cas ou fruit', 'Serviette', 'Appareil photo']],
        note: 'Terrain ouvert signifie soleil direct sur les 18 km, sans ombre où s’abriter. Chapeau, crème solaire et eau sont ce qui compte le plus ici.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Transfert aller-retour', 'Guide de montagne bilingue, formé aux premiers secours (APH)', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Pique-nique (en option)', 'Équipement personnel', 'Évacuation médicale', 'Hébergement'],
      },
      safetyFaq(
        'fr',
        'Le sentier est plat et sans passage technique, mais ce sont 18 km en terrain ouvert, sans ombre sur presque tout le parcours. Le vrai risque de la journée, c’est l’insolation et la déshydratation, pas le terrain — emportez vos 1,5 L d’eau et ne comptez pas trouver d’abri en chemin.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à traverser', 'les campos gerais ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Wandelpad Águas Claras — 1 dag',
      description:
        'Achttien kilometer door open grasland naar de Waterval Águas Claras, met de Morrão van dichtbij en onderweg de bronnen van de rivier de Ribeirão.',
      canonical: '/nl/avonturen/wandelpad-aguas-claras-1-dag',
    },
    hero: {
      nivel: 'Licht / Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Wandelpad Águas Claras.',
      lead: 'Achttien kilometer open land, met bergruggen tot aan de horizon en de Morrão van dichtbij.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Tot de waterval', 'Duur', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over het wandelpad Águas Claras.',
      paragrafos: [
        'Een van de bijzonderste tochten door de Chapada Diamantina, en een van de weinige door open vegetatie — wat hier campos gerais heet, land dat vroeger voor vee werd gebruikt. De hele route lang staat de horizon vol bergruggen en heuvels.',
        'Dit is bronnengebied, en een van de bronnen die hier ontspringen voedt de rivier de Ribeirão — dezelfde die door Lençóis stroomt. Je ziet ook de Morrão van dichtbij, een van de belangrijkste herkenningspunten van de Vale do Capão; om hem helemaal te zien moet je een alternatieve route lopen.',
        'Het terrein is overwegend vlak, waardoor de 18 km minder zwaar zijn dan het getal doet vermoeden. De terugweg hangt af van de vorm die je kiest — heen en terug, of een volledige doorsteek — maar de afstand is in beide gevallen ongeveer gelijk.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek om 8.00 uur over de BR-242 naar de voet van de Morro do Pai Inácio, waar het pad begint.',
        'De wandeling begint bij een oud huisje dat vroeger als rustpunt diende voor doortrekkende reizigers. Vandaar is het 9 km, zo’n 2 uur, over overwegend vlak terrein naar de Waterval Águas Claras — met de hele tijd bergruggen en heuvels in alle vormen en maten in zicht.',
        'Bij de waterval maakt de gids de snack klaar, terwijl de groep van de bergen geniet en zwemt in het heldere water.',
        'De terugweg hangt af van de gekozen vorm: via dezelfde weg terug, of een doorsteek die op een ander punt uitkomt. Beide opties zijn zo’n 9 km.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 450', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 390', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
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
        recommendedColumns: [['Regenkleding (voor jezelf en de rugzak)', 'Wandelstok'], ['Snack of fruit', 'Handdoek', 'Camera']],
        note: 'Open land betekent de volle 18 km directe zon, zonder schaduw om te schuilen. Hoed, zonnebrand en water zijn hier het belangrijkst.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Vervoer heen en terug', 'Tweetalige berggids met EHBO-opleiding', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Picknick (optioneel)', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting'],
      },
      safetyFaq(
        'nl',
        'Het pad is vlak en heeft geen technische stukken, maar het is 18 km open land met bijna geen schaduw. Het echte risico van de dag is een zonnesteek en uitdroging, niet het terrein — neem de 1,5 L water mee en reken niet op beschutting onderweg.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om het open land', 'over te steken?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wanderweg Águas Claras — 1 Tag',
      description:
        'Achtzehn Kilometer durch offenes Grasland zum Águas-Claras-Wasserfall, mit dem Morrão aus der Nähe und unterwegs den Quellen des Flusses Ribeirão.',
      canonical: '/de/abenteuer/wanderweg-aguas-claras-1-tag',
    },
    hero: {
      nivel: 'Leicht / Mittel',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Wanderweg Águas Claras.',
      lead: 'Achtzehn Kilometer offenes Land, mit Bergrücken bis zum Horizont und dem Morrão aus der Nähe.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Bis zum Wasserfall', 'Dauer', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über den Wanderweg Águas Claras.',
      paragrafos: [
        'Eine der besonderen Touren durch die Chapada Diamantina und eine der wenigen durch offene Vegetation — hier campos gerais genannt, Land, das früher als Weide genutzt wurde. Auf der ganzen Route ist der Horizont voller Bergrücken und Hügel.',
        'Dies ist ein Quellgebiet, und eine der Quellen, die hier entspringen, speist den Fluss Ribeirão — denselben, der durch Lençóis fließt. Du siehst auch den Morrão aus der Nähe, eines der wichtigsten Wahrzeichen des Vale do Capão; um ihn ganz zu sehen, musst du eine alternative Route gehen.',
        'Das Gelände ist überwiegend flach, wodurch die 18 km weniger anstrengend sind, als die Zahl vermuten lässt. Der Rückweg hängt vom gewählten Format ab — hin und zurück oder eine vollständige Durchquerung —, aber die Strecke ist in beiden Fällen etwa gleich.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start um 8:00 Uhr über die BR-242 zum Fuß des Morro do Pai Inácio, wo der Weg beginnt.',
        'Die Wanderung beginnt an einem alten Häuschen, das früher als Rastplatz für durchziehende Reisende diente. Von dort sind es 9 km, rund 2 Stunden, über überwiegend flaches Gelände bis zum Águas-Claras-Wasserfall — die ganze Zeit mit Bergrücken und Hügeln in allen Formen und Größen im Blick.',
        'Am Wasserfall bereitet der Guide den Snack zu, während die Gruppe die Berge genießt und im klaren Wasser badet.',
        'Der Rückweg hängt vom gewählten Format ab: auf demselben Weg zurück oder eine Durchquerung, die an einem anderen Punkt herauskommt. Beide Optionen sind rund 9 km lang.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 450', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 390', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
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
        recommendedColumns: [['Regenschutz (für dich und den Rucksack)', 'Wanderstock'], ['Snack oder Obst', 'Handtuch', 'Kamera']],
        note: 'Offenes Land heißt 18 km direkte Sonne, ohne Schatten zum Unterstellen. Hut, Sonnencreme und Wasser sind hier am wichtigsten.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Hin- und Rücktransport', 'Zweisprachiger Bergführer mit Erste-Hilfe-Ausbildung', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Picknick (optional)', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft'],
      },
      safetyFaq(
        'de',
        'Der Weg ist flach und hat keine technischen Abschnitte, aber es sind 18 km offenes Land fast ohne Schatten. Das eigentliche Risiko des Tages sind Sonnenstich und Austrocknung, nicht das Gelände — nimm die 1,5 L Wasser mit und rechne nicht mit Schutz unterwegs.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, das offene Land', 'zu durchqueren?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
