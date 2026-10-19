/**
 * Conteúdo do formulário do participante por idioma: rótulos, exemplos,
 * observações e texto legal, separados da UI para a operadora revisar sem
 * tocar em componente.
 *
 * PT é transcrição de mamut.agency/formulario-participante e EN de
 * mamut.agency/en/participant-form-mamut-trekking — os dois são embeds do
 * Tally, e as diferenças entre eles são do original, não do porte: o público
 * brasileiro informa CPF, o estrangeiro informa passaporte; a data do passeio
 * vira "check-in"; as formas de pagamento mudam; e o formulário PT tem uma
 * pergunta de saúde a mais (a de campo aberto no fim).
 *
 * ⚠️ ES, FR e NL são tradução feita neste repositório — a operadora não publica
 * versão em espanhol, francês nem holandês. A estrutura segue a de EN, porque o
 * público também é estrangeiro.
 * Os rótulos são seguros, mas o TEXTO LEGAL precisa de revisão antes de valer
 * como termo de responsabilidade assinado.
 */

import type { Locale } from '@/lib/site';

export type Campo = {
  label: string;
  placeholder?: string;
  hint?: string;
};

export type PerguntaMedica = {
  id: string;
  label: string;
  placeholder?: string;
};

export type ParticipanteContent = {
  meta: { title: string; description: string; canonical: string };
  titulo: { antes: string; destaque: string };
  lead: string;
  observacoesLabel: string;
  observacoes: readonly string[];
  blocos: {
    pessoais: string;
    passeio: string;
    medicas: string;
    medicasApoio: string;
    emergencia: string;
    termos: string;
  };
  campos: {
    nome: Campo;
    nascimento: Campo;
    documento: Campo;
    idade: Campo;
    nacionalidade: Campo;
    profissao: Campo;
    telefone: Campo;
    email: Campo;
    altura: Campo;
    peso: Campo;
    inicio: Campo;
    pagamento: Campo;
    endereco: Campo;
    cidade: Campo;
    hospedagem: Campo;
    emergenciaNome: Campo;
    emergenciaTelefone: Campo;
    emergenciaParentesco: Campo;
  };
  pagamentos: readonly string[];
  simNao: { sim: string; nao: string };
  sabeNadar: string;
  gravidez: string;
  perguntasMedicas: readonly PerguntaMedica[];
  termos: readonly string[];
  aceite: string;
  acoes: {
    email: string;
    whatsapp: string;
    enviando: string;
    sucesso: string;
    erro: string;
    erroFallback: string;
    recaptcha: string;
    nota: string;
  };
  documento: {
    titulo: string;
    pessoais: string;
    passeio: string;
    medicas: string;
    emergencia: string;
    termos: string;
    aceitos: string;
    naoAceitos: string;
    assunto: string;
    semNome: string;
  };
};

