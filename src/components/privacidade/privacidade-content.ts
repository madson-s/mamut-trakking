import type { Locale } from '@/lib/site';

/**
 * Política de privacidade, nos cinco idiomas.
 *
 * Substitui a página da iubenda que o WordPress linkava (2023), que só cobria
 * um formulário de contato com nome, e-mail e telefone. O site novo coleta bem
 * mais — a ficha do participante pede documento, endereço e dados de saúde —,
 * então o texto foi reescrito a partir do que o código de fato faz:
 *   • Contato: o formulário não passa pelo servidor; monta a mensagem e abre o
 *     WhatsApp ou o app de e-mail da pessoa (`ContatoForm`).
 *   • Ficha do participante: vai por e-mail via Resend (`/api/formulario-participante`)
 *     ou pelo WhatsApp; não é gravada em banco do site.
 *   • reCAPTCHA v3 só nas páginas com formulário; Google Analytics 4 em todas
 *     as páginas públicas (seção "estatísticas"); nenhum pixel de publicidade.
 *   • O tema claro/escuro fica no localStorage do próprio navegador.
 * Mudou alguma dessas peças (entrou analytics, a ficha passou a ser gravada…)?
 * Atualize este texto e a data de `atualizadoEm`.
 *
 * Prazos de guarda e parceiros operacionais descrevem a prática da operadora:
 * revisar com ela antes de mudar.
 */

/** Item de lista: termo em destaque + explicação. */
export type PrivacidadeItem = readonly [termo: string, descricao: string];

export type PrivacidadeBloco =
  | { tipo: 'p'; texto: string }
  | { tipo: 'itens'; itens: readonly PrivacidadeItem[] }
  | { tipo: 'lista'; itens: readonly string[] };

export type PrivacidadeSecao = {
  id: string;
  titulo: string;
  blocos: readonly PrivacidadeBloco[];
};

export type PrivacidadeContent = {
  meta: { title: string; description: string; canonical: string };
  titulo: { antes: string; destaque: string };
  lead: string;
  atualizado: string;
  indice: string;
  controlador: {
    titulo: string;
    nome: string;
    cnpj: string;
    endereco: string;
    contato: string;
  };
  secoes: readonly PrivacidadeSecao[];
};

export const PRIVACIDADE_HREF: Record<Locale, string> = {
  pt: '/pt/politica-de-privacidade',
  en: '/en/privacy-policy',
  es: '/es/politica-de-privacidad',
  fr: '/fr/politique-de-confidentialite',
  nl: '/nl/privacybeleid',
  de: '/de/datenschutz',
};

/** Data da última revisão do texto (ISO), exibida no idioma da página. */
export const PRIVACIDADE_ATUALIZADA_EM = '2026-10-21';

const CNPJ = '43.500.583/0001-22';
const ENDERECO = 'Rua Miguel Calmon, 108, Centro — Lençóis, Bahia, Brasil — CEP 46960-000';

