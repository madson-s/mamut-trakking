/**
 * Pacotes de 3, 4 e 6 dias ("Chapada Especial", "Chapada Deslumbrante" e
 * "Chapada Extraordinária"), por idioma.
 *
 * PT vem de mamut.agency/pacote-personalizado/pacote-{3,4,6}-dias e EN de
 * mamut.agency/en/pacote-personalizado/{3-days-package-chapada-special,
 * 4-days-package-stunning-chapada, 6-days-package-extraordinary-chapada}.
 * ES, FR e NL são traduções feitas aqui.
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
import { pricing } from './price-table';

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
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 2399, 1700],
    ['2', 1900, 1700],
    ['3', 1700, 1650],
    ['4+', 1650, 1500],
  ]),
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
  calendarTrekId: 'pacote6',
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
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...pricing([
    ['1', 9000, 4800],
    ['2', 5100, 4700],
    ['3', 4700, 4500],
    ['4+', 4500, 4250],
  ]),
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
  fr: [
    {
      titulo: 'Parc de la Muritiba',
      corpo: 'Le départ peut se faire à n’importe quelle heure entre 8h00 et 14h00 — le circuit prend 4 à 5 heures et commence au Centre d’accueil touristique (CAT), qui offre déjà un panorama de tout le parcours. En 5 minutes, nous arrivons aux piscines naturelles du Serrano, avec leurs conglomérats polis par l’eau et leurs petites cascades. Encore 15 minutes et nous entrons dans le labyrinthe du Salão das Areias Coloridas, où l’infiltration de l’eau a rendu la roche poreuse et sableuse. Viennent ensuite le Poço Halley, avec ses argiles colorées pour s’amuser, la cascade da Primavera, le Poço Paraíso et le belvédère de Lençóis, d’où l’on voit toute la ville et un horizon qui semble sans fin. La descente se termine à la Cachoeirinha, aux eaux cristallines.',
      distancia: '4 km',
      esforco: 'Facile / Modéré',
    },
    {
      titulo: 'Cascade du Mosquito + Poço do Diabo + Morro do Pai Inácio',
      corpo: 'Départ de Lençóis à 8h00 vers la Fazenda Santo Antônio : 40 km en voiture, environ 1 heure, puis 700 mètres de marche jusqu’au pied de la cascade du Mosquito. Après la baignade, encore 28 km jusqu’à l’espace de baignade du Mucugêzinho et 15 minutes à pied jusqu’au Poço do Diabo, une immense piscine naturelle aux eaux sombres et glacées, où nous restons jusqu’à 16h00. Encore 5 km en voiture et une montée de 300 mètres, une vingtaine de minutes, jusqu’au sommet du Morro do Pai Inácio — là-haut, le guide raconte la légende qui a donné son nom au morro. Le retour à Lençóis se fait par la BR-242, la serra à vos côtés.',
      distancia: '4 km',
      esforco: 'Facile',
    },
    {
      titulo: 'Gruta da Fumaça + Pratinha + Gruta Azul + Morro do Camelo',
      corpo: 'Départ à 8h00 pour Iraquara, à 1 heure de Lençóis. Premier arrêt : la Gruta da Fumaça, l’une des grottes les plus riches du Brésil en formations. De là, nous rejoignons la Fazenda Pratinha, sur la rivière du même nom — snorkeling, photo sous-marine, kayak et tyrolienne sont en option, à régler sur place. À 15h00, nous entrons dans la Gruta Azul, où la lumière de l’après-midi offre le spectacle. Vers 16h30, encore 40 minutes de voiture jusqu’au belvédère du Morro do Camelo, pour le coucher du soleil. Arrivée à Lençóis vers 18h30.',
      distancia: '2 km',
      esforco: 'Facile',
    },
  ],
  nl: [
    {
      titulo: 'Parque da Muritiba',
      corpo: 'Je kunt op elk moment tussen 8.00 en 14.00 uur vertrekken — het circuit duurt 4 tot 5 uur en begint bij het toeristeninformatiecentrum (CAT), vanwaar je de hele route al ziet liggen. Na 5 minuten komen we bij de natuurlijke baden van de Serrano, met door het water gladgeslepen conglomeraat en kleine watervallen. Nog 15 minuten en we lopen het labyrint van de Salão das Areias Coloridas in, waar insijpelend water de rots poreus en zanderig heeft gemaakt. Daarna volgen de Poço Halley, met gekleurde klei om mee te spelen, de Waterval Primavera, de Poço Paraíso en het uitkijkpunt over Lençóis, vanwaar je het hele stadje ziet en een horizon die eindeloos lijkt. De afdaling eindigt bij de Cachoeirinha, met kristalhelder water.',
      distancia: '4 km',
      esforco: 'Licht / Gemiddeld',
    },
    {
      titulo: 'Waterval Mosquito + Poço do Diabo + Morro do Pai Inácio',
      corpo: 'Om 8.00 uur vertrekken we uit Lençóis naar de Fazenda Santo Antônio: 40 km met de auto, zo’n uur, en 700 meter lopen naar de voet van de Waterval Mosquito. Na het zwemmen nog 28 km naar de zwemplek van de Mucugêzinho en 15 minuten lopen naar de Poço do Diabo, een enorm natuurlijk bad met donker, koud water, waar we tot 16.00 uur blijven. Nog 5 km met de auto en een klim van 300 meter, zo’n 20 minuten, naar de top van de Morro do Pai Inácio — daarboven vertelt de gids de legende waar de berg zijn naam aan dankt. Terug naar Lençóis over de BR-242, met de bergrug naast je.',
      distancia: '4 km',
      esforco: 'Licht',
    },
    {
      titulo: 'Gruta da Fumaça + Pratinha + Gruta Azul + Morro do Camelo',
      corpo: 'Vertrek om 8.00 uur naar Iraquara, een uur van Lençóis. De eerste stop is de Gruta da Fumaça, een van de grotten met de meest complete formaties van Brazilië. Vandaar gaan we naar de Fazenda Pratinha, aan de rivier met dezelfde naam — snorkelen, onderwaterfoto’s, kajakken en de zipline zijn optioneel en betaal je ter plekke. Om 15.00 uur gaan we de Gruta Azul in, waar het middaglicht voor het schouwspel zorgt. Rond 16.30 uur rijden we nog 40 minuten naar het uitkijkpunt op de Morro do Camelo, voor de zonsondergang. Aankomst in Lençóis rond 18.30 uur.',
      distancia: '2 km',
      esforco: 'Licht',
    },
  ],
  de: [
    {
      titulo: 'Parque da Muritiba',
      corpo: 'Du kannst jederzeit zwischen 8:00 und 14:00 Uhr starten — der Rundweg dauert 4 bis 5 Stunden und beginnt am Touristeninformationszentrum (CAT), von wo du schon die ganze Route vor dir siehst. Nach 5 Minuten erreichen wir die Naturbecken des Serrano, mit vom Wasser glatt geschliffenem Konglomerat und kleinen Wasserfällen. Noch 15 Minuten, und wir betreten das Labyrinth des Salão das Areias Coloridas, wo eindringendes Wasser den Fels porös und sandig gemacht hat. Danach folgen der Poço Halley, mit farbigem Ton zum Spielen, der Primavera-Wasserfall, der Poço Paraíso und der Aussichtspunkt über Lençóis, von dem du das ganze Städtchen siehst und einen Horizont, der endlos scheint. Der Abstieg endet an der Cachoeirinha, mit kristallklarem Wasser.',
      distancia: '4 km',
      esforco: 'Leicht / Mittel',
    },
    {
      titulo: 'Mosquito-Wasserfall + Poço do Diabo + Morro do Pai Inácio',
      corpo: 'Um 8:00 Uhr fahren wir von Lençóis zur Fazenda Santo Antônio: 40 km mit dem Auto, rund eine Stunde, und 700 Meter zu Fuß bis zum Fuß des Mosquito-Wasserfalls. Nach dem Baden noch 28 km bis zur Badestelle Mucugêzinho und 15 Minuten zu Fuß bis zum Poço do Diabo, einem riesigen Naturbecken mit dunklem, eiskaltem Wasser, wo wir bis 16:00 Uhr bleiben. Noch 5 km mit dem Auto und ein Aufstieg von 300 Metern, rund 20 Minuten, bis zum Gipfel des Morro do Pai Inácio — oben erzählt der Guide die Legende, der der Berg seinen Namen verdankt. Zurück nach Lençóis über die BR-242, mit dem Bergrücken neben dir.',
      distancia: '4 km',
      esforco: 'Leicht',
    },
    {
      titulo: 'Gruta da Fumaça + Pratinha + Gruta Azul + Morro do Camelo',
      corpo: 'Start um 8:00 Uhr nach Iraquara, eine Stunde von Lençóis. Erster Halt ist die Gruta da Fumaça, eine der Höhlen mit den vollständigsten Formationen Brasiliens. Von dort geht es zur Fazenda Pratinha am gleichnamigen Fluss — Schnorcheln, Unterwasserfotos, Kajakfahren und die Zipline sind optional und werden vor Ort bezahlt. Um 15:00 Uhr betreten wir die Gruta Azul, wo das Nachmittagslicht für das Schauspiel sorgt. Gegen 16:30 Uhr fahren wir noch 40 Minuten zum Aussichtspunkt auf dem Morro do Camelo, für den Sonnenuntergang. Ankunft in Lençóis gegen 18:30 Uhr.',
      distancia: '2 km',
      esforco: 'Leicht',
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
  fr: {
    titulo: 'Marais de Marimbus + piscines du Roncador',
    corpo: 'Départ à 8h00 pour la communauté quilombola du Remanso, à 20 km. De là, nous partons en canoë sur 9 km — environ 2 heures — à travers le marais de Marimbus, avec la chance d’apercevoir anacondas, caïmans et singes hurleurs, sans compter de nombreux oiseaux et plantes aquatiques. Nous débarquons et marchons 30 minutes jusqu’aux piscines naturelles du Roncador. En milieu d’après-midi, un sentier de 40 minutes nous ramène à la voiture.',
    distancia: '8 km',
    esforco: 'Facile',
  },
  nl: {
    titulo: 'Moeras van Marimbus + Poços do Roncador',
    corpo: 'Vertrek om 8.00 uur naar de quilombola-gemeenschap Remanso, op 20 km. Vandaar peddelen we 9 km per kano — zo’n 2 uur — door het moeras van Marimbus, met kans op anaconda’s, kaaimannen en brulapen, plus veel vogels en waterplanten. We gaan aan land en lopen 30 minuten naar de natuurlijke baden van de Roncador. Halverwege de middag brengt een pad van 40 minuten ons terug naar de auto.',
    distancia: '8 km',
    esforco: 'Licht',
  },
  de: {
    titulo: 'Sumpfgebiet Marimbus + Poços do Roncador',
    corpo: 'Start um 8:00 Uhr zur Quilombola-Gemeinde Remanso, 20 km entfernt. Von dort paddeln wir 9 km im Kanu — rund 2 Stunden — durch das Sumpfgebiet Marimbus, mit der Chance, Anakondas, Kaimane und Brüllaffen zu sehen, dazu viele Vögel und Wasserpflanzen. Wir gehen an Land und laufen 30 Minuten zu den Naturbecken des Roncador. Am Nachmittag bringt uns ein Weg von 40 Minuten zurück zum Auto.',
    distancia: '8 km',
    esforco: 'Leicht',
  },
};

const ROTULO: Record<Locale, (n: number) => string> = {
  pt: (n) => `${n}º dia`,
  en: (n) => `Day ${n}`,
  es: (n) => `${n}º día`,
  fr: (n) => `Jour ${n}`,
  nl: (n) => `Dag ${n}`,
  de: (n) => `Tag ${n}`,
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
  fr: {
    hero: { origem: 'Départ : Lençóis', apartirDe: 'À partir de', porPessoa: '/ personne', reservar: 'Réserver sur WhatsApp' },
    itinerario: {
      titulo: 'Jour après jour.',
      aviso: 'L’itinéraire peut changer en fonction de la météo ou de tout cas de force majeure que l’équipe jugerait important. Le forfait est aussi personnalisable : vous voulez changer une journée ou composer une autre combinaison ? Parlez-en avec nous.',
    },
    precosTitulo: 'Choisissez la formule idéale pour votre groupe.',
    precosNota: 'Tarifs par personne pour un paiement en espèces, par virement ou par boleto. Carte bancaire, virement international ou groupe plus nombreux : contactez-nous.',
    privado: { titulo: 'Forfait privé', nota: 'Minimum 2 personnes. Uniquement votre groupe sur l’itinéraire.' },
    grupo: { titulo: 'En groupe', nota: 'De 2 à 7 personnes. Conditions spéciales pour les groupes — renseignez-vous.' },
    faqTitulo: 'Tout ce que vous devez savoir.',
    relacionados: 'Autres aventures.',
    checklistTitulo: 'Checklist — quoi emporter',
    checklistIntro: 'Les articles obligatoires sont vérifiés avant les activités : l’absence d’un seul d’entre eux empêche la participation.',
    incluidoTitulo: 'Ce qui est inclus / non inclus',
    tecnicaTitulo: 'Fiche technique et conditions',
    labels: { requirements: 'Conditions', documents: 'Documents' },
    documentos: [
      ['Décharge de responsabilité (PDF)', '/docs/termo-de-responsabilidade.pdf'],
      ['Classification des niveaux des activités', '/fr/classification-des-niveaux'],
    ],
    requisitosFinais: [
      'Avoir plus de 18 ans. Les mineurs uniquement accompagnés de leur représentant légal.',
      'Signaler toute restriction alimentaire lors de la réservation.',
      'Les tarifs peuvent changer — les réservations déjà confirmées ne sont pas réajustées.',
    ],
    cta: {
      titulo: ['Quelques jours,', 'toute la Chapada.'],
      corpo: 'Dites-nous combien vous êtes, les dates que vous envisagez et ce que vous voulez voir avant tout — nous composons le forfait avec vous.',
      botao: 'Parler avec Mamut',
    },
  },
  nl: {
    hero: { origem: 'Vertrek: Lençóis', apartirDe: 'Vanaf', porPessoa: '/ persoon', reservar: 'Boek via WhatsApp' },
    itinerario: {
      titulo: 'Dag voor dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt. Het pakket is ook aan te passen: wil je een dag ruilen of een andere combinatie samenstellen? Praat met ons.',
    },
    precosTitulo: 'Kies de vorm die bij je groep past.',
    precosNota: 'Prijzen per persoon bij betaling contant, per overboeking of met boleto. Creditcard, internationale overboeking of een grotere groep: neem contact met ons op.',
    privado: { titulo: 'Privépakket', nota: 'Minimaal 2 personen. Alleen jouw groep op de route.' },
    grupo: { titulo: 'In een groep', nota: 'Van 2 tot 7 personen. Speciale voorwaarden voor groepen — vraag het ons.' },
    faqTitulo: 'Alles wat je moet weten.',
    relacionados: 'Andere avonturen.',
    checklistTitulo: 'Checklist — wat neem je mee',
    checklistIntro: 'De verplichte items worden voor de activiteiten gecontroleerd: ontbreekt er één, dan kun je niet deelnemen.',
    incluidoTitulo: 'Wat is inbegrepen / niet inbegrepen',
    tecnicaTitulo: 'Technische gegevens en vereisten',
    labels: { requirements: 'Vereisten', documents: 'Documenten' },
    documentos: [
      ['Aansprakelijkheidsverklaring (pdf)', '/docs/termo-de-responsabilidade.pdf'],
      ['Classificatie van de moeilijkheidsgraad', '/nl/niveauclassificatie'],
    ],
    requisitosFinais: [
      'Je moet ouder zijn dan 18. Minderjarigen alleen samen met hun wettelijke vertegenwoordiger.',
      'Geef dieetwensen door bij de boeking.',
      'Prijzen kunnen veranderen — al bevestigde boekingen worden niet aangepast.',
    ],
    cta: {
      titulo: ['Een paar dagen,', 'de hele Chapada.'],
      corpo: 'Vertel ons met hoeveel mensen je komt, welke data je in gedachten hebt en wat je het liefst wilt zien — dan stellen we het pakket samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    hero: { origem: 'Start: Lençóis', apartirDe: 'Ab', porPessoa: '/ Person', reservar: 'Per WhatsApp buchen' },
    itinerario: {
      titulo: 'Tag für Tag.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält. Das Paket lässt sich auch anpassen: Möchtest du einen Tag tauschen oder eine andere Kombination zusammenstellen? Sprich mit uns.',
    },
    precosTitulo: 'Wähle das Format, das zu deiner Gruppe passt.',
    precosNota: 'Preise pro Person bei Zahlung in bar, per Überweisung oder mit Boleto. Kreditkarte, internationale Überweisung oder größere Gruppe: sprich uns an.',
    privado: { titulo: 'Privatpaket', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf der Route.' },
    grupo: { titulo: 'In der Gruppe', nota: 'Von 2 bis 7 Personen. Besondere Konditionen für Gruppen — frag uns.' },
    faqTitulo: 'Alles, was du wissen musst.',
    relacionados: 'Weitere Abenteuer.',
    checklistTitulo: 'Checkliste — was du mitnimmst',
    checklistIntro: 'Die Pflichtgegenstände werden vor den Aktivitäten geprüft: Fehlt einer davon, ist eine Teilnahme nicht möglich.',
    incluidoTitulo: 'Was inklusive ist / was nicht',
    tecnicaTitulo: 'Technische Daten und Voraussetzungen',
    labels: { requirements: 'Voraussetzungen', documents: 'Dokumente' },
    documentos: [
      ['Haftungserklärung (PDF)', '/docs/termo-de-responsabilidade.pdf'],
      ['Einstufung der Schwierigkeitsgrade', '/de/schwierigkeitsgrade'],
    ],
    requisitosFinais: [
      'Du musst über 18 sein. Minderjährige nur in Begleitung ihrer gesetzlichen Vertretung.',
      'Teile uns Ernährungswünsche bei der Buchung mit.',
      'Preise können sich ändern — bereits bestätigte Buchungen werden nicht angepasst.',
    ],
    cta: {
      titulo: ['Ein paar Tage,', 'die ganze Chapada.'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst, welche Daten du im Blick hast und was du am liebsten sehen möchtest — dann stellen wir das Paket gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
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
  fr: {
    requiredColumns: [
      ['Eau (1,5 L par personne)', 'Chaussures ou bottes de randonnée', 'Chaussettes de rechange', 'Deux tenues légères de rechange', 'Maillot de bain', 'Casquette ou chapeau'],
      ['Crème solaire', 'Anti-moustiques', 'Médicaments personnels', 'Pièce d’identité', 'Sac à dos pour vos affaires', 'Lampe frontale ou torche'],
    ],
    recommendedColumns: [['Serviette fine', 'Imperméable (renseignez-vous auprès de l’agence)', 'Bâton de marche'], ['En-cas ou fruit', 'Espèces pour les boissons']],
    note: 'Chaque jour, il y a une baignade en cascade ou en bassin : gardez maillot et serviette dans votre petit sac à dos.',
  },
  nl: {
    requiredColumns: [
      ['Water (1,5 L per persoon)', 'Wandelschoenen', 'Extra sokken', 'Twee sets lichte kleding', 'Zwemkleding', 'Pet of hoed'],
      ['Zonnebrand', 'Insectenwerend middel', 'Persoonlijke medicijnen', 'Identiteitsbewijs', 'Rugzak voor je spullen', 'Zaklamp'],
    ],
    recommendedColumns: [['Dunne handdoek', 'Regenjas (vraag het ons)', 'Wandelstok'], ['Snack of fruit', 'Contant geld voor drankjes']],
    note: 'Elke dag zwem je bij een waterval of in een poel: houd je zwemkleding en handdoek in je dagrugzak.',
  },
  de: {
    requiredColumns: [
      ['Wasser (1,5 L pro Person)', 'Wanderschuhe', 'Ersatzsocken', 'Zwei Garnituren leichte Kleidung', 'Badesachen', 'Kappe oder Hut'],
      ['Sonnencreme', 'Insektenschutz', 'Persönliche Medikamente', 'Ausweis', 'Rucksack für deine Sachen', 'Taschenlampe'],
    ],
    recommendedColumns: [['Dünnes Handtuch', 'Regenjacke (frag uns)', 'Wanderstock'], ['Snack oder Obst', 'Bargeld für Getränke']],
    note: 'Jeden Tag badest du an einem Wasserfall oder in einem Becken: Behalte Badesachen und Handtuch in deinem Tagesrucksack.',
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
  fr: {
    included: ['Guide touristique de Mamut', 'Transferts entre Lençóis et les sites', 'Droits d’entrée sur tous les sites', 'Assurance aventure', 'Trousse de premiers secours'],
    excluded: ['Tout ce qui n’est pas listé', 'Hébergement — si besoin, nous l’ajoutons', 'Activités optionnelles de la Fazenda Pratinha (snorkeling, kayak, tyrolienne)', 'Boissons supplémentaires', 'Équipement personnel', 'Évacuation médicale', 'Porteurs personnels', 'Hôtels et repas avant et après les activités', 'Pourboires pour services supplémentaires (photos et autres aides)'],
  },
  nl: {
    included: ['Gids van Mamut', 'Transfers tussen Lençóis en de bezienswaardigheden', 'Entreegelden op alle plekken', 'Avonturenverzekering', 'EHBO-kit'],
    excluded: ['Alles wat niet in de lijst staat', 'Overnachting — die voegen we toe als je wilt', 'Optionele activiteiten op de Fazenda Pratinha (snorkelen, kajak, zipline)', 'Extra drankjes', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Persoonlijke dragers', 'Hotels en maaltijden voor en na de activiteiten', 'Fooien voor extra diensten (foto’s en andere hulp)'],
  },
  de: {
    included: ['Guide von Mamut', 'Transfers zwischen Lençóis und den Sehenswürdigkeiten', 'Eintrittsgebühren an allen Orten', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
    excluded: ['Alles, was nicht aufgeführt ist', 'Unterkunft — die fügen wir hinzu, wenn du möchtest', 'Optionale Aktivitäten auf der Fazenda Pratinha (Schnorcheln, Kajak, Zipline)', 'Zusätzliche Getränke', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Persönliche Träger', 'Hotels und Mahlzeiten vor und nach den Aktivitäten', 'Trinkgelder für zusätzliche Leistungen (Fotos und andere Hilfe)'],
  },
};

const RISCO_LEVE: Record<Locale, string> = {
  pt: 'São dias de carro com caminhadas curtas, mas há banho em poços fundos e gelados, como o Poço do Diabo, e pedra escorregadia na beira das cachoeiras. Entre na água com o grupo e siga a orientação do condutor.',
  en: 'These are days by car with short walks, but there are swims in deep, cold pools such as Poço do Diabo, and slippery rock around the waterfalls. Go into the water with the group and follow the guide’s lead.',
  es: 'Son días en auto con caminatas cortas, pero hay baños en pozos hondos y helados, como el Poço do Diabo, y piedra resbaladiza al borde de las cascadas. Entrá al agua con el grupo y seguí la indicación del conductor.',
  fr: 'Ce sont des journées en voiture avec de courtes marches, mais on se baigne dans des bassins profonds et glacés, comme le Poço do Diabo, et la roche est glissante au bord des cascades. Entrez dans l’eau avec le groupe et suivez les consignes du guide.',
  nl: 'Het zijn dagen met de auto en korte wandelingen, maar je zwemt in diepe, koude poelen zoals de Poço do Diabo, en de rots aan de rand van de watervallen is glad. Ga samen met de groep het water in en volg de aanwijzingen van de gids.',
  de: 'Es sind Tage mit dem Auto und kurzen Wanderungen, aber du badest in tiefen, eiskalten Becken wie dem Poço do Diabo, und der Fels am Rand der Wasserfälle ist rutschig. Geh zusammen mit der Gruppe ins Wasser und folge den Anweisungen des Guides.',
};

const FITNESS_LEVE: Record<Locale, string> = {
  pt: 'Condicionamento para subidas e descidas íngremes em terreno acidentado e travessia de riachos.',
  en: 'Fitness for steep ascents and descents on rough ground and for crossing streams.',
  es: 'Estado físico para subidas y bajadas empinadas en terreno accidentado y cruce de arroyos.',
  fr: 'Une condition physique permettant d’enchaîner montées et descentes raides sur terrain accidenté et de traverser des ruisseaux.',
  nl: 'Conditie voor steile klimmen en afdalingen op ruig terrein en voor het oversteken van beken.',
  de: 'Kondition für steile Auf- und Abstiege auf rauem Gelände und für das Durchqueren von Bächen.',
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
    hero: { ...c.hero, nivel: { pt: 'Leve / Moderado', en: 'Light / Moderate', es: 'Leve / Moderado', fr: 'Facile / Modéré', nl: 'Licht / Gemiddeld', de: 'Leicht / Mittel' }[locale], duracao: p.duracao, titulo: p.titulo, lead: p.lead },
    stats: {
      pt: ['Distância a pé', 'Percurso de carro', 'Atrativos', 'Saída (Lençóis)', 'Retorno'],
      en: ['Distance on foot', 'Drive', 'Sights', 'Departure (Lençóis)', 'Return'],
      es: ['Distancia a pie', 'Recorrido en auto', 'Atractivos', 'Salida (Lençóis)', 'Regreso'],
      fr: ['Distance à pied', 'Trajet en voiture', 'Sites', 'Départ (Lençóis)', 'Retour'],
      nl: ['Afstand te voet', 'Met de auto', 'Bezienswaardigheden', 'Vertrek (Lençóis)', 'Terugkeer'],
      de: ['Strecke zu Fuß', 'Mit dem Auto', 'Sehenswürdigkeiten', 'Start (Lençóis)', 'Rückkehr'],
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
  fr: 'Parc de la Muritiba, Salão das Areias Coloridas, cascade da Primavera, Cachoeirinha, cascade du Mosquito, Poço do Diabo, rivière Mucugêzinho, Morro do Pai Inácio, Fazenda Pratinha, Gruta Azul, Gruta da Fumaça et le belvédère du Morro do Camelo',
  nl: 'Parque da Muritiba, Salão das Areias Coloridas, Waterval Primavera, Cachoeirinha, Waterval Mosquito, Poço do Diabo, rivier de Mucugêzinho, Morro do Pai Inácio, Fazenda Pratinha, Gruta Azul, Gruta da Fumaça en het uitkijkpunt op de Morro do Camelo',
  de: 'Parque da Muritiba, Salão das Areias Coloridas, Primavera-Wasserfall, Cachoeirinha, Mosquito-Wasserfall, Poço do Diabo, Fluss Mucugêzinho, Morro do Pai Inácio, Fazenda Pratinha, Gruta Azul, Gruta da Fumaça und der Aussichtspunkt auf dem Morro do Camelo',
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
    privado: 'R$ 1.900',
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
    privado: 'R$ 1,900',
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
    privado: 'R$ 1.900',
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
  fr: pacoteLeve('fr', {
    meta: {
      title: 'Forfait Chapada Spéciale — 3 jours',
      description: 'Trois jours au départ de Lençóis : parc de la Muritiba, cascade du Mosquito, Morro do Pai Inácio, Gruta da Fumaça, Pratinha et le coucher du soleil au Morro do Camelo.',
      canonical: '/fr/aventures/forfait-3-jours',
    },
    duracao: '3 jours',
    titulo: 'Chapada Spéciale en 3 jours.',
    lead: 'Cascades, grottes, belvédères et sentiers courts — le meilleur de la Chapada quand le temps est compté.',
    sobre: {
      titulo: 'À propos du forfait.',
      paragrafos: [
        'C’est le bon choix si votre séjour dans la Chapada Diamantina est court et que vous voulez découvrir les lieux les plus remarquables de la région. En trois jours, le forfait réunit randonnée, cascades, grottes et belvédères.',
        'Tous les départs se font de Lençóis. La première journée se passe au parc de la Muritiba, aux portes de la ville : le guide y présente la Chapada — son histoire, sa géologie, l’époque des chercheurs de diamants et les curiosités de sa faune et de sa flore. C’est votre introduction à la région.',
        'Les jours suivants, nous allons un peu plus loin, en voiture, avec de courtes marches : cascade du Mosquito, Poço do Diabo et Pai Inácio un jour ; Gruta da Fumaça, Pratinha, Gruta Azul et le coucher du soleil au Morro do Camelo le lendemain.',
      ],
    },
    dias: [...DIAS_BASE.fr],
    privado: 'R$ 1.900',
    grupo: 'R$ 1.500',
    facts: [
      ['Catégorie', 'Excursions à la journée au départ de Lençóis'],
      ['Distance à pied', '7 km'],
      ['Trajet en voiture', '250 km'],
      ['Niveau d’effort', 'Facile / Modéré'],
      ['Sites', ATRATIVOS_3.fr],
      ['Hébergement', 'Non inclus — si besoin, nous l’ajoutons'],
      ['Départ / retour', '8h00 / 18h00'],
    ],
    relacionados: ['chapada-deslumbrante-4-dias', 'chapada-extraordinaria-6-dias', 'vale-do-pati-3-dias'],
  }),
  nl: pacoteLeve('nl', {
    meta: {
      title: 'Pakket Chapada Especial — 3 dagen',
      description: 'Drie dagen met Lençóis als uitvalsbasis: Parque da Muritiba, Waterval Mosquito, Morro do Pai Inácio, Gruta da Fumaça, Pratinha en de zonsondergang op de Morro do Camelo.',
      canonical: '/nl/avonturen/pakket-3-dagen',
    },
    duracao: '3 dagen',
    titulo: 'Chapada Especial in 3 dagen.',
    lead: 'Watervallen, grotten, uitkijkpunten en korte paden — het beste van de Chapada als je weinig tijd hebt.',
    sobre: {
      titulo: 'Over het pakket.',
      paragrafos: [
        'Het is de juiste keuze als je maar kort in de Chapada Diamantina bent en de bijzonderste plekken van de regio wilt zien. In drie dagen combineert het pakket wandelen, watervallen, grotten en uitkijkpunten.',
        'Elke dag begint in Lençóis. De eerste dag breng je door in het Parque da Muritiba, vlak naast het stadje: daar stelt de gids je voor aan de Chapada — de geschiedenis, de geologie, de tijd van de diamantzoekers en wetenswaardigheden over planten en dieren. Het is je introductie tot de regio.',
        'De dagen erna gaan we wat verder weg, met de auto, met korte wandelingen: de Waterval Mosquito, de Poço do Diabo en de Pai Inácio op de ene dag; de Gruta da Fumaça, de Pratinha, de Gruta Azul en de zonsondergang op de Morro do Camelo op de andere.',
      ],
    },
    dias: [...DIAS_BASE.nl],
    privado: 'R$ 1.900',
    grupo: 'R$ 1.500',
    facts: [
      ['Categorie', 'Dagtochten met Lençóis als uitvalsbasis'],
      ['Afstand te voet', '7 km'],
      ['Met de auto', '250 km'],
      ['Inspanning', 'Licht / Gemiddeld'],
      ['Bezienswaardigheden', ATRATIVOS_3.nl],
      ['Overnachting', 'Niet inbegrepen — die voegen we toe als je wilt'],
      ['Vertrek / terugkeer', '8.00 / 18.00 uur'],
    ],
    relacionados: ['chapada-deslumbrante-4-dias', 'chapada-extraordinaria-6-dias', 'vale-do-pati-3-dias'],
  }),
  de: pacoteLeve('de', {
    meta: {
      title: 'Paket Chapada Especial — 3 Tage',
      description: 'Drei Tage mit Lençóis als Ausgangspunkt: Parque da Muritiba, Mosquito-Wasserfall, Morro do Pai Inácio, Gruta da Fumaça, Pratinha und der Sonnenuntergang auf dem Morro do Camelo.',
      canonical: '/de/abenteuer/paket-3-tage',
    },
    duracao: '3 Tage',
    titulo: 'Chapada Especial in 3 Tagen.',
    lead: 'Wasserfälle, Höhlen, Aussichtspunkte und kurze Wege — das Beste der Chapada, wenn du wenig Zeit hast.',
    sobre: {
      titulo: 'Über das Paket.',
      paragrafos: [
        'Die richtige Wahl, wenn du nur kurz in der Chapada Diamantina bist und die besondersten Orte der Region sehen möchtest. In drei Tagen kombiniert das Paket Wanderungen, Wasserfälle, Höhlen und Aussichtspunkte.',
        'Jeder Tag beginnt in Lençóis. Den ersten Tag verbringst du im Parque da Muritiba, gleich neben dem Städtchen: Dort stellt dir der Guide die Chapada vor — die Geschichte, die Geologie, die Zeit der Diamantensucher und Wissenswertes über Pflanzen und Tiere. Es ist deine Einführung in die Region.',
        'An den folgenden Tagen geht es etwas weiter hinaus, mit dem Auto und kurzen Wanderungen: der Mosquito-Wasserfall, der Poço do Diabo und der Pai Inácio an einem Tag; die Gruta da Fumaça, die Pratinha, die Gruta Azul und der Sonnenuntergang auf dem Morro do Camelo am anderen.',
      ],
    },
    dias: [...DIAS_BASE.de],
    privado: 'R$ 1.900',
    grupo: 'R$ 1.500',
    facts: [
      ['Kategorie', 'Tagestouren mit Lençóis als Ausgangspunkt'],
      ['Strecke zu Fuß', '7 km'],
      ['Mit dem Auto', '250 km'],
      ['Anstrengung', 'Leicht / Mittel'],
      ['Sehenswürdigkeiten', ATRATIVOS_3.de],
      ['Unterkunft', 'Nicht inklusive — die fügen wir hinzu, wenn du möchtest'],
      ['Start / Rückkehr', '8:00 / 18:00 Uhr'],
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
    privado: 'R$ 3,165',
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
    privado: 'R$ 3.165',
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
  fr: pacoteLeve('fr', {
    meta: {
      title: 'Forfait Chapada Éblouissante — 4 jours',
      description: 'Quatre jours au départ de Lençóis : Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha et une journée en canoë à travers le marais de Marimbus jusqu’aux piscines du Roncador.',
      canonical: '/fr/aventures/forfait-4-jours',
    },
    duracao: '4 jours',
    titulo: 'Chapada Éblouissante en 4 jours.',
    lead: 'Les grands classiques de la Chapada et une journée en canoë à travers le marais de Marimbus.',
    sobre: {
      titulo: 'À propos du forfait.',
      paragrafos: [
        'Pour celles et ceux qui ont peu de jours dans la Chapada Diamantina et veulent découvrir les lieux les plus remarquables de la région. En quatre jours, le forfait réunit randonnée, cascades, grottes, belvédères et une sortie en bateau.',
        'Tous les départs se font de Lençóis. La première journée se passe au parc de la Muritiba, aux portes de la ville : le guide y présente la Chapada — son histoire, sa géologie, l’époque des chercheurs de diamants et les curiosités de sa faune et de sa flore.',
        'Les jours suivants, nous allons un peu plus loin : cascade du Mosquito et Pai Inácio ; grottes, Pratinha et le coucher du soleil au Morro do Camelo ; et, pour finir, la traversée en canoë du marais de Marimbus jusqu’aux piscines du Roncador.',
      ],
    },
    dias: [...DIAS_BASE.fr, DIA_MARIMBUS.fr],
    privado: 'R$ 3.165',
    facts: [
      ['Catégorie', 'Excursions à la journée au départ de Lençóis'],
      ['Distance à pied', '15 km'],
      ['Trajet en voiture', '290 km'],
      ['Niveau d’effort', 'Facile / Modéré'],
      ['Sites', `${ATRATIVOS_3.fr.replace(' et le belvédère', ', le belvédère')}, le marais de Marimbus et les piscines du Roncador`],
      ['Hébergement', 'Non inclus — si besoin, nous l’ajoutons'],
      ['Départ / retour', '8h00 / 18h00'],
    ],
    relacionados: ['chapada-especial-3-dias', 'chapada-extraordinaria-6-dias', 'pantanal-marimbus'],
  }),
  nl: pacoteLeve('nl', {
    meta: {
      title: 'Pakket Chapada Deslumbrante — 4 dagen',
      description: 'Vier dagen met Lençóis als uitvalsbasis: Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha en een dag per kano door het moeras van Marimbus naar de Poços do Roncador.',
      canonical: '/nl/avonturen/pakket-4-dagen',
    },
    duracao: '4 dagen',
    titulo: 'Chapada Deslumbrante in 4 dagen.',
    lead: 'De klassiekers van de Chapada, plus een dag per kano door het moeras van Marimbus.',
    sobre: {
      titulo: 'Over het pakket.',
      paragrafos: [
        'Voor wie maar een paar dagen in de Chapada Diamantina heeft en de bijzonderste plekken van de regio wil zien. In vier dagen combineert het pakket wandelen, watervallen, grotten, uitkijkpunten en een boottocht.',
        'Elke dag begint in Lençóis. De eerste dag breng je door in het Parque da Muritiba, vlak naast het stadje: daar stelt de gids je voor aan de Chapada — de geschiedenis, de geologie, de tijd van de diamantzoekers en wetenswaardigheden over planten en dieren.',
        'De dagen erna gaan we wat verder weg: de Waterval Mosquito en de Pai Inácio; grotten, de Pratinha en de zonsondergang op de Morro do Camelo; en als afsluiter de kanotocht door het moeras van Marimbus naar de Poços do Roncador.',
      ],
    },
    dias: [...DIAS_BASE.nl, DIA_MARIMBUS.nl],
    privado: 'R$ 3.165',
    facts: [
      ['Categorie', 'Dagtochten met Lençóis als uitvalsbasis'],
      ['Afstand te voet', '15 km'],
      ['Met de auto', '290 km'],
      ['Inspanning', 'Licht / Gemiddeld'],
      ['Bezienswaardigheden', `${ATRATIVOS_3.nl.replace(' en het uitkijkpunt', ', het uitkijkpunt')}, het moeras van Marimbus en de Poços do Roncador`],
      ['Overnachting', 'Niet inbegrepen — die voegen we toe als je wilt'],
      ['Vertrek / terugkeer', '8.00 / 18.00 uur'],
    ],
    relacionados: ['chapada-especial-3-dias', 'chapada-extraordinaria-6-dias', 'pantanal-marimbus'],
  }),
  de: pacoteLeve('de', {
    meta: {
      title: 'Paket Chapada Deslumbrante — 4 Tage',
      description: 'Vier Tage mit Lençóis als Ausgangspunkt: Muritiba, Mosquito, Pai Inácio, Gruta da Fumaça, Pratinha und ein Tag im Kanu durch das Sumpfgebiet Marimbus bis zu den Poços do Roncador.',
      canonical: '/de/abenteuer/paket-4-tage',
    },
    duracao: '4 Tage',
    titulo: 'Chapada Deslumbrante in 4 Tagen.',
    lead: 'Die Klassiker der Chapada, dazu ein Tag im Kanu durch das Sumpfgebiet Marimbus.',
    sobre: {
      titulo: 'Über das Paket.',
      paragrafos: [
        'Für alle, die nur wenige Tage in der Chapada Diamantina haben und die besondersten Orte der Region sehen möchten. In vier Tagen kombiniert das Paket Wanderungen, Wasserfälle, Höhlen, Aussichtspunkte und eine Bootstour.',
        'Jeder Tag beginnt in Lençóis. Den ersten Tag verbringst du im Parque da Muritiba, gleich neben dem Städtchen: Dort stellt dir der Guide die Chapada vor — die Geschichte, die Geologie, die Zeit der Diamantensucher und Wissenswertes über Pflanzen und Tiere.',
        'An den folgenden Tagen geht es etwas weiter hinaus: der Mosquito-Wasserfall und der Pai Inácio; Höhlen, die Pratinha und der Sonnenuntergang auf dem Morro do Camelo; und zum Abschluss die Kanutour durch das Sumpfgebiet Marimbus bis zu den Poços do Roncador.',
      ],
    },
    dias: [...DIAS_BASE.de, DIA_MARIMBUS.de],
    privado: 'R$ 3.165',
    facts: [
      ['Kategorie', 'Tagestouren mit Lençóis als Ausgangspunkt'],
      ['Strecke zu Fuß', '15 km'],
      ['Mit dem Auto', '290 km'],
      ['Anstrengung', 'Leicht / Mittel'],
      ['Sehenswürdigkeiten', `${ATRATIVOS_3.de.replace(' und der Aussichtspunkt', ', der Aussichtspunkt')}, das Sumpfgebiet Marimbus und die Poços do Roncador`],
      ['Unterkunft', 'Nicht inklusive — die fügen wir hinzu, wenn du möchtest'],
      ['Start / Rückkehr', '8:00 / 18:00 Uhr'],
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
  fr: ['Distance à pied', 'Trajet en voiture', 'Nuits d’hébergement', 'Lieux de baignade', 'Départ (Lençóis)'],
  nl: ['Afstand te voet', 'Met de auto', 'Nachten inbegrepen', 'Zwemplekken', 'Vertrek (Lençóis)'],
  de: ['Strecke zu Fuß', 'Mit dem Auto', 'Übernachtungen inklusive', 'Badestellen', 'Start (Lençóis)'],
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
  fr: [
    {
      titulo: 'Belvédère du Pati + Igrejinha',
      corpo: 'Départ de Lençóis à 7h30 pour le village de Guiné, où commence le sentier. Il faut environ 3 heures — 1 de montée raide et 2 sur terrain plat — pour atteindre le belvédère classique de la vallée du Pati. Après une collation, encore 1h30 jusqu’à l’Igrejinha, où seu João et sa famille accueillent le groupe dans leur maison d’hôtes.',
      distancia: '12 km',
      esforco: 'Modéré',
    },
    {
      titulo: 'Morro do Castelo + cascades',
      corpo: 'Après un petit-déjeuner copieux, départ à 8h00 vers le Morro do Castelo — la journée la plus exigeante, avec une montée à plus de 1 200 m d’altitude. Au sommet, trois belvédères et la Gruta da Lapinha, l’une des grottes les plus rares au monde, à plus de 1 000 m. Le retour se fait par un autre chemin, en passant par la cascade das Lajes et celle dos Funis, avec une arrivée à l’Igrejinha vers 18h00.',
      distancia: '18 km',
      esforco: 'Élevé',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'Au revoir à nos hôtes et départ à 8h00. Environ 3 heures jusqu’au belvédère du Cachoeirão, avec quelque 280 m de chute — à la saison des pluies, on peut compter jusqu’à 16 cascades autour de la vallée. Après la collation préparée par le guide, nous traversons les Gerais do Vieira jusqu’à la descente des Aleixos, où la voiture attend vers 17h00 pour le transfert jusqu’au Baixão, à Ibicoara.',
      distancia: '15 km',
      esforco: 'Modéré',
    },
    {
      titulo: 'Cascade du Buracão + Recanto Verde + Orquídeas',
      corpo: 'Trente minutes de voiture jusqu’au début du sentier, puis 3 km jusqu’au sommet de la cascade du Buracão, avec des baignades dans la cascade du Recanto Verde et celle das Orquídeas en chemin. Le sentier est tranquille, avec quelques passages raides et des escaliers. Au bord du canyon, un escalier en bois descend jusqu’à la rivière, et la suite se fait à la nage ou en escaladant jusqu’à la chute, avec un bassin cristallin pour nager. Au retour, déjeuner typique préparé par des habitants à l’entrée du parc, puis retour à l’hébergement au Baixão. Le rappel est en option.',
      distancia: '6 km',
      esforco: 'Facile / Modéré',
    },
    {
      titulo: 'Cascade da Fumacinha + cascade du Encontro',
      corpo: 'La marche commence dans le cerrado et suit sentiers et pistes de terre jusqu’au lit de la rivière, qui devient le chemin — avec des pauses baignade dans des bassins et de petites cascades. La dernière portion est la plus exigeante : on monte et on descend entre des canyons aux parois de plus de 100 m, et certains passages demandent un équipement de sécurité. À la Fumacinha, repos et contemplation ; le retour se fait par le même chemin. En fin d’après-midi, transfert du Baixão à Mucugê.',
      distancia: '18 km',
      esforco: 'Élevé',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'La journée la plus légère, après des jours intenses. Après le petit-déjeuner, route vers le Poço Encantado, un immense bassin souterrain aux eaux cristallines qui s’illumine de bleu — ici, on ne fait que contempler : la baignade est interdite pour préserver les formations. Après le déjeuner, le Poço Azul, semblable, mais où l’on peut flotter au-dessus d’une vingtaine de mètres d’eau transparente ; on y a retrouvé des fossiles de paresseux géant et de tigre à dents de sabre. Enfin, environ 2 heures de voiture jusqu’à Lençóis, où le forfait se termine.',
      distancia: 'Courtes marches',
      esforco: 'Facile',
    },
  ],
  nl: [
    {
      titulo: 'Uitkijkpunt Pati + Igrejinha',
      corpo: 'Om 7.30 uur vertrekken we uit Lençóis naar het dorp Guiné, waar het pad begint. Het is zo’n 3 uur — 1 uur steil klimmen en 2 uur over vlak terrein — naar het klassieke uitkijkpunt over de Vale do Pati. Na een snack nog anderhalf uur naar Igrejinha, waar Sr. João en zijn familie de groep ontvangen in hun gastenverblijf.',
      distancia: '12 km',
      esforco: 'Gemiddeld',
    },
    {
      titulo: 'Morro do Castelo + watervallen',
      corpo: 'Na een stevig ontbijt vertrekken we om 8.00 uur naar de Morro do Castelo — de zwaarste dag, met een klim tot boven de 1.200 m. Op de top zijn drie uitkijkpunten en de Gruta da Lapinha, een van de zeldzaamste grotten ter wereld, op meer dan 1.000 m. We gaan via een andere weg terug, langs de watervallen Lajes en Funis, en komen rond 18.00 uur aan in Igrejinha.',
      distancia: '18 km',
      esforco: 'Zwaar',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'We nemen afscheid van onze gastheren en vertrekken om 8.00 uur. Zo’n 3 uur naar het uitkijkpunt Cachoeirão, met een val van ongeveer 280 m — in het regenseizoen kun je tot 16 watervallen rondom het dal tellen. Na een snack die de gids klaarmaakt, lopen we verder door de Gerais do Vieira naar de afdaling van de Aleixos, waar rond 17.00 uur de auto klaarstaat voor de transfer naar Baixão, in Ibicoara.',
      distancia: '15 km',
      esforco: 'Gemiddeld',
    },
    {
      titulo: 'Waterval Buracão + Recanto Verde + Orquídeas',
      corpo: 'Dertig minuten met de auto naar het begin van het pad en 3 km naar de top van de Waterval Buracão, onderweg met een duik bij de watervallen Recanto Verde en Orquídeas. Het pad is rustig, met een paar steile stukken en trappen. Aan de rand van de canyon leidt een houten trap naar de rivier, en vandaar zwem of klauter je naar de waterval, die een kristalhelder bad heeft om in te zwemmen. Op de terugweg een regionale lunch, gekookt door mensen uit de buurt bij de ingang van het park, en dan terug naar het gastenverblijf in Baixão. Abseilen is optioneel.',
      distancia: '6 km',
      esforco: 'Licht / Gemiddeld',
    },
    {
      titulo: 'Waterval Fumacinha + Waterval Encontro',
      corpo: 'De wandeling begint in de cerrado en volgt paden en onverharde wegen naar de rivierbedding, die vervolgens het pad wordt — met stops om te zwemmen in poelen en kleine watervallen. Het laatste stuk is het zwaarst: op en neer door canyons met wanden van meer dan 100 m hoog, en sommige passages vragen om veiligheidsuitrusting. Bij de Fumacinha is er tijd om uit te rusten en alles in je op te nemen; de terugweg gaat via dezelfde route. Laat in de middag transfer van Baixão naar Mucugê.',
      distancia: '18 km',
      esforco: 'Zwaar',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'De lichtste dag, na een paar intensieve dagen. Na het ontbijt rijden we naar de Poço Encantado, een enorm ondergronds bad met kristalhelder water dat blauw oplicht — hier kijk je alleen: zwemmen is verboden om de formaties te beschermen. Na de lunch de Poço Azul, vergelijkbaar, maar hier kun je drijven boven zo’n 20 m helder water, waar fossielen van reuzenluiaards en sabeltandkatten zijn gevonden. Tot slot zo’n 2 uur met de auto naar Lençóis, waar het pakket eindigt.',
      distancia: 'Korte stukken',
      esforco: 'Licht',
    },
  ],
  de: [
    {
      titulo: 'Aussichtspunkt Pati + Igrejinha',
      corpo: 'Um 7:30 Uhr fahren wir von Lençóis zum Dorf Guiné, wo der Weg beginnt. Es sind rund 3 Stunden — 1 Stunde steiler Anstieg und 2 Stunden über flaches Gelände — bis zum klassischen Aussichtspunkt über das Vale do Pati. Nach einem Snack noch anderthalb Stunden bis Igrejinha, wo Sr. João und seine Familie die Gruppe in ihrer Herberge empfangen.',
      distancia: '12 km',
      esforco: 'Mittel',
    },
    {
      titulo: 'Morro do Castelo + Wasserfälle',
      corpo: 'Nach einem kräftigen Frühstück brechen wir um 8:00 Uhr zum Morro do Castelo auf — der anstrengendste Tag, mit einem Aufstieg auf über 1.200 m. Auf dem Gipfel gibt es drei Aussichtspunkte und die Gruta da Lapinha, eine der seltensten Höhlen der Welt, auf über 1.000 m. Zurück geht es auf einem anderen Weg, vorbei an den Wasserfällen Lajes und Funis, und gegen 18:00 Uhr kommen wir in Igrejinha an.',
      distancia: '18 km',
      esforco: 'Schwer',
    },
    {
      titulo: 'Cachoeirão + Aleixos',
      corpo: 'Wir verabschieden uns von unseren Gastgebern und brechen um 8:00 Uhr auf. Rund 3 Stunden bis zum Aussichtspunkt Cachoeirão, mit einem Fall von etwa 280 m — in der Regenzeit kannst du bis zu 16 Wasserfälle rund ums Tal zählen. Nach einem Snack, den der Guide zubereitet, gehen wir weiter durch die Gerais do Vieira bis zum Abstieg der Aleixos, wo gegen 17:00 Uhr das Auto für den Transfer nach Baixão, in Ibicoara, bereitsteht.',
      distancia: '15 km',
      esforco: 'Mittel',
    },
    {
      titulo: 'Buracão-Wasserfall + Recanto Verde + Orquídeas',
      corpo: 'Dreißig Minuten mit dem Auto bis zum Beginn des Weges und 3 km bis zur Oberkante des Buracão-Wasserfalls, unterwegs mit einem Bad an den Wasserfällen Recanto Verde und Orquídeas. Der Weg ist ruhig, mit ein paar steilen Abschnitten und Treppen. Am Rand des Canyons führt eine Holztreppe zum Fluss, und von dort schwimmst oder kletterst du zum Wasserfall, der ein kristallklares Becken zum Baden hat. Auf dem Rückweg ein regionales Mittagessen, gekocht von Menschen aus der Umgebung am Parkeingang, und dann zurück zur Herberge in Baixão. Abseilen ist optional.',
      distancia: '6 km',
      esforco: 'Leicht / Mittel',
    },
    {
      titulo: 'Fumacinha-Wasserfall + Encontro-Wasserfall',
      corpo: 'Die Wanderung beginnt im Cerrado und folgt Pfaden und Schotterwegen bis zum Flussbett, das dann zum Weg wird — mit Badestopps in Becken und an kleinen Wasserfällen. Der letzte Abschnitt ist der anstrengendste: auf und ab durch Canyons mit über 100 m hohen Wänden, und manche Passagen verlangen Sicherheitsausrüstung. An der Fumacinha ist Zeit zum Ausruhen und Staunen; zurück geht es auf derselben Route. Am späten Nachmittag Transfer von Baixão nach Mucugê.',
      distancia: '18 km',
      esforco: 'Schwer',
    },
    {
      titulo: 'Poço Encantado + Poço Azul',
      corpo: 'Der leichteste Tag, nach ein paar intensiven Tagen. Nach dem Frühstück fahren wir zum Poço Encantado, einem riesigen unterirdischen Becken mit kristallklarem Wasser, das blau leuchtet — hier schaust du nur: Baden ist verboten, um die Formationen zu schützen. Nach dem Mittagessen der Poço Azul, ähnlich, aber hier kannst du über rund 20 m klarem Wasser treiben, in dem Fossilien von Riesenfaultieren und Säbelzahnkatzen gefunden wurden. Zum Schluss rund 2 Stunden mit dem Auto nach Lençóis, wo das Paket endet.',
      distancia: 'Kurze Strecken',
      esforco: 'Leicht',
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
  fr: {
    requiredColumns: [
      ['Eau (1,5 L par personne)', 'Chaussures ou bottes de randonnée', 'Chaussettes de rechange', 'Deux tenues légères de rechange', 'Maillot de bain', 'Tenue pour dormir (il peut faire 15 °C)', 'Casquette ou chapeau'],
      ['Crème solaire', 'Anti-moustiques', 'Médicaments personnels', 'Pièce d’identité', 'Sac de trek (40 L ou plus)', 'Petit sac à dos (10 L ou plus)', 'Imperméable', 'Lampe frontale ou torche'],
    ],
    recommendedColumns: [['Serviette fine', 'Bâton de marche'], ['En-cas ou fruit', 'Espèces pour les boissons']],
    note: 'Pendant les trois jours dans le Pati, vous portez votre propre sac : plus il est léger, mieux c’est. Si vous préférez ne pas porter de charge, renseignez-vous sur l’option porteur ou mule.',
  },
  nl: {
    requiredColumns: [
      ['Water (1,5 L per persoon)', 'Wandelschoenen', 'Extra sokken', 'Twee sets lichte kleding', 'Zwemkleding', 'Nachtkleding (het kan 15 °C worden)', 'Pet of hoed'],
      ['Zonnebrand', 'Insectenwerend middel', 'Persoonlijke medicijnen', 'Identiteitsbewijs', 'Trekkingrugzak (40 L of meer)', 'Dagrugzak (10 L of meer)', 'Regenjas', 'Zaklamp'],
    ],
    recommendedColumns: [['Dunne handdoek', 'Wandelstok'], ['Snack of fruit', 'Contant geld voor drankjes']],
    note: 'Tijdens de drie dagen in de Pati draag je je eigen rugzak: hoe lichter, hoe beter. Wil je liever geen gewicht dragen, vraag dan naar een drager of een muilezel.',
  },
  de: {
    requiredColumns: [
      ['Wasser (1,5 L pro Person)', 'Wanderschuhe', 'Ersatzsocken', 'Zwei Garnituren leichte Kleidung', 'Badesachen', 'Schlafkleidung (es kann 15 °C werden)', 'Kappe oder Hut'],
      ['Sonnencreme', 'Insektenschutz', 'Persönliche Medikamente', 'Ausweis', 'Trekkingrucksack (ab 40 L)', 'Tagesrucksack (ab 10 L)', 'Regenjacke', 'Taschenlampe'],
    ],
    recommendedColumns: [['Dünnes Handtuch', 'Wanderstock'], ['Snack oder Obst', 'Bargeld für Getränke']],
    note: 'Während der drei Tage im Pati trägst du deinen eigenen Rucksack: Je leichter, desto besser. Wenn du lieber kein Gewicht tragen möchtest, frag nach einem Träger oder einem Maultier.',
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
  fr: {
    included: ['Guide de montagne bilingue formé WAFA (selon disponibilité)', 'Balise satellite SPOT X (selon disponibilité)', 'Transferts Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Hébergement (5 nuits)', 'Repas pendant le forfait — signalez vos restrictions', 'Assurance aventure', 'Trousse de premiers secours'],
    excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Dîner des 5e et 6e jours', 'Boissons supplémentaires', 'Équipement personnel', 'Évacuation médicale', 'Porteur personnel ou mules', 'Hôtels et repas avant et après le forfait', 'Pourboires pour services supplémentaires (photos et autres aides)'],
  },
  nl: {
    included: ['Tweetalige berggids met WAFA-opleiding (afhankelijk van beschikbaarheid)', 'SPOT X-satelliettracker (afhankelijk van beschikbaarheid)', 'Transfers Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Overnachting (5 nachten)', 'Maaltijden tijdens het pakket — geef dieetwensen door', 'Avonturenverzekering', 'EHBO-kit'],
    excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Avondeten op dag 5 en 6', 'Extra drankjes', 'Persoonlijke uitrusting', 'Medische evacuatie', 'Persoonlijke drager of muilezels', 'Hotels en maaltijden voor en na het pakket', 'Fooien voor extra diensten (foto’s en andere hulp)'],
  },
  de: {
    included: ['Zweisprachiger Bergführer mit WAFA-Ausbildung (je nach Verfügbarkeit)', 'SPOT-X-Satellitentracker (je nach Verfügbarkeit)', 'Transfers Lençóis × Guiné × Ibicoara × Mucugê × Lençóis', 'Unterkunft (5 Nächte)', 'Mahlzeiten während des Pakets — teile Ernährungswünsche mit', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
    excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Abendessen an Tag 5 und 6', 'Zusätzliche Getränke', 'Persönliche Ausrüstung', 'Medizinische Evakuierung', 'Persönlicher Träger oder Maultiere', 'Hotels und Mahlzeiten vor und nach dem Paket', 'Trinkgelder für zusätzliche Leistungen (Fotos und andere Hilfe)'],
  },
};

const RISCO_6: Record<Locale, string> = {
  pt: 'Os três primeiros dias são trekking dentro do Vale do Pati, longe de estrada. O Morro do Castelo e a Fumacinha são os trechos mais exigentes, com subidas fortes, leito de rio e passagens que pedem equipamento de segurança — e é ali que um resgate mais demora.',
  en: 'The first three days are a trek inside the Pati Valley, far from any road. Morro do Castelo and Fumacinha are the most demanding stretches, with steep climbs, riverbed walking and passages that call for safety gear — and that is where a rescue takes longest.',
  es: 'Los tres primeros días son trekking dentro del Valle del Pati, lejos de cualquier ruta. El Morro do Castelo y la Fumacinha son los tramos más exigentes, con subidas fuertes, lecho de río y pasos que piden equipo de seguridad — y es ahí donde un rescate más tarda.',
  fr: 'Les trois premiers jours sont un trek au cœur de la vallée du Pati, loin de toute route. Le Morro do Castelo et la Fumacinha sont les portions les plus exigeantes, avec de fortes montées, de la marche dans le lit de la rivière et des passages qui demandent un équipement de sécurité — et c’est là qu’un secours met le plus de temps à arriver.',
  nl: 'De eerste drie dagen zijn een trektocht door de Vale do Pati, ver van elke weg. De Morro do Castelo en de Fumacinha zijn de zwaarste stukken, met steile klimmen, lopen door de rivierbedding en passages die om veiligheidsuitrusting vragen — en juist daar duurt een redding het langst.',
  de: 'Die ersten drei Tage sind eine Trekkingtour im Vale do Pati, fernab jeder Straße. Der Morro do Castelo und die Fumacinha sind die anspruchsvollsten Abschnitte, mit steilen Anstiegen, Wegen im Flussbett und Passagen, die Sicherheitsausrüstung verlangen — und gerade dort dauert eine Rettung am längsten.',
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
      titulo: { pt: ['Seis dias,', 'a Chapada de ponta a ponta.'], en: ['Six days,', 'the Chapada end to end.'], es: ['Seis días,', 'la Chapada de punta a punta.'], fr: ['Six jours,', 'la Chapada de bout en bout.'], nl: ['Zes dagen,', 'de Chapada van begin tot eind.'], de: ['Sechs Tage,', 'die Chapada von Anfang bis Ende.'] }[locale] as [string, string],
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
    precos: ['R$ 5.100', 'R$ 4.250'],
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
    precos: ['R$ 5,100', 'R$ 4,250'],
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
    precos: ['R$ 5.100', 'R$ 4.250'],
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
  fr: pacote6('fr', {
    meta: {
      title: 'Forfait Chapada Extraordinaire — 6 jours',
      description: 'Six jours, dont trois de trek dans la vallée du Pati, plus la cascade du Buracão, la cascade da Fumacinha, le Poço Encantado et le Poço Azul. Hébergement et repas inclus.',
      canonical: '/fr/aventures/forfait-6-jours',
    },
    nivel: 'Modéré / Élevé',
    duracao: '6 jours',
    titulo: 'Chapada Extraordinaire en 6 jours.',
    lead: 'Trois jours dans la vallée du Pati, les canyons du Buracão et de la Fumacinha et les bassins bleus du sud de la Chapada.',
    sobre: {
      titulo: 'À propos du forfait.',
      paragrafos: [
        'Pour celles et ceux qui ont plus de temps dans la Chapada Diamantina et veulent découvrir les lieux les plus emblématiques de la région. En six jours, le forfait réunit trek, canyoning, tourisme communautaire et les sites les plus saisissants.',
        'Le départ se fait de Lençóis, avec une option de transfert depuis Palmeiras ou le village de Guiné (Mucugê). Les trois premiers jours suivent le parcours classique de la vallée du Pati : belvédère da Rampa, Igrejinha, Morro do Castelo, Gruta da Lapinha, cascade dos Funis et le Cachoeirão vu d’en haut, en dormant chez l’habitant.',
        'Ensuite, la base se déplace dans la campagne d’Ibicoara, d’où l’on rejoint la cascade du Buracão (rappel en option) et, le lendemain, la cascade da Fumacinha. Le dernier jour, nous rentrons à Lençóis en passant par le Poço Encantado et le Poço Azul.',
      ],
    },
    precos: ['R$ 5.100', 'R$ 4.250'],
    grupoNota: 'De 2 à 7 personnes. Conditions spéciales pour les groupes — renseignez-vous.',
    facts: [
      ['Catégorie', 'Trek + excursions à la journée'],
      ['Distance à pied', '57 km'],
      ['Trajet en voiture', '510 km'],
      ['Niveau d’effort', 'Modéré / Élevé'],
      ['Sites', 'Vallée du Pati (3 jours), cascade du Buracão, cascade da Fumacinha, Poço Encantado et Poço Azul'],
      ['Hébergement', 'Chambre partagée chez l’habitant dans le Pati (prévenez-nous si vous avez besoin d’une chambre privée) ; chambres privées avec salle de bain à Ibicoara et Mucugê'],
      ['Lieux de baignade', '8'],
      ['Départ / retour', '7h30 / 20h00'],
    ],
    fitness: 'Une condition physique permettant d’enchaîner montées et descentes raides sur terrain accidenté, traversées de rivières et de ruisseaux, passages d’escalade facile et longues distances.',
  }),
  nl: pacote6('nl', {
    meta: {
      title: 'Pakket Chapada Extraordinária — 6 dagen',
      description: 'Zes dagen, waarvan drie trekken door de Vale do Pati, plus de Waterval Buracão, de Waterval Fumacinha, de Poço Encantado en de Poço Azul. Overnachting en maaltijden inbegrepen.',
      canonical: '/nl/avonturen/pakket-6-dagen',
    },
    nivel: 'Gemiddeld / Zwaar',
    duracao: '6 dagen',
    titulo: 'Chapada Extraordinária in 6 dagen.',
    lead: 'Drie dagen Vale do Pati, de canyons van de Buracão en de Fumacinha, en de blauwe poelen in het zuiden van de Chapada.',
    sobre: {
      titulo: 'Over het pakket.',
      paragrafos: [
        'Voor wie meer tijd in de Chapada Diamantina heeft en de meest iconische plekken van de regio wil leren kennen. In zes dagen combineert het pakket trekking, canyoning, kleinschalig toerisme met lokale gemeenschappen en de indrukwekkendste bezienswaardigheden van de streek.',
        'Het begint in Lençóis, met de mogelijkheid van een transfer vanuit Palmeiras of het dorp Guiné (Mucugê). De eerste drie dagen volgen de klassieke route door de Vale do Pati: het uitkijkpunt Rampa, Igrejinha, de Morro do Castelo, de Gruta da Lapinha, de Waterval Funis en de Cachoeirão van bovenaf, met overnachtingen bij lokale families.',
        'Daarna verhuist de uitvalsbasis naar het platteland rond Ibicoara, vanwaar we de Waterval Buracão bereiken (met optioneel abseilen) en, de dag erna, de Waterval Fumacinha. Op de laatste dag gaan we terug naar Lençóis via de Poço Encantado en de Poço Azul.',
      ],
    },
    precos: ['R$ 5.100', 'R$ 4.250'],
    grupoNota: 'Van 2 tot 7 personen. Speciale voorwaarden voor groepen — vraag het ons.',
    facts: [
      ['Categorie', 'Trektocht + dagtochten'],
      ['Afstand te voet', '57 km'],
      ['Met de auto', '510 km'],
      ['Inspanning', 'Gemiddeld / Zwaar'],
      ['Bezienswaardigheden', 'Vale do Pati (3 dagen), Waterval Buracão, Waterval Fumacinha, Poço Encantado en Poço Azul'],
      ['Overnachting', 'Gedeelde kamer bij lokale families in de Pati (laat het weten als je een eigen kamer nodig hebt); eigen kamers met badkamer in Ibicoara en Mucugê'],
      ['Zwemplekken', '8'],
      ['Vertrek / terugkeer', '7.30 / 20.00 uur'],
    ],
    fitness: 'Conditie voor steile klimmen en afdalingen op ruig terrein, het oversteken van rivieren en beken, klauteren en lange afstanden.',
  }),
  de: pacote6('de', {
    meta: {
      title: 'Paket Chapada Extraordinária — 6 Tage',
      description: 'Sechs Tage, davon drei Trekking durch das Vale do Pati, dazu der Buracão-Wasserfall, der Fumacinha-Wasserfall, der Poço Encantado und der Poço Azul. Unterkunft und Mahlzeiten inklusive.',
      canonical: '/de/abenteuer/paket-6-tage',
    },
    nivel: 'Mittel / Schwer',
    duracao: '6 Tage',
    titulo: 'Chapada Extraordinária in 6 Tagen.',
    lead: 'Drei Tage Vale do Pati, die Canyons des Buracão und der Fumacinha und die blauen Becken im Süden der Chapada.',
    sobre: {
      titulo: 'Über das Paket.',
      paragrafos: [
        'Für alle, die mehr Zeit in der Chapada Diamantina haben und die bekanntesten Orte der Region kennenlernen möchten. In sechs Tagen kombiniert das Paket Trekking, Canyoning, sanften Tourismus mit lokalen Gemeinschaften und die eindrucksvollsten Sehenswürdigkeiten der Gegend.',
        'Es beginnt in Lençóis, mit der Möglichkeit eines Transfers ab Palmeiras oder dem Dorf Guiné (Mucugê). Die ersten drei Tage folgen der klassischen Route durch das Vale do Pati: der Aussichtspunkt Rampa, Igrejinha, der Morro do Castelo, die Gruta da Lapinha, der Funis-Wasserfall und der Cachoeirão von oben, mit Übernachtungen bei einheimischen Familien.',
        'Danach zieht der Ausgangspunkt aufs Land rund um Ibicoara, von wo wir den Buracão-Wasserfall erreichen (mit optionalem Abseilen) und am Tag darauf den Fumacinha-Wasserfall. Am letzten Tag geht es über den Poço Encantado und den Poço Azul zurück nach Lençóis.',
      ],
    },
    precos: ['R$ 5.100', 'R$ 4.250'],
    grupoNota: 'Von 2 bis 7 Personen. Besondere Konditionen für Gruppen — frag uns.',
    facts: [
      ['Kategorie', 'Trekking + Tagestouren'],
      ['Strecke zu Fuß', '57 km'],
      ['Mit dem Auto', '510 km'],
      ['Anstrengung', 'Mittel / Schwer'],
      ['Sehenswürdigkeiten', 'Vale do Pati (3 Tage), Buracão-Wasserfall, Fumacinha-Wasserfall, Poço Encantado und Poço Azul'],
      ['Unterkunft', 'Gemeinschaftszimmer bei einheimischen Familien im Pati (sag Bescheid, wenn du ein eigenes Zimmer brauchst); eigene Zimmer mit Bad in Ibicoara und Mucugê'],
      ['Badestellen', '8'],
      ['Start / Rückkehr', '7:30 / 20:00 Uhr'],
    ],
    fitness: 'Kondition für steile Auf- und Abstiege auf rauem Gelände, das Durchqueren von Flüssen und Bächen, Kletterpassagen und lange Strecken.',
  }),
};