export const PARTICIPANTE_CONTENT: Record<Locale, ParticipanteContent> = {
  pt: {
    meta: {
      title: 'Formulário do participante',
      description:
        'Ficha do participante da Mamut Trekking: dados pessoais, informações médicas, contato de emergência e termo de responsabilidade.',
      canonical: '/pt/formulario-participante',
    },
    titulo: { antes: 'Antes da trilha,', destaque: 'a ficha.' },
    lead: 'Um formulário por participante. Leia as observações abaixo antes de preencher — elas definem quem pode ir e o que a Chapada vai cobrar de você.',
    observacoesLabel: 'Observações',
    observacoes: [
      'Os participantes devem ter mais de 18 anos. Participantes menores de idade devem estar acompanhados do responsável legal.',
      'É preciso condicionamento físico para descidas e subidas íngremes em terrenos acidentados, atravessar rios e riachos, escalaminhada e caminhar longas distâncias.',
      'Informe restrições alimentares. Os valores estão sujeitos a mudanças — consulte nosso atendimento para conferir o valor exato no intervalo da sua estadia.',
      'Reservas confirmadas não sofrem reajuste de valor.',
    ],
    blocos: {
      pessoais: 'Dados do participante',
      passeio: 'Sobre o passeio',
      medicas: 'Informações médicas',
      medicasApoio:
        'Fica com o guia e só é usado se algo acontecer na trilha. Se a resposta for “não”, escreva “não” — nenhum campo pode ficar em branco.',
      emergencia: 'Contato de emergência',
      termos: 'Termos e condições',
    },
    campos: {
      nome: { label: 'Nome completo', placeholder: 'Heloíze Torres' },
      nascimento: { label: 'Data de nascimento' },
      documento: { label: 'CPF', placeholder: '999.999.999-99' },
      idade: { label: 'Idade', placeholder: '36' },
      nacionalidade: { label: 'Nacionalidade', placeholder: 'Brasileira' },
      profissao: { label: 'Profissão', placeholder: 'Advogada' },
      telefone: { label: 'Telefone (WhatsApp)', placeholder: '+55 75 99999-9999' },
      email: { label: 'E-mail', placeholder: 'voce@email.com' },
      altura: { label: 'Altura', placeholder: '160', hint: 'Em centímetros.' },
      peso: { label: 'Peso', placeholder: '50', hint: 'Em quilos.' },
      inicio: { label: 'Data prevista de início do passeio' },
      pagamento: { label: 'Forma de pagamento' },
      endereco: { label: 'Endereço', placeholder: 'Rua 1º de Maio, nº 10' },
      cidade: { label: 'Cidade / Estado / País', placeholder: 'São Paulo — São Paulo — Brasil' },
      hospedagem: { label: 'Hospedagem na Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Nome do contato', placeholder: 'Suzana Torres' },
      emergenciaTelefone: { label: 'Telefone do contato', placeholder: '+55 75 99999-9999' },
      emergenciaParentesco: { label: 'Grau de parentesco', placeholder: 'Mãe' },
    },
    pagamentos: ['Cartão', 'Pix', 'Espécie'],
    simNao: { sim: 'Sim', nao: 'Não' },
    sabeNadar: 'Sabe nadar?',
    gravidez: 'Se for do sexo feminino, há alguma chance de estar grávida na data da atividade?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: 'Com que frequência pratica atividades físicas?',
        placeholder: 'Escalada 3x por semana e natação 2x por semana',
      },
      {
        id: 'alergias',
        label: 'Possui alergia? Se sim, quais e qual tratamento?',
        placeholder: 'Alergia a remédios, poeira, alimentos, etc.',
      },
      {
        id: 'restricoes',
        label: 'Possui restrições alimentares? Se sim, quais?',
        placeholder: 'Veganismo, intolerância a lactose, etc.',
      },
      {
        id: 'remedios',
        label:
          'Faz uso de remédios controlados? Se sim, especifique quais e o respectivo tratamento.',
        placeholder: 'Topiramato (anticonvulsivante)',
      },
      {
        id: 'tratamentos',
        label:
          'Fez tratamento com acompanhamento contra alguma doença e/ou cirurgia nos últimos 3 anos? Se sim, quais as recomendações médicas?',
        placeholder: 'Se não houver, escreva “não”.',
      },
      {
        id: 'motora',
        label: 'Possui alguma dificuldade motora? Se sim, especifique quais.',
        placeholder: 'Se não houver, escreva “não”.',
      },
      {
        id: 'outras',
        label: 'Existe mais alguma informação pertinente à sua saúde que nós deveríamos saber?',
        placeholder: 'Se não houver, escreva “não”.',
      },
    ],
    termos: [
      'As informações acima são verdadeiras e assumo todas as responsabilidades por sua exatidão.',
      'Declaro que esclareci todas as minhas dúvidas sobre a atividade, pagamento e segurança com a Mamut Trekking.',
      'Assumo, por minha livre e espontânea vontade, todos os riscos envolvidos e suas consequências pela participação neste evento, isentando a Mamut Trekking, seus organizadores e colaboradores, DE TODA E QUALQUER RESPONSABILIDADE por quaisquer danos materiais, morais ou físicos que porventura venha a sofrer, advindos da participação neste evento.',
      'Autorizo o uso de minha imagem e voz para fins de divulgação do evento, tanto virtual quanto impressa.',
      'Autorizo a Mamut Trekking a tratar os meus dados pessoais, inclusive as informações de saúde desta ficha, para organizar o passeio e cuidar da minha segurança, conforme a Política de privacidade do site.',
    ],
    aceite: 'Li e aceito os termos acima.',
    acoes: {
      email: 'Enviar ficha',
      whatsapp: 'Enviar pelo WhatsApp',
      enviando: 'Enviando…',
      sucesso: 'Ficha enviada. A gente confirma o recebimento pelo WhatsApp ou pelo e-mail que você informou.',
      erro: 'Não foi possível enviar a ficha.',
      erroFallback: 'Tente de novo em instantes ou use o botão do WhatsApp, que não depende do nosso servidor.',
      recaptcha: 'Não conseguimos confirmar que você não é um robô. Recarregue a página e tente de novo.',
      nota: 'A ficha vai por e-mail para a nossa equipe. O botão do WhatsApp abre o app com o formulário já preenchido, caso prefira mandar por lá.',
    },
    documento: {
      titulo: 'FORMULÁRIO DO PARTICIPANTE — MAMUT TREKKING',
      pessoais: 'DADOS PESSOAIS',
      passeio: 'PASSEIO',
      medicas: 'INFORMAÇÕES MÉDICAS',
      emergencia: 'CONTATO DE EMERGÊNCIA',
      termos: 'TERMOS E CONDIÇÕES',
      aceitos: 'Aceitos pelo participante no envio deste formulário.',
      naoAceitos: 'NÃO aceitos.',
      assunto: 'Formulário do participante',
      semNome: 'novo participante',
    },
  },

  en: {
    meta: {
      title: 'Participant form',
      description:
        'Mamut Trekking participant sheet: personal details, medical information, emergency contact and waiver.',
      canonical: '/en/participant-form',
    },
    titulo: { antes: 'Before the trail,', destaque: 'the paperwork.' },
    lead: 'One form per participant. Read the notes below before filling it in — they define who can join and what the Chapada will ask of you.',
    observacoesLabel: 'Please note',
    observacoes: [
      'Participants must be over 18 years of age. Participants under 18 must be accompanied by a legal guardian.',
      'Physical fitness is required for steep ascents and descents on rough terrain, crossing rivers and streams, rock climbing and walking long distances.',
      'Please inform us of any dietary restrictions. Prices are subject to change — contact our customer service to confirm the exact price for the dates of your stay.',
      'Confirmed reservations are not subject to price adjustments.',
    ],
    blocos: {
      pessoais: 'Participant details',
      passeio: 'About the trip',
      medicas: 'Medical information',
      medicasApoio:
        'This stays with your guide and is only used if something happens on the trail. If the answer is “no”, write “no” — no field can be left blank.',
      emergencia: 'Emergency contact',
      termos: 'Terms and conditions',
    },
    campos: {
      nome: { label: 'Full name', placeholder: 'Floriane Peron' },
      nascimento: { label: 'Date of birth' },
      documento: { label: 'Passport', placeholder: 'X6666665' },
      idade: { label: 'Age', placeholder: '36' },
      nacionalidade: { label: 'Nationality', placeholder: 'British' },
      profissao: { label: 'Work / profession', placeholder: 'Lawyer' },
      telefone: { label: 'Phone (WhatsApp)', placeholder: '+44 7700 900000' },
      email: { label: 'Email', placeholder: 'you@email.com' },
      altura: { label: 'Height', placeholder: '160', hint: 'In centimetres.' },
      peso: { label: 'Weight', placeholder: '50', hint: 'In kilograms.' },
      inicio: { label: 'Check-in' },
      pagamento: { label: 'Payment method' },
      endereco: { label: 'Address', placeholder: '10 First of May Street' },
      cidade: { label: 'City / State (province) / Country', placeholder: 'London — England' },
      hospedagem: { label: 'Guesthouse at Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Emergency contact name', placeholder: 'Suzana Peron' },
      emergenciaTelefone: { label: 'Emergency contact phone', placeholder: '+44 7700 900000' },
      emergenciaParentesco: { label: 'Relationship to you', placeholder: 'Mother' },
    },
    pagamentos: ['Card', 'Wise', 'Revolut', 'Cash'],
    simNao: { sim: 'Yes', nao: 'No' },
    sabeNadar: 'Can you swim?',
    gravidez: 'If you are female, is there any chance you may be pregnant on the date of the activity?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: 'How often do you exercise?',
        placeholder: 'Climbing 3x a week and swimming 2x a week',
      },
      {
        id: 'alergias',
        label: 'Do you have any allergies? If so, which ones and what treatment?',
        placeholder: 'Medicines, pollen, dust, food, anything else.',
      },
      {
        id: 'restricoes',
        label: 'Do you have any dietary restrictions? If so, which ones?',
        placeholder: 'Vegetarian, lactose intolerance, nuts, anything else.',
      },
      {
        id: 'remedios',
        label: 'Do you take any prescription medication? If so, which ones and what treatment?',
        placeholder: 'If none, write “no”.',
      },
      {
        id: 'tratamentos',
        label:
          'Have you undergone medical treatment for any illness and/or surgery in the last three years with medical supervision? If so, what were the medical recommendations?',
        placeholder: 'If none, write “no”.',
      },
      {
        id: 'motora',
        label: 'Do you have any motor difficulties? If so, please specify.',
        placeholder: 'If none, write “no”.',
      },
    ],
    termos: [
      'The information above is true, and I assume all responsibility for its accuracy.',
      'I declare that I have clarified all my doubts about the activity, safety and payment with Mamut Trekking.',
      'I assume, of my own free will, all risks involved and their consequences for participating in this event, exempting Mamut Trekking, its organizers and collaborators, FROM ANY AND ALL RESPONSIBILITY for any material, moral or physical damages that I may suffer arising from participation in this event.',
      'I authorize the use of my image and voice for the purpose of publicizing the event, both virtual and in print.',
      'I authorise Mamut Trekking to process my personal data, including the health information in this form, to organise the trip and look after my safety, as described in the website’s Privacy policy.',
    ],
    aceite: 'I have read and accept the terms above.',
    acoes: {
      email: 'Send form',
      whatsapp: 'Send on WhatsApp',
      enviando: 'Sending…',
      sucesso: 'Form sent. We will confirm we received it on WhatsApp or at the email address you provided.',
      erro: 'We could not send the form.',
      erroFallback: 'Try again in a moment, or use the WhatsApp button, which does not rely on our server.',
      recaptcha: 'We could not confirm you are not a robot. Reload the page and try again.',
      nota: 'The form is emailed to our team. The WhatsApp button opens the app with everything already filled in, if you prefer sending it there.',
    },
    documento: {
      titulo: 'PARTICIPANT FORM — MAMUT TREKKING',
      pessoais: 'PERSONAL DETAILS',
      passeio: 'TRIP',
      medicas: 'MEDICAL INFORMATION',
      emergencia: 'EMERGENCY CONTACT',
      termos: 'TERMS AND CONDITIONS',
      aceitos: 'Accepted by the participant on submitting this form.',
      naoAceitos: 'NOT accepted.',
      assunto: 'Participant form',
      semNome: 'new participant',
    },
  },

  es: {
    meta: {
      title: 'Formulario del participante',
      description:
        'Ficha del participante de Mamut Trekking: datos personales, información médica, contacto de emergencia y término de responsabilidad.',
      canonical: '/es/formulario-participante',
    },
    titulo: { antes: 'Antes del sendero,', destaque: 'la ficha.' },
    lead: 'Un formulario por participante. Lee las observaciones antes de completarlo — definen quién puede ir y lo que la Chapada te va a exigir.',
    observacoesLabel: 'Observaciones',
    observacoes: [
      'Los participantes deben ser mayores de 18 años. Los menores de edad deben estar acompañados por su responsable legal.',
      'Se requiere condición física para subidas y bajadas empinadas en terreno accidentado, cruzar ríos y arroyos, trepar y caminar largas distancias.',
      'Informa cualquier restricción alimentaria. Los valores están sujetos a cambios — consulta con nuestra atención para confirmar el valor exacto en las fechas de tu estadía.',
      'Las reservas confirmadas no sufren reajuste de valor.',
    ],
    blocos: {
      pessoais: 'Datos del participante',
      passeio: 'Sobre el paseo',
      medicas: 'Información médica',
      medicasApoio:
        'Queda con el guía y solo se usa si algo ocurre en el sendero. Si la respuesta es “no”, escribe “no” — ningún campo puede quedar en blanco.',
      emergencia: 'Contacto de emergencia',
      termos: 'Términos y condiciones',
    },
    campos: {
      nome: { label: 'Nombre completo', placeholder: 'Floriane Perón' },
      nascimento: { label: 'Fecha de nacimiento' },
      documento: { label: 'Pasaporte', placeholder: 'X6666665' },
      idade: { label: 'Edad', placeholder: '36' },
      nacionalidade: { label: 'Nacionalidad', placeholder: 'Argentina' },
      profissao: { label: 'Profesión', placeholder: 'Abogada' },
      telefone: { label: 'Teléfono (WhatsApp)', placeholder: '+54 9 11 9999-9999' },
      email: { label: 'Correo electrónico', placeholder: 'tu@email.com' },
      altura: { label: 'Estatura', placeholder: '160', hint: 'En centímetros.' },
      peso: { label: 'Peso', placeholder: '50', hint: 'En kilos.' },
      inicio: { label: 'Check-in' },
      pagamento: { label: 'Forma de pago' },
      endereco: { label: 'Dirección', placeholder: 'Calle 1º de Mayo, nº 10' },
      cidade: { label: 'Ciudad / Provincia / País', placeholder: 'Buenos Aires — Argentina' },
      hospedagem: { label: 'Alojamiento en la Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Nombre del contacto', placeholder: 'Suzana Perón' },
      emergenciaTelefone: { label: 'Teléfono del contacto', placeholder: '+54 9 11 9999-9999' },
      emergenciaParentesco: { label: 'Parentesco', placeholder: 'Madre' },
    },
    pagamentos: ['Tarjeta', 'Wise', 'Revolut', 'Efectivo'],
    simNao: { sim: 'Sí', nao: 'No' },
    sabeNadar: '¿Sabes nadar?',
    gravidez: 'Si eres de sexo femenino, ¿hay alguna posibilidad de estar embarazada en la fecha de la actividad?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: '¿Con qué frecuencia practicas actividad física?',
        placeholder: 'Escalada 3x por semana y natación 2x por semana',
      },
      {
        id: 'alergias',
        label: '¿Tienes alergias? Si es así, ¿cuáles y con qué tratamiento?',
        placeholder: 'Medicamentos, polen, polvo, alimentos, etc.',
      },
      {
        id: 'restricoes',
        label: '¿Tienes restricciones alimentarias? Si es así, ¿cuáles?',
        placeholder: 'Vegetarianismo, intolerancia a la lactosa, frutos secos, etc.',
      },
      {
        id: 'remedios',
        label: '¿Tomas medicamentos controlados? Si es así, especifica cuáles y el tratamiento.',
        placeholder: 'Si no hay, escribe “no”.',
      },
      {
        id: 'tratamentos',
        label:
          '¿Hiciste tratamiento con seguimiento médico por alguna enfermedad y/o cirugía en los últimos 3 años? Si es así, ¿cuáles fueron las recomendaciones médicas?',
        placeholder: 'Si no hay, escribe “no”.',
      },
      {
        id: 'motora',
        label: '¿Tienes alguna dificultad motora? Si es así, especifica cuál.',
        placeholder: 'Si no hay, escribe “no”.',
      },
    ],
    termos: [
      'La información anterior es verdadera y asumo toda la responsabilidad por su exactitud.',
      'Declaro que aclaré todas mis dudas sobre la actividad, el pago y la seguridad con Mamut Trekking.',
      'Asumo, por mi libre y espontánea voluntad, todos los riesgos involucrados y sus consecuencias por participar en este evento, eximiendo a Mamut Trekking, sus organizadores y colaboradores, DE TODA Y CUALQUIER RESPONSABILIDAD por cualquier daño material, moral o físico que pudiera sufrir, derivado de la participación en este evento.',
      'Autorizo el uso de mi imagen y voz para fines de divulgación del evento, tanto virtual como impresa.',
      'Autorizo a Mamut Trekking a tratar mis datos personales, incluida la información de salud de esta ficha, para organizar el paseo y cuidar de mi seguridad, según la Política de privacidad del sitio.',
    ],
    aceite: 'Leí y acepto los términos anteriores.',
    acoes: {
      email: 'Enviar ficha',
      whatsapp: 'Enviar por WhatsApp',
      enviando: 'Enviando…',
      sucesso: 'Ficha enviada. Confirmamos la recepción por WhatsApp o al correo que indicaste.',
      erro: 'No fue posible enviar la ficha.',
      erroFallback: 'Probá de nuevo en unos instantes o usá el botón de WhatsApp, que no depende de nuestro servidor.',
      recaptcha: 'No pudimos confirmar que no sos un robot. Recargá la página y probá de nuevo.',
      nota: 'La ficha se envía por correo a nuestro equipo. El botón de WhatsApp abre la app con el formulario ya completado, si preferís mandarlo por ahí.',
    },
    documento: {
      titulo: 'FORMULARIO DEL PARTICIPANTE — MAMUT TREKKING',
      pessoais: 'DATOS PERSONALES',
      passeio: 'PASEO',
      medicas: 'INFORMACIÓN MÉDICA',
      emergencia: 'CONTACTO DE EMERGENCIA',
      termos: 'TÉRMINOS Y CONDICIONES',
      aceitos: 'Aceptados por el participante al enviar este formulario.',
      naoAceitos: 'NO aceptados.',
      assunto: 'Formulario del participante',
      semNome: 'nuevo participante',
    },
  },

  fr: {
    meta: {
      title: 'Fiche du participant',
      description:
        'Fiche du participant Mamut Trekking : données personnelles, informations médicales, contact d’urgence et décharge de responsabilité.',
      canonical: '/fr/formulaire-participant',
    },
    titulo: { antes: 'Avant le sentier,', destaque: 'la fiche.' },
    lead: 'Une fiche par participant. Lisez les remarques ci-dessous avant de la remplir — elles précisent qui peut participer et ce que la Chapada va exiger de vous.',
    observacoesLabel: 'Remarques',
    observacoes: [
      'Les participants doivent avoir plus de 18 ans. Les participants mineurs doivent être accompagnés de leur représentant légal.',
      'Une bonne condition physique est nécessaire pour les montées et descentes raides sur terrain accidenté, la traversée de rivières et de ruisseaux, les passages d’escalade facile et la marche sur de longues distances.',
      'Signalez toute restriction alimentaire. Les tarifs peuvent changer — contactez notre équipe pour connaître le tarif exact aux dates de votre séjour.',
      'Les réservations confirmées ne font l’objet d’aucune révision de prix.',
    ],
    blocos: {
      pessoais: 'Informations sur le participant',
      passeio: 'À propos de la sortie',
      medicas: 'Informations médicales',
      medicasApoio:
        'Elles restent avec le guide et ne servent que s’il se passe quelque chose sur le sentier. Si la réponse est « non », écrivez « non » — aucun champ ne peut rester vide.',
      emergencia: 'Contact d’urgence',
      termos: 'Conditions générales',
    },
    campos: {
      nome: { label: 'Nom complet', placeholder: 'Floriane Peron' },
      nascimento: { label: 'Date de naissance' },
      documento: { label: 'Passeport', placeholder: 'X6666665' },
      idade: { label: 'Âge', placeholder: '36' },
      nacionalidade: { label: 'Nationalité', placeholder: 'Française' },
      profissao: { label: 'Profession', placeholder: 'Avocate' },
      telefone: { label: 'Téléphone (WhatsApp)', placeholder: '+33 6 12 34 56 78' },
      email: { label: 'E-mail', placeholder: 'vous@email.com' },
      altura: { label: 'Taille', placeholder: '160', hint: 'En centimètres.' },
      peso: { label: 'Poids', placeholder: '50', hint: 'En kilos.' },
      inicio: { label: 'Date d’arrivée' },
      pagamento: { label: 'Mode de paiement' },
      endereco: { label: 'Adresse', placeholder: '10 rue du 1er-Mai' },
      cidade: { label: 'Ville / Région / Pays', placeholder: 'Lyon — Auvergne-Rhône-Alpes — France' },
      hospedagem: { label: 'Hébergement dans la Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Nom du contact', placeholder: 'Suzana Peron' },
      emergenciaTelefone: { label: 'Téléphone du contact', placeholder: '+33 6 12 34 56 78' },
      emergenciaParentesco: { label: 'Lien de parenté', placeholder: 'Mère' },
    },
    pagamentos: ['Carte', 'Wise', 'Revolut', 'Espèces'],
    simNao: { sim: 'Oui', nao: 'Non' },
    sabeNadar: 'Savez-vous nager ?',
    gravidez: 'Si vous êtes de sexe féminin, existe-t-il une possibilité que vous soyez enceinte à la date de l’activité ?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: 'À quelle fréquence pratiquez-vous une activité physique ?',
        placeholder: 'Escalade 3 fois par semaine et natation 2 fois par semaine',
      },
      {
        id: 'alergias',
        label: 'Avez-vous des allergies ? Si oui, lesquelles et quel traitement ?',
        placeholder: 'Médicaments, pollen, poussière, aliments, autre.',
      },
      {
        id: 'restricoes',
        label: 'Avez-vous des restrictions alimentaires ? Si oui, lesquelles ?',
        placeholder: 'Végétarisme, intolérance au lactose, fruits à coque, autre.',
      },
      {
        id: 'remedios',
        label: 'Prenez-vous des médicaments sur ordonnance ? Si oui, précisez lesquels et le traitement correspondant.',
        placeholder: 'Si ce n’est pas le cas, écrivez « non ».',
      },
      {
        id: 'tratamentos',
        label:
          'Avez-vous suivi, au cours des 3 dernières années, un traitement sous surveillance médicale pour une maladie et/ou subi une intervention chirurgicale ? Si oui, quelles ont été les recommandations médicales ?',
        placeholder: 'Si ce n’est pas le cas, écrivez « non ».',
      },
      {
        id: 'motora',
        label: 'Avez-vous des difficultés motrices ? Si oui, précisez lesquelles.',
        placeholder: 'Si ce n’est pas le cas, écrivez « non ».',
      },
    ],
    termos: [
      'Les informations ci-dessus sont exactes et j’assume l’entière responsabilité de leur exactitude.',
      'Je déclare avoir obtenu de Mamut Trekking des réponses à toutes mes questions concernant l’activité, le paiement et la sécurité.',
      'J’assume, de mon plein gré, tous les risques liés à ma participation à cet événement et leurs conséquences, et j’exonère Mamut Trekking, ses organisateurs et ses collaborateurs DE TOUTE RESPONSABILITÉ, QUELLE QU’ELLE SOIT, pour tout dommage matériel, moral ou physique que je pourrais subir du fait de ma participation à cet événement.',
      'J’autorise l’utilisation de mon image et de ma voix à des fins de promotion de l’événement, sur support numérique comme imprimé.',
      'J’autorise Mamut Trekking à traiter mes données personnelles, y compris les informations de santé de cette fiche, pour organiser la sortie et veiller à ma sécurité, conformément à la Politique de confidentialité du site.',
    ],
    aceite: 'J’ai lu et j’accepte les conditions ci-dessus.',
    acoes: {
      email: 'Envoyer la fiche',
      whatsapp: 'Envoyer sur WhatsApp',
      enviando: 'Envoi…',
      sucesso: 'Fiche envoyée. Nous vous confirmerons sa réception sur WhatsApp ou à l’adresse e-mail que vous avez indiquée.',
      erro: 'Impossible d’envoyer la fiche.',
      erroFallback: 'Réessayez dans quelques instants ou utilisez le bouton WhatsApp, qui ne dépend pas de notre serveur.',
      recaptcha: 'Nous n’avons pas pu confirmer que vous n’êtes pas un robot. Rechargez la page et réessayez.',
      nota: 'La fiche est envoyée par e-mail à notre équipe. Le bouton WhatsApp ouvre l’application avec le formulaire déjà rempli, si vous préférez l’envoyer par ce biais.',
    },
    documento: {
      titulo: 'FICHE DU PARTICIPANT — MAMUT TREKKING',
      pessoais: 'DONNÉES PERSONNELLES',
      passeio: 'SORTIE',
      medicas: 'INFORMATIONS MÉDICALES',
      emergencia: 'CONTACT D’URGENCE',
      termos: 'CONDITIONS GÉNÉRALES',
      aceitos: 'Acceptées par le participant lors de l’envoi de cette fiche.',
      naoAceitos: 'NON acceptées.',
      assunto: 'Fiche du participant',
      semNome: 'nouveau participant',
    },
  },
  nl: {
    meta: {
      title: 'Deelnemersformulier',
      description:
        'Deelnemersformulier van Mamut Trekking: persoonsgegevens, medische informatie, contactpersoon voor noodgevallen en aansprakelijkheidsverklaring.',
      canonical: '/nl/deelnemersformulier',
    },
    titulo: { antes: 'Voor het pad,', destaque: 'het formulier.' },
    lead: 'Eén formulier per deelnemer. Lees de opmerkingen hieronder voordat je het invult — ze bepalen wie mee kan en wat de Chapada van je zal vragen.',
    observacoesLabel: 'Let op',
    observacoes: [
      'Deelnemers moeten ouder zijn dan 18 jaar. Deelnemers jonger dan 18 moeten worden begeleid door een wettelijke vertegenwoordiger.',
      'Je hebt een goede conditie nodig voor steile klimmen en afdalingen op ruig terrein, het oversteken van rivieren en beken, klauteren en het lopen van lange afstanden.',
      'Geef eventuele dieetwensen aan ons door. Prijzen kunnen veranderen — neem contact op met onze klantenservice om de exacte prijs voor de data van je verblijf te bevestigen.',
      'Bevestigde reserveringen worden niet in prijs aangepast.',
    ],
    blocos: {
      pessoais: 'Gegevens van de deelnemer',
      passeio: 'Over de tocht',
      medicas: 'Medische informatie',
      medicasApoio:
        'Dit blijft bij je gids en wordt alleen gebruikt als er onderweg iets gebeurt. Is het antwoord “nee”, schrijf dan “nee” — geen enkel veld mag leeg blijven.',
      emergencia: 'Contactpersoon voor noodgevallen',
      termos: 'Voorwaarden',
    },
    campos: {
      nome: { label: 'Volledige naam', placeholder: 'Sanne de Vries' },
      nascimento: { label: 'Geboortedatum' },
      documento: { label: 'Paspoort', placeholder: 'NX1234567' },
      idade: { label: 'Leeftijd', placeholder: '36' },
      nacionalidade: { label: 'Nationaliteit', placeholder: 'Nederlands' },
      profissao: { label: 'Werk / beroep', placeholder: 'Advocaat' },
      telefone: { label: 'Telefoon (WhatsApp)', placeholder: '+31 6 12345678' },
      email: { label: 'E-mail', placeholder: 'jij@email.nl' },
      altura: { label: 'Lengte', placeholder: '170', hint: 'In centimeters.' },
      peso: { label: 'Gewicht', placeholder: '65', hint: 'In kilogram.' },
      inicio: { label: 'Aankomst' },
      pagamento: { label: 'Betaalmethode' },
      endereco: { label: 'Adres', placeholder: 'Kerkstraat 10' },
      cidade: { label: 'Stad / provincie / land', placeholder: 'Utrecht — Nederland' },
      hospedagem: { label: 'Onderkomen in de Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Naam van de contactpersoon voor noodgevallen', placeholder: 'Anna de Vries' },
      emergenciaTelefone: { label: 'Telefoon van de contactpersoon voor noodgevallen', placeholder: '+31 6 87654321' },
      emergenciaParentesco: { label: 'Relatie tot jou', placeholder: 'Moeder' },
    },
    pagamentos: ['Creditcard', 'Wise', 'Revolut', 'Contant'],
    simNao: { sim: 'Ja', nao: 'Nee' },
    sabeNadar: 'Kun je zwemmen?',
    gravidez: 'Ben je een vrouw: is er een kans dat je op de datum van de activiteit zwanger bent?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: 'Hoe vaak sport je?',
        placeholder: 'Klimmen 3x per week en zwemmen 2x per week',
      },
      {
        id: 'alergias',
        label: 'Heb je allergieën? Zo ja, welke en welke behandeling?',
        placeholder: 'Medicijnen, pollen, stof, voedsel, iets anders.',
      },
      {
        id: 'restricoes',
        label: 'Heb je dieetwensen? Zo ja, welke?',
        placeholder: 'Vegetarisch, lactose-intolerantie, noten, iets anders.',
      },
      {
        id: 'remedios',
        label: 'Gebruik je medicijnen op voorschrift? Zo ja, welke en welke behandeling?',
        placeholder: 'Zo niet, schrijf dan “nee”.',
      },
      {
        id: 'tratamentos',
        label:
          'Ben je de afgelopen drie jaar onder medisch toezicht behandeld voor een ziekte en/of geopereerd? Zo ja, wat waren de medische aanbevelingen?',
        placeholder: 'Zo niet, schrijf dan “nee”.',
      },
      {
        id: 'motora',
        label: 'Heb je motorische beperkingen? Zo ja, welke?',
        placeholder: 'Zo niet, schrijf dan “nee”.',
      },
    ],
    termos: [
      'De bovenstaande informatie is waar, en ik neem alle verantwoordelijkheid voor de juistheid ervan.',
      'Ik verklaar dat ik al mijn vragen over de activiteit, de veiligheid en de betaling met Mamut Trekking heb opgehelderd.',
      'Ik aanvaard uit vrije wil alle risico’s die deelname aan deze activiteit met zich meebrengt en de gevolgen daarvan, en ontsla Mamut Trekking, de organisatoren en medewerkers VAN ELKE AANSPRAKELIJKHEID voor materiële, morele of lichamelijke schade die ik door deelname aan deze activiteit kan oplopen.',
      'Ik geef toestemming voor het gebruik van mijn beeld en stem om de activiteit te promoten, zowel online als in drukwerk.',
      'Ik geef Mamut Trekking toestemming om mijn persoonsgegevens te verwerken, inclusief de gezondheidsinformatie in dit formulier, om de reis te organiseren en voor mijn veiligheid te zorgen, zoals beschreven in het Privacybeleid van de website.',
    ],
    aceite: 'Ik heb de bovenstaande voorwaarden gelezen en ga ermee akkoord.',
    acoes: {
      email: 'Formulier versturen',
      whatsapp: 'Versturen via WhatsApp',
      enviando: 'Bezig met versturen…',
      sucesso: 'Formulier verstuurd. We bevestigen de ontvangst via WhatsApp of op het e-mailadres dat je hebt opgegeven.',
      erro: 'We konden het formulier niet versturen.',
      erroFallback: 'Probeer het zo meteen opnieuw, of gebruik de WhatsApp-knop, die niet afhankelijk is van onze server.',
      recaptcha: 'We konden niet bevestigen dat je geen robot bent. Herlaad de pagina en probeer het opnieuw.',
      nota: 'Het formulier wordt per e-mail naar ons team gestuurd. De WhatsApp-knop opent de app met alles al ingevuld, als je het liever daar verstuurt.',
    },
    documento: {
      titulo: 'DEELNEMERSFORMULIER — MAMUT TREKKING',
      pessoais: 'PERSOONSGEGEVENS',
      passeio: 'TOCHT',
      medicas: 'MEDISCHE INFORMATIE',
      emergencia: 'CONTACTPERSOON VOOR NOODGEVALLEN',
      termos: 'VOORWAARDEN',
      aceitos: 'Geaccepteerd door de deelnemer bij het versturen van dit formulier.',
      naoAceitos: 'NIET geaccepteerd.',
      assunto: 'Deelnemersformulier',
      semNome: 'nieuwe deelnemer',
    },
  },
  de: {
    meta: {
      title: 'Teilnehmerformular',
      description:
        'Teilnehmerformular von Mamut Trekking: persönliche Daten, medizinische Informationen, Notfallkontakt und Haftungserklärung.',
      canonical: '/de/teilnehmerformular',
    },
    titulo: { antes: 'Vor dem Weg,', destaque: 'das Formular.' },
    lead: 'Ein Formular pro teilnehmender Person. Lies die Hinweise unten, bevor du es ausfüllst — sie bestimmen, wer mitkommen kann und was die Chapada von dir verlangen wird.',
    observacoesLabel: 'Bitte beachten',
    observacoes: [
      'Teilnehmende müssen über 18 Jahre alt sein. Teilnehmende unter 18 müssen von einer gesetzlichen Vertretung begleitet werden.',
      'Du brauchst eine gute Kondition für steile Auf- und Abstiege auf rauem Gelände, das Durchqueren von Flüssen und Bächen, Kletterpassagen und das Gehen langer Strecken.',
      'Teile uns eventuelle Ernährungswünsche mit. Preise können sich ändern — melde dich bei unserem Kundenservice, um den genauen Preis für die Daten deines Aufenthalts zu bestätigen.',
      'Bestätigte Buchungen werden im Preis nicht angepasst.',
    ],
    blocos: {
      pessoais: 'Daten der teilnehmenden Person',
      passeio: 'Zur Tour',
      medicas: 'Medizinische Informationen',
      medicasApoio:
        'Das bleibt bei deinem Guide und wird nur genutzt, wenn unterwegs etwas passiert. Lautet die Antwort „nein“, schreib „nein“ — kein Feld darf leer bleiben.',
      emergencia: 'Notfallkontakt',
      termos: 'Bedingungen',
    },
    campos: {
      nome: { label: 'Vollständiger Name', placeholder: 'Lena Schmidt' },
      nascimento: { label: 'Geburtsdatum' },
      documento: { label: 'Reisepass', placeholder: 'C01X00T47' },
      idade: { label: 'Alter', placeholder: '36' },
      nacionalidade: { label: 'Staatsangehörigkeit', placeholder: 'Deutsch' },
      profissao: { label: 'Tätigkeit / Beruf', placeholder: 'Anwältin' },
      telefone: { label: 'Telefon (WhatsApp)', placeholder: '+49 151 23456789' },
      email: { label: 'E-Mail', placeholder: 'du@email.de' },
      altura: { label: 'Größe', placeholder: '170', hint: 'In Zentimetern.' },
      peso: { label: 'Gewicht', placeholder: '65', hint: 'In Kilogramm.' },
      inicio: { label: 'Ankunft' },
      pagamento: { label: 'Zahlungsart' },
      endereco: { label: 'Adresse', placeholder: 'Hauptstraße 10' },
      cidade: { label: 'Stadt / Bundesland / Land', placeholder: 'München — Deutschland' },
      hospedagem: { label: 'Unterkunft in der Chapada Diamantina', placeholder: 'Viela Hostel' },
      emergenciaNome: { label: 'Name des Notfallkontakts', placeholder: 'Anna Schmidt' },
      emergenciaTelefone: { label: 'Telefon des Notfallkontakts', placeholder: '+49 151 87654321' },
      emergenciaParentesco: { label: 'Beziehung zu dir', placeholder: 'Mutter' },
    },
    pagamentos: ['Kreditkarte', 'Wise', 'Revolut', 'Bar'],
    simNao: { sim: 'Ja', nao: 'Nein' },
    sabeNadar: 'Kannst du schwimmen?',
    gravidez: 'Falls du eine Frau bist: Besteht die Möglichkeit, dass du am Datum der Aktivität schwanger bist?',
    perguntasMedicas: [
      {
        id: 'atividades',
        label: 'Wie oft treibst du Sport?',
        placeholder: 'Klettern 3x pro Woche und Schwimmen 2x pro Woche',
      },
      {
        id: 'alergias',
        label: 'Hast du Allergien? Wenn ja, welche und welche Behandlung?',
        placeholder: 'Medikamente, Pollen, Staub, Lebensmittel, etwas anderes.',
      },
      {
        id: 'restricoes',
        label: 'Hast du Ernährungswünsche? Wenn ja, welche?',
        placeholder: 'Vegetarisch, Laktoseintoleranz, Nüsse, etwas anderes.',
      },
      {
        id: 'remedios',
        label: 'Nimmst du verschreibungspflichtige Medikamente? Wenn ja, welche und welche Behandlung?',
        placeholder: 'Wenn nicht, schreib „nein“.',
      },
      {
        id: 'tratamentos',
        label:
          'Wurdest du in den letzten drei Jahren unter ärztlicher Aufsicht wegen einer Krankheit behandelt und/oder operiert? Wenn ja, was waren die ärztlichen Empfehlungen?',
        placeholder: 'Wenn nicht, schreib „nein“.',
      },
      {
        id: 'motora',
        label: 'Hast du motorische Einschränkungen? Wenn ja, welche?',
        placeholder: 'Wenn nicht, schreib „nein“.',
      },
    ],
    termos: [
      'Die oben stehenden Angaben sind wahr, und ich übernehme die volle Verantwortung für ihre Richtigkeit.',
      'Ich erkläre, dass ich alle meine Fragen zur Aktivität, zur Sicherheit und zur Zahlung mit Mamut Trekking geklärt habe.',
      'Ich übernehme aus freiem Willen alle Risiken, die die Teilnahme an dieser Aktivität mit sich bringt, und deren Folgen, und stelle Mamut Trekking, die Organisatoren und Mitarbeitenden VON JEGLICHER HAFTUNG frei für materielle, immaterielle oder körperliche Schäden, die mir durch die Teilnahme an dieser Aktivität entstehen können.',
      'Ich erlaube die Nutzung meines Bildes und meiner Stimme zur Bewerbung der Aktivität, sowohl online als auch in gedruckter Form.',
      'Ich erlaube Mamut Trekking, meine personenbezogenen Daten zu verarbeiten, einschließlich der Gesundheitsangaben in diesem Formular, um die Reise zu organisieren und für meine Sicherheit zu sorgen, wie in der Datenschutzerklärung der Website beschrieben.',
    ],
    aceite: 'Ich habe die oben stehenden Bedingungen gelesen und stimme ihnen zu.',
    acoes: {
      email: 'Formular senden',
      whatsapp: 'Per WhatsApp senden',
      enviando: 'Wird gesendet…',
      sucesso: 'Formular gesendet. Wir bestätigen den Eingang per WhatsApp oder an die E-Mail-Adresse, die du angegeben hast.',
      erro: 'Wir konnten das Formular nicht senden.',
      erroFallback: 'Versuch es gleich noch einmal oder nutze den WhatsApp-Button, der nicht von unserem Server abhängt.',
      recaptcha: 'Wir konnten nicht bestätigen, dass du kein Roboter bist. Lade die Seite neu und versuche es noch einmal.',
      nota: 'Das Formular wird per E-Mail an unser Team geschickt. Der WhatsApp-Button öffnet die App mit allem bereits ausgefüllt, wenn du es lieber dort sendest.',
    },
    documento: {
      titulo: 'TEILNEHMERFORMULAR — MAMUT TREKKING',
      pessoais: 'PERSÖNLICHE DATEN',
      passeio: 'TOUR',
      medicas: 'MEDIZINISCHE INFORMATIONEN',
      emergencia: 'NOTFALLKONTAKT',
      termos: 'BEDINGUNGEN',
      aceitos: 'Von der teilnehmenden Person beim Senden dieses Formulars akzeptiert.',
      naoAceitos: 'NICHT akzeptiert.',
      assunto: 'Teilnehmerformular',
      semNome: 'neue teilnehmende Person',
    },
  },
};
