/**
 * As perguntas da página do Vale do Pati em 3 dias, por idioma.
 *
 * Ficam separadas de `pati-3-content.ts` pelo volume: são o maior bloco de
 * texto da página, e o único com regra jurídica dentro (política de
 * cancelamento e termo de responsabilidade).
 *
 * ⚠️ A política de cancelamento cita a deliberação normativa nº 161/1985 da
 * EMBRATUR — norma brasileira. As versões EN, ES e FR são tradução feita aqui
 * e precisam de revisão da operadora antes de valer como termo contratual.
 */

import type { Locale } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

export const PATI3_FAQS: Record<Locale, readonly PatiFaqItem[]> = {
  pt: [
    {
      type: 'checklist',
      title: 'Checklist — o que levar',
      intro:
        'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório impossibilita a participação — conferimos na reserva e no check-in.',
      requiredColumns: [
        ['Água (1,5L/pessoa)', 'Roupas leves', 'Boné/chapéu', 'Mochila 35L+', 'Protetor solar', 'Higiene pessoal', 'Mochila de ataque'],
        ['Tênis/bota de caminhada', 'Roupas de banho', 'Lanche/fruta extra', 'Capa de chuva (corpo + mochila)', 'Remédios pessoais', 'Documentos', 'Lanterna de cabeça'],
      ],
      recommendedColumns: [['Meias extras', 'Bastão'], ['Toalha de secagem rápida', 'Power bank']],
      note: 'Não quer carregar peso? Há carregadores pessoais (custo adicional).',
    },
    {
      type: 'included',
      title: 'O que está incluso / não incluso',
      included: ['Guia de Montanha APH e bilíngue', 'Rastreador SPOT X via satélite', 'Transfer Lençóis ↔ Guiné (160km ida/volta)', 'Hospedagem 2 noites', 'Seguro aventura', 'Alimentação completa', 'Kit de primeiros socorros', 'Guarda-volumes durante a atividade', 'Banho antes/após', 'Sala de espera'],
      excluded: ['Qualquer item não listado', 'Transfer Salvador ↔ Lençóis (opcional)', 'Café do 1º dia', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Carregadores/mulas (opcional)', 'Hotéis/refeições antes/após (opcional)', 'Gorjetas'],
    },
    {
      type: 'safety',
      title: 'Segurança detalhada e riscos',
      lead: 'O mamute protege o bando. Sempre.',
      body: 'Todos os guias são condutores locais com certificação APH (Atendimento Pré-Hospitalar) e CMC (Competências Mínimas de Condução) conforme ABNT; alguns com WAFA. Todos portam kit de primeiros socorros para áreas remotas. Em operação: radiocomunicadores VHF/UHF + comunicador satélite SPOT X com S.O.S.',
      warning: 'Atividades em ambiente natural envolvem riscos inerentes — terreno irregular, animais peçonhentos, clima. O Vale do Pati é área remota: um resgate pode levar mais de 5 horas para iniciar. Evacuação médica NÃO está inclusa. Há estrutura limitada de remoção por mula (limite 110kg) — consulte o atendimento.',
      footer: 'Seguir as orientações dos guias e portar os itens obrigatórios do checklist é condição para participar.',
    },
    {
      type: 'payment',
      title: 'Formas de pagamento',
      paragraphs: [
        'Sinal de 50% para confirmar a reserva, via transferência, depósito ou boleto. Os 50% restantes no check-in em dinheiro (ou depósito até 2 dias úteis antes).',
        'Envie o comprovante com: data confirmada, nome completo e CPF de cada participante.',
        'Cartão: +5%, em até 12x (PagSeguro). Internacional: consulte o atendimento.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelamento',
      intro: 'Cancelamento pelo passageiro segue a deliberação normativa nº 161/1985 da EMBRATUR:',
      refunds: [['30+ dias antes', 'devolve 90%'], ['21–29 dias', 'devolve 80%'], ['7–20 dias', 'devolve 50%'], ['Menos de 7 dias', 'sem devolução'], ['Durante o pacote', 'sem reembolso']],
      paragraphs: [
        'Antes de cancelar: você pode indicar um substituto ou deixar o valor em crédito. Taxa de reserva: 10% em caráter de multa se cancelar após a confirmação.',
        'No-show: não comparecer implica perda total do valor. A Mamut pode alterar o roteiro quando o clima comprometer a segurança; a atividade acontece mesmo em dia de chuva, salvo força maior.',
      ],
    },
    {
      type: 'payment',
      title: 'Política de repasse de passeios',
      paragraphs: [
        'Trabalhamos com uma rede de parceiros. Em caso de repasse do passeio para outra operadora, os valores praticados podem variar conforme a quantidade de participantes, o tipo de passeio e a estrutura necessária — podendo ser equivalentes ao valor de balcão, ou ajustados para mais ou para menos.',
        'Ao contratar conosco, você concorda que, havendo repasse, a execução do serviço fica sob responsabilidade da operadora designada. Nossa função é intermediar e garantir o cumprimento do que foi contratado; não nos responsabilizamos por diferenças de preço identificadas depois da contratação.',
      ],
    },
    {
      type: 'technical',
      title: 'Ficha técnica completa e documentos',
      facts: [['Categoria', 'Trekking com pernoite'], ['Origem', 'Lençóis'], ['Percurso de carro', '160 km'], ['Idade mínima', '18 anos (menores c/ responsável)']],
      requirements: ['Condicionamento para subidas/descidas em terreno acidentado', 'Atravessar rios', 'Caminhar longas distâncias por vários dias', 'Informar restrições alimentares e necessidade de quarto privativo na reserva', 'Reservas confirmadas não têm reajuste'],
      documents: [['Termo de Responsabilidade (PDF)', '/docs/termo-de-responsabilidade.pdf'], ['Classificação de Nível das Atividades', '/pt/classificacao-de-nivel']],
    },
  ],

  en: [
    {
      type: 'checklist',
      title: 'Checklist — what to bring',
      intro:
        'Items marked with * are mandatory. Missing any mandatory item makes participation impossible — we check at booking and at check-in.',
      requiredColumns: [
        ['Water (1.5 L/person)', 'Light clothing', 'Cap/hat', 'Backpack 35 L+', 'Sunscreen', 'Toiletries', 'Day pack'],
        ['Hiking shoes/boots', 'Swimwear', 'Extra snack/fruit', 'Rain gear (body + backpack)', 'Personal medication', 'Documents', 'Head torch'],
      ],
      recommendedColumns: [['Spare socks', 'Trekking pole'], ['Quick-dry towel', 'Power bank']],
      note: 'Rather not carry the weight? Personal porters are available (extra cost).',
    },
    {
      type: 'included',
      title: 'What is included / not included',
      included: ['APH-certified bilingual mountain guide', 'SPOT X satellite tracker', 'Transfer Lençóis ↔ Guiné (160 km round trip)', 'Lodging for 2 nights', 'Adventure insurance', 'All main meals', 'First-aid kit', 'Luggage storage during the activity', 'Shower before/after', 'Waiting room'],
      excluded: ['Anything not listed above', 'Transfer Salvador ↔ Lençóis (optional)', 'Breakfast on day 1', 'Extra drinks', 'Personal equipment', 'Medical evacuation', 'Porters/mules (optional)', 'Hotels/meals before or after (optional)', 'Tips'],
    },
    {
      type: 'safety',
      title: 'Safety in detail, and the risks',
      riskLabel: 'Risks and limitations — please read',
      lead: 'The mammoth protects the herd. Always.',
      body: 'All guides are local, certified in APH (pre-hospital care) and CMC (minimum guiding competencies) under the Brazilian ABNT standard; some hold WAFA. All carry a first-aid kit for remote areas. In operation: VHF/UHF radios + a SPOT X satellite communicator with S.O.S.',
      warning: 'Activities in a natural environment carry inherent risks — uneven terrain, venomous animals, weather. The Pati Valley is a remote area: a rescue can take more than 5 hours to begin. Medical evacuation is NOT included. There is limited capacity for evacuation by mule (110 kg limit) — ask our team.',
      footer: 'Following the guides’ instructions and carrying the mandatory checklist items are conditions for taking part.',
    },
    {
      type: 'payment',
      title: 'Ways to pay',
      paragraphs: [
        'A 50% deposit confirms the booking, by transfer, deposit or boleto. The remaining 50% at check-in in cash (or by deposit up to 2 business days before).',
        'Send the receipt with: the confirmed date, and the full name and ID number of each participant.',
        'Card: +5%, up to 12 instalments (PagSeguro). International: ask our team.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Cancellation policy',
      intro: 'Cancellation by the traveller follows Brazilian EMBRATUR normative resolution no. 161/1985:',
      refunds: [['30+ days before', '90% refunded'], ['21–29 days', '80% refunded'], ['7–20 days', '50% refunded'], ['Fewer than 7 days', 'no refund'], ['During the package', 'no refund']],
      paragraphs: [
        'Before cancelling: you can name a replacement or keep the amount as credit. Booking fee: 10% as a penalty if you cancel after confirmation.',
        'No-show: failing to appear means losing the full amount. Mamut may change the itinerary when the weather compromises safety; the activity runs even on a rainy day, except in cases of force majeure.',
      ],
    },
    {
      type: 'payment',
      title: 'Tour transfer policy',
      paragraphs: [
        'We work with a network of partners. If a tour is passed on to another operator, the prices charged may vary with the number of participants, the type of tour and the logistics required — they may match our counter price, or be adjusted up or down.',
        'By booking with us, you agree that where a tour is passed on, delivery of the service becomes the responsibility of the designated operator. Our role is to broker the booking and ensure that what was contracted is delivered; we are not liable for price differences identified after booking.',
      ],
    },
    {
      type: 'technical',
      title: 'Full technical sheet and documents',
      facts: [['Category', 'Trekking with overnight stays'], ['Starts in', 'Lençóis'], ['Road section', '160 km'], ['Minimum age', '18 (minors with a legal guardian)']],
      requirements: ['Fitness for ascents and descents on rough terrain', 'Crossing rivers', 'Walking long distances over several days', 'Declaring dietary restrictions and the need for a private room at booking', 'Confirmed bookings are not subject to price adjustments'],
      documents: [['Liability waiver (PDF)', '/docs/termo-de-responsabilidade.pdf'], ['Activity difficulty classification', '/en/level-classification']],
    },
  ],

  es: [
    {
      type: 'checklist',
      title: 'Checklist — qué llevar',
      intro:
        'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio impide la participación — lo verificamos en la reserva y en el check-in.',
      requiredColumns: [
        ['Agua (1,5 L/persona)', 'Ropa liviana', 'Gorra/sombrero', 'Mochila 35 L+', 'Protector solar', 'Higiene personal', 'Mochila de ataque'],
        ['Zapatillas/botas de trekking', 'Ropa de baño', 'Merienda/fruta extra', 'Piloto de lluvia (cuerpo + mochila)', 'Medicamentos personales', 'Documentos', 'Linterna frontal'],
      ],
      recommendedColumns: [['Medias extra', 'Bastón'], ['Toalla de secado rápido', 'Power bank']],
      note: '¿No querés cargar peso? Hay porteadores personales (costo adicional).',
    },
    {
      type: 'included',
      title: 'Qué está incluido / no incluido',
      included: ['Guía de montaña con APH y bilingüe', 'Rastreador satelital SPOT X', 'Transfer Lençóis ↔ Guiné (160 km ida y vuelta)', 'Alojamiento 2 noches', 'Seguro de aventura', 'Alimentación completa', 'Kit de primeros auxilios', 'Guardaequipaje durante la actividad', 'Ducha antes/después', 'Sala de espera'],
      excluded: ['Cualquier ítem no listado', 'Transfer Salvador ↔ Lençóis (opcional)', 'Desayuno del 1º día', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Porteadores/mulas (opcional)', 'Hoteles/comidas antes o después (opcional)', 'Propinas'],
    },
    {
      type: 'safety',
      title: 'Seguridad en detalle y riesgos',
      riskLabel: 'Riesgos y limitaciones — leé con atención',
      lead: 'El mamut protege a la manada. Siempre.',
      body: 'Todos los guías son conductores locales con certificación APH (Atención Prehospitalaria) y CMC (Competencias Mínimas de Conducción) según la norma brasileña ABNT; algunos con WAFA. Todos llevan kit de primeros auxilios para áreas remotas. En operación: radios VHF/UHF + comunicador satelital SPOT X con S.O.S.',
      warning: 'Las actividades en ambiente natural implican riesgos inherentes — terreno irregular, animales ponzoñosos, clima. El Valle del Pati es área remota: un rescate puede tardar más de 5 horas en iniciarse. La evacuación médica NO está incluida. Hay estructura limitada de traslado en mula (límite 110 kg) — consultá con atención.',
      footer: 'Seguir las indicaciones de los guías y llevar los ítems obligatorios del checklist es condición para participar.',
    },
    {
      type: 'payment',
      title: 'Formas de pago',
      paragraphs: [
        'Seña del 50% para confirmar la reserva, por transferencia, depósito o boleto. El 50% restante en el check-in en efectivo (o por depósito hasta 2 días hábiles antes).',
        'Enviá el comprobante con: fecha confirmada, nombre completo y documento de cada participante.',
        'Tarjeta: +5%, hasta en 12 cuotas (PagSeguro). Internacional: consultá con atención.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelación',
      intro: 'La cancelación por parte del pasajero sigue la deliberación normativa nº 161/1985 de EMBRATUR (Brasil):',
      refunds: [['30+ días antes', 'devuelve 90%'], ['21–29 días', 'devuelve 80%'], ['7–20 días', 'devuelve 50%'], ['Menos de 7 días', 'sin devolución'], ['Durante el paquete', 'sin reembolso']],
      paragraphs: [
        'Antes de cancelar: podés indicar un reemplazo o dejar el valor como crédito. Tasa de reserva: 10% en carácter de multa si cancelás después de la confirmación.',
        'No-show: no presentarse implica la pérdida total del valor. Mamut puede alterar el recorrido cuando el clima comprometa la seguridad; la actividad se realiza incluso en día de lluvia, salvo fuerza mayor.',
      ],
    },
    {
      type: 'payment',
      title: 'Política de traspaso de paseos',
      paragraphs: [
        'Trabajamos con una red de socios. En caso de traspaso del paseo a otra operadora, los valores practicados pueden variar según la cantidad de participantes, el tipo de paseo y la estructura necesaria — pudiendo ser equivalentes al valor de mostrador, o ajustados para más o para menos.',
        'Al contratar con nosotros, aceptás que, habiendo traspaso, la ejecución del servicio queda bajo responsabilidad de la operadora designada. Nuestra función es intermediar y garantizar el cumplimiento de lo contratado; no nos responsabilizamos por diferencias de precio identificadas después de la contratación.',
      ],
    },
    {
      type: 'technical',
      title: 'Ficha técnica completa y documentos',
      facts: [['Categoría', 'Trekking con pernocte'], ['Origen', 'Lençóis'], ['Tramo en auto', '160 km'], ['Edad mínima', '18 años (menores con responsable)']],
      requirements: ['Condición física para subidas y bajadas en terreno accidentado', 'Cruzar ríos', 'Caminar largas distancias durante varios días', 'Informar restricciones alimentarias y necesidad de habitación privada en la reserva', 'Las reservas confirmadas no sufren reajuste'],
      documents: [['Término de Responsabilidad (PDF)', '/docs/termo-de-responsabilidade.pdf'], ['Clasificación de Nivel de las Actividades', '/es/clasificacion-de-nivel']],
    },
  ],
  fr: [
    {
      type: 'checklist',
      title: 'Checklist — quoi emporter',
      intro:
        'Les articles marqués * sont obligatoires. L’absence de l’un d’eux rend la participation impossible — nous vérifions à la réservation et au check-in.',
      requiredColumns: [
        ['Eau (1,5 L/personne)', 'Vêtements légers', 'Casquette/chapeau', 'Sac à dos 35 L+', 'Crème solaire', 'Trousse de toilette', 'Petit sac à dos de journée'],
        ['Chaussures/bottes de randonnée', 'Maillot de bain', 'En-cas/fruit supplémentaire', 'Protection de pluie (corps + sac)', 'Médicaments personnels', 'Pièces d’identité', 'Lampe frontale'],
      ],
      recommendedColumns: [['Chaussettes de rechange', 'Bâton de marche'], ['Serviette à séchage rapide', 'Batterie externe']],
      note: 'Vous préférez ne pas porter de charge ? Des porteurs personnels sont disponibles (coût supplémentaire).',
    },
    {
      type: 'included',
      title: 'Ce qui est inclus / non inclus',
      included: ['Guide de montagne bilingue certifié APH', 'Balise satellite SPOT X', 'Transfert Lençóis ↔ Guiné (160 km aller-retour)', 'Hébergement 2 nuits', 'Assurance aventure', 'Repas complets', 'Trousse de premiers secours', 'Consigne à bagages pendant l’activité', 'Douche avant/après', 'Salle d’attente'],
      excluded: ['Tout ce qui n’est pas listé', 'Transfert Salvador ↔ Lençóis (en option)', 'Petit-déjeuner du 1er jour', 'Boissons supplémentaires', 'Équipement personnel', 'Évacuation médicale', 'Porteurs/mules (en option)', 'Hôtels/repas avant ou après (en option)', 'Pourboires'],
    },
    {
      type: 'safety',
      title: 'Sécurité en détail et risques',
      riskLabel: 'Risques et limites — à lire attentivement',
      lead: 'Le mammouth protège la harde. Toujours.',
      body: 'Tous les guides sont des guides locaux certifiés APH (premiers secours préhospitaliers) et CMC (compétences minimales de conduite de groupe) selon la norme brésilienne ABNT ; certains sont titulaires du WAFA. Tous emportent une trousse de premiers secours pour zones isolées. Sur le terrain : radios VHF/UHF + communicateur satellite SPOT X avec S.O.S.',
      warning: 'Les activités en milieu naturel comportent des risques inhérents — terrain irrégulier, animaux venimeux, météo. La vallée du Pati est une zone isolée : un sauvetage peut mettre plus de 5 heures à commencer. L’évacuation médicale N’EST PAS incluse. Il existe une capacité limitée d’évacuation à dos de mule (limite de 110 kg) — renseignez-vous auprès de notre équipe.',
      footer: 'Suivre les consignes des guides et emporter les articles obligatoires de la checklist sont des conditions de participation.',
    },
    {
      type: 'payment',
      title: 'Modes de paiement',
      paragraphs: [
        'Un acompte de 50 % confirme la réservation, par virement, dépôt ou boleto. Les 50 % restants au check-in en espèces (ou par dépôt jusqu’à 2 jours ouvrés avant).',
        'Envoyez le justificatif avec : la date confirmée, ainsi que le nom complet et le numéro de pièce d’identité de chaque participant.',
        'Carte : +5 %, jusqu’à 12 mensualités (PagSeguro). Paiement international : contactez notre équipe.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Politique d’annulation',
      intro: 'L’annulation par le voyageur suit la délibération normative nº 161/1985 de l’EMBRATUR (Brésil) :',
      refunds: [['30 jours ou plus avant', '90 % remboursés'], ['21 à 29 jours', '80 % remboursés'], ['7 à 20 jours', '50 % remboursés'], ['Moins de 7 jours', 'aucun remboursement'], ['Pendant le forfait', 'aucun remboursement']],
      paragraphs: [
        'Avant d’annuler : vous pouvez désigner un remplaçant ou conserver le montant en avoir. Frais de réservation : 10 % à titre de pénalité en cas d’annulation après la confirmation.',
        'Non-présentation : ne pas se présenter entraîne la perte totale du montant. Mamut peut modifier l’itinéraire lorsque la météo compromet la sécurité ; l’activité a lieu même par temps de pluie, sauf cas de force majeure.',
      ],
    },
    {
      type: 'payment',
      title: 'Politique de transfert des sorties',
      paragraphs: [
        'Nous travaillons avec un réseau de partenaires. Si une sortie est transférée à un autre opérateur, les tarifs pratiqués peuvent varier selon le nombre de participants, le type de sortie et la logistique nécessaire — ils peuvent correspondre au tarif guichet, ou être ajustés à la hausse comme à la baisse.',
        'En réservant avec nous, vous acceptez qu’en cas de transfert, l’exécution du service relève de la responsabilité de l’opérateur désigné. Notre rôle est de servir d’intermédiaire et de garantir le respect de ce qui a été convenu ; nous ne sommes pas responsables des différences de prix constatées après la réservation.',
      ],
    },
    {
      type: 'technical',
      title: 'Fiche technique complète et documents',
      facts: [['Catégorie', 'Trek avec nuitées'], ['Départ', 'Lençóis'], ['Trajet en voiture', '160 km'], ['Âge minimum', '18 ans (mineurs accompagnés d’un responsable légal)']],
      requirements: ['Condition physique pour les montées et descentes en terrain accidenté', 'Traverser des rivières', 'Marcher de longues distances pendant plusieurs jours', 'Signaler à la réservation les restrictions alimentaires et le besoin d’une chambre privée', 'Les réservations confirmées ne font l’objet d’aucune révision de prix'],
      documents: [['Décharge de responsabilité (PDF)', '/docs/termo-de-responsabilidade.pdf'], ['Classification des niveaux des activités', '/fr/classification-des-niveaux']],
    },
  ],
  nl: [
    {
      type: 'checklist',
      title: 'Checklist — wat neem je mee',
      intro:
        'Items met een * zijn verplicht. Ontbreekt er één, dan kun je niet deelnemen — we controleren bij de boeking en bij de check-in.',
      requiredColumns: [
        ['Water (1,5 L/persoon)', 'Lichte kleding', 'Pet/hoed', 'Rugzak 35 L+', 'Zonnebrand', 'Toiletspullen', 'Dagrugzak'],
        ['Wandelschoenen', 'Zwemkleding', 'Extra snack/fruit', 'Regenkleding (jezelf + rugzak)', 'Persoonlijke medicijnen', 'Documenten', 'Hoofdlamp'],
      ],
      recommendedColumns: [['Extra sokken', 'Wandelstok'], ['Sneldrogende handdoek', 'Powerbank']],
      note: 'Wil je liever geen gewicht dragen? Er zijn persoonlijke dragers beschikbaar (tegen meerprijs).',
    },
    {
      type: 'included',
      title: 'Wat is inbegrepen / niet inbegrepen',
      included: ['Tweetalige berggids met APH-certificaat', 'SPOT X-satelliettracker', 'Transfer Lençóis ↔ Guiné (160 km heen en terug)', 'Overnachting voor 2 nachten', 'Avonturenverzekering', 'Alle hoofdmaaltijden', 'EHBO-kit', 'Bagageopslag tijdens de activiteit', 'Douche voor/na', 'Wachtruimte'],
      excluded: ['Alles wat hierboven niet staat', 'Transfer Salvador ↔ Lençóis (optioneel)', 'Ontbijt op dag 1', 'Extra drankjes', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Dragers/muilezels (optioneel)', 'Hotels/maaltijden voor of na (optioneel)', 'Fooien'],
    },
    {
      type: 'safety',
      title: 'Veiligheid in detail, en de risico’s',
      riskLabel: 'Risico’s en beperkingen — lees dit even',
      lead: 'De mammoet beschermt de kudde. Altijd.',
      body: 'Alle gidsen zijn lokaal, gecertificeerd in APH (pre-hospitale zorg) en CMC (minimale competenties voor gidsen) volgens de Braziliaanse ABNT-norm; sommigen hebben WAFA. Iedereen heeft een EHBO-kit voor afgelegen gebieden bij zich. Onderweg: VHF/UHF-radio’s + een SPOT X-satellietcommunicator met S.O.S.',
      warning: 'Activiteiten in de natuur brengen inherente risico’s met zich mee — oneffen terrein, giftige dieren, het weer. De Vale do Pati is een afgelegen gebied: het kan meer dan 5 uur duren voordat een redding begint. Medische evacuatie is NIET inbegrepen. Evacuatie per muilezel is beperkt mogelijk (maximaal 110 kg) — vraag het ons team.',
      footer: 'De aanwijzingen van de gidsen opvolgen en de verplichte items van de checklist bij je hebben zijn voorwaarden om deel te nemen.',
    },
    {
      type: 'payment',
      title: 'Betaalmogelijkheden',
      paragraphs: [
        'Met een aanbetaling van 50% is je boeking bevestigd, via overboeking, storting of boleto. De overige 50% betaal je contant bij de check-in (of per storting tot 2 werkdagen van tevoren).',
        'Stuur het betaalbewijs mee met: de bevestigde datum en de volledige naam en het identiteitsnummer van elke deelnemer.',
        'Creditcard: +5%, tot 12 termijnen (PagSeguro). Internationaal: vraag het ons team.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Annuleringsvoorwaarden',
      intro: 'Annulering door de reiziger volgt de Braziliaanse normatieve resolutie nr. 161/1985 van EMBRATUR:',
      refunds: [['30+ dagen vooraf', '90% terug'], ['21–29 dagen', '80% terug'], ['7–20 dagen', '50% terug'], ['Minder dan 7 dagen', 'geen restitutie'], ['Tijdens het pakket', 'geen restitutie']],
      paragraphs: [
        'Voordat je annuleert: je kunt iemand anders in je plaats laten gaan of het bedrag als tegoed houden. Boekingskosten: 10% als boete bij annulering na de bevestiging.',
        'No-show: kom je niet opdagen, dan verlies je het volledige bedrag. Mamut kan de route aanpassen als het weer de veiligheid in gevaar brengt; de activiteit gaat ook op een regenachtige dag door, behalve bij overmacht.',
      ],
    },
    {
      type: 'payment',
      title: 'Beleid bij overdracht van tours',
      paragraphs: [
        'We werken met een netwerk van partners. Wordt een tour doorgegeven aan een andere organisatie, dan kunnen de prijzen variëren met het aantal deelnemers, het type tour en de benodigde logistiek — ze kunnen gelijk zijn aan onze balieprijs, of hoger of lager uitvallen.',
        'Door bij ons te boeken ga je ermee akkoord dat bij een doorgegeven tour de uitvoering van de dienst de verantwoordelijkheid wordt van de aangewezen organisatie. Onze rol is het bemiddelen van de boeking en erop toezien dat wordt geleverd wat is afgesproken; we zijn niet aansprakelijk voor prijsverschillen die na de boeking aan het licht komen.',
      ],
    },
    {
      type: 'technical',
      title: 'Volledige technische gegevens en documenten',
      facts: [['Categorie', 'Trektocht met overnachtingen'], ['Vertrek', 'Lençóis'], ['Met de auto', '160 km'], ['Minimumleeftijd', '18 (minderjarigen met een wettelijke vertegenwoordiger)']],
      requirements: ['Conditie voor klimmen en dalen op ruig terrein', 'Rivieren oversteken', 'Meerdere dagen achter elkaar lange afstanden lopen', 'Dieetwensen en de wens voor een eigen kamer doorgeven bij de boeking', 'Bevestigde boekingen worden niet in prijs aangepast'],
      documents: [['Aansprakelijkheidsverklaring (pdf)', '/docs/termo-de-responsabilidade.pdf'], ['Classificatie van de moeilijkheidsgraad', '/nl/niveauclassificatie']],
    },
  ],
};