export const PRIVACIDADE_CONTENT: Record<Locale, PrivacidadeContent> = {
  pt: {
    meta: {
      title: 'Política de privacidade',
      description:
        'Quais dados pessoais a Mamut Trekking coleta no site e na ficha do participante, para quê, com quem compartilha e como pedir acesso, correção ou exclusão.',
      canonical: PRIVACIDADE_HREF.pt,
    },
    titulo: { antes: 'Política de', destaque: 'privacidade.' },
    lead: 'O que coletamos, para quê, com quem compartilhamos e como você pede para ver, corrigir ou apagar os seus dados.',
    atualizado: 'Última atualização',
    indice: 'Nesta página',
    controlador: {
      titulo: 'Quem cuida dos seus dados',
      nome: 'Mamut Trekking',
      cnpj: `CNPJ ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'Para qualquer assunto sobre os seus dados, inclusive como encarregado (LGPD):',
    },
    secoes: [
      {
        id: 'o-que-coletamos',
        titulo: 'O que coletamos e para quê',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Pedido de orçamento (página de contato).',
                'Nome, e-mail, telefone, aventura de interesse, datas, tamanho do grupo, meio de chegada e a sua mensagem. O formulário não envia nada ao nosso servidor: ele monta a mensagem e abre o seu WhatsApp ou o seu aplicativo de e-mail, e você decide se envia. Usamos esses dados para responder e montar a proposta.',
              ],
              [
                'Ficha do participante.',
                'Nome, data de nascimento, CPF ou passaporte, idade, nacionalidade, profissão, telefone, e-mail, endereço, altura, peso, data do passeio, forma de pagamento, hospedagem na Chapada e um contato de emergência. Usamos para identificar quem vai à trilha, organizar o passeio (transporte, hospedagem, alimentação) e agir rápido se algo acontecer.',
              ],
              [
                'Informações de saúde (na ficha).',
                'Condicionamento físico, alergias, restrições alimentares, medicamentos, condições de saúde e dificuldades motoras. São dados sensíveis pela LGPD: só os usamos para a sua segurança — ajustar ritmo e roteiro, preparar o guia e informar o socorro numa emergência —, e só com o seu consentimento, dado na própria ficha.',
              ],
              [
                'Fotos e vídeos dos passeios.',
                'O termo da ficha autoriza o uso da sua imagem e voz na divulgação da Mamut. Se preferir não aparecer, é só avisar — paramos de usar nas publicações seguintes.',
              ],
              [
                'Navegação.',
                'Não usamos ferramentas de publicidade. Para estatísticas de visita usamos o Google Analytics, descrito na seção seguinte. O servidor registra dados técnicos de cada acesso (endereço IP, data, hora e página), como exige o Marco Civil da Internet. A preferência de tema claro ou escuro fica guardada só no seu navegador.',
              ],
            ],
          },
        ],
      },
      {
        id: 'estatisticas',
        titulo: 'Estatísticas de visita (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'Usamos o Google Analytics 4 para entender como o site é usado: quantas pessoas visitam, de onde chegam (busca, redes sociais, links), quais páginas e roteiros são mais vistos e em quais botões clicam — por exemplo, o do WhatsApp. É assim que decidimos o que melhorar.' },
          { tipo: 'p', texto: 'O Google Analytics grava cookies no seu navegador (como o _ga) e recebe dados técnicos da visita: páginas vistas, tempo na página, tipo de aparelho e navegador, idioma e localização aproximada (cidade e país). Ele não nos entrega seu nome, e-mail ou telefone, e não cruzamos esses dados com os das reservas.' },
          {
            tipo: 'lista',
            itens: [
              'Base legal: nosso interesse legítimo em medir e melhorar o site (LGPD, art. 7º, IX).',
              'Guarda: os dados ficam no Google Analytics por até 14 meses e depois são apagados.',
              'Transferência: os dados vão para servidores do Google, inclusive nos Estados Unidos (ver \'Transferência internacional\').',
              'Como recusar: bloqueie cookies de terceiros no navegador ou instale a extensão oficial de desativação do Google Analytics (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'bases-legais',
        titulo: 'Bases legais',
        blocos: [
          {
            tipo: 'p',
            texto: 'Tratamos dados pessoais com base na Lei Geral de Proteção de Dados (Lei 13.709/2018):',
          },
          {
            tipo: 'lista',
            itens: [
              'pedidos de orçamento e reservas: procedimentos preliminares e execução do contrato do passeio (art. 7º, V);',
              'dados de saúde: o seu consentimento específico (art. 11, I) e, numa emergência, a proteção da sua vida e da sua integridade física (art. 11, II, "e");',
              'registros de acesso e documentos da reserva: cumprimento de obrigação legal (art. 7º, II) e exercício de direitos em eventual processo (art. 7º, VI);',
              'proteção contra robôs nos formulários: nosso interesse legítimo em manter o site seguro (art. 7º, IX).',
            ],
          },
        ],
      },
      {
        id: 'compartilhamento',
        titulo: 'Com quem compartilhamos',
        blocos: [
          {
            tipo: 'p',
            texto: 'Não vendemos nem alugamos dados pessoais. Compartilhamos só o necessário com:',
          },
          {
            tipo: 'itens',
            itens: [
              [
                'Quem opera o passeio com a gente.',
                'Guias, motoristas e as casas e pousadas do roteiro recebem o seu nome e o que precisam saber para cuidar de você — por exemplo, uma restrição alimentar ou uma condição de saúde relevante na trilha.',
              ],
              [
                'Serviços que usamos para trabalhar.',
                'Resend (envio da ficha por e-mail), Google (reCAPTCHA, que distingue pessoas de robôs nos formulários), Meta (WhatsApp, quando você escolhe falar por lá), Notion (organização interna das reservas), o nosso provedor de e-mail e a hospedagem do site.',
              ],
              [
                'Autoridades.',
                'Quando a lei exigir ou numa emergência — por exemplo, o resgate ou o hospital.',
              ],
            ],
          },
        ],
      },
      {
        id: 'transferencia-internacional',
        titulo: 'Transferência internacional',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Alguns desses serviços (Resend, Google, Meta e Notion) guardam dados em servidores fora do Brasil, principalmente nos Estados Unidos. Escolhemos fornecedores que oferecem cláusulas contratuais de proteção de dados, como prevê o art. 33 da LGPD.',
          },
        ],
      },
      {
        id: 'prazos',
        titulo: 'Por quanto tempo guardamos',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Pedidos de orçamento que não viraram reserva: até 12 meses.',
              'Ficha do participante e dados da reserva: até 5 anos depois do passeio — o prazo para eventuais reclamações pelo Código de Defesa do Consumidor.',
              'Registros de acesso ao site: 6 meses, como determina o Marco Civil da Internet.',
            ],
          },
          { tipo: 'p', texto: 'Passado o prazo, os dados são apagados ou anonimizados.' },
        ],
      },
      {
        id: 'seguranca',
        titulo: 'Segurança',
        blocos: [
          {
            tipo: 'p',
            texto:
              'O site só funciona com conexão criptografada (HTTPS), os formulários têm proteção contra robôs e o acesso às fichas fica restrito à equipe que organiza o seu passeio. Nenhum sistema é infalível; se acontecer um incidente que possa afetar você, avisamos você e a Autoridade Nacional de Proteção de Dados (ANPD).',
          },
        ],
      },
      {
        id: 'seus-direitos',
        titulo: 'Seus direitos',
        blocos: [
          { tipo: 'p', texto: 'A qualquer momento, você pode pedir:' },
          {
            tipo: 'lista',
            itens: [
              'confirmação de que tratamos dados seus e acesso a eles;',
              'correção de dados incompletos, errados ou desatualizados;',
              'anonimização, bloqueio ou exclusão de dados desnecessários ou tratados em desacordo com a lei;',
              'portabilidade dos dados para outro fornecedor;',
              'informação sobre com quem compartilhamos;',
              'revogação do consentimento, inclusive para dados de saúde e uso de imagem;',
              'oposição a um tratamento que você considere irregular.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Faça o pedido pelo e-mail ou WhatsApp acima. Respondemos em até 15 dias. Se não ficar satisfeito, você também pode reclamar à ANPD (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'menores',
        titulo: 'Crianças e adolescentes',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Menores de 18 anos só participam acompanhados ou autorizados pelo responsável legal, que preenche ou aprova a ficha e dá o consentimento em nome deles.',
          },
        ],
      },
      {
        id: 'mudancas',
        titulo: 'Mudanças nesta política',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Quando mudarmos a forma de tratar os seus dados, atualizamos esta página e a data no topo. Mudanças importantes também são avisadas a quem tem reserva ativa.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Privacy policy',
      description:
        'What personal data Mamut Trekking collects on the website and in the participant form, why, who we share it with and how to ask for access, correction or deletion.',
      canonical: PRIVACIDADE_HREF.en,
    },
    titulo: { antes: 'Privacy', destaque: 'policy.' },
    lead: 'What we collect, why, who we share it with and how you can ask to see, correct or delete your data.',
    atualizado: 'Last updated',
    indice: 'On this page',
    controlador: {
      titulo: 'Who looks after your data',
      nome: 'Mamut Trekking',
      cnpj: `Brazilian company number (CNPJ) ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'For anything about your data, including as our data protection officer:',
    },
    secoes: [
      {
        id: 'what-we-collect',
        titulo: 'What we collect and why',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Quote requests (contact page).',
                'Name, email, phone, the adventure you are interested in, dates, group size, how you are arriving and your message. The form sends nothing to our server: it puts the message together and opens your WhatsApp or email app, and you decide whether to send it. We use this to reply and prepare your quote.',
              ],
              [
                'Participant form.',
                'Name, date of birth, passport or ID number, age, nationality, profession, phone, email, address, height, weight, trip date, payment method, where you are staying in Chapada and an emergency contact. We use it to know who is on the trail, organise the trip (transport, lodging, meals) and act quickly if something happens.',
              ],
              [
                'Health information (in the form).',
                'Fitness level, allergies, dietary restrictions, medication, health conditions and mobility difficulties. Brazilian law treats this as sensitive data: we only use it for your safety — adjusting pace and route, briefing your guide and informing rescue services in an emergency — and only with your consent, given in the form itself.',
              ],
              [
                'Trip photos and videos.',
                'The terms in the form allow us to use your image and voice to promote Mamut. If you would rather not appear, just tell us and we will stop using them in future posts.',
              ],
              [
                'Browsing.',
                'We use no advertising tools. For visit statistics we use Google Analytics, described in the next section. The server logs technical data about each visit (IP address, date, time and page), as Brazilian internet law requires. Your light or dark theme preference is stored only in your browser.',
              ],
            ],
          },
        ],
      },
      {
        id: 'analytics',
        titulo: 'Visit statistics (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'We use Google Analytics 4 to understand how the site is used: how many people visit, where they come from (search, social media, links), which pages and trips are viewed most and which buttons they click — the WhatsApp one, for example. That is how we decide what to improve.' },
          { tipo: 'p', texto: 'Google Analytics sets cookies in your browser (such as _ga) and receives technical data about the visit: pages viewed, time on page, device and browser type, language and approximate location (city and country). It does not give us your name, email or phone number, and we do not combine this data with booking data.' },
          {
            tipo: 'lista',
            itens: [
              'Legal basis: our legitimate interest in measuring and improving the site (LGPD, art. 7, IX).',
              'Retention: the data stays in Google Analytics for up to 14 months and is then deleted.',
              'Transfer: the data goes to Google servers, including in the United States (see \'International transfers\').',
              'How to opt out: block third-party cookies in your browser or install the official Google Analytics opt-out browser add-on (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'legal-bases',
        titulo: 'Legal bases',
        blocos: [
          {
            tipo: 'p',
            texto: 'We process personal data under Brazil’s General Data Protection Law (LGPD, Law 13,709/2018):',
          },
          {
            tipo: 'lista',
            itens: [
              'quote requests and bookings: steps prior to and performance of the trip contract (art. 7, V);',
              'health data: your specific consent (art. 11, I) and, in an emergency, protecting your life and physical safety (art. 11, II, "e");',
              'access logs and booking records: compliance with legal obligations (art. 7, II) and the exercise of rights in legal proceedings (art. 7, VI);',
              'bot protection on forms: our legitimate interest in keeping the site secure (art. 7, IX).',
            ],
          },
        ],
      },
      {
        id: 'sharing',
        titulo: 'Who we share it with',
        blocos: [
          { tipo: 'p', texto: 'We never sell or rent personal data. We share only what is needed with:' },
          {
            tipo: 'itens',
            itens: [
              [
                'The people who run the trip with us.',
                'Guides, drivers and the homes and guesthouses on the route get your name and what they need to know to look after you — a dietary restriction, for example, or a health condition that matters on the trail.',
              ],
              [
                'Services we use to work.',
                'Resend (sending the participant form by email), Google (reCAPTCHA, which tells people from bots on our forms), Meta (WhatsApp, when you choose to talk there), Notion (our internal booking records), our email provider and our website host.',
              ],
              [
                'Authorities.',
                'When the law requires it or in an emergency — rescue services or a hospital, for example.',
              ],
            ],
          },
        ],
      },
      {
        id: 'international-transfers',
        titulo: 'International transfers',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Some of these services (Resend, Google, Meta and Notion) store data on servers outside Brazil, mainly in the United States. We choose providers that offer contractual data protection clauses, as article 33 of the LGPD provides.',
          },
        ],
      },
      {
        id: 'retention',
        titulo: 'How long we keep it',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Quote requests that did not become a booking: up to 12 months.',
              'Participant form and booking data: up to 5 years after the trip — the period for claims under the Brazilian Consumer Code.',
              'Website access logs: 6 months, as Brazilian internet law requires.',
            ],
          },
          { tipo: 'p', texto: 'After that, the data is deleted or anonymised.' },
        ],
      },
      {
        id: 'security',
        titulo: 'Security',
        blocos: [
          {
            tipo: 'p',
            texto:
              'The site only works over an encrypted connection (HTTPS), our forms are protected against bots and access to participant forms is limited to the team organising your trip. No system is infallible; if an incident could affect you, we will tell you and Brazil’s National Data Protection Authority (ANPD).',
          },
        ],
      },
      {
        id: 'your-rights',
        titulo: 'Your rights',
        blocos: [
          { tipo: 'p', texto: 'At any time, you can ask for:' },
          {
            tipo: 'lista',
            itens: [
              'confirmation that we process your data, and access to it;',
              'correction of incomplete, wrong or outdated data;',
              'anonymisation, blocking or deletion of data that is unnecessary or processed unlawfully;',
              'portability of your data to another provider;',
              'information on who we share it with;',
              'withdrawal of consent, including for health data and use of your image;',
              'objection to any processing you consider irregular.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Send your request by email or WhatsApp (above). We reply within 15 days. If you are not satisfied, you can also complain to the ANPD (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'minors',
        titulo: 'Children and teenagers',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Under-18s only take part with, or with the authorisation of, a parent or legal guardian, who fills in or approves the form and gives consent on their behalf.',
          },
        ],
      },
      {
        id: 'changes',
        titulo: 'Changes to this policy',
        blocos: [
          {
            tipo: 'p',
            texto:
              'When we change how we handle your data, we update this page and the date at the top. We also tell anyone with an active booking about important changes.',
          },
        ],
      },
    ],
  },

  es: {
    meta: {
      title: 'Política de privacidad',
      description:
        'Qué datos personales recoge Mamut Trekking en el sitio y en la ficha del participante, para qué, con quién los comparte y cómo pedir acceso, corrección o eliminación.',
      canonical: PRIVACIDADE_HREF.es,
    },
    titulo: { antes: 'Política de', destaque: 'privacidad.' },
    lead: 'Qué recogemos, para qué, con quién lo compartimos y cómo puedes pedir ver, corregir o borrar tus datos.',
    atualizado: 'Última actualización',
    indice: 'En esta página',
    controlador: {
      titulo: 'Quién cuida tus datos',
      nome: 'Mamut Trekking',
      cnpj: `CNPJ (registro de empresa en Brasil) ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'Para cualquier asunto sobre tus datos, incluso como encargado de protección de datos:',
    },
    secoes: [
      {
        id: 'que-recogemos',
        titulo: 'Qué recogemos y para qué',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Pedido de presupuesto (página de contacto).',
                'Nombre, correo, teléfono, aventura de interés, fechas, tamaño del grupo, medio de llegada y tu mensaje. El formulario no envía nada a nuestro servidor: arma el mensaje y abre tu WhatsApp o tu aplicación de correo, y tú decides si lo envías. Usamos estos datos para responder y preparar la propuesta.',
              ],
              [
                'Ficha del participante.',
                'Nombre, fecha de nacimiento, pasaporte o documento, edad, nacionalidad, profesión, teléfono, correo, dirección, estatura, peso, fecha del paseo, forma de pago, alojamiento en la Chapada y un contacto de emergencia. Los usamos para saber quién va al sendero, organizar el paseo (transporte, alojamiento, comidas) y actuar rápido si pasa algo.',
              ],
              [
                'Información de salud (en la ficha).',
                'Condición física, alergias, restricciones alimentarias, medicamentos, condiciones de salud y dificultades motoras. La ley brasileña los considera datos sensibles: solo los usamos para tu seguridad —ajustar ritmo y ruta, preparar al guía e informar al rescate en una emergencia— y solo con tu consentimiento, dado en la propia ficha.',
              ],
              [
                'Fotos y videos de los paseos.',
                'Los términos de la ficha autorizan el uso de tu imagen y voz en la difusión de Mamut. Si prefieres no aparecer, avísanos y dejamos de usarlas en las publicaciones siguientes.',
              ],
              [
                'Navegación.',
                'No usamos herramientas de publicidad. Para las estadísticas de visitas usamos Google Analytics, descrito en la sección siguiente. El servidor registra datos técnicos de cada acceso (dirección IP, fecha, hora y página), como exige la ley brasileña de internet. Tu preferencia de tema claro u oscuro queda guardada solo en tu navegador.',
              ],
            ],
          },
        ],
      },
      {
        id: 'estadisticas',
        titulo: 'Estadísticas de visitas (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'Usamos Google Analytics 4 para entender cómo se usa el sitio: cuántas personas lo visitan, de dónde llegan (buscadores, redes sociales, enlaces), qué páginas y recorridos se ven más y en qué botones hacen clic —por ejemplo, el de WhatsApp—. Así decidimos qué mejorar.' },
          { tipo: 'p', texto: 'Google Analytics guarda cookies en tu navegador (como _ga) y recibe datos técnicos de la visita: páginas vistas, tiempo en la página, tipo de dispositivo y navegador, idioma y ubicación aproximada (ciudad y país). No nos entrega tu nombre, correo ni teléfono, y no cruzamos estos datos con los de las reservas.' },
          {
            tipo: 'lista',
            itens: [
              'Base legal: nuestro interés legítimo en medir y mejorar el sitio (LGPD, art. 7, IX).',
              'Conservación: los datos quedan en Google Analytics hasta 14 meses y luego se borran.',
              'Transferencia: los datos van a servidores de Google, incluso en Estados Unidos (ver \'Transferencia internacional\').',
              'Cómo rechazarlo: bloquea las cookies de terceros en tu navegador o instala el complemento oficial de inhabilitación de Google Analytics (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'bases-legales',
        titulo: 'Bases legales',
        blocos: [
          {
            tipo: 'p',
            texto: 'Tratamos datos personales según la Ley General de Protección de Datos de Brasil (LGPD, Ley 13.709/2018):',
          },
          {
            tipo: 'lista',
            itens: [
              'pedidos de presupuesto y reservas: procedimientos previos y ejecución del contrato del paseo (art. 7, V);',
              'datos de salud: tu consentimiento específico (art. 11, I) y, en una emergencia, la protección de tu vida y tu integridad física (art. 11, II, "e");',
              'registros de acceso y documentos de la reserva: cumplimiento de obligaciones legales (art. 7, II) y ejercicio de derechos en un eventual proceso (art. 7, VI);',
              'protección contra robots en los formularios: nuestro interés legítimo en mantener el sitio seguro (art. 7, IX).',
            ],
          },
        ],
      },
      {
        id: 'compartir',
        titulo: 'Con quién compartimos',
        blocos: [
          { tipo: 'p', texto: 'No vendemos ni alquilamos datos personales. Compartimos solo lo necesario con:' },
          {
            tipo: 'itens',
            itens: [
              [
                'Quienes operan el paseo con nosotros.',
                'Guías, conductores y las casas y posadas de la ruta reciben tu nombre y lo que necesitan saber para cuidarte —por ejemplo, una restricción alimentaria o una condición de salud relevante en el sendero.',
              ],
              [
                'Servicios que usamos para trabajar.',
                'Resend (envío de la ficha por correo), Google (reCAPTCHA, que distingue personas de robots en los formularios), Meta (WhatsApp, cuando eliges hablar por ahí), Notion (organización interna de las reservas), nuestro proveedor de correo y el alojamiento del sitio.',
              ],
              [
                'Autoridades.',
                'Cuando la ley lo exija o en una emergencia —por ejemplo, el rescate o el hospital.',
              ],
            ],
          },
        ],
      },
      {
        id: 'transferencia-internacional',
        titulo: 'Transferencia internacional',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Algunos de estos servicios (Resend, Google, Meta y Notion) guardan datos en servidores fuera de Brasil, principalmente en Estados Unidos. Elegimos proveedores que ofrecen cláusulas contractuales de protección de datos, como prevé el artículo 33 de la LGPD.',
          },
        ],
      },
      {
        id: 'plazos',
        titulo: 'Cuánto tiempo los guardamos',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Pedidos de presupuesto que no se convirtieron en reserva: hasta 12 meses.',
              'Ficha del participante y datos de la reserva: hasta 5 años después del paseo —el plazo para reclamaciones según el Código de Defensa del Consumidor de Brasil.',
              'Registros de acceso al sitio: 6 meses, como exige la ley brasileña de internet.',
            ],
          },
          { tipo: 'p', texto: 'Pasado el plazo, los datos se borran o se anonimizan.' },
        ],
      },
      {
        id: 'seguridad',
        titulo: 'Seguridad',
        blocos: [
          {
            tipo: 'p',
            texto:
              'El sitio solo funciona con conexión cifrada (HTTPS), los formularios tienen protección contra robots y el acceso a las fichas está limitado al equipo que organiza tu paseo. Ningún sistema es infalible; si ocurre un incidente que pueda afectarte, te avisamos a ti y a la Autoridad Nacional de Protección de Datos de Brasil (ANPD).',
          },
        ],
      },
      {
        id: 'tus-derechos',
        titulo: 'Tus derechos',
        blocos: [
          { tipo: 'p', texto: 'En cualquier momento puedes pedir:' },
          {
            tipo: 'lista',
            itens: [
              'confirmación de que tratamos tus datos y acceso a ellos;',
              'corrección de datos incompletos, erróneos o desactualizados;',
              'anonimización, bloqueo o eliminación de datos innecesarios o tratados en desacuerdo con la ley;',
              'portabilidad de tus datos a otro proveedor;',
              'información sobre con quién los compartimos;',
              'revocación del consentimiento, incluso para datos de salud y uso de imagen;',
              'oposición a un tratamiento que consideres irregular.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Haz tu pedido por correo o WhatsApp (arriba). Respondemos en hasta 15 días. Si no quedas satisfecho, también puedes reclamar ante la ANPD (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'menores',
        titulo: 'Niños y adolescentes',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Los menores de 18 años solo participan acompañados o autorizados por su responsable legal, que completa o aprueba la ficha y da el consentimiento en su nombre.',
          },
        ],
      },
      {
        id: 'cambios',
        titulo: 'Cambios en esta política',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Cuando cambiemos la forma de tratar tus datos, actualizamos esta página y la fecha de arriba. Los cambios importantes también se avisan a quien tenga una reserva activa.',
          },
        ],
      },
    ],
  },

  fr: {
    meta: {
      title: 'Politique de confidentialité',
      description:
        'Quelles données personnelles Mamut Trekking collecte sur le site et dans la fiche du participant, dans quel but, avec qui elles sont partagées et comment demander à y accéder, à les corriger ou à les supprimer.',
      canonical: PRIVACIDADE_HREF.fr,
    },
    titulo: { antes: 'Politique de', destaque: 'confidentialité.' },
    lead: 'Ce que nous collectons, dans quel but, avec qui nous le partageons et comment vous pouvez demander à consulter, corriger ou effacer vos données.',
    atualizado: 'Dernière mise à jour',
    indice: 'Sur cette page',
    controlador: {
      titulo: 'Qui est responsable de vos données',
      nome: 'Mamut Trekking',
      cnpj: `CNPJ (numéro d’immatriculation de l’entreprise au Brésil) ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'Pour toute question concernant vos données, y compris en tant que délégué à la protection des données (« encarregado » au sens de la LGPD) :',
    },
    secoes: [
      {
        id: 'ce-que-nous-collectons',
        titulo: 'Ce que nous collectons et dans quel but',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Demande de devis (page de contact).',
                'Nom, e-mail, téléphone, aventure qui vous intéresse, dates, taille du groupe, moyen d’arrivée et votre message. Le formulaire n’envoie rien à notre serveur : il rédige le message et ouvre votre WhatsApp ou votre application de messagerie, et c’est vous qui décidez de l’envoyer. Nous utilisons ces données pour vous répondre et préparer notre proposition.',
              ],
              [
                'Fiche du participant.',
                'Nom, date de naissance, CPF (numéro fiscal brésilien) ou passeport, âge, nationalité, profession, téléphone, e-mail, adresse, taille, poids, date de la sortie, mode de paiement, hébergement dans la Chapada et un contact d’urgence. Nous les utilisons pour identifier qui part sur le sentier, organiser la sortie (transport, hébergement, repas) et agir vite en cas de problème.',
              ],
              [
                'Informations de santé (dans la fiche).',
                'Condition physique, allergies, restrictions alimentaires, médicaments, problèmes de santé et difficultés motrices. Ce sont des données sensibles au sens de la LGPD (loi brésilienne sur la protection des données) : nous ne les utilisons que pour votre sécurité — adapter le rythme et l’itinéraire, préparer le guide et informer les secours en cas d’urgence —, et uniquement avec votre consentement, donné dans la fiche elle-même.',
              ],
              [
                'Photos et vidéos des sorties.',
                'Les conditions de la fiche autorisent l’utilisation de votre image et de votre voix dans la communication de Mamut. Si vous préférez ne pas apparaître, il suffit de nous le dire — nous cesserons de les utiliser dans les publications suivantes.',
              ],
              [
                'Navigation.',
                'Nous n’utilisons aucun outil de publicité. Pour les statistiques de visite, nous utilisons Google Analytics, décrit dans la section suivante. Le serveur enregistre des données techniques de chaque visite (adresse IP, date, heure et page), comme l’exige le Marco Civil da Internet (loi brésilienne encadrant l’internet). Votre préférence de thème clair ou sombre est conservée uniquement dans votre navigateur.',
              ],
            ],
          },
        ],
      },
      {
        id: 'statistiques',
        titulo: 'Statistiques de visite (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'Nous utilisons Google Analytics 4 pour comprendre comment le site est utilisé : combien de personnes le visitent, d’où elles arrivent (recherche, réseaux sociaux, liens), quelles pages et quels itinéraires sont les plus consultés et sur quels boutons elles cliquent — celui de WhatsApp, par exemple. C’est ainsi que nous décidons quoi améliorer.' },
          { tipo: 'p', texto: 'Google Analytics dépose des cookies dans votre navigateur (comme _ga) et reçoit des données techniques sur la visite : pages vues, temps passé, type d’appareil et de navigateur, langue et localisation approximative (ville et pays). Il ne nous transmet ni votre nom, ni votre e-mail, ni votre téléphone, et nous ne croisons pas ces données avec celles des réservations.' },
          {
            tipo: 'lista',
            itens: [
              'Base légale : notre intérêt légitime à mesurer et améliorer le site (LGPD, art. 7, IX).',
              'Conservation : les données restent dans Google Analytics jusqu’à 14 mois, puis sont supprimées.',
              'Transfert : les données sont envoyées vers des serveurs de Google, y compris aux États-Unis (voir « Transfert international »).',
              'Comment refuser : bloquez les cookies tiers dans votre navigateur ou installez le module officiel de désactivation de Google Analytics (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'bases-legales',
        titulo: 'Bases légales',
        blocos: [
          {
            tipo: 'p',
            texto: 'Nous traitons les données personnelles sur le fondement de la Loi générale de protection des données du Brésil (LGPD, loi 13.709/2018) :',
          },
          {
            tipo: 'lista',
            itens: [
              'demandes de devis et réservations : mesures précontractuelles et exécution du contrat de la sortie (art. 7, V) ;',
              'données de santé : votre consentement spécifique (art. 11, I) et, en cas d’urgence, la protection de votre vie et de votre intégrité physique (art. 11, II, « e ») ;',
              'journaux de connexion et documents de réservation : respect d’une obligation légale (art. 7, II) et exercice de droits dans le cadre d’une éventuelle procédure (art. 7, VI) ;',
              'protection des formulaires contre les robots : notre intérêt légitime à assurer la sécurité du site (art. 7, IX).',
            ],
          },
        ],
      },
      {
        id: 'partage',
        titulo: 'Avec qui nous les partageons',
        blocos: [
          {
            tipo: 'p',
            texto: 'Nous ne vendons ni ne louons de données personnelles. Nous ne partageons que le strict nécessaire avec :',
          },
          {
            tipo: 'itens',
            itens: [
              [
                'Ceux qui assurent la sortie avec nous.',
                'Les guides, les chauffeurs ainsi que les maisons et pousadas de l’itinéraire reçoivent votre nom et ce qu’ils doivent savoir pour prendre soin de vous — par exemple une restriction alimentaire ou un problème de santé important sur le sentier.',
              ],
              [
                'Les services que nous utilisons pour travailler.',
                'Resend (envoi de la fiche par e-mail), Google (reCAPTCHA, qui distingue les personnes des robots sur les formulaires), Meta (WhatsApp, lorsque vous choisissez d’y échanger avec nous), Notion (organisation interne des réservations), notre fournisseur de messagerie et l’hébergeur du site.',
              ],
              [
                'Les autorités.',
                'Lorsque la loi l’exige ou en cas d’urgence — par exemple les secours ou l’hôpital.',
              ],
            ],
          },
        ],
      },
      {
        id: 'transfert-international',
        titulo: 'Transfert international',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Certains de ces services (Resend, Google, Meta et Notion) stockent des données sur des serveurs situés hors du Brésil, principalement aux États-Unis. Nous choisissons des fournisseurs qui proposent des clauses contractuelles de protection des données, comme le prévoit l’article 33 de la LGPD.',
          },
        ],
      },
      {
        id: 'durees',
        titulo: 'Combien de temps nous les conservons',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Demandes de devis qui n’ont pas abouti à une réservation : jusqu’à 12 mois.',
              'Fiche du participant et données de réservation : jusqu’à 5 ans après la sortie — le délai prévu pour d’éventuelles réclamations par le Code de défense du consommateur brésilien.',
              'Journaux de connexion au site : 6 mois, comme l’impose le Marco Civil da Internet.',
            ],
          },
          { tipo: 'p', texto: 'Passé ce délai, les données sont supprimées ou anonymisées.' },
        ],
      },
      {
        id: 'securite',
        titulo: 'Sécurité',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Le site ne fonctionne qu’avec une connexion chiffrée (HTTPS), les formulaires sont protégés contre les robots et l’accès aux fiches est réservé à l’équipe qui organise votre sortie. Aucun système n’est infaillible ; si un incident susceptible de vous affecter se produit, nous vous en informerons, ainsi que l’Autorité nationale de protection des données du Brésil (ANPD).',
          },
        ],
      },
      {
        id: 'vos-droits',
        titulo: 'Vos droits',
        blocos: [
          { tipo: 'p', texto: 'À tout moment, vous pouvez demander :' },
          {
            tipo: 'lista',
            itens: [
              'la confirmation que nous traitons des données vous concernant, et l’accès à celles-ci ;',
              'la rectification de données incomplètes, inexactes ou obsolètes ;',
              'l’anonymisation, le blocage ou la suppression de données inutiles ou traitées en violation de la loi ;',
              'la portabilité de vos données vers un autre fournisseur ;',
              'des informations sur les personnes avec qui nous les partageons ;',
              'le retrait de votre consentement, y compris pour les données de santé et l’utilisation de votre image ;',
              'l’opposition à un traitement que vous jugez irrégulier.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Adressez votre demande par e-mail ou par WhatsApp (ci-dessus). Nous répondons sous 15 jours. Si la réponse ne vous satisfait pas, vous pouvez aussi déposer une réclamation auprès de l’ANPD (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'mineurs',
        titulo: 'Enfants et adolescents',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Les mineurs de moins de 18 ans ne participent qu’accompagnés ou autorisés par leur représentant légal, qui remplit ou approuve la fiche et donne le consentement en leur nom.',
          },
        ],
      },
      {
        id: 'modifications',
        titulo: 'Modifications de cette politique',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Lorsque nous modifions la façon dont nous traitons vos données, nous mettons à jour cette page et la date indiquée en haut. Les changements importants sont également signalés aux personnes ayant une réservation en cours.',
          },
        ],
      },
    ],
  },
  nl: {
    meta: {
      title: 'Privacybeleid',
      description:
        'Welke persoonsgegevens Mamut Trekking verzamelt op de website en in het deelnemersformulier, waarom, met wie we ze delen en hoe je om inzage, correctie of verwijdering vraagt.',
      canonical: PRIVACIDADE_HREF.nl,
    },
    titulo: { antes: 'Privacy', destaque: 'beleid.' },
    lead: 'Wat we verzamelen, waarom, met wie we het delen en hoe je kunt vragen om je gegevens in te zien, te corrigeren of te verwijderen.',
    atualizado: 'Laatst bijgewerkt',
    indice: 'Op deze pagina',
    controlador: {
      titulo: 'Wie zorgt voor je gegevens',
      nome: 'Mamut Trekking',
      cnpj: `Braziliaans bedrijfsnummer (CNPJ) ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'Voor alles over je gegevens, ook als onze functionaris voor gegevensbescherming:',
    },
    secoes: [
      {
        id: 'wat-we-verzamelen',
        titulo: 'Wat we verzamelen en waarom',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Offerteaanvragen (contactpagina).',
                'Naam, e-mail, telefoon, het avontuur waarin je geïnteresseerd bent, data, groepsgrootte, hoe je aankomt en je bericht. Het formulier stuurt niets naar onze server: het stelt het bericht samen en opent je WhatsApp of je e-mailprogramma, en jij beslist of je het verstuurt. We gebruiken dit om te antwoorden en je offerte op te stellen.',
              ],
              [
                'Deelnemersformulier.',
                'Naam, geboortedatum, paspoort- of identiteitsnummer, leeftijd, nationaliteit, beroep, telefoon, e-mail, adres, lengte, gewicht, datum van de tocht, betaalmethode, waar je in de Chapada verblijft en een contactpersoon voor noodgevallen. We gebruiken dit om te weten wie er op het pad is, de reis te organiseren (vervoer, overnachting, maaltijden) en snel te handelen als er iets gebeurt.',
              ],
              [
                'Gezondheidsinformatie (in het formulier).',
                'Conditie, allergieën, dieetwensen, medicijnen, gezondheidsproblemen en beperkingen in je mobiliteit. De Braziliaanse wet beschouwt dit als gevoelige gegevens: we gebruiken ze alleen voor je veiligheid — tempo en route aanpassen, je gids informeren en hulpdiensten inlichten in een noodgeval — en alleen met je toestemming, die je in het formulier zelf geeft.',
              ],
              [
                'Foto’s en video’s van de reis.',
                'De voorwaarden in het formulier staan ons toe je beeld en stem te gebruiken om Mamut te promoten. Wil je liever niet in beeld komen, laat het ons dan weten; dan gebruiken we ze niet meer in toekomstige berichten.',
              ],
              [
                'Surfen op de site.',
                'We gebruiken geen advertentietools. Voor bezoekstatistieken gebruiken we Google Analytics, zoals beschreven in het volgende onderdeel. De server legt technische gegevens over elk bezoek vast (IP-adres, datum, tijd en pagina), zoals de Braziliaanse internetwet vereist. Je voorkeur voor het lichte of donkere thema wordt alleen in je browser opgeslagen.',
              ],
            ],
          },
        ],
      },
      {
        id: 'statistieken',
        titulo: 'Bezoekstatistieken (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'We gebruiken Google Analytics 4 om te begrijpen hoe de site wordt gebruikt: hoeveel mensen hem bezoeken, waar ze vandaan komen (zoekmachines, sociale media, links), welke pagina’s en tochten het meest worden bekeken en op welke knoppen ze klikken — bijvoorbeeld die van WhatsApp. Zo bepalen we wat we verbeteren.' },
          { tipo: 'p', texto: 'Google Analytics plaatst cookies in je browser (zoals _ga) en ontvangt technische gegevens over het bezoek: bekeken pagina’s, tijd op de pagina, type apparaat en browser, taal en globale locatie (stad en land). Het geeft ons niet je naam, e-mailadres of telefoonnummer, en we koppelen deze gegevens niet aan die van boekingen.' },
          {
            tipo: 'lista',
            itens: [
              'Rechtsgrond: ons gerechtvaardigd belang om de site te meten en te verbeteren (LGPD, art. 7, IX).',
              'Bewaartermijn: de gegevens blijven maximaal 14 maanden in Google Analytics en worden daarna verwijderd.',
              'Doorgifte: de gegevens gaan naar servers van Google, ook in de Verenigde Staten (zie \'Internationale doorgifte\').',
              'Bezwaar maken: blokkeer cookies van derden in je browser of installeer de officiële browser-add-on voor het uitschakelen van Google Analytics (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'rechtsgronden',
        titulo: 'Rechtsgronden',
        blocos: [
          {
            tipo: 'p',
            texto: 'We verwerken persoonsgegevens op grond van de Braziliaanse Algemene Wet Gegevensbescherming (LGPD, wet 13.709/2018):',
          },
          {
            tipo: 'lista',
            itens: [
              'offerteaanvragen en boekingen: handelingen voorafgaand aan en uitvoering van de reisovereenkomst (art. 7, V);',
              'gezondheidsgegevens: je specifieke toestemming (art. 11, I) en, in een noodgeval, de bescherming van je leven en lichamelijke veiligheid (art. 11, II, "e");',
              'toegangslogs en boekingsgegevens: het nakomen van wettelijke verplichtingen (art. 7, II) en het uitoefenen van rechten in gerechtelijke procedures (art. 7, VI);',
              'bescherming tegen bots op de formulieren: ons gerechtvaardigd belang om de site veilig te houden (art. 7, IX).',
            ],
          },
        ],
      },
      {
        id: 'delen',
        titulo: 'Met wie we gegevens delen',
        blocos: [
          { tipo: 'p', texto: 'We verkopen of verhuren nooit persoonsgegevens. We delen alleen wat nodig is met:' },
          {
            tipo: 'itens',
            itens: [
              [
                'De mensen die de reis samen met ons uitvoeren.',
                'Gidsen, chauffeurs en de huizen en pensions op de route krijgen je naam en wat ze moeten weten om voor je te zorgen — bijvoorbeeld een dieetwens of een gezondheidsprobleem dat onderweg van belang is.',
              ],
              [
                'Diensten die we voor ons werk gebruiken.',
                'Resend (het versturen van het deelnemersformulier per e-mail), Google (reCAPTCHA, dat mensen van bots onderscheidt op onze formulieren), Meta (WhatsApp, als je ervoor kiest daar met ons te praten), Notion (onze interne boekingsadministratie), onze e-mailprovider en onze websitehost.',
              ],
              [
                'Autoriteiten.',
                'Wanneer de wet dat vereist of in een noodgeval — bijvoorbeeld hulpdiensten of een ziekenhuis.',
              ],
            ],
          },
        ],
      },
      {
        id: 'internationale-doorgifte',
        titulo: 'Internationale doorgifte',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Sommige van deze diensten (Resend, Google, Meta en Notion) slaan gegevens op op servers buiten Brazilië, vooral in de Verenigde Staten. We kiezen aanbieders die contractuele clausules voor gegevensbescherming bieden, zoals artikel 33 van de LGPD voorschrijft.',
          },
        ],
      },
      {
        id: 'bewaartermijn',
        titulo: 'Hoe lang we gegevens bewaren',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Offerteaanvragen die geen boeking werden: tot 12 maanden.',
              'Deelnemersformulier en boekingsgegevens: tot 5 jaar na de reis — de termijn voor claims onder het Braziliaanse consumentenwetboek.',
              'Toegangslogs van de website: 6 maanden, zoals de Braziliaanse internetwet vereist.',
            ],
          },
          { tipo: 'p', texto: 'Daarna worden de gegevens verwijderd of geanonimiseerd.' },
        ],
      },
      {
        id: 'beveiliging',
        titulo: 'Beveiliging',
        blocos: [
          {
            tipo: 'p',
            texto:
              'De site werkt alleen via een versleutelde verbinding (HTTPS), onze formulieren zijn beschermd tegen bots en de toegang tot deelnemersformulieren is beperkt tot het team dat je reis organiseert. Geen enkel systeem is onfeilbaar; als een incident gevolgen voor jou kan hebben, laten we het jou en de Braziliaanse Nationale Autoriteit Gegevensbescherming (ANPD) weten.',
          },
        ],
      },
      {
        id: 'jouw-rechten',
        titulo: 'Jouw rechten',
        blocos: [
          { tipo: 'p', texto: 'Je kunt op elk moment vragen om:' },
          {
            tipo: 'lista',
            itens: [
              'bevestiging dat we je gegevens verwerken, en inzage daarin;',
              'correctie van onvolledige, onjuiste of verouderde gegevens;',
              'anonimisering, blokkering of verwijdering van gegevens die overbodig zijn of onrechtmatig worden verwerkt;',
              'overdracht van je gegevens naar een andere aanbieder;',
              'informatie over met wie we ze delen;',
              'intrekking van je toestemming, ook voor gezondheidsgegevens en het gebruik van je beeld;',
              'bezwaar tegen elke verwerking die je onrechtmatig vindt.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Stuur je verzoek per e-mail of via WhatsApp (zie hierboven). We antwoorden binnen 15 dagen. Ben je niet tevreden, dan kun je ook een klacht indienen bij de ANPD (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'minderjarigen',
        titulo: 'Kinderen en tieners',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Jongeren onder de 18 nemen alleen deel samen met, of met toestemming van, een ouder of wettelijke vertegenwoordiger, die het formulier invult of goedkeurt en namens hen toestemming geeft.',
          },
        ],
      },
      {
        id: 'wijzigingen',
        titulo: 'Wijzigingen in dit beleid',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Als we veranderen hoe we met je gegevens omgaan, werken we deze pagina en de datum bovenaan bij. Belangrijke wijzigingen laten we ook weten aan iedereen met een lopende boeking.',
          },
        ],
      },
    ],
  },
  de: {
    meta: {
      title: 'Datenschutzerklärung',
      description:
        'Welche personenbezogenen Daten Mamut Trekking auf der Website und im Teilnehmerformular erhebt, warum, mit wem wir sie teilen und wie du Auskunft, Berichtigung oder Löschung beantragst.',
      canonical: PRIVACIDADE_HREF.de,
    },
    titulo: { antes: 'Datenschutz', destaque: 'erklärung.' },
    lead: 'Was wir erheben, warum, mit wem wir es teilen und wie du Auskunft, Berichtigung oder Löschung deiner Daten beantragen kannst.',
    atualizado: 'Zuletzt aktualisiert',
    indice: 'Auf dieser Seite',
    controlador: {
      titulo: 'Wer sich um deine Daten kümmert',
      nome: 'Mamut Trekking',
      cnpj: `Brasilianische Unternehmensnummer (CNPJ) ${CNPJ}`,
      endereco: ENDERECO,
      contato: 'Für alles rund um deine Daten, auch als unsere Datenschutzbeauftragte Stelle:',
    },
    secoes: [
      {
        id: 'was-wir-erheben',
        titulo: 'Was wir erheben und warum',
        blocos: [
          {
            tipo: 'itens',
            itens: [
              [
                'Angebotsanfragen (Kontaktseite).',
                'Name, E-Mail, Telefon, das Abenteuer, für das du dich interessierst, Daten, Gruppengröße, wie du anreist, und deine Nachricht. Das Formular schickt nichts an unseren Server: Es stellt die Nachricht zusammen und öffnet dein WhatsApp oder dein E-Mail-Programm, und du entscheidest, ob du sie sendest. Wir nutzen das, um zu antworten und dein Angebot zu erstellen.',
              ],
              [
                'Teilnehmerformular.',
                'Name, Geburtsdatum, Reisepass- oder Ausweisnummer, Alter, Staatsangehörigkeit, Beruf, Telefon, E-Mail, Adresse, Größe, Gewicht, Datum der Tour, Zahlungsart, wo du in der Chapada wohnst, und ein Notfallkontakt. Wir nutzen das, um zu wissen, wer auf dem Weg ist, die Reise zu organisieren (Transport, Unterkunft, Mahlzeiten) und schnell zu handeln, wenn etwas passiert.',
              ],
              [
                'Gesundheitsangaben (im Formular).',
                'Kondition, Allergien, Ernährungswünsche, Medikamente, Gesundheitsprobleme und Einschränkungen deiner Mobilität. Das brasilianische Recht stuft diese als sensible Daten ein: Wir nutzen sie nur für deine Sicherheit — Tempo und Route anpassen, deinen Guide informieren und im Notfall die Rettungsdienste verständigen — und nur mit deiner Einwilligung, die du im Formular selbst gibst.',
              ],
              [
                'Fotos und Videos von der Reise.',
                'Die Bedingungen im Formular erlauben uns, dein Bild und deine Stimme zu nutzen, um Mamut zu bewerben. Wenn du lieber nicht zu sehen sein möchtest, sag uns Bescheid; dann verwenden wir sie in künftigen Beiträgen nicht mehr.',
              ],
              [
                'Surfen auf der Website.',
                'Wir nutzen keine Werbetools. Für Besuchsstatistiken nutzen wir Google Analytics, wie im nächsten Abschnitt beschrieben. Der Server erfasst technische Daten zu jedem Besuch (IP-Adresse, Datum, Uhrzeit und Seite), wie es das brasilianische Internetgesetz verlangt. Deine Vorliebe für das helle oder dunkle Design wird nur in deinem Browser gespeichert.',
              ],
            ],
          },
        ],
      },
      {
        id: 'statistiken',
        titulo: 'Besuchsstatistiken (Google Analytics)',
        blocos: [
          { tipo: 'p', texto: 'Wir nutzen Google Analytics 4, um zu verstehen, wie die Website genutzt wird: wie viele Menschen sie besuchen, woher sie kommen (Suche, soziale Netzwerke, Links), welche Seiten und Touren am meisten angesehen werden und welche Buttons sie anklicken — zum Beispiel den für WhatsApp. So entscheiden wir, was wir verbessern.' },
          { tipo: 'p', texto: 'Google Analytics setzt Cookies in deinem Browser (etwa _ga) und erhält technische Daten zum Besuch: aufgerufene Seiten, Verweildauer, Geräte- und Browsertyp, Sprache und ungefährer Standort (Stadt und Land). Es übermittelt uns weder deinen Namen noch deine E-Mail-Adresse oder Telefonnummer, und wir verknüpfen diese Daten nicht mit Buchungsdaten.' },
          {
            tipo: 'lista',
            itens: [
              'Rechtsgrundlage: unser berechtigtes Interesse, die Website zu messen und zu verbessern (LGPD, Art. 7, IX).',
              'Speicherdauer: Die Daten bleiben bis zu 14 Monate in Google Analytics und werden danach gelöscht.',
              'Übermittlung: Die Daten gehen an Server von Google, auch in den USA (siehe „Internationale Übermittlung“).',
              'Widerspruch: Blockiere Drittanbieter-Cookies in deinem Browser oder installiere das offizielle Browser-Add-on zur Deaktivierung von Google Analytics (tools.google.com/dlpage/gaoptout).',
            ],
          },
        ],
      },
      {
        id: 'rechtsgrundlagen',
        titulo: 'Rechtsgrundlagen',
        blocos: [
          {
            tipo: 'p',
            texto: 'Wir verarbeiten personenbezogene Daten auf Grundlage des brasilianischen Allgemeinen Datenschutzgesetzes (LGPD, Gesetz 13.709/2018):',
          },
          {
            tipo: 'lista',
            itens: [
              'Angebotsanfragen und Buchungen: vorvertragliche Maßnahmen und Erfüllung des Reisevertrags (Art. 7, V);',
              'Gesundheitsdaten: deine ausdrückliche Einwilligung (Art. 11, I) und im Notfall der Schutz deines Lebens und deiner körperlichen Unversehrtheit (Art. 11, II, "e");',
              'Zugriffsprotokolle und Buchungsdaten: Erfüllung gesetzlicher Pflichten (Art. 7, II) und Ausübung von Rechten in Gerichtsverfahren (Art. 7, VI);',
              'Schutz vor Bots in den Formularen: unser berechtigtes Interesse, die Website sicher zu halten (Art. 7, IX).',
            ],
          },
        ],
      },
      {
        id: 'weitergabe',
        titulo: 'Mit wem wir Daten teilen',
        blocos: [
          { tipo: 'p', texto: 'Wir verkaufen oder vermieten niemals personenbezogene Daten. Wir teilen nur, was nötig ist, mit:' },
          {
            tipo: 'itens',
            itens: [
              [
                'Den Menschen, die die Reise mit uns durchführen.',
                'Guides, Fahrer und die Häuser und Pousadas auf der Route erhalten deinen Namen und das, was sie wissen müssen, um für dich zu sorgen — zum Beispiel einen Ernährungswunsch oder ein Gesundheitsproblem, das unterwegs wichtig ist.',
              ],
              [
                'Diensten, die wir für unsere Arbeit nutzen.',
                'Resend (Versand des Teilnehmerformulars per E-Mail), Google (reCAPTCHA, das in unseren Formularen Menschen von Bots unterscheidet), Meta (WhatsApp, wenn du dich entscheidest, dort mit uns zu sprechen), Notion (unsere interne Buchungsverwaltung), unser E-Mail-Anbieter und unser Website-Host.',
              ],
              [
                'Behörden.',
                'Wenn das Gesetz es verlangt oder im Notfall — zum Beispiel Rettungsdienste oder ein Krankenhaus.',
              ],
            ],
          },
        ],
      },
      {
        id: 'internationale-uebermittlung',
        titulo: 'Internationale Übermittlung',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Einige dieser Dienste (Resend, Google, Meta und Notion) speichern Daten auf Servern außerhalb Brasiliens, vor allem in den Vereinigten Staaten. Wir wählen Anbieter, die vertragliche Datenschutzklauseln bieten, wie es Artikel 33 der LGPD vorsieht.',
          },
        ],
      },
      {
        id: 'speicherdauer',
        titulo: 'Wie lange wir Daten speichern',
        blocos: [
          {
            tipo: 'lista',
            itens: [
              'Angebotsanfragen, aus denen keine Buchung wurde: bis zu 12 Monate.',
              'Teilnehmerformular und Buchungsdaten: bis zu 5 Jahre nach der Reise — die Frist für Ansprüche nach dem brasilianischen Verbraucherschutzgesetz.',
              'Zugriffsprotokolle der Website: 6 Monate, wie es das brasilianische Internetgesetz verlangt.',
            ],
          },
          { tipo: 'p', texto: 'Danach werden die Daten gelöscht oder anonymisiert.' },
        ],
      },
      {
        id: 'sicherheit',
        titulo: 'Sicherheit',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Die Website funktioniert nur über eine verschlüsselte Verbindung (HTTPS), unsere Formulare sind vor Bots geschützt, und der Zugriff auf Teilnehmerformulare ist auf das Team beschränkt, das deine Reise organisiert. Kein System ist unfehlbar; wenn ein Vorfall Folgen für dich haben kann, informieren wir dich und die brasilianische Nationale Datenschutzbehörde (ANPD).',
          },
        ],
      },
      {
        id: 'deine-rechte',
        titulo: 'Deine Rechte',
        blocos: [
          { tipo: 'p', texto: 'Du kannst jederzeit Folgendes beantragen:' },
          {
            tipo: 'lista',
            itens: [
              'Bestätigung, dass wir deine Daten verarbeiten, und Auskunft darüber;',
              'Berichtigung unvollständiger, unrichtiger oder veralteter Daten;',
              'Anonymisierung, Sperrung oder Löschung von Daten, die unnötig sind oder unrechtmäßig verarbeitet werden;',
              'Übertragung deiner Daten an einen anderen Anbieter;',
              'Auskunft darüber, mit wem wir sie teilen;',
              'Widerruf deiner Einwilligung, auch für Gesundheitsdaten und die Nutzung deines Bildes;',
              'Widerspruch gegen jede Verarbeitung, die du für unrechtmäßig hältst.',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Schick deinen Antrag per E-Mail oder WhatsApp (siehe oben). Wir antworten innerhalb von 15 Tagen. Bist du nicht zufrieden, kannst du auch eine Beschwerde bei der ANPD einreichen (gov.br/anpd).',
          },
        ],
      },
      {
        id: 'minderjaehrige',
        titulo: 'Kinder und Jugendliche',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Jugendliche unter 18 nehmen nur in Begleitung oder mit Erlaubnis eines Elternteils oder einer gesetzlichen Vertretung teil, die das Formular ausfüllt oder genehmigt und in ihrem Namen einwilligt.',
          },
        ],
      },
      {
        id: 'aenderungen',
        titulo: 'Änderungen dieser Erklärung',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Wenn wir ändern, wie wir mit deinen Daten umgehen, aktualisieren wir diese Seite und das Datum oben. Wichtige Änderungen teilen wir auch allen mit, die eine laufende Buchung haben.',
          },
        ],
      },
    ],
  },
};

/**
 * Link curto para a política, exibido junto aos formulários (os dois coletam
 * dados pessoais, então o aviso fica no ponto da coleta, não só no rodapé).
 */
export const PRIVACIDADE_NOTA: Record<Locale, { antes: string; link: string; depois: string }> = {
  pt: { antes: 'Como usamos os seus dados: ', link: 'Política de privacidade', depois: '.' },
  en: { antes: 'How we use your data: ', link: 'Privacy policy', depois: '.' },
  es: { antes: 'Cómo usamos tus datos: ', link: 'Política de privacidad', depois: '.' },
  fr: { antes: 'Comment nous utilisons vos données : ', link: 'Politique de confidentialité', depois: '.' },
  nl: { antes: 'Hoe we je gegevens gebruiken: ', link: 'Privacybeleid', depois: '.' },
  de: { antes: 'Wie wir deine Daten nutzen: ', link: 'Datenschutzerklärung', depois: '.' },
};
