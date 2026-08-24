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
 * ⚠️ ES é tradução feita neste repositório — a operadora não publica versão em
 * espanhol. A estrutura segue a de EN, porque o público também é estrangeiro.
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
  acoes: { email: string; whatsapp: string; nota: string };
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
    ],
    aceite: 'Li e aceito os termos acima.',
    acoes: {
      email: 'Enviar por e-mail',
      whatsapp: 'Enviar pelo WhatsApp',
      nota: 'Ao enviar, abrimos o seu app de e-mail ou o WhatsApp com o formulário já preenchido — nada é gravado neste site. É você quem dispara a mensagem.',
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
    ],
    aceite: 'I have read and accept the terms above.',
    acoes: {
      email: 'Send by email',
      whatsapp: 'Send on WhatsApp',
      nota: 'On submit we open your email app or WhatsApp with the form already filled in — nothing is stored on this site. You are the one who sends it.',
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
    ],
    aceite: 'Leí y acepto los términos anteriores.',
    acoes: {
      email: 'Enviar por correo',
      whatsapp: 'Enviar por WhatsApp',
      nota: 'Al enviar, abrimos tu app de correo o WhatsApp con el formulario ya completado — nada se guarda en este sitio. Eres tú quien envía el mensaje.',
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
};
