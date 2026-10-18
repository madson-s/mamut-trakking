/**
 * Texto da página de contato por idioma.
 *
 * PT vem de mamut.agency/contato. ⚠️ EN, ES e FR são tradução feita neste
 * repositório — a página em inglês do site atual tem outra estrutura.
 *
 * Endereço, e-mail, redes e Cadastur são fato: ficam em `SITE` e nos links,
 * fora daqui.
 */

import type { Locale } from '@/lib/site';

export const CONTATO_EDITORIAL: Record<Locale, {
  photoAlt: string;
  photoTitle: string;
  photoLead: string;
  exploreTitle: string;
  exploreLead: string;
  exploreCta: string;
}> = {
  pt: {
    photoAlt: 'Paisagem das montanhas da Chapada Diamantina',
    photoTitle: 'A próxima história é sua.',
    photoLead: 'Você traz a vontade de explorar. Nosso bando cuida do caminho.',
    exploreTitle: 'Ainda escolhendo seu caminho?',
    exploreLead: 'Explore os roteiros e encontre a aventura que combina com o seu ritmo.',
    exploreCta: 'Explorar as aventuras',
  },
  en: {
    photoAlt: 'Mountain landscape in Chapada Diamantina',
    photoTitle: 'The next story is yours.',
    photoLead: 'You bring the spirit of adventure. Our crew takes care of the trail.',
    exploreTitle: 'Still choosing your path?',
    exploreLead: 'Explore our routes and find the adventure that matches your pace.',
    exploreCta: 'Explore the adventures',
  },
  es: {
    photoAlt: 'Paisaje de montañas en la Chapada Diamantina',
    photoTitle: 'La próxima historia es tuya.',
    photoLead: 'Tú traes las ganas de explorar. Nuestro grupo se encarga del camino.',
    exploreTitle: '¿Aún eligiendo tu camino?',
    exploreLead: 'Explora las rutas y encuentra la aventura que se adapta a tu ritmo.',
    exploreCta: 'Explorar las aventuras',
  },
  fr: {
    photoAlt: 'Paysage de montagnes dans la Chapada Diamantina',
    photoTitle: 'La prochaine histoire, c’est la vôtre.',
    photoLead: 'Vous apportez l’envie d’explorer. Notre harde s’occupe du chemin.',
    exploreTitle: 'Vous hésitez encore sur votre chemin ?',
    exploreLead: 'Parcourez nos itinéraires et trouvez l’aventure qui correspond à votre rythme.',
    exploreCta: 'Découvrir les aventures',
  },
};

export type ContatoContent = {
  meta: { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string };
  titulo: { antes: string; destaque: string };
  lead: string;
  canais: {
    whatsapp: { titulo: string; texto: string; cta: string };
    email: { titulo: string; texto: string };
    endereco: { titulo: string; mapa: string };
    redes: { titulo: string; cadastur: string };
  };
  form: {
    titulo: string;
    lead: string;
    nome: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    telefone: { label: string; placeholder: string };
    grupo: { label: string; hint: string };
    aventuras: string;
    opcoesAventura: string[];
    chegada: string;
    opcoesChegada: { value: string; label: string }[];
    checkin: { label: string; hint: string };
    checkout: { label: string; hint: string };
    mensagem: { label: string; placeholder: string };
    enviarWhatsapp: string;
    enviarEmail: string;
    verificando: string;
    recaptchaErro: string;
    nota: string;
    saudacao: string;
    linhas: { nome: string; email: string; telefone: string; aventura: string; chegada: string; datas: string; saida: string; grupo: string; pessoa: string; pessoas: string; naoSei: string; aDefinir: string };
    assunto: string;
    semNome: string;
  };
};

