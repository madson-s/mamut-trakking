/**
 * Conteúdo da Fazenda Pratinha & Gruta Azul, por idioma.
 *
 * PT vem de mamut.agency/aventuras/fazenda-pratinha e EN de
 * mamut.agency/en/aventuras/pratinha-farm. ES é tradução feita aqui.
 *
 * O passeio mais leve do catálogo: 100 metros a pé em 156 km de carro. O dia
 * inteiro é de água, e as atividades opcionais da fazenda — flutuação, caiaque,
 * tirolesa, cavalo — são o que realmente preenche o tempo, então elas aparecem
 * no corpo e no "não incluso", não só de passagem.
 *
 * O roteiro [Grutas + Morro do Camelo] inclui esta fazenda e soma a Gruta da
 * Fumaça e o mirante do Camelo. A operadora vende os dois separados.
 *
 * FR é tradução feita neste repositório (a operadora não tem versão em
 * francês) e precisa de revisão antes de valer como material de venda.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { pricing } from './price-table';

export const PRATINHA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/pratinha/hero.jpeg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/pratinha/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pratinha/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pratinha/3.jpeg', width: 2365, height: 1330 },
  ],
  stats: [
    ['100 m', '/svg/_icons/icon_03_montain.svg'],
    ['156 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h às 9h', '/svg/_icons/icon_11_calendar.svg'],
    ['~18h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 800, 450],
    ['2', 520, 450],
    ['3', 480, 410],
    ['4+', 410, 379],
  ]),
};

export const PRATINHA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Um dia inteiro de água cristalina em Iraquara: o Rio Pratinha, a Gruta da Pratinha e a Gruta Azul, com flutuação, caiaque e tirolesa opcionais.',
      canonical: '/pt/aventuras/fazenda-pratinha',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Fazenda Pratinha.',
      lead: 'Cem metros a pé e o dia inteiro na água — o oásis que aparece no meio do sertão.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Duração', 'Horário de saída', 'Retorno previsto', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Fazenda Pratinha.',
      paragrafos: [
        'Em Iraquara, a Fazenda Pratinha atrai gente do mundo inteiro para ver de perto as águas cristalinas que surgem no sertão baiano como um oásis. É uma área privada onde ficam a Gruta Azul, a Gruta da Pratinha e o rio que leva o nome da fazenda.',
        'É o passeio mais leve que operamos — 100 metros de caminhada no total —, mas preenche o dia inteiro: saímos a partir das 8h00 e voltamos por volta das 18h00, o que dá tempo de sobra para o banho e para as atividades da fazenda.',
        'As atividades adicionais são o que realmente enche o dia: flutuação com snorkel, pé de pato, lanterna e colete; caiaque; passeio de cavalo; tirolesa; foto subaquática. Nenhuma está inclusa no valor — são pagas na fazenda e vale confirmar com o atendimento o que está disponível na sua data.',
        'O banho na Pratinha é raso e agradável, especialmente em dias de tempo aberto. O almoço é na própria fazenda, que tem vários pontos servindo de refeição completa a petiscos, sobremesas, café e sorvete.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis entre 8h00 e 9h00. São cerca de 1 hora de carro, 65 km — 60 de asfalto pela BR-242 e 5 de estrada irregular pela zona rural de Iraquara.',
        'Chegada à Fazenda Pratinha, a área privada onde ficam a Gruta Azul, a Gruta da Pratinha e o rio. O tempo ali é livre entre o banho, as paisagens na beira do rio e ao redor das grutas, e as atividades opcionais.',
        'O almoço é na própria fazenda — há vários pontos com opções que vão de refeição completa a petiscos, sobremesas, cafés e sorvetes.',
        'A volta é por um caminho diferente: 30 minutos pela zona rural de Iraquara até a BR-242, com vista para as montanhas e os vales distantes. Retorno a Lençóis previsto por volta das 18h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 520', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 379', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'É um passeio leve, então a lista é curta. Itens marcados com * são obrigatórios.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Roupa de banho', 'Boné ou chapéu', 'Protetor solar'],
          ['Remédios pessoais', 'Documento de identificação', 'Toalha', 'Chinelos'],
        ],
        recommendedColumns: [['Câmera ou saco estanque', 'Muda de roupa seca'], ['Dinheiro para o almoço e as atividades opcionais']],
        note: 'As atividades da fazenda são pagas no local — leve meio de pagamento se pretende fazer flutuação, caiaque ou tirolesa.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local', 'Taxas de acesso', 'Seguro aventura'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Flutuação, caiaque, tirolesa, cavalo e foto subaquática (pagos na fazenda)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      safetyFaq(
        'pt',
        'O local não oferece risco iminente nem exige técnica, mas há duas coisas a observar: as áreas molhadas em volta das grutas ficam escorregadias, e há animais soltos pela fazenda — evite contato. O banho na Pratinha é raso; nas grutas, siga a orientação da equipe local.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para um dia', 'de água cristalina?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Pratinha Farm & Blue Cave',
      description:
        'A full day of clear water in Iraquara: the Pratinha river, Pratinha Cave and the Blue Cave, with optional snorkelling, kayaking and zip-lining.',
      canonical: '/en/adventures/pratinha-farm-blue-cave',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Pratinha Farm.',
      lead: 'A hundred metres on foot and the whole day in the water — the oasis that appears in the middle of the backlands.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Duration', 'Departure window', 'Expected return', 'Difficulty'],
    sobre: {
      titulo: 'About Pratinha Farm.',
      paragrafos: [
        'In Iraquara, Pratinha Farm draws people from all over the world to see up close the clear water that rises in the Bahian backlands like an oasis. It is a private property holding the Blue Cave, Pratinha Cave and the river the farm is named after.',
        'It is the lightest trip we run — 100 metres of walking in total — but it fills the whole day: we leave from 8:00 am and get back around 6:00 pm, which leaves plenty of time for swimming and for the activities on site.',
        'The extra activities are what really fill the day: snorkelling with fins, torch and life jacket; kayaking; horse riding; zip-lining; underwater photography. None of them is included in the price — they are paid at the farm, and it is worth checking with us what is available on your date.',
        'The swimming at the Pratinha is shallow and pleasant, especially on clear days. Lunch is at the farm itself, which has several outlets serving anything from a full meal to snacks, desserts, coffee and ice cream.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis between 8:00 and 9:00 am. It is about an hour by car, 65 km — 60 of them paved on the BR-242 and 5 of rough road through the countryside of Iraquara.',
        'Arrival at Pratinha Farm, the private property holding the Blue Cave, Pratinha Cave and the river. Time there is your own, between swimming, the scenery along the river and around the caves, and the optional activities.',
        'Lunch is at the farm — several outlets offer anything from a full meal to snacks, desserts, coffee and ice cream.',
        'The return is by a different road: 30 minutes through the countryside of Iraquara to the BR-242, with views of distant mountains and valleys. Back in Lençóis around 6:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 520', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 379', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'This is a light trip, so the list is short. Items marked * are mandatory.',
        requiredColumns: [
          ['Water (1.5L per person)', 'Swimwear', 'Cap or hat', 'Sunscreen'],
          ['Personal medication', 'Photo ID', 'Towel', 'Flip-flops'],
        ],
        recommendedColumns: [['Camera or dry bag', 'Dry change of clothes'], ['Cash for lunch and the optional activities']],
        note: 'The farm activities are paid on site — bring a means of payment if you plan to snorkel, kayak or zip-line.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Local guide', 'Access fees', 'Adventure insurance'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Snorkelling, kayaking, zip-line, horse riding and underwater photos (paid at the farm)', 'Personal gear', 'Medical evacuation', 'Accommodation'],
      },
      safetyFaq(
        'en',
        'The site poses no imminent risk and needs no technique, but two things are worth watching: the wet areas around the caves get slippery, and there are animals roaming the farm — avoid contact. Swimming at the Pratinha is shallow; in the caves, follow the local team’s instructions.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for a day', 'of clear water?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Un día entero de agua cristalina en Iraquara: el Río Pratinha, la Gruta da Pratinha y la Gruta Azul, con flotación, kayak y tirolesa opcionales.',
      canonical: '/es/aventuras/fazenda-pratinha',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Fazenda Pratinha.',
      lead: 'Cien metros a pie y el día entero en el agua — el oasis que aparece en medio del sertão.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Duración', 'Horario de salida', 'Regreso previsto', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Fazenda Pratinha.',
      paragrafos: [
        'En Iraquara, la Fazenda Pratinha atrae gente de todo el mundo para ver de cerca las aguas cristalinas que surgen en el sertão bahiano como un oasis. Es un área privada donde están la Gruta Azul, la Gruta da Pratinha y el río que lleva el nombre de la fazenda.',
        'Es el paseo más suave que operamos — 100 metros de caminata en total —, pero llena el día entero: salimos a partir de las 8:00 y volvemos cerca de las 18:00, lo que da tiempo de sobra para el baño y para las actividades de la fazenda.',
        'Las actividades adicionales son lo que realmente llena el día: flotación con snorkel, patas de rana, linterna y chaleco; kayak; paseo a caballo; tirolesa; foto subacuática. Ninguna está incluida en el valor — se pagan en la fazenda, y conviene confirmar con atención qué está disponible en tu fecha.',
        'El baño en la Pratinha es bajo y agradable, especialmente en días despejados. El almuerzo es en la propia fazenda, que tiene varios puntos sirviendo desde comida completa hasta picadas, postres, café y helado.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis entre las 8:00 y las 9:00. Es cerca de 1 hora de auto, 65 km — 60 de asfalto por la BR-242 y 5 de camino irregular por la zona rural de Iraquara.',
        'Llegada a la Fazenda Pratinha, el área privada donde están la Gruta Azul, la Gruta da Pratinha y el río. El tiempo ahí es libre entre el baño, los paisajes a la orilla del río y alrededor de las grutas, y las actividades opcionales.',
        'El almuerzo es en la propia fazenda — hay varios puntos con opciones que van de comida completa a picadas, postres, cafés y helados.',
        'La vuelta es por un camino diferente: 30 minutos por la zona rural de Iraquara hasta la BR-242, con vista a las montañas y los valles distantes. Regreso a Lençóis previsto cerca de las 18:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 520', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 379', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Es un paseo suave, así que la lista es corta. Los ítems marcados con * son obligatorios.',
        requiredColumns: [
          ['Agua (1,5L por persona)', 'Ropa de baño', 'Gorra o sombrero', 'Protector solar'],
          ['Medicamentos personales', 'Documento de identidad', 'Toalla', 'Ojotas'],
        ],
        recommendedColumns: [['Cámara o bolsa estanca', 'Muda de ropa seca'], ['Efectivo para el almuerzo y las actividades opcionales']],
        note: 'Las actividades de la fazenda se pagan en el lugar — llevá medio de pago si pensás hacer flotación, kayak o tirolesa.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local', 'Tasas de acceso', 'Seguro de aventura'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Flotación, kayak, tirolesa, caballo y foto subacuática (se pagan en la fazenda)', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      safetyFaq(
        'es',
        'El lugar no ofrece riesgo inminente ni exige técnica, pero hay dos cosas a observar: las áreas mojadas alrededor de las grutas quedan resbaladizas, y hay animales sueltos por la fazenda — evitá el contacto. El baño en la Pratinha es bajo; en las grutas, seguí la orientación del equipo local.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para un día', 'de agua cristalina?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Une journée entière d’eaux cristallines à Iraquara : le Rio Pratinha, la Gruta da Pratinha et la Gruta Azul, avec snorkeling, kayak et tyrolienne en option.',
      canonical: '/fr/aventures/fazenda-pratinha',
    },
    hero: {
      nivel: 'Facile',
      origem: 'Départ : Lençóis',
      duracao: '1 jour',
      titulo: 'Fazenda Pratinha.',
      lead: 'Cent mètres à pied et toute la journée dans l’eau — l’oasis qui surgit au milieu du sertão.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Trajet en voiture', 'Durée', 'Horaire de départ', 'Retour prévu', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la Fazenda Pratinha.',
      paragrafos: [
        'À Iraquara, la Fazenda Pratinha attire des visiteurs du monde entier venus voir de près les eaux cristallines qui surgissent comme une oasis dans le sertão de Bahia. C’est un domaine privé qui abrite la Gruta Azul, la Gruta da Pratinha et la rivière qui donne son nom à la fazenda.',
        'C’est l’excursion la plus facile que nous proposons — 100 mètres de marche au total —, mais elle occupe toute la journée : départ à partir de 8h00 et retour vers 18h00, ce qui laisse largement le temps de se baigner et de profiter des activités de la fazenda.',
        'Ce sont les activités supplémentaires qui remplissent vraiment la journée : snorkeling avec masque, palmes, lampe et gilet ; kayak ; balade à cheval ; tyrolienne ; photo sous-marine. Aucune n’est comprise dans le prix — elles se paient sur place, et mieux vaut vérifier auprès de notre équipe ce qui est disponible à votre date.',
        'La baignade dans la Pratinha est peu profonde et agréable, surtout par beau temps. Le déjeuner se prend sur place, la fazenda comptant plusieurs points de restauration, du repas complet aux en-cas, desserts, café et glaces.',
      ],
    },
    itinerario: {
      titulo: 'Déroulé de la journée.',
      aviso: 'L’itinéraire peut changer en raison des conditions météo ou de tout cas de force majeure que l’équipe juge pertinent.',
      corpo: [
        'Départ de Lençóis entre 8h00 et 9h00. Environ 1 heure de voiture, 65 km — 60 km d’asphalte par la BR-242 et 5 km de route irrégulière dans la campagne d’Iraquara.',
        'Arrivée à la Fazenda Pratinha, le domaine privé qui abrite la Gruta Azul, la Gruta da Pratinha et la rivière. Le temps sur place est libre, entre baignade, paysages au bord de la rivière et autour des grottes, et activités en option.',
        'Le déjeuner se prend sur place — plusieurs points proposent des options allant du repas complet aux en-cas, desserts, cafés et glaces.',
        'Le retour se fait par un autre chemin : 30 minutes à travers la campagne d’Iraquara jusqu’à la BR-242, avec vue sur les montagnes et les vallées lointaines. Retour à Lençóis prévu vers 18h00.',
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Formule privée', preco: 'R$ 520', nota: 'Minimum 2 personnes. Seul votre groupe pendant l’excursion.' },
        { titulo: 'En groupe', preco: 'R$ 379', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — quoi emporter',
        intro: 'C’est une excursion facile, donc la liste est courte. Les éléments marqués d’un * sont obligatoires.',
        requiredColumns: [
          ['Eau (1,5 L par personne)', 'Maillot de bain', 'Casquette ou chapeau', 'Crème solaire'],
          ['Médicaments personnels', 'Pièce d’identité', 'Serviette', 'Tongs'],
        ],
        recommendedColumns: [['Appareil photo ou sac étanche', 'Vêtements secs de rechange'], ['De l’argent pour le déjeuner et les activités en option']],
        note: 'Les activités de la fazenda se paient sur place — prévoyez un moyen de paiement si vous comptez faire du snorkeling, du kayak ou de la tyrolienne.',
      },
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Transfert aller-retour', 'Guide local', 'Droits d’accès', 'Assurance aventure'],
        excluded: ['Tout ce qui n’est pas listé', 'Déjeuner (en option)', 'Snorkeling, kayak, tyrolienne, cheval et photo sous-marine (payés sur place)', 'Équipement personnel', 'Évacuation médicale', 'Hébergement'],
      },
      safetyFaq(
        'fr',
        'Le site ne présente pas de danger immédiat et n’exige aucune technique, mais deux points méritent attention : les zones mouillées autour des grottes sont glissantes, et des animaux circulent librement dans la fazenda — évitez tout contact. La baignade dans la Pratinha est peu profonde ; dans les grottes, suivez les consignes de l’équipe locale.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt pour une journée', 'd’eaux cristallines ?'],
      corpo: 'Dites-nous combien vous êtes et les dates envisagées, et nous organisons la sortie avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Een hele dag helder water in Iraquara: de rivier de Pratinha, de Gruta da Pratinha en de Gruta Azul, met optioneel snorkelen, kajakken en ziplinen.',
      canonical: '/nl/avonturen/fazenda-pratinha',
    },
    hero: {
      nivel: 'Licht',
      origem: 'Vertrek: Lençóis',
      duracao: '1 dag',
      titulo: 'Fazenda Pratinha.',
      lead: 'Honderd meter lopen en de hele dag in het water — de oase die midden in het binnenland opduikt.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Met de auto', 'Duur', 'Vertrektijd', 'Verwachte terugkeer', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Fazenda Pratinha.',
      paragrafos: [
        'In Iraquara trekt de Fazenda Pratinha mensen van over de hele wereld, die van dichtbij het heldere water willen zien dat als een oase opborrelt in het binnenland van Bahia. Het is een particulier terrein met de Gruta Azul, de Gruta da Pratinha en de rivier waaraan de boerderij haar naam dankt.',
        'Het is de lichtste tocht die we organiseren — in totaal 100 meter lopen — maar hij vult de hele dag: we vertrekken vanaf 8.00 uur en zijn rond 18.00 uur terug, zodat er volop tijd is om te zwemmen en voor de activiteiten ter plekke.',
        'De extra activiteiten vullen de dag pas echt: snorkelen met vinnen, zaklamp en zwemvest; kajakken; paardrijden; ziplinen; onderwaterfotografie. Geen ervan zit in de prijs — je betaalt ze op de boerderij, en het is handig om bij ons te checken wat er op jouw datum beschikbaar is.',
        'Zwemmen in de Pratinha is ondiep en aangenaam, vooral op heldere dagen. De lunch is op de boerderij zelf, met verschillende plekken waar je van een volledige maaltijd tot snacks, desserts, koffie en ijs kunt krijgen.',
      ],
    },
    itinerario: {
      titulo: 'Zo verloopt de dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt.',
      corpo: [
        'Vertrek uit Lençóis tussen 8.00 en 9.00 uur. Het is zo’n uur met de auto, 65 km — waarvan 60 asfalt over de BR-242 en 5 onverharde weg door het binnenland van Iraquara.',
        'Aankomst bij de Fazenda Pratinha, het particuliere terrein met de Gruta Azul, de Gruta da Pratinha en de rivier. De tijd daar is van jou, tussen zwemmen, het landschap langs de rivier en rond de grotten, en de optionele activiteiten.',
        'De lunch is op de boerderij — verschillende plekken bieden van een volledige maaltijd tot snacks, desserts, koffie en ijs.',
        'De terugweg gaat over een andere weg: 30 minuten door het binnenland van Iraquara naar de BR-242, met uitzicht op verre bergen en dalen. Rond 18.00 uur terug in Lençóis.',
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 520', nota: 'Minimaal 2 personen. Alleen jouw groep op de tocht.' },
        { titulo: 'In een groep', preco: 'R$ 379', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — wat neem je mee',
        intro: 'Dit is een lichte tocht, dus de lijst is kort. Items met een * zijn verplicht.',
        requiredColumns: [
          ['Water (1,5 L per persoon)', 'Zwemkleding', 'Pet of hoed', 'Zonnebrand'],
          ['Persoonlijke medicijnen', 'Identiteitsbewijs met foto', 'Handdoek', 'Slippers'],
        ],
        recommendedColumns: [['Camera of waterdichte zak', 'Droge set kleren'], ['Contant geld voor de lunch en de optionele activiteiten']],
        note: 'De activiteiten op de boerderij betaal je ter plekke — neem een betaalmiddel mee als je wilt snorkelen, kajakken of ziplinen.',
      },
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Vervoer heen en terug', 'Lokale gids', 'Entreegelden', 'Avonturenverzekering'],
        excluded: ['Alles wat niet in de lijst staat', 'Lunch (optioneel)', 'Snorkelen, kajakken, zipline, paardrijden en onderwaterfoto’s (te betalen op de boerderij)', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Overnachting'],
      },
      safetyFaq(
        'nl',
        'De plek kent geen acuut risico en vraagt geen techniek, maar let op twee dingen: de natte zones rond de grotten worden glad, en er lopen dieren vrij rond op de boerderij — vermijd contact. Zwemmen in de Pratinha is ondiep; volg in de grotten de aanwijzingen van het lokale team.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar voor een dag', 'helder water?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Ein ganzer Tag klares Wasser in Iraquara: der Fluss Pratinha, die Gruta da Pratinha und die Gruta Azul, mit optionalem Schnorcheln, Kajakfahren und Zipline.',
      canonical: '/de/abenteuer/fazenda-pratinha',
    },
    hero: {
      nivel: 'Leicht',
      origem: 'Start: Lençóis',
      duracao: '1 Tag',
      titulo: 'Fazenda Pratinha.',
      lead: 'Hundert Meter zu Fuß und den ganzen Tag im Wasser — die Oase, die mitten im Hinterland auftaucht.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Mit dem Auto', 'Dauer', 'Startzeit', 'Geplante Rückkehr', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über die Fazenda Pratinha.',
      paragrafos: [
        'In Iraquara zieht die Fazenda Pratinha Menschen aus der ganzen Welt an, die das klare Wasser aus der Nähe sehen wollen, das wie eine Oase im Hinterland Bahias hervorsprudelt. Es ist ein Privatgelände mit der Gruta Azul, der Gruta da Pratinha und dem Fluss, dem die Farm ihren Namen verdankt.',
        'Es ist die leichteste Tour, die wir anbieten — insgesamt 100 Meter zu Fuß —, aber sie füllt den ganzen Tag: Wir starten ab 8:00 Uhr und sind gegen 18:00 Uhr zurück, sodass reichlich Zeit zum Baden und für die Aktivitäten vor Ort bleibt.',
        'Die Zusatzaktivitäten füllen den Tag erst richtig: Schnorcheln mit Flossen, Taschenlampe und Schwimmweste; Kajakfahren; Reiten; Zipline; Unterwasserfotografie. Keine davon ist im Preis enthalten — du bezahlst sie auf der Farm, und es lohnt sich, bei uns nachzufragen, was an deinem Datum verfügbar ist.',
        'Das Baden im Pratinha ist flach und angenehm, besonders an klaren Tagen. Mittagessen gibt es auf der Farm selbst, an verschiedenen Stellen, von der vollen Mahlzeit bis zu Snacks, Desserts, Kaffee und Eis.',
      ],
    },
    itinerario: {
      titulo: 'So läuft der Tag ab.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält.',
      corpo: [
        'Start in Lençóis zwischen 8:00 und 9:00 Uhr. Es ist rund eine Stunde mit dem Auto, 65 km — davon 60 Asphalt über die BR-242 und 5 Schotterpiste durch das Hinterland von Iraquara.',
        'Ankunft auf der Fazenda Pratinha, dem Privatgelände mit der Gruta Azul, der Gruta da Pratinha und dem Fluss. Die Zeit dort gehört dir, zwischen Baden, der Landschaft am Fluss und rund um die Höhlen und den optionalen Aktivitäten.',
        'Das Mittagessen gibt es auf der Farm — verschiedene Stellen bieten von der vollen Mahlzeit bis zu Snacks, Desserts, Kaffee und Eis.',
        'Der Rückweg führt über eine andere Straße: 30 Minuten durch das Hinterland von Iraquara bis zur BR-242, mit Blick auf ferne Berge und Täler. Gegen 18:00 Uhr zurück in Lençóis.',
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 520', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf der Tour.' },
        { titulo: 'In der Gruppe', preco: 'R$ 379', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checkliste — was du mitnimmst',
        intro: 'Dies ist eine leichte Tour, deshalb ist die Liste kurz. Mit * markierte Gegenstände sind Pflicht.',
        requiredColumns: [
          ['Wasser (1,5 L pro Person)', 'Badesachen', 'Kappe oder Hut', 'Sonnencreme'],
          ['Persönliche Medikamente', 'Lichtbildausweis', 'Handtuch', 'Flip-Flops'],
        ],
        recommendedColumns: [['Kamera oder wasserdichter Beutel', 'Trockene Wechselkleidung'], ['Bargeld für das Mittagessen und die optionalen Aktivitäten']],
        note: 'Die Aktivitäten auf der Farm bezahlst du vor Ort — nimm ein Zahlungsmittel mit, wenn du schnorcheln, Kajak fahren oder die Zipline nutzen möchtest.',
      },
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Hin- und Rücktransport', 'Lokaler Guide', 'Eintrittsgebühren', 'Abenteuerversicherung'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Mittagessen (optional)', 'Schnorcheln, Kajak, Zipline, Reiten und Unterwasserfotos (auf der Farm zu bezahlen)', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Unterkunft'],
      },
      safetyFaq(
        'de',
        'Der Ort birgt kein akutes Risiko und verlangt keine Technik, aber achte auf zwei Dinge: Die nassen Bereiche rund um die Höhlen werden rutschig, und auf der Farm laufen Tiere frei herum — vermeide Kontakt. Das Baden im Pratinha ist flach; folge in den Höhlen den Anweisungen des lokalen Teams.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit für einen Tag', 'mit klarem Wasser?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
