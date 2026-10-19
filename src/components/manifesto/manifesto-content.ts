/**
 * Manifesto por idioma.
 *
 * PT é o texto de mamut.agency/manifesto e EN o de mamut.agency/en/manifest —
 * os dois na íntegra e na ordem original. ES, FR e NL são tradução feita neste
 * repositório: a operadora não publica versão em espanhol, francês nem holandês.
 *
 * Cada parágrafo é uma lista de trechos. String simples é texto corrido;
 * `{ mark }` é o que o original destaca em negrito — por isso o parágrafo não
 * cabe numa string só.
 */

import type { Locale } from '@/lib/site';

export type Trecho = string | { mark: string };

export type ManifestoContent = {
  meta: { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string };
  titulo: { antes: string; destaque: string };
  paragrafos: Trecho[][];
};

export const MANIFESTO_CONTENT: Record<Locale, ManifestoContent> = {
  pt: {
    meta: {
      title: 'Manifesto',
      description:
        'Somos mais do que uma agência de ecoturismo. Somos defensores da Serra do Sincorá, das tradições locais e dos nossos ancestrais.',
      canonical: '/pt/manifesto',
      ogTitle: 'Manifesto da Mamut Trekking',
      ogDescription:
        'Nascemos para caminhar e caminhamos para viver, honrando a teia da vida que une todos no Universo.',
    },
    titulo: { antes: 'É dessa memória', destaque: 'que nascemos.' },
    paragrafos: [
      [
        'Na imensidão dos mega continentes, os mamutes caminharam por longas distâncias e em grandes grupos, ',
        { mark: 'marcando sua existência para sempre' },
        ' no planeta. Naturalmente, somos ',
        { mark: 'um bando que reúne o mundo inteiro' },
        ', no que um dia foi o “miolo” da terra, a Chapada Diamantina.',
      ],
      [
        'Somos mais do que uma agência de ecoturismo. Somos defensores da Serra do Sincorá, das tradições locais e dos nossos ancestrais. Construímos ',
        { mark: 'pontes entre a humanidade e o mundo natural' },
        ' (que precisam ser reconstruídas com muita urgência). Assim como os antigos mamutes, ',
        { mark: 'caminhamos por amor, solidariedade, respeito, resistência…' },
        ' ',
        { mark: 'Nascemos para caminhar e caminhamos para viver' },
        ', assim honrando a teia da vida que une todos no Universo.',
      ],
      [
        'Nossa força não reside apenas em nossa imponência, mas também em nossa ',
        { mark: 'memória e inteligência' },
        '. Que nunca nos permite esquecer de onde viemos na mesma medida em que sabemos muito bem para onde queremos ir. Além de toda perspicácia para admirar o presente que ganhamos todos os dias, a beleza dos caminhos e dos processos.',
      ],
      [
        'Assim como os mamutes protegiam os membros de seu bando, estamos aqui para garantir a segurança e o bem-estar de nossos viajantes. Além dos protocolos rigorosos que refletem em experiências seguras e inesquecíveis, ',
        { mark: 'prezamos profundamente pela experiência de quem cruza o nosso caminho.' },
      ],
      [
        { mark: 'Junte-se ao nosso bando.' },
        ' Juntos, vamos explorar, aprender e celebrar a beleza e a diversidade do mundo, lembrando sempre que ',
        { mark: 'somos parte de algo maior' },
        ', algo digno de proteção e admiração.',
      ],
      [
        'Sejam bem-vindos à Chapada Diamantina e à Mamut, onde a natureza é nossa casa e a comunidade é nossa família, onde acreditamos em um mundo mais solidário e consciente para todos. Juntos, somos mais fortes. Juntos, somos imponentes. Juntos, deixaremos marcados o respeito, compromisso e amor pela terra que chamamos de casa.',
      ],
    ],
  },

  en: {
    meta: {
      title: 'Manifesto',
      description:
        'We are more than an ecotourism agency. We are defenders of the Serra do Sincorá, of local traditions and of our ancestors.',
      canonical: '/en/manifesto',
      ogTitle: 'The Mamut Trekking manifesto',
      ogDescription:
        'We were born to walk and we walk to live, honouring the web of life that unites everyone in the Universe.',
    },
    titulo: { antes: 'That memory is', destaque: 'where we come from.' },
    paragrafos: [
      [
        'In the immensity of the mega continents, mammoths walked long distances and in large groups, ',
        { mark: 'marking their existence forever' },
        ' on the planet. Naturally, we are ',
        { mark: 'a herd that brings together the whole world' },
        ', in what was once the “core” of the earth, the Chapada Diamantina.',
      ],
      [
        'We are more than an ecotourism agency. We are defenders of the Serra do Sincorá, of local traditions and of our ancestors. We build ',
        { mark: 'bridges between humanity and the natural world' },
        ' (which need to be rebuilt very urgently). Just like the ancient mammoths, ',
        { mark: 'we walk out of love, solidarity, respect, resistance…' },
        ' ',
        { mark: 'We were born to walk and we walk to live' },
        ', thus honouring the web of life that unites everyone in the Universe.',
      ],
      [
        'Our strength lies not only in our grandeur, but also in our ',
        { mark: 'memory and intelligence' },
        '. That never allows us to forget where we came from, to the same extent that we know very well where we want to go. In addition to all the insight to admire the gift we receive every day, the beauty of the paths and of the processes.',
      ],
      [
        'Just as mammoths protected the members of their herd, we are here to ensure the safety and well-being of our travellers. In addition to the rigorous protocols that result in safe and unforgettable experiences, ',
        { mark: 'we deeply value the experience of those who cross our path.' },
      ],
      [
        { mark: 'Join our herd.' },
        ' Together, we will explore, learn and celebrate the beauty and diversity of the world, always remembering that ',
        { mark: 'we are part of something bigger' },
        ', something worthy of protection and admiration.',
      ],
      [
        'Welcome to the Chapada Diamantina and to Mamut, where nature is our home and the community is our family, where we believe in a more supportive and conscious world for everyone. Together we are stronger. Together, we are imposing. Together, we will leave a mark of our respect, commitment and love for the land we call home.',
      ],
    ],
  },

  es: {
    meta: {
      title: 'Manifiesto',
      description:
        'Somos más que una agencia de ecoturismo. Somos defensores de la Serra do Sincorá, de las tradiciones locales y de nuestros ancestros.',
      canonical: '/es/manifiesto',
      ogTitle: 'El manifiesto de Mamut Trekking',
      ogDescription:
        'Nacimos para caminar y caminamos para vivir, honrando la red de la vida que une a todos en el Universo.',
    },
    titulo: { antes: 'De esa memoria', destaque: 'nacimos.' },
    paragrafos: [
      [
        'En la inmensidad de los megacontinentes, los mamuts caminaron largas distancias y en grandes grupos, ',
        { mark: 'marcando su existencia para siempre' },
        ' en el planeta. Naturalmente, somos ',
        { mark: 'una manada que reúne al mundo entero' },
        ', en lo que un día fue el “corazón” de la tierra, la Chapada Diamantina.',
      ],
      [
        'Somos más que una agencia de ecoturismo. Somos defensores de la Serra do Sincorá, de las tradiciones locales y de nuestros ancestros. Construimos ',
        { mark: 'puentes entre la humanidad y el mundo natural' },
        ' (que necesitan ser reconstruidos con mucha urgencia). Así como los antiguos mamuts, ',
        { mark: 'caminamos por amor, solidaridad, respeto, resistencia…' },
        ' ',
        { mark: 'Nacimos para caminar y caminamos para vivir' },
        ', honrando así la red de la vida que une a todos en el Universo.',
      ],
      [
        'Nuestra fuerza no reside solo en nuestra imponencia, sino también en nuestra ',
        { mark: 'memoria e inteligencia' },
        '. Que nunca nos permite olvidar de dónde venimos, en la misma medida en que sabemos muy bien hacia dónde queremos ir. Además de toda la perspicacia para admirar el regalo que recibimos cada día, la belleza de los caminos y de los procesos.',
      ],
      [
        'Así como los mamuts protegían a los miembros de su manada, estamos acá para garantizar la seguridad y el bienestar de nuestros viajeros. Además de los protocolos rigurosos que se traducen en experiencias seguras e inolvidables, ',
        { mark: 'valoramos profundamente la experiencia de quien cruza nuestro camino.' },
      ],
      [
        { mark: 'Sumate a nuestra manada.' },
        ' Juntos vamos a explorar, aprender y celebrar la belleza y la diversidad del mundo, recordando siempre que ',
        { mark: 'somos parte de algo mayor' },
        ', algo digno de protección y admiración.',
      ],
      [
        'Bienvenidos a la Chapada Diamantina y a Mamut, donde la naturaleza es nuestra casa y la comunidad es nuestra familia, donde creemos en un mundo más solidario y consciente para todos. Juntos somos más fuertes. Juntos somos imponentes. Juntos dejaremos marcados el respeto, el compromiso y el amor por la tierra que llamamos casa.',
      ],
    ],
  },

  fr: {
    meta: {
      title: 'Manifeste',
      description:
        'Nous sommes plus qu’une agence d’écotourisme. Nous défendons la Serra do Sincorá, les traditions locales et nos ancêtres.',
      canonical: '/fr/manifeste',
      ogTitle: 'Le manifeste de Mamut Trekking',
      ogDescription:
        'Nous sommes nés pour marcher et nous marchons pour vivre, en honorant la toile de la vie qui unit tous les êtres de l’Univers.',
    },
    titulo: { antes: 'C’est de cette mémoire', destaque: 'que nous sommes nés.' },
    paragrafos: [
      [
        'Dans l’immensité des mégacontinents, les mammouths ont parcouru de longues distances en grandes hardes, ',
        { mark: 'marquant pour toujours leur existence' },
        ' sur la planète. Tout naturellement, nous sommes ',
        { mark: 'une harde qui rassemble le monde entier' },
        ', dans ce qui fut autrefois le « cœur » de la terre : la Chapada Diamantina.',
      ],
      [
        'Nous sommes plus qu’une agence d’écotourisme. Nous défendons la Serra do Sincorá, les traditions locales et nos ancêtres. Nous construisons ',
        { mark: 'des ponts entre l’humanité et le monde naturel' },
        ' (des ponts qu’il est urgent de rebâtir). Comme les mammouths d’autrefois, ',
        { mark: 'nous marchons par amour, solidarité, respect, résistance…' },
        ' ',
        { mark: 'Nous sommes nés pour marcher et nous marchons pour vivre' },
        ', et nous honorons ainsi la toile de la vie qui unit tous les êtres de l’Univers.',
      ],
      [
        'Notre force ne tient pas seulement à notre stature, mais aussi à notre ',
        { mark: 'mémoire et à notre intelligence' },
        '. Elles ne nous laissent jamais oublier d’où nous venons, tout comme nous savons très bien où nous voulons aller. Sans oublier la sagacité qu’il faut pour admirer le présent qui nous est offert chaque jour, la beauté des chemins et des cheminements.',
      ],
      [
        'Comme les mammouths protégeaient les membres de leur harde, nous sommes là pour garantir la sécurité et le bien-être de nos voyageurs. Au-delà de protocoles rigoureux qui se traduisent par des expériences sûres et inoubliables, ',
        { mark: 'nous tenons profondément à l’expérience de chaque personne qui croise notre chemin.' },
      ],
      [
        { mark: 'Rejoignez notre harde.' },
        ' Ensemble, explorons, apprenons et célébrons la beauté et la diversité du monde, sans jamais oublier que ',
        { mark: 'nous faisons partie de quelque chose de plus grand' },
        ', quelque chose qui mérite d’être protégé et admiré.',
      ],
      [
        'Bienvenue dans la Chapada Diamantina et chez Mamut, où la nature est notre maison et la communauté notre famille, où nous croyons en un monde plus solidaire et plus conscient pour tous. Ensemble, nous sommes plus forts. Ensemble, nous sommes imposants. Ensemble, nous laisserons l’empreinte de notre respect, de notre engagement et de notre amour pour la terre que nous appelons notre maison.',
      ],
    ],
  },
  nl: {
    meta: {
      title: 'Manifest',
      description:
        'We zijn meer dan een ecotoerismebureau. We zijn verdedigers van de Serra do Sincorá, van de lokale tradities en van onze voorouders.',
      canonical: '/nl/manifest',
      ogTitle: 'Het manifest van Mamut Trekking',
      ogDescription:
        'We zijn geboren om te lopen en we lopen om te leven, en zo eren we het web van het leven dat iedereen in het universum verbindt.',
    },
    titulo: { antes: 'Uit die herinnering', destaque: 'komen wij voort.' },
    paragrafos: [
      [
        'In de onmetelijkheid van de megacontinenten liepen mammoeten lange afstanden in grote groepen, ',
        { mark: 'en lieten ze voor altijd hun sporen na' },
        ' op de planeet. Vanzelfsprekend zijn wij ',
        { mark: 'een kudde die de hele wereld samenbrengt' },
        ', in wat ooit het “hart” van de aarde was: de Chapada Diamantina.',
      ],
      [
        'We zijn meer dan een ecotoerismebureau. We zijn verdedigers van de Serra do Sincorá, van de lokale tradities en van onze voorouders. We bouwen ',
        { mark: 'bruggen tussen de mensheid en de natuurlijke wereld' },
        ' (die dringend opnieuw gebouwd moeten worden). Net als de mammoeten van weleer ',
        { mark: 'lopen we uit liefde, solidariteit, respect, verzet…' },
        ' ',
        { mark: 'We zijn geboren om te lopen en we lopen om te leven' },
        ', en zo eren we het web van het leven dat iedereen in het universum verbindt.',
      ],
      [
        'Onze kracht zit niet alleen in onze grootsheid, maar ook in ons ',
        { mark: 'geheugen en onze intelligentie' },
        '. Die laten ons nooit vergeten waar we vandaan komen, net zoals we heel goed weten waar we naartoe willen. Daarbij komt het inzicht om het geschenk te bewonderen dat we elke dag krijgen: de schoonheid van de paden en van de weg ernaartoe.',
      ],
      [
        'Zoals mammoeten de leden van hun kudde beschermden, zijn wij hier om te zorgen voor de veiligheid en het welzijn van onze reizigers. Naast de strenge protocollen die zorgen voor veilige en onvergetelijke ervaringen, ',
        { mark: 'hechten we veel waarde aan de ervaring van iedereen die ons pad kruist.' },
      ],
      [
        { mark: 'Sluit je aan bij onze kudde.' },
        ' Samen gaan we de schoonheid en de diversiteit van de wereld verkennen, ervan leren en vieren, altijd in het besef dat ',
        { mark: 'we deel zijn van iets groters' },
        ', iets dat bescherming en bewondering verdient.',
      ],
      [
        'Welkom in de Chapada Diamantina en bij Mamut, waar de natuur ons huis is en de gemeenschap onze familie, waar we geloven in een wereld die solidairder en bewuster is, voor iedereen. Samen zijn we sterker. Samen zijn we indrukwekkend. Samen laten we ons respect, onze toewijding en onze liefde achter voor het land dat we ons thuis noemen.',
      ],
    ],
  },
  de: {
    meta: {
      title: 'Manifest',
      description:
        'Wir sind mehr als eine Ökotourismus-Agentur. Wir sind Verteidiger der Serra do Sincorá, der lokalen Traditionen und unserer Vorfahren.',
      canonical: '/de/manifest',
      ogTitle: 'Das Manifest von Mamut Trekking',
      ogDescription:
        'Wir sind geboren, um zu gehen, und wir gehen, um zu leben — und so ehren wir das Netz des Lebens, das alle im Universum verbindet.',
    },
    titulo: { antes: 'Aus dieser Erinnerung', destaque: 'sind wir entstanden.' },
    paragrafos: [
      [
        'In der Unermesslichkeit der Urkontinente zogen Mammuts in großen Gruppen über weite Strecken ',
        { mark: 'und hinterließen für immer ihre Spuren' },
        ' auf dem Planeten. Ganz selbstverständlich sind wir ',
        { mark: 'eine Herde, die die ganze Welt zusammenbringt' },
        ', in dem, was einst das „Herz“ der Erde war: die Chapada Diamantina.',
      ],
      [
        'Wir sind mehr als eine Ökotourismus-Agentur. Wir sind Verteidiger der Serra do Sincorá, der lokalen Traditionen und unserer Vorfahren. Wir bauen ',
        { mark: 'Brücken zwischen der Menschheit und der natürlichen Welt' },
        ' (die dringend neu gebaut werden müssen). Wie die Mammuts von einst ',
        { mark: 'gehen wir aus Liebe, Solidarität, Respekt, Widerstand…' },
        ' ',
        { mark: 'Wir sind geboren, um zu gehen, und wir gehen, um zu leben' },
        ' — und so ehren wir das Netz des Lebens, das alle im Universum verbindet.',
      ],
      [
        'Unsere Stärke liegt nicht nur in unserer Größe, sondern auch in unserem ',
        { mark: 'Gedächtnis und unserer Intelligenz' },
        '. Sie lassen uns nie vergessen, woher wir kommen, so wie wir sehr genau wissen, wohin wir wollen. Dazu kommt die Einsicht, das Geschenk zu bewundern, das wir jeden Tag bekommen: die Schönheit der Wege und des Weges dorthin.',
      ],
      [
        'So wie Mammuts die Mitglieder ihrer Herde beschützten, sind wir hier, um für die Sicherheit und das Wohlbefinden unserer Reisenden zu sorgen. Neben den strengen Protokollen, die für sichere und unvergessliche Erlebnisse sorgen, ',
        { mark: 'liegt uns das Erlebnis aller sehr am Herzen, die unseren Weg kreuzen.' },
      ],
      [
        { mark: 'Schließ dich unserer Herde an.' },
        ' Gemeinsam erkunden wir die Schönheit und Vielfalt der Welt, lernen von ihr und feiern sie, immer im Bewusstsein, dass ',
        { mark: 'wir Teil von etwas Größerem sind' },
        ', von etwas, das Schutz und Bewunderung verdient.',
      ],
      [
        'Willkommen in der Chapada Diamantina und bei Mamut, wo die Natur unser Zuhause ist und die Gemeinschaft unsere Familie, wo wir an eine Welt glauben, die solidarischer und bewusster ist, für alle. Gemeinsam sind wir stärker. Gemeinsam sind wir beeindruckend. Gemeinsam hinterlassen wir unseren Respekt, unsere Hingabe und unsere Liebe für das Land, das wir unser Zuhause nennen.',
      ],
    ],
  },
};
