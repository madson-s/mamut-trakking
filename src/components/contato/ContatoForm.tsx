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
import { SITE, type Locale } from '@/lib/site';
import { CONTATO_CONTENT } from './contato-content';

function formatDate(iso: string, vazio: string) {
  if (!iso) return vazio;
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

/**
 * O site é estático (sem backend): em vez de um POST, o formulário monta a
 * mensagem e abre o canal escolhido — WhatsApp (o mesmo caminho do resto do
 * site) ou e-mail. A validação é a nativa do browser, via `required`.
 */
export function ContatoForm({ locale = 'pt' }: { locale?: Locale }) {
  const c = CONTATO_CONTENT[locale].form;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [aventuras, setAventuras] = useState<string[]>([]);
  const [chegada, setChegada] = useState(c.opcoesChegada[0].value);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [grupo, setGrupo] = useState('2');
  const [mensagem, setMensagem] = useState('');

  const toggleAventura = (item: string) => {
    setAventuras((atual) =>
      atual.includes(item) ? atual.filter((a) => a !== item) : [...atual, item],
    );
  };

  const montarMensagem = () => {
    const l = c.linhas;
    const chegadaLabel =
      c.opcoesChegada.find((opcao) => opcao.value === chegada)?.label ?? chegada;

    return [
      c.saudacao,
      '',
      `${l.nome}: ${nome}`,
      `${l.email}: ${email}`,
      `${l.telefone}: ${telefone}`,
      `${l.aventura}: ${aventuras.length ? aventuras.join(', ') : l.naoSei}`,
      `${l.chegada}: ${chegadaLabel}`,
      `${l.datas}: ${formatDate(checkin, l.aDefinir)} · Check-out: ${formatDate(checkout, l.aDefinir)}`,
      `${l.grupo}: ${grupo} ${grupo === '1' ? l.pessoa : l.pessoas}`,
      '',
      mensagem,
    ].join('\n');
  };

  const enviar = (canal: 'whatsapp' | 'email') => {
    const texto = montarMensagem();
    if (canal === 'whatsapp') {
      window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
      return;
    }
    const assunto = encodeURIComponent(`${c.assunto} — ${nome || c.semNome}`);
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
          {c.titulo}
        </Heading>
        <Text size="sm" tone="muted" pretty>
          {c.lead}
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
          <Field label={c.nome.label}>
            <Input
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder={c.nome.placeholder}
              autoComplete="name"
            />
          </Field>
          <Field label={c.email.label}>
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.email.placeholder}
              autoComplete="email"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={c.telefone.label}>
            <Input
              required
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder={c.telefone.placeholder}
              autoComplete="tel"
            />
          </Field>
          <Field label={c.grupo.label} hint={c.grupo.hint}>
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
            {c.aventuras}
          </legend>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {c.opcoesAventura.map((item) => (
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
            {c.chegada}
          </Text>
          <SegmentedControl
            label={c.chegada}
            options={c.opcoesChegada}
            value={chegada}
            onChange={setChegada}
            variant="chips"
            size="md"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={c.checkin.label} hint={c.checkin.hint}>
            <Input
              required
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </Field>
          <Field label={c.checkout.label} hint={c.checkout.hint}>
            <Input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
          </Field>
        </div>

        <Field label={c.mensagem.label}>
          <Textarea
            required
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder={c.mensagem.placeholder}
          />
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" arrow className="max-sm:w-full">
            {c.enviarWhatsapp}
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
            {c.enviarEmail}
          </Button>
        </div>

        <Text size="xs" tone="subtle">
          {c.nota}
        </Text>
      </form>
    </Card>
  );
}
