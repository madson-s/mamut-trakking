import type { Locale } from '@/lib/site';

/**
 * Política de privacidade, nos quatro idiomas.
 *
 * Substitui a página da iubenda que o WordPress linkava (2023), que só cobria
 * um formulário de contato com nome, e-mail e telefone. O site novo coleta bem
 * mais — a ficha do participante pede documento, endereço e dados de saúde —,
 * então o texto foi reescrito a partir do que o código de fato faz:
 *   • Contato: o formulário não passa pelo servidor; monta a mensagem e abre o
 *     WhatsApp ou o app de e-mail da pessoa (`ContatoForm`).
 *   • Ficha do participante: vai por e-mail via Resend (`/api/formulario-participante`)
 *     ou pelo WhatsApp; não é gravada em banco do site.
 *   • reCAPTCHA v3 só nas páginas com formulário; nenhum analytics nem pixel.
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
};

/** Data da última revisão do texto (ISO), exibida no idioma da página. */
export const PRIVACIDADE_ATUALIZADA_EM = '2026-10-14';

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
                'Não usamos ferramentas de estatística nem de publicidade, e não há cookies nossos de rastreamento. O servidor registra dados técnicos de cada acesso (endereço IP, data, hora e página), como exige o Marco Civil da Internet. A preferência de tema claro ou escuro fica guardada só no seu navegador.',
              ],
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
                'We use no analytics or advertising tools and set no tracking cookies of our own. The server logs technical data about each visit (IP address, date, time and page), as Brazilian internet law requires. Your light or dark theme preference is stored only in your browser.',
              ],
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
                'No usamos herramientas de estadística ni de publicidad, ni cookies propias de rastreo. El servidor registra datos técnicos de cada acceso (dirección IP, fecha, hora y página), como exige la ley brasileña de internet. Tu preferencia de tema claro u oscuro queda guardada solo en tu navegador.',
              ],
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
                'Nous n’utilisons aucun outil de statistiques ni de publicité, et nous ne déposons aucun cookie de suivi qui nous soit propre. Le serveur enregistre des données techniques de chaque visite (adresse IP, date, heure et page), comme l’exige le Marco Civil da Internet (loi brésilienne encadrant l’internet). Votre préférence de thème clair ou sombre est conservée uniquement dans votre navigateur.',
              ],
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
};
