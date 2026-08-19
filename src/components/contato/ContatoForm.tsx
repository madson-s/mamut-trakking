'use client';

import { useState, type FormEvent } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Field,
  Heading,
  Input,
  SegmentedControl,
  Text,
  Textarea,
} from '@/components/ui';
import { SITE } from '@/lib/site';

// Mesmos campos do formulário publicado em mamut.agency/contato.
const AVENTURAS = ['Trekking', 'Acampamento', 'Travessias', 'Trilhas Curtas', 'Lua de Mel'] as const;
const CHEGADA = [
  { value: 'Avião', label: 'Avião' },
  { value: 'Ônibus', label: 'Ônibus' },
  { value: 'Carro Particular', label: 'Carro' },
] as const;

type Chegada = (typeof CHEGADA)[number]['value'];

function formatDate(iso: string) {
  if (!iso) return 'a definir';
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

/**
 * O site é estático (sem backend): em vez de um POST, o formulário monta a
 * mensagem e abre o canal escolhido — WhatsApp (o mesmo caminho do resto do
 * site) ou e-mail. A validação é a nativa do browser, via `required`.
 */
export function ContatoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [aventuras, setAventuras] = useState<string[]>([]);
  const [chegada, setChegada] = useState<Chegada>('Avião');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [grupo, setGrupo] = useState('2');
  const [mensagem, setMensagem] = useState('');

  const toggleAventura = (item: string) => {
    setAventuras((atual) =>
      atual.includes(item) ? atual.filter((a) => a !== item) : [...atual, item],
    );
  };

  const montarMensagem = () =>
    [
      'Olá! Vim pelo site da Mamut.',
      '',
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `WhatsApp: ${telefone}`,
      `Tipo de aventura: ${aventuras.length ? aventuras.join(', ') : 'ainda não sei'}`,
      `Como pretendo chegar: ${chegada}`,
      `Check-in: ${formatDate(checkin)} · Check-out: ${formatDate(checkout)}`,
      `Tamanho do grupo: ${grupo} pessoa${grupo === '1' ? '' : 's'}`,
      '',
      mensagem,
    ].join('\n');

  const enviar = (canal: 'whatsapp' | 'email') => {
    const texto = montarMensagem();
    if (canal === 'whatsapp') {
      window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
      return;
    }
    const assunto = encodeURIComponent(`Contato pelo site — ${nome || 'novo viajante'}`);
    window.location.href = `mailto:${SITE.email}?subject=${assunto}&body=${encodeURIComponent(texto)}`;
  };

  return (
    <Card
      as="section"
      surface="muted"
      radius="panelLg"
      padding="none"
      className="gap-6 px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="flex flex-col gap-2">
        <Heading as="h2" size="card" balance>
          Conte sobre a sua viagem.
        </Heading>
        <Text size="sm" tone="muted" pretty>
          Preencha e escolha por onde prefere continuar a conversa — respondemos com o roteiro
          ideal para o seu grupo.
        </Text>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          enviar('whatsapp');
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nome">
            <Input
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como podemos te chamar"
              autoComplete="name"
            />
          </Field>
          <Field label="E-mail">
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              autoComplete="email"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Telefone (WhatsApp)">
            <Input
              required
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="+55 75 99999-9999"
              autoComplete="tel"
            />
          </Field>
          <Field label="Tamanho do grupo" hint="Quantidade de pessoas, incluindo você.">
            <Input
              required
              type="number"
              min={1}
              max={30}
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
            />
          </Field>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 font-body text-sm text-content-secondary">
            Tipo de aventura
          </legend>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {AVENTURAS.map((item) => (
              <Checkbox
                key={item}
                label={item}
                checked={aventuras.includes(item)}
                onChange={() => toggleAventura(item)}
              />
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-3">
          <Text as="span" size="sm" tone="secondary">
            Como pretende chegar
          </Text>
          <SegmentedControl
            label="Como pretende chegar"
            options={[...CHEGADA]}
            value={chegada}
            onChange={setChegada}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Check-in" hint="Data de chegada.">
            <Input
              required
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </Field>
          <Field label="Check-out" hint="Previsão de partida.">
            <Input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
          </Field>
        </div>

        <Field label="Mensagem">
          <Textarea
            required
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Descreva aqui todas suas expectativas sobre a Chapada Diamantina, além de detalhes que julgue importante."
          />
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" arrow className="max-sm:w-full">
            Enviar pelo WhatsApp
          </Button>
          {/* type="button": não submete o form — só valida e abre o e-mail. */}
          <Button
            type="button"
            variant="outline"
            onClick={(event) => {
              if (!event.currentTarget.form?.reportValidity()) return;
              enviar('email');
            }}
            className="max-sm:w-full"
          >
            Enviar por e-mail
          </Button>
        </div>

        <Text size="xs" tone="subtle">
          Ao enviar, abrimos o WhatsApp ou o seu app de e-mail com a mensagem já preenchida.
        </Text>
      </form>
    </Card>
  );
}
