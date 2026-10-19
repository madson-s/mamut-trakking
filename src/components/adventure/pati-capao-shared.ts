/**
 * O que as travessias do Vale do Pati via Capão (4 e 5 dias) dizem igual.
 *
 * As duas percorrem a mesma rota — Palmeiras, Aleixos, Cachoeirão, Castelo,
 * Rampa, Gerais do Vieira — e só diferem no número de dias, na distância e no
 * preço. Manter dois blocos idênticos de "sobre", checklist e sazonalidade
 * garantiria que um dia divergissem por descuido.
 *
 * Fonte: mamut.agency/aventuras/vale-do-pati-{4,5}-dias{-,-via-}capao e as
 * versões inglesas. ES, FR e NL são tradução feita aqui.
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
  fr: [
    'L’un des plus beaux treks du monde, au cœur de l’État de Bahia. La vallée du Pati se situe autour de 1 000 mètres d’altitude, avec une riche variété de transitions entre vestiges de forêt atlantique, champs rupestres — le cerrado d’altitude — et prairies ouvertes.',
    'La région a abrité des paysans il y a environ 200 ans et compte aujourd’hui 14 maisons encore debout, qui servent d’hébergement aux visiteurs. C’est là que vous dormez : chez des habitants de la vallée, en chambre partagée ou privée (prévenez-nous à l’avance si vous avez besoin d’une chambre privée).',
    'C’est un trek polyvalent, accessible à des personnes de tout âge selon l’itinéraire choisi. Nous proposons des séjours de 1 à 7 jours dans le Pati — si aucun ne correspond à votre séjour, contactez-nous.',
    'Le petit-déjeuner et le dîner sont préparés dans les hébergements et le menu change chaque jour. Pendant les marches, le pique-nique tient lieu de déjeuner : des repas équilibrés entre vitamines, protéines, fibres et glucides.',
  ],
  nl: [
    'Een van de mooiste trektochten ter wereld, in het midden van Bahia. De Vale do Pati ligt rond de 1.000 meter hoogte, met een rijke afwisseling van restanten van Atlantisch regenwoud, rotsvelden — de cerrado op grote hoogte — en open grasland.',
    'De streek was zo’n 200 jaar geleden de thuis van keuterboeren en telt nu nog 14 huizen, die als onderkomen voor bezoekers dienen. Daar slaap je: in de huizen van bewoners van het dal, in een gedeelde of eigen kamer (laat het ons van tevoren weten als je een eigen kamer nodig hebt).',
    'Het is een veelzijdige trektocht die mensen van elke leeftijd kunnen doen, afhankelijk van de gekozen route. We organiseren tochten van 1 tot 7 dagen in de Pati — past geen ervan bij je verblijf, praat dan met ons.',
    'Ontbijt en avondeten worden bereid in de onderkomens en het menu verandert elke dag. Tijdens de wandelingen is de picknick de lunch: uitgebalanceerde maaltijden met vitamines, eiwitten, vezels en koolhydraten.',
  ],
  de: [
    'Eine der schönsten Trekkingtouren der Welt, in der Mitte Bahias. Das Vale do Pati liegt auf rund 1.000 Metern Höhe und bietet eine reiche Abfolge von Übergängen zwischen Resten des Atlantischen Regenwalds, Felsfeldern — dem Cerrado der Höhenlagen — und offenem Grasland.',
    'Vor rund 200 Jahren lebten hier Kleinbauern; heute stehen noch 14 Häuser, die als Unterkunft für Besucher dienen. Dort schläfst du: in den Häusern von Einheimischen des Tals, in Gemeinschafts- oder Einzelzimmern (sag uns rechtzeitig Bescheid, wenn du ein Einzelzimmer brauchst).',
    'Es ist eine vielseitige Tour, die je nach Route Menschen jeden Alters machen können. Wir bieten Touren von 1 bis 7 Tagen im Pati an — wenn keine davon zu deinem Aufenthalt passt, sprich mit uns.',
    'Frühstück und Abendessen werden in den Unterkünften zubereitet, und das Menü wechselt täglich. Auf den Wanderungen ist das Picknick das Mittagessen: ausgewogene Mahlzeiten mit Vitaminen, Eiweiß, Ballaststoffen und Kohlenhydraten.',
  ],
};

/** Aviso do itinerário — as duas páginas trazem a mesma ressalva. */
export const PATI_CAPAO_AVISO: Record<Locale, string> = {
  pt: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é muito dinâmico e pode ser feito de várias maneiras, com diversas entradas e saídas — consulte todas as opções com o atendimento.',
  en: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is highly dynamic and can be walked in several ways, with different entry and exit points — ask us about all the options.',
  es: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es muy dinámico y se puede hacer de varias maneras, con diversas entradas y salidas — consultá todas las opciones con atención.',
  fr: 'L’itinéraire peut changer en raison des conditions météorologiques ou de tout autre cas de force majeure que l’équipe juge pertinent. Ce trek est très modulable et peut se faire de plusieurs façons, avec différents points d’entrée et de sortie — renseignez-vous auprès de notre équipe sur toutes les options.',
  nl: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt. Deze trektocht is heel flexibel en kan op verschillende manieren worden gelopen, met verschillende in- en uitstappunten — vraag ons naar alle mogelijkheden.',
  de: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält. Diese Tour ist sehr flexibel und lässt sich auf verschiedene Arten gehen, mit unterschiedlichen Ein- und Ausstiegspunkten — frag uns nach allen Möglichkeiten.',
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
  fr: [
    {
      type: 'checklist',
      title: 'Checklist — quoi emporter',
      intro: 'Les articles marqués * sont obligatoires. L’absence de l’un d’eux rend la participation impossible. Les articles sont vérifiés à la réservation et au check-in.',
      requiredColumns: [
        ['Eau (1,5 L par personne)', 'Baskets ou chaussures de randonnée', 'Vêtements légers de marche', 'Vêtements de nuit', 'Maillot de bain', 'Sac à dos de portage 50 L+'],
        ['Protection de pluie (corps et sac)', 'Crème solaire', 'Médicaments personnels', 'Trousse de toilette', 'Pièce d’identité', 'Lampe frontale et petit sac de journée'],
      ],
      recommendedColumns: [['Chaussettes de rechange', 'Serviette à séchage rapide'], ['Bâton de marche', 'Batterie externe', 'En-cas ou fruit']],
      note: 'Si vous préférez ne pas porter de charge, un porteur personnel est possible — le sac à dos de portage reste obligatoire pour les jours où le groupe change d’hébergement.',
    },
    {
      type: 'included',
      title: 'Ce qui est inclus / non inclus',
      included: ['Guide de montagne agréé formé aux premiers secours (APH)', 'Hébergement dans les maisons de la vallée du Pati', 'Transferts Palmeiras › Pati › Capão › Lençóis (certains en transport alternatif ou interurbain)', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après la randonnée'],
      excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Boissons supplémentaires à l’épicerie de l’hébergement', 'Équipement personnel', 'Évacuation médicale'],
    },
    {
      type: 'seasons',
      title: 'Quand visiter la vallée du Pati',
      facts: [
        ['Été et automne (janv.–mai)', 'Cascades pleines, plus de boue sur les sentiers'],
        ['Hiver et printemps (juin–déc.)', 'Terrain plus ferme, moins de débit d’eau'],
        ['Altitude de la vallée', 'Environ 1 000 m'],
      ],
      notes: [
        'Il n’y a pas de meilleure saison absolue — tout dépend de ce que vous voulez voir.',
        'Il fait frais la nuit toute l’année : les vêtements de nuit figurent dans la checklist même en été.',
      ],
    },
  ],
  nl: [
    {
      type: 'checklist',
      title: 'Checklist — wat neem je mee',
      intro: 'Items met een * zijn verplicht. Ontbreekt er één, dan kun je niet deelnemen. De spullen worden gecontroleerd bij de boeking en bij de check-in.',
      requiredColumns: [
        ['Water (1,5 L per persoon)', 'Sportschoenen of wandelschoenen', 'Lichte wandelkleding', 'Nachtkleding', 'Zwemkleding', 'Trekkingrugzak van 50 L+'],
        ['Regenkleding (voor jezelf en de rugzak)', 'Zonnebrand', 'Persoonlijke medicijnen', 'Toiletspullen', 'Identiteitsbewijs met foto', 'Hoofdlamp en dagrugzak'],
      ],
      recommendedColumns: [['Extra sokken', 'Sneldrogende handdoek'], ['Wandelstok', 'Powerbank', 'Snack of fruit']],
      note: 'Wil je liever geen gewicht dragen, dan kan er een persoonlijke drager mee — de trekkingrugzak blijft verplicht voor de dagen waarop de groep van onderkomen wisselt.',
    },
    {
      type: 'included',
      title: 'Wat is inbegrepen / niet inbegrepen',
      included: ['Erkende berggids met EHBO-opleiding', 'Overnachting in de huizen van de Vale do Pati', 'Transfers Palmeiras › Pati › Capão › Lençóis (deels met alternatief of intercityvervoer)', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na het pad'],
      excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Extra drankjes in het winkeltje van het onderkomen', 'Persoonlijke uitrusting', 'Medische evacuatie'],
    },
    {
      type: 'seasons',
      title: 'Wanneer ga je naar de Vale do Pati',
      facts: [
        ['Zomer en herfst (jan–mei)', 'Volle watervallen, meer modder op de paden'],
        ['Winter en lente (jun–dec)', 'Steviger terrein, minder water in de watervallen'],
        ['Hoogte van het dal', 'Rond de 1.000 m'],
      ],
      notes: [
        'Er is niet één beste seizoen — het hangt af van wat je wilt zien.',
        'Het hele jaar door wordt het ’s nachts koud: nachtkleding staat ook in de zomer op de checklist.',
      ],
    },
  ],
  de: [
    {
      type: 'checklist',
      title: 'Checkliste — was du mitnimmst',
      intro: 'Mit * markierte Gegenstände sind Pflicht. Fehlt einer davon, ist eine Teilnahme nicht möglich. Die Gegenstände werden bei der Buchung und beim Check-in geprüft.',
      requiredColumns: [
        ['Wasser (1,5 L pro Person)', 'Turnschuhe oder Wanderschuhe', 'Leichte Wanderkleidung', 'Schlafkleidung', 'Badesachen', 'Trekkingrucksack ab 50 L'],
        ['Regenschutz (für dich und den Rucksack)', 'Sonnencreme', 'Persönliche Medikamente', 'Hygieneartikel', 'Lichtbildausweis', 'Stirnlampe und Tagesrucksack'],
      ],
      recommendedColumns: [['Ersatzsocken', 'Schnelltrocknendes Handtuch'], ['Wanderstock', 'Powerbank', 'Snack oder Obst']],
      note: 'Wenn du lieber kein Gewicht tragen möchtest, kann ein persönlicher Träger mitkommen — der Trekkingrucksack bleibt Pflicht für die Tage, an denen die Gruppe die Unterkunft wechselt.',
    },
    {
      type: 'included',
      title: 'Was inklusive ist / was nicht',
      included: ['Zertifizierter Bergführer mit Erste-Hilfe-Ausbildung', 'Übernachtung in den Häusern des Vale do Pati', 'Transfers Palmeiras › Pati › Capão › Lençóis (teils mit alternativem oder Überlandverkehr)', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Warteraum, sichere Gepäckaufbewahrung und Dusche vor/nach der Wanderung'],
      excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Unterkunft vor oder nach der Tour', 'Zusätzliche Getränke im Laden der Unterkunft', 'Persönliche Ausrüstung', 'Medizinische Evakuierung'],
    },
    {
      type: 'seasons',
      title: 'Wann du ins Vale do Pati fährst',
      facts: [
        ['Sommer und Herbst (Jan.–Mai)', 'Volle Wasserfälle, mehr Schlamm auf den Wegen'],
        ['Winter und Frühling (Juni–Dez.)', 'Festerer Boden, weniger Wasser'],
        ['Höhe des Tals', 'Rund 1.000 m'],
      ],
      notes: [
        'Die eine beste Jahreszeit gibt es nicht — es hängt davon ab, was du sehen möchtest.',
        'Nachts wird es das ganze Jahr über kalt: Schlafkleidung steht auch im Sommer auf der Checkliste.',
      ],
    },
  ],
};