export const CONTATO_CONTENT: Record<Locale, ContatoContent> = {
  pt: {
    meta: {
      title: 'Contato',
      description:
        'Fale com a Mamut Trekking: WhatsApp, e-mail e endereço em Lençóis, Chapada Diamantina. Conte sobre a sua viagem e montamos o roteiro ideal.',
      canonical: '/pt/contato',
      ogTitle: 'Contato · Mamut Trekking',
      ogDescription: 'Faça contato conosco — WhatsApp, e-mail e nossa base em Lençóis.',
    },
    titulo: { antes: 'Toda trilha começa com', destaque: 'uma conversa.' },
    lead: 'Escolha o canal que preferir — ou conte tudo no formulário e a gente responde com o roteiro certo.',
    canais: {
      whatsapp: {
        titulo: 'WhatsApp',
        texto: 'O caminho mais rápido — respondemos em até 2h, em PT · EN · ES.',
        cta: 'Falar no WhatsApp',
      },
      email: { titulo: 'E-mail', texto: 'Entre em contato via e-mail se preferir.' },
      endereco: { titulo: 'Encontre-nos pessoalmente em', mapa: 'Abrir no mapa' },
      redes: { titulo: 'Encontre-nos nas redes sociais', cadastur: 'Cadastur/CNPJ:' },
    },
    form: {
      titulo: 'Conte sobre a sua viagem.',
      lead: 'Preencha e escolha por onde prefere continuar a conversa — respondemos com o roteiro ideal para o seu grupo.',
      nome: { label: 'Nome', placeholder: 'Como podemos te chamar' },
      email: { label: 'E-mail', placeholder: 'voce@email.com' },
      telefone: { label: 'Telefone (WhatsApp)', placeholder: '+55 75 99999-9999' },
      grupo: { label: 'Tamanho do grupo', hint: 'Quantidade de pessoas, incluindo você.' },
      aventuras: 'Tipo de aventura',
      opcoesAventura: ['Trekking', 'Acampamento', 'Travessias', 'Trilhas Curtas', 'Lua de Mel'],
      chegada: 'Como pretende chegar',
      opcoesChegada: [
        { value: 'Avião', label: 'Avião' },
        { value: 'Ônibus', label: 'Ônibus' },
        { value: 'Carro Particular', label: 'Carro' },
      ],
      checkin: { label: 'Check-in', hint: 'Data de chegada.' },
      checkout: { label: 'Check-out', hint: 'Previsão de partida.' },
      mensagem: {
        label: 'Mensagem',
        placeholder:
          'Descreva aqui todas suas expectativas sobre a Chapada Diamantina, além de detalhes que julgue importante.',
      },
      enviarWhatsapp: 'Enviar pelo WhatsApp',
      enviarEmail: 'Enviar por e-mail',
      verificando: 'Verificando…',
      recaptchaErro: 'Não conseguimos confirmar que você não é um robô. Recarregue a página e tente de novo.',
      nota: 'Ao enviar, abrimos o WhatsApp ou o seu app de e-mail com a mensagem já preenchida.',
      saudacao: 'Olá! Vim pelo site da Mamut.',
      linhas: {
        nome: 'Nome', email: 'E-mail', telefone: 'WhatsApp', aventura: 'Tipo de aventura',
        chegada: 'Como pretendo chegar', datas: 'Check-in', saida: 'Check-out', grupo: 'Tamanho do grupo',
        pessoa: 'pessoa', pessoas: 'pessoas', naoSei: 'ainda não sei', aDefinir: 'a definir',
      },
      assunto: 'Contato pelo site',
      semNome: 'novo viajante',
    },
  },

  en: {
    meta: {
      title: 'Contact',
      description:
        'Talk to Mamut Trekking: WhatsApp, email and our address in Lençóis, Chapada Diamantina. Tell us about your trip and we build the right itinerary.',
      canonical: '/en/contact',
      ogTitle: 'Contact · Mamut Trekking',
      ogDescription: 'Get in touch — WhatsApp, email and our base in Lençóis.',
    },
    titulo: { antes: 'Every trail starts with', destaque: 'a conversation.' },
    lead: 'Pick the channel you prefer — or tell us everything in the form and we answer with the right itinerary.',
    canais: {
      whatsapp: {
        titulo: 'WhatsApp',
        texto: 'The fastest way — we reply within 2h, in PT · EN · ES.',
        cta: 'Talk on WhatsApp',
      },
      email: { titulo: 'Email', texto: 'Get in touch by email if you prefer.' },
      endereco: { titulo: 'Find us in person at', mapa: 'Open in maps' },
      redes: { titulo: 'Find us on social media', cadastur: 'Cadastur/CNPJ:' },
    },
    form: {
      titulo: 'Tell us about your trip.',
      lead: 'Fill it in and choose where to continue the conversation — we answer with the right itinerary for your group.',
      nome: { label: 'Name', placeholder: 'What should we call you' },
      email: { label: 'Email', placeholder: 'you@email.com' },
      telefone: { label: 'Phone (WhatsApp)', placeholder: '+44 7700 900000' },
      grupo: { label: 'Group size', hint: 'Number of people, including you.' },
      aventuras: 'Type of adventure',
      opcoesAventura: ['Trekking', 'Camping', 'Crossings', 'Short trails', 'Honeymoon'],
      chegada: 'How you plan to arrive',
      opcoesChegada: [
        { value: 'Avião', label: 'Plane' },
        { value: 'Ônibus', label: 'Bus' },
        { value: 'Carro Particular', label: 'Car' },
      ],
      checkin: { label: 'Check-in', hint: 'Arrival date.' },
      checkout: { label: 'Check-out', hint: 'Expected departure.' },
      mensagem: {
        label: 'Message',
        placeholder:
          'Tell us everything you expect from the Chapada Diamantina, plus any detail you think matters.',
      },
      enviarWhatsapp: 'Send on WhatsApp',
      enviarEmail: 'Send by email',
      verificando: 'Checking…',
      recaptchaErro: 'We could not confirm you are not a robot. Reload the page and try again.',
      nota: 'On submit we open WhatsApp or your email app with the message already filled in.',
      saudacao: 'Hi! I came from the Mamut website.',
      linhas: {
        nome: 'Name', email: 'Email', telefone: 'WhatsApp', aventura: 'Type of adventure',
        chegada: 'How I plan to arrive', datas: 'Check-in', saida: 'Check-out', grupo: 'Group size',
        pessoa: 'person', pessoas: 'people', naoSei: 'not sure yet', aDefinir: 'to be defined',
      },
      assunto: 'Website enquiry',
      semNome: 'new traveller',
    },
  },

  es: {
    meta: {
      title: 'Contacto',
      description:
        'Hablá con Mamut Trekking: WhatsApp, correo y dirección en Lençóis, Chapada Diamantina. Contanos sobre tu viaje y armamos el recorrido ideal.',
      canonical: '/es/contacto',
      ogTitle: 'Contacto · Mamut Trekking',
      ogDescription: 'Ponete en contacto — WhatsApp, correo y nuestra base en Lençóis.',
    },
    titulo: { antes: 'Todo sendero empieza con', destaque: 'una conversación.' },
    lead: 'Elegí el canal que prefieras — o contanos todo en el formulario y respondemos con el recorrido justo.',
    canais: {
      whatsapp: {
        titulo: 'WhatsApp',
        texto: 'El camino más rápido — respondemos en hasta 2h, en PT · EN · ES.',
        cta: 'Hablar por WhatsApp',
      },
      email: { titulo: 'Correo electrónico', texto: 'Escribinos por correo si preferís.' },
      endereco: { titulo: 'Encontranos en persona en', mapa: 'Abrir en el mapa' },
      redes: { titulo: 'Encontranos en las redes sociales', cadastur: 'Cadastur/CNPJ:' },
    },
    form: {
      titulo: 'Contanos sobre tu viaje.',
      lead: 'Completá y elegí por dónde preferís seguir la conversación — respondemos con el recorrido ideal para tu grupo.',
      nome: { label: 'Nombre', placeholder: 'Cómo te llamamos' },
      email: { label: 'Correo electrónico', placeholder: 'vos@email.com' },
      telefone: { label: 'Teléfono (WhatsApp)', placeholder: '+54 9 11 9999-9999' },
      grupo: { label: 'Tamaño del grupo', hint: 'Cantidad de personas, incluyéndote.' },
      aventuras: 'Tipo de aventura',
      opcoesAventura: ['Trekking', 'Camping', 'Travesías', 'Senderos cortos', 'Luna de miel'],
      chegada: 'Cómo pensás llegar',
      opcoesChegada: [
        { value: 'Avião', label: 'Avión' },
        { value: 'Ônibus', label: 'Ómnibus' },
        { value: 'Carro Particular', label: 'Auto' },
      ],
      checkin: { label: 'Check-in', hint: 'Fecha de llegada.' },
      checkout: { label: 'Check-out', hint: 'Salida prevista.' },
      mensagem: {
        label: 'Mensaje',
        placeholder:
          'Contanos todas tus expectativas sobre la Chapada Diamantina, además de los detalles que creas importantes.',
      },
      enviarWhatsapp: 'Enviar por WhatsApp',
      enviarEmail: 'Enviar por correo',
      verificando: 'Verificando…',
      recaptchaErro: 'No pudimos confirmar que no sos un robot. Recargá la página y probá de nuevo.',
      nota: 'Al enviar, abrimos WhatsApp o tu app de correo con el mensaje ya completado.',
      saudacao: '¡Hola! Vine por el sitio de Mamut.',
      linhas: {
        nome: 'Nombre', email: 'Correo', telefone: 'WhatsApp', aventura: 'Tipo de aventura',
        chegada: 'Cómo pienso llegar', datas: 'Check-in', saida: 'Check-out', grupo: 'Tamaño del grupo',
        pessoa: 'persona', pessoas: 'personas', naoSei: 'todavía no sé', aDefinir: 'a definir',
      },
      assunto: 'Contacto por el sitio',
      semNome: 'nuevo viajero',
    },
  },

  fr: {
    meta: {
      title: 'Contact',
      description:
        'Contactez Mamut Trekking : WhatsApp, e-mail et adresse à Lençóis, dans la Chapada Diamantina. Parlez-nous de votre voyage et nous composons l’itinéraire idéal.',
      canonical: '/fr/contact',
      ogTitle: 'Contact · Mamut Trekking',
      ogDescription: 'Contactez-nous — WhatsApp, e-mail et notre base à Lençóis.',
    },
    titulo: { antes: 'Chaque sentier commence par', destaque: 'une conversation.' },
    lead: 'Choisissez le canal que vous préférez — ou racontez-nous tout dans le formulaire et nous vous répondrons avec le bon itinéraire.',
    canais: {
      whatsapp: {
        titulo: 'WhatsApp',
        texto: 'Le moyen le plus rapide — nous répondons sous 2 h, en PT · EN · ES.',
        cta: 'Écrire sur WhatsApp',
      },
      email: { titulo: 'E-mail', texto: 'Écrivez-nous par e-mail si vous préférez.' },
      endereco: { titulo: 'Retrouvez-nous sur place à l’adresse', mapa: 'Ouvrir dans la carte' },
      redes: { titulo: 'Retrouvez-nous sur les réseaux sociaux', cadastur: 'Cadastur/CNPJ :' },
    },
    form: {
      titulo: 'Parlez-nous de votre voyage.',
      lead: 'Remplissez le formulaire et choisissez où poursuivre la conversation — nous vous répondrons avec l’itinéraire idéal pour votre groupe.',
      nome: { label: 'Nom', placeholder: 'Comment pouvons-nous vous appeler ?' },
      email: { label: 'E-mail', placeholder: 'vous@email.com' },
      telefone: { label: 'Téléphone (WhatsApp)', placeholder: '+33 6 12 34 56 78' },
      grupo: { label: 'Taille du groupe', hint: 'Nombre de personnes, vous compris.' },
      aventuras: 'Type d’aventure',
      opcoesAventura: ['Trek', 'Camping', 'Traversées', 'Randonnées courtes', 'Lune de miel'],
      chegada: 'Comment comptez-vous venir',
      opcoesChegada: [
        { value: 'Avião', label: 'Avion' },
        { value: 'Ônibus', label: 'Bus' },
        { value: 'Carro Particular', label: 'Voiture' },
      ],
      checkin: { label: 'Arrivée', hint: 'Date d’arrivée.' },
      checkout: { label: 'Départ', hint: 'Date de départ prévue.' },
      mensagem: {
        label: 'Message',
        placeholder:
          'Décrivez ici toutes vos attentes sur la Chapada Diamantina, ainsi que tout détail qui vous semble important.',
      },
      enviarWhatsapp: 'Envoyer sur WhatsApp',
      enviarEmail: 'Envoyer par e-mail',
      verificando: 'Vérification…',
      recaptchaErro: 'Nous n’avons pas pu confirmer que vous n’êtes pas un robot. Rechargez la page et réessayez.',
      nota: 'À l’envoi, nous ouvrons WhatsApp ou votre messagerie avec le message déjà rédigé.',
      saudacao: 'Bonjour ! Je viens du site de Mamut.',
      linhas: {
        nome: 'Nom', email: 'E-mail', telefone: 'WhatsApp', aventura: 'Type d’aventure',
        chegada: 'Comment je compte venir', datas: 'Arrivée', saida: 'Départ', grupo: 'Taille du groupe',
        pessoa: 'personne', pessoas: 'personnes', naoSei: 'je ne sais pas encore', aDefinir: 'à définir',
      },
      assunto: 'Contact via le site',
      semNome: 'nouveau voyageur',
    },
  },
};
